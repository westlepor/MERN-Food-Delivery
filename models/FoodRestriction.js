const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FoodRestrictionSchema = new Schema({
    restriction: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = FoodRestriction = mongoose.model("FoodRestriction", FoodRestrictionSchema)