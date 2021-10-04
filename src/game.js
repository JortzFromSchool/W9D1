const Asteroid = require("./asteroid");
const Ship = require("./ship");

const DIM_X= 500;
const DIM_Y= 500;
const NUM_ASTEROIDS= 5;


function Game() {
    this.asteroids = [];
    this.addAsteroids(NUM_ASTEROIDS);
    this.ship = new Ship(this.randompos());
}

Game.prototype.all_objects = function () {
    return this.asteroids.concat([this.ship]);
}

Game.prototype.addAsteroids = function(num) {
    for (let i=0; i < num; i++) {
        const x = Math.floor(Math.random()*DIM_X);
        const y = Math.floor(Math.random()*DIM_Y);
        this.asteroids.push(new Asteroid([x, y], this));
    }
}

Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, DIM_X, DIM_Y);
    this.all_objects.forEach(ele => {
        ele.draw(ctx);
    });

}

Game.prototype.moveObjects = function() {
    this.all_objects.forEach(ele => {
        ele.move();
    });
}

Game.prototype.wrap = function (pos) {
    let x = pos[0];
    let y = pos[1];
    if (x < 0) {
        x = DIM_X;
    } else if (x > DIM_X) {
        x = 0;
    }
    if (y < 0) {
        y = DIM_Y;
    } else if (y > DIM_Y) {
        y = 0;
    }
    return [x,y];
}

Game.prototype.checkCollisions = function () {
    this.all_objects.forEach(ele => {
        this.all_objects.forEach(ele2 => {
            if (ele != ele2) {
                if (ele.isCollidedWith(ele2)){
                    ele.collideWith(ele2);
                };
            };
        });
    });
}

Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
}

Game.prototype.remove = function (asteroid) {
    const sliceIndex = this.asteroids.indexOf(asteroid);
    this.asteroids = this.asteroids.slice(0, sliceIndex).concat(this.asteroids.slice(sliceIndex+1));
}

Game.prototype.randompos = function() {
    let x = Math.floor(Math.random() * DIM_X);
    let y = Math.floor(Math.random() * DIM_Y);
    return [x,y];
}





module.exports = Game

