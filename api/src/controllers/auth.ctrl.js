import * as authServ from "../services/auth.service.js";

export async function login(req, res) {
  try {
    const result = await authServ.login(req);
    return res.status(200).json({ result, message: "" });
  } catch (e) {
    return res.status(400).json({ message: e.message || "Error" });
  }
}

export async function user(req, res) {
  try {
    // If `intialSetup` already attached `req.user`, return it directly.
    const result = req.user ? req.user : await authServ.user(req);
    return res.status(200).json({ result, message: "" });
  } catch (e) {
    return res.status(401).json({ message: e.message || "Error" });
  }
}
