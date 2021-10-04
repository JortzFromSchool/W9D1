const MovingObject = require("./moving_object");
const Util = require("./util");

const COLOR = "#FF0000";
const RADIUS = 5;


function Asteroid(pos, game) {
    // this.color = COLOR;
    // this.radius = RADIUS;
    
    MovingObject.call(this, pos, Util.randomVec(3), RADIUS, COLOR, game);
    // debugger
}
Util.inherits(Asteroid, MovingObject);

Asteroid.prototype.collideWith = function(otherObject) {
    if (otherObject === instanceOf(Ship)) {
        otherObject.relocate();
    }
    else {
        this.game.remove(this);
        this.game.remove(otherObject);
    }
}

module.exports = Asteroid;