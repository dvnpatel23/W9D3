const Game = require("./game.js");
const View = require("./hanoi-view.js");

let newGame = new Game();

$(() => {
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  new HanoiView(game, rootEl);
  console.log("hello");
});

console.log("hello");