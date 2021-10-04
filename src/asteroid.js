const MovingObject = require("./moving_object");
const Util = require("./util");

const COLOR = "#FF0000";
const RADIUS = 5;


function Asteroid(pos) {
    this.color = COLOR;
    this.radius = RADIUS;
    
    
    MovingObject.call(this, pos, Util.randomVec(3), this.radius, this.color);
    // debugger
}
Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;