self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ItemList.js":
/*!************************************!*\
  !*** ./src/components/ItemList.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ItemList_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ItemList.module.css */ "./src/components/ItemList.module.css");
/* harmony import */ var _ItemList_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ItemList_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\BAEK\\Documents\\portfolio\\WebPractice\\typescript-study\\nextjs-tutorial\\src\\components\\ItemList.js";




function ItemList(_ref) {
  var _this = this;

  var list = _ref.list;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {
    columns: 3,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Row, {
      children: list.map(function (item) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_ItemList_module_css__WEBPACK_IMPORTED_MODULE_3___default().wrap),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: item.image_link,
                alt: item.name,
                styles: (_ItemList_module_css__WEBPACK_IMPORTED_MODULE_3___default().img_item)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 13,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                className: (_ItemList_module_css__WEBPACK_IMPORTED_MODULE_3___default().txt_info),
                children: item.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: [item.category, " ", item.product_type]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                className: (_ItemList_module_css__WEBPACK_IMPORTED_MODULE_3___default().num_price),
                children: ["$", item.price]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
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

_c = ItemList;
/* harmony default export */ __webpack_exports__["default"] = (ItemList);

var _c;

$RefreshReg$(_c, "ItemList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSXRlbUxpc3QuanMiXSwibmFtZXMiOlsiSXRlbUxpc3QiLCJsaXN0IiwibWFwIiwiaXRlbSIsInN0eWxlcyIsImltYWdlX2xpbmsiLCJuYW1lIiwiaW1nX2l0ZW0iLCJjYXRlZ29yeSIsInByb2R1Y3RfdHlwZSIsInByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULE9BQTRCO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQzFCLHNCQUNFLDhEQUFDLG1EQUFEO0FBQU0sV0FBTyxFQUFFLENBQWY7QUFBQSwyQkFDRSw4REFBQyx1REFBRDtBQUFBLGdCQUNHQSxJQUFJLENBQUNDLEdBQUwsQ0FBUyxVQUFDQyxJQUFEO0FBQUEsNEJBQ1IsOERBQUMsMERBQUQ7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUVDLGtFQUFoQjtBQUFBLG1DQUNFO0FBQUEsc0NBQ0U7QUFBSyxtQkFBRyxFQUFFRCxJQUFJLENBQUNFLFVBQWY7QUFBMkIsbUJBQUcsRUFBRUYsSUFBSSxDQUFDRyxJQUFyQztBQUEyQyxzQkFBTSxFQUFFRixzRUFBZUc7QUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQVEseUJBQVMsRUFBRUgsc0VBQW5CO0FBQUEsMEJBQXFDRCxJQUFJLENBQUNHO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkYsZUFHRTtBQUFBLDJCQUNHSCxJQUFJLENBQUNLLFFBRFIsT0FDbUJMLElBQUksQ0FBQ00sWUFEeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhGLGVBTUU7QUFBUSx5QkFBUyxFQUFFTCx1RUFBbkI7QUFBQSxnQ0FBdUNELElBQUksQ0FBQ08sS0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURRO0FBQUEsT0FBVDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvQkQ7O0tBckJRVixRO0FBdUJULCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdmNjQyZTM4NDAzNTEzMzBlMWUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSXRlbUxpc3QubW9kdWxlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBJdGVtTGlzdCh7IGxpc3QgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZCBjb2x1bW5zPXszfT5cclxuICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgIHtsaXN0Lm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXB9PlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1hZ2VfbGlua30gYWx0PXtpdGVtLm5hbWV9IHN0eWxlcz17c3R5bGVzLmltZ19pdGVtfSAvPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e3N0eWxlcy50eHRfaW5mb30+e2l0ZW0ubmFtZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5jYXRlZ29yeX0ge2l0ZW0ucHJvZHVjdF90eXBlfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e3N0eWxlcy5udW1fcHJpY2V9PiR7aXRlbS5wcmljZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9HcmlkLlJvdz5cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJdGVtTGlzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==