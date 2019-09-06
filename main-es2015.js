(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">    \r\n        <div class=\"row\" style=\"height: 75px\"></div>\r\n    <div class=\"row\">\r\n        <img src=\"assets/images/Franzeno.png\" class=\"col-md-2\" style=\"background: black\">\r\n        <app-keno-board class=\"col-md-10\"></app-keno-board>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/keno-board/keno-board.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/keno-board/keno-board.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <!-- <div ngClass=\"{'card col-md-1': true, 'card bg-warning col-md-1': false}\" *ngFor=\"let nbr of ten\"><span class=\"board-number\">{{nbr}}</span></div> -->\n    <div [ngClass]=\"{ 'even-number-found': gameNumbers.indexOf(nbr) >= 0 && even(nbr), 'odd-number-found': gameNumbers.indexOf(nbr) >= 0 && !even(nbr)}\"\n        class=\"card col-md-1\" *ngFor=\"let nbr of ten\"><span class=\"board-number\">{{nbr}}</span></div>\n    <div class=\"col-md-1\"></div>\n</div>\n<div class=\"row\">\n    <div [ngClass]=\"{ 'even-number-found': gameNumbers.indexOf(nbr) >= 0 && even(nbr), 'odd-number-found': gameNumbers.indexOf(nbr) >= 0 && !even(nbr)}\"\n        class=\"card col-md-1\" *ngFor=\"let nbr of twenty\"><span class=\"board-number\">{{nbr}}</span></div>\n    <div class=\"col-md-1\"></div>\n</div>\n<div class=\"row\">\n    <div [ngClass]=\"{ 'even-number-found': gameNumbers.indexOf(nbr) >= 0 && even(nbr), 'odd-number-found': gameNumbers.indexOf(nbr) >= 0 && !even(nbr)}\"\n        class=\"card col-md-1\" *ngFor=\"let nbr of thirty\"><span class=\"board-number\">{{nbr}}</span></div>\n    <div class=\"col-md-1\"></div>\n</div>\n<div class=\"row\">\n    <div [ngClass]=\"{ 'even-number-found': gameNumbers.indexOf(nbr) >= 0 && even(nbr), 'odd-number-found': gameNumbers.indexOf(nbr) >= 0 && !even(nbr)}\"\n        class=\"card col-md-1\" *ngFor=\"let nbr of forty\"><span class=\"board-number\">{{nbr}}</span></div>\n    <div class=\"col-md-1\"></div>\n</div>\n<div class=\"row\">\n    <p class=\"game-id\">Game: {{gameCount}} </p><span class=\"game-id\" *ngIf=\"showComplete\"> *Completed!* </span>\n</div>\n<div class=\"row\">\n    <div [ngClass]=\"{ 'even-number-found': gameNumbers.indexOf(nbr) >= 0 && even(nbr), 'odd-number-found': gameNumbers.indexOf(nbr) >= 0 && !even(nbr)}\"\n        class=\"card col-md-1\" *ngFor=\"let nbr of fifty\"><span class=\"board-number\">{{nbr}}</span></div>\n    <div class=\"col-md-1\"></div>\n</div>\n<div class=\"row\">\n    <div [ngClass]=\"{ 'even-number-found': gameNumbers.indexOf(nbr) >= 0 && even(nbr), 'odd-number-found': gameNumbers.indexOf(nbr) >= 0 && !even(nbr)}\"\n        class=\"card col-md-1\" *ngFor=\"let nbr of sixty\"><span class=\"board-number\">{{nbr}}</span></div>\n    <div class=\"col-md-1\"></div>\n</div>\n<div class=\"row\">\n    <div [ngClass]=\"{ 'even-number-found': gameNumbers.indexOf(nbr) >= 0 && even(nbr), 'odd-number-found': gameNumbers.indexOf(nbr) >= 0 && !even(nbr)}\"\n        class=\"card col-md-1\" *ngFor=\"let nbr of seventy\"><span class=\"board-number\">{{nbr}}</span></div>\n    <div class=\"col-md-1\"></div>\n</div>\n<div class=\"row\">\n    <div [ngClass]=\"{ 'even-number-found': gameNumbers.indexOf(nbr) >= 0 && even(nbr), 'odd-number-found': gameNumbers.indexOf(nbr) >= 0 && !even(nbr)}\"\n        class=\"card col-md-1\" *ngFor=\"let nbr of eighty\"><span class=\"board-number\">{{nbr}}</span></div>\n    <div class=\"col-md-1\"></div>\n</div>\n<div class=\"row\">\n    <div class=\"btn\" id=\"newGameBtn\" (click)=\"resetAndRun()\">New Game</div>\n</div>\n<div class=\"gifDiv\" [@openClose]=\"gifOpen ? 'open' : 'closed'\">\n    <img src={{provideGif()}} id=\"gif\">\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'keno-baby';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _keno_board_keno_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./keno-board/keno-board.component */ "./src/app/keno-board/keno-board.component.ts");






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _keno_board_keno_board_component__WEBPACK_IMPORTED_MODULE_5__["KenoBoardComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/keno-board/keno-board.component.css":
/*!*****************************************************!*\
  !*** ./src/app/keno-board/keno-board.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".board-number {\r\n    text-align: center;\r\n    line-height: 80px;\r\n    height: 80px;\r\n    font-size: x-large;\r\n}\r\n\r\n.even-number-found {\r\n    color: black;\r\n    -webkit-animation-name: foundEven;\r\n            animation-name: foundEven;\r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s;\r\n    background: pink;\r\n}\r\n\r\n@-webkit-keyframes foundEven {\r\n    0%   {background-color: pink;}\r\n    25%  {background-color: black;}\r\n    50%  {background-color: pink;}\r\n    100% {background-color: black;}\r\n  }\r\n\r\n@keyframes foundEven {\r\n    0%   {background-color: pink;}\r\n    25%  {background-color: black;}\r\n    50%  {background-color: pink;}\r\n    100% {background-color: black;}\r\n  }\r\n\r\n.odd-number-found {\r\n    color: black;\r\n    -webkit-animation-name: foundEven;\r\n            animation-name: foundEven;\r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s;\r\n    background: powderblue;\r\n}\r\n\r\n@-webkit-keyframes foundodd {\r\n    0%   {background-color: powderblue;}\r\n    25%  {background-color: black;}\r\n    50%  {background-color: powderblue;}\r\n    100% {background-color: black;}\r\n  }\r\n\r\n@keyframes foundodd {\r\n    0%   {background-color: powderblue;}\r\n    25%  {background-color: black;}\r\n    50%  {background-color: powderblue;}\r\n    100% {background-color: black;}\r\n  }\r\n\r\n#newGameBtn {\r\n    color: black;\r\n    background: orangered;\r\n}\r\n\r\n.gifDiv {\r\n     /* opacity: 1n; */\r\n    position:absolute;\r\n    left: 215px;\r\n    top: 180px;\r\n    display: inline;\r\n    /* animation: fade 7s linear; */\r\n}\r\n\r\n@-webkit-keyframes fade {\r\n  0%,100% { opacity: 0 }\r\n  50% { opacity: 1 }\r\n}\r\n\r\n@keyframes fade {\r\n  0%,100% { opacity: 0 }\r\n  50% { opacity: 1 }\r\n}\r\n\r\n#gif {\r\n     width: 360px;\r\n     height: 308px;      \r\n  }\r\n\r\n.game-id {\r\n      font-weight: bolder;\r\n      font-size: large;\r\n      margin: 0;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2Vuby1ib2FyZC9rZW5vLWJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUNBQXlCO1lBQXpCLHlCQUF5QjtJQUN6Qiw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLE1BQU0sc0JBQXNCLENBQUM7SUFDN0IsTUFBTSx1QkFBdUIsQ0FBQztJQUM5QixNQUFNLHNCQUFzQixDQUFDO0lBQzdCLE1BQU0sdUJBQXVCLENBQUM7RUFDaEM7O0FBTEY7SUFDSSxNQUFNLHNCQUFzQixDQUFDO0lBQzdCLE1BQU0sdUJBQXVCLENBQUM7SUFDOUIsTUFBTSxzQkFBc0IsQ0FBQztJQUM3QixNQUFNLHVCQUF1QixDQUFDO0VBQ2hDOztBQUVBO0lBQ0UsWUFBWTtJQUNaLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsOEJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxNQUFNLDRCQUE0QixDQUFDO0lBQ25DLE1BQU0sdUJBQXVCLENBQUM7SUFDOUIsTUFBTSw0QkFBNEIsQ0FBQztJQUNuQyxNQUFNLHVCQUF1QixDQUFDO0VBQ2hDOztBQUxGO0lBQ0ksTUFBTSw0QkFBNEIsQ0FBQztJQUNuQyxNQUFNLHVCQUF1QixDQUFDO0lBQzlCLE1BQU0sNEJBQTRCLENBQUM7SUFDbkMsTUFBTSx1QkFBdUIsQ0FBQztFQUNoQzs7QUFFRjtJQUNJLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBQ0M7S0FDSSxpQkFBaUI7SUFDbEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZUFBZTtJQUNmLCtCQUErQjtBQUNuQzs7QUFHQTtFQUNFLFVBQVUsV0FBVztFQUNyQixNQUFNLFdBQVc7QUFDbkI7O0FBSEE7RUFDRSxVQUFVLFdBQVc7RUFDckIsTUFBTSxXQUFXO0FBQ25COztBQUVFO0tBQ0csWUFBWTtLQUNaLGFBQWE7RUFDaEI7O0FBRUE7TUFDSSxtQkFBbUI7TUFDbkIsZ0JBQWdCO01BQ2hCLFNBQVM7RUFDYiIsImZpbGUiOiJzcmMvYXBwL2tlbm8tYm9hcmQva2Vuby1ib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvYXJkLW51bWJlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG5cclxuLmV2ZW4tbnVtYmVyLWZvdW5kIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBmb3VuZEV2ZW47XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgYmFja2dyb3VuZDogcGluaztcclxufVxyXG5cclxuQGtleWZyYW1lcyBmb3VuZEV2ZW4ge1xyXG4gICAgMCUgICB7YmFja2dyb3VuZC1jb2xvcjogcGluazt9XHJcbiAgICAyNSUgIHtiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazt9XHJcbiAgICA1MCUgIHtiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO31cclxuICAgIDEwMCUge2JhY2tncm91bmQtY29sb3I6IGJsYWNrO31cclxuICB9XHJcblxyXG4gIC5vZGQtbnVtYmVyLWZvdW5kIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBmb3VuZEV2ZW47XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgYmFja2dyb3VuZDogcG93ZGVyYmx1ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmb3VuZG9kZCB7XHJcbiAgICAwJSAgIHtiYWNrZ3JvdW5kLWNvbG9yOiBwb3dkZXJibHVlO31cclxuICAgIDI1JSAge2JhY2tncm91bmQtY29sb3I6IGJsYWNrO31cclxuICAgIDUwJSAge2JhY2tncm91bmQtY29sb3I6IHBvd2RlcmJsdWU7fVxyXG4gICAgMTAwJSB7YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7fVxyXG4gIH1cclxuXHJcbiNuZXdHYW1lQnRuIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQ6IG9yYW5nZXJlZDtcclxufVxyXG4gLmdpZkRpdiB7XHJcbiAgICAgLyogb3BhY2l0eTogMW47ICovXHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDIxNXB4O1xyXG4gICAgdG9wOiAxODBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIC8qIGFuaW1hdGlvbjogZmFkZSA3cyBsaW5lYXI7ICovXHJcbn1cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGUge1xyXG4gIDAlLDEwMCUgeyBvcGFjaXR5OiAwIH1cclxuICA1MCUgeyBvcGFjaXR5OiAxIH1cclxufVxyXG5cclxuICAjZ2lmIHtcclxuICAgICB3aWR0aDogMzYwcHg7XHJcbiAgICAgaGVpZ2h0OiAzMDhweDsgICAgICBcclxuICB9XHJcblxyXG4gIC5nYW1lLWlkIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/keno-board/keno-board.component.ts":
/*!****************************************************!*\
  !*** ./src/app/keno-board/keno-board.component.ts ***!
  \****************************************************/
/*! exports provided: KenoBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KenoBoardComponent", function() { return KenoBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _number_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../number-service.service */ "./src/app/number-service.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");




