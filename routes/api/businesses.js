const express = require("express");
const router = express.Router();
const Business = require("../../models/Business");
const Category = require("../../models/Category");
const fs = require('fs');

router.get(
  "/",
  (req, res) => {
    Business.find()
      .limit(20)
      .populate({ path: "categories", select: "name" })
      .exec(function(err, businesses) {
        if (err) return res.json(err);
        const businessObj = {};
        businesses.map(business => {
          businessObj[business.id] = business;
        });
        res.json(businessObj);
      });
  }
);

router.get(
  "/coordinates",
  (req, res) => {
    const {_sw, _ne} = JSON.parse(req.query.bounds);
    const south = _sw.lng;
    const west = _sw.lat;
    const north = _ne.lng;
    const east = _ne.lat;

    Business.find({ longitude: { $gt: south, $lt: north }})
      .limit(20)
      .populate({ path: "categories", select: "name" })
      .exec(function (err, businesses) {
        if (err) return res.json(err);
        const businessObj = {};
        
        businesses.map(business => {
          if(business.latitude > west && business.latitude < east){
            businessObj[business.id] = business;
          }
        });
        res.json(businessObj);
      });

  }
);

router.get("/seed", async (req, res) => {
  const arr = JSON.parse(fs.readFileSync("seed/sf_businesses.json"));

  for (let i = 0; i < arr.length; i++) {
    const curBiz = arr[i];
    if (curBiz.price === "" || curBiz.phone === "") {
      continue;
    }

    let business = new Business({
      businessName: curBiz.business_name,
      yelpUrl: curBiz.url,
      latitude: curBiz.latitude,
      longitude: curBiz.longitude,
      categories: [],
      hours: curBiz.hours,
      phone: curBiz.phone,
      reviewCount: curBiz.review_count,
      price: curBiz.price,
      rating: curBiz.rating,
      zipcode: curBiz.zipcode,
      country: curBiz.country,
      state: curBiz.state,
      city: curBiz.city,
      address1: curBiz.address1,
      address2: curBiz.address2,
      address3: curBiz.address3,
      isClosed: curBiz.is_closed,
      photos: curBiz.photos
    });

    let curCategories = [];
    for (let j = 0; j < curBiz.categories.length; j++) {
      const curCate = curBiz.categories[j];
      await Category.findOne({ name: curCate }).then(res => {
        curCategories.push(res._id);
        // res.businesses.push(business._id);
        res.save();
      });
    }

    business["categories"] = curCategories;
    await business.save();
  }
  console.log("business data uploaded.")
  Business.find().then(businesses => {
    res.json(businesses);
  });
});

router.get("/deleteAll", async (req, res) => {
  Business.deleteMany({}, function (err) {
    console.log("Business collection removed");
    Business.find().then(businesses => {
      res.json(businesses);
    });
  });
})

router.get(
  "/:id",
  (req, res) => {
    Business.findById(req.params.id)
      .then(business => res.json(business))
      .catch(err => res.status(404).json({ nobusinessfound: "No business found with that id" }))
  }
);
module.exports = router;
