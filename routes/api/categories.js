const express = require("express");
const router = express.Router();
const Category = require("../../models/Category");

// Categorys index page route
router.get("/", async (req, res) => {
  await Category.find()
    .then(categories => res.json(categories))
    .catch(err => res.status(404).json({ nocategoriesfound: "No categories found" }));
});

// hours show page route
router.get("/:id", (req, res) => {
  Category.findById(req.params.id)
    .then(category => res.json(category))
    .catch(err =>
      res.status(404).json({ nocategorysfound: "No category found with that id" })
    );
});

module.exports = router;
