const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/view");
const routes1 = require("./routes/brandinfo");
const routes2 = require("./routes/boutiqueinfo");

const app = express();
const PORT = 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
app.use(express.static("client"));


// Connect to the Mongo DB
mongoose.connect("mongodb://localhost:27017/admin", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});


app.use(routes, routes1, routes2);
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});