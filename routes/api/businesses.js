const express = require("express");
const router = express.Router();
const Business = require("../../models/Business");

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

router.get("/seed", async (req, res) => {
  // add drop db function here?
  // Business.find().then((res)=>{
  //   res.delete()
  // })

  Business.remove({}, function(err) {
    console.log("Business collection removed");
  });

  const arr = JSON.parse(fs.readFileSync("seed/sf_businesses.json"));
  for (let i = 0; i < arr.length; i++) {
    const curBiz = arr[i];
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

    business.save();
  }

  Business.find().then(businesses => {
    res.json(businesses);
  });
});

router.get(
  "/:id",
  (req, res) => {
    Business.findById(req.params.id)
      .then(business => res.json(business))
      .catch(err => res.status(404).json({ nobusinessfound: "No business found with that id"}))
  }
);
module.exports = router;
