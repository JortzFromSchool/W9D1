const MovingObject = require("./moving_object");
const Util = require("./util");

const COLOR = "#FF0000";
const RADIUS = 5;

function Asteroid(pos) {
    Util.inherits(this, MovingObject);
    // this.color = COLOR;
    // this.radius = RADIUS; 
    new MovingObject(pos, Util.randomVec(3), RADIUS, COLOR)
    



}

module.exports = Asteroid