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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ItemList_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ItemList.module.css */ "./src/components/ItemList.module.css");
/* harmony import */ var _ItemList_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ItemList_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\BAEK\\Documents\\portfolio\\WebPractice\\typescript-study\\nextjs-tutorial\\src\\components\\ItemList.js";





function ItemList(_ref) {
  var _this = this;

  var list = _ref.list;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid, {
    columns: 3,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Row, {
      children: list.map(function (item) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Column, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/view/".concat(item.id),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: (_ItemList_module_css__WEBPACK_IMPORTED_MODULE_4___default().wrap),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  src: item.image_link,
                  alt: item.name,
                  styles: (_ItemList_module_css__WEBPACK_IMPORTED_MODULE_4___default().img_item)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 15,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                  className: (_ItemList_module_css__WEBPACK_IMPORTED_MODULE_4___default().txt_info),
                  children: item.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 16,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  children: [item.category, " ", item.product_type]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 17,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                  className: (_ItemList_module_css__WEBPACK_IMPORTED_MODULE_4___default().num_price),
                  children: ["$", item.price]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 20,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSXRlbUxpc3QuanMiXSwibmFtZXMiOlsiSXRlbUxpc3QiLCJsaXN0IiwibWFwIiwiaXRlbSIsImlkIiwic3R5bGVzIiwiaW1hZ2VfbGluayIsIm5hbWUiLCJpbWdfaXRlbSIsImNhdGVnb3J5IiwicHJvZHVjdF90eXBlIiwicHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULE9BQTRCO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQzFCLHNCQUNFLDhEQUFDLG1EQUFEO0FBQU0sV0FBTyxFQUFFLENBQWY7QUFBQSwyQkFDRSw4REFBQyx1REFBRDtBQUFBLGdCQUNHQSxJQUFJLENBQUNDLEdBQUwsQ0FBUyxVQUFDQyxJQUFEO0FBQUEsNEJBQ1IsOERBQUMsMERBQUQ7QUFBQSxpQ0FDRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLGtCQUFXQSxJQUFJLENBQUNDLEVBQWhCLENBQVY7QUFBQSxtQ0FDRTtBQUFBLHFDQUNFO0FBQUsseUJBQVMsRUFBRUMsa0VBQWhCO0FBQUEsd0NBQ0U7QUFBSyxxQkFBRyxFQUFFRixJQUFJLENBQUNHLFVBQWY7QUFBMkIscUJBQUcsRUFBRUgsSUFBSSxDQUFDSSxJQUFyQztBQUEyQyx3QkFBTSxFQUFFRixzRUFBZUc7QUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUVFO0FBQVEsMkJBQVMsRUFBRUgsc0VBQW5CO0FBQUEsNEJBQXFDRixJQUFJLENBQUNJO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkYsZUFHRTtBQUFBLDZCQUNHSixJQUFJLENBQUNNLFFBRFIsT0FDbUJOLElBQUksQ0FBQ08sWUFEeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhGLGVBTUU7QUFBUSwyQkFBUyxFQUFFTCx1RUFBbkI7QUFBQSxrQ0FBdUNGLElBQUksQ0FBQ1EsS0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUTtBQUFBLE9BQVQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0JEOztLQXZCUVgsUTtBQXlCVCwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zYmIzYzNkMjRhZDBjNmFjOGYxNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0l0ZW1MaXN0Lm1vZHVsZS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gSXRlbUxpc3QoeyBsaXN0IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWQgY29sdW1ucz17M30+XHJcbiAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICB7bGlzdC5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgIDxHcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC92aWV3LyR7aXRlbS5pZH1gfT5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcH0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlX2xpbmt9IGFsdD17aXRlbS5uYW1lfSBzdHlsZXM9e3N0eWxlcy5pbWdfaXRlbX0gLz5cclxuICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e3N0eWxlcy50eHRfaW5mb30+e2l0ZW0ubmFtZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uY2F0ZWdvcnl9IHtpdGVtLnByb2R1Y3RfdHlwZX1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17c3R5bGVzLm51bV9wcmljZX0+JHtpdGVtLnByaWNlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0dyaWQuUm93PlxyXG4gICAgPC9HcmlkPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW1MaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9