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
        this.movesCount = 0;
        this.challenge.accepted = false;
        this.challenge.bet = 0;
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
            var diskToMove = this.getTourById(fromTour).getDiskOnTop();
            if (diskToMove !== null && this.getTourById(toTour).stackDisk(diskToMove)) {
                this.getTourById(fromTour).unstackDisk();
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

/***/ "./src/hanoi/PlateauDOMSection.ts":
/*!****************************************!*\
  !*** ./src/hanoi/PlateauDOMSection.ts ***!
  \****************************************/
/*! exports provided: PlateauDOMSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlateauDOMSection", function() { return PlateauDOMSection; });
/* harmony import */ var _TourEnum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TourEnum */ "./src/hanoi/TourEnum.ts");

var PlateauDOMSection = /** @class */ (function () {
    function PlateauDOMSection(jeu, tourGaucheParentNode, tourCentreParentNode, tourDroiteParentNode) {
        this.jeu = jeu;
        this.tourGaucheParentNode = tourGaucheParentNode;
        this.tourCentreParentNode = tourCentreParentNode;
        this.tourDroiteParentNode = tourDroiteParentNode;
        this.jeu = jeu;
        this.tourGaucheParentNode = tourGaucheParentNode;
        this.tourCentreParentNode = tourCentreParentNode;
        this.tourDroiteParentNode = tourDroiteParentNode;
    }
    PlateauDOMSection.prototype.updateAllStacks = function () {
        for (var tourID in _TourEnum__WEBPACK_IMPORTED_MODULE_0__["TourId"]) {
            var tourParentNode = null;
            var stack = [];
            switch (tourID) {
                case _TourEnum__WEBPACK_IMPORTED_MODULE_0__["TourId"].GAUCHE: {
                    tourParentNode = this.tourGaucheParentNode;
                    stack = this.jeu.getTourById(_TourEnum__WEBPACK_IMPORTED_MODULE_0__["TourId"].GAUCHE).getStack();
                    break;
                }
                case _TourEnum__WEBPACK_IMPORTED_MODULE_0__["TourId"].CENTRE: {
                    tourParentNode = this.tourCentreParentNode;
                    stack = this.jeu.getTourById(_TourEnum__WEBPACK_IMPORTED_MODULE_0__["TourId"].CENTRE).getStack();
                    break;
                }
                case _TourEnum__WEBPACK_IMPORTED_MODULE_0__["TourId"].DROITE: {
                    tourParentNode = this.tourDroiteParentNode;
                    stack = this.jeu.getTourById(_TourEnum__WEBPACK_IMPORTED_MODULE_0__["TourId"].DROITE).getStack();
                    break;
                }
            }
            if (tourParentNode !== null) {
                this.updateOneStack(tourParentNode, stack);
            }
            else {
                console.log("dans PlateauSection.ts ligne 44 : PAS de node recupered");
            }
        }
    };
    PlateauDOMSection.prototype.updateOneStack = function (tourParentNode, stack) {
        while (tourParentNode.firstChild !== null) {
            tourParentNode.removeChild(tourParentNode.firstChild);
        }
        stack.forEach(function (disk) {
            var rowElt = document.createElement("tr");
            tourParentNode.appendChild(rowElt);
            var diskElt = document.createElement("td");
            diskElt.textContent = "" + disk.getId();
            diskElt.style.width = 1 + disk.getId() * 20 + "px";
            diskElt.style.backgroundColor = 'white';
            diskElt.style.textAlign = 'center';
            console.log("diskID string : " + disk.getId());
            rowElt.appendChild(diskElt);
        });
    };
    return PlateauDOMSection;
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
    Tour.prototype.getStack = function () {
        return this.stack;
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
/* harmony import */ var _hanoi_PlateauDOMSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hanoi/PlateauDOMSection */ "./src/hanoi/PlateauDOMSection.ts");


var tourOriginNode = document.querySelector(".tourFrom");
var tourDestinationNode = document.querySelector(".tourTo");
var playBtn = document.querySelector(".play-btn");
var resetBtn = document.querySelector(".reset-btn");
var nbDiskNode = document.querySelector(".nombre-disk");
var challengeAcceptedNode = document.querySelector(".check-challenge");
var challengeBetNode = document.querySelector(".bet-challenge");
var coupsNode = document.querySelector(".nb-coups");
var messagesNode = document.querySelector(".message-player");
var stackGaucheParentNode = document.querySelector(".stack-gauche");
var stackCentreParentNode = document.querySelector(".stack-centre");
var stackDroiteParentNode = document.querySelector(".stack-droite");
var jeu;
var jeuVisu;
//---------------------EVENTS-------------------
window.addEventListener('load', onload);
playBtn === null || playBtn === void 0 ? void 0 : playBtn.addEventListener('click', playAmove);
resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener('click', startOver);
function onload() {
    jeu = new _hanoi_Plateau__WEBPACK_IMPORTED_MODULE_0__["Plateau"]({ accepted: false, bet: 0 }, Number(nbDiskNode.value));
    jeu.startOver();
    jeuVisu = new _hanoi_PlateauDOMSection__WEBPACK_IMPORTED_MODULE_1__["PlateauDOMSection"](jeu, stackGaucheParentNode, stackCentreParentNode, stackDroiteParentNode);
    jeuVisu.updateAllStacks();
}
function playAmove() {
    var from = tourOriginNode === null || tourOriginNode === void 0 ? void 0 : tourOriginNode.options[tourOriginNode.selectedIndex].value;
    var to = tourDestinationNode === null || tourDestinationNode === void 0 ? void 0 : tourDestinationNode.options[tourDestinationNode.selectedIndex].value;
    if (from && to) {
        jeu.moveDisk(from, to);
        jeuVisu.updateAllStacks();
        coupsNode.value = "" + jeu.getMovesCount();
    }
    if (jeu.isWin()) {
        messagesNode.textContent = 'CONGRATS !!! YOU DID IT !';
    }
    else {
        messagesNode.textContent = 'KEEP IT UP DUDE !!! !';
    }
}
function startOver() {
    jeu.startOver();
    jeuVisu.updateAllStacks();
    coupsNode.value = "" + jeu.getMovesCount();
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbm9pL0Rpc2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbm9pL1BsYXRlYXUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbm9pL1BsYXRlYXVET01TZWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9oYW5vaS9Ub3VyLnRzIiwid2VicGFjazovLy8uL3NyYy9oYW5vaS9Ub3VyRW51bS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtJQUVJLGNBQW9CLEVBQVU7UUFBVixPQUFFLEdBQUYsRUFBRSxDQUFRO1FBQzFCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTSxvQkFBSyxHQUFa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QWUsRUFBRSxDQUFDO1FBQzFCLFNBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBRyxHQUFHLENBQUMsYUFBYSxFQUFJLENBQUM7S0FDOUM7SUFDRCxJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUNiLFlBQVksQ0FBQyxXQUFXLEdBQUcsMkJBQTJCO0tBQ3pEO1NBQU07UUFDSCxZQUFZLENBQUMsV0FBVyxHQUFHLHVCQUF1QjtLQUNyRDtBQUNMLENBQUM7QUFFRCxTQUFTLFNBQVM7SUFDZCxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEIsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzFCLFNBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBRyxHQUFHLENBQUMsYUFBYSxFQUFJLENBQUM7QUFDL0MsQ0FBQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsImV4cG9ydCBjbGFzcyBEaXNrIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaWQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldElkKGlkSW46IG51bWJlcik6dm9pZCB7XG4gICAgICAgIHRoaXMuaWQgPSBpZEluO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJZCgpOiBudW1iZXJ7XG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBUb3VyIH0gZnJvbSBcIi4vVG91clwiO1xuaW1wb3J0IHsgVG91cklkIH0gZnJvbSBcIi4vVG91ckVudW1cIjtcblxuZXhwb3J0IGNsYXNzIFBsYXRlYXUge1xuICAgIHByaXZhdGUgdG91ckdhdWNoZTogVG91cjtcbiAgICBwcml2YXRlIHRvdXJDZW50cmU6IFRvdXI7XG4gICAgcHJpdmF0ZSB0b3VyRHJvaXRlOiBUb3VyO1xuICAgIHByaXZhdGUgbW92ZXNDb3VudDogbnVtYmVyO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGNoYWxsZW5nZTogeyBhY2NlcHRlZDogYm9vbGVhbiwgYmV0OiBudW1iZXJ9LCBwcml2YXRlIG5iRGlzazpudW1iZXIgPSA4XG4gICAgKSB7XG4gICAgICAgIHRoaXMudG91ckdhdWNoZSA9IG5ldyBUb3VyKFRvdXJJZC5HQVVDSEUsIFtdKTtcbiAgICAgICAgdGhpcy50b3VyR2F1Y2hlLnNldEZ1bGxTdGFjayhuYkRpc2spO1xuICAgICAgICB0aGlzLnRvdXJDZW50cmUgPSBuZXcgVG91cihUb3VySWQuQ0VOVFJFLCBbXSk7XG4gICAgICAgIHRoaXMudG91ckRyb2l0ZSA9IG5ldyBUb3VyKFRvdXJJZC5EUk9JVEUsIFtdKTtcbiAgICAgICAgdGhpcy5tb3Zlc0NvdW50ID0gMDtcbiAgICAgICAgdGhpcy5jaGFsbGVuZ2UgPSB7IGFjY2VwdGVkOiBmYWxzZSwgYmV0OiAxMDAgfTtcbiAgICAgICAgdGhpcy5uYkRpc2sgPSBuYkRpc2s7XG5cbiAgICB9XG4gICAgXG4gICAgcHVibGljIHNob3dQbGF0ZWF1KCk6IHZvaWR7XG4gICAgICAgIGNvbnNvbGUubG9nKGBKZXUgZW4gY291cnMgOiBgKTsgICBcbiAgICAgICAgdGhpcy50b3VyR2F1Y2hlLnNob3dTdGFjaygpO1xuICAgICAgICB0aGlzLnRvdXJDZW50cmUuc2hvd1N0YWNrKCk7XG4gICAgICAgIHRoaXMudG91ckRyb2l0ZS5zaG93U3RhY2soKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnRPdmVyKCk6IHZvaWR7XG4gICAgICAgIHRoaXMudG91ckdhdWNoZS5zZXRGdWxsU3RhY2sodGhpcy5uYkRpc2spO1xuICAgICAgICB0aGlzLnRvdXJDZW50cmUuc2V0RW1wdHlTdGFjaygpO1xuICAgICAgICB0aGlzLnRvdXJEcm9pdGUuc2V0RW1wdHlTdGFjaygpO1xuICAgICAgICB0aGlzLm1vdmVzQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmNoYWxsZW5nZS5hY2NlcHRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNoYWxsZW5nZS5iZXQgPSAwO1xuICAgICAgICBjb25zb2xlLmxvZyhcIi8vLSotKi0qLSotKi0qLSotKi0gTGV0J3Mgc3RhcnQgb3ZlciBhZ2FpbiAtKi0qLSotKi0qLSotKi0qLS8vXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRUb3VyQnlJZChpZDogVG91cklkIHwgc3RyaW5nKTogVG91cntcbiAgICAgICAgbGV0IHRvdXIgPSB0aGlzLnRvdXJDZW50cmU7IC8vamUgbidhcnJpdmUgcGFzIGEgaW5pdGlhbGlzZXIgY29ycmVjdGVtZW50IHRvdXIgLS0tLSA/IGxldCB0b3VyOiBUb3VyID0geyBpZCA6IC4uLiAsIHN0YWNrIDogLi4uLn07XG4gICAgICAgIHN3aXRjaCAoaWQpIHtcbiAgICAgICAgICAgIGNhc2UgVG91cklkLkdBVUNIRToge1xuICAgICAgICAgICAgICAgIHRvdXIgPSB0aGlzLnRvdXJHYXVjaGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICBjYXNlIFRvdXJJZC5DRU5UUkU6IHtcbiAgICAgICAgICAgICAgICB0b3VyID0gdGhpcy50b3VyQ2VudHJlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBUb3VySWQuRFJPSVRFOiB7XG4gICAgICAgICAgICAgICAgdG91ciA9IHRoaXMudG91ckRyb2l0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG91cjtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIG1vdmVEaXNrKGZyb21Ub3VyOiBUb3VySWQgfCBzdHJpbmcsIHRvVG91cjogVG91cklkIHwgc3RyaW5nKTogYm9vbGVhbntcbiAgICAgICAgbGV0IG1vdmVPSzogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICBpZiAoZnJvbVRvdXIgIT09IHRvVG91cikge1xuICAgICAgICAgICAgY29uc3QgZGlza1RvTW92ZSA9IHRoaXMuZ2V0VG91ckJ5SWQoZnJvbVRvdXIpLmdldERpc2tPblRvcCgpO1xuICAgICAgICAgICAgaWYgKGRpc2tUb01vdmUgIT09IG51bGwgJiYgdGhpcy5nZXRUb3VyQnlJZCh0b1RvdXIpLnN0YWNrRGlzayhkaXNrVG9Nb3ZlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VG91ckJ5SWQoZnJvbVRvdXIpLnVuc3RhY2tEaXNrKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmNyZW1lbnRzTW92ZXMoKTtcbiAgICAgICAgICAgICAgICBtb3ZlT0sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcqKiogTW92ZSBET05FICoqKicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnISEhIE1vdmUgSU1QT1NTSUJMRSAhISEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCchISEgQ2hvb3NlIDIgZGlmZmVyZW50cyBUb3VycyB0byBhbGxvdyBhIG1vdmUgISEhJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vdmVPSztcbiAgICB9XG5cbiAgICBwcml2YXRlIGluY3JlbWVudHNNb3ZlcygpOiB2b2lke1xuICAgICAgICB0aGlzLm1vdmVzQ291bnQgKz0gMTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TW92ZXNDb3VudCgpOiBudW1iZXJ7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdmVzQ291bnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGlzV2luKCk6IGJvb2xlYW57XG4gICAgICAgIHJldHVybiAodGhpcy50b3VyR2F1Y2hlLmlzU3RhY2tFbXB0eSgpICYmIHRoaXMudG91ckNlbnRyZS5pc1N0YWNrRW1wdHkoKSAmJiB0aGlzLnRvdXJEcm9pdGUuaXNTdGFja0Z1bGwoKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzR2FtZU92ZXIoKTogYm9vbGVhbntcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbGxlbmdlLmFjY2VwdGVkID09PSB0cnVlICYmIHRoaXMubW92ZXNDb3VudCA+IHRoaXMuY2hhbGxlbmdlLmJldCAmJiAhdGhpcy5pc1dpbigpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBQbGF0ZWF1IH0gZnJvbSBcIi4vUGxhdGVhdVwiO1xuaW1wb3J0IHsgVG91cklkIH0gZnJvbSBcIi4vVG91ckVudW1cIjtcbmltcG9ydCB7IERpc2sgfSBmcm9tIFwiLi9EaXNrXCI7XG5cbmV4cG9ydCBjbGFzcyBQbGF0ZWF1RE9NU2VjdGlvbntcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBqZXU6IFBsYXRlYXUsXG4gICAgICAgIHByaXZhdGUgdG91ckdhdWNoZVBhcmVudE5vZGU6SFRNTEVsZW1lbnQgfCBudWxsLFxuICAgICAgICBwcml2YXRlIHRvdXJDZW50cmVQYXJlbnROb2RlOkhUTUxFbGVtZW50fCBudWxsLFxuICAgICAgICBwcml2YXRlIHRvdXJEcm9pdGVQYXJlbnROb2RlOkhUTUxFbGVtZW50IHwgbnVsbCkge1xuICAgICAgICB0aGlzLmpldSA9IGpldTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMudG91ckdhdWNoZVBhcmVudE5vZGUgPSB0b3VyR2F1Y2hlUGFyZW50Tm9kZTtcbiAgICAgICAgdGhpcy50b3VyQ2VudHJlUGFyZW50Tm9kZSA9IHRvdXJDZW50cmVQYXJlbnROb2RlO1xuICAgICAgICB0aGlzLnRvdXJEcm9pdGVQYXJlbnROb2RlID0gdG91ckRyb2l0ZVBhcmVudE5vZGU7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgdXBkYXRlQWxsU3RhY2tzKCkge1xuXG4gICAgICAgIGZvciAobGV0IHRvdXJJRCBpbiBUb3VySWQpIHtcbiAgICAgICAgICAgIGxldCB0b3VyUGFyZW50Tm9kZTogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcbiAgICAgICAgICAgIGxldCBzdGFjazpEaXNrW109W11cbiAgICAgICAgICAgIHN3aXRjaCAodG91cklEKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBUb3VySWQuR0FVQ0hFOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvdXJQYXJlbnROb2RlID0gdGhpcy50b3VyR2F1Y2hlUGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2sgPSB0aGlzLmpldS5nZXRUb3VyQnlJZChUb3VySWQuR0FVQ0hFKS5nZXRTdGFjaygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBUb3VySWQuQ0VOVFJFOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvdXJQYXJlbnROb2RlID0gdGhpcy50b3VyQ2VudHJlUGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2sgPSB0aGlzLmpldS5nZXRUb3VyQnlJZChUb3VySWQuQ0VOVFJFKS5nZXRTdGFjaygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBUb3VySWQuRFJPSVRFOiB7XG4gICAgICAgICAgICAgICAgICAgIHRvdXJQYXJlbnROb2RlID0gdGhpcy50b3VyRHJvaXRlUGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2sgPSB0aGlzLmpldS5nZXRUb3VyQnlJZChUb3VySWQuRFJPSVRFKS5nZXRTdGFjaygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodG91clBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU9uZVN0YWNrKHRvdXJQYXJlbnROb2RlLCBzdGFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGFucyBQbGF0ZWF1U2VjdGlvbi50cyBsaWduZSA0NCA6IFBBUyBkZSBub2RlIHJlY3VwZXJlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgfVxuXG4gICAgICAgIFxuICAgIFxuICAgIHB1YmxpYyB1cGRhdGVPbmVTdGFjayh0b3VyUGFyZW50Tm9kZTogSFRNTEVsZW1lbnQsIHN0YWNrOiBEaXNrW10pOiB2b2lkIHtcbiAgICAgICAgd2hpbGUgKHRvdXJQYXJlbnROb2RlLmZpcnN0Q2hpbGQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRvdXJQYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRvdXJQYXJlbnROb2RlLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHN0YWNrLmZvckVhY2goZGlzayA9PiB7XG4gICAgICAgICAgICBsZXQgcm93RWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICAgICAgdG91clBhcmVudE5vZGUuYXBwZW5kQ2hpbGQocm93RWx0KTtcbiAgICAgICAgICAgIGxldCBkaXNrRWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgZGlza0VsdC50ZXh0Q29udGVudCA9IGAke2Rpc2suZ2V0SWQoKX1gO1xuICAgICAgICAgICAgZGlza0VsdC5zdHlsZS53aWR0aCA9IGAkezEgKyBkaXNrLmdldElkKCkgKiAyMH1weGA7XG4gICAgICAgICAgICBkaXNrRWx0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICBkaXNrRWx0LnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYGRpc2tJRCBzdHJpbmcgOiAke2Rpc2suZ2V0SWQoKX1gKTtcbiAgICAgICAgICAgIHJvd0VsdC5hcHBlbmRDaGlsZChkaXNrRWx0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbn0iLCJpbXBvcnQgeyBEaXNrIH0gZnJvbSBcIi4vRGlza1wiO1xuaW1wb3J0IHsgVG91cklkIH0gZnJvbSBcIi4vVG91ckVudW1cIjtcblxuZXhwb3J0IGNsYXNzIFRvdXIge1xuICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGlkOiBUb3VySWQsIHByaXZhdGUgc3RhY2s6IERpc2tbXSkge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuc3RhY2sgPSBzdGFjaztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0SWQoKTogVG91cklkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldElkKGlkSW46IFRvdXJJZCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlkID0gaWRJbjtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldFN0YWNrKCk6IERpc2tbXXtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhY2s7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBzaG93U3RhY2soKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaWQpO1xuICAgICAgICB0aGlzLnN0YWNrLmZvckVhY2goZGlzayA9PiBjb25zb2xlLmxvZyhkaXNrLmdldElkKCkpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0RnVsbFN0YWNrKG5iRGlzazogbnVtYmVyID0gOCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0YWNrID0gW107XG4gICAgICAgIGZvciAobGV0IGQ6IG51bWJlciA9IDA7IGQgPCBuYkRpc2s7IGQrKykge1xuICAgICAgICAgICAgY29uc3QgZGlzayA9IG5ldyBEaXNrKGQpO1xuICAgICAgICAgICAgdGhpcy5zdGFjay5wdXNoKGRpc2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNldEVtcHR5U3RhY2soKTogdm9pZHtcbiAgICAgICAgdGhpcy5zdGFjayA9IFtdO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc1N0YWNrRW1wdHkoKTogYm9vbGVhbntcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhY2sgPT09IFtdO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc1N0YWNrRnVsbCgpOiBib29sZWFue1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFjay5ldmVyeSgoZGlzaywgaW5kZXgpID0+IGRpc2suZ2V0SWQoKSA9PT0gaW5kZXgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXROYkRpc2soKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhY2subGVuZ3RoO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXREaXNrT25Ub3AoKTogRGlzayB8IG51bGwge1xuICAgICAgICBpZiAodGhpcy5nZXROYkRpc2soKSAhPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhY2tbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgc3RhY2tEaXNrKGRpc2tJbjogRGlzayk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgYWpvdXRPazogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICBjb25zdCBkaXNrT25Ub3A6IERpc2sgfCBudWxsID0gdGhpcy5nZXREaXNrT25Ub3AoKTtcbiAgICAgICAgaWYgKGRpc2tPblRvcCA9PT0gbnVsbCB8fCBkaXNrT25Ub3AuZ2V0SWQoKSA+IGRpc2tJbi5nZXRJZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnN0YWNrLnNwbGljZSgwLCAwLCBkaXNrSW4pOyAvLzAgPD0+IGFqb3V0ZSBkaXNrSW4gYSBsJ2luZGV4IDAsIDAgPD0+IHNhbnMgc3VwcHJpbWVyIGxlIHJlc3RlXG4gICAgICAgICAgICBham91dE9rID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWpvdXRPaztcbiAgICB9XG5cbiAgICBwdWJsaWMgdW5zdGFja0Rpc2soKTogRGlzayB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YWNrLnNoaWZ0KCk7XG4gICAgfVxuXG59IiwiZXhwb3J0IGVudW0gVG91cklkIHtcbiAgICBHQVVDSEUgPSBcIkdBVUNIRVwiLFxuICAgIENFTlRSRSA9IFwiQ0VOVFJFXCIsXG4gICAgRFJPSVRFID0gXCJEUk9JVEVcIlxufSAiLCJpbXBvcnQgeyBQbGF0ZWF1IH0gZnJvbSBcIi4vaGFub2kvUGxhdGVhdVwiO1xuaW1wb3J0IHsgVG91cklkIH0gZnJvbSBcIi4vaGFub2kvVG91ckVudW1cIjtcbmltcG9ydCB7IFBsYXRlYXVET01TZWN0aW9uIH0gZnJvbSBcIi4vaGFub2kvUGxhdGVhdURPTVNlY3Rpb25cIjtcblxuY29uc3QgdG91ck9yaWdpbk5vZGU6IEhUTUxTZWxlY3RFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG91ckZyb21cIik7XG5jb25zdCB0b3VyRGVzdGluYXRpb25Ob2RlOiBIVE1MU2VsZWN0RWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvdXJUb1wiKTtcbmNvbnN0IHBsYXlCdG46IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5LWJ0blwiKTtcbmNvbnN0IHJlc2V0QnRuOiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzZXQtYnRuXCIpO1xuY29uc3QgbmJEaXNrTm9kZTogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub21icmUtZGlza1wiKTtcbmNvbnN0IGNoYWxsZW5nZUFjY2VwdGVkTm9kZTogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoZWNrLWNoYWxsZW5nZVwiKTtcbmNvbnN0IGNoYWxsZW5nZUJldE5vZGU6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZXQtY2hhbGxlbmdlXCIpO1xuY29uc3QgY291cHNOb2RlOmFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmItY291cHNcIik7XG5jb25zdCBtZXNzYWdlc05vZGU6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVzc2FnZS1wbGF5ZXJcIik7XG5jb25zdCBzdGFja0dhdWNoZVBhcmVudE5vZGU6SFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFjay1nYXVjaGVcIik7XG5jb25zdCBzdGFja0NlbnRyZVBhcmVudE5vZGU6SFRNTEVsZW1lbnQgfCBudWxsPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YWNrLWNlbnRyZVwiKTtcbmNvbnN0IHN0YWNrRHJvaXRlUGFyZW50Tm9kZTpIVE1MRWxlbWVudCB8IG51bGw9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhY2stZHJvaXRlXCIpO1xubGV0IGpldTogUGxhdGVhdTtcbmxldCBqZXVWaXN1OiBQbGF0ZWF1RE9NU2VjdGlvblxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLUVWRU5UUy0tLS0tLS0tLS0tLS0tLS0tLS1cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25sb2FkKTtcbnBsYXlCdG4/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheUFtb3ZlKTtcbnJlc2V0QnRuPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0T3Zlcik7XG5cblxuXG5cbmZ1bmN0aW9uIG9ubG9hZCgpIDp2b2lke1xuICAgIGpldSA9IG5ldyBQbGF0ZWF1KHsgYWNjZXB0ZWQ6IGZhbHNlLCBiZXQ6IDAgfSwgTnVtYmVyKG5iRGlza05vZGUudmFsdWUpKTsgXG4gICAgamV1LnN0YXJ0T3ZlcigpO1xuICAgIGpldVZpc3UgPSBuZXcgUGxhdGVhdURPTVNlY3Rpb24oamV1LCBzdGFja0dhdWNoZVBhcmVudE5vZGUsIHN0YWNrQ2VudHJlUGFyZW50Tm9kZSwgc3RhY2tEcm9pdGVQYXJlbnROb2RlKTtcbiAgICBqZXVWaXN1LnVwZGF0ZUFsbFN0YWNrcygpO1xufVxuXG5mdW5jdGlvbiBwbGF5QW1vdmUoKSA6dm9pZHtcbiAgICBjb25zdCBmcm9tID0gdG91ck9yaWdpbk5vZGU/Lm9wdGlvbnNbdG91ck9yaWdpbk5vZGUuc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgY29uc3QgdG8gPSB0b3VyRGVzdGluYXRpb25Ob2RlPy5vcHRpb25zW3RvdXJEZXN0aW5hdGlvbk5vZGUuc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgaWYgKGZyb20gJiYgdG8pIHtcbiAgICAgICAgamV1Lm1vdmVEaXNrKGZyb20sIHRvKTtcbiAgICAgICAgamV1VmlzdS51cGRhdGVBbGxTdGFja3MoKTtcbiAgICAgICAgY291cHNOb2RlLnZhbHVlID0gYCR7amV1LmdldE1vdmVzQ291bnQoKX1gO1xuICAgIH1cbiAgICBpZiAoamV1LmlzV2luKCkpIHtcbiAgICAgICAgbWVzc2FnZXNOb2RlLnRleHRDb250ZW50ID0gJ0NPTkdSQVRTICEhISBZT1UgRElEIElUICEnXG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWVzc2FnZXNOb2RlLnRleHRDb250ZW50ID0gJ0tFRVAgSVQgVVAgRFVERSAhISEgISdcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHN0YXJ0T3ZlcigpOiB2b2lke1xuICAgIGpldS5zdGFydE92ZXIoKTtcbiAgICBqZXVWaXN1LnVwZGF0ZUFsbFN0YWNrcygpO1xuICAgIGNvdXBzTm9kZS52YWx1ZSA9IGAke2pldS5nZXRNb3Zlc0NvdW50KCl9YDtcbn0iXSwic291cmNlUm9vdCI6IiJ9