import { body } from "express-validator";
import { validationResponse } from "./validation.mw.js";

export const vldSave = [
  // Common fields
  body("type")
    .trim()
    .isIn(["teacher", "parent", "student"])
    .withMessage("Type must be teacher, parent, or student"),

  body("name").trim().notEmpty().withMessage("Name is required"),
  body("email").trim().isEmail().withMessage("Valid email is required"),
  body("mobile")
    .trim()
    .matches(/^[0-9]{10}$/)
    .withMessage("Valid 10-digit mobile number is required"),

  // Conditional fields based on type
  body().custom((value, { req }) => {
    const { type, subject, class_of_child, class_name } = req.body;

    if (type === "teacher" && !subject) {
      throw new Error("Subject is required for teacher");
    }
    if (type === "parent" && !class_of_child) {
      throw new Error("Class of child is required for parent");
    }
    if (type === "student" && !class_name) {
      throw new Error("Class name is required for student");
    }
    return true;
  }),

  validationResponse,
];