let KenoBoardComponent = class KenoBoardComponent {
    constructor(numberSvc) {
        this.numberSvc = numberSvc;
        this.gameNumbers = new Array(20);
        this.ten = new Array(10);
        this.twenty = new Array(10);
        this.thirty = new Array(10);
        this.forty = new Array(10);
        this.fifty = new Array(10);
        this.sixty = new Array(10);
        this.seventy = new Array(10);
        this.eighty = new Array(10);
        this.gifs = new Array(10);
        this.gifOpen = false;
        this.showComplete = false;
        this.i = 0;
        this.gameCount = 1;
        this.obs = {
            next(num) { console.log(num); setTimeout(function () { this.setNumber(num); }, 500); },
            error() { console.log("There was a problem in generating the numbers"); },
            complete() { console.log('Finished sequence'); setTimeout(() => this.resetAndRun(), 30000); }
        };
        this.runGame = (numbers) => {
            numbers = this.gameNumbers;
            var _this = this;
            this.numberSvc.getNumbers({
                next(num) { _this.toggleGif(); console.log(num); _this.currentNumber = num; setTimeout(function () { _this.setNumber(num); _this.toggleGif(); }, 5500); },
                error() { console.log("There was a problem in generating the numbers"); },
                complete() { console.log('Finished sequence'); _this.showComplete = true; }
            });
        };
        this.setNumber = (num) => {
            this.gameNumbers[this.i] = num;
            this.i++;
        };
        this.toggleGif = () => {
            // console.log("toggle Gif");
            this.gifOpen = !this.gifOpen;
        };
        this.resetAndRun = () => {
            this.gameNumbers = new Array(20);
            this.gameCount++;
            this.showComplete = false;
            this.runGame(this.gameNumbers);
        };
        for (var i = 0; i < 10; i++) {
            this.ten[i] = i + 1;
        }
        ;
        for (var i = 0; i < 10; i++) {
            this.twenty[i] = i + 11;
        }
        ;
        for (var i = 0; i < 10; i++) {
            this.thirty[i] = i + 21;
        }
        ;
        for (var i = 0; i < 10; i++) {
            this.forty[i] = i + 31;
        }
        ;
        for (var i = 0; i < 10; i++) {
            this.fifty[i] = i + 41;
        }
        ;
        for (var i = 0; i < 10; i++) {
            this.sixty[i] = i + 51;
        }
        ;
        for (var i = 0; i < 10; i++) {
            this.seventy[i] = i + 61;
        }
        ;
        for (var i = 0; i < 10; i++) {
            this.eighty[i] = i + 71;
        }
        ;
    }
    ngOnInit() {
        this.runGame(this.gameNumbers);
    }
    reload() {
        window.location.reload();
    }
    even(nbr) {
        return nbr % 2 === 0;
    }
    provideGif() {
        var nbr = this.currentNumber;
        var gif = "assets/images/black.png";
        if (nbr == 1 || nbr == 17 || nbr == 33 || nbr == 49 || nbr == 65) {
            gif = "assets/images/McBaby.gif";
        }
        if (nbr == 2 || nbr == 18 || nbr == 34 || nbr == 50 || nbr == 66) {
            gif = "assets/images/beer.gif";
        }
        if (nbr == 3 || nbr == 19 || nbr == 35 || nbr == 51 || nbr == 67) {
            gif = "assets/images/bunny_thief.gif";
        }
        if (nbr == 4 || nbr == 20 || nbr == 36 || nbr == 52 || nbr == 68) {
            gif = "assets/images/dance.gif";
        }
        if (nbr == 5 || nbr == 21 || nbr == 37 || nbr == 53 || nbr == 69) {
            gif = "assets/images/eff_you.gif";
        }
        if (nbr == 6 || nbr == 22 || nbr == 38 || nbr == 54 || nbr == 70) {
            gif = "assets/images/excited.gif";
        }
        if (nbr == 7 || nbr == 23 || nbr == 39 || nbr == 55 || nbr == 71) {
            gif = "assets/images/gnar.gif";
        }
        if (nbr == 8 || nbr == 24 || nbr == 40 || nbr == 56 || nbr == 72) {
            gif = "assets/images/myPrez.gif";
        }
        if (nbr == 9 || nbr == 25 || nbr == 41 || nbr == 57 || nbr == 73) {
            gif = "assets/images/phone.gif";
        }
        if (nbr == 10 || nbr == 26 || nbr == 42 || nbr == 58 || nbr == 74) {
            gif = "assets/images/puppy_rocker.gif";
        }
        if (nbr == 11 || nbr == 27 || nbr == 43 || nbr == 59 || nbr == 75) {
            gif = "assets/images/rage.gif";
        }
        if (nbr == 12 || nbr == 28 || nbr == 44 || nbr == 60 || nbr == 76) {
            gif = "assets/images/respect.gif";
        }
        if (nbr == 13 || nbr == 29 || nbr == 45 || nbr == 61 || nbr == 77) {
            gif = "assets/images/rock_on.gif";
        }
        if (nbr == 14 || nbr == 30 || nbr == 46 || nbr == 62 || nbr == 78) {
            gif = "assets/images/shocked.gif";
        }
        if (nbr == 15 || nbr == 31 || nbr == 47 || nbr == 63 || nbr == 79) {
            gif = "assets/images/ski.gif";
        }
        if (nbr == 16 || nbr == 32 || nbr == 48 || nbr == 64 || nbr == 80) {
            gif = "assets/images/spoon.gif";
        }
        return gif;
    }
};
KenoBoardComponent.ctorParameters = () => [
    { type: _number_service_service__WEBPACK_IMPORTED_MODULE_2__["NumberServiceService"] }
];
KenoBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-keno-board',
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('openClose', [
                // ...
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                    opacity: 1,
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('closed => open', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('1s')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('open => closed', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('1s')
                ]),
            ]),
        ],
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./keno-board.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/keno-board/keno-board.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./keno-board.component.css */ "./src/app/keno-board/keno-board.component.css")).default]
    })
], KenoBoardComponent);



