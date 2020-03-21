const express = require('express');
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;

const users = require("./routes/api/users");
const hours = require("./routes/api/hours");
const categories = require("./routes/api/categories");
const businesses = require("./routes/api/businesses");
const groups = require("./routes/api/groups");
const foodRestrictions = require("./routes/api/foodRestrictions")
const User = require("./models/User");
const bodyParser = require('body-parser');

const passport = require("passport");
app.use(passport.initialize());
require("./config/passport")(passport);

app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

app.use(bodyParser.json());

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch(err => console.log(err));
  
// Setup the path
app.get("/", (req, res) => {
    res.send("This is a splash page!");
})

app.use("/api/users", users);
app.use("/api/hours", hours);
app.use("/api/categories", categories);
app.use("/api/businesses", businesses);
app.use("/api/groups", groups);
app.use("/api/foodRestrictions", foodRestrictions);

// Check the environmental variable port, if it exist, use it. Otherwise, use 5000 
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

