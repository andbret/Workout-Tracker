const express = require("express");

const mongoose = require("mongoose");
const path = require("path");
const logger = require("morgan");


const app = express();

app.use(logger("dev"));

const Example = require("./exampleModel.js");
const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbExample", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

app.use(express.static("public"));

//API ROUTES
// POST /api/workouts
// PUT /api/workouts/id 
// GET /api/workouts/range

app.get("/", (req, res) => {
res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "public/stats.html"));
    });

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "public/exercise.html"));
    });    

app.listen(PORT, () =>{
    console.log(`App is running on htttp://localhost:${PORT}`);
} );

