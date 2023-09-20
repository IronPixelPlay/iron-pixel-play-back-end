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
    enum: ["action", "shooting", "adventure"],
  },

  instructions: String,

  description: String,

  gitHubLink: String,

  review: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});


const Game = model("Game", gameSchema);

module.exports = Game;