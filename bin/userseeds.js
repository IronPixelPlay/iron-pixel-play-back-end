const mongoose = require('mongoose');

const User = require('../models/User.model')

require('dotenv').config(); // import and configure dotenv (loads environment variables from .env file)


const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/iron-pixel-play-back-end';

const users = [
  {
    "name": "Cédric",
    "email": "Cedric@world.com",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695919404/iron-pixel-play/lw1nu7cuydkchgrmfx16.jpg",
    "password": "123456aA"
  },

  {
    "name": "Carolin",
    "email": "Carolin@world.com",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695919404/iron-pixel-play/lw1nu7cuydkchgrmfx16.jpg",
    "password": "123456aA"
  },

  {
    "name": "Emilio",
    "email": "Emilio@world.com",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695919404/iron-pixel-play/lw1nu7cuydkchgrmfx16.jpg",
    "password": "123456aA"
  },

  {
    "name": "Djamel",
    "email": "Djamel@world.com",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695919404/iron-pixel-play/lw1nu7cuydkchgrmfx16.jpg",
    "password": "123456aA"
  },

  {
    "name": "Emily",
    "email": "Emily@world.com",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695919404/iron-pixel-play/lw1nu7cuydkchgrmfx16.jpg",
    "password": "123456aA"
  },

  {
    "name": "Gokce",
    "email": "Gokce@world.com",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695919404/iron-pixel-play/lw1nu7cuydkchgrmfx16.jpg",
    "password": "123456aA"
  },

  {
    "name": "Fabio",
    "email": "Fabio@world.com",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695919404/iron-pixel-play/lw1nu7cuydkchgrmfx16.jpg",
    "password": "123456aA"
  },

  {
    "name": "Nuno",
    "email": "Nuno@world.com",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695919404/iron-pixel-play/lw1nu7cuydkchgrmfx16.jpg",
    "password": "123456aA"
  },

  {
    "name": "Filipe",
    "email": "Filipe@world.com",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695919404/iron-pixel-play/lw1nu7cuydkchgrmfx16.jpg",
    "password": "123456aA"
  },

  {
    "name": "Nishtha",
    "email": "Nishtha@world.com",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695919404/iron-pixel-play/lw1nu7cuydkchgrmfx16.jpg",
    "password": "123456aA"
  },

  {
    "name": "Lucas",
    "email": "Lucas@world.com",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695919404/iron-pixel-play/lw1nu7cuydkchgrmfx16.jpg",
    "password": "123456aA"
  },

  {
    "name": "Greg",
    "email": "Greg@world.com",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695919404/iron-pixel-play/lw1nu7cuydkchgrmfx16.jpg",
    "password": "123456aA"
  },

  {
    "name": "Jeremy",
    "email": "Jeremy@world.com",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695919404/iron-pixel-play/lw1nu7cuydkchgrmfx16.jpg",
    "password": "123456aA"
  },

  {
    "name": "Eirik",
    "email": "Eirik@world.com",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695919404/iron-pixel-play/lw1nu7cuydkchgrmfx16.jpg",
    "password": "123456aA"
  },

  {
    "name": "Paula",
    "email": "Paula@world.com",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695919404/iron-pixel-play/lw1nu7cuydkchgrmfx16.jpg",
    "password": "123456aA"
  },

  {
    "name": "Linh",
    "email": "Linh@world.com",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695919404/iron-pixel-play/lw1nu7cuydkchgrmfx16.jpg",
    "password": "123456aA"
  },

  {
    "name": "Maria",
    "email": "Maria@world.com",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695919404/iron-pixel-play/lw1nu7cuydkchgrmfx16.jpg",
    "password": "123456aA"
  },

  {
    "name": "Pierre",
    "email": "Pierre@world.com",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695919404/iron-pixel-play/lw1nu7cuydkchgrmfx16.jpg",
    "password": "123456aA"
  },

  {
    "name": "Marco",
    "email": "Marco@world.com",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695919404/iron-pixel-play/lw1nu7cuydkchgrmfx16.jpg",
    "password": "123456aA"
  },

  {
    "name": "Pedro",
    "email": "Pedro@world.com",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695919404/iron-pixel-play/lw1nu7cuydkchgrmfx16.jpg",
    "password": "123456aA"
  },

  {
    "name": "João",
    "email": "Joao@world.com",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695919404/iron-pixel-play/lw1nu7cuydkchgrmfx16.jpg",
    "password": "123456aA"
  },

  {
    "name": "Viktor",
    "email": "Viktor@world.com",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695919404/iron-pixel-play/lw1nu7cuydkchgrmfx16.jpg",
    "password": "123456aA"
  },

  {
    "name": "Juan",
    "email": "Juan@world.com",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695919404/iron-pixel-play/lw1nu7cuydkchgrmfx16.jpg",
    "password": "123456aA"
  },

  {
    "name": "CarolinG",
    "email": "CarolinG@world.com",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695919404/iron-pixel-play/lw1nu7cuydkchgrmfx16.jpg",
    "password": "123456aA"
  },

  {
    "name": "Philippe",
    "email": "Philippe@world.com",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695919404/iron-pixel-play/lw1nu7cuydkchgrmfx16.jpg",
    "password": "123456aA"
  },

  {
    "name": "Mary",
    "email": "Mary@world.com",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695919404/iron-pixel-play/lw1nu7cuydkchgrmfx16.jpg",
    "password": "123456aA"
  },

  {
    "name": "Lina",
    "email": "Lina@world.com",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695919404/iron-pixel-play/lw1nu7cuydkchgrmfx16.jpg",
    "password": "123456aA"
  },

  {
    "name": "Jani",
    "email": "Jani@world.com",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695919404/iron-pixel-play/lw1nu7cuydkchgrmfx16.jpg",
    "password": "123456aA"
  },

  {
    "name": "Solid",
    "email": "Solid@world.com",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695919404/iron-pixel-play/lw1nu7cuydkchgrmfx16.jpg",
    "password": "123456aA"
  },

  {
    "name": "Ola",
    "email": "Ola@world.com",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695919404/iron-pixel-play/lw1nu7cuydkchgrmfx16.jpg",
    "password": "123456aA"
  },

  {
    "name": "Fernando",
    "email": "Fernando@world.com",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695919404/iron-pixel-play/lw1nu7cuydkchgrmfx16.jpg",
    "password": "123456aA"
  },

  {
    "name": "Diogo",
    "email": "Diogo@world.com",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695919404/iron-pixel-play/lw1nu7cuydkchgrmfx16.jpg",
    "password": "123456aA"
  },
  
]

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);

    //return User.deleteMany({}); //WARNING: this will delete all users in your DB !!
  })
  .then((response) => {
    console.log(response);

    return User.insertMany(users);
  })
  .then(usersFromDB => {
    console.log(`Created ${usersFromDB.length} users`);

    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error connecting to DB: ", err);
  });


