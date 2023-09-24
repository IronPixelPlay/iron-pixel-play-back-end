const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    game: {
        type: Schema.Types.ObjectId,
        ref: "Game"
    },
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    review: {
        type: String,
        required: [true, "Review is required"]
    },
    rating: {
        type: Number,
        minimum: 1,
        maximum: 5
    },
    played: {
        type: Boolean,
        default: false
    }

})


const Review = model("Review", reviewSchema);

module.exports = Review;