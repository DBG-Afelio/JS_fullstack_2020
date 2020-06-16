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

/***/ "./src/examples/two/cochon.ts":
/*!************************************!*\
  !*** ./src/examples/two/cochon.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Cochon = void 0;
    var Cochon = /** @class */ (function () {
        function Cochon(nom, sexe) {
            if (sexe === void 0) { sexe = 'F'; }
            this.nom = nom;
            this.sexe = sexe;
            this.ddn = new Date();
        }
        // Polymorphisme: pas possible en javascript
        // public disBonjour(test: boolean) {}
        Cochon.prototype.disBonjour = function () {
            console.log("Grr Grr je m'appelle " + this.nom);
            console.log("Je suis " + this.sexe);
        };
        Object.defineProperty(Cochon.prototype, "Sexe", {
            get: function () {
                return this.sexe;
            },
            set: function (v) {
                this.sexe = v;
            },
            enumerable: false,
            configurable: true
        });
        // Encapsulation des propriétés par des getter et setter
        Cochon.prototype.getNom = function () {
            return this.nom;
        };
        Cochon.prototype.setNom = function (nom) {
            return this.nom = nom;
        };
        Cochon.prototype.setCouleur = function (couleur) {
            if (this.sexe === 'F' && couleur === 'rouge') {
                throw new Error('Couleur rouge impossible pour les filles');
            }
            else {
                this.couleur = couleur;
            }
        };
        Cochon.prototype.getCouleur = function () {
            return this.couleur;
        };
        Cochon.prototype.rencontreCochon = function (voisin) {
            this.disBonjour();
            voisin.disBonjour();
            if (this.sexe !== voisin.Sexe) {
                return new Cochon(this.nom + voisin.getNom());
            }
            return null;
        };
        return Cochon;
    }());
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

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./examples/two/cochon */ "./src/examples/two/cochon.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, cochon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var baby = new cochon_1.Cochon('Baby', 'F'); // instanciation
    var piggy = new cochon_1.Cochon('Piggy', 'M'); // instanciation
    var baggy = baby.rencontreCochon(piggy);
    if (baggy) {
        console.log("l'enfant est n\u00E9 il s'appelle " + baggy.getNom());
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
// baby.disBonjour();
// piggy.disBonjour();
// Accesseur et encapsulation
// console.log(`la couleur de piggy ${piggy.couleur}`);
// piggy.couleur = 'rouge';
// console.log(`la couleur de piggy ${piggy.couleur}`);
// console.log(`la couleur de piggy ${piggy.sexe}`); // erreur
// piggy.setCouleur('rouge');
// console.log ('La couleur de Piggy est', piggy.getCouleur());
// // baby.setCouleur('rouge');
// console.log ('La couleur de Baby est', baby.getCouleur());
// baby.Sexe = 'M';
// console.log ('Le sexe de Baby est', baby.Sexe);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4YW1wbGVzL3R3by9jb2Nob24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7OztJQ2xGQTtRQU1JLGdCQUFZLEdBQVcsRUFBRSxJQUFVO1lBQVYsaUNBQVU7WUFDL0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDMUIsQ0FBQztRQUVELDRDQUE0QztRQUM1QyxzQ0FBc0M7UUFFL0IsMkJBQVUsR0FBakI7WUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUF3QixJQUFJLENBQUMsR0FBSyxDQUFDLENBQUM7WUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFXLElBQUksQ0FBQyxJQUFNLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBR0Qsc0JBQVcsd0JBQUk7aUJBQWY7Z0JBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3JCLENBQUM7aUJBR0QsVUFBZ0IsQ0FBVTtnQkFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7WUFDbEIsQ0FBQzs7O1dBTEE7UUFPRCx3REFBd0Q7UUFDakQsdUJBQU0sR0FBYjtZQUNJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNwQixDQUFDO1FBRU0sdUJBQU0sR0FBYixVQUFjLEdBQVc7WUFDckIsT0FBTyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMxQixDQUFDO1FBRU0sMkJBQVUsR0FBakIsVUFBa0IsT0FBZTtZQUM3QixJQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssR0FBRyxJQUFJLE9BQU8sS0FBSyxPQUFPLEVBQUU7Z0JBQzNDLE1BQU0sSUFBSSxLQUFLLENBQUMsMENBQTBDLENBQUMsQ0FBQzthQUMvRDtpQkFBTTtnQkFDSCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzthQUMxQjtRQUNMLENBQUM7UUFFTSwyQkFBVSxHQUFqQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDO1FBRU0sZ0NBQWUsR0FBdEIsVUFBd0IsTUFBYztZQUNsQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUMzQixPQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7YUFDakQ7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0wsYUFBQztJQUFELENBQUM7SUEzRFksd0JBQU07Ozs7Ozs7Ozs7Ozs7Ozs7O0lDRW5CLElBQU0sSUFBSSxHQUFHLElBQUksZUFBTSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLGdCQUFnQjtJQUN0RCxJQUFNLEtBQUssR0FBRyxJQUFJLGVBQU0sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0I7SUFFeEQsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxJQUFJLEtBQUssRUFBRTtRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQWdDLEtBQUssQ0FBQyxNQUFNLEVBQUksQ0FBQztLQUNoRTs7O0FBRUQscUJBQXFCO0FBQ3JCLHNCQUFzQjtBQUV0Qiw2QkFBNkI7QUFFN0IsdURBQXVEO0FBRXZELDJCQUEyQjtBQUUzQix1REFBdUQ7QUFDdkQsOERBQThEO0FBRTlELDZCQUE2QjtBQUM3QiwrREFBK0Q7QUFFL0QsK0JBQStCO0FBQy9CLDZEQUE2RDtBQUM3RCxtQkFBbUI7QUFDbkIsa0RBQWtEIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLnRzXCIpO1xuIiwiZXhwb3J0IGNsYXNzIENvY2hvbiB7XG4gICAgcHJpdmF0ZSBub206IHN0cmluZzsgIC8vIHZhcmlhYmxlIGQnaW5zdGFuY2VcbiAgICBwcml2YXRlIHNleGU6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgZGRuOiBEYXRlO1xuICAgIHByaXZhdGUgY291bGV1cj86IHN0cmluZyB8IG51bGw7XG5cbiAgICBjb25zdHJ1Y3Rvcihub206IHN0cmluZywgc2V4ZSA9ICdGJykge1xuICAgICAgICB0aGlzLm5vbSA9IG5vbTtcbiAgICAgICAgdGhpcy5zZXhlID0gc2V4ZTtcbiAgICAgICAgdGhpcy5kZG4gPSBuZXcgRGF0ZSgpO1xuICAgIH1cblxuICAgIC8vIFBvbHltb3JwaGlzbWU6IHBhcyBwb3NzaWJsZSBlbiBqYXZhc2NyaXB0XG4gICAgLy8gcHVibGljIGRpc0JvbmpvdXIodGVzdDogYm9vbGVhbikge31cblxuICAgIHB1YmxpYyBkaXNCb25qb3VyKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgR3JyIEdyciBqZSBtJ2FwcGVsbGUgJHt0aGlzLm5vbX1gKTtcbiAgICAgICAgY29uc29sZS5sb2coYEplIHN1aXMgJHt0aGlzLnNleGV9YCk7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgZ2V0IFNleGUoKSA6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnNleGU7XG4gICAgfVxuXG4gICAgXG4gICAgcHVibGljIHNldCBTZXhlKHYgOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zZXhlID0gdjtcbiAgICB9XG5cbiAgICAvLyBFbmNhcHN1bGF0aW9uIGRlcyBwcm9wcmnDqXTDqXMgcGFyIGRlcyBnZXR0ZXIgZXQgc2V0dGVyXG4gICAgcHVibGljIGdldE5vbSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9tO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXROb20obm9tOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9tID0gbm9tO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgc2V0Q291bGV1cihjb3VsZXVyOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCB0aGlzLnNleGUgPT09ICdGJyAmJiBjb3VsZXVyID09PSAncm91Z2UnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxldXIgcm91Z2UgaW1wb3NzaWJsZSBwb3VyIGxlcyBmaWxsZXMnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY291bGV1ciA9IGNvdWxldXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcHVibGljIGdldENvdWxldXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvdWxldXI7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmNvbnRyZUNvY2hvbiAodm9pc2luOiBDb2Nob24pIHtcbiAgICAgICAgdGhpcy5kaXNCb25qb3VyKCk7XG4gICAgICAgIHZvaXNpbi5kaXNCb25qb3VyKCk7XG4gICAgICAgIGlmICh0aGlzLnNleGUgIT09IHZvaXNpbi5TZXhlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENvY2hvbih0aGlzLm5vbSArIHZvaXNpbi5nZXROb20oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29jaG9uIH0gZnJvbSAnLi9leGFtcGxlcy90d28vY29jaG9uJztcblxuY29uc3QgYmFieSA9IG5ldyBDb2Nob24oJ0JhYnknLCAnRicpOyAvLyBpbnN0YW5jaWF0aW9uXG5jb25zdCBwaWdneSA9IG5ldyBDb2Nob24oJ1BpZ2d5JywgJ00nKTsgLy8gaW5zdGFuY2lhdGlvblxuXG5jb25zdCBiYWdneSA9IGJhYnkucmVuY29udHJlQ29jaG9uKHBpZ2d5KTtcbmlmIChiYWdneSkge1xuICAgIGNvbnNvbGUubG9nKGBsJ2VuZmFudCBlc3QgbsOpIGlsIHMnYXBwZWxsZSAke2JhZ2d5LmdldE5vbSgpfWApXG59XG5cbi8vIGJhYnkuZGlzQm9uam91cigpO1xuLy8gcGlnZ3kuZGlzQm9uam91cigpO1xuXG4vLyBBY2Nlc3NldXIgZXQgZW5jYXBzdWxhdGlvblxuXG4vLyBjb25zb2xlLmxvZyhgbGEgY291bGV1ciBkZSBwaWdneSAke3BpZ2d5LmNvdWxldXJ9YCk7XG5cbi8vIHBpZ2d5LmNvdWxldXIgPSAncm91Z2UnO1xuXG4vLyBjb25zb2xlLmxvZyhgbGEgY291bGV1ciBkZSBwaWdneSAke3BpZ2d5LmNvdWxldXJ9YCk7XG4vLyBjb25zb2xlLmxvZyhgbGEgY291bGV1ciBkZSBwaWdneSAke3BpZ2d5LnNleGV9YCk7IC8vIGVycmV1clxuXG4vLyBwaWdneS5zZXRDb3VsZXVyKCdyb3VnZScpO1xuLy8gY29uc29sZS5sb2cgKCdMYSBjb3VsZXVyIGRlIFBpZ2d5IGVzdCcsIHBpZ2d5LmdldENvdWxldXIoKSk7XG5cbi8vIC8vIGJhYnkuc2V0Q291bGV1cigncm91Z2UnKTtcbi8vIGNvbnNvbGUubG9nICgnTGEgY291bGV1ciBkZSBCYWJ5IGVzdCcsIGJhYnkuZ2V0Q291bGV1cigpKTtcbi8vIGJhYnkuU2V4ZSA9ICdNJztcbi8vIGNvbnNvbGUubG9nICgnTGUgc2V4ZSBkZSBCYWJ5IGVzdCcsIGJhYnkuU2V4ZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9