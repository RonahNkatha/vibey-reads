import sequelize from "../config/connection.js";
import VibesFactory from "./vibes.js";
import {MusicFactory} from "./music.js";
import BookFactory from "./bookshelf.js";
import {UserFactory} from "./user.js";

// Initialize models
const User = UserFactory(sequelize);
const Books = BookFactory(sequelize);
const Playlist = MusicFactory(sequelize);
const Vibe = VibesFactory(sequelize);

// Define associations
// User can have many Vibes
User.hasMany(Vibe, { foreignKey: "user_id" });
Vibe.belongsTo(User, { foreignKey: "user_id" });

// A Vibe HAS A Book, a playlist, and a user
Vibe.hasOne(Books, { foreignKey: "book_id" });
Vibe.hasOne(Playlist, { foreignKey: "music_id" });

// Books belongs to many vibes
Books.belongsTo(Vibe, { foreignKey: "book_id" });
// Music belongs to vibes
Playlist.belongsTo(Vibe, { foreignKey: "music_id" });
// User belongs to vibe
User.hasOne(Vibe, { foreignKey: "vibe_id" });

// Export the models
export { User, Books, Playlist, Vibe };
