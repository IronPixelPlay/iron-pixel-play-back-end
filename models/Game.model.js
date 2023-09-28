const { Schema, model } = require("mongoose");

const gameSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  owner: {
    type: String
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
    enum: ["Action-Adventure", "Shooter", "Fighting", "Quiz&Trivia", "Other", "Strategy", "Sports&Racing", "Puzzle", "Not-Specified"],
  },
  instructions: String,
  description: String,
  gitHubLink: String,

},
{
  timestamps: true
});

const Game = model("Game", gameSchema);

module.exports = Game;