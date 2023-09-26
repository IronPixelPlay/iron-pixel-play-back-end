const router = require("express").Router();
const mongoose = require("mongoose");

const Review = require("../models/Review.model")
const Game = require("../models/Game.model")

const fileUploader = require("../config/cloudinary.config");

const { isAuthenticated } = require("../middleware/jwt.middleware");

router.post("/upload", fileUploader.single("image"), (req, res, next) => {
    console.log("file is: ", req.file)
    if (!req.file) {
        next(new Error("No file uploaded!"));
        return;
    }
    res.json({ fileUrl: req.file.path });
});

router.post("/games", isAuthenticated, (req, res, next) => {
    const { title, image, demo, category, instructions, description, gitHubLink } = req.body

    const newGame = {
        user: req.payload._id,
        title,
        image,
        demo,
        category,
        instructions,
        description,
        gitHubLink,
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

router.get("/games", (req, res, next) => {
    Game.find()
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
        .then((game) => res.status(200).json(game))
        .catch((err) => {
            console.log("Error getting the user's game...", err);
            res.status(500).json({
                message: "We are sorry, we couldn't display your game",
            });
        });
});

router.put("/games/:gameId/edit", (req, res, next) => {
    const { gameId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(gameId)) {
        res.status(400).json({ message: "Specified id is no valid" });
        return;
    }

    Game.findByIdAndUpdate(gameId, req.body, { new: true })
        .then((updateGame) => res.json(updateGame))
        .catch((err) => {
            console.log("Error updating the user's game...", err);
            res.status(500).json({
                message: "We are sorry, we couldn't update your game",
            });
        });
});

router.delete("/games/:gameId", (req, res, next) => {
    const { gameId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(gameId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }

    Game.findByIdAndRemove(gameId)
        .then(() => res.json({ message: `Your game was removed successfully.` }))
        .catch((err) => {
            console.log("Error deleting the user's game...", err);
            res.status(500).json({
                message: "We are sorry, we couldn't delete your game",
            });
        });
})

module.exports = router;