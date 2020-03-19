const express = require("express");
const router = express.Router();
const Group = require("../../models/Group");
const validateGroupInput = require("../../validation/group")

router.get("/", (req, res) => {
    Group.find()
      .then(groups => res.json(groups))
      .catch(err => res.status(404).json({ nogroupsfound: "Cannot find groups" }))
});

router.get(
  "/:id", (req, res) => {
    Group.find(req.params.id)
      .then(group => res.json(group))
      .catch(err =>
        res.status(404).json({ nogroupfound: "Cannot find the group" })
      );
  });

router.delete("/:id", (req,res) => {
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

router.put("/:id", async (req, res) => {
  Group.findOne({
    groupName: req.body.groupName
  }).then(group => {
    group.delete
  });

  const { errors, isValid } = validateGroupInput(req.body);
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

module.exports = router;
