import { Router } from "express";
import * as userCtrl from "../controllers/user.ctrl.js";
import * as userMw from "../middlewares/user.mw.js";
const router = Router({ mergeParams: true });

router.get("/list/teacher", userCtrl.listTeachers);
router.get("/list/student", userCtrl.listStudents);
router.post("/save", userMw.vldSave, userCtrl.save);
router.delete("/del", userCtrl.del);

export default router;
