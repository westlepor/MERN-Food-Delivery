const express = require("express");
const router = express.Router();
const Business = require("../../models/Business");

router.get(
  "/:id",
  (req, res) => {
    Business.findById(req.params.id)
      .then(business => res.json(business))
      .catch(err => res.status(404).json({ nobusinessfound: "No business found with that id"}))
  }
);

router.get(
  "/",
  (req, res) => {
    Business
      .find()
      .then(businesses => {
        const businessObj = {};
        businesses.map(business => {
          businessObj[business.id] = business;
        });
        res.json(businessObj);
      })
      .catch(err =>
        res.status(404).json({ nobusinessesfound: "Cannot find businesses" })
      );
  }
);

module.exports = router;
