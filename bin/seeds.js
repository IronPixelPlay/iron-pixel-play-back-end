const mongoose = require('mongoose');

const Game = require('../models/Game.model')
const Review = require('../models/Review.model')

require('dotenv').config(); // import and configure dotenv (loads environment variables from .env file)


const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/iron-pixel-play-back-end';

const games = [
  {
    "user": "64f5dbafba8c17cead1fb58e",
    "title": "TriviaDos Sprint",
    "image": "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-02/trivia-questions-21f6f1.jpg",
    "demo": "https://monasv.github.io/Thats-right-the-game",
    "category": "Trivia",
    "instructions": "Have fun!!",
    "description": "A trivia game about general topics and a bonus of JavaScript!",
    "gitHubLink": "https://github.com/MonASV/Thats-right-the-game",
    "review": [],
  },

  {
    "user": "64f5dbafba8c17cead1fb58e",
    "title": "~~~ Save the Titanic ~~~",
    "image": "https://www.cruisehive.com/wp-content/uploads/2022/11/titanic5-696x392.jpg",
    "demo": "https://johges.github.io/Save-the-Titanic/",
    "category": "Adventure",
    "instructions": "Use the arrow keys up and down to manoeuvre the ship and avoid the obstacles or hit the coal islands. The arrow key right will accelerate the Titanic for a few seconds.",
    "description": "Let us rewrite history. You are the captain of the legendary Titanic. Your aim? You want to manoeuvre the Titanic and all its passengers safely and quickly to New York.",
    "gitHubLink": "https://github.com/johges/Save-the-Titanic",
    "review": [],
  },
  
]

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);

    return Game.deleteMany({}); //WARNING: this will delete all games in your DB !!
  })
  .then((response) => {
    console.log(response);

    return Game.insertMany(games);
  })
  .then(gamesFromDB => {
    console.log(`Created ${gamesFromDB.length} games`);

    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error connecting to DB: ", err);
  });


