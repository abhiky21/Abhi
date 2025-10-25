import knex from "knex";
import dotenv from "dotenv";
import { copyObj, currentDT } from "./utils.js";

dotenv.config();

const knexConfig = {
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
  pool: {
    min: 0,
    max: 50,
    afterCreate: (conn, done) => {
      conn.query('SET sql_mode="";', (err) => {
        if (err) return done(err, conn);
        conn.query("SET NAMES utf8mb4;", (err) => done(err, conn));
      });
    },
  },
  acquireConnectionTimeout: 60 * 60 * 1000, // 1 hour
};

const db = knex(knexConfig);

export async function saveDb(
  tbl,
  data,
  usrIdNdDt = 0,
  req = null,
  trx = null,
  pkey = "id",
  debug = false
) {
  data = copyObj(data);
  const knexOb = trx || db;
  if (!pkey) pkey = "id";
  if (!data[pkey]) {
    if (usrIdNdDt > 0) {
      const dt = currentDT();
      data.created = dt;
      data.updated = dt;
      if (usrIdNdDt > 1) {
        const userId = req.user?.id || 0;
        data.created_by = userId;
        data.updated_by = userId;
      }
    }
    const ids = await knexOb(tbl).insert(data);
    return ids?.[0] || false;
  } else {
    if (usrIdNdDt > 0) {
      const dt = currentDT();
      data.updated = dt;
      if (usrIdNdDt > 1) {
        const userId = req.user?.id || 0;
        data.updated_by = userId;
      }
    }
    const id = data[pkey];
    delete data[pkey];

    if (debug) {
      const qry = knexOb(tbl)
        .where({ [pkey]: id })
        .update(data)
        .toString();
      console.log(qry);
      return true;
    }

    const success = await knexOb(tbl)
      .where({ [pkey]: id })
      .update(data);
    return success ? id : false;
  }
}

export async function deDb(tbl, cond, trx = null) {
  const knexOb = trx || db;
  return await knexOb(tbl).where(cond).del();
}

export async function updateBatchDb(tbl, data, identifier = "id", trx = null) {
  const knexOb = trx || db;
  if (!data || data.length === 0) return;
  const keys = Object.keys(data[0].filter((key) => key !== identifier));

  const updates = keys
    .map((key) => {
      const cases = data
        .map((row) => `WHEN ${identifier} = ? THEN ?`)
        .join(" ");
      return `${key} = CASE ${cases} END`;
    })
    .join(", ");

  // Collect all bindings (identifier + value for each row/key)
  const bindings = [];
  keys.forEach((key) => {
    data.forEach((row) => {
      bindings.push(row[identifier], row[key]);
    });
  });

  // Add identifier values for WHERE IN
  const idList = data.map((row) => row[identifier]);
  const whereIn = idList.map(() => "?").join(", ");
  bindings.push(...idList);

  const sql = `UPDATE ${tbl} SET ${updates} WHERE ${identifier} IN (${whereIn})`;

  await knexOb.raw(sql, bindings);
}

export async function pagedRowsDb(queryObj, p, ps, isSqlCalc = false) {
  p = p ? p * 1 : 1;
  ps = ps ? ps * 1 : 500;
  const limit = ps;
  const offset = limit * (p - 1);

  let totalCount = {};
  let result = [];

  if (!isSqlCalc) {
    totalCount = await queryObj
      .clone()
      .clearSelect()
      .clearOrder()
      .count("* as total")
      .first();
  }
  result = await queryObj.limit(limit).offset(offset);
  if (isSqlCalc) {
    const countResult = await db.raw("SELECT FOUND_ROWS() AS n"); //select SQL_CALC_FOUND_ROWS must be in query
    totalCount.total = countResult[0][0].n;
  }

  const page = {
    cur_page: p,
    page_size: ps,
    total_records: totalCount?.total,
    total: totalCount.length,
    start: offset,
  };

  return { data: result, page };
}

export default db;
