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

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./panier/Stock */ "./src/panier/Stock.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Stock_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function afficheMonStock(stock) {
        if (stock) {
            console.log("mon stock", stock.getList());
        }
        else {
            console.log("mons stock est vide");
        }
    }
    function afficheMonPanier(panier) {
        console.log("mon panier", panier);
    }
    var myStock = new Stock_1.Stock([]);
    //afficheMonStock(myStock);
    // const maListdeCommandes: OrderedItemModel[] = [{ item: myStock.getItemById(6), quantity: 20 }, item: myStock.getItemById(10), quantity: 8}, item: myStock.getItemById(8), quantity: 11}];
    // const myCart = new ShoppingCart(maListdeCommandes);
    // afficheMonPanier(myCart);
    function afficheItembyId(stock, id) {
        if (stock.getList.length > 0) {
            if (stock.getItemById(id)) {
                console.log(stock.getItemById(id));
            }
            else {
                console.log("ID item introuvable dans le stock");
            }
        }
        else {
            console.log('le Stock est vide');
        }
    }
    afficheItembyId(myStock, 10);
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/panier/Item.ts":
/*!****************************!*\
  !*** ./src/panier/Item.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Item = void 0;
    var Item = /** @class */ (function () {
        function Item(title, autor, comments, country, price, picture, id) {
            this.titre = 'itemTitle';
            this.auteur = 'itemAutor';
            this.commentaire = 'itemComments';
            this.pays = 'itemOrigins';
            this.prix = 0;
            this.id = 0;
            this.titre = title;
            this.auteur = autor;
            this.commentaire = comments;
            this.pays = country;
            this.prix = price;
            this.image = picture;
            this.id = id;
        }
        Item.prototype.getId = function () {
            return this.id;
        };
        Item.prototype.getItem = function () {
            return this;
        };
        return Item;
    }());
    exports.Item = Item;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/panier/Stock.ts":
