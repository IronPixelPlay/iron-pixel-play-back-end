const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    owner:{
        type: String
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
        required: [true, "Rating is required"],
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