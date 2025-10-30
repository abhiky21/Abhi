import { DataTypes } from "sequelize";
import sequelize from "../sequelize";
import User from "./user.model.js";

const Parent = sequelize.define("Parent", {
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
      key: "id",
    },
  },
  class_of_child: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
