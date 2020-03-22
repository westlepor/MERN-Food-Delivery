const express = require("express");
const router = express.Router();
const FoodRestriction = require("../../models/FoodRestriction");
const fs = require("fs");

router.get("/", (req, res) => {

    FoodRestriction.find()
        .then(foodRestrictions => {
            const foodRestrictionObj = {};
            foodRestrictions.map(foodRestriction => {
                foodRestrictionObj[foodRestriction.id] = foodRestriction;
            });
            res.json(foodRestrictionObj);
        })
        .catch(err => res.status(404).json({ noFoodRestrictionsFound: "No Food Restrictions found" }));
});

router.get("/seed", async (req, res) => {
    const arr = JSON.parse(fs.readFileSync("seed/foodRestrictions.json"));
    for (let i = 0; i < arr.length; i++) {
        let foodRestriction = new FoodRestriction(arr[i]);
        await foodRestriction.save();
    }
    console.log("Food restriction data uploaded.")
    FoodRestriction.find().then(foodRestrictions => {
        res.json(foodRestrictions);
    });
});

router.get("/deleteAll", async (req, res) => {
    FoodRestriction.deleteMany({}, function (err) {
        console.log("FoodRestriction collection removed");
        FoodRestriction.find().then(foodRestrictions => {
            res.json(foodRestrictions);
        });
    });
});

router.get("/:id", (req, res) => {
    FoodRestriction.findById(req.params.id)
        .then(foodRestriction => res.json(foodRestriction))
        .catch(err =>
            res.status(404).json({ noFoodRestrictionFound: "No Food Restriction found with that id" })
        );
});

module.exports = router;

