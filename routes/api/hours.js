const express = require("express");
const router = express.Router();
const Hour = require('../../models/Hour');

// hours index page route
router.get("/", async (req, res) => {
  // const newHour = await new Hour({
  //   isOvernight: true,
  //   start: "22:00",
  //   end: "22:30",
  //   day: 1,
  //   businessId: "5e6dcfeb8f74e14a9175e94a"
  // })
  // console.log(newHour);
  // await newHour.save();

    await Hour
      .find()
      .then(hours => res.json(hours))
      .catch(err => res.status(404).json({ nohoursfound: "No hours found" }));
});

// hours show page route
router.get("/:id", (req, res) => {
  Hour.findById(req.params.id)
    .then(hour => res.json(hour))
    .catch(err => res.status(404).json({ nohoursfound: "No hour found with that id" }));
});

module.exports = router;
