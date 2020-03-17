const express = require("express");
const router = express.Router();
const Group = require("../../models/Group");
const validateGroupInput = require("../../validation/group")

router.post("/new", async (req,res) => {
  const {errors, isValid } = validateGroupInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newGroup = await new Group({
    groupName: req.body.groupName,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    users: req.body.users, 
    foodRestrictions: req.body.foodRestrictions,
    monetaryRestriction: req.body.monetaryRestriction,
    isSplit: req.body.isSplit
  });

  await newGroup
    .save()
    .then(group => res.send(group))
    .catch(err => res.send(err));
});

await router.get(
  "/current", (req,res) => {
    res.json({
      id: req.group.id,
      groupName: req.group.groupName,
      startTime: req.group.startTime,
      endTime: req.group.endTime,
      users: req.group.users,
      foodRestrictions: req.group.foodRestrictions,
      monetaryRestriction: req.group.monetaryRestriction,
      isSplit: req.group.isSplit
  });
});


// edit group

// delete group

router.delete("someroute", (req,res) => {
  Group.findOne({
    groupName: req.body.groupName
  }).then(group => {
    group.delete
  });
});