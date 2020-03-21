const express = require("express");
const router = express.Router();
const fs = require("fs");
const Category = require("../../models/Category");
// const arr = [
//   {
//     name: "3D Printing"
//   },
//   {
//     name: "Abruzzese"
//   },
//   {
//     name: "Absinthe Bars"
//   },
//   {
//     name: "Acai Bowls"
//   },
//   {
//     name: "Accessories"
//   },
//   {
//     name: "Accountants"
//   },
//   {
//     name: "Acne Treatment"
//   },
//   {
//     name: "Active Life"
//   }
// ];



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

  const arr = fs.readFile("../seed/categories.json", async (err, data) => {
    if (err) throw err;
    return JSON.parse(data);
  })

  // const arr = [
  //   {
  //     name: "3D Printing"
  //   }
  // ];

    for(let i = 0; i < arr.length; i++){
      console.log("hello")

      const category1 = await new Category({
        name: arr[i].name
      });
      
      console.log(category1);
      await category1.save();

      console.log("hello again")
    }

    await Category.find()
    .then((categories)=>{
      res.json(categories);
    })
});

  // console.log("hello")

  

  
  
// });

router.get("/:id", (req, res) => {
  Category.findById(req.params.id)
    .then(category => res.json(category))
    .catch(err =>
      res.status(404).json({ nocategorysfound: "No category found with that id" })
    );
});




module.exports = router;
