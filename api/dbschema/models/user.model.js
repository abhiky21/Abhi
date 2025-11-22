import { DataTypes } from "sequelize";
import sequelize from "../sequelize.js";
// import School from "./school.model.js";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    school_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "schools",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("principal", "teacher", "parent", "student"),
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
      allowNull: true,
    },
    created: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
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
