import { validationResult } from "express-validator";
import { decodeJwtToken } from "../utils/utils.js";
import * as authServ from "../services/auth.service.js";

export async function intialSetup(req, res, next) {
  req.sessionid = req.headers.sessionid;
  // Read Authorization header in a robust, case-insensitive way and
  // support formats like "Bearer <token>" or just the raw token.
  const authHeader = req.headers.authorization || (req.get && req.get("authorization"));
  let token = null;
  if (authHeader) {
    // If header is "Bearer <token>", take the second part; otherwise use whole header
    const parts = authHeader.split(" ").filter(Boolean);
    token = parts.length === 2 && /^Bearer$/i.test(parts[0]) ? parts[1] : authHeader;
  }
  const tokenData = token ? decodeJwtToken(token) : null;
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
