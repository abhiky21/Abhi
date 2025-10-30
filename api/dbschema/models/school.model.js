import { DataTypes } from "sequelize";
import sequelize from "../sequelize.js";

const School = sequelize.define(
  "School",
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
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contact_email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contact_phone: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    established_year: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    facilities: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  },
  {
    tableName: "schools",
    timestamps: false,
  }
);

export default School;
