import { DataTypes } from "sequelize";
import sequelize from "../sequelize.js";
import User from "./user.model.js";

const Teacher = sequelize.define("Users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: id,
    },
    onDelete: "CASCADE",
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  qualification: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  experience_year: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});
