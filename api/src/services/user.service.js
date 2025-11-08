import db, { saveDb, delDb } from "../utils/db.js";
import { trim } from "../utils/utils.js";
import { upFileUrl } from "../utils/file.util.js";

export async function listTeachers(req) {
  const { subject, k } = trim(req.query);
  const fields = [
    "u.id",
    "u.name",
    "u.email",
    "u.mobile",
    "u.photo",
    "t.subject",
    "t.qualification",
    "t.experience_years",
  ];

  const teachers = await db("teachers as t")
    .join("users as u", "u.id", "t.user_id")
    .select(fields)
    .where("u.type", "teacher")
    .where((qb) => {
      if (subject) qb.where("t.subject", subject);
      if (`${k || ""}`.length) {
        qb.where(function () {
          this.where("u.name", "like", `%${k}%`)
            .orWhere("u.email", "like", `%${k}%`)
            .orWhere("u.mobile", "like", `%${k}%`);
        });
      }
    })
    .orderBy("u.id");

  for (const t of teachers) t.photo_url = upFileUrl(t.photo);

  return teachers;
}

export async function listStudents(req) {
  const { class_name, k } = trim(req.query);
  const fields = ["u.id", "u.name", "u.email", "u.mobile", "u.photo", "s.class_name"];

  const students = await db("students as s")
    .join("users as u", "u.id", "s.user_id")
    .select(fields)
    .where("u.type", "student")
    .where((qb) => {
      if (class_name) qb.where("s.class_name", class_name);
      if (`${k || ""}`.length) {
        qb.where(function () {
          this.where("u.name", "like", `%${k}%`)
            .orWhere("u.email", "like", `%${k}%`)
            .orWhere("u.mobile", "like", `%${k}%`);
        });
      }
    })
    .orderBy("u.id");

  for (const s of students) s.photo_url = upFileUrl(s.photo);

  return students;
}

export async function saveTeacher(uData, tData, req) {
  const user_id = await saveDb("users", uData, 1);
  tData.user_id = user_id;
  return await saveDb("teachers", tData, 1);
}

export async function saveStudent(uData, sData, req) {
  const user_id = await saveDb("users", uData, 1);
  sData.user_id = user_id;
  return await saveDb("students", sData, 1);
}

export async function saveParent(uData, pData, req) {
  const user_id = await saveDb("users", uData, 1);
  pData.user_id = user_id;
  return await saveDb("parents", pData, 1);
}

export async function del(id, req) {
  return await delDb("users", { id });
}
