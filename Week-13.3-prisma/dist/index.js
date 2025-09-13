import express, {} from "express";
import { Connect } from "./db/prisma.js";
import Router from "./routes/index.js";
const app = express();
// Middlewares
app.use(express.json());
app.use("/api/v1", Router);
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
// Connection
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