/*!*****************************!*\
  !*** ./src/panier/Stock.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./Item */ "./src/panier/Item.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Item_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Stock = void 0;
    var Stock = /** @class */ (function () {
        function Stock(itemInStock) {
            var _this = this;
            this.listItem = [];
            itemInStock.forEach(function (elt) {
                var item = new Item_1.Item(elt.titre, elt.auteur, elt.commentaire, elt.pays, elt.prix, elt.image, elt.id);
                _this.listItem.push(item);
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Bhbmllci9JdGVtLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5pZXIvU3RvY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0lDMUVBLFNBQVMsZUFBZSxDQUFDLEtBQVk7UUFDakMsSUFBSSxLQUFLLEVBQUU7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUM3QzthQUFNO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQztJQUVELFNBQVMsZ0JBQWdCLENBQUMsTUFBb0I7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FB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WUFBQztJQUFELENBQUM7SUFsQlksc0JBQUsiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4udHNcIik7XG4iLCJcblxuaW1wb3J0IHsgQXZhaWxhYmxlSXRlbXMgfSBmcm9tICcuL3Bhbmllci9BdmFpbGFibGVJdGVtcydcbmltcG9ydCB7IEl0ZW1Nb2RlbCB9IGZyb20gJy4vcGFuaWVyL0l0ZW1Nb2RlbCc7XG5pbXBvcnQgeyBTdG9jayB9IGZyb20gJy4vcGFuaWVyL1N0b2NrJztcbmltcG9ydCB7IFNob3BwaW5nQ2FydCB9IGZyb20gJy4vcGFuaWVyL1Nob3BwaW5nQ2FydCc7XG5pbXBvcnQgeyBPcmRlcmVkSXRlbU1vZGVsIH0gZnJvbSAnLi9wYW5pZXIvT3JkZXJlZEl0ZW1Nb2RlbCc7XG5cbmZ1bmN0aW9uIGFmZmljaGVNb25TdG9jayhzdG9jazogU3RvY2spOiB2b2lke1xuICAgIGlmIChzdG9jaykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm1vbiBzdG9ja1wiLCBzdG9jay5nZXRMaXN0KCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibW9ucyBzdG9jayBlc3QgdmlkZVwiKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFmZmljaGVNb25QYW5pZXIocGFuaWVyOiBTaG9wcGluZ0NhcnQpOiB2b2lke1xuICAgIGNvbnNvbGUubG9nKFwibW9uIHBhbmllclwiLCBwYW5pZXIpO1xufVxuXG5cbmNvbnN0IG15U3RvY2sgPSBuZXcgU3RvY2soW10pO1xuLy9hZmZpY2hlTW9uU3RvY2sobXlTdG9jayk7XG5cbi8vIGNvbnN0IG1hTGlzdGRlQ29tbWFuZGVzOiBPcmRlcmVkSXRlbU1vZGVsW10gPSBbeyBpdGVtOiBteVN0b2NrLmdldEl0ZW1CeUlkKDYpLCBxdWFudGl0eTogMjAgfSwgaXRlbTogbXlTdG9jay5nZXRJdGVtQnlJZCgxMCksIHF1YW50aXR5OiA4fSwgaXRlbTogbXlTdG9jay5nZXRJdGVtQnlJZCg4KSwgcXVhbnRpdHk6IDExfV07XG4vLyBjb25zdCBteUNhcnQgPSBuZXcgU2hvcHBpbmdDYXJ0KG1hTGlzdGRlQ29tbWFuZGVzKTtcbi8vIGFmZmljaGVNb25QYW5pZXIobXlDYXJ0KTtcblxuZnVuY3Rpb24gYWZmaWNoZUl0ZW1ieUlkKHN0b2NrOlN0b2NrLCBpZDogbnVtYmVyKSB7XG4gICAgaWYgKHN0b2NrLmdldExpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoc3RvY2suZ2V0SXRlbUJ5SWQoaWQpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdG9jay5nZXRJdGVtQnlJZChpZCkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIklEIGl0ZW0gaW50cm91dmFibGUgZGFucyBsZSBzdG9ja1wiKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsZSBTdG9jayBlc3QgdmlkZScpO1xuICAgIH1cbn1cblxuYWZmaWNoZUl0ZW1ieUlkKG15U3RvY2ssIDEwKTtcbiIsImltcG9ydCB7IEl0ZW1Nb2RlbCB9IGZyb20gXCIuL0l0ZW1Nb2RlbFwiO1xuaW1wb3J0IHsgSW1hZ2VNb2RlbCB9IGZyb20gXCIuL0ltYWdlTW9kZWxcIjtcblxuZXhwb3J0IGNsYXNzIEl0ZW0gaW1wbGVtZW50cyBJdGVtTW9kZWx7XG4gICAgcHVibGljIHJlYWRvbmx5IHRpdHJlOiBzdHJpbmcgPSdpdGVtVGl0bGUnO1xuICAgIHB1YmxpYyByZWFkb25seSBhdXRldXI6IHN0cmluZyA9ICdpdGVtQXV0b3InO1xuICAgIHB1YmxpYyByZWFkb25seSBjb21tZW50YWlyZTogc3RyaW5nID0gJ2l0ZW1Db21tZW50cyc7XG4gICAgcHVibGljIHJlYWRvbmx5IHBheXM6IHN0cmluZyA9ICdpdGVtT3JpZ2lucyc7XG4gICAgcHVibGljIHJlYWRvbmx5IHByaXg6IG51bWJlciA9IDA7XG4gICAgcHVibGljIHJlYWRvbmx5IGltYWdlOiBJbWFnZU1vZGVsO1xuICAgIHB1YmxpYyByZWFkb25seSBpZDogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICB0aXRsZTogc3RyaW5nLFxuICAgICAgICBhdXRvcjogc3RyaW5nLFxuICAgICAgICBjb21tZW50czogc3RyaW5nLFxuICAgICAgICBjb3VudHJ5OiBzdHJpbmcsXG4gICAgICAgIHByaWNlOiBudW1iZXIsXG4gICAgICAgIHBpY3R1cmU6IEltYWdlTW9kZWwsXG4gICAgICAgIGlkOiBudW1iZXIpIHtcbiAgICBcbiAgICAgICAgdGhpcy50aXRyZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmF1dGV1ciA9IGF1dG9yO1xuICAgICAgICB0aGlzLmNvbW1lbnRhaXJlID0gY29tbWVudHM7XG4gICAgICAgIHRoaXMucGF5cyA9IGNvdW50cnk7XG4gICAgICAgIHRoaXMucHJpeCA9IHByaWNlO1xuICAgICAgICB0aGlzLmltYWdlID0gcGljdHVyZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJZCgpOiBudW1iZXJ7XG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgZ2V0SXRlbSgpOiBJdGVtTW9kZWx7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJdGVtTW9kZWwgfSBmcm9tIFwiLi9JdGVtTW9kZWxcIjtcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9JdGVtXCI7XG5cbmV4cG9ydCBjbGFzcyBTdG9jayB7XG4gICAgcHVibGljIHJlYWRvbmx5IGxpc3RJdGVtOiBJdGVtTW9kZWxbXSA9IFtdIDtcblxuICAgIGNvbnN0cnVjdG9yKGl0ZW1JblN0b2NrOiBJdGVtTW9kZWxbXSkge1xuICAgICAgICAgICAgaXRlbUluU3RvY2suZm9yRWFjaChlbHQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gbmV3IEl0ZW0oZWx0LnRpdHJlLCBlbHQuYXV0ZXVyLCBlbHQuY29tbWVudGFpcmUsIGVsdC5wYXlzLCBlbHQucHJpeCwgZWx0LmltYWdlLCBlbHQuaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdEl0ZW0ucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRMaXN0KCk6IG51bGwgfCBJdGVtTW9kZWxbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3RJdGVtICE9PSBbXSA/IHRoaXMubGlzdEl0ZW0gOiBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRJdGVtQnlJZChzZWFyY2hJZDogbnVtYmVyKTogdW5kZWZpbmVkIHwgSXRlbU1vZGVse1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0SXRlbS5maW5kKGl0ZW0gPT4gaXRlbS5nZXRJZCgpID09PSBzZWFyY2hJZCk7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==