"use strict";
(() => {
var exports = {};
exports.id = 202;
exports.ids = [202,667];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 6540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _model_Schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1072);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);


async function handler(req, res) {
    mongoose__WEBPACK_IMPORTED_MODULE_1___default().set("strictQuery", true);
    mongoose__WEBPACK_IMPORTED_MODULE_1___default().connect(process.env.DB_URL).then(()=>{
        console.log("Database Connected");
    });
    if (req.method === "POST") {
        const { email  } = req.body;
        _model_Schema__WEBPACK_IMPORTED_MODULE_0__["default"].find({
            email: email
        }, async (err, result)=>{
            res.status(200).json(result);
        });
    } else {
        res.status(500).json({
            message: "Invalid request"
        });
    }
}


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
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6540));
module.exports = __webpack_exports__;

})();