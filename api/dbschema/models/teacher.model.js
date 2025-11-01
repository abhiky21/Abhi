import { DataTypes } from "sequelize";
import sequelize from "../sequelize.js";
// import User from "./user.model.js";

const Teacher = sequelize.define(
  "Teacher",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    qualification: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    experience_years: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "teachers",
    timestamps: false,
  }
);

// // Associations
// Teacher.belongsTo(User, { foreignKey: "user_id", as: "user" });
// User.hasOne(Teacher, { foreignKey: "user_id", as: "teacher" });

export default Teacher;
