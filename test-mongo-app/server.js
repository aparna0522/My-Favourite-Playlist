// server.js
const express = require("express");
const app = express();
const User = require("./src/User.model");
//const user_playlists=require("./src/Playlists.model")
const connectDb = require("./src/connection");
const PORT = 8080;

app.get("/users", async (req, res) => {
 const users = await User.find();
 res.send(users);
 // const playlists=await user_playlists.find();
	// res.json(playlists);
});

app.get("/user-create", async (req, res) => {
 const user = new User({ username: "Aparna" , playlist: "Arijit Singh"});
 await user.save().then(() => console.log("User Data Generated!!"));
 res.send("User Data Successfully Created!!!! \n");
 //const play=new user_playlists({playlists: "Arijit Singh"});
 //await play.save().then(()=>console.log("Playlist created"));
 //res.send("Playlist Created \n");
});

app.listen(PORT, function() {
 console.log('Listening on ${PORT}');
 connectDb().then(() => {
 console.log("MongoDb connected");
 });
});
