import { Router } from "express";
import UserRoute from "./user.js";
const router = Router();
// /api/v1/user...
router.use("/user", UserRoute);
export default router;
