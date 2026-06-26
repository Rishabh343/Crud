import express from "express";
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  getEmployeeById,
  updateEmployee,
} from "../controllers/userController.js";
const router = express.Router();

router.post("/", createEmployee);
router.get("/", getEmployee);
router.get("/:id", getEmployeeById);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

export { router };
