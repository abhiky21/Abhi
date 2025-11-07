import { DataTypes } from "sequelize";
import sequelize from "../sequelize.js";
// import User from "./user.model.js";

const Parent = sequelize.define(
  "Parent",
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
    },
    class_of_child: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "parents",
    timestamps: false,
  }
);

// // Associations
// Parent.belongsTo(User, { foreignKey: "user_id", as: "user" });
// User.hasOne(Parent, { foreignKey: "user_id", as: "parent" });

export default Parent;
