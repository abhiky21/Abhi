import "dotenv/config";
import db from "../src/utils/db.js";
import { encryptPassword } from "../src/utils/utils.js";

async function addAdminUser() {
  const exists = await db("users").where({ type: "admin" }).first();
  if (exists) return;
  const data = {
    school_id: 1,
    name: "Admin",
    type: "admin",
    email: "admin@admin.com",
    password: encryptPassword("123456"),
  };
  await db("users").insert(data);
}

export default async function addInitialData() {
  try {
    await addAdminUser();
  } catch (err) {
    console.log("DB Connection Error:", err);
  } finally {
    await db.destroy();
  }
}
