const router = require("express").Router();
const mongoose = require("mongoose");

const Review = require("../models/Review.model")
const Game = require ("../models/Game.model")

router.post("/games", (req, res, next) => {
    const { userId, title, image, demo, category, instructions, description, gitHubLink, reviewId } = req.body

    const newGame = {
        user: userId, 
        title,
        image, 
        demo,
        category,
        instructions,
        description,
        gitHubLink,
        review: []
    }

    Game.create(newGame)
        .then(response => res.json(response))
        .catch(err => {
            console.log("Error creating new game :( ...", err);
            res.status(500).json({
            message: "We are sorry, we couldn't create your game",
        });
    });
});

module.exports = router;