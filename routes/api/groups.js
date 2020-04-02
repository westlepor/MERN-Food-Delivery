const express = require("express");
const router = express.Router();
const Group = require("../../models/Group");
const validateGroupInput = require("../../validation/group");
const _ = require('lodash');

router.get("/", (req, res) => {
  Group.find()
    .then(groups => {
      const groupObj = {};
      groups.map(group => {
        groupObj[group.id] = group;
      });
      res.json(groupObj);
    })
    .catch(err =>
      res.status(404).json({ nogroupsfound: "Cannot find groups" })
    );
});

router.get("/seed", async (req, res) => {
  let group = new Group(newGroup);
  await groups.save();

  Group.find().then(groups => {
    res.json(groups);
  });
});

router.get("/deleteAll", async (req, res) => {
  Group.deleteMany({}, function (err) {
    console.log("Group collection removed");
    Group.find().then(groups => {
      res.json(groups);
    });
  });
});

router.get("/:id", (req, res) => {
  Group.findById(req.params.id)
    .populate({ path: "businesses", populate: {
      path: "categories",
      model: "Category"
    }})
    .populate("users")
    .populate("creator")
    .populate("foodRestrictions")
    .exec(function (err, group) {
      if (err) return res.json(err);;
      return res.json(group);
    });
});

router.delete("/:id", (req, res) => {
  Group.findOneAndDelete(req.params.id)
    .then(group => {
      res.json(group);
    })
    .catch(err =>
      res.status(404).json({ nogroupfound: "Cannot delete the group" })
    );
});

router.post("/", async (req, res) => {
  const { errors, isValid } = validateGroupInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  
  const newGroup = new Group({
    groupName: req.body.groupName,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    users: req.body.users,
    creator: req.body.creator,
    foodRestrictions: req.body.foodRestrictions,
    monetaryRestriction: req.body.monetaryRestriction,
    businesses: req.body.businesses,
    likedBusinesses: req.body.likedBusinesses,
    dislikedBusinesses: req.body.dislikedBusinesses,
    isSplit: req.body.isSplit
  });

  const curUsers = req.body.users; //userid

  for (let i = 0; i < curUsers.length; i++){
    const curUser = curUsers[i];
    await User.findById(curUser).then( async (user)=>{
      user.groups.push(newGroup._id);
      await user.save();
    })
  }

  newGroup
    .save()
    .then(group => {
      const populatedGroup = group
        .populate({ path: "businesses", populate: {
          path: "categories",
          model: "Category"
        }})
        .populate("creator")
        .populate("users")
        .populate("foodRestrictions").execPopulate();
      populatedGroup.then(group => res.send(group));
    })
    .catch(err =>res.send(err));
});

router.put("/:id", async (req, res) => {
  
  const { errors, isValid } = validateGroupInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  Group.findOneAndUpdate({ _id: req.params.id }, req.body, { upsert: true }, function (err, group) {
    if (err) return res.status(500).json(err);

    const populatedGroup = group
      .populate({
        path: "businesses", populate: {
          path: "categories",
          model: "Category"
        }
      })
      .populate("creator")
      .populate("users")
      .populate("foodRestrictions").execPopulate();
    return populatedGroup.then(group => res.send(group));
  });
});

module.exports = router;