/***/ }),

/***/ "./src/app/number-service.service.ts":
/*!*******************************************!*\
  !*** ./src/app/number-service.service.ts ***!
  \*******************************************/
/*! exports provided: NumberServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberServiceService", function() { return NumberServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NumberServiceService = class NumberServiceService {
    constructor() {
        this.numberArray = new Array(20);
        this.loadNumbers();
    }
    loadNumbers() {
        for (var i = 0; i < 20; i++) {
            let tempNbr = Math.floor(Math.random() * Math.floor(79)) + 1;
            while (this.numberArray.indexOf(tempNbr) > -1) {
                tempNbr = Math.floor(Math.random() * Math.floor(79)) + 1;
            }
            this.numberArray[i] = tempNbr;
        }
    }
    getNumbers(observer) {
        this.loadNumbers();
        let timeoutId;
        // Will run through an array of numbers, emitting one value
        // per second until it gets to the end of the array.
        function doSequence(arr, idx) {
            timeoutId = setTimeout(() => {
                observer.next(arr[idx]);
                if (idx === arr.length - 1) {
                    observer.complete();
                }
                else {
                    doSequence(arr, ++idx);
                }
            }, 10000);
        }
        doSequence(this.numberArray, 0);
        // Unsubscribe should clear the timeout to stop execution
        return { unsubscribe() {
                clearTimeout(timeoutId);
            } };
    }
};
NumberServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NumberServiceService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\users\cody kaltoft\projects\keno-baby\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map