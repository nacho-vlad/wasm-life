(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/game_of_life.js":
/*!******************************!*\
  !*** ../pkg/game_of_life.js ***!
  \******************************/
/*! exports provided: Cell, Universe, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_of_life_bg.wasm */ "../pkg/game_of_life_bg.wasm");
/* harmony import */ var _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_of_life_bg.js */ "../pkg/game_of_life_bg.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__["Cell"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Universe", function() { return _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__["Universe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_throw", function() { return _game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_throw"]; });




/***/ }),

/***/ "../pkg/game_of_life_bg.js":
/*!*********************************!*\
  !*** ../pkg/game_of_life_bg.js ***!
  \*********************************/
/*! exports provided: Cell, Universe, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return Cell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Universe", function() { return Universe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_throw", function() { return __wbindgen_throw; });
/* harmony import */ var _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_of_life_bg.wasm */ "../pkg/game_of_life_bg.wasm");


const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetUint8Memory0 = new Uint8Array(_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetInt32Memory0 = new Int32Array(_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetInt32Memory0;
}
/**
*/
const Cell = Object.freeze({ Dead:0,Alive:1, });
/**
*/
class Universe {

    static __wrap(ptr) {
        const obj = Object.create(Universe.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbg_universe_free"](ptr);
    }
    /**
    * @returns {Universe}
    */
    static new() {
        var ret = _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["universe_new"]();
        return Universe.__wrap(ret);
    }
    /**
    */
    tick() {
        _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["universe_tick"](this.ptr);
    }
    /**
    * @param {number} row
    * @param {number} col
    */
    toggle_cell(row, col) {
        _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["universe_toggle_cell"](this.ptr, row, col);
    }
    /**
    * @returns {number}
    */
    height() {
        var ret = _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["universe_height"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    width() {
        var ret = _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["universe_width"](this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {string}
    */
    render() {
        try {
            _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["universe_render"](8, this.ptr);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_free"](r0, r1);
        }
    }
    /**
    * @returns {number}
    */
    cells() {
        var ret = _game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["universe_cells"](this.ptr);
        return ret;
    }
}

const __wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../pkg/game_of_life_bg.wasm":
/*!***********************************!*\
  !*** ../pkg/game_of_life_bg.wasm ***!
  \***********************************/
/*! exports provided: memory, __wbg_universe_free, universe_new, universe_tick, universe_toggle_cell, universe_height, universe_width, universe_render, universe_cells, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Instantiate WebAssembly module
var wasmExports = __webpack_require__.w[module.i];
__webpack_require__.r(exports);
// export exports from WebAssembly module
for(var name in wasmExports) if(name != "__webpack_init__") exports[name] = wasmExports[name];
// exec imports from WebAssembly module (for esm order)
/* harmony import */ var m0 = __webpack_require__(/*! ./game_of_life_bg.js */ "../pkg/game_of_life_bg.js");


// exec wasm module
wasmExports["__webpack_init__"]()

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var game_of_life__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! game-of-life */ "../pkg/game_of_life.js");
/* harmony import */ var game_of_life_game_of_life_bg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! game-of-life/game_of_life_bg */ "../pkg/game_of_life_bg.wasm");



const CELL_SIZE = 10;
const DEAD_COLOR = "#FFFFFF";
const GRID_COLOR = "#CCCCCC";
const ALIVE_COLOR = "#000000";

const universe = game_of_life__WEBPACK_IMPORTED_MODULE_0__["Universe"].new();
const width = universe.width();
const height = universe.height();

const canvas = document.getElementById("game-of-life-canvas");
const playPauseButton = document.getElementById("play-pause");
const speedSlider = document.getElementById("speed");
canvas.height = (CELL_SIZE+1)*height+1;
canvas.width = (CELL_SIZE+1)*width+1;

const ctx = canvas.getContext('2d');

const getIndex = (row, column) => {
    return row * width + column
};

let animationId = null;

const drawGrid = () => {
    ctx.beginPath();
    ctx.strokeStyle = GRID_COLOR;

    for(let i = 0; i <= width; i++) {
        ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);
        ctx.lineTo(i* (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height +1);
    }

    
    for(let i = 0; i <= height; i++) {
        ctx.moveTo(0, i * (CELL_SIZE + 1) + 1);
        ctx.lineTo( (CELL_SIZE + 1) * width +1, i * (CELL_SIZE + 1) + 1 );
    }

    ctx.stroke();
};


const drawCells = () => {
    const cellsPtr = universe.cells();

    const cells = new Uint8Array(game_of_life_game_of_life_bg__WEBPACK_IMPORTED_MODULE_1__["memory"].buffer, cellsPtr,width * height);

    ctx.beginPath();

    for(let row = 0; row < height; row++) {
        for(let col = 0; col < width; col++) {
            const idx = getIndex(row,col);

            ctx.fillStyle = cells[idx] === game_of_life__WEBPACK_IMPORTED_MODULE_0__["Cell"].Dead ? DEAD_COLOR : ALIVE_COLOR;

            ctx.fillRect(
                col * (CELL_SIZE + 1) + 1,
                row * (CELL_SIZE + 1) + 1,
                CELL_SIZE,
                CELL_SIZE
            )
        }
    }
    ctx.stroke();
};

let frameNr = 0;

const renderLoop = () => {
   
    frameNr = (frameNr + 1) % 11;
    if(11 - speedSlider.value == frameNr) {
        universe.tick();
        drawGrid();
        drawCells();
        frameNr = 0;
    }

    animationId = requestAnimationFrame(renderLoop);
};

const isPaused = () => {
    return animationId === null
};

const play = () => {
    playPauseButton.textContent = "⏸";
    renderLoop();
};

const pause = () => {
    playPauseButton.textContent = "▶";
    cancelAnimationFrame(animationId);
    animationId=null;
};

playPauseButton.addEventListener("click", event => {
    if (isPaused()) {
        play();
    } else {
        pause();
    }
});

canvas.addEventListener("click", event => {
    const boundingRect = canvas.getBoundingClientRect();

    const scaleX = canvas.width / boundingRect.width;
    const scaleY = canvas.height / boundingRect.height;

    const canvasLeft = (event.clientX - boundingRect.left) * scaleX;
    const canvasTop = (event.clientY - boundingRect.top) * scaleY;

    const row = Math.min(Math.floor(canvasTop / (CELL_SIZE + 1)), height - 1);
    const col = Math.min(Math.floor(canvasLeft / (CELL_SIZE + 1)), width - 1);

    universe.toggle_cell(row, col);

    drawGrid();
    drawCells();
});

drawGrid();
drawCells();
play();


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vcGtnL2dhbWVfb2ZfbGlmZS5qcyIsIndlYnBhY2s6Ly8vLi4vcGtnL2dhbWVfb2ZfbGlmZV9iZy5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQzs7Ozs7Ozs7Ozs7OztBQ0EvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStDOztBQUUvQzs7QUFFQSxtREFBbUQsK0JBQStCOztBQUVsRjs7QUFFQTtBQUNBO0FBQ0EseUVBQXlFLDREQUFXO0FBQ3BGLDhDQUE4Qyw0REFBVztBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5RUFBeUUsNERBQVc7QUFDcEYsOENBQThDLDREQUFXO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyw0QkFBNEIsa0JBQWtCO0FBQ3JEO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSx5RUFBd0I7QUFDaEM7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0Esa0JBQWtCLGtFQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtRUFBa0I7QUFDMUI7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBLFFBQVEsMEVBQXlCO0FBQ2pDO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLGtCQUFrQixxRUFBb0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxrQkFBa0Isb0VBQW1CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFFQUFvQjtBQUNoQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsWUFBWSxxRUFBb0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxrQkFBa0Isb0VBQW1CO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4R0E7QUFBQTtBQUFBO0FBQTZDO0FBQ1M7O0FBRXREO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixxREFBUTtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7OztBQUdBLGtCQUFrQixhQUFhO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBLGlDQUFpQyxtRUFBTTs7QUFFdkM7O0FBRUEsb0JBQW9CLGNBQWM7QUFDbEMsd0JBQXdCLGFBQWE7QUFDckM7O0FBRUEsMkNBQTJDLGlEQUFJOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDL0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIwLmJvb3RzdHJhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHdhc20gZnJvbSBcIi4vZ2FtZV9vZl9saWZlX2JnLndhc21cIjtcbmV4cG9ydCAqIGZyb20gXCIuL2dhbWVfb2ZfbGlmZV9iZy5qc1wiOyIsImltcG9ydCAqIGFzIHdhc20gZnJvbSAnLi9nYW1lX29mX2xpZmVfYmcud2FzbSc7XG5cbmNvbnN0IGxUZXh0RGVjb2RlciA9IHR5cGVvZiBUZXh0RGVjb2RlciA9PT0gJ3VuZGVmaW5lZCcgPyAoMCwgbW9kdWxlLnJlcXVpcmUpKCd1dGlsJykuVGV4dERlY29kZXIgOiBUZXh0RGVjb2RlcjtcblxubGV0IGNhY2hlZFRleHREZWNvZGVyID0gbmV3IGxUZXh0RGVjb2RlcigndXRmLTgnLCB7IGlnbm9yZUJPTTogdHJ1ZSwgZmF0YWw6IHRydWUgfSk7XG5cbmNhY2hlZFRleHREZWNvZGVyLmRlY29kZSgpO1xuXG5sZXQgY2FjaGVnZXRVaW50OE1lbW9yeTAgPSBudWxsO1xuZnVuY3Rpb24gZ2V0VWludDhNZW1vcnkwKCkge1xuICAgIGlmIChjYWNoZWdldFVpbnQ4TWVtb3J5MCA9PT0gbnVsbCB8fCBjYWNoZWdldFVpbnQ4TWVtb3J5MC5idWZmZXIgIT09IHdhc20ubWVtb3J5LmJ1ZmZlcikge1xuICAgICAgICBjYWNoZWdldFVpbnQ4TWVtb3J5MCA9IG5ldyBVaW50OEFycmF5KHdhc20ubWVtb3J5LmJ1ZmZlcik7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWdldFVpbnQ4TWVtb3J5MDtcbn1cblxuZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbVdhc20wKHB0ciwgbGVuKSB7XG4gICAgcmV0dXJuIGNhY2hlZFRleHREZWNvZGVyLmRlY29kZShnZXRVaW50OE1lbW9yeTAoKS5zdWJhcnJheShwdHIsIHB0ciArIGxlbikpO1xufVxuXG5sZXQgY2FjaGVnZXRJbnQzMk1lbW9yeTAgPSBudWxsO1xuZnVuY3Rpb24gZ2V0SW50MzJNZW1vcnkwKCkge1xuICAgIGlmIChjYWNoZWdldEludDMyTWVtb3J5MCA9PT0gbnVsbCB8fCBjYWNoZWdldEludDMyTWVtb3J5MC5idWZmZXIgIT09IHdhc20ubWVtb3J5LmJ1ZmZlcikge1xuICAgICAgICBjYWNoZWdldEludDMyTWVtb3J5MCA9IG5ldyBJbnQzMkFycmF5KHdhc20ubWVtb3J5LmJ1ZmZlcik7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWdldEludDMyTWVtb3J5MDtcbn1cbi8qKlxuKi9cbmV4cG9ydCBjb25zdCBDZWxsID0gT2JqZWN0LmZyZWV6ZSh7IERlYWQ6MCxBbGl2ZToxLCB9KTtcbi8qKlxuKi9cbmV4cG9ydCBjbGFzcyBVbml2ZXJzZSB7XG5cbiAgICBzdGF0aWMgX193cmFwKHB0cikge1xuICAgICAgICBjb25zdCBvYmogPSBPYmplY3QuY3JlYXRlKFVuaXZlcnNlLnByb3RvdHlwZSk7XG4gICAgICAgIG9iai5wdHIgPSBwdHI7XG5cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICBmcmVlKCkge1xuICAgICAgICBjb25zdCBwdHIgPSB0aGlzLnB0cjtcbiAgICAgICAgdGhpcy5wdHIgPSAwO1xuXG4gICAgICAgIHdhc20uX193YmdfdW5pdmVyc2VfZnJlZShwdHIpO1xuICAgIH1cbiAgICAvKipcbiAgICAqIEByZXR1cm5zIHtVbml2ZXJzZX1cbiAgICAqL1xuICAgIHN0YXRpYyBuZXcoKSB7XG4gICAgICAgIHZhciByZXQgPSB3YXNtLnVuaXZlcnNlX25ldygpO1xuICAgICAgICByZXR1cm4gVW5pdmVyc2UuX193cmFwKHJldCk7XG4gICAgfVxuICAgIC8qKlxuICAgICovXG4gICAgdGljaygpIHtcbiAgICAgICAgd2FzbS51bml2ZXJzZV90aWNrKHRoaXMucHRyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge251bWJlcn0gcm93XG4gICAgKiBAcGFyYW0ge251bWJlcn0gY29sXG4gICAgKi9cbiAgICB0b2dnbGVfY2VsbChyb3csIGNvbCkge1xuICAgICAgICB3YXNtLnVuaXZlcnNlX3RvZ2dsZV9jZWxsKHRoaXMucHRyLCByb3csIGNvbCk7XG4gICAgfVxuICAgIC8qKlxuICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAqL1xuICAgIGhlaWdodCgpIHtcbiAgICAgICAgdmFyIHJldCA9IHdhc20udW5pdmVyc2VfaGVpZ2h0KHRoaXMucHRyKTtcbiAgICAgICAgcmV0dXJuIHJldCA+Pj4gMDtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICovXG4gICAgd2lkdGgoKSB7XG4gICAgICAgIHZhciByZXQgPSB3YXNtLnVuaXZlcnNlX3dpZHRoKHRoaXMucHRyKTtcbiAgICAgICAgcmV0dXJuIHJldCA+Pj4gMDtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgd2FzbS51bml2ZXJzZV9yZW5kZXIoOCwgdGhpcy5wdHIpO1xuICAgICAgICAgICAgdmFyIHIwID0gZ2V0SW50MzJNZW1vcnkwKClbOCAvIDQgKyAwXTtcbiAgICAgICAgICAgIHZhciByMSA9IGdldEludDMyTWVtb3J5MCgpWzggLyA0ICsgMV07XG4gICAgICAgICAgICByZXR1cm4gZ2V0U3RyaW5nRnJvbVdhc20wKHIwLCByMSk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB3YXNtLl9fd2JpbmRnZW5fZnJlZShyMCwgcjEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAqL1xuICAgIGNlbGxzKCkge1xuICAgICAgICB2YXIgcmV0ID0gd2FzbS51bml2ZXJzZV9jZWxscyh0aGlzLnB0cik7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgX193YmluZGdlbl90aHJvdyA9IGZ1bmN0aW9uKGFyZzAsIGFyZzEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzAsIGFyZzEpKTtcbn07XG5cbiIsImltcG9ydCB7IFVuaXZlcnNlLCBDZWxsfSBmcm9tIFwiZ2FtZS1vZi1saWZlXCI7XG5pbXBvcnQgeyBtZW1vcnkgfSBmcm9tIFwiZ2FtZS1vZi1saWZlL2dhbWVfb2ZfbGlmZV9iZ1wiO1xuXG5jb25zdCBDRUxMX1NJWkUgPSAxMDtcbmNvbnN0IERFQURfQ09MT1IgPSBcIiNGRkZGRkZcIjtcbmNvbnN0IEdSSURfQ09MT1IgPSBcIiNDQ0NDQ0NcIjtcbmNvbnN0IEFMSVZFX0NPTE9SID0gXCIjMDAwMDAwXCI7XG5cbmNvbnN0IHVuaXZlcnNlID0gVW5pdmVyc2UubmV3KCk7XG5jb25zdCB3aWR0aCA9IHVuaXZlcnNlLndpZHRoKCk7XG5jb25zdCBoZWlnaHQgPSB1bml2ZXJzZS5oZWlnaHQoKTtcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLW9mLWxpZmUtY2FudmFzXCIpO1xuY29uc3QgcGxheVBhdXNlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5LXBhdXNlXCIpO1xuY29uc3Qgc3BlZWRTbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNwZWVkXCIpO1xuY2FudmFzLmhlaWdodCA9IChDRUxMX1NJWkUrMSkqaGVpZ2h0KzE7XG5jYW52YXMud2lkdGggPSAoQ0VMTF9TSVpFKzEpKndpZHRoKzE7XG5cbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5jb25zdCBnZXRJbmRleCA9IChyb3csIGNvbHVtbikgPT4ge1xuICAgIHJldHVybiByb3cgKiB3aWR0aCArIGNvbHVtblxufTtcblxubGV0IGFuaW1hdGlvbklkID0gbnVsbDtcblxuY29uc3QgZHJhd0dyaWQgPSAoKSA9PiB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IEdSSURfQ09MT1I7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDw9IHdpZHRoOyBpKyspIHtcbiAgICAgICAgY3R4Lm1vdmVUbyhpICogKENFTExfU0laRSArIDEpICsgMSwgMCk7XG4gICAgICAgIGN0eC5saW5lVG8oaSogKENFTExfU0laRSArIDEpICsgMSwgKENFTExfU0laRSArIDEpICogaGVpZ2h0ICsxKTtcbiAgICB9XG5cbiAgICBcbiAgICBmb3IobGV0IGkgPSAwOyBpIDw9IGhlaWdodDsgaSsrKSB7XG4gICAgICAgIGN0eC5tb3ZlVG8oMCwgaSAqIChDRUxMX1NJWkUgKyAxKSArIDEpO1xuICAgICAgICBjdHgubGluZVRvKCAoQ0VMTF9TSVpFICsgMSkgKiB3aWR0aCArMSwgaSAqIChDRUxMX1NJWkUgKyAxKSArIDEgKTtcbiAgICB9XG5cbiAgICBjdHguc3Ryb2tlKCk7XG59O1xuXG5cbmNvbnN0IGRyYXdDZWxscyA9ICgpID0+IHtcbiAgICBjb25zdCBjZWxsc1B0ciA9IHVuaXZlcnNlLmNlbGxzKCk7XG5cbiAgICBjb25zdCBjZWxscyA9IG5ldyBVaW50OEFycmF5KG1lbW9yeS5idWZmZXIsIGNlbGxzUHRyLHdpZHRoICogaGVpZ2h0KTtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgIGZvcihsZXQgcm93ID0gMDsgcm93IDwgaGVpZ2h0OyByb3crKykge1xuICAgICAgICBmb3IobGV0IGNvbCA9IDA7IGNvbCA8IHdpZHRoOyBjb2wrKykge1xuICAgICAgICAgICAgY29uc3QgaWR4ID0gZ2V0SW5kZXgocm93LGNvbCk7XG5cbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBjZWxsc1tpZHhdID09PSBDZWxsLkRlYWQgPyBERUFEX0NPTE9SIDogQUxJVkVfQ09MT1I7XG5cbiAgICAgICAgICAgIGN0eC5maWxsUmVjdChcbiAgICAgICAgICAgICAgICBjb2wgKiAoQ0VMTF9TSVpFICsgMSkgKyAxLFxuICAgICAgICAgICAgICAgIHJvdyAqIChDRUxMX1NJWkUgKyAxKSArIDEsXG4gICAgICAgICAgICAgICAgQ0VMTF9TSVpFLFxuICAgICAgICAgICAgICAgIENFTExfU0laRVxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfVxuICAgIGN0eC5zdHJva2UoKTtcbn07XG5cbmxldCBmcmFtZU5yID0gMDtcblxuY29uc3QgcmVuZGVyTG9vcCA9ICgpID0+IHtcbiAgIFxuICAgIGZyYW1lTnIgPSAoZnJhbWVOciArIDEpICUgMTE7XG4gICAgaWYoMTEgLSBzcGVlZFNsaWRlci52YWx1ZSA9PSBmcmFtZU5yKSB7XG4gICAgICAgIHVuaXZlcnNlLnRpY2soKTtcbiAgICAgICAgZHJhd0dyaWQoKTtcbiAgICAgICAgZHJhd0NlbGxzKCk7XG4gICAgICAgIGZyYW1lTnIgPSAwO1xuICAgIH1cblxuICAgIGFuaW1hdGlvbklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlckxvb3ApO1xufTtcblxuY29uc3QgaXNQYXVzZWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGFuaW1hdGlvbklkID09PSBudWxsXG59O1xuXG5jb25zdCBwbGF5ID0gKCkgPT4ge1xuICAgIHBsYXlQYXVzZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwi4o+4XCI7XG4gICAgcmVuZGVyTG9vcCgpO1xufTtcblxuY29uc3QgcGF1c2UgPSAoKSA9PiB7XG4gICAgcGxheVBhdXNlQnV0dG9uLnRleHRDb250ZW50ID0gXCLilrZcIjtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25JZCk7XG4gICAgYW5pbWF0aW9uSWQ9bnVsbDtcbn07XG5cbnBsYXlQYXVzZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnQgPT4ge1xuICAgIGlmIChpc1BhdXNlZCgpKSB7XG4gICAgICAgIHBsYXkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwYXVzZSgpO1xuICAgIH1cbn0pO1xuXG5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHtcbiAgICBjb25zdCBib3VuZGluZ1JlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBjb25zdCBzY2FsZVggPSBjYW52YXMud2lkdGggLyBib3VuZGluZ1JlY3Qud2lkdGg7XG4gICAgY29uc3Qgc2NhbGVZID0gY2FudmFzLmhlaWdodCAvIGJvdW5kaW5nUmVjdC5oZWlnaHQ7XG5cbiAgICBjb25zdCBjYW52YXNMZWZ0ID0gKGV2ZW50LmNsaWVudFggLSBib3VuZGluZ1JlY3QubGVmdCkgKiBzY2FsZVg7XG4gICAgY29uc3QgY2FudmFzVG9wID0gKGV2ZW50LmNsaWVudFkgLSBib3VuZGluZ1JlY3QudG9wKSAqIHNjYWxlWTtcblxuICAgIGNvbnN0IHJvdyA9IE1hdGgubWluKE1hdGguZmxvb3IoY2FudmFzVG9wIC8gKENFTExfU0laRSArIDEpKSwgaGVpZ2h0IC0gMSk7XG4gICAgY29uc3QgY29sID0gTWF0aC5taW4oTWF0aC5mbG9vcihjYW52YXNMZWZ0IC8gKENFTExfU0laRSArIDEpKSwgd2lkdGggLSAxKTtcblxuICAgIHVuaXZlcnNlLnRvZ2dsZV9jZWxsKHJvdywgY29sKTtcblxuICAgIGRyYXdHcmlkKCk7XG4gICAgZHJhd0NlbGxzKCk7XG59KTtcblxuZHJhd0dyaWQoKTtcbmRyYXdDZWxscygpO1xucGxheSgpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=