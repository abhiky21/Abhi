import dayjs from "dayjs";
import crypto, { randomUUID } from "crypto";
import jwt from "jsonwebtoken";

export function getEndPoint() {
  const appPort = process.env.APP_PORT;
  const port = `${appPort}` === "80" ? `` : `:${appPort}`;
  const endpoint = `${process.env.APP_PROTOCOL}${process.env.APP_HOST}${port}/`;
  return endpoint;
}

export function currentDT() {
  return dayjs().format("YYYY-MM-DD HH:mm:ss");
}

export function createJwtToken(data, expiresIn = "24h") {
  return jwt.sign(data, process.env.SALT_KEY, { expiresIn });
}

export function decodeJwtToken(token) {
  if (!token) return false;
  try {
    return jwt.verify(token, process.env.SALT_KEY);
  } catch (e) {
    return false;
  }
}

export function md5Encode(str, salt = null) {
  if (!salt) {
    salt = process.env.SALT_KEY;
  }
  return md5(str + salt);
}

export function encryptPassword(str) {
  const hmac = crypto.createHmac("sha256", process.env.SALT_KEY_PASS);
  const hashedText = hmac.update(str).digest("hex");
  return hashedText;
}

export function uniqueId() {
  return randomUUID().replace("-", "").toUpperCase();
}

export function zeroPad(num, places) {
  return String(num).padStart(places, "0");
}

export function copyObj(obj) {
  return structuredClone(obj);
}

export function deepClone(obj) {
  if(obj === null || typeof obj !== "object") {
    return obj;
  }

  if(Array.isArray(obj)) {
    return obj.map(deepClone);
  }

  const copy = {};
  for(const key in obj) {
    copy[key] = deepClone(obj[key]);
  }
  return copy;
}

export function trim(obj) {
  if (typeof obj === "string") {
    return obj.trim();
  }

  if (typeof obj === "object") {
    const newObj = { ...obj };
    for (let i in newObj) {
      if (typeof newObj[i] === "string") {
        newObj[i] = newObj[i].trim();
      }
    }
    return newObj;
  }

  return obj;
}

export function pickValues(allData, keys) {
  const data = {};
  Object.keys(allData).forEach((k) => {
    if (keys.includes(k)) {
      data[k] = allData[k];
    }
  });
  return data;
}

export async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
