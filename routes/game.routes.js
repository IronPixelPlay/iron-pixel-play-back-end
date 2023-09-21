const router = require("express").Router();
const mongoose = require("mongoose");

const Review = require("../models/Review.model")
const Game = require("../models/Game.model")

const { isAuthenticated } = require("../middleware/jwt.middleware");

router.post("/games", isAuthenticated, (req, res, next) => {
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
        review: [reviewId]
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

router.get("/games", isAuthenticated, (req, res, next) => {
    Game.find()
        .populate("review")
        .then(allGames => res.json(allGames))
        .catch((err) => {
            console.log("Error getting the list of games...", err);
            res.status(500).json({
                message: "We are sorry, we couldn't display the games",
            });
        });
})

router.get("/games/:gameId", (req, res, next) => {
    const { gameId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(gameId)) {
        res.status(400).json({ message: "Specified id is not valid" });
        return;
    }

    Game.findById(gameId)
        .populate("review")
        .then((game) => res.status(200).json(game))
        .catch((err) => {
            console.log("Error getting the user's game...", err);
            res.status(500).json({
                message: "We are sorry, we couldn't display your game",
            });
        });
});

module.exports = router;