const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const keys = require("../../config/keys");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const passport = require("passport");
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const fs = require("fs");

router.get("/", (req, res) => {
  User
    .find()
    .populate({ path: "foodRestriction", select: "restriction" })
    .exec(function (err, users) {
      if (err) return res.json(err);
      const userObj = {};
      users.map(user => {
        userObj[user.id] = user;
      });
      res.json(userObj);
    });
});


router.get("/seed", async (req, res) => {
  const arr = JSON.parse(fs.readFileSync("seed/users.json"));
  for (let i = 0; i < arr.length; i++) {
    arr[i].birthday = new Date(...arr[i].birthday.split("-"));
    let user = new User(arr[i]);

    await bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) throw err;
        user.password = hash;
        user.save();
      });
    });
  }

  User.find().then(users => {
    res.json(users);
  });
});

router.get("/deleteAll", async (req, res) => {
  User.deleteMany({}, function (err) {
    console.log("User collection removed");
    User.find().then(users => {
      res.json(users);
    });
  });
});

router.get("/:id", (req, res) => {
  User
    .findById(req.params.id)
    .populate({ path: "foodRestriction", select: "restriction" })
    .populate({ path: "groups" })
    .exec(function (err, user) {
      if (err) return res.status(404).json({ nouserfound: "No user found with that id" });
      res.json(user);
    });
});


router.post("/signup", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({
    email: req.body.email
  }).then(async (user) => {
    if (user) {
      return res
        .status(400)
        .json({ email: "A user is already registered with that email" });
    } else {

      const newUser = await new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        zipcode: req.body.zipcode,
        birthday: req.body.birthday,
        foodRestriction: req.body.selectedFoodRestrictions,
        monetaryRestriction: req.body.monetaryRestriction
      });

      await bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              const payload = {
                id: user.id,
                username: user.username,
                email: user.email,
                groups: user.groups
              };

              jwt.sign(
                payload,
                keys.secretOrKey,
                { expiresIn: 3600 },
                (err, token) => {
                  return res.json({
                    success: true,
                    token: "Bearer " + token
                  });
                }
              );
            }
            ).catch(err => console.log(err));
        });
      });
    }
  });
});

// STOP HERE
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email })
    .populate("groups")
    .exec(function (err, user) {
    if (err) return handleError(err);

    if (!user) {
      return res.status(404).json({ email: "The user with the email address does not exist." });
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = {
          id: user.id,
          handle: user.handle,
          email: user.email,
          username: user.username,
          groups: user.groups
        };

        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res.status(400).json({ password: "Incorrect password." });
      }
    });
  });
});

module.exports = router;
