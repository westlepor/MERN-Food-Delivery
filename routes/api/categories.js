const express = require("express");
const router = express.Router();
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

router.get("/:id", (req, res) => {
  Category.findById(req.params.id)
    .then(category => res.json(category))
    .catch(err =>
      res.status(404).json({ nocategorysfound: "No category found with that id" })
    );
});

module.exports = router;
