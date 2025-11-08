import fs from "fs/promises";
import sharp from "sharp";
import path from "path";
import multer from "multer";
import dayjs from "dayjs";
import { getEndPoint } from "./utils.js";

const allowedExtToUpload =
  "gif|jpg|jpeg|png|pdf|doc|xls|ppt|docx|xlsx|pptx|mp4|webp|mkv|avi|mov|blob".split("|");

export function getExt(filename) {
  let ext = /[^.]+$/.exec(filename);
  if (!ext) {
    return "";
  }
  ext = ext.toString();
  ext = ext.toLowerCase();
  return ext;
}

export function upFileUrl(path) {
  if (!path) return null;
  const url = `${getEndPoint()}${process.env.UP_PATH}/${path}`;
  return url;
}

export async function compressImage(itemPath, maxWidth = 1200, quality = 90) {
  try {
    const metadata = await sharp(itemPath).metadata();
  } catch (e) {
    console.log("image-compress-error", e);
  }
}
