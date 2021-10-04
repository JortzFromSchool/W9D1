const util = require("./util");
window.Util = util;
const movingObject = require("./moving_object");
window.MovingObject = movingObject;
const asteroid = require("./asteroid");
window.Asteroid = asteroid;

console.log("webpack is working");


window.addEventListener("DOMContentLoaded", function(){
    const canvasEl = document.getElementsByTagName("canvas")[0];
    const ctx = canvasEl.getContext("2d");
});

// canvasEl.height = window.innerHeight;
// canvasEl.width = window.innerWidth;
