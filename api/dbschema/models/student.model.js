import { DataTypes } from "sequelize";
import sequelize from "../sequelize.js";
// import User from "./user.model.js";

const Student = sequelize.define(
  "Student",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    roll_number: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
    class_name: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "students",
    timestamps: false,
  }
);

// // Associations
// Student.belongsTo(User, { foreignKey: "user_id", as: "user" });
// User.hasOne(Student, { foreignKey: "user_id", as: "student" });

export default Student;
