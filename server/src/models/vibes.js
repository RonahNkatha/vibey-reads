import { Model, DataTypes } from "sequelize";
import sequelize from "../config/connection.js";
import {User} from "./user.js"; // Import the User model directly
import {Book} from "./bookshelf.js"; // Import the Bookshelf model directly
import {Music} from "./music.js"; // Import the Music model directly

export class Vibes extends Model { }

export default function VibesFactory(sequelize) {
  Vibes.init(
    {
      vibe_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: User, // Reference the User model
          key: "id", // The user id field in Users
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      book_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Book, // Reference the Bookshelf model
          key: "book_id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      music_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Music, // Reference the Playlist model now
          key: "music_id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      underscored: true,
      freezeTableName: true,
    }
  );
  return Vibes;
}
