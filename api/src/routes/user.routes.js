import { Router } from "express";
import * as userCtrl from "../controllers/user.ctrl.js";
import * as userMw from "../middlewares/user.mw.js";
const router = Router({ mergeParams: true });

router.get("/list/teachers", userCtrl.listTeachers);
router.get("/list/students", userCtrl.listStudents);
router.post("/save", userMw.vldSave, userCtrl.save);
router.post("del", userCtrl.del);

export default Router;
