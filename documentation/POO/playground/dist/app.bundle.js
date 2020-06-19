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

/***/ "./src/examples/heritage/animal.ts":
/*!*****************************************!*\
  !*** ./src/examples/heritage/animal.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Animal = void 0;
    class Animal {
        constructor(nom, sexe = 'F') {
            this.nom = nom;
            this.sexe = sexe;
            this.ddn = new Date();
        }
        ecrire() {
            return `nom : ${this.nom}`;
        }
        toString() {
            return this.ecrire();
        }
    }
    exports.Animal = Animal;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/examples/heritage/chien.ts":
/*!****************************************!*\
  !*** ./src/examples/heritage/chien.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./animal */ "./src/examples/heritage/animal.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, animal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Chien = void 0;
    class Chien extends animal_1.Animal {
        constructor(nom, race, sexe, couleur = 'gris') {
            super(nom, sexe);
            this.race = race;
            this.couleur = couleur;
        }
        ecrire() {
            const titre = super.ecrire();
            return `Je suis un chien de race ${this.race},
        de sexe ${this.sexe}
        de couleur ${this.couleur}
         ${titre}`;
        }
    }
    exports.Chien = Chien;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/examples/heritage/cochon.ts":
/*!*****************************************!*\
  !*** ./src/examples/heritage/cochon.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./animal */ "./src/examples/heritage/animal.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, animal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Cochon = void 0;
    class Cochon extends animal_1.Animal {
        constructor(nom, sexe = 'F', couleur) {
            super(nom, sexe);
            this.couleur = couleur;
        }
        ecrire() {
            const titre = super.ecrire();
            return `Je suis un cochon et  ${titre}`;
        }
    }
    exports.Cochon = Cochon;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./examples/heritage/cochon */ "./src/examples/heritage/cochon.ts"), __webpack_require__(/*! ./examples/heritage/chien */ "./src/examples/heritage/chien.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, cochon_1, chien_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const peggy = new cochon_1.Cochon('BiffiII', 'F', 'pink');
    const fouslecamp = new chien_1.Chien('fouslecamp', 'bichon', 'M', 'rouge');
    // console.log(fouslecamp.ecrire());
    console.log(fouslecamp.toString());
    console.log(fouslecamp + '');
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
// console.log(peggy.ecrire());


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4YW1wbGVzL2hlcml0YWdlL2FuaW1hbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZXhhbXBsZXMvaGVyaXRhZ2UvY2hpZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4YW1wbGVzL2hlcml0YWdlL2NvY2hvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lDbEZBLE1BQWEsTUFBTTtRQU1mLFlBQVksR0FBVyxFQUFFLElBQUksR0FBRyxHQUFHO1lBQy9CLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1lBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzFCLENBQUM7UUFFRCxNQUFNO1lBQ0YsT0FBTyxTQUFTLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMvQixDQUFDO1FBRUQsUUFBUTtZQUNKLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3pCLENBQUM7S0FDSjtJQW5CRCx3QkFtQkM7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2pCRCxNQUFhLEtBQU0sU0FBUSxlQUFNO1FBRzdCLFlBQ0ksR0FBVyxFQUNYLElBQVksRUFDWixJQUFjLEVBQ2QsVUFBa0IsTUFBTTtZQUNwQixLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQy9CLENBQUM7UUFFTSxNQUFNO1lBQ1QsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzdCLE9BQU8sNEJBQTRCLElBQUksQ0FBQyxJQUFJO2tCQUNsQyxJQUFJLENBQUMsSUFBSTtxQkFDTixJQUFJLENBQUMsT0FBTztXQUN0QixLQUFLLEVBQUUsQ0FBQztRQUNmLENBQUM7S0FDSjtJQXBCRCxzQkFvQkM7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3BCRCxNQUFhLE1BQU8sU0FBUSxlQUFNO1FBRTlCLFlBQVksR0FBVyxFQUFFLElBQUksR0FBRyxHQUFHLEVBQUUsT0FBZTtZQUNoRCxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRTNCLENBQUM7UUFFTSxNQUFNO1lBQ1QsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzdCLE9BQU8seUJBQXlCLEtBQUssRUFBRSxDQUFDO1FBQzVDLENBQUM7S0FDSjtJQVpELHdCQVlDOzs7Ozs7Ozs7Ozs7Ozs7OztJQ1hELE1BQU0sS0FBSyxHQUFHLElBQUksZUFBTSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFFakQsTUFBTSxVQUFVLEdBQUcsSUFBSSxhQUFLLENBQUMsWUFBWSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFbkUsb0NBQW9DO0lBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUMsRUFBRSxDQUFDLENBQUM7OztBQUMzQiwrQkFBK0IiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4udHNcIik7XG4iLCJleHBvcnQgY2xhc3MgQW5pbWFsIHtcbiAgICBwcml2YXRlIG5vbTogc3RyaW5nOyAgLy8gdmFyaWFibGUgZCdpbnN0YW5jZVxuICAgIHByb3RlY3RlZCBzZXhlOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIGRkbjogRGF0ZTtcbiAgICBwcm90ZWN0ZWQgY291bGV1cj86IHN0cmluZyB8IG51bGw7XG5cbiAgICBjb25zdHJ1Y3Rvcihub206IHN0cmluZywgc2V4ZSA9ICdGJykge1xuICAgICAgICB0aGlzLm5vbSA9IG5vbTtcbiAgICAgICAgdGhpcy5zZXhlID0gc2V4ZTtcbiAgICAgICAgdGhpcy5kZG4gPSBuZXcgRGF0ZSgpO1xuICAgIH1cblxuICAgIGVjcmlyZSgpIHtcbiAgICAgICAgcmV0dXJuIGBub20gOiAke3RoaXMubm9tfWA7XG4gICAgfVxuICAgIFxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lY3JpcmUoKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQW5pbWFsIH0gZnJvbSAnLi9hbmltYWwnO1xuXG5leHBvcnQgY2xhc3MgQ2hpZW4gZXh0ZW5kcyBBbmltYWwge1xuICAgIHByb3RlY3RlZCByYWNlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgbm9tOiBzdHJpbmcsXG4gICAgICAgIHJhY2U6IHN0cmluZyxcbiAgICAgICAgc2V4ZSA/OiBzdHJpbmcsXG4gICAgICAgIGNvdWxldXI6IHN0cmluZyA9ICdncmlzJykge1xuICAgICAgICAgICAgc3VwZXIobm9tLCBzZXhlKTtcbiAgICAgICAgICAgIHRoaXMucmFjZSA9IHJhY2U7XG4gICAgICAgICAgICB0aGlzLmNvdWxldXIgPSBjb3VsZXVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBlY3JpcmUoKSB7XG4gICAgICAgIGNvbnN0IHRpdHJlID0gc3VwZXIuZWNyaXJlKCk7XG4gICAgICAgIHJldHVybiBgSmUgc3VpcyB1biBjaGllbiBkZSByYWNlICR7dGhpcy5yYWNlfSxcbiAgICAgICAgZGUgc2V4ZSAke3RoaXMuc2V4ZX1cbiAgICAgICAgZGUgY291bGV1ciAke3RoaXMuY291bGV1cn1cbiAgICAgICAgICR7dGl0cmV9YDtcbiAgICB9XG59IiwiaW1wb3J0IHsgQW5pbWFsIH0gZnJvbSAnLi9hbmltYWwnO1xuXG5leHBvcnQgY2xhc3MgQ29jaG9uIGV4dGVuZHMgQW5pbWFse1xuXG4gICAgY29uc3RydWN0b3Iobm9tOiBzdHJpbmcsIHNleGUgPSAnRicsIGNvdWxldXI6IHN0cmluZykge1xuICAgICAgICBzdXBlcihub20sIHNleGUpO1xuICAgICAgICB0aGlzLmNvdWxldXIgPSBjb3VsZXVyO1xuICAgICAgIFxuICAgIH1cblxuICAgIHB1YmxpYyBlY3JpcmUoKSB7XG4gICAgICAgIGNvbnN0IHRpdHJlID0gc3VwZXIuZWNyaXJlKCk7XG4gICAgICAgIHJldHVybiBgSmUgc3VpcyB1biBjb2Nob24gZXQgICR7dGl0cmV9YDtcbiAgICB9XG59IiwiaW1wb3J0IHsgQ29jaG9uIH0gZnJvbSAnLi9leGFtcGxlcy9oZXJpdGFnZS9jb2Nob24nO1xuaW1wb3J0IHsgQ2hpZW4gfSBmcm9tICcuL2V4YW1wbGVzL2hlcml0YWdlL2NoaWVuJztcblxuY29uc3QgcGVnZ3kgPSBuZXcgQ29jaG9uKCdCaWZmaUlJJywgJ0YnLCAncGluaycpO1xuXG5jb25zdCBmb3VzbGVjYW1wID0gbmV3IENoaWVuKCdmb3VzbGVjYW1wJywgJ2JpY2hvbicsICdNJywgJ3JvdWdlJyk7XG5cbi8vIGNvbnNvbGUubG9nKGZvdXNsZWNhbXAuZWNyaXJlKCkpO1xuY29uc29sZS5sb2coZm91c2xlY2FtcC50b1N0cmluZygpKTtcbmNvbnNvbGUubG9nKGZvdXNsZWNhbXArJycpO1xuLy8gY29uc29sZS5sb2cocGVnZ3kuZWNyaXJlKCkpO1xuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==