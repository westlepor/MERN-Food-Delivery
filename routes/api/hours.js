const express = require("express");
const Hour = require('../../models/Hour');
const router = express.Router();

router.get("/", (req, res) => {
  Hour
    .find()
    .then(hours => {
      const hourObj = {};
      hours.map(hour => {
        hourObj[hour.id] = hour;
      });
      res.json(hourObj);
    })
    .catch(err => res.status(404).json({ nohoursfound: "No hours found" }));
});

router.get("/:id", (req, res) => {
  Hour
    .findById(req.params.id)
    .then(hour => res.json(hour))
    .catch(err => res.status(404).json({ nohoursfound: "No hour found with that id" }));
});

module.exports = router;
