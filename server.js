const express = require("express");

const mongoose = require("mongoose");
const path = require("path");
const logger = require("morgan");


const app = express();



const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//API ROUTES
require("./routes/api_routes.js")(app);
require("./routes/html_routes.js")(app);
app.listen(PORT, () =>{
    console.log(`App is running on http://localhost:${PORT}`);
} );

