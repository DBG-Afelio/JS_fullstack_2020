/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/hanoi/Disk.ts":
/*!***************************!*\
  !*** ./src/hanoi/Disk.ts ***!
  \***************************/
/*! exports provided: Disk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Disk", function() { return Disk; });
var Disk = /** @class */ (function () {
    function Disk(id) {
        this.id = id;
        this.id = id;
    }
    Disk.prototype.setId = function (idIn) {
        this.id = idIn;
    };
    Disk.prototype.getId = function () {
        return this.id;
    };
    return Disk;
}());



/***/ }),

/***/ "./src/hanoi/Plateau.ts":
/*!******************************!*\
  !*** ./src/hanoi/Plateau.ts ***!
  \******************************/
/*! exports provided: Plateau */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plateau", function() { return Plateau; });
/* harmony import */ var _Tour__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tour */ "./src/hanoi/Tour.ts");
/* harmony import */ var _TourEnum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TourEnum */ "./src/hanoi/TourEnum.ts");


var Plateau = /** @class */ (function () {
    function Plateau(challenge, nbDisk) {
        if (nbDisk === void 0) { nbDisk = 8; }
        this.challenge = challenge;
        this.nbDisk = nbDisk;
        this.tourGauche = new _Tour__WEBPACK_IMPORTED_MODULE_0__["Tour"](_TourEnum__WEBPACK_IMPORTED_MODULE_1__["TourId"].GAUCHE, []);
        this.tourGauche.setFullStack(nbDisk);
        this.tourCentre = new _Tour__WEBPACK_IMPORTED_MODULE_0__["Tour"](_TourEnum__WEBPACK_IMPORTED_MODULE_1__["TourId"].CENTRE, []);
        this.tourDroite = new _Tour__WEBPACK_IMPORTED_MODULE_0__["Tour"](_TourEnum__WEBPACK_IMPORTED_MODULE_1__["TourId"].DROITE, []);
        this.movesCount = 0;
        this.challenge = { accepted: false, bet: 100 };
        this.nbDisk = nbDisk;
    }
    Plateau.prototype.showPlateau = function () {
        console.log("Jeu en cours : ");
        this.tourGauche.showStack();
        this.tourCentre.showStack();
        this.tourDroite.showStack();
    };
    Plateau.prototype.startOver = function () {
        this.tourGauche.setFullStack(this.nbDisk);
        this.tourCentre.setEmptyStack();
        this.tourDroite.setEmptyStack();
        console.log("//-*-*-*-*-*-*-*-*- Let's start over again -*-*-*-*-*-*-*-*-//");
    };
    Plateau.prototype.getTourById = function (id) {
        var tour = this.tourCentre; //je n'arrive pas a initialiser correctement tour ---- ? let tour: Tour = { id : ... , stack : ....};
        switch (id) {
            case _TourEnum__WEBPACK_IMPORTED_MODULE_1__["TourId"].GAUCHE: {
                tour = this.tourGauche;
                break;
            }
            case _TourEnum__WEBPACK_IMPORTED_MODULE_1__["TourId"].CENTRE: {
                tour = this.tourCentre;
                break;
            }
            case _TourEnum__WEBPACK_IMPORTED_MODULE_1__["TourId"].DROITE: {
                tour = this.tourDroite;
                break;
            }
        }
        return tour;
    };
    Plateau.prototype.moveDisk = function (fromTour, toTour) {
        var moveOK = false;
        if (fromTour !== toTour) {
            var diskToMove = this.getTourById(fromTour).unstackDisk();
            if (diskToMove !== undefined && this.getTourById(toTour).stackDisk(diskToMove)) {
                this.incrementsMoves();
                moveOK = true;
                console.log('*** Move DONE ***');
            }
            else {
                console.log('!!! Move IMPOSSIBLE !!!');
            }
        }
        else {
            console.log('!!! Choose 2 differents Tours to allow a move !!!');
        }
        return moveOK;
    };
    Plateau.prototype.incrementsMoves = function () {
        this.movesCount += 1;
    };
    Plateau.prototype.getMovesCount = function () {
        return this.movesCount;
    };
    Plateau.prototype.isWin = function () {
        return (this.tourGauche.isStackEmpty() && this.tourCentre.isStackEmpty() && this.tourDroite.isStackFull());
    };
    Plateau.prototype.isGameOver = function () {
        return this.challenge.accepted === true && this.movesCount > this.challenge.bet && !this.isWin();
    };
    return Plateau;
}());



