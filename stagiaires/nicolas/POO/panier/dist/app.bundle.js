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

/***/ "./src/article.ts":
/*!************************!*\
  !*** ./src/article.ts ***!
  \************************/
/*! exports provided: Article */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
class Article {
    constructor(title, price, img, id) {
        this.title = title;
        this.price = parseFloat(price);
        this.img = img;
        this.id = id;
    }
    getTitle() {
        return this.title;
    }
    getPrice() {
        return this.price;
    }
    getImg() {
        return this.img;
    }
    getId() {
        return this.id;
    }
}


/***/ }),

/***/ "./src/basket.ts":
/*!***********************!*\
  !*** ./src/basket.ts ***!
  \***********************/
/*! exports provided: Basket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Basket", function() { return Basket; });
/* harmony import */ var _orderedArticle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orderedArticle */ "./src/orderedArticle.ts");

class Basket {
    constructor() {
        this.orderedArticlesList = [];
        this.orderedArticlesList = [];
    }
    addArticle(article) {
        this.orderedArticlesList.push(article);
    }
    updateArticle(article, quantity) {
        article.setQuantity(quantity);
    }
    deleteArticle(id) {
        this.orderedArticlesList = this.orderedArticlesList.filter(element => id != element.getArticle().getId());
    }
    updateBasket(article, quantity) {
        const orderedArticle = this.findArticle(article);
        if (orderedArticle) {
            if (quantity === 0) {
                this.deleteArticle(article.getId());
                return true;
            }
            else {
                this.updateArticle(orderedArticle, quantity);
                return true;
            }
        }
        else if (quantity > 0) {
            this.addArticle(new _orderedArticle__WEBPACK_IMPORTED_MODULE_0__["OrderedArticle"](article, quantity));
            return true;
        }
        else {
            return false;
        }
    }
    findArticle(article) {
        return this.orderedArticlesList.find(element => element.getArticle().getId() === article.getId());
    }
    getOrderedArticlesList() {
        return this.orderedArticlesList;
    }
    getTotal() {
        let totalQuantity = 0;
        let totalPrice = 0;
        this.orderedArticlesList.forEach(element => {
            totalQuantity += element.getQuantity();
            totalPrice += element.getTotalPrice();
        });
        return { totalQuantity, totalPrice };
    }
    empty() {
        this.orderedArticlesList = [];
    }
}


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sourceJSON__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sourceJSON */ "./src/sourceJSON.ts");
/* harmony import */ var _shop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shop */ "./src/shop.ts");
/* harmony import */ var _basket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basket */ "./src/basket.ts");
//import { articles } from "./articles";



const newShop = new _shop__WEBPACK_IMPORTED_MODULE_1__["Shop"](_sourceJSON__WEBPACK_IMPORTED_MODULE_0__["tab_img"]);
const newBasket = new _basket__WEBPACK_IMPORTED_MODULE_2__["Basket"]();
const article1 = newShop.getArticleById(2);
const article2 = newShop.getArticleById(5);
if (article1 && article2) {
    newBasket.updateBasket(article1, 5);
    newBasket.updateBasket(article2, 5);
}
/*console.log(newBasket.updateBasket(newShop.getArticleById(4),2));*/
console.log(newBasket.getOrderedArticlesList());
console.log(newBasket.getTotal());


/***/ }),

/***/ "./src/orderedArticle.ts":
/*!*******************************!*\
  !*** ./src/orderedArticle.ts ***!
  \*******************************/
/*! exports provided: OrderedArticle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderedArticle", function() { return OrderedArticle; });
class OrderedArticle {
    constructor(article, quantity) {
        this.article = article;
        this.quantity = quantity;
        this.price = article.getPrice();
    }
    getArticle() {
        return this.article;
    }
    getPrice() {
        return this.price;
    }
    getQuantity() {
        return this.quantity;
    }
    setQuantity(newQuantity) {
        this.quantity = newQuantity;
    }
    getTotalPrice() {
        return this.quantity * this.price;
    }
}


/***/ }),

/***/ "./src/shop.ts":
/*!*********************!*\
  !*** ./src/shop.ts ***!
  \*********************/
/*! exports provided: Shop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shop", function() { return Shop; });
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article */ "./src/article.ts");

class Shop {
    constructor(tab) {
        this.articlesList = [];
        tab.forEach(element => {
            let article = new _article__WEBPACK_IMPORTED_MODULE_0__["Article"](element.titre, element.Prix, element.image.toute_petite, element.id);
            this.articlesList.push(article);
        });
    }
    getArticleById(id) {
        return this.articlesList.find(element => id == element.getId());
    }
    getArticlesList() {
        return this.articlesList;
    }
}


/***/ }),

/***/ "./src/sourceJSON.ts":
/*!***************************!*\
  !*** ./src/sourceJSON.ts ***!
  \***************************/
/*! exports provided: tab_img */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tab_img", function() { return tab_img; });
const tab_img = [{
        titre: "Bulles",
        auteur: "E. Lassaux",
        commentaire: "Spécialisé dans les photos d'objet, \"Neness\" aime aussi photographier les animaux",
        Pays: "Suède",
        Prix: "208 euros",
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
        Pays: "Brasil",
        Prix: "228 euros",
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
        Pays: "Helsinski",
        Prix: "28 euros",
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
        Pays: "Helsinski",
        Prix: "28 euros",
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
        Pays: "Casablanka",
        Prix: "245 euros",
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
        Pays: "Bruxelles",
        Prix: "8 euros",
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
        Pays: "Huy",
        Prix: "43 euros",
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
        Pays: "Belgrade",
        Prix: "2.8 euros",
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
        Pays: "Bressoux",
        Prix: "13 euros",
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
        Pays: "Varsovie",
        Prix: "12 euros",
        image: {
            grande: "immeuble_gd.jpg",
            moyenne: "immeuble_pt.jpg",
            petite: "immeuble_tpt.jpg",
            toute_petite: "immeuble_ttpt.jpg"
        },
        id: 10
    }];


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FydGljbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jhc2tldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb3JkZXJlZEFydGljbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nob3AudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvdXJjZUpTT04udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQU8sTUFBTSxPQUFPO0lBT2hCLFlBQVksS0FBWSxFQUFFLEtBQVksRUFBRSxHQUFVLEVBQUMsRUFBUztRQUN4RCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFL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QUFLLEVBQUc7WUFDTixNQUFNLEVBQUcsZUFBZTtZQUN4QixPQUFPLEVBQUcsZUFBZTtZQUN6QixNQUFNLEVBQUcsZ0JBQWdCO1lBQ3pCLFlBQVksRUFBRyxpQkFBaUI7U0FDckI7UUFDYixFQUFFLEVBQUUsQ0FBQztLQUNOO0lBQ0Q7UUFDRSxLQUFLLEVBQUcsV0FBVztRQUNuQixNQUFNLEVBQUcsTUFBTTtRQUNmLFdBQVcsRUFBRyxvQkFBb0I7UUFDbEMsSUFBSSxFQUFHLFVBQVU7UUFDakIsSUFBSSxFQUFHLFVBQVU7UUFDakIsS0FBSyxFQUFHO1lBQ04sTUFBTSxFQUFHLGlCQUFpQjtZQUMxQixPQUFPLEVBQUcsaUJBQWlCO1lBQzNCLE1BQU0sRUFBRyxrQkFBa0I7WUFDM0IsWUFBWSxFQUFHLG1CQUFtQjtTQUN2QjtRQUNiLEVBQUUsRUFBRSxFQUFFO0tBQ1AsQ0FBQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi50c1wiKTtcbiIsImV4cG9ydCBjbGFzcyBBcnRpY2xle1xyXG5cclxuICAgIHByb3RlY3RlZCB0aXRsZSA6IHN0cmluZztcclxuICAgIHByb3RlY3RlZCBwcmljZSA6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBpbWcgOiBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgaWQgOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGl0bGU6c3RyaW5nLCBwcmljZTpzdHJpbmcsIGltZzpzdHJpbmcsaWQ6bnVtYmVyICl7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMucHJpY2UgPSBwYXJzZUZsb2F0KHByaWNlKTtcclxuICAgICAgICB0aGlzLmltZyA9IGltZztcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB9XHJcbiAgICBnZXRUaXRsZSgpIDogc3RyaW5ne1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy50aXRsZVxyXG5cclxuICAgIH1cclxuICAgIGdldFByaWNlKCkgOiBudW1iZXJ7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnByaWNlXHJcblxyXG4gICAgfVxyXG4gICAgZ2V0SW1nKCkgOiBzdHJpbmd7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmltZ1xyXG5cclxuICAgIH1cclxuICAgIGdldElkKCkgOiBudW1iZXJ7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmlkXHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgT3JkZXJlZEFydGljbGUgfSBmcm9tIFwiLi9vcmRlcmVkQXJ0aWNsZVwiO1xyXG5pbXBvcnQgeyBBcnRpY2xlIH0gZnJvbSBcIi4vYXJ0aWNsZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2tldHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb3JkZXJlZEFydGljbGVzTGlzdDpPcmRlcmVkQXJ0aWNsZVtdPVtdO1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLm9yZGVyZWRBcnRpY2xlc0xpc3Q9W107XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRBcnRpY2xlKGFydGljbGU6T3JkZXJlZEFydGljbGUpOnZvaWR7XHJcblxyXG4gICAgICAgIHRoaXMub3JkZXJlZEFydGljbGVzTGlzdC5wdXNoKGFydGljbGUpO1xyXG5cclxuICAgIH1cclxuICAgIHByaXZhdGUgdXBkYXRlQXJ0aWNsZShhcnRpY2xlOk9yZGVyZWRBcnRpY2xlLHF1YW50aXR5Om51bWJlcik6dm9pZHtcclxuXHJcbiAgICAgICAgYXJ0aWNsZS5zZXRRdWFudGl0eShxdWFudGl0eSk7XHJcblxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkZWxldGVBcnRpY2xlKGlkOm51bWJlcik6dm9pZHtcclxuXHJcbiAgICAgICAgdGhpcy5vcmRlcmVkQXJ0aWNsZXNMaXN0ID0gdGhpcy5vcmRlcmVkQXJ0aWNsZXNMaXN0LmZpbHRlcihlbGVtZW50ID0+IGlkICE9IGVsZW1lbnQuZ2V0QXJ0aWNsZSgpLmdldElkKCkpXHJcblxyXG4gICAgfVxyXG4gICAgdXBkYXRlQmFza2V0KGFydGljbGU6QXJ0aWNsZSxxdWFudGl0eTpudW1iZXIpOkJvb2xlYW57XHJcbiAgICAgICAgY29uc3Qgb3JkZXJlZEFydGljbGUgPSB0aGlzLmZpbmRBcnRpY2xlKGFydGljbGUpO1xyXG4gICAgICAgIGlmKG9yZGVyZWRBcnRpY2xlKXtcclxuXHJcbiAgICAgICAgICAgIGlmKHF1YW50aXR5ID09PSAwKXtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUFydGljbGUoYXJ0aWNsZS5nZXRJZCgpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQXJ0aWNsZShvcmRlcmVkQXJ0aWNsZSxxdWFudGl0eSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1lbHNlIGlmKHF1YW50aXR5PjApe1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hZGRBcnRpY2xlKG5ldyBPcmRlcmVkQXJ0aWNsZShhcnRpY2xlLHF1YW50aXR5KSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcblxyXG4gICAgICAgIH1lbHNle1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcbiAgICBmaW5kQXJ0aWNsZShhcnRpY2xlOkFydGljbGUpOk9yZGVyZWRBcnRpY2xlIHwgdW5kZWZpbmVke1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5vcmRlcmVkQXJ0aWNsZXNMaXN0LmZpbmQoZWxlbWVudCA9PiBlbGVtZW50LmdldEFydGljbGUoKS5nZXRJZCgpID09PSBhcnRpY2xlLmdldElkKCkpXHJcblxyXG4gICAgfVxyXG4gICAgZ2V0T3JkZXJlZEFydGljbGVzTGlzdCgpOk9yZGVyZWRBcnRpY2xlW117XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLm9yZGVyZWRBcnRpY2xlc0xpc3RcclxuXHJcbiAgICB9XHJcbiAgICBnZXRUb3RhbCgpOnt0b3RhbFF1YW50aXR5Ok51bWJlcix0b3RhbFByaWNlOk51bWJlcn17XHJcbiAgICAgICAgbGV0IHRvdGFsUXVhbnRpdHk6bnVtYmVyPTA7XHJcbiAgICAgICAgbGV0IHRvdGFsUHJpY2U6bnVtYmVyPTA7XHJcblxyXG4gICAgICAgIHRoaXMub3JkZXJlZEFydGljbGVzTGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG5cclxuICAgICAgICAgICAgdG90YWxRdWFudGl0eSArPSBlbGVtZW50LmdldFF1YW50aXR5KCk7XHJcbiAgICAgICAgICAgIHRvdGFsUHJpY2UgKz0gZWxlbWVudC5nZXRUb3RhbFByaWNlKCk7XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHt0b3RhbFF1YW50aXR5LHRvdGFsUHJpY2V9XHJcbiAgICB9XHJcbiAgICBlbXB0eSgpOnZvaWR7XHJcblxyXG4gICAgICAgIHRoaXMub3JkZXJlZEFydGljbGVzTGlzdCA9IFtdO1xyXG5cclxuICAgIH1cclxuICAgIC8qc2F2ZSgpOnZvaWR7XHJcblxyXG5cclxuXHJcbiAgICB9XHJcbiAgICBsb2FkKHVzZXJTaG9wOlNob3AsYW55W10pOkJhc2tldHtcclxuXHJcblxyXG5cclxuICAgIH0qL1xyXG59IiwiLy9pbXBvcnQgeyBhcnRpY2xlcyB9IGZyb20gXCIuL2FydGljbGVzXCI7XHJcbmltcG9ydCB7IHRhYl9pbWcgfSBmcm9tIFwiLi9zb3VyY2VKU09OXCI7XHJcbmltcG9ydCB7IEFydGljbGUgfSBmcm9tIFwiLi9hcnRpY2xlXCI7XHJcbmltcG9ydCB7IFNob3AgfSBmcm9tIFwiLi9zaG9wXCI7XHJcbmltcG9ydCB7IEJhc2tldCB9IGZyb20gXCIuL2Jhc2tldFwiO1xyXG5pbXBvcnQgeyBPcmRlcmVkQXJ0aWNsZSB9IGZyb20gXCIuL29yZGVyZWRBcnRpY2xlXCI7XHJcblxyXG5jb25zdCBuZXdTaG9wPSBuZXcgU2hvcCh0YWJfaW1nKTtcclxuY29uc3QgbmV3QmFza2V0ID0gbmV3IEJhc2tldCgpO1xyXG5jb25zdCBhcnRpY2xlMSA9IG5ld1Nob3AuZ2V0QXJ0aWNsZUJ5SWQoMik7XHJcbmNvbnN0IGFydGljbGUyID0gbmV3U2hvcC5nZXRBcnRpY2xlQnlJZCg1KTtcclxuaWYoYXJ0aWNsZTEgJiYgYXJ0aWNsZTIpe1xyXG5cclxuICAgIG5ld0Jhc2tldC51cGRhdGVCYXNrZXQoYXJ0aWNsZTEsNSk7XHJcbiAgICBuZXdCYXNrZXQudXBkYXRlQmFza2V0KGFydGljbGUyLDUpO1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuLypjb25zb2xlLmxvZyhuZXdCYXNrZXQudXBkYXRlQmFza2V0KG5ld1Nob3AuZ2V0QXJ0aWNsZUJ5SWQoNCksMikpOyovXHJcblxyXG5jb25zb2xlLmxvZyhuZXdCYXNrZXQuZ2V0T3JkZXJlZEFydGljbGVzTGlzdCgpKTtcclxuY29uc29sZS5sb2cobmV3QmFza2V0LmdldFRvdGFsKCkpO1xyXG4iLCJpbXBvcnQgeyBBcnRpY2xlIH0gZnJvbSBcIi4vYXJ0aWNsZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9yZGVyZWRBcnRpY2xle1xyXG5cclxuICAgIHByb3RlY3RlZCBhcnRpY2xlIDogQXJ0aWNsZTtcclxuICAgIHByb3RlY3RlZCBwcmljZSA6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBxdWFudGl0eSA6IG51bWJlcjtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoYXJ0aWNsZTpBcnRpY2xlLCBxdWFudGl0eTpudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuYXJ0aWNsZSA9IGFydGljbGU7XHJcbiAgICAgICAgdGhpcy5xdWFudGl0eSA9IHF1YW50aXR5O1xyXG4gICAgICAgIHRoaXMucHJpY2UgPSBhcnRpY2xlLmdldFByaWNlKCk7XHJcbiAgICB9XHJcbiAgICBnZXRBcnRpY2xlKCkgOiBBcnRpY2xle1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5hcnRpY2xlXHJcblxyXG4gICAgfVxyXG4gICAgZ2V0UHJpY2UoKSA6IG51bWJlcntcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpY2VcclxuXHJcbiAgICB9XHJcbiAgICBnZXRRdWFudGl0eSgpIDogbnVtYmVye1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5xdWFudGl0eVxyXG5cclxuICAgIH1cclxuICAgIHNldFF1YW50aXR5KG5ld1F1YW50aXR5IDogbnVtYmVyKSA6IHZvaWR7XHJcblxyXG4gICAgICAgIHRoaXMucXVhbnRpdHkgPSBuZXdRdWFudGl0eTtcclxuXHJcbiAgICB9XHJcbiAgICBnZXRUb3RhbFByaWNlKCkgOiBudW1iZXJ7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnF1YW50aXR5ICogdGhpcy5wcmljZVxyXG5cclxuICAgIH1cclxufSIsImltcG9ydCB7IEFydGljbGUgfSBmcm9tIFwiLi9hcnRpY2xlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2hvcHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgYXJ0aWNsZXNMaXN0OkFydGljbGVbXT1bXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0YWI6YW55W10pe1xyXG5cclxuICAgICAgICB0YWIuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBhcnRpY2xlPW5ldyBBcnRpY2xlKGVsZW1lbnQudGl0cmUsZWxlbWVudC5Qcml4LGVsZW1lbnQuaW1hZ2UudG91dGVfcGV0aXRlLGVsZW1lbnQuaWQpO1xyXG4gICAgICAgICAgICB0aGlzLmFydGljbGVzTGlzdC5wdXNoKGFydGljbGUpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGdldEFydGljbGVCeUlkKGlkOm51bWJlcik6QXJ0aWNsZXx1bmRlZmluZWR7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmFydGljbGVzTGlzdC5maW5kKGVsZW1lbnQgPT4gaWQgPT0gZWxlbWVudC5nZXRJZCgpIClcclxuXHJcbiAgICB9XHJcbiAgICBnZXRBcnRpY2xlc0xpc3QoKTpBcnRpY2xlW117XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmFydGljbGVzTGlzdFxyXG5cclxuICAgIH1cclxufSIsImV4cG9ydCBjb25zdCB0YWJfaW1nIDogYW55W109XHJcbiAgW3tcclxuICAgICAgdGl0cmUgICAgICAgICA6IFwiQnVsbGVzXCIsXHJcbiAgICAgIGF1dGV1ciAgICAgICAgOiBcIkUuIExhc3NhdXhcIixcclxuICAgICAgY29tbWVudGFpcmUgICA6IFwiU3DDqWNpYWxpc8OpIGRhbnMgbGVzIHBob3RvcyBkJ29iamV0LCBcXFwiTmVuZXNzXFxcIiBhaW1lIGF1c3NpIHBob3RvZ3JhcGhpZXIgbGVzIGFuaW1hdXhcIixcclxuICAgICAgUGF5cyAgICAgICAgICA6IFwiU3XDqGRlXCIsXHJcbiAgICAgIFByaXggICAgICAgICAgOiBcIjIwOCBldXJvc1wiLFxyXG4gICAgICBpbWFnZSAgICAgICAgIDogICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYW5kZSAgICAgICAgICA6IFwiYnVsbGVfZ2QuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1veWVubmUgICAgICAgICA6IFwiYnVsbGVfcHQuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBldGl0ZSAgICAgICAgICA6IFwiYnVsbGVfdHB0LmpwZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3V0ZV9wZXRpdGUgICAgOiBcImJ1bGxlX3R0cHQuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICBpZCA6MVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0cmUgOiBcIkwnT2VpbCBkdSB0aWdcIixcclxuICAgICAgYXV0ZXVyIDogXCJKLiBIZXJtYW5cIixcclxuICAgICAgY29tbWVudGFpcmUgOiBcIlRvdXQgZHJvaXQgc29ydGkgZGUgbGEgbm91dmVsbGUgw6ljb2xlIFBvcnR1Z2Fpc2UsIGlsIG5vdXMgZG9ubmUgbMOgIHVuZSBkZSBzZXMgcGx1cyBiZWxsZSBvZXV2cmVzXCIsXHJcbiAgICAgIFBheXMgOiBcIkJyYXNpbFwiLFxyXG4gICAgICBQcml4IDogXCIyMjggZXVyb3NcIixcclxuICAgICAgaW1hZ2UgOiB7XHJcbiAgICAgICAgZ3JhbmRlIDogXCJlc2NhbGllcl9nZC5qcGdcIixcclxuICAgICAgICBtb3llbm5lIDogXCJlc2NhbGllcl9wdC5qcGdcIixcclxuICAgICAgICBwZXRpdGUgOiBcImVzY2FsaWVyX3RwdC5qcGdcIixcclxuICAgICAgICB0b3V0ZV9wZXRpdGUgOiBcImVzY2FsaWVyX3R0cHQuanBnXCJcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgaWQgOjJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdHJlIDogXCJFc2NhcGVcIixcclxuICAgICAgYXV0ZXVyIDogXCJKVGppZWxcIixcclxuICAgICAgY29tbWVudGFpcmUgOiBcIkNlIEZpbmxhbmRhaXMgdW4gcGV1IGTDqWphbnTDqSwgb3V2cmUgc29uIGNvZXVyIGV0IHNvbiBvYmplY3RpZlwiLFxyXG4gICAgICBQYXlzIDogXCJIZWxzaW5za2lcIixcclxuICAgICAgUHJpeCA6IFwiMjggZXVyb3NcIixcclxuICAgICAgaW1hZ2UgOiB7XHJcbiAgICAgICAgZ3JhbmRlIDogXCJmZW5ldHJlX2dkLmpwZ1wiLFxyXG4gICAgICAgIG1veWVubmUgOiBcImZlbmV0cmVfcHQuanBnXCIsXHJcbiAgICAgICAgcGV0aXRlIDogXCJmZW5ldHJlX3RwdC5qcGdcIixcclxuICAgICAgICB0b3V0ZV9wZXRpdGUgOiBcImZlbmV0cmVfdHRwdC5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICBpZCA6M1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0cmUgOiBcIkludGltaXTDqVwiLFxyXG4gICAgICBhdXRldXIgOiBcIkRCb29cIixcclxuICAgICAgY29tbWVudGFpcmUgOiBcIkNlIHN5bXBhdGlxdWUgZ2FpbGxpYXJkLCBub3VzIGludml0ZSBjaGV6IGx1aSBlbiB0b3V0ZSBzaW1wbGljaXTDqVwiLFxyXG4gICAgICBQYXlzIDogXCJIZWxzaW5za2lcIixcclxuICAgICAgUHJpeCA6IFwiMjggZXVyb3NcIixcclxuICAgICAgaW1hZ2UgOiB7XHJcbiAgICAgICAgZ3JhbmRlIDogXCJpbnRlcmlldXJfZ2QuanBnXCIsXHJcbiAgICAgICAgbW95ZW5uZSA6IFwiaW50ZXJpZXVyX3B0LmpwZ1wiLFxyXG4gICAgICAgIHBldGl0ZSA6IFwiaW50ZXJpZXVyX3RwdC5qcGdcIixcclxuICAgICAgICB0b3V0ZV9wZXRpdGUgOiBcImludGVyaWV1cl90dHB0LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgIGlkIDo0XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRyZSA6IFwiUGFsZXR0ZXNcIixcclxuICAgICAgYXV0ZXVyIDogXCJTYWJpbmFcIixcclxuICAgICAgY29tbWVudGFpcmUgOiBcIk9ldXZyZSBvcmlnaW5hbGUgaXNzdWUgZCd1bmUgYXJ0aXN0ZSBkdSBzYWNcIixcclxuICAgICAgUGF5cyA6IFwiQ2FzYWJsYW5rYVwiLFxyXG4gICAgICBQcml4IDogXCIyNDUgZXVyb3NcIixcclxuICAgICAgaW1hZ2UgOiB7XHJcbiAgICAgICAgZ3JhbmRlIDogXCJwYW50b25lX2dkLmpwZ1wiLFxyXG4gICAgICAgIG1veWVubmUgOiBcInBhbnRvbmVfcHQuanBnXCIsXHJcbiAgICAgICAgcGV0aXRlIDogXCJwYW50b25lX3RwdC5qcGdcIixcclxuICAgICAgICB0b3V0ZV9wZXRpdGUgOiBcInBhbnRvbmVfdHRwdC5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICBpZCA6NVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0cmUgOiBcIlVudGl0bGVkXCIsXHJcbiAgICAgIGF1dGV1ciA6IFwiQW5vbnltZVwiLFxyXG4gICAgICBjb21tZW50YWlyZSA6IFwiT2V1dnJlIGFub255bWUuLi5cIixcclxuICAgICAgUGF5cyA6IFwiQnJ1eGVsbGVzXCIsXHJcbiAgICAgIFByaXggOiBcIjggZXVyb3NcIixcclxuICAgICAgaW1hZ2UgOiB7XHJcbiAgICAgICAgZ3JhbmRlIDogXCJyb3VsX2dkLmpwZ1wiLFxyXG4gICAgICAgIG1veWVubmUgOiBcInJvdWxfcHQuanBnXCIsXHJcbiAgICAgICAgcGV0aXRlIDogXCJyb3VsX3RwdC5qcGdcIixcclxuICAgICAgICB0b3V0ZV9wZXRpdGUgOiBcInJvdWxfdHRwdC5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICBpZCA6NlxyXG4gICAgfSxcclxuICAgIFxyXG4gICAge1xyXG4gICAgICB0aXRyZSA6IFwiVG91cm5lIHRvdXJuZSBwZXRpdCBlc2NhbGllclwiLFxyXG4gICAgICBhdXRldXIgOiBcIk1hcmllIE4uXCIsXHJcbiAgICAgIGNvbW1lbnRhaXJlIDogXCJQcmVtacOocmUgcGhvdG8gZCd1bmUgc8OpcmllIGQndW5lIGFydGlzdGUgdHJvcCB2aXRlIGRpc3BhcnVlXCIsXHJcbiAgICAgIFBheXMgOiBcIkh1eVwiLFxyXG4gICAgICBQcml4IDogXCI0MyBldXJvc1wiLFxyXG4gICAgICBpbWFnZSA6IHtcclxuICAgICAgICBncmFuZGUgOiBcInRvdXJuZV9nZC5qcGdcIixcclxuICAgICAgICBtb3llbm5lIDogXCJ0b3VybmVfcHQuanBnXCIsXHJcbiAgICAgICAgcGV0aXRlIDogXCJ0b3VybmVfdHB0LmpwZ1wiLFxyXG4gICAgICAgIHRvdXRlX3BldGl0ZSA6IFwidG91cm5lX3R0cHQuanBnXCJcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgaWQgOjdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdHJlIDogXCJSZWZsZXRzXCIsXHJcbiAgICAgIGF1dGV1ciA6IFwiQ29wcGVcIixcclxuICAgICAgY29tbWVudGFpcmUgOiBcIkNldHRlIHBob3RvIHVuIHBldSBtw6lnYWxvIG5vdXMgaWxsdXN0cmUgbGEgZMOpbWVzdXJlIGRlIGNlIGJyYXZlIHJvdW1haW5cIixcclxuICAgICAgUGF5cyA6IFwiQmVsZ3JhZGVcIixcclxuICAgICAgUHJpeCA6IFwiMi44IGV1cm9zXCIsXHJcbiAgICAgIGltYWdlIDoge1xyXG4gICAgICAgIGdyYW5kZSA6IFwidml0cmVzX2dkLmpwZ1wiLFxyXG4gICAgICAgIG1veWVubmUgOiBcInZpdHJlc19wdC5qcGdcIixcclxuICAgICAgICBwZXRpdGUgOiBcInZpdHJlc190cHQuanBnXCIsXHJcbiAgICAgICAgdG91dGVfcGV0aXRlIDogXCJ2aXRyZXNfdHRwdC5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICBpZCA6OFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0cmUgOiBcIkxlIGxhaXQgdHVlXCIsXHJcbiAgICAgIGF1dGV1ciA6IFwiUy4gYWxhZGVcIixcclxuICAgICAgY29tbWVudGFpcmUgOiBcIkR1IHLDqnZlIGRhbnMgdW4gbMOpZ3VtZS4uLlwiLFxyXG4gICAgICBQYXlzIDogXCJCcmVzc291eFwiLFxyXG4gICAgICBQcml4IDogXCIxMyBldXJvc1wiLFxyXG4gICAgICBpbWFnZSA6IHtcclxuICAgICAgICBncmFuZGUgOiBcImxhaXR1ZV9nZC5qcGdcIixcclxuICAgICAgICBtb3llbm5lIDogXCJsYWl0dWVfcHQuanBnXCIsXHJcbiAgICAgICAgcGV0aXRlIDogXCJsYWl0dWVfdHB0LmpwZ1wiLFxyXG4gICAgICAgIHRvdXRlX3BldGl0ZSA6IFwibGFpdHVlX3R0cHQuanBnXCJcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgaWQgOjlcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdHJlIDogXCJCdWlsZGluZ3NcIixcclxuICAgICAgYXV0ZXVyIDogXCJUb3RvXCIsXHJcbiAgICAgIGNvbW1lbnRhaXJlIDogXCJEdSBncmFuZCwgZHUgbG91cmRcIixcclxuICAgICAgUGF5cyA6IFwiVmFyc292aWVcIixcclxuICAgICAgUHJpeCA6IFwiMTIgZXVyb3NcIixcclxuICAgICAgaW1hZ2UgOiB7XHJcbiAgICAgICAgZ3JhbmRlIDogXCJpbW1ldWJsZV9nZC5qcGdcIixcclxuICAgICAgICBtb3llbm5lIDogXCJpbW1ldWJsZV9wdC5qcGdcIixcclxuICAgICAgICBwZXRpdGUgOiBcImltbWV1YmxlX3RwdC5qcGdcIixcclxuICAgICAgICB0b3V0ZV9wZXRpdGUgOiBcImltbWV1YmxlX3R0cHQuanBnXCJcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgaWQgOjEwXHJcbiAgICB9XVxyXG4iXSwic291cmNlUm9vdCI6IiJ9