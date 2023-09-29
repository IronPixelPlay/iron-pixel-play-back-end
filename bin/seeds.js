const mongoose = require('mongoose');

const Game = require('../models/Game.model')

require('dotenv').config(); // import and configure dotenv (loads environment variables from .env file)



const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/iron-pixel-play-back-end';

const games = [
  {
    "user": "651616ede22c44de69bd7777",
    "title": "Lemming's world!",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695919660/iron-pixel-play/af8m84zpj041yka0nhml.png",
    "demo": "https://hymced.github.io/project1-game",
    "category": "Action-Adventure",
    "instructions": "Click on them to activate their skils!",
    "description": "Your goal is to have at least 60% of lemmings IN the EXIT at the bottom.",
    "gitHubLink": "https://github.com/hymced/project1-game"
  },

  {
    "user": "651616ede22c44de69bd7779",
    "title": "Mr Jackal's feelings",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695920662/iron-pixel-play/qhlanfodmqgvgvkel7xr.png",
    "demo": "https://e-m-i-l-i-o.github.io/NVC-Mr-Jackals-feelings",
    "category": "Action-Adventure",
    "instructions": "Use the arrow keys to move around the board and get Mr Jackal's feelings.",
    "description": "In this game, the player is a giraffe who tries to avoid obstacles while trying to 'hear' the essence of Mr Jackal's feelings.",
    "gitHubLink": "https://github.com/E-m-i-l-i-o/NVC-Mr-Jackals-feelings"
  },

  {
    "user": "651616ede22c44de69bd777a",
    "title": "Space Rescue",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695921238/iron-pixel-play/diqufjxhujr1n5khzny4.png",
    "demo": "https://programmingdj.github.io/project1-space-rescue",
    "category": "Action-Adventure",
    "instructions": "You launch your spacecraft by pressing the SPACE key in after you read the Mission Brief on your start window. To maneuver your spacecraft, simply use the arrow keys on your keyboard.",
    "description": "Get ready to embark on a heart-pounding mission to save stranded astronauts across the vast expanse of space.",
    "gitHubLink": "https://github.com/ProgrammingDj/project1-space-rescue"
  },

  {
    "user": "651616ede22c44de69bd777b",
    "title": "Zelda Cucco Game",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695921943/iron-pixel-play/gpohyi55ckkcsoztbtfb.png",
    "demo": "https://estevenson6.github.io/Zelda-Cuccoo-Mini-Game",
    "category": "Strategy",
    "instructions": "Click on the start button using your mousepad. Use the arrow keys to move left and right, to catch or avoid the falling objects.",
    "description": "The character, Link, needs to collect Rupees to win the game. But beware, don't hurt those pesky Cuccos. They're more coniving than you think!",
    "gitHubLink": "https://github.com/estevenson6/Zelda-Cuccoo-Mini-Game"
  },

  {
    "user": "651616ede22c44de69bd777c",
    "title": "Fluffy Homini",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695924866/iron-pixel-play/whlfy7nhjpvlljmzn2sh.png",
    "demo": "https://gokceber.github.io/my-cool-game/index.html",
    "category": "Strategy",
    "instructions": "Use the arrow keys on your keyboard to move the player character. Avoid colliding with the obstacles that appear on the screen.",
    "description": "A fun and exciting OOP game built with web technologies (HTML, CSS, JavaScript).",
    "gitHubLink": "https://github.com/Gokceber/my-cool-game"
  },
  
  {
    "user": "651616ede22c44de69bd777d",
    "title": "Sudoku",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695925150/iron-pixel-play/jmlgrx4tbpzto1zrhkob.png",
    "demo": "https://fabiosm46.github.io/sudoku",
    "category": "Puzzle",
    "instructions": "Click on an empty cell to select it and use your keyboard's number keys (1-9) to enter a number into the selected cell. Or just click an empty cell and select the number from the virtual keyboard at the bottom.",
    "description": "This is a Sudoku game developed using vanilla JavaScript, CSS, and HTML. The game utilizes DOM manipulation to create an interactive user experience.",
    "gitHubLink": "https://github.com/FabioSM46/sudoku"
  },

  {
    "user": "651616ede22c44de69bd777e",
    "title": "Littera game",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695925529/iron-pixel-play/eahm0wsasnm9xw20mz5u.png",
    "demo": "https://nunojsmonteiro.github.io/littera-game",
    "category": "Puzzle",
    "instructions": "Use letter of your keyboard from A to Z, use enter to keyboard Enter to approve the guess word.",
    "description": "Littera, derived from the Latin word for letter, is an engaging word puzzle game inspired by Wordl.",
    "gitHubLink": "https://github.com/nunojsmonteiro/littera-game"
  },

  {
    "user": "651616ede22c44de69bd777f",
    "title": "Iron Arena",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695925826/iron-pixel-play/alzg15jrfjii4gez8b87.png",
    "demo": "https://filipemgf.github.io/ironhack-project1-ironArena",
    "category": "Fighting",
    "instructions": "The game is click-based so very simple to understand: just follow the prompts and click the buttons on screen.",
    "description": "A gladiator role-playing game of guts and glory.",
    "gitHubLink": "https://github.com/filipemgf/ironhack-project1-ironArena"
  },

  {
    "user": "651616ede22c44de69bd7780",
    "title": "Space-Shooter",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695926946/iron-pixel-play/pwhajyqhtk7ef3k96e31.png",
    "demo": "https://nishag-26.github.io/Space-Shooter/index.html",
    "category": "Shooter",
    "instructions": "When you press left arrow, the shooter moves left. When you press right arrow, the shooter moves right. When you click from mouse, it starts shooting.",
    "description": "One day, our beautiful galaxy is under attack of space intruders. They destroyed all of squadron. You are last hero of galaxy and will be faced space intruders.",
    "gitHubLink": "https://github.com/nishag-26/Space-Shooter"
  },

  {
    "user": "651616ede22c44de69bd7781",
    "title": "STAR-LORD",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695927204/iron-pixel-play/d5yfzousewbtylrajh32.png",
    "demo": "https://lucas-gaviao.github.io/STAR-LORD",
    "category": "Shooter",
    "instructions": "When you press left arrow, the shooter moves left. When you press right arrow, the shooter moves right. When you press space, it starts shooting.",
    "description": "Join the fight, Star Lord! Defeat the Empire's ships, embrace your destiny, and become a legend. May the Force guide you to victory! 👍",
    "gitHubLink": "https://github.com/Lucas-Gaviao/STAR-LORD"
  },

  {
    "user": "651616ede22c44de69bd7782",
    "title": "Tower Defense Game",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695927513/iron-pixel-play/sz2hjpcjxjxuwlwt6pfy.png",
    "demo": "https://gtildis.github.io/Tower-Defense-Dom",
    "category": "Strategy",
    "instructions": "You can use your keyboard keys 1 and 2 to toggle between the two towers, and place them with your mouse.",
    "description": "Protect the village! Kill the enemies!",
    "gitHubLink": "https://github.com/gtildis/Tower-Defense-Dom"
  },

  {
    "user": "651616ede22c44de69bd7783",
    "title": "Snakegame",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695927988/iron-pixel-play/ixvascbizv9cw5zbdq7m.png",
    "demo": "https://jcouderc87.github.io/snakegame",
    "category": "Strategy",
    "instructions": "Move around with arrows.",
    "description": "Grow!",
    "gitHubLink": "https://github.com/JCouderc87/snakegame"
  },

  {
    "user": "651616ede22c44de69bd7784",
    "title": "TheGame",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695928393/iron-pixel-play/xukhax8nnyihhnrrsfk0.png",
    "demo": "https://eiriktobias.github.io/TheGame/index.html",
    "category": "Action-Adventure",
    "instructions": "Use the arrow keys to control the fighter jet. Spacebar to shoot enemies.",
    "description": "You are the pilot of a fighter jet whose mission is to take out enemies. All the enemies you shoot will give you points. Those who manage to escape steal points.",
    "gitHubLink": "https://github.com/eiriktobias/TheGame"
  },

  {
    "user": "651616ede22c44de69bd7785",
    "title": "Car game",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695928797/iron-pixel-play/stalqqwflvmev1lkywin.png",
    "demo": "https://anpal1986.github.io/car-game",
    "category": "Sports&Racing",
    "instructions": "Using your keyboard: right, left upddown arrows.",
    "description": "This game is based on a yellow car that moves to take gasoline or avoid to crash the police, trying not to drive out the road.",
    "gitHubLink": "https://github.com/Anpal1986/car-game"
  },

  {
    "user": "651616ede22c44de69bd7786",
    "title": "The Loopey Madness",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695929071/iron-pixel-play/bugdkjtyjqtcbai9op2u.png",
    "demo": "https://linhvnde.github.io/ironhack-1st-proj-oop-game/main.html",
    "category": "Other",
    "instructions": "Press Play and use your keyboard: right, left upddown arrows.",
    "description": "You will step into the shoes of Sylvesters morning routine. It becomes an unpredictable and exciting challenge as he always seems to misplace his essentials.",
    "gitHubLink": "https://github.com/linhvnde/1st-wd-project"
  },

  {
    "user": "651616ede22c44de69bd7787",
    "title": "Loopey Tunes Guessing Game",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695929339/iron-pixel-play/b9rirghorkooou3boxno.png",
    "demo": "https://softcake1988.github.io/project01_game_LoopeyTunesGuessingGame",
    "category": "Quiz&Trivia",
    "instructions": "Click on the green play button and listen in on song number one. Then click on the button with the name of your classmate of whom you think added the respective song to our spotify playlist 'LoopeyTunes'.",
    "description": "Guess the team member who added the song to the playlist.",
    "gitHubLink": "https://github.com/softcake1988/project01_game_LoopeyTunesGuessingGame"
  },

  {
    "user": "651616ede22c44de69bd7788",
    "title": "FinalTest-Survival Game",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695929734/iron-pixel-play/hw1di88adpm7175uujin.png",
    "demo": "https://dokryptos.github.io/FinalTest-Survival_Game",
    "category": "Fighting",
    "instructions": "You embody a military player in a wooded meadow. You can moove with Arrows on the keyboard.",
    "description": "The principle of the game is to survive as long as possible, the more time passes and the more the game becomes complicated until the death of the player.",
    "gitHubLink": "https://github.com/Dokryptos/FinalTest-Survival_Game"
  },

  {
    "user": "651616ede22c44de69bd7789",
    "title": "The Tech Founder",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695929992/iron-pixel-play/mjaqnumh8cwdqazqsuoz.png",
    "demo": "https://mk3346.github.io/the-tech-founder",
    "category": "Strategy",
    "instructions": "Use the left + right arrow keys to move; Collect cash to keep the company afloat; Catch 5 customers to proceed to Level 2",
    "description": "Win 5 customers before you run out of cash - better be fast my friend! 😄",
    "gitHubLink": "https://github.com/mk3346/the-tech-founder"
  },

  {
    "user": "651616ede22c44de69bd778a",
    "title": "Metronome",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695942375/iron-pixel-play/thjwl6to6xg6pujvkcdg.png",
    "demo": "https://pedroxpaulos.github.io/Project-1---The-Game---Metronome",
    "category": "Other",
    "instructions": "Play",
    "description": "Not available",
    "gitHubLink": "https://github.com/pedroxpaulos/Project-1---The-Game---Metronome"
  },

  {
    "user": "651616ede22c44de69bd778b",
    "title": "American Football",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695942587/iron-pixel-play/v8yymjqokzwhjexegwxp.png",
    "demo": "https://jfaria23.github.io/game-project-american-football",
    "category": "Sports&Racing",
    "instructions": "Use the arrow keys to move the player around.",
    "description": "This is a NFL inspired game. You are the smiling football player waiting patiently for your shot at catching the ball. While you wait, you might want avoid getting tackled by the 'not so smiling' defenders.",
    "gitHubLink": "https://github.com/jfaria23/game-project-american-football"
  },

  {
    "user": "651616ede22c44de69bd778b",
    "title": "American Football",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695942587/iron-pixel-play/v8yymjqokzwhjexegwxp.png",
    "demo": "https://viktornstr.github.io/Pesonal-Projekt-Game",
    "category": "Fighting",
    "instructions": "Use the arrow keys to move the player around.",
    "description": "Not available",
    "gitHubLink": "https://github.com/ViktorNstr/Pesonal-Projekt-Game"
  },

  {
    "user": "651616ede22c44de69bd778d",
    "title": "Project1-Game",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695944075/iron-pixel-play/p12rbmchlaog7k0kfddc.png",
    "demo": "https://jualolo.github.io/Project1-Game",
    "category": "Action-Adventure",
    "instructions": "Use the arrow keys to move the player around.",
    "description": "Not available",
    "gitHubLink": "https://github.com/Jualolo/Project1-Game"
  },

  {
    "user": "651616ede22c44de69bd778e",
    "title": "CarosCodingGame",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695944648/iron-pixel-play/rzpvos4eh1wmh1vidjph.png",
    "demo": "https://carolingoerner.github.io/CarosCodingGame",
    "category": "Other",
    "instructions": "Move your player left and right by pressing arrow left and right on your keyboard.",
    "description": "Wait for the obstacles to appear and decide if it is a code you want to eat or code that would throw an error",
    "gitHubLink": "https://github.com/carolingoerner/CarosCodingGame"
  },

  {
    "user": "651616ede22c44de69bd778f",
    "title": "Pop it!",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695944792/iron-pixel-play/yxim2msginxqyx6wxadh.png",
    "demo": "https://pmiossec.github.io/ih_module1_project_game",
    "category": "Quiz&Trivia",
    "instructions": "Each turn you could pop between 1 and 3 bubbles situated on the same line before passing the hand to the other player with the  button.",
    "description": "Pop it! is a 2 players game where the goal is to not be the one that pop the last bubble.",
    "gitHubLink": "https://github.com/pmiossec/ih_module1_project_game"
  },

  {
    "user": "651616ede22c44de69bd7791",
    "title": "Young Padawan",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695945127/iron-pixel-play/zoylgjsi9boyvgpqxxkd.png",
    "demo": "https://lina-z.github.io/game_repo/game.html",
    "category": "Action-Adventure",
    "instructions": "You should use : KeyUp arrow and keyDown arrow to lift an object.",
    "description": "The force is definitely strong with you... but you must train a lot before claiming the rank of master. Let's try something.",
    "gitHubLink": "https://github.com/Lina-z/game_repo"
  },

  {
    "user": "651616ede22c44de69bd7792",
    "title": "Zola's Adventure",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695945225/iron-pixel-play/ntwy3br0dra6bxkpfbra.png",
    "demo": "https://jani500.github.io/zolas-adventure",
    "category": "Action-Adventure",
    "instructions": "Hit Spacebar to shoot hairballs at rats.",
    "description": "In Zola's adventure, you play Zola the cat and you're roaming the garden, catching mice, avoiding rats, and even killing rats!",
    "gitHubLink": "https://github.com/jani500/zolas-adventure"
  },

  {
    "user": "651616ede22c44de69bd7793",
    "title": "Math Quiz Game",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695945427/iron-pixel-play/iv1txal7iirubu6ggqkv.png",
    "demo": "https://zendratodaeli.github.io/math-quiz-game/game-level-html/first-level.html",
    "category": "Quiz&Trivia",
    "instructions": "Solve the presented math problems by entering the correct answer in the input field.",
    "description": "A simple math quiz game designed to test your arithmetic skills across multiple levels.",
    "gitHubLink": "https://github.com/zendratodaeli/math-quiz-game"
  },

  {
    "user": "651616ede22c44de69bd7794",
    "title": "Uncloud Me",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695945846/iron-pixel-play/zrpz5udh3189darvxr0m.png",
    "demo": "https://olabonati.github.io/game",
    "category": "Action-Adventure",
    "instructions": "You're Bugs Bunny and you has to avoid Coyote.",
    "description": "A simple game with Bugs Bunny and Coyote and the idea of making this game was because my kids love Looney Tunes.",
    "gitHubLink": "https://github.com/olabonati/game"
  },

  {
    "user": "651616ede22c44de69bd7796",
    "title": "LoopeyTunes Race",
    "image": "https://res.cloudinary.com/dbswtjju9/image/upload/v1695945913/iron-pixel-play/vkwgjgdxizrtuoxngk2z.png",
    "demo": "https://disaacjm.github.io/LoopeyTunes_Race",
    "category": "Sports&Racing",
    "instructions": "You're Bugs Bunny and you has to avoid Coyote.",
    "description": "A simple game with Bugs Bunny and Coyote and the idea of making this game was because my kids love Looney Tunes.",
    "gitHubLink": "https://github.com/disaacjm/LoopeyTunes_Race"
  },

]

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);

    //return Game.deleteMany({}); //WARNING: this will delete all games in your DB !!
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


