import { DataTypes } from "sequelize";
import sequelize from "../sequelize.js";

const calendarEvents = sequelize.define(
  "calendarEvents",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    session_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
       references: {
        model: "academic_sessions",
        key: "id",
      },
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    event_type: {
        type: DataTypes.ENUM("holiday", "exam", "ptm", "vacation", "notice", "working_day"),
        allowNull: false
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    is_full_day: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    is_public: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    source: {
        type: DataTypes.ENUM('admin', 'imported'),
        defaultValue: 'admin'
    },
    source_ref_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
        model: "imported_holidays",
        key: "id",
      },
    },
    is_disabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    created_by: {
        type: DataTypes.BIGINT
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      onUpdate: DataTypes.NOW,
    },
    
  },
  {
    tableName: "events",
    timestamps: false,
  }
);

export default calendarEvents;
