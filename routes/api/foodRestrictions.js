const express = require("express");
const router = express.Router();
const FoodRestriction = require("../../models/FoodRestriction");

router.get("/", async (req, res) => {

    // const curFRs = [
    //     "Milk / Lactose",
    //     "Egg",
    //     "Shellfish",
    //     "Peanut / Tree Nut",
    //     "Wheat(Gluten)",
    //     "Soybean",
    //     "Vegetarian Diet",
    //     "Vegan Diet"
    // ];

    // for(let i = 0; i < curFRs.length; i++){
    //     const newFR = await new FoodRestriction({ restriction: curFRs[i]})
    //     await newFR.save() 
    // }

    await FoodRestriction.find()
        .then(foodRestrictions => {
            const foodRestrictionObj = {};
            foodRestrictions.map(foodRestriction => {
                foodRestrictionObj[foodRestriction.id] = foodRestriction;
            });
            res.json(foodRestrictionObj);
        })
        .catch(err => res.status(404).json({ noFoodRestrictionsFound: "No food restrictions found" }));
});

router.get("/seed", async (req, res) => {
  
    //add drop db function here?
    
    const curFRs = [
        "Milk / Lactose",
        "Egg",
        "Shellfish",
        "Peanut / Tree Nut",
        "Wheat(Gluten)",
        "Soybean",
        "Vegetarian Diet",
        "Vegan Diet"
    ];
    for(let i = 0; i < curFRs.length; i++){
      let fr = new FoodRestriction(arr[i]);
      console.log(category);
      category.save();
    }
  
    Category.find()
      .then((categories)=>{
        res.json(categories);
    })
  });

router.get("/:id", (req, res) => {
    FoodRestriction.findById(req.params.id)
        .then(foodRestriction => res.json(foodRestriction))
        .catch(err =>
            res.status(404).json({ noFoodRestrictionFound: "No Food Restriction found with that id" })
        );
});

module.exports = router;

