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
    users: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    foodRestrictions: {
        type: Schema.Types.ObjectId,
        ref: "foodRestrictions"
    },
    monetaryRestriction: {
        type: String
    },
    isSplit: {
        type: Boolean,
        // required: true,
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