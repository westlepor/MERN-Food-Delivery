const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HourSchema = new Schema({
    isOvernight: {
        type: Boolean,
        required: true
    },
    start: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    },
    day: {
        type: Number,
        required: true
    },
    businessId: {
        type: Schema.Types.ObjectId,
        ref: "businesses",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = Hour = mongoose.model("Hour", HourSchema);
