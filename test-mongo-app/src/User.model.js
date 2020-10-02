// User.model.js
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
 username: {
 type: String,
 required: true,
 default: "Aparna",
 },
 playlist: {
 	type: String,
 	required: true,
 	default: "Arijit",
 }
});
const User = mongoose.model("User", userSchema);
module.exports = User;