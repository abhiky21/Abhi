import * as userServ from "../services/user.service.js";
import { pickValues, encryptPassword, trim } from "../utils/utils.js";

async function handleList(fn, req, res) {
  try {
    const result = await fn(req);
    res.status(200).json({ result, message: "" });
  } catch (e) {
    res.status(400).json({ message: e.message || "Error" });
  }
}

export const listTeachers = (req, res) => handleList(userServ.listTeachers, req, res);
export const listStudents = (req, res) => handleList(userServ.listStudents, req, res);

export async function save(req, res) {
  try {
    const { type: user_type } = req.user;
    if (user_type !== "principal") {
      throw new Error("You are not authorized");
    }
    const post = trim(req.body);
    const data = pickValues(post, [
      "id",
      "name",
      "type",
      "email",
      "mobile",
      "photo",
      "subject",
      "qualification",
      "experience_years",
      "class_of_child",
      "class_name",
    ]);
    if (post.password) {
      data.password = encryptPassword(post.password);
    }
    data.photo ||= null;

    let id;
    switch (data.type) {
      case "teacher":
        id = userServ.saveTeacher(data, req);
        break;
      case "parent":
        id = userServ.saveParent(data, req);
        break;
      case "student":
        id = userServ.saveStudent(data, req);
        break;
      default:
        throw new Error(`Invalid user type ${data.type}`);
    }
    const message = "Saved Successfully";
    return res.status(200).json({ result: { id }, message });
  } catch (e) {
    let msg = e.message || "Error! Try again.";
    if (e.code === "ERR_DUP_ENTRY" || e.errno === 1062) {
      msg = "Email already exists. Please use a different email address.";
    }
    return res.status(400).json({ message: msg });
  }
}

export async function del(req, res) {
  try {
    const { type: user_type } = req.user;
    if (user_type !== "principal") {
      throw new Error("You are not authorized");
    }
    const id = req.body.id;
    if (!id) {
      throw new Error("Invalid Request");
    }
    await userServ.del(id, req);
    return res.status(400).json({ message: "Deleted successfully" });
  } catch (e) {
    return res.status(400).json({ message: e.message || "Error" });
  }
}
