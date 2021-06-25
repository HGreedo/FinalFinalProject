const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
app.use(express.static("client"));

// Add routes, both API and view
app.use(require('./routes/view.js'));
app.use(require('./routes/brandinfo'));
app.use(require('./routes/boutiqueinfo'));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/admin", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});