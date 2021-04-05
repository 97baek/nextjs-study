(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _src_components_Top__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Top */ "./src/components/Top.js");

var _jsxFileName = "C:\\Users\\BAEK\\Documents\\portfolio\\WebPractice\\typescript-study\\nextjs-tutorial\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: {
      width: 1000,
      margin: '0 auto'
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Top__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Footer__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);
/**
 * 페이지 전환 시 레이아웃을 유지할 수 있음
 * 페이지 전환 시 상태값을 유지할 수 있음
 * componentDidCatch를 이용해서 커스텀 에러 핸들링을 할 수 있음
 * 추가적인 데이터를 페이지로 주입시켜줄 수 있음
 * 글로벌 CSS 선언
 */
// props로 넘어온 Component는 현재 페이지 의미. 페이지 변환 시 변경됨
// pageProps는 data fetching method를 통해 미리 가져온 초기 객체. 이 메서드를 사용하지 않으면 빈 객체가 넘어옴

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\BAEK\\Documents\\portfolio\\WebPractice\\typescript-study\\nextjs-tutorial\\src\\components\\Footer.js";


function Footer() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 40,
      padding: '40px 0',
      borderTop: '1px solid #999'
    },
    children: "Copyright \xA9 97baek. All rights reserved."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Gnb.js":
/*!*******************************!*\
  !*** ./src/components/Gnb.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\BAEK\\Documents\\portfolio\\WebPractice\\typescript-study\\nextjs-tutorial\\src\\components\\Gnb.js";



function Gnb() {
  const activeItem = 'home';
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu, {
    inverted: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
      name: "home",
      active: activeItem === 'home' //   onClick={this.handleItemClick}

    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
      name: "messages",
      active: activeItem === 'messages' //   onClick={this.handleItemClick}

    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
      name: "friends",
      active: activeItem === 'friends' //   onClick={this.handleItemClick}

    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Gnb);

/***/ }),

/***/ "./src/components/Top.js":
/*!*******************************!*\
  !*** ./src/components/Top.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Gnb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Gnb */ "./src/components/Gnb.js");

var _jsxFileName = "C:\\Users\\BAEK\\Documents\\portfolio\\WebPractice\\typescript-study\\nextjs-tutorial\\src\\components\\Top.js";




function Top() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: {
      display: 'flex',
      paddingTop: 20
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        flex: 1
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/img/IMG_7777.jpg",
        alt: "logo",
        style: {
          display: 'block',
          width: 80
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Header, {
        as: "h1",
        children: "\uBC31\uC0C1\uD754"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Gnb__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Top);

/***/ }),

/***/ "./node_modules/semantic-ui-css/semantic.min.css":
/*!*******************************************************!*\
  !*** ./node_modules/semantic-ui-css/semantic.min.css ***!
  \*******************************************************/
/***/ (function() {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtdHV0b3JpYWwvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL25leHRqcy10dXRvcmlhbC8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9uZXh0anMtdHV0b3JpYWwvLi9zcmMvY29tcG9uZW50cy9HbmIuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLXR1dG9yaWFsLy4vc3JjL2NvbXBvbmVudHMvVG9wLmpzIiwid2VicGFjazovL25leHRqcy10dXRvcmlhbC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLXR1dG9yaWFsL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLXR1dG9yaWFsL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIndpZHRoIiwibWFyZ2luIiwiRm9vdGVyIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luVG9wIiwicGFkZGluZyIsImJvcmRlclRvcCIsIkduYiIsImFjdGl2ZUl0ZW0iLCJUb3AiLCJwYWRkaW5nVG9wIiwiZmxleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxzQkFDRTtBQUFLLFNBQUssRUFBRTtBQUFFQyxXQUFLLEVBQUUsSUFBVDtBQUFlQyxZQUFNLEVBQUU7QUFBdkIsS0FBWjtBQUFBLDRCQUNFLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLFNBQUQsb0JBQWVGLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0UsOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0Q7O0FBRUQsK0RBQWVGLEtBQWY7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsOEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTs7QUFFQSxTQUFTSyxNQUFULEdBQWtCO0FBQ2hCLHNCQUNFO0FBQ0UsU0FBSyxFQUFFO0FBQ0xDLGFBQU8sRUFBRSxNQURKO0FBRUxDLG9CQUFjLEVBQUUsUUFGWDtBQUdMQyxlQUFTLEVBQUUsRUFITjtBQUlMQyxhQUFPLEVBQUUsUUFKSjtBQUtMQyxlQUFTLEVBQUU7QUFMTixLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFhRDs7QUFFRCwrREFBZUwsTUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBOztBQUVBLFNBQVNNLEdBQVQsR0FBZTtBQUNiLFFBQU1DLFVBQVUsR0FBRyxNQUFuQjtBQUVBLHNCQUNFLDhEQUFDLG1EQUFEO0FBQU0sWUFBUSxNQUFkO0FBQUEsNEJBQ0UsOERBQUMsd0RBQUQ7QUFDRSxVQUFJLEVBQUMsTUFEUDtBQUVFLFlBQU0sRUFBRUEsVUFBVSxLQUFLLE1BRnpCLENBR0U7O0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUUsOERBQUMsd0RBQUQ7QUFDRSxVQUFJLEVBQUMsVUFEUDtBQUVFLFlBQU0sRUFBRUEsVUFBVSxLQUFLLFVBRnpCLENBR0U7O0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBV0UsOERBQUMsd0RBQUQ7QUFDRSxVQUFJLEVBQUMsU0FEUDtBQUVFLFlBQU0sRUFBRUEsVUFBVSxLQUFLLFNBRnpCLENBR0U7O0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUJEOztBQUVELCtEQUFlRCxHQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0UsR0FBVCxHQUFlO0FBQ2Isc0JBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRVAsYUFBTyxFQUFFLE1BQVg7QUFBbUJRLGdCQUFVLEVBQUU7QUFBL0IsS0FBWjtBQUFBLDJCQUNFO0FBQUssV0FBSyxFQUFFO0FBQUVDLFlBQUksRUFBRTtBQUFSLE9BQVo7QUFBQSw4QkFDRTtBQUFLLFdBQUcsRUFBQyxtQkFBVDtBQUE2QixXQUFHLEVBQUMsTUFBakM7QUFBd0MsYUFBSyxFQUFFO0FBQUVULGlCQUFPLEVBQUUsT0FBWDtBQUFvQkgsZUFBSyxFQUFFO0FBQTNCO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLHFEQUFEO0FBQVEsVUFBRSxFQUFDLElBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFLDhEQUFDLHlDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRDs7QUFFRCwrREFBZVUsR0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCBUb3AgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvVG9wJztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyB3aWR0aDogMTAwMCwgbWFyZ2luOiAnMCBhdXRvJyB9fT5cbiAgICAgIDxUb3AgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG5cbi8qKlxuICog7Y6Y7J207KeAIOyghO2ZmCDsi5wg66CI7J207JWE7JuD7J2EIOycoOyngO2VoCDsiJgg7J6I7J2MXG4gKiDtjpjsnbTsp4Ag7KCE7ZmYIOyLnCDsg4Htg5zqsJLsnYQg7Jyg7KeA7ZWgIOyImCDsnojsnYxcbiAqIGNvbXBvbmVudERpZENhdGNo66W8IOydtOyaqe2VtOyEnCDsu6TsiqTthYAg7JeQ65+sIO2VuOuTpOungeydhCDtlaAg7IiYIOyeiOydjFxuICog7LaU6rCA7KCB7J24IOuNsOydtO2EsOulvCDtjpjsnbTsp4DroZwg7KO87J6F7Iuc7Lyc7KSEIOyImCDsnojsnYxcbiAqIOq4gOuhnOuyjCBDU1Mg7ISg7Ja4XG4gKi9cblxuLy8gcHJvcHProZwg64SY7Ja07JioIENvbXBvbmVudOuKlCDtmITsnqwg7Y6Y7J207KeAIOydmOuvuC4g7Y6Y7J207KeAIOuzgO2ZmCDsi5wg67OA6rK965CoXG4vLyBwYWdlUHJvcHPripQgZGF0YSBmZXRjaGluZyBtZXRob2Trpbwg7Ya17ZW0IOuvuOumrCDqsIDsoLjsmKgg7LSI6riwIOqwneyytC4g7J20IOuplOyEnOuTnOulvCDsgqzsmqntlZjsp4Ag7JWK7Jy866m0IOu5iCDqsJ3ssrTqsIAg64SY7Ja07Ji0XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICBtYXJnaW5Ub3A6IDQwLFxyXG4gICAgICAgIHBhZGRpbmc6ICc0MHB4IDAnLFxyXG4gICAgICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCAjOTk5JyxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgQ29weXJpZ2h0ICZjb3B5OyA5N2JhZWsuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBHbmIoKSB7XHJcbiAgY29uc3QgYWN0aXZlSXRlbSA9ICdob21lJztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNZW51IGludmVydGVkPlxyXG4gICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgbmFtZT1cImhvbWVcIlxyXG4gICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ2hvbWUnfVxyXG4gICAgICAgIC8vICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICBuYW1lPVwibWVzc2FnZXNcIlxyXG4gICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ21lc3NhZ2VzJ31cclxuICAgICAgICAvLyAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSXRlbUNsaWNrfVxyXG4gICAgICAvPlxyXG4gICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgbmFtZT1cImZyaWVuZHNcIlxyXG4gICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbSA9PT0gJ2ZyaWVuZHMnfVxyXG4gICAgICAgIC8vICAgb25DbGljaz17dGhpcy5oYW5kbGVJdGVtQ2xpY2t9XHJcbiAgICAgIC8+XHJcbiAgICA8L01lbnU+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR25iO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBHbmIgZnJvbSAnLi9HbmInO1xyXG5cclxuZnVuY3Rpb24gVG9wKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgcGFkZGluZ1RvcDogMjAgfX0+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMSB9fT5cclxuICAgICAgICA8aW1nIHNyYz1cIi9pbWcvSU1HXzc3NzcuanBnXCIgYWx0PVwibG9nb1wiIHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIHdpZHRoOiA4MCB9fSAvPlxyXG4gICAgICAgIDxIZWFkZXIgYXM9XCJoMVwiPuuwseyDge2dlDwvSGVhZGVyPlxyXG4gICAgICAgIDxHbmIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3A7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9