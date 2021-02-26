const mongoose = require("mongoose");
const User = require("./User.model");
const connection = "mongodb+srv://aparna:projecteduhub@cluster0.7ktgy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const connectDb = () => {
 return mongoose.connect(connection);
};
module.exports = connectDb;