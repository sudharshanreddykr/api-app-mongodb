const mongoose = require("mongoose");
const config = require("../config");

const uri = `mongodb://${config.DB_HOST}:${config.DB_PORT}`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

module.exports = db;
