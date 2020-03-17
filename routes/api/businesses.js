const express = require("express");
const router = express.Router();
const Business = require("../../models/Business");
const validateBusinessInput = require("../../validation/business");

router.get("/test", (req,res) => {
  res.json({ msg: "This is the business route" });
});

router.get(


  "/:id",
  (req,res) => {
    Business.findById(req.params.id)
      .then(business => res.json(business))
      .catch(err => res.status(404).json({ nobusinessfound: "No business found with that Id"}))
  }
);

router.get(
  

  "/index",
  (req,res) => {
    Business.all
      .then(businesses => res.json(businesses))
      .catch(err => res.status(404).json({ nobusinessesfound: "Cannot Find Businesses" }))
  }
);

module.exports = router;