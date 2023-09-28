const router = require("express").Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
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


router.put('/user', isAuthenticated, (req, res, next) => {
  const userId = req.payload._id;

  const { email, password, name, image} = req.body
  const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!passwordRegex.test(password)) {
    res.status(400).json({
      message:
      "Password must have at least 6 characters and contain at least one number, one lowercase and one uppercase letter.",
    });
    return;
  }
  const salt = bcrypt.genSaltSync(12);
  const hashedPassword = bcrypt.hashSync(password, salt);
 
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
 
  User.findByIdAndUpdate(userId, {email, password: hashedPassword, name, image}, { new: true })
    .then((updatedProfile) => res.json(updatedProfile))
    .catch((err) => {
      console.log("Error updating the user's profile...", err);
      res.status(500).json({
        message: "We are sorry, we couldn't update your profile",
      });
    });
});



router.get("/user/:userId", isAuthenticated, async (req, res, next) => {
  const userId = req.params.userId;

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


module.exports = router;