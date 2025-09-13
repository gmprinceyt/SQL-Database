import { Router } from "express";
import UserRoute from "./user.js";
import TodoRouter from "./todo.js";

const router = Router();

// /api/v1/user...
router.use("/user", UserRoute);
router.use("/todo", TodoRouter);

export default router;
