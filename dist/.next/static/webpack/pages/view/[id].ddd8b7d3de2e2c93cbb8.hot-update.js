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
        lineNumber: 9,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
        children: ["$", price]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
      color: "orange",
      children: "\uAD6C\uB9E4\uD558\uAE30"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSXRlbS5qcyJdLCJuYW1lcyI6WyJJdGVtIiwiaXRlbSIsImltYWdlX2xpbmsiLCJuYW1lIiwicHJpY2UiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxPQUF3QjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUFBLE1BQ2RDLFVBRGMsR0FDMkJELElBRDNCLENBQ2RDLFVBRGM7QUFBQSxNQUNGQyxJQURFLEdBQzJCRixJQUQzQixDQUNGRSxJQURFO0FBQUEsTUFDSUMsS0FESixHQUMyQkgsSUFEM0IsQ0FDSUcsS0FESjtBQUFBLE1BQ1dDLFdBRFgsR0FDMkJKLElBRDNCLENBQ1dJLFdBRFg7QUFFdEIsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBLDZCQUNFO0FBQUssV0FBRyxFQUFFSCxVQUFWO0FBQXNCLFdBQUcsRUFBRUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQUEsOEJBQ0U7QUFBQSxrQkFBU0E7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLHdCQUFVQyxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBUUUsOERBQUMscURBQUQ7QUFBUSxXQUFLLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGLGVBU0U7QUFBQSw2QkFDRTtBQUFBLGtCQUFJQztBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEY7QUFBQSxrQkFERjtBQWVEOztLQWpCUUwsSTtBQW1CVCwrREFBZUEsSUFBZjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZpZXcvW2lkXS5kZGQ4YjdkM2RlMmUyYzkzY2JiOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gSXRlbSh7IGl0ZW0gfSkge1xyXG4gIGNvbnN0IHsgaW1hZ2VfbGluaywgbmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uIH0gPSBpdGVtO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbWcgc3JjPXtpbWFnZV9saW5rfSBhbHQ9e25hbWV9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxzdHJvbmc+e25hbWV9PC9zdHJvbmc+XHJcbiAgICAgICAgPHN0cm9uZz4ke3ByaWNlfTwvc3Ryb25nPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEJ1dHRvbiBjb2xvcj1cIm9yYW5nZVwiPuq1rOunpO2VmOq4sDwvQnV0dG9uPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxwPntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbTtcclxuXHJcbi8qKlxyXG4gKiBhcGlfZmVhdHVyZWRfaW1hZ2U6IFwiLy9zMy5hbWF6b25hd3MuY29tL2Rvbm92YW5iYWlsZXkvcHJvZHVjdHMvYXBpX2ZlYXR1cmVkX2ltYWdlcy8wMDAvMDAwLzQ4OC9vcmlnaW5hbC9vcGVuLXVyaTIwMTcxMjIzLTQtZGVvODJjPzE1MTQwNjMzMjlcIlxyXG5icmFuZDogXCJtYXliZWxsaW5lXCJcclxuY2F0ZWdvcnk6IG51bGxcclxuY3JlYXRlZF9hdDogXCIyMDE2LTEwLTAxVDE4OjM2OjA1LjU4NFpcIlxyXG5jdXJyZW5jeTogbnVsbFxyXG5kZXNjcmlwdGlvbjogXCJXaHkgWW91J2xsIExvdmUgSXTihrXihrVMaWdodHdlaWdodCBwaWdtZW50cyBibGVuZCBlYXNpbHkgYW5kIHdlYXIgZXZlbmx54oa1UHJvdmlkZXMgYSBuYXR1cmFsLCBmYWRlLXByb29mIGJyb256ZWQgY29sb3IgdGhhdCBsZWF2ZXMgc2tpbiB0aGUgd2F5IGl0IHdhcyBtZWFudCB0byBiZS4uLmZyZXNoLCBicmVhdGhpbmcgYW5kIG5hdHVyYWzihrXihrVGb3IgQmVzdCBSZXN1bHRzOiBGb3Igc29mdCwgbmF0dXJhbCBsb29rLCBicnVzaCBhbG9uZyBjaGVla2JvbmUsIHN3ZWVwaW5nIHVwd2FyZC5cIlxyXG5pZDogNDg4XHJcbmltYWdlX2xpbms6IFwiaHR0cHM6Ly9kM3QzMmhzbmp4bzdxNi5jbG91ZGZyb250Lm5ldC9pL2Q0ZjdkODJiNDg1OGM2MjJiYjNjMWNlZjA3YjlkODUwX3JhLHcxNTgsaDE4NF9wYSx3MTU4LGgxODQucG5nXCJcclxubmFtZTogXCJNYXliZWxsaW5lIEZpdCBNZSBCcm9uemVyXCJcclxucHJpY2U6IFwiMTAuMjlcIlxyXG5wcmljZV9zaWduOiBudWxsXHJcbnByb2R1Y3RfYXBpX3VybDogXCJodHRwOi8vbWFrZXVwLWFwaS5oZXJva3VhcHAuY29tL2FwaS92MS9wcm9kdWN0cy80ODguanNvblwiXHJcbnByb2R1Y3RfY29sb3JzOiBbe+KApn1dXHJcbnByb2R1Y3RfbGluazogXCJodHRwczovL3dlbGwuY2EvcHJvZHVjdHMvbWF5YmVsbGluZS1maXQtbWUtYnJvbnplcl8zMTI2NS5odG1sXCJcclxucHJvZHVjdF90eXBlOiBcImJyb256ZXJcIlxyXG5yYXRpbmc6IDQuNVxyXG50YWdfbGlzdDogW11cclxudXBkYXRlZF9hdDogXCIyMDE3LTEyLTIzVDIxOjA4OjQ5Ljk4NVpcIlxyXG53ZWJzaXRlX2xpbms6IFwiaHR0cHM6Ly93ZWxsLmNhXCJcclxuX19wcm90b19fOiBPYmplY3RcclxuICovXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=