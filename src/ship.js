const Util = require("./util");

const COLOR = "#0000FF";
const RADIUS = 5;

function Ship(pos, game) {
    // this.color = COLOR;
    // this.radius = RADIUS;

    MovingObject.call(this, pos, [0,0], RADIUS, COLOR, game);
}
Util.inherits(Ship, MovingObject);


Ship.prototype.relocate = function() {
    this.pos = this.game.randompos();
}

module.exports = Ship;