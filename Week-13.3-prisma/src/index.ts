import express from "express";
import { Connect } from "./db/prisma.js";
const app = express();


app.get("/create", (req, res)=> [
    
])




// Connection Instance
const port = Number(process.env.SERVER_PORT) || 4000;
function Server() {
  try {
    Connect().then(() => {
      app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
      });
    });
  } catch (error) {
    console.log("Server Error", error);
  }
}
Server();
