function MovingObject(pos, vel, radius, color, game) {
    this.pos = pos; 
    this.vel = vel;
    this.radius = radius;
    this.color = color;
    this.game = game;
}

MovingObject.prototype.draw = function draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
        this.pos[0],
        this.pos[1],
        this.radius,
        0,
        2 * Math.PI,
        false
    );

    ctx.fill();
}


MovingObject.prototype.move = function move() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.pos = this.game.wrap(this.pos);
}

MovingObject.prototype.isCollidedWith = function (otherObject) {
    let rSum = this.radius + otherObject.radius;
    let pos1 = this.pos;
    let pos2 = otherObject.pos;
    let distance = Math.pow((pos1[0] - pos2[0]),2) + Math.pow((pos1[1] - pos2[1]),2);
    distance = Math.sqrt(distance);
    if (distance < rSum) {
        return true;
    } else {
        return false;
    }
}

module.exports = MovingObject