const util = require("./util");
window.Util = util;
const movingObject = require("./moving_object");
window.MovingObject = movingObject;
const asteroid = require("./asteroid");
window.Asteroid = asteroid;
const gameView = require("./gameview");
window.GameView = gameView;
const game = require("./game");
window.Game = game; 


console.log("webpack is working");


window.addEventListener("DOMContentLoaded", function(){
    const canvasEl = document.getElementsByTagName("canvas")[0];
    const ctx = canvasEl.getContext("2d");
    const gv = new GameView(ctx);
    gv.start();
});

// canvasEl.height = window.innerHeight;
// canvasEl.width = window.innerWidth;
