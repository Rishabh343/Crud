import Employee from "../models/userModel.js";
import dotenv from "dotenv";
dotenv.config();

export const createEmployee = async (req, res) => {
  try {
    console.log(process.env.BASE_URL);
    const employee = await Employee.create({
      ...req.body,
      profileImage: req.file
        ? `${process.env.BASE_URL}/uploads/${req.file.filename}`
        : "",
    });

    res.status(201).json({
      success: true,
      data: employee,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getEmployee = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json({
      success: true,
      data: employees,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({
        message: "user not found",
      });
    }
    res.status(200).json({
      success: true,
      data: employee,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export const searchEmployees = async (req, res) => {
  try {
    const { name } = req.query;

    const employees = await Employee.find({
      fullName: {
        $regex: name,
        $options: "i",
      },
    });

    res.status(200).json({
      success: true,
      count: employees.length,
      data: employees,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const filterEmployees = async (req, res) => {
  try {
    const { department } = req.query;

    const employees = await Employee.find({
      department: {
        $regex: department,
        $options: "i",
      },
    });

    res.status(200).json({
      success: true,
      count: employees.length,
      data: employees,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }
    res.status(200).json({
      success: true,
      data: employee,
      message: "Employee updated",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).json({
        message: "Employee not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