/***/ }),

/***/ "./src/hanoi/Tour.ts":
/*!***************************!*\
  !*** ./src/hanoi/Tour.ts ***!
  \***************************/
/*! exports provided: Tour */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tour", function() { return Tour; });
/* harmony import */ var _Disk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Disk */ "./src/hanoi/Disk.ts");

var Tour = /** @class */ (function () {
    function Tour(id, stack) {
        this.id = id;
        this.stack = stack;
        this.id = id;
        this.stack = stack;
    }
    Tour.prototype.getId = function () {
        return this.id;
    };
    Tour.prototype.setId = function (idIn) {
        this.id = idIn;
    };
    Tour.prototype.showStack = function () {
        console.log(this.id);
        this.stack.forEach(function (disk) { return console.log(disk.getId()); });
    };
    Tour.prototype.setFullStack = function (nbDisk) {
        if (nbDisk === void 0) { nbDisk = 8; }
        this.stack = [];
        for (var d = 0; d < nbDisk; d++) {
            var disk = new _Disk__WEBPACK_IMPORTED_MODULE_0__["Disk"](d);
            this.stack.push(disk);
        }
    };
    Tour.prototype.setEmptyStack = function () {
        this.stack = [];
    };
    Tour.prototype.isStackEmpty = function () {
        return this.stack === [];
    };
    Tour.prototype.isStackFull = function () {
        return this.stack.every(function (disk, index) { return disk.getId() === index; });
    };
    Tour.prototype.getNbDisk = function () {
        return this.stack.length;
    };
    Tour.prototype.getDiskOnTop = function () {
        if (this.getNbDisk() !== 0) {
            return this.stack[0];
        }
        else {
            return null;
        }
    };
    Tour.prototype.stackDisk = function (diskIn) {
        var ajoutOk = false;
        var diskOnTop = this.getDiskOnTop();
        if (diskOnTop === null || diskOnTop.getId() > diskIn.getId()) {
            this.stack.splice(0, 0, diskIn); //0 <=> ajoute diskIn a l'index 0, 0 <=> sans supprimer le reste
            ajoutOk = true;
        }
        return ajoutOk;
    };
    Tour.prototype.unstackDisk = function () {
        return this.stack.shift();
    };
    return Tour;
}());



/***/ }),

/***/ "./src/hanoi/TourEnum.ts":
/*!*******************************!*\
  !*** ./src/hanoi/TourEnum.ts ***!
  \*******************************/
/*! exports provided: TourId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourId", function() { return TourId; });
var TourId;
(function (TourId) {
    TourId["GAUCHE"] = "GAUCHE";
    TourId["CENTRE"] = "CENTRE";
    TourId["DROITE"] = "DROITE";
})(TourId || (TourId = {}));


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hanoi_Plateau__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hanoi/Plateau */ "./src/hanoi/Plateau.ts");
/* harmony import */ var _hanoi_TourEnum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hanoi/TourEnum */ "./src/hanoi/TourEnum.ts");


var nbDisk = 8;
var jeu = new _hanoi_Plateau__WEBPACK_IMPORTED_MODULE_0__["Plateau"]({ accepted: false, bet: 0 }, nbDisk);
jeu.showPlateau();
console.log("coups: " + jeu.getMovesCount() + " - jeu gagned: " + jeu.isWin());
console.log(jeu.moveDisk(_hanoi_TourEnum__WEBPACK_IMPORTED_MODULE_1__["TourId"].GAUCHE, _hanoi_TourEnum__WEBPACK_IMPORTED_MODULE_1__["TourId"].DROITE));
jeu.showPlateau();
console.log("coups: " + jeu.getMovesCount() + " - jeu gagned: " + jeu.isWin());
console.log(jeu.moveDisk(_hanoi_TourEnum__WEBPACK_IMPORTED_MODULE_1__["TourId"].GAUCHE, _hanoi_TourEnum__WEBPACK_IMPORTED_MODULE_1__["TourId"].CENTRE));
jeu.showPlateau();
console.log("coups: " + jeu.getMovesCount() + " - jeu gagned: " + jeu.isWin());
console.log(jeu.moveDisk(_hanoi_TourEnum__WEBPACK_IMPORTED_MODULE_1__["TourId"].DROITE, _hanoi_TourEnum__WEBPACK_IMPORTED_MODULE_1__["TourId"].CENTRE));
jeu.showPlateau();
console.log("coups: " + jeu.getMovesCount() + " - jeu gagned: " + jeu.isWin());
console.log(jeu.moveDisk(_hanoi_TourEnum__WEBPACK_IMPORTED_MODULE_1__["TourId"].DROITE, _hanoi_TourEnum__WEBPACK_IMPORTED_MODULE_1__["TourId"].CENTRE));
jeu.showPlateau();
console.log("coups: " + jeu.getMovesCount() + " - jeu gagned: " + jeu.isWin());
//console.log(jeu.getTourById(TourId.DROITE).getNbDisk());
jeu.startOver();
jeu.showPlateau();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbm9pL0Rpc2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbm9pL1BsYXRlYXUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbm9pL1RvdXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbm9pL1RvdXJFbnVtLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0lBRUksY0FBb0IsRUFBVTtRQUFWLE9BQUUsR0FBRixFQUFFLENBQVE7UUFDMUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVNLG9CQUFLLEdBQVosVUFBYSxJQUFZO1FBQ3JCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFD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QUcsQ0FBQyxhQUFhLEVBQUUsdUJBQWtCLEdBQUcsQ0FBQyxLQUFLLEVBQUksQ0FBQyxDQUFDO0FBQzFFLDBEQUEwRDtBQUUxRCxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDaEIsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLnRzXCIpO1xuIiwiZXhwb3J0IGNsYXNzIERpc2sge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpZDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0SWQoaWRJbjogbnVtYmVyKTp2b2lkIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkSW47XG4gICAgfVxuXG4gICAgcHVibGljIGdldElkKCk6IG51bWJlcntcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XG4gICAgfVxufSIsImltcG9ydCB7IFRvdXIgfSBmcm9tIFwiLi9Ub3VyXCI7XG5pbXBvcnQgeyBUb3VySWQgfSBmcm9tIFwiLi9Ub3VyRW51bVwiO1xuXG5leHBvcnQgY2xhc3MgUGxhdGVhdSB7XG4gICAgcHJpdmF0ZSB0b3VyR2F1Y2hlOiBUb3VyO1xuICAgIHByaXZhdGUgdG91ckNlbnRyZTogVG91cjtcbiAgICBwcml2YXRlIHRvdXJEcm9pdGU6IFRvdXI7XG4gICAgcHJpdmF0ZSBtb3Zlc0NvdW50OiBudW1iZXI7XG4gICAgXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgY2hhbGxlbmdlOiB7IGFjY2VwdGVkOiBib29sZWFuLCBiZXQ6IG51bWJlcn0sIHByaXZhdGUgbmJEaXNrOm51bWJlciA9IDhcbiAgICApIHtcbiAgICAgICAgdGhpcy50b3VyR2F1Y2hlID0gbmV3IFRvdXIoVG91cklkLkdBVUNIRSwgW10pO1xuICAgICAgICB0aGlzLnRvdXJHYXVjaGUuc2V0RnVsbFN0YWNrKG5iRGlzayk7XG4gICAgICAgIHRoaXMudG91ckNlbnRyZSA9IG5ldyBUb3VyKFRvdXJJZC5DRU5UUkUsIFtdKTtcbiAgICAgICAgdGhpcy50b3VyRHJvaXRlID0gbmV3IFRvdXIoVG91cklkLkRST0lURSwgW10pO1xuICAgICAgICB0aGlzLm1vdmVzQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmNoYWxsZW5nZSA9IHsgYWNjZXB0ZWQ6IGZhbHNlLCBiZXQ6IDEwMCB9O1xuICAgICAgICB0aGlzLm5iRGlzayA9IG5iRGlzaztcblxuICAgIH1cbiAgICBwdWJsaWMgc2hvd1BsYXRlYXUoKTogdm9pZHtcbiAgICAgICAgY29uc29sZS5sb2coYEpldSBlbiBjb3VycyA6IGApOyAgIFxuICAgICAgICB0aGlzLnRvdXJHYXVjaGUuc2hvd1N0YWNrKCk7XG4gICAgICAgIHRoaXMudG91ckNlbnRyZS5zaG93U3RhY2soKTtcbiAgICAgICAgdGhpcy50b3VyRHJvaXRlLnNob3dTdGFjaygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGFydE92ZXIoKTogdm9pZHtcbiAgICAgICAgdGhpcy50b3VyR2F1Y2hlLnNldEZ1bGxTdGFjayh0aGlzLm5iRGlzayk7XG4gICAgICAgIHRoaXMudG91ckNlbnRyZS5zZXRFbXB0eVN0YWNrKCk7XG4gICAgICAgIHRoaXMudG91ckRyb2l0ZS5zZXRFbXB0eVN0YWNrKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLy8tKi0qLSotKi0qLSotKi0qLSBMZXQncyBzdGFydCBvdmVyIGFnYWluIC0qLSotKi0qLSotKi0qLSotLy9cIik7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFRvdXJCeUlkKGlkOiBUb3VySWQpOiBUb3Vye1xuICAgICAgICBsZXQgdG91ciA9IHRoaXMudG91ckNlbnRyZTsgLy9qZSBuJ2Fycml2ZSBwYXMgYSBpbml0aWFsaXNlciBjb3JyZWN0ZW1lbnQgdG91ciAtLS0tID8gbGV0IHRvdXI6IFRvdXIgPSB7IGlkIDogLi4uICwgc3RhY2sgOiAuLi4ufTtcbiAgICAgICAgc3dpdGNoIChpZCkge1xuICAgICAgICAgICAgY2FzZSBUb3VySWQuR0FVQ0hFOiB7XG4gICAgICAgICAgICAgICAgdG91ciA9IHRoaXMudG91ckdhdWNoZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgIGNhc2UgVG91cklkLkNFTlRSRToge1xuICAgICAgICAgICAgICAgIHRvdXIgPSB0aGlzLnRvdXJDZW50cmU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFRvdXJJZC5EUk9JVEU6IHtcbiAgICAgICAgICAgICAgICB0b3VyID0gdGhpcy50b3VyRHJvaXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b3VyO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgbW92ZURpc2soZnJvbVRvdXI6IFRvdXJJZCwgdG9Ub3VyOiBUb3VySWQpOiBib29sZWFue1xuICAgICAgICBsZXQgbW92ZU9LOiBib29sZWFuID0gZmFsc2U7XG4gICAgICAgIGlmIChmcm9tVG91ciAhPT0gdG9Ub3VyKSB7XG4gICAgICAgICAgICBjb25zdCBkaXNrVG9Nb3ZlID0gdGhpcy5nZXRUb3VyQnlJZChmcm9tVG91cikudW5zdGFja0Rpc2soKTtcbiAgICAgICAgICAgIGlmIChkaXNrVG9Nb3ZlICE9PSB1bmRlZmluZWQgJiYgdGhpcy5nZXRUb3VyQnlJZCh0b1RvdXIpLnN0YWNrRGlzayhkaXNrVG9Nb3ZlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5jcmVtZW50c01vdmVzKCk7XG4gICAgICAgICAgICAgICAgbW92ZU9LID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnKioqIE1vdmUgRE9ORSAqKionKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyEhISBNb3ZlIElNUE9TU0lCTEUgISEhJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnISEhIENob29zZSAyIGRpZmZlcmVudHMgVG91cnMgdG8gYWxsb3cgYSBtb3ZlICEhIScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb3ZlT0s7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbmNyZW1lbnRzTW92ZXMoKTogdm9pZHtcbiAgICAgICAgdGhpcy5tb3Zlc0NvdW50ICs9IDE7XG4gICAgfVxuXG4gICAgcHVibGljIGdldE1vdmVzQ291bnQoKTogbnVtYmVye1xuICAgICAgICByZXR1cm4gdGhpcy5tb3Zlc0NvdW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBpc1dpbigpOiBib29sZWFue1xuICAgICAgICByZXR1cm4gKHRoaXMudG91ckdhdWNoZS5pc1N0YWNrRW1wdHkoKSAmJiB0aGlzLnRvdXJDZW50cmUuaXNTdGFja0VtcHR5KCkgJiYgdGhpcy50b3VyRHJvaXRlLmlzU3RhY2tGdWxsKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc0dhbWVPdmVyKCk6IGJvb2xlYW57XG4gICAgICAgIHJldHVybiB0aGlzLmNoYWxsZW5nZS5hY2NlcHRlZCA9PT0gdHJ1ZSAmJiB0aGlzLm1vdmVzQ291bnQgPiB0aGlzLmNoYWxsZW5nZS5iZXQgJiYgIXRoaXMuaXNXaW4oKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlzayB9IGZyb20gXCIuL0Rpc2tcIjtcbmltcG9ydCB7IFRvdXJJZCB9IGZyb20gXCIuL1RvdXJFbnVtXCI7XG5cbmV4cG9ydCBjbGFzcyBUb3VyIHtcbiAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpZDogVG91cklkLCBwcml2YXRlIHN0YWNrOiBEaXNrW10pIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnN0YWNrID0gc3RhY2s7XG4gICAgfVxuXG4gICAgcHVibGljIGdldElkKCk6IFRvdXJJZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRJZChpZEluOiBUb3VySWQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkSW47XG4gICAgfVxuICAgIFxuXG4gICAgcHVibGljIHNob3dTdGFjaygpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pZCk7XG4gICAgICAgIHRoaXMuc3RhY2suZm9yRWFjaChkaXNrID0+IGNvbnNvbGUubG9nKGRpc2suZ2V0SWQoKSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRGdWxsU3RhY2sobmJEaXNrOiBudW1iZXIgPSA4KTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhY2sgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgZDogbnVtYmVyID0gMDsgZCA8IG5iRGlzazsgZCsrKSB7XG4gICAgICAgICAgICBjb25zdCBkaXNrID0gbmV3IERpc2soZCk7XG4gICAgICAgICAgICB0aGlzLnN0YWNrLnB1c2goZGlzayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0RW1wdHlTdGFjaygpOiB2b2lke1xuICAgICAgICB0aGlzLnN0YWNrID0gW107XG4gICAgfVxuXG4gICAgcHVibGljIGlzU3RhY2tFbXB0eSgpOiBib29sZWFue1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFjayA9PT0gW107XG4gICAgfVxuXG4gICAgcHVibGljIGlzU3RhY2tGdWxsKCk6IGJvb2xlYW57XG4gICAgICAgIHJldHVybiB0aGlzLnN0YWNrLmV2ZXJ5KChkaXNrLCBpbmRleCkgPT4gZGlzay5nZXRJZCgpID09PSBpbmRleCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldE5iRGlzaygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFjay5sZW5ndGg7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXREaXNrT25Ub3AoKTogRGlzayB8IG51bGwge1xuICAgICAgICBpZiAodGhpcy5nZXROYkRpc2soKSAhPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhY2tbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgc3RhY2tEaXNrKGRpc2tJbjogRGlzayk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgYWpvdXRPazogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICBjb25zdCBkaXNrT25Ub3A6IERpc2sgfCBudWxsID0gdGhpcy5nZXREaXNrT25Ub3AoKTtcbiAgICAgICAgaWYgKGRpc2tPblRvcCA9PT0gbnVsbCB8fCBkaXNrT25Ub3AuZ2V0SWQoKSA+IGRpc2tJbi5nZXRJZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnN0YWNrLnNwbGljZSgwLCAwLCBkaXNrSW4pOyAvLzAgPD0+IGFqb3V0ZSBkaXNrSW4gYSBsJ2luZGV4IDAsIDAgPD0+IHNhbnMgc3VwcHJpbWVyIGxlIHJlc3RlXG4gICAgICAgICAgICBham91dE9rID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWpvdXRPaztcbiAgICB9XG5cbiAgICBwdWJsaWMgdW5zdGFja0Rpc2soKTogRGlzayB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YWNrLnNoaWZ0KCk7XG4gICAgfVxuXG59IiwiZXhwb3J0IGVudW0gVG91cklkIHtcbiAgICBHQVVDSEUgPSBcIkdBVUNIRVwiLFxuICAgIENFTlRSRSA9IFwiQ0VOVFJFXCIsXG4gICAgRFJPSVRFID0gXCJEUk9JVEVcIlxufSAiLCJpbXBvcnQgeyBQbGF0ZWF1IH0gZnJvbSBcIi4vaGFub2kvUGxhdGVhdVwiO1xuaW1wb3J0IHsgVG91cklkIH0gZnJvbSBcIi4vaGFub2kvVG91ckVudW1cIjtcblxuY29uc3QgbmJEaXNrOiBudW1iZXIgPSA4O1xuXG5sZXQgamV1ID0gbmV3IFBsYXRlYXUoeyBhY2NlcHRlZDogZmFsc2UsIGJldDogMCB9LG5iRGlzayk7XG5qZXUuc2hvd1BsYXRlYXUoKTtcbmNvbnNvbGUubG9nKGBjb3VwczogJHtqZXUuZ2V0TW92ZXNDb3VudCgpfSAtIGpldSBnYWduZWQ6ICR7amV1LmlzV2luKCl9YCk7XG5cbmNvbnNvbGUubG9nKGpldS5tb3ZlRGlzayhUb3VySWQuR0FVQ0hFLCBUb3VySWQuRFJPSVRFKSk7XG5qZXUuc2hvd1BsYXRlYXUoKTtcbmNvbnNvbGUubG9nKGBjb3VwczogJHtqZXUuZ2V0TW92ZXNDb3VudCgpfSAtIGpldSBnYWduZWQ6ICR7amV1LmlzV2luKCl9YCk7XG5cbmNvbnNvbGUubG9nKGpldS5tb3ZlRGlzayhUb3VySWQuR0FVQ0hFLCBUb3VySWQuQ0VOVFJFKSk7XG5qZXUuc2hvd1BsYXRlYXUoKTtcbmNvbnNvbGUubG9nKGBjb3VwczogJHtqZXUuZ2V0TW92ZXNDb3VudCgpfSAtIGpldSBnYWduZWQ6ICR7amV1LmlzV2luKCl9YCk7XG5cbmNvbnNvbGUubG9nKGpldS5tb3ZlRGlzayhUb3VySWQuRFJPSVRFLCBUb3VySWQuQ0VOVFJFKSk7XG5qZXUuc2hvd1BsYXRlYXUoKTtcbmNvbnNvbGUubG9nKGBjb3VwczogJHtqZXUuZ2V0TW92ZXNDb3VudCgpfSAtIGpldSBnYWduZWQ6ICR7amV1LmlzV2luKCl9YCk7XG5cbmNvbnNvbGUubG9nKGpldS5tb3ZlRGlzayhUb3VySWQuRFJPSVRFLCBUb3VySWQuQ0VOVFJFKSk7XG5qZXUuc2hvd1BsYXRlYXUoKTtcbmNvbnNvbGUubG9nKGBjb3VwczogJHtqZXUuZ2V0TW92ZXNDb3VudCgpfSAtIGpldSBnYWduZWQ6ICR7amV1LmlzV2luKCl9YCk7XG4vL2NvbnNvbGUubG9nKGpldS5nZXRUb3VyQnlJZChUb3VySWQuRFJPSVRFKS5nZXROYkRpc2soKSk7XG5cbmpldS5zdGFydE92ZXIoKTtcbmpldS5zaG93UGxhdGVhdSgpOyJdLCJzb3VyY2VSb290IjoiIn0=