const express = require("express");

const app = express();

const mongoose = require("mongoose");

const connectToMongo = async () =>{
    try {
        const MONGO_URI = "mongodb://127.0.0.1:27017"
        const connect = await mongoose.connect(MONGO_URI);

        console.log("connected to mongodb");
    } catch (error) {
        console.log("error connecting to mongodb", error);
        process.exit(1);
    }
}

connectToMongo();



