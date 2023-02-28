"use strict";
(() => {
var exports = {};
exports.id = 667;
exports.ids = [667];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 1072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const markSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    title: "String",
    description: "String",
    image: "String",
    url: "String",
    email: "String"
});
const BookMark = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.bookmarks || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("bookmarks", markSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookMark);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1072));
module.exports = __webpack_exports__;

})();