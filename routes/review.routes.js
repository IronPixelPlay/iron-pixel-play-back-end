const router = require("express").Router();
const mongoose = require("mongoose");
 
const Review = require("../models/Review.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");

 
router.post("/games/:gameId/reviews", isAuthenticated, (req, res, next) => {

    const newReview = { 
    user: req.payload._id,
    owner: req.payload.image,
    game: req.params.gameId,
    title: req.body.title, 
    review: req.body.review, 
    rating: req.body.rating, 
    played: req.body.played, 
};
 
  Review.create(newReview)
    .then(response => res.json(response))
    .catch(err => {
        console.log("Error creating a review...", err);
        res.status(500).json({
            message: "We are sorry, we couldn't create your game",
        });
    });
});



router.get("/games/:gameId/reviews", (req, res, next) => {
  Review.find({game: req.params.gameId})
    .then((allReviews) => res.json(allReviews))
    .catch((err) => {
      console.log("Error getting the list of reviews...", err);
      res.status(500).json({
        message: "We are sorry, we couldn't display the reviews",
      });
    });
});

router.get("/games/:gameId/reviews/:reviewId", (req, res, next) => {
  const { reviewId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(reviewId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Review.findById(reviewId)
    .then((review) => res.status(200).json(review))
    .catch((err) => {
      console.log("Error getting the user's review...", err);
      res.status(500).json({
        message: "We are sorry, we couldn't display your review",
      });
    });
});
   
  
   
  router.put('/games/:gameId/reviews/:reviewId', (req, res, next) => {
    const { reviewId } = req.params;
   
    if (!mongoose.Types.ObjectId.isValid(reviewId)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
   
    Review.findByIdAndUpdate(reviewId, req.body, { new: true })
      .then((updatedReview) => res.json(updatedReview))
      .catch((err) => {
        console.log("Error updating the user's review...", err);
        res.status(500).json({
          message: "We are sorry, we couldn't update your review",
        });
      });
  });
   

  router.delete('/games/:gameId/reviews/:reviewId', (req, res, next) => {
    const { reviewId } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(reviewId)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
   
    Review.findByIdAndRemove(reviewId)
      .then(() => res.json({ message: `Your review was removed successfully.` }))
      .catch((err) => {
        console.log("Error deleting the user's review...", err);
        res.status(500).json({
          message: "We are sorry, we couldn't delete your review",
        });
      });
  });

  
 
module.exports = router;