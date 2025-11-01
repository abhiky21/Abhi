import "dotenv/config";
import db from "../src/utils/db.js";
import { encryptPassword } from "../src/utils/utils.js";

async function addDummySchool() {
  const exists = await db("schools").where({ name: "Dummy" }).first();
  if (exists) return exists.id;
  const data = {
    name: "Dummy",
    address: "Test Address",
    contact_email: "dummy@example.com",
    contact_phone: "0000000000",
    established_year: 2020,
    facilities: JSON.stringify({
      library: true,
      computer_lab: false,
      sports_ground: true,
      transport: true,
    }),
  };
  const [id] = await db("schools").insert(data);
  return id;
}

async function addAdminUser(school_id) {
  const exists = await db("users").where({ type: "principal" }).first();
  if (exists) return;
  const data = {
    school_id: school_id,
    name: "Principal",
    type: "principal",
    email: "principal@principal.com",
    password: encryptPassword("123456"),
  };
  await db("users").insert(data);
}

async function addTeacherUser(school_id) {
  const exists = await db("users").where({ type: "teacher" }).first();
  if (exists) return;
  const data = {
    school_id: school_id,
    name: "Teacher",
    type: "teacher",
    email: "teacher@teacher.com",
    password: encryptPassword("123456"),
  };

  const [user_id] = await db("users").insert(data);
  const teacherData = {
    user_id: user_id,
    subject: "Mathematics",
    qualification: "PHD",
    experience_years: 4,
  };
  await db("teachers").insert(teacherData);
}

async function addParentUser(school_id) {
  const exists = await db("users").where({ type: "parent" }).first();
  if (exists) return;
  const data = {
    school_id: school_id,
    name: "Parent",
    type: "parent",
    email: "parent@parent.com",
    password: encryptPassword("123456"),
  };

  const [user_id] = await db("users").insert(data);
  const parentData = {
    user_id: user_id,
    class_of_child: 4,
  };
  await db("parents").insert(parentData);
}

async function addStudentUser(school_id) {
  const exists = await db("users").where({ type: "student" }).first();
  if (exists) return;
  const data = {
    school_id: school_id,
    name: "Student",
    type: "student",
    email: "student@student.com",
    password: encryptPassword("123456"),
  };

  const [user_id] = await db("users").insert(data);
  const studentData = {
    user_id: user_id,
    class: 7,
  };
  await db("students").insert(studentData);
}

export default async function addInitialData() {
  try {
    const school_id = await addDummySchool();
    await addAdminUser(school_id);
    await addTeacherUser(school_id);
    await addParentUser(school_id);
    await addStudentUser(school_id);
  } catch (err) {
    console.log("DB Connection Error:", err);
  } finally {
    await db.destroy();
  }
}
