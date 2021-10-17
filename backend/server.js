const express = require("express");
const mongoose = require("mongoose");
const postRoutes = require("./router/taskRoute");
const cors = require("cors");
const bodyParser = require("body-parser");
const App = express();
App.listen(32303);

//Database Connection

mongoose
  .connect(
    "mongodb+srv://ahmadkhan:ahmadkhan@nodeapi.kyszv.mongodb.net/NodeDB?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB Connected Successfully!"))
  .catch((err) => console.log(err));

//Application
App.use(cors());
App.use(express.json());
App.use(bodyParser.json());
App.use("/", postRoutes);
