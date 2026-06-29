import express from "express";
import { router } from "./routes/userRoutes.js";
import cors from "cors";
const app = express();

import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
dotenv.config();
connectDB();
const Port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
app.use("/api/employee", router);
app.use("/uploads", express.static("uploads"));
app.get("/", (req, res) => {
  res.send("Employee API is running...");
});
app.listen(Port, () => {
  console.log("Server is connected");
});
