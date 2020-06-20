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
    function Plateau(challenge) {
        this.challenge = challenge;
        this.tourGauche = new _Tour__WEBPACK_IMPORTED_MODULE_0__["Tour"](_TourEnum__WEBPACK_IMPORTED_MODULE_1__["TourId"].GAUCHE, []);
        this.tourGauche.setFullStack(8);
        this.tourCentre = new _Tour__WEBPACK_IMPORTED_MODULE_0__["Tour"](_TourEnum__WEBPACK_IMPORTED_MODULE_1__["TourId"].CENTRE, []);
        this.tourDroite = new _Tour__WEBPACK_IMPORTED_MODULE_0__["Tour"](_TourEnum__WEBPACK_IMPORTED_MODULE_1__["TourId"].DROITE, []);
        this.movesCount = 0;
        this.challenge = { accepted: false, bet: 100 };
    }
    Plateau.prototype.showPlateau = function () {
        console.log("Jeu en cours : ");
        this.tourGauche.showStack();
        this.tourCentre.showStack();
        this.tourDroite.showStack();
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


var jeu = new _hanoi_Plateau__WEBPACK_IMPORTED_MODULE_0__["Plateau"]({ accepted: false, bet: 0 });
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbm9pL0Rpc2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbm9pL1BsYXRlYXUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbm9pL1RvdXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbm9pL1RvdXJFbnVtLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0lBRUksY0FBb0IsRUFBVTtRQUFWLE9BQUUsR0FBRixFQUFFLENBQVE7UUFDMUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVNLG9CQUFLLEdBQVosVUFBYSxJQUFZO1FBQ3JCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFD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TSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDeEQsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBVSxHQUFHLENBQUMsYUFBYSxFQUFFLHVCQUFrQixHQUFHLENBQUMsS0FBSyxFQUFJLENBQUMsQ0FBQztBQUUxRSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsc0RBQU0sQ0FBQyxNQUFNLEVBQUUsc0RBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ3hELEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVUsR0FBRyxDQUFDLGFBQWEsRUFBRSx1QkFBa0IsR0FBRyxDQUFDLEtBQUssRUFBSSxDQUFDLENBQUM7QUFFMUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLHNEQUFNLENBQUMsTUFBTSxFQUFFLHNEQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUN4RCxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFVLEdBQUcsQ0FBQyxhQUFhLEVBQUUsdUJBQWtCLEdBQUcsQ0FBQyxLQUFLLEVBQUksQ0FBQyxDQUFDO0FBQzFFLDBEQUEwRCIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsImV4cG9ydCBjbGFzcyBEaXNrIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaWQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldElkKGlkSW46IG51bWJlcik6dm9pZCB7XG4gICAgICAgIHRoaXMuaWQgPSBpZEluO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJZCgpOiBudW1iZXJ7XG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBUb3VyIH0gZnJvbSBcIi4vVG91clwiO1xuaW1wb3J0IHsgVG91cklkIH0gZnJvbSBcIi4vVG91ckVudW1cIjtcblxuZXhwb3J0IGNsYXNzIFBsYXRlYXUge1xuICAgIHByaXZhdGUgdG91ckdhdWNoZTogVG91cjtcbiAgICBwcml2YXRlIHRvdXJDZW50cmU6IFRvdXI7XG4gICAgcHJpdmF0ZSB0b3VyRHJvaXRlOiBUb3VyO1xuICAgIHByaXZhdGUgbW92ZXNDb3VudDogbnVtYmVyO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGNoYWxsZW5nZTogeyBhY2NlcHRlZDogYm9vbGVhbiwgYmV0OiBudW1iZXJ9LFxuICAgICkge1xuICAgICAgICB0aGlzLnRvdXJHYXVjaGUgPSBuZXcgVG91cihUb3VySWQuR0FVQ0hFLCBbXSk7XG4gICAgICAgIHRoaXMudG91ckdhdWNoZS5zZXRGdWxsU3RhY2soOCk7XG4gICAgICAgIHRoaXMudG91ckNlbnRyZSA9IG5ldyBUb3VyKFRvdXJJZC5DRU5UUkUsIFtdKTtcbiAgICAgICAgdGhpcy50b3VyRHJvaXRlID0gbmV3IFRvdXIoVG91cklkLkRST0lURSwgW10pO1xuICAgICAgICB0aGlzLm1vdmVzQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmNoYWxsZW5nZSA9IHsgYWNjZXB0ZWQ6IGZhbHNlLCBiZXQ6IDEwMCB9O1xuXG4gICAgfVxuICAgIHB1YmxpYyBzaG93UGxhdGVhdSgpOiB2b2lke1xuICAgICAgICBjb25zb2xlLmxvZyhgSmV1IGVuIGNvdXJzIDogYCk7ICAgXG4gICAgICAgIHRoaXMudG91ckdhdWNoZS5zaG93U3RhY2soKTtcbiAgICAgICAgdGhpcy50b3VyQ2VudHJlLnNob3dTdGFjaygpO1xuICAgICAgICB0aGlzLnRvdXJEcm9pdGUuc2hvd1N0YWNrKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFRvdXJCeUlkKGlkOiBUb3VySWQpOiBUb3Vye1xuICAgICAgICBsZXQgdG91ciA9IHRoaXMudG91ckNlbnRyZTsgLy9qZSBuJ2Fycml2ZSBwYXMgYSBpbml0aWFsaXNlciBjb3JyZWN0ZW1lbnQgdG91ciAtLS0tID8gbGV0IHRvdXI6IFRvdXIgPSB7IGlkIDogLi4uICwgc3RhY2sgOiAuLi4ufTtcbiAgICAgICAgc3dpdGNoIChpZCkge1xuICAgICAgICAgICAgY2FzZSBUb3VySWQuR0FVQ0hFOiB7XG4gICAgICAgICAgICAgICAgdG91ciA9IHRoaXMudG91ckdhdWNoZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgIGNhc2UgVG91cklkLkNFTlRSRToge1xuICAgICAgICAgICAgICAgIHRvdXIgPSB0aGlzLnRvdXJDZW50cmU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFRvdXJJZC5EUk9JVEU6IHtcbiAgICAgICAgICAgICAgICB0b3VyID0gdGhpcy50b3VyRHJvaXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b3VyO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgbW92ZURpc2soZnJvbVRvdXI6IFRvdXJJZCwgdG9Ub3VyOiBUb3VySWQpOiBib29sZWFue1xuICAgICAgICBsZXQgbW92ZU9LOiBib29sZWFuID0gZmFsc2U7XG4gICAgICAgIGlmIChmcm9tVG91ciAhPT0gdG9Ub3VyKSB7XG4gICAgICAgICAgICBjb25zdCBkaXNrVG9Nb3ZlID0gdGhpcy5nZXRUb3VyQnlJZChmcm9tVG91cikudW5zdGFja0Rpc2soKTtcbiAgICAgICAgICAgIGlmIChkaXNrVG9Nb3ZlICE9PSB1bmRlZmluZWQgJiYgdGhpcy5nZXRUb3VyQnlJZCh0b1RvdXIpLnN0YWNrRGlzayhkaXNrVG9Nb3ZlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5jcmVtZW50c01vdmVzKCk7XG4gICAgICAgICAgICAgICAgbW92ZU9LID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnKioqIE1vdmUgRE9ORSAqKionKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyEhISBNb3ZlIElNUE9TU0lCTEUgISEhJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnISEhIENob29zZSAyIGRpZmZlcmVudHMgVG91cnMgdG8gYWxsb3cgYSBtb3ZlICEhIScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb3ZlT0s7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbmNyZW1lbnRzTW92ZXMoKTogdm9pZHtcbiAgICAgICAgdGhpcy5tb3Zlc0NvdW50ICs9IDE7XG4gICAgfVxuXG4gICAgcHVibGljIGdldE1vdmVzQ291bnQoKTogbnVtYmVye1xuICAgICAgICByZXR1cm4gdGhpcy5tb3Zlc0NvdW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBpc1dpbigpOiBib29sZWFue1xuICAgICAgICByZXR1cm4gKHRoaXMudG91ckdhdWNoZS5pc1N0YWNrRW1wdHkoKSAmJiB0aGlzLnRvdXJDZW50cmUuaXNTdGFja0VtcHR5KCkgJiYgdGhpcy50b3VyRHJvaXRlLmlzU3RhY2tGdWxsKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc0dhbWVPdmVyKCk6IGJvb2xlYW57XG4gICAgICAgIHJldHVybiB0aGlzLmNoYWxsZW5nZS5hY2NlcHRlZCA9PT0gdHJ1ZSAmJiB0aGlzLm1vdmVzQ291bnQgPiB0aGlzLmNoYWxsZW5nZS5iZXQgJiYgIXRoaXMuaXNXaW4oKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlzayB9IGZyb20gXCIuL0Rpc2tcIjtcbmltcG9ydCB7IFRvdXJJZCB9IGZyb20gXCIuL1RvdXJFbnVtXCI7XG5cbmV4cG9ydCBjbGFzcyBUb3VyIHtcbiAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpZDogVG91cklkLCBwcml2YXRlIHN0YWNrOiBEaXNrW10pIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnN0YWNrID0gc3RhY2s7XG4gICAgfVxuXG4gICAgcHVibGljIGdldElkKCk6IFRvdXJJZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRJZChpZEluOiBUb3VySWQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkSW47XG4gICAgfVxuICAgIFxuXG4gICAgcHVibGljIHNob3dTdGFjaygpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pZCk7XG4gICAgICAgIHRoaXMuc3RhY2suZm9yRWFjaChkaXNrID0+IGNvbnNvbGUubG9nKGRpc2suZ2V0SWQoKSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRGdWxsU3RhY2sobmJEaXNrOiBudW1iZXIgPSA4KTogdm9pZCB7XG4gICAgICAgIGZvciAobGV0IGQ6IG51bWJlciA9IDA7IGQgPCBuYkRpc2s7IGQrKykge1xuICAgICAgICAgICAgY29uc3QgZGlzayA9IG5ldyBEaXNrKGQpO1xuICAgICAgICAgICAgdGhpcy5zdGFjay5wdXNoKGRpc2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNldEVtcHR5U3RhY2soKTogdm9pZHtcbiAgICAgICAgdGhpcy5zdGFjayA9IFtdO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc1N0YWNrRW1wdHkoKTogYm9vbGVhbntcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhY2sgPT09IFtdO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc1N0YWNrRnVsbCgpOiBib29sZWFue1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFjay5ldmVyeSgoZGlzaywgaW5kZXgpID0+IGRpc2suZ2V0SWQoKSA9PT0gaW5kZXgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXROYkRpc2soKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhY2subGVuZ3RoO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0RGlza09uVG9wKCk6IERpc2sgfCBudWxsIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0TmJEaXNrKCkgIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YWNrWzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHN0YWNrRGlzayhkaXNrSW46IERpc2spOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGFqb3V0T2s6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgY29uc3QgZGlza09uVG9wOiBEaXNrIHwgbnVsbCA9IHRoaXMuZ2V0RGlza09uVG9wKCk7XG4gICAgICAgIGlmIChkaXNrT25Ub3AgPT09IG51bGwgfHwgZGlza09uVG9wLmdldElkKCkgPiBkaXNrSW4uZ2V0SWQoKSkge1xuICAgICAgICAgICAgdGhpcy5zdGFjay5zcGxpY2UoMCwgMCwgZGlza0luKTsgLy8wIDw9PiBham91dGUgZGlza0luIGEgbCdpbmRleCAwLCAwIDw9PiBzYW5zIHN1cHByaW1lciBsZSByZXN0ZVxuICAgICAgICAgICAgYWpvdXRPayA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFqb3V0T2s7XG4gICAgfVxuXG4gICAgcHVibGljIHVuc3RhY2tEaXNrKCk6IERpc2sgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFjay5zaGlmdCgpO1xuICAgIH1cblxufSIsImV4cG9ydCBlbnVtIFRvdXJJZCB7XG4gICAgR0FVQ0hFID0gXCJHQVVDSEVcIixcbiAgICBDRU5UUkUgPSBcIkNFTlRSRVwiLFxuICAgIERST0lURSA9IFwiRFJPSVRFXCJcbn0gIiwiaW1wb3J0IHsgUGxhdGVhdSB9IGZyb20gXCIuL2hhbm9pL1BsYXRlYXVcIjtcbmltcG9ydCB7IFRvdXJJZCB9IGZyb20gXCIuL2hhbm9pL1RvdXJFbnVtXCI7XG5cbmxldCBqZXUgPSBuZXcgUGxhdGVhdSh7IGFjY2VwdGVkOiBmYWxzZSwgYmV0OiAwIH0pO1xuamV1LnNob3dQbGF0ZWF1KCk7XG5jb25zb2xlLmxvZyhgY291cHM6ICR7amV1LmdldE1vdmVzQ291bnQoKX0gLSBqZXUgZ2FnbmVkOiAke2pldS5pc1dpbigpfWApO1xuXG5jb25zb2xlLmxvZyhqZXUubW92ZURpc2soVG91cklkLkdBVUNIRSwgVG91cklkLkRST0lURSkpO1xuamV1LnNob3dQbGF0ZWF1KCk7XG5jb25zb2xlLmxvZyhgY291cHM6ICR7amV1LmdldE1vdmVzQ291bnQoKX0gLSBqZXUgZ2FnbmVkOiAke2pldS5pc1dpbigpfWApO1xuXG5jb25zb2xlLmxvZyhqZXUubW92ZURpc2soVG91cklkLkdBVUNIRSwgVG91cklkLkNFTlRSRSkpO1xuamV1LnNob3dQbGF0ZWF1KCk7XG5jb25zb2xlLmxvZyhgY291cHM6ICR7amV1LmdldE1vdmVzQ291bnQoKX0gLSBqZXUgZ2FnbmVkOiAke2pldS5pc1dpbigpfWApO1xuXG5jb25zb2xlLmxvZyhqZXUubW92ZURpc2soVG91cklkLkRST0lURSwgVG91cklkLkNFTlRSRSkpO1xuamV1LnNob3dQbGF0ZWF1KCk7XG5jb25zb2xlLmxvZyhgY291cHM6ICR7amV1LmdldE1vdmVzQ291bnQoKX0gLSBqZXUgZ2FnbmVkOiAke2pldS5pc1dpbigpfWApO1xuXG5jb25zb2xlLmxvZyhqZXUubW92ZURpc2soVG91cklkLkRST0lURSwgVG91cklkLkNFTlRSRSkpO1xuamV1LnNob3dQbGF0ZWF1KCk7XG5jb25zb2xlLmxvZyhgY291cHM6ICR7amV1LmdldE1vdmVzQ291bnQoKX0gLSBqZXUgZ2FnbmVkOiAke2pldS5pc1dpbigpfWApO1xuLy9jb25zb2xlLmxvZyhqZXUuZ2V0VG91ckJ5SWQoVG91cklkLkRST0lURSkuZ2V0TmJEaXNrKCkpOyJdLCJzb3VyY2VSb290IjoiIn0=