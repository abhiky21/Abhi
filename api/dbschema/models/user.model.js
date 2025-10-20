import { DataTypes } from "sequelize";
import sequelize from "../sequelize.js";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("admin", "teacher", "student"),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created: {
      type: DataTypes.DATE,
    },
    updated: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "users",
    timestamps: false,
    indexes: [
      {
        unique: true,
        fields: ["email"],
        name: "email_unique",
      },
    ],
  }
);

export default User;
