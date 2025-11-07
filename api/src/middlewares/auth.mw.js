import { validationResult } from "express-validator";
import { decodeJwtToken } from "../utils/utils.js";
import * as authServ from "../services/auth.service.js";

export async function intialSetup(req, res, next) {
  req.sessionid = req.headers.sessionid;
  const token = req.headers.authorization;
  const tokenData = token ? decodeJwtToken(token.replace("Bearer ", "")) : null;
  req.user = null;

  if (tokenData) {
    req.tokenData = tokenData;
    try {
      req.user = await authServ.user(req);
    } catch (err) {
      return res.status(403).json({ message: err.message });
    }
  }
  next();
}

export async function validateToken(req, res, next) {
  if (!req.user) {
    return res.status(403).json({ message: "Authorization failed" });
  } else {
    next();
  }
}
