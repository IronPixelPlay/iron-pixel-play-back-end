const router = require("express").Router();
const mongoose = require("mongoose");

const User = require("../models/User.model")
const Review = require("../models/Review.model")
const Game = require("../models/Game.model")

const { isAuthenticated } = require("../middleware/jwt.middleware");

router.get("/user", isAuthenticated, (req, res) => {
    User.findById(req.payload._id)
        .then((user) => {
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            const userProfile = {
                name: user.name,
                games: user.games,
                reviews: user.reviews,
            };

            res.json(userProfile);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ message: "Server error" });
        });
});


module.exports = router;