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
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {
            href: "/view/".concat(item.id),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_ItemList_module_css__WEBPACK_IMPORTED_MODULE_3___default().wrap),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  src: item.image_link,
                  alt: item.name,
                  styles: (_ItemList_module_css__WEBPACK_IMPORTED_MODULE_3___default().img_item)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 14,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                  className: (_ItemList_module_css__WEBPACK_IMPORTED_MODULE_3___default().txt_info),
                  children: item.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 15,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  children: [item.category, " ", item.product_type]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 16,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
                  className: (_ItemList_module_css__WEBPACK_IMPORTED_MODULE_3___default().num_price),
                  children: ["$", item.price]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 19,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 13,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSXRlbUxpc3QuanMiXSwibmFtZXMiOlsiSXRlbUxpc3QiLCJsaXN0IiwibWFwIiwiaXRlbSIsImlkIiwic3R5bGVzIiwiaW1hZ2VfbGluayIsIm5hbWUiLCJpbWdfaXRlbSIsImNhdGVnb3J5IiwicHJvZHVjdF90eXBlIiwicHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsT0FBNEI7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDMUIsc0JBQ0UsOERBQUMsbURBQUQ7QUFBTSxXQUFPLEVBQUUsQ0FBZjtBQUFBLDJCQUNFLDhEQUFDLHVEQUFEO0FBQUEsZ0JBQ0dBLElBQUksQ0FBQ0MsR0FBTCxDQUFTLFVBQUNDLElBQUQ7QUFBQSw0QkFDUiw4REFBQywwREFBRDtBQUFBLGlDQUNFLDhEQUFDLElBQUQ7QUFBTSxnQkFBSSxrQkFBV0EsSUFBSSxDQUFDQyxFQUFoQixDQUFWO0FBQUEsbUNBQ0U7QUFBSyx1QkFBUyxFQUFFQyxrRUFBaEI7QUFBQSxxQ0FDRTtBQUFBLHdDQUNFO0FBQUsscUJBQUcsRUFBRUYsSUFBSSxDQUFDRyxVQUFmO0FBQTJCLHFCQUFHLEVBQUVILElBQUksQ0FBQ0ksSUFBckM7QUFBMkMsd0JBQU0sRUFBRUYsc0VBQWVHO0FBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFFRTtBQUFRLDJCQUFTLEVBQUVILHNFQUFuQjtBQUFBLDRCQUFxQ0YsSUFBSSxDQUFDSTtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGLGVBR0U7QUFBQSw2QkFDR0osSUFBSSxDQUFDTSxRQURSLE9BQ21CTixJQUFJLENBQUNPLFlBRHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFIRixlQU1FO0FBQVEsMkJBQVMsRUFBRUwsdUVBQW5CO0FBQUEsa0NBQXVDRixJQUFJLENBQUNRLEtBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFE7QUFBQSxPQUFUO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNCRDs7S0F2QlFYLFE7QUF5QlQsK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDUzMjllNWUxZDgzNDZkMTQzZTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JdGVtTGlzdC5tb2R1bGUuY3NzJztcclxuXHJcbmZ1bmN0aW9uIEl0ZW1MaXN0KHsgbGlzdCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIGNvbHVtbnM9ezN9PlxyXG4gICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAge2xpc3QubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICA8R3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Avdmlldy8ke2l0ZW0uaWR9YH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwfT5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZV9saW5rfSBhbHQ9e2l0ZW0ubmFtZX0gc3R5bGVzPXtzdHlsZXMuaW1nX2l0ZW19IC8+XHJcbiAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtzdHlsZXMudHh0X2luZm99PntpdGVtLm5hbWV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmNhdGVnb3J5fSB7aXRlbS5wcm9kdWN0X3R5cGV9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e3N0eWxlcy5udW1fcHJpY2V9PiR7aXRlbS5wcmljZX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9HcmlkLlJvdz5cclxuICAgIDwvR3JpZD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJdGVtTGlzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==