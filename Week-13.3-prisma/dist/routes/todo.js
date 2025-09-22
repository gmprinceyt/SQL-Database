import { Router, } from "express";
import { prisma } from "../db/prisma.js";
import { Auth } from "../middleware/auth.js";
const TodoRouter = Router();
TodoRouter.post("/craete", Auth, async (req, res, next) => {
    const { title, description } = req.body;
    if (!title) {
        return next(new Error("title Field Required"));
    }
    const id = req.user?.id;
    if (!id)
        return next(new Error("Authentication failed"));
    try {
        const todo = await prisma.todo.create({
            data: {
                title,
                description,
                user: { connect: { id } },
            },
        });
        res.status(200).json({
            todo,
            message: "Create Successfully ✅",
        });
    }
    catch (error) { }
});
TodoRouter.delete("/delete/:id", Auth, async (req, res, next) => {
    const { id } = req.params;
    if (!id) {
        return next(new Error("id Required"));
    }
    const user_id = req.user?.id;
    if (!user_id)
        return next(new Error("Authentication failed"));
    try {
        const todoId = await prisma.todo.delete({
            where: { user_id, id: Number(id) },
            select: { id: true },
        });
        res.status(200).json({
            todoId,
            message: "Delete Successfully ✅",
        });
    }
    catch (error) {
        next(error);
    }
});
TodoRouter.patch("/update/:id", Auth, async (req, res, next) => {
    const { title, description, done } = req.body;
    const id = Number(req.params.id);
    if (!id) {
        return next(new Error("id Required"));
    }
    if (!title || !description || !done) {
        return next(new Error("Fields Required"));
    }
    try {
        const todoId = await prisma.todo.update({
            data: {
                title,
                description,
                done,
            },
            where: {
                id,
            },
        });
        res.status(200).json({
            todoId,
            message: "Delete Successfully ✅",
        });
    }
    catch (error) {
        next(error);
    }
});
TodoRouter.post("/get-all", Auth, async (req, res, next) => {
    const user_id = req.user?.id;
    if (!user_id)
        return next(new Error("Authentication failed"));
    try {
        const todo = await prisma.todo.findMany({
            where: { user_id }
        });
        res.status(200).json({
            todo,
            message: "Create Successfully ✅",
        });
    }
    catch (error) { }
});
export default TodoRouter;
