const mongoose = require("mongoose");
const User = require("./User.model");
const connection = "<CONNECTION_STRING_FOR_THE_CLUSTER>";
const connectDb = () => {
 return mongoose.connect(connection);
};
module.exports = connectDb;
