self["webpackHotUpdate_N_E"]("pages/view/[id]",{

/***/ "./src/components/Item.js":
/*!********************************!*\
  !*** ./src/components/Item.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\BAEK\\Documents\\portfolio\\WebPractice\\typescript-study\\nextjs-tutorial\\src\\components\\Item.js";



function Item(_ref) {
  var item = _ref.item;
  var image_link = item.image_link,
      name = item.name,
      price = item.price,
      description = item.description;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: image_link,
        alt: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
        children: ["$", price]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
      color: "orange",
      children: "\uAD6C\uB9E4\uD558\uAE30"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_c = Item;
/* harmony default export */ __webpack_exports__["default"] = (Item);
/**
 * api_featured_image: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/488/original/open-uri20171223-4-deo82c?1514063329"
brand: "maybelline"
category: null
created_at: "2016-10-01T18:36:05.584Z"
currency: null
description: "Why You'll Love It↵↵Lightweight pigments blend easily and wear evenly↵Provides a natural, fade-proof bronzed color that leaves skin the way it was meant to be...fresh, breathing and natural↵↵For Best Results: For soft, natural look, brush along cheekbone, sweeping upward."
id: 488
image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/d4f7d82b4858c622bb3c1cef07b9d850_ra,w158,h184_pa,w158,h184.png"
name: "Maybelline Fit Me Bronzer"
price: "10.29"
price_sign: null
product_api_url: "http://makeup-api.herokuapp.com/api/v1/products/488.json"
product_colors: [{…}]
product_link: "https://well.ca/products/maybelline-fit-me-bronzer_31265.html"
product_type: "bronzer"
rating: 4.5
tag_list: []
updated_at: "2017-12-23T21:08:49.985Z"
website_link: "https://well.ca"
__proto__: Object
 */

var _c;

$RefreshReg$(_c, "Item");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSXRlbS5qcyJdLCJuYW1lcyI6WyJJdGVtIiwiaXRlbSIsImltYWdlX2xpbmsiLCJuYW1lIiwicHJpY2UiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxPQUF3QjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUFBLE1BQ2RDLFVBRGMsR0FDMkJELElBRDNCLENBQ2RDLFVBRGM7QUFBQSxNQUNGQyxJQURFLEdBQzJCRixJQUQzQixDQUNGRSxJQURFO0FBQUEsTUFDSUMsS0FESixHQUMyQkgsSUFEM0IsQ0FDSUcsS0FESjtBQUFBLE1BQ1dDLFdBRFgsR0FDMkJKLElBRDNCLENBQ1dJLFdBRFg7QUFHdEIsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBLDZCQUNFO0FBQUssV0FBRyxFQUFFSCxVQUFWO0FBQXNCLFdBQUcsRUFBRUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQUEsOEJBQ0U7QUFBQSxrQkFBU0E7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLHdCQUFVQyxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBUUUsOERBQUMscURBQUQ7QUFBUSxXQUFLLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGLGVBU0U7QUFBQSw2QkFDRTtBQUFBLGtCQUFJQztBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEY7QUFBQSxrQkFERjtBQWVEOztLQWxCUUwsSTtBQW9CVCwrREFBZUEsSUFBZjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZpZXcvW2lkXS45NjI1OGM1ZWYxNjg3Mzk1YTJiMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gSXRlbSh7IGl0ZW0gfSkge1xyXG4gIGNvbnN0IHsgaW1hZ2VfbGluaywgbmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uIH0gPSBpdGVtO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aW1nIHNyYz17aW1hZ2VfbGlua30gYWx0PXtuYW1lfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8c3Ryb25nPntuYW1lfTwvc3Ryb25nPlxyXG4gICAgICAgIDxzdHJvbmc+JHtwcmljZX08L3N0cm9uZz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxCdXR0b24gY29sb3I9XCJvcmFuZ2VcIj7qtazrp6TtlZjquLA8L0J1dHRvbj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW07XHJcblxyXG4vKipcclxuICogYXBpX2ZlYXR1cmVkX2ltYWdlOiBcIi8vczMuYW1hem9uYXdzLmNvbS9kb25vdmFuYmFpbGV5L3Byb2R1Y3RzL2FwaV9mZWF0dXJlZF9pbWFnZXMvMDAwLzAwMC80ODgvb3JpZ2luYWwvb3Blbi11cmkyMDE3MTIyMy00LWRlbzgyYz8xNTE0MDYzMzI5XCJcclxuYnJhbmQ6IFwibWF5YmVsbGluZVwiXHJcbmNhdGVnb3J5OiBudWxsXHJcbmNyZWF0ZWRfYXQ6IFwiMjAxNi0xMC0wMVQxODozNjowNS41ODRaXCJcclxuY3VycmVuY3k6IG51bGxcclxuZGVzY3JpcHRpb246IFwiV2h5IFlvdSdsbCBMb3ZlIEl04oa14oa1TGlnaHR3ZWlnaHQgcGlnbWVudHMgYmxlbmQgZWFzaWx5IGFuZCB3ZWFyIGV2ZW5seeKGtVByb3ZpZGVzIGEgbmF0dXJhbCwgZmFkZS1wcm9vZiBicm9uemVkIGNvbG9yIHRoYXQgbGVhdmVzIHNraW4gdGhlIHdheSBpdCB3YXMgbWVhbnQgdG8gYmUuLi5mcmVzaCwgYnJlYXRoaW5nIGFuZCBuYXR1cmFs4oa14oa1Rm9yIEJlc3QgUmVzdWx0czogRm9yIHNvZnQsIG5hdHVyYWwgbG9vaywgYnJ1c2ggYWxvbmcgY2hlZWtib25lLCBzd2VlcGluZyB1cHdhcmQuXCJcclxuaWQ6IDQ4OFxyXG5pbWFnZV9saW5rOiBcImh0dHBzOi8vZDN0MzJoc25qeG83cTYuY2xvdWRmcm9udC5uZXQvaS9kNGY3ZDgyYjQ4NThjNjIyYmIzYzFjZWYwN2I5ZDg1MF9yYSx3MTU4LGgxODRfcGEsdzE1OCxoMTg0LnBuZ1wiXHJcbm5hbWU6IFwiTWF5YmVsbGluZSBGaXQgTWUgQnJvbnplclwiXHJcbnByaWNlOiBcIjEwLjI5XCJcclxucHJpY2Vfc2lnbjogbnVsbFxyXG5wcm9kdWN0X2FwaV91cmw6IFwiaHR0cDovL21ha2V1cC1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvdjEvcHJvZHVjdHMvNDg4Lmpzb25cIlxyXG5wcm9kdWN0X2NvbG9yczogW3vigKZ9XVxyXG5wcm9kdWN0X2xpbms6IFwiaHR0cHM6Ly93ZWxsLmNhL3Byb2R1Y3RzL21heWJlbGxpbmUtZml0LW1lLWJyb256ZXJfMzEyNjUuaHRtbFwiXHJcbnByb2R1Y3RfdHlwZTogXCJicm9uemVyXCJcclxucmF0aW5nOiA0LjVcclxudGFnX2xpc3Q6IFtdXHJcbnVwZGF0ZWRfYXQ6IFwiMjAxNy0xMi0yM1QyMTowODo0OS45ODVaXCJcclxud2Vic2l0ZV9saW5rOiBcImh0dHBzOi8vd2VsbC5jYVwiXHJcbl9fcHJvdG9fXzogT2JqZWN0XHJcbiAqL1xyXG4iXSwic291cmNlUm9vdCI6IiJ9