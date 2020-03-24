const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    groupName: {
        type: String,
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    foodRestrictions: [{
        type: Schema.Types.ObjectId,
        ref: "FoodRestriction"
    }],
    businesses: [{
        type: Schema.Types.ObjectId,
        ref: "Business"
    }],
    monetaryRestriction: {
        type: String
    },
    isSplit: {
        type: Boolean,
        default: true
    },
    votedBusinesses: {
        type: Object
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = Group = mongoose.model("Group", GroupSchema)
