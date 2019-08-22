class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }
  bindEvents() {
    this.$el.on("click", "li", (e) => {
      let $li = $(e.target);
      this.game.playMove($li.data("pos"));
      this.makeMove($li);
      if (this.isOver()) {
        winner();
      }
    }); 
  }

  winner() {
    return this.game.winner();
  }


  makeMove($square) {
    $square.addClass("selected");
    $square.append(" " +this.game.currentPlayer);
  }

  setupBoard() {
    let $ul = $("<ul>");
    this.$el.append($ul);
    for (let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        let $li = $("<li>");
        $li.data("pos", [i,j]);
        $ul.append($li);
      }
    }
  }
}

// View.prototype.setupBoard = function () {
  
// }
module.exports = View;
