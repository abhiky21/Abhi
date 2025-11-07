import { Router } from "express";
import * as authCtrl from "../controllers/auth.ctrl.js";

const router = Router({ mergeParams: true });

router.post("/login", authCtrl.login);
router.get("/user", authCtrl.user);

export default router;
