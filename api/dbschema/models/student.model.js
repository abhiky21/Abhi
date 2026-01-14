import { DataTypes } from "sequelize";
import sequelize from "../sequelize.js";

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
    class_name: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "students",
    timestamps: false,
    indexes: [
      {
        unique: true,
        fields: ["roll_number"],
        name: "roll_number_unique",
      },
    ],
  }
);

export default Student;
