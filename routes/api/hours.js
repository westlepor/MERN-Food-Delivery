const express = require("express");
const router = express.Router();
const passport = require("passport");
const Hour = require('../../models/Hour');

// const bcrypt = require("bcryptjs");
// const keys = require("../../config/keys");
// const jwt = require("jsonwebtoken");
// const User = require("../../models/User");

const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

router.get("/", (req, res) => {
    const newHour = new Hour({
        isOvernight: true,
        start: "1100",
        end: "23:00",
        day: 0,
        businessId: "5e6dcfeb8f74e14a9175e94a"
    })
    newHour.save();
    
    Hour.find()
        .then(hours => res.json(hours))
        .catch(err => res.status(404).json({ nohoursfound: "No hours found" }));
});


// router.get("/businesses/:business_id", (req, res) => {
//     Hour.find({ business: req.params.business_id })
//         .then(hours => res.json(hours))
//         .catch(err =>
//             res.status(404).json({ nohoursfound: "No hours found from that business" })
//         );
// });

module.exports = router;
