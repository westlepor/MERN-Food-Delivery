const express = require("express");
const router = express.Router();
const db = require("../../config/keys").mongoURI;
const fs = require("fs");
const Category = require("../../models/Category");

router.get("/", (req, res) => {
  Category.find()
    .then(categories => {
      const categoryObj = {};
      categories.map(category => {
        categoryObj[category.id] = category;
      });
      res.json(categoryObj);
    })
    .catch(err => res.status(404).json({ nocategoriesfound: "No categories found" }));
});


router.get("/seed", async (req, res) => {
  
  // add drop db function here?
  const arr = JSON.parse(fs.readFileSync("seed/categories.json"));
  for(let i = 0; i < arr.length; i++){
    let category = new Category(arr[i]);
    category.save();
  }

  Category.find()
    .then((categories)=>{
      res.json(categories);
  })
});

router.get("/:id", (req, res) => {
  Category.findById(req.params.id)
    .then(category => res.json(category))
    .catch(err =>
      res.status(404).json({ nocategorysfound: "No category found with that id" })
    );
});




module.exports = router;
