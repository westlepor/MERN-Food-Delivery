const express = require("express");
const router = express.Router();
const Group = require("../../models/Group");
const validateGroupInput = require("../../validation/group");

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

  // var dt = new Date();
  // dt.setHours(dt.getHours() + 2);

  // let newGroup = {
  //   groupName: "firstMatch",
  //   startTime: new Date(), 
  //   endTime: dt,
  //   users: ["5e76d6f78ea8ea572008161b", "5e76d6f78ea8ea572008161e"],
  //   foodRestrictions: ["5e76c1bc81306b4c825bf208", "5e76c1bc81306b4c825bf209"],
  //   monetaryRestriction: "$$",
  //   isSplit: true,
  //   votedBusinesses: {
  //     "5e76c0146513aa4aaf0cbe55": 0,
  //   }
  // };

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
    .populate("foodRestrictions")
    .exec(function (err, group) {
      if (err) return res.json(err);;
      res.json(group);
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
        .populate("users")
        .populate("foodRestrictions").execPopulate();
      populatedGroup.then(group => res.send(group));
    })
    .catch(err =>res.send(err));
});

router.put("/:id", async (req, res) => {
  Group.findOne({
    groupName: req.body.groupName
  }).then(group => {
    group.delete;
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
    businesses: req.body.businesses,
    likedBusinesses: req.body.likedBusinesses,
    dislikedBusinesses: req.body.dislikedBusinesses,
    isSplit: req.body.isSplit
  });

  await newGroup
    .save()
    .then(group => res.send(group))
    .catch(err => res.send(err));
});

module.exports = router;
