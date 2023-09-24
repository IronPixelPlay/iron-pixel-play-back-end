const router = require("express").Router();
const mongoose = require("mongoose");

const User = require("../models/User.model")
const Review = require("../models/Review.model")
const Game = require("../models/Game.model")

const { isAuthenticated } = require("../middleware/jwt.middleware");


router.get("/user", isAuthenticated, async (req, res, next) => {
  const userId = req.payload._id;

  try {
    const userData = await User.findById(userId);
    const userGame = await Game.find({ user: userId });
    const userReviews = await Review.find({ user: userId });

    const profileInfo = {
      user: userData,
      game: userGame,
      reviews: userReviews,
    };

    res.json(profileInfo);
  } catch {
    (error) => {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    };
  }
});



router.get("/user/")


module.exports = router;