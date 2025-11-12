import db from "../utils/db.js";
import { encryptPassword, createJwtToken, currentDT } from "../utils/utils.js";
import { upFileUrl } from "../utils/file.util.js";

export async function login(req) {
  const { email, password } = req.body;
  const fields = ["id", "name", "type", "email", "password"];
  const udtl = await db("users").select(fields).where("email", email).first();
  if (!udtl) {
    throw new Error("Invalid username or password");
  }

  const pass = encryptPassword(password);
  if (udtl.password !== pass) {
    throw new Error("Invalid username or password");
  }

  const token = createJwtToken({
    id: udtl.id,
    created: currentDT(),
  });

  delete udtl.password;
  return { token, user: udtl };
}

export async function user(req) {
  const { id } = req.tokenData || {};
  const fields = ["id", "name", "type", "mobile", "email", "photo"];
  const udtl = await db("users")
    .select(fields)
    .where("id", id || 0)
    .first();
  if (!udtl) {
    throw new Error("User not authenticated");
  }
  udtl.photo_url = upFileUrl(udtl.photo);
  async function attachUserDetails(udtl) {
    const tableMap = {
      teacher: {
        table: "teachers",
        fields: ["subject", "qualification", "experience_years"],
      },
      parent: {
        table: "parents",
        fields: ["class_of_child"],
      },
      student: {
        table: "students",
        fields: ["roll_number", "class_name"],
      },
    };

    const cfg = tableMap[udtl.type];
    if (!cfg) throw new Error("User not authenticated");

    const data = await db(cfg.table).select(cfg.fields).where("user_id", udtl.id).first();

    if (!data) throw new Error(`No ${udtl.type} record found for user ${udtl.id}`);

    Object.assign(udtl, data);
  }

  await attachUserDetails(udtl);
  return udtl;
}
