import express, {} from "express";
import { Connect, prisma } from "./db/prisma.js";
const app = express();
app.use(express.json());
// Craete Users
app.post("/user/create", async (req, res, next) => {
    try {
        // Vailidation Check ?
        const { email, firstName, password, lastName } = req.body;
        // Check Existing User;
        const IsExistUser = await prisma.user.findUnique({
            where: { email },
            select: { id: true }
        });
        if (IsExistUser) {
            return next(new Error("User Allready Exsited!"));
        }
        const user = await prisma.user.create({
            data: {
                email,
                password,
                firstName,
                lastName,
            },
            select: {
                email: true,
                firstName: true,
            },
        });
        res.status(201).json({
            message: "User Created",
            user,
        });
    }
    catch (error) {
        next(error);
    }
});
// Global Middleware for Errors
app.use((err, req, res, next) => {
    try {
        const message = err.message || "Something Went Wrong";
        res.status(500).json({
            message,
            err,
        });
    }
    catch (error) {
        console.log(error);
    }
});
// Connection Instance
const port = Number(process.env.SERVER_PORT) || 4000;
function Server() {
    try {
        Connect().then(() => {
            app.listen(port, () => {
                console.log(`Server started at http://localhost:${port}`);
            });
        });
    }
    catch (error) {
        console.log("Server Error", error);
    }
}
Server();
