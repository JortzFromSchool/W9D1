const Game = require("./game");

function GameView(ctx) {
    this.game = new Game();
    this.ctx = ctx;

}

GameView.prototype.start = function() {
    setInterval(function() {
        this.game.moveObjects();
        this.game.draw(this.ctx);
    }.bind(this), 20);

}

module.exports = GameView