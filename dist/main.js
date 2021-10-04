/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nconst COLOR = \"#FF0000\";\nconst RADIUS = 5;\n\n\nfunction Asteroid(pos, game) {\n    // this.color = COLOR;\n    // this.radius = RADIUS;\n    \n    MovingObject.call(this, pos, Util.randomVec(3), RADIUS, COLOR, game);\n    // debugger\n}\nUtil.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack://W9D1/./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\nconst DIM_X= 500;\nconst DIM_Y= 500;\nconst NUM_ASTEROIDS= 5;\n\n\nfunction Game() {\n    this.asteroids = [];\n    this.addAsteroids(NUM_ASTEROIDS);\n\n}\n\nGame.prototype.addAsteroids = function(num) {\n    for (let i=0; i < num; i++) {\n        const x = Math.floor(Math.random()*DIM_X);\n        const y = Math.floor(Math.random()*DIM_Y);\n        this.asteroids.push(new Asteroid([x, y], this));\n    }\n}\n\nGame.prototype.draw = function(ctx) {\n    ctx.clearRect(0, 0, DIM_X, DIM_Y);\n    this.asteroids.forEach(ele => {\n        ele.draw(ctx);\n    });\n}\n\nGame.prototype.moveObjects = function() {\n    this.asteroids.forEach(ele => {\n        ele.move();\n    });\n}\n\nGame.prototype.wrap = function (pos) {\n    let x = pos[0];\n    let y = pos[1];\n    if (x < 0) {\n        x = DIM_X;\n    } else if (x > DIM_X) {\n        x = 0;\n    }\n    if (y < 0) {\n        y = DIM_Y;\n    } else if (y > DIM_Y) {\n        y = 0;\n    }\n    return [x,y];\n}\n\nGame.prototype.checkCollisions = function () {\n    this.asteroids.forEach(ele => {\n        this.asteroids.forEach(ele2 => {\n            if (ele != ele2) {\n                if (ele.isCollidedWith(ele2)){\n                    ele.collideWith(ele2);\n                };\n            };\n        });\n    });\n}\n\nGame.prototype.step = function () {\n    this.moveObjects();\n    this.checkCollisions();\n}\n\nGame.prototype.remove = function (asteroid) {\n    const sliceIndex = this.asteroids.indexOf(asteroid);\n    this.asteroids = this.asteroids.slice(0, sliceIndex).concat(this.asteroids.slice(sliceIndex+1));\n}\n\nmodule.exports = Game\n\n\n\n//# sourceURL=webpack://W9D1/./src/game.js?");

/***/ }),

/***/ "./src/gameview.js":
/*!*************************!*\
  !*** ./src/gameview.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction GameView(ctx) {\n    this.game = new Game();\n    this.ctx = ctx;\n\n}\n\nGameView.prototype.start = function() {\n    setInterval(function() {\n        this.game.step();\n        this.game.draw(this.ctx);\n    }.bind(this), 20);\n\n}\n\nmodule.exports = GameView\n\n//# sourceURL=webpack://W9D1/./src/gameview.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nwindow.Util = util;\nconst movingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nwindow.MovingObject = movingObject;\nconst asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nwindow.Asteroid = asteroid;\nconst gameView = __webpack_require__(/*! ./gameview */ \"./src/gameview.js\");\nwindow.GameView = gameView;\nconst game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nwindow.Game = game; \n\n\nconsole.log(\"webpack is working\");\n\n\nwindow.addEventListener(\"DOMContentLoaded\", function(){\n    const canvasEl = document.getElementsByTagName(\"canvas\")[0];\n    const ctx = canvasEl.getContext(\"2d\");\n    const gv = new GameView(ctx);\n    gv.start();\n});\n\n// canvasEl.height = window.innerHeight;\n// canvasEl.width = window.innerWidth;\n\n\n//# sourceURL=webpack://W9D1/./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(pos, vel, radius, color, game) {\n    this.pos = pos; \n    this.vel = vel;\n    this.radius = radius;\n    this.color = color;\n    this.game = game;\n}\n\nMovingObject.prototype.draw = function draw(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n\n    ctx.arc(\n        this.pos[0],\n        this.pos[1],\n        this.radius,\n        0,\n        2 * Math.PI,\n        false\n    );\n\n    ctx.fill();\n}\n\n\nMovingObject.prototype.move = function move() {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n    this.pos = this.game.wrap(this.pos);\n}\n\nMovingObject.prototype.isCollidedWith = function (otherObject) {\n    let rSum = this.radius + otherObject.radius;\n    let pos1 = this.pos;\n    let pos2 = otherObject.pos;\n    let distance = Math.pow((pos1[0] - pos2[0]),2) + Math.pow((pos1[1] - pos2[1]),2);\n    distance = Math.sqrt(distance);\n    if (distance < rSum) {\n        return true;\n    } else {\n        return false;\n    }\n}\n\nMovingObject.prototype.collideWith = function (otherObject) {\n    this.game.remove(this);\n    this.game.remove(otherObject);\n}\n\nmodule.exports = MovingObject\n\n//# sourceURL=webpack://W9D1/./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("// const { util } = require(\"webpack\");\n\nconst Util = {\n    inherits(childClass, parentClass) {\n        function Surrogate() { }\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass;\n    },\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n        // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n}\n\n\n\nmodule.exports = Util; \n\n//# sourceURL=webpack://W9D1/./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;