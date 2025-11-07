import { Router } from "express";
import { intialSetup, validateToken } from "../middlewares/auth.mw.js";
import authroutes from "./auth.routes.js";
import userRoutes from "./user.routes.js";
const router = Router({ mergeParams: true });
router.use(intialSetup);

/** Auth routes */
router.use("/auth", authroutes);

/** Token authentication */
router.use(validateToken);

/** Private routes */
router.use("/user", userRoutes);

export default router;
