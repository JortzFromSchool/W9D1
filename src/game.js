const Asteroid = require("./asteroid");

const DIM_X= 500;
const DIM_Y= 500;
const NUM_ASTEROIDS= 5;


function Game() {
    this.asteroids = [];
    this.addAsteroids(NUM_ASTEROIDS);

}

Game.prototype.addAsteroids = function(num) {
    for (let i=0; i < num; i++) {
        const x = Math.floor(Math.random()*DIM_X);
        const y = Math.floor(Math.random()*DIM_Y);
        this.asteroids.push(new Asteroid([x, y]));
    }
}

Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, DIM_X, DIM_Y);
    this.asteroids.forEach(ele => {
        ele.draw(ctx);
    });
}

Game.prototype.moveObjects = function() {
    this.asteroids.forEach(ele => {
        ele.move();
    });
}


module.exports = Game

