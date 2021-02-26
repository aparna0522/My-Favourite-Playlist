// server.js
const express = require("express");
const app = express();
const connectDb = require("./src/connection");
const User = require("./src/User.model");
const PORT = 8000;

app.get("/", (req, res) => {
    res.send("Go to http://localhost:8000/users to get all the usernames and http://localhost:8000/user-create to create a new user. \n");
});

app.get("/users", async (req, res) => {
    const users = await User.find();
    res.send(users);
});

app.get("/user-create", async (req, res) => {
    const user = new User({ username: "Aparna Naik", playlist: "Arijit Singh" });
    await user.save().then(() => console.log("User created"));
    res.send("User created \n");
});

app.listen(PORT, function() {
    console.log(`Listening on ${PORT}`);
    connectDb().then(() => {
    console.log("MongoDb connected");
    });
});