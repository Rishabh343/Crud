import express from "express";
import {
  createEmployee,
  deleteEmployee,
  filterEmployees,
  getEmployee,
  getEmployeeById,
  searchEmployees,
  updateEmployee,
} from "../controllers/userController.js";
import upload from "../middlewares/upload.js";
const router = express.Router();

router.post("/", upload.single("profileImage"), createEmployee);
router.get("/", getEmployee);
router.get("/search", searchEmployees);
router.get("/filter", filterEmployees);
router.get("/:id", getEmployeeById);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

export { router };
