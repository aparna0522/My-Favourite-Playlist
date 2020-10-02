// User.model.js
const mongoose = require("mongoose");
const playlistSchema = new mongoose.Schema({
 user_playlist: {
 type: String
 }
});
const user_playlists = mongoose.model("Playlist:", playlistSchema);
module.exports = user_playlists;