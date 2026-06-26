import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    phoneNumber: { type: String, required: true, trim: true },
    department: {
      type: String,
      required: true,
      trim: true,
      enum: { values: ["Engineering", "Sales", "Marketing", "HR"] },
    },
    designation: { type: String, required: true, trim: true },
    salary: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      immutable: true,
    },
  },
  { timestamps: true },
);
const Employee = mongoose.model("Employee", userSchema);

export default Employee;
