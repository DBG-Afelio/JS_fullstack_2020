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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./panier/AvailableItems */ "./src/panier/AvailableItems.ts"), __webpack_require__(/*! ./panier/Stock */ "./src/panier/Stock.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AvailableItems_1, Stock_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log("Exercice Panier");
    function afficheListDispo(stock) {
        console.log(stock);
    }
    var myStock = new Stock_1.Stock(AvailableItems_1.AvailableItems);
    afficheListDispo(myStock);
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/panier/AvailableItems.ts":
/*!**************************************!*\
  !*** ./src/panier/AvailableItems.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AvailableItems = void 0;
    exports.AvailableItems = [
        {
            titre: "Bulles",
            auteur: "E. Lassaux",
            commentaire: "Spécialisé dans les photos d'objet, \"Neness\" aime aussi photographier les animaux",
            pays: "Suède",
            prix: 208,
            image: {
                grande: "bulle_gd.jpg",
                moyenne: "bulle_pt.jpg",
                petite: "bulle_tpt.jpg",
                toute_petite: "bulle_ttpt.jpg"
            },
            id: 1
        },
        {
            titre: "L'Oeil du tig",
            auteur: "J. Herman",
            commentaire: "Tout droit sorti de la nouvelle école Portugaise, il nous donne là une de ses plus belle oeuvres",
            pays: "Brasil",
            prix: 228,
            image: {
                grande: "escalier_gd.jpg",
                moyenne: "escalier_pt.jpg",
                petite: "escalier_tpt.jpg",
                toute_petite: "escalier_ttpt.jpg"
            },
            id: 2
        },
        {
            titre: "Escape",
            auteur: "JTjiel",
            commentaire: "Ce Finlandais un peu déjanté, ouvre son coeur et son objectif",
            pays: "Helsinski",
            prix: 28,
            image: {
                grande: "fenetre_gd.jpg",
                moyenne: "fenetre_pt.jpg",
                petite: "fenetre_tpt.jpg",
                toute_petite: "fenetre_ttpt.jpg"
            },
            id: 3
        },
        {
            titre: "Intimité",
            auteur: "DBoo",
            commentaire: "Ce sympatique gailliard, nous invite chez lui en toute simplicité",
            pays: "Helsinski",
            prix: 28,
            image: {
                grande: "interieur_gd.jpg",
                moyenne: "interieur_pt.jpg",
                petite: "interieur_tpt.jpg",
                toute_petite: "interieur_ttpt.jpg"
            },
            id: 4
        },
        {
            titre: "Palettes",
            auteur: "Sabina",
            commentaire: "Oeuvre originale issue d'une artiste du sac",
            pays: "Casablanka",
            prix: 245,
            image: {
                grande: "pantone_gd.jpg",
                moyenne: "pantone_pt.jpg",
                petite: "pantone_tpt.jpg",
                toute_petite: "pantone_ttpt.jpg"
            },
            id: 5
        },
        {
            titre: "Untitled",
            auteur: "Anonyme",
            commentaire: "Oeuvre anonyme...",
            pays: "Bruxelles",
            prix: 8,
            image: {
                grande: "roul_gd.jpg",
                moyenne: "roul_pt.jpg",
                petite: "roul_tpt.jpg",
                toute_petite: "roul_ttpt.jpg"
            },
            id: 6
        },
        {
            titre: "Tourne tourne petit escalier",
            auteur: "Marie N.",
            commentaire: "Première photo d'une série d'une artiste trop vite disparue",
            pays: "Huy",
            prix: 43,
            image: {
                grande: "tourne_gd.jpg",
                moyenne: "tourne_pt.jpg",
                petite: "tourne_tpt.jpg",
                toute_petite: "tourne_ttpt.jpg"
            },
            id: 7
        },
        {
            titre: "Reflets",
            auteur: "Coppe",
            commentaire: "Cette photo un peu mégalo nous illustre la démesure de ce brave roumain",
            pays: "Belgrade",
            prix: 2.8,
            image: {
                grande: "vitres_gd.jpg",
                moyenne: "vitres_pt.jpg",
                petite: "vitres_tpt.jpg",
                toute_petite: "vitres_ttpt.jpg"
            },
            id: 8
        },
        {
            titre: "Le lait tue",
            auteur: "S. alade",
            commentaire: "Du rêve dans un légume...",
            pays: "Bressoux",
            prix: 13,
            image: {
                grande: "laitue_gd.jpg",
                moyenne: "laitue_pt.jpg",
                petite: "laitue_tpt.jpg",
                toute_petite: "laitue_ttpt.jpg"
            },
            id: 9
        },
        {
            titre: "Buildings",
            auteur: "Toto",
            commentaire: "Du grand, du lourd",
            pays: "Varsovie",
            prix: 12,
            image: {
                grande: "immeuble_gd.jpg",
                moyenne: "immeuble_pt.jpg",
                petite: "immeuble_tpt.jpg",
                toute_petite: "immeuble_ttpt.jpg"
            },
            id: 10
        }
    ];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/panier/Stock.ts":
/*!*****************************!*\
  !*** ./src/panier/Stock.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Stock = void 0;
    var Stock = /** @class */ (function () {
        function Stock(itemInStock) {
            this.listItem = [];
            this.listItem = itemInStock;
        }
        Stock.prototype.getList = function () {
            return this.listItem !== [] ? this.listItem : null;
        };
        Stock.prototype.getItemById = function (searchId) {
            return this.listItem.find(function (item) { return item.getId() === searchId; });
        };
        return Stock;
    }());
    exports.Stock = Stock;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Bhbmllci9BdmFpbGFibGVJdGVtcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuaWVyL1N0b2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztJQzVFQSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFHL0IsU0FBUyxnQkFBZ0IsQ0FBQyxLQUFpQjtRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFHRCxJQUFNLE9BQU8sR0FBRyxJQUFJLGFBQUssQ0FBQywrQkFBYyxDQUFDLENBQUM7SUFDMUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7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QyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN2RCxDQUFDO1FBRU0sMkJBQVcsR0FBbEIsVUFBbUIsUUFBZTtZQUM5QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQUksSUFBSSxXQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssUUFBUSxFQUF6QixDQUF5QixDQUFDLENBQUM7UUFDakUsQ0FBQztRQUNMLFlBQUM7SUFBRCxDQUFDO0lBZFksc0JBQUsiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4udHNcIik7XG4iLCJcblxuaW1wb3J0IHsgQXZhaWxhYmxlSXRlbXMgfSBmcm9tICcuL3Bhbmllci9BdmFpbGFibGVJdGVtcydcbmltcG9ydCB7IEl0ZW1Nb2RlbCB9IGZyb20gJy4vcGFuaWVyL0l0ZW1Nb2RlbCc7XG5pbXBvcnQgeyBTdG9jayB9IGZyb20gJy4vcGFuaWVyL1N0b2NrJztcblxuY29uc29sZS5sb2coXCJFeGVyY2ljZSBQYW5pZXJcIik7XG5cblxuZnVuY3Rpb24gYWZmaWNoZUxpc3REaXNwbyhzdG9jazpJdGVtTW9kZWxbXSk6IHZvaWR7XG4gICAgY29uc29sZS5sb2coc3RvY2spOyAgXG59XG5cblxuY29uc3QgbXlTdG9jayA9IG5ldyBTdG9jayhBdmFpbGFibGVJdGVtcyk7XG5hZmZpY2hlTGlzdERpc3BvKG15U3RvY2spOyIsImltcG9ydCB7IEl0ZW1Nb2RlbCB9IGZyb20gXCIuL0l0ZW1Nb2RlbFwiXG5cbmV4cG9ydCBjb25zdCBBdmFpbGFibGVJdGVtczogSXRlbU1vZGVsW10gPSBbXG4gICAge1xuICAgICAgICB0aXRyZTogXCJCdWxsZXNcIixcbiAgICAgICAgYXV0ZXVyOiBcIkUuIExhc3NhdXhcIixcbiAgICAgICAgY29tbWVudGFpcmU6IFwiU3DDqWNpYWxpc8OpIGRhbnMgbGVzIHBob3RvcyBkJ29iamV0LCBcXFwiTmVuZXNzXFxcIiBhaW1lIGF1c3NpIHBob3RvZ3JhcGhpZXIgbGVzIGFuaW1hdXhcIixcbiAgICAgICAgcGF5czogXCJTdcOoZGVcIixcbiAgICAgICAgcHJpeDogMjA4LFxuICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgZ3JhbmRlOiBcImJ1bGxlX2dkLmpwZ1wiLFxuICAgICAgICAgICAgbW95ZW5uZTogXCJidWxsZV9wdC5qcGdcIixcbiAgICAgICAgICAgIHBldGl0ZTogXCJidWxsZV90cHQuanBnXCIsXG4gICAgICAgICAgICB0b3V0ZV9wZXRpdGU6IFwiYnVsbGVfdHRwdC5qcGdcIlxuICAgICAgICB9LFxuICAgICAgICBpZDogMVxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRyZTogXCJMJ09laWwgZHUgdGlnXCIsXG4gICAgICAgIGF1dGV1cjogXCJKLiBIZXJtYW5cIixcbiAgICAgICAgY29tbWVudGFpcmU6IFwiVG91dCBkcm9pdCBzb3J0aSBkZSBsYSBub3V2ZWxsZSDDqWNvbGUgUG9ydHVnYWlzZSwgaWwgbm91cyBkb25uZSBsw6AgdW5lIGRlIHNlcyBwbHVzIGJlbGxlIG9ldXZyZXNcIixcbiAgICAgICAgcGF5czogXCJCcmFzaWxcIixcbiAgICAgICAgcHJpeDogMjI4LFxuICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgZ3JhbmRlOiBcImVzY2FsaWVyX2dkLmpwZ1wiLFxuICAgICAgICAgICAgbW95ZW5uZTogXCJlc2NhbGllcl9wdC5qcGdcIixcbiAgICAgICAgICAgIHBldGl0ZTogXCJlc2NhbGllcl90cHQuanBnXCIsXG4gICAgICAgICAgICB0b3V0ZV9wZXRpdGU6IFwiZXNjYWxpZXJfdHRwdC5qcGdcIlxuICAgICAgICB9LFxuICAgICAgICBpZDogMlxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRyZTogXCJFc2NhcGVcIixcbiAgICAgICAgYXV0ZXVyOiBcIkpUamllbFwiLFxuICAgICAgICBjb21tZW50YWlyZTogXCJDZSBGaW5sYW5kYWlzIHVuIHBldSBkw6lqYW50w6ksIG91dnJlIHNvbiBjb2V1ciBldCBzb24gb2JqZWN0aWZcIixcbiAgICAgICAgcGF5czogXCJIZWxzaW5za2lcIixcbiAgICAgICAgcHJpeDogMjgsXG4gICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICBncmFuZGU6IFwiZmVuZXRyZV9nZC5qcGdcIixcbiAgICAgICAgICAgIG1veWVubmU6IFwiZmVuZXRyZV9wdC5qcGdcIixcbiAgICAgICAgICAgIHBldGl0ZTogXCJmZW5ldHJlX3RwdC5qcGdcIixcbiAgICAgICAgICAgIHRvdXRlX3BldGl0ZTogXCJmZW5ldHJlX3R0cHQuanBnXCJcbiAgICAgICAgfSxcbiAgICAgICAgaWQ6IDNcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0cmU6IFwiSW50aW1pdMOpXCIsXG4gICAgICAgIGF1dGV1cjogXCJEQm9vXCIsXG4gICAgICAgIGNvbW1lbnRhaXJlOiBcIkNlIHN5bXBhdGlxdWUgZ2FpbGxpYXJkLCBub3VzIGludml0ZSBjaGV6IGx1aSBlbiB0b3V0ZSBzaW1wbGljaXTDqVwiLFxuICAgICAgICBwYXlzOiBcIkhlbHNpbnNraVwiLFxuICAgICAgICBwcml4OiAyOCxcbiAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgIGdyYW5kZTogXCJpbnRlcmlldXJfZ2QuanBnXCIsXG4gICAgICAgICAgICBtb3llbm5lOiBcImludGVyaWV1cl9wdC5qcGdcIixcbiAgICAgICAgICAgIHBldGl0ZTogXCJpbnRlcmlldXJfdHB0LmpwZ1wiLFxuICAgICAgICAgICAgdG91dGVfcGV0aXRlOiBcImludGVyaWV1cl90dHB0LmpwZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIGlkOiA0XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdHJlOiBcIlBhbGV0dGVzXCIsXG4gICAgICAgIGF1dGV1cjogXCJTYWJpbmFcIixcbiAgICAgICAgY29tbWVudGFpcmU6IFwiT2V1dnJlIG9yaWdpbmFsZSBpc3N1ZSBkJ3VuZSBhcnRpc3RlIGR1IHNhY1wiLFxuICAgICAgICBwYXlzOiBcIkNhc2FibGFua2FcIixcbiAgICAgICAgcHJpeDogMjQ1LFxuICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgZ3JhbmRlOiBcInBhbnRvbmVfZ2QuanBnXCIsXG4gICAgICAgICAgICBtb3llbm5lOiBcInBhbnRvbmVfcHQuanBnXCIsXG4gICAgICAgICAgICBwZXRpdGU6IFwicGFudG9uZV90cHQuanBnXCIsXG4gICAgICAgICAgICB0b3V0ZV9wZXRpdGU6IFwicGFudG9uZV90dHB0LmpwZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIGlkOiA1XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdHJlOiBcIlVudGl0bGVkXCIsXG4gICAgICAgIGF1dGV1cjogXCJBbm9ueW1lXCIsXG4gICAgICAgIGNvbW1lbnRhaXJlOiBcIk9ldXZyZSBhbm9ueW1lLi4uXCIsXG4gICAgICAgIHBheXM6IFwiQnJ1eGVsbGVzXCIsXG4gICAgICAgIHByaXg6IDgsXG4gICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICBncmFuZGU6IFwicm91bF9nZC5qcGdcIixcbiAgICAgICAgICAgIG1veWVubmU6IFwicm91bF9wdC5qcGdcIixcbiAgICAgICAgICAgIHBldGl0ZTogXCJyb3VsX3RwdC5qcGdcIixcbiAgICAgICAgICAgIHRvdXRlX3BldGl0ZTogXCJyb3VsX3R0cHQuanBnXCJcbiAgICAgICAgfSxcbiAgICAgICAgaWQ6IDZcbiAgICB9LFxuXG4gICAge1xuICAgICAgICB0aXRyZTogXCJUb3VybmUgdG91cm5lIHBldGl0IGVzY2FsaWVyXCIsXG4gICAgICAgIGF1dGV1cjogXCJNYXJpZSBOLlwiLFxuICAgICAgICBjb21tZW50YWlyZTogXCJQcmVtacOocmUgcGhvdG8gZCd1bmUgc8OpcmllIGQndW5lIGFydGlzdGUgdHJvcCB2aXRlIGRpc3BhcnVlXCIsXG4gICAgICAgIHBheXM6IFwiSHV5XCIsXG4gICAgICAgIHByaXg6IDQzLFxuICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgZ3JhbmRlOiBcInRvdXJuZV9nZC5qcGdcIixcbiAgICAgICAgICAgIG1veWVubmU6IFwidG91cm5lX3B0LmpwZ1wiLFxuICAgICAgICAgICAgcGV0aXRlOiBcInRvdXJuZV90cHQuanBnXCIsXG4gICAgICAgICAgICB0b3V0ZV9wZXRpdGU6IFwidG91cm5lX3R0cHQuanBnXCJcbiAgICAgICAgfSxcbiAgICAgICAgaWQ6IDdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0cmU6IFwiUmVmbGV0c1wiLFxuICAgICAgICBhdXRldXI6IFwiQ29wcGVcIixcbiAgICAgICAgY29tbWVudGFpcmU6IFwiQ2V0dGUgcGhvdG8gdW4gcGV1IG3DqWdhbG8gbm91cyBpbGx1c3RyZSBsYSBkw6ltZXN1cmUgZGUgY2UgYnJhdmUgcm91bWFpblwiLFxuICAgICAgICBwYXlzOiBcIkJlbGdyYWRlXCIsXG4gICAgICAgIHByaXg6IDIuOCxcbiAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgIGdyYW5kZTogXCJ2aXRyZXNfZ2QuanBnXCIsXG4gICAgICAgICAgICBtb3llbm5lOiBcInZpdHJlc19wdC5qcGdcIixcbiAgICAgICAgICAgIHBldGl0ZTogXCJ2aXRyZXNfdHB0LmpwZ1wiLFxuICAgICAgICAgICAgdG91dGVfcGV0aXRlOiBcInZpdHJlc190dHB0LmpwZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIGlkOiA4XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdHJlOiBcIkxlIGxhaXQgdHVlXCIsXG4gICAgICAgIGF1dGV1cjogXCJTLiBhbGFkZVwiLFxuICAgICAgICBjb21tZW50YWlyZTogXCJEdSByw6p2ZSBkYW5zIHVuIGzDqWd1bWUuLi5cIixcbiAgICAgICAgcGF5czogXCJCcmVzc291eFwiLFxuICAgICAgICBwcml4OiAxMyxcbiAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgIGdyYW5kZTogXCJsYWl0dWVfZ2QuanBnXCIsXG4gICAgICAgICAgICBtb3llbm5lOiBcImxhaXR1ZV9wdC5qcGdcIixcbiAgICAgICAgICAgIHBldGl0ZTogXCJsYWl0dWVfdHB0LmpwZ1wiLFxuICAgICAgICAgICAgdG91dGVfcGV0aXRlOiBcImxhaXR1ZV90dHB0LmpwZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIGlkOiA5XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdHJlOiBcIkJ1aWxkaW5nc1wiLFxuICAgICAgICBhdXRldXI6IFwiVG90b1wiLFxuICAgICAgICBjb21tZW50YWlyZTogXCJEdSBncmFuZCwgZHUgbG91cmRcIixcbiAgICAgICAgcGF5czogXCJWYXJzb3ZpZVwiLFxuICAgICAgICBwcml4OiAxMixcbiAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgIGdyYW5kZTogXCJpbW1ldWJsZV9nZC5qcGdcIixcbiAgICAgICAgICAgIG1veWVubmU6IFwiaW1tZXVibGVfcHQuanBnXCIsXG4gICAgICAgICAgICBwZXRpdGU6IFwiaW1tZXVibGVfdHB0LmpwZ1wiLFxuICAgICAgICAgICAgdG91dGVfcGV0aXRlOiBcImltbWV1YmxlX3R0cHQuanBnXCJcbiAgICAgICAgfSxcbiAgICAgICAgaWQ6IDEwXG4gICAgfVxuXVxuICAgICIsImltcG9ydCB7IEl0ZW1Nb2RlbCB9IGZyb20gXCIuL0l0ZW1Nb2RlbFwiO1xuXG5leHBvcnQgY2xhc3MgU3RvY2sge1xuICAgIHB1YmxpYyByZWFkb25seSBsaXN0SXRlbTogSXRlbU1vZGVsW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKGl0ZW1JblN0b2NrOiBJdGVtTW9kZWxbXSkge1xuICAgICAgICB0aGlzLmxpc3RJdGVtID0gaXRlbUluU3RvY2s7XG4gICAgfVxuXG4gICAgcHVibGljIGdldExpc3QoKTogbnVsbCB8IEl0ZW1Nb2RlbFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdEl0ZW0gIT09IFtdID8gdGhpcy5saXN0SXRlbSA6IG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEl0ZW1CeUlkKHNlYXJjaElkOm51bWJlcik6IHVuZGVmaW5lZCB8IEl0ZW1Nb2RlbHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdEl0ZW0uZmluZChpdGVtID0+IGl0ZW0uZ2V0SWQoKSA9PT0gc2VhcmNoSWQpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9