const { Schema, model } = require("mongoose");

const gameSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  image: String,
  demo: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["Action", "Shooting", "Adventure", "Trivia", "Not Specified"],
  },
  instructions: String,
  description: String,
  gitHubLink: String,
  // reviews: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Review",
  //   },
  // ],
},
{
  timestamps: true
});

const Game = model("Game", gameSchema);

module.exports = Game;