import express from "express";
import { router } from "./routes/userRoutes.js";
const app = express();
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
dotenv.config();
connectDB();
const Port = process.env.PORT || 5000;
app.use(express.json());

app.use("/api/employee", router);

app.listen(Port, () => {
  console.log("Server is connected");
});
