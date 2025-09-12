import express from "express";
import { Connect } from "./db/prisma.js";
const app = express();
app.get("/", (req, res) => [
    res.json("hello ")
]);
// Connection Instance
const port = process.env.SERVER_PORT || 4000;
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
