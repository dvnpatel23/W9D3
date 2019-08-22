const View = require("./ttt-view.js");
const Game = require("./game.js");

let newGame = new Game();


  $(() => {
    let newView = new View(newGame, $(".ttt"));
    // newView.setupBoard();
  });
