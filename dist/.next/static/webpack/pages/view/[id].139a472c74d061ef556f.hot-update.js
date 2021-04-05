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
  var name = item.name,
      image_link = item.image_link,
      price = item.price,
      description = item.description,
      updated_at = item.updated_at,
      category = item.category,
      product_type = item.product_type,
      product_link = item.product_link;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: styles.wrap,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: styles.img_item,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: image_link,
          alt: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: styles.info_item,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          className: styles.tit_item,
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          className: styles.num_price,
          children: ["$", price]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: styles.txt_info,
          children: [category ? "".concat(category, "/") : '', product_type]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
          color: "orange",
          children: "\uAD6C\uB9E4\uD558\uAE30"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {
      as: "h3",
      children: "Description"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      style: {
        paddingBottom: 20,
        fontSize: 18
      },
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSXRlbS5qcyJdLCJuYW1lcyI6WyJJdGVtIiwiaXRlbSIsIm5hbWUiLCJpbWFnZV9saW5rIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsInVwZGF0ZWRfYXQiLCJjYXRlZ29yeSIsInByb2R1Y3RfdHlwZSIsInByb2R1Y3RfbGluayIsInN0eWxlcyIsIndyYXAiLCJpbWdfaXRlbSIsImluZm9faXRlbSIsInRpdF9pdGVtIiwibnVtX3ByaWNlIiwidHh0X2luZm8iLCJwYWRkaW5nQm90dG9tIiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsT0FBd0I7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFBQSxNQUVwQkMsSUFGb0IsR0FVbEJELElBVmtCLENBRXBCQyxJQUZvQjtBQUFBLE1BR3BCQyxVQUhvQixHQVVsQkYsSUFWa0IsQ0FHcEJFLFVBSG9CO0FBQUEsTUFJcEJDLEtBSm9CLEdBVWxCSCxJQVZrQixDQUlwQkcsS0FKb0I7QUFBQSxNQUtwQkMsV0FMb0IsR0FVbEJKLElBVmtCLENBS3BCSSxXQUxvQjtBQUFBLE1BTXBCQyxVQU5vQixHQVVsQkwsSUFWa0IsQ0FNcEJLLFVBTm9CO0FBQUEsTUFPcEJDLFFBUG9CLEdBVWxCTixJQVZrQixDQU9wQk0sUUFQb0I7QUFBQSxNQVFwQkMsWUFSb0IsR0FVbEJQLElBVmtCLENBUXBCTyxZQVJvQjtBQUFBLE1BU3BCQyxZQVRvQixHQVVsQlIsSUFWa0IsQ0FTcEJRLFlBVG9CO0FBV3RCLHNCQUNFO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVDLE1BQU0sQ0FBQ0MsSUFBdkI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVELE1BQU0sQ0FBQ0UsUUFBdkI7QUFBQSwrQkFDRTtBQUFLLGFBQUcsRUFBRVQsVUFBVjtBQUFzQixhQUFHLEVBQUVEO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFLLGlCQUFTLEVBQUVRLE1BQU0sQ0FBQ0csU0FBdkI7QUFBQSxnQ0FDRTtBQUFRLG1CQUFTLEVBQUVILE1BQU0sQ0FBQ0ksUUFBMUI7QUFBQSxvQkFBcUNaO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFRLG1CQUFTLEVBQUVRLE1BQU0sQ0FBQ0ssU0FBMUI7QUFBQSwwQkFBdUNYLEtBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUdFO0FBQU0sbUJBQVMsRUFBRU0sTUFBTSxDQUFDTSxRQUF4QjtBQUFBLHFCQUNHVCxRQUFRLGFBQU1BLFFBQU4sU0FBb0IsRUFEL0IsRUFFR0MsWUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEYsZUFPRSw4REFBQyxxREFBRDtBQUFRLGVBQUssRUFBQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBZUUsOERBQUMsTUFBRDtBQUFRLFFBQUUsRUFBQyxJQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZkYsZUFnQkU7QUFBRyxXQUFLLEVBQUU7QUFBRVMscUJBQWEsRUFBRSxFQUFqQjtBQUFxQkMsZ0JBQVEsRUFBRTtBQUEvQixPQUFWO0FBQUEsZ0JBQWdEYjtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJGO0FBQUEsa0JBREY7QUFvQkQ7O0tBL0JRTCxJO0FBaUNULCtEQUFlQSxJQUFmO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmlldy9baWRdLjEzOWE0NzJjNzRkMDYxZWY1NTZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBJdGVtKHsgaXRlbSB9KSB7XHJcbiAgY29uc3Qge1xyXG4gICAgbmFtZSxcclxuICAgIGltYWdlX2xpbmssXHJcbiAgICBwcmljZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgdXBkYXRlZF9hdCxcclxuICAgIGNhdGVnb3J5LFxyXG4gICAgcHJvZHVjdF90eXBlLFxyXG4gICAgcHJvZHVjdF9saW5rLFxyXG4gIH0gPSBpdGVtO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXB9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1nX2l0ZW19PlxyXG4gICAgICAgICAgPGltZyBzcmM9e2ltYWdlX2xpbmt9IGFsdD17bmFtZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm9faXRlbX0+XHJcbiAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17c3R5bGVzLnRpdF9pdGVtfT57bmFtZX08L3N0cm9uZz5cclxuICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtzdHlsZXMubnVtX3ByaWNlfT4ke3ByaWNlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudHh0X2luZm99PlxyXG4gICAgICAgICAgICB7Y2F0ZWdvcnkgPyBgJHtjYXRlZ29yeX0vYCA6ICcnfVxyXG4gICAgICAgICAgICB7cHJvZHVjdF90eXBlfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cIm9yYW5nZVwiPuq1rOunpO2VmOq4sDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEhlYWRlciBhcz1cImgzXCI+RGVzY3JpcHRpb248L0hlYWRlcj5cclxuICAgICAgPHAgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogMjAsIGZvbnRTaXplOiAxOCB9fT57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbTtcclxuXHJcbi8qKlxyXG4gKiBhcGlfZmVhdHVyZWRfaW1hZ2U6IFwiLy9zMy5hbWF6b25hd3MuY29tL2Rvbm92YW5iYWlsZXkvcHJvZHVjdHMvYXBpX2ZlYXR1cmVkX2ltYWdlcy8wMDAvMDAwLzQ4OC9vcmlnaW5hbC9vcGVuLXVyaTIwMTcxMjIzLTQtZGVvODJjPzE1MTQwNjMzMjlcIlxyXG5icmFuZDogXCJtYXliZWxsaW5lXCJcclxuY2F0ZWdvcnk6IG51bGxcclxuY3JlYXRlZF9hdDogXCIyMDE2LTEwLTAxVDE4OjM2OjA1LjU4NFpcIlxyXG5jdXJyZW5jeTogbnVsbFxyXG5kZXNjcmlwdGlvbjogXCJXaHkgWW91J2xsIExvdmUgSXTihrXihrVMaWdodHdlaWdodCBwaWdtZW50cyBibGVuZCBlYXNpbHkgYW5kIHdlYXIgZXZlbmx54oa1UHJvdmlkZXMgYSBuYXR1cmFsLCBmYWRlLXByb29mIGJyb256ZWQgY29sb3IgdGhhdCBsZWF2ZXMgc2tpbiB0aGUgd2F5IGl0IHdhcyBtZWFudCB0byBiZS4uLmZyZXNoLCBicmVhdGhpbmcgYW5kIG5hdHVyYWzihrXihrVGb3IgQmVzdCBSZXN1bHRzOiBGb3Igc29mdCwgbmF0dXJhbCBsb29rLCBicnVzaCBhbG9uZyBjaGVla2JvbmUsIHN3ZWVwaW5nIHVwd2FyZC5cIlxyXG5pZDogNDg4XHJcbmltYWdlX2xpbms6IFwiaHR0cHM6Ly9kM3QzMmhzbmp4bzdxNi5jbG91ZGZyb250Lm5ldC9pL2Q0ZjdkODJiNDg1OGM2MjJiYjNjMWNlZjA3YjlkODUwX3JhLHcxNTgsaDE4NF9wYSx3MTU4LGgxODQucG5nXCJcclxubmFtZTogXCJNYXliZWxsaW5lIEZpdCBNZSBCcm9uemVyXCJcclxucHJpY2U6IFwiMTAuMjlcIlxyXG5wcmljZV9zaWduOiBudWxsXHJcbnByb2R1Y3RfYXBpX3VybDogXCJodHRwOi8vbWFrZXVwLWFwaS5oZXJva3VhcHAuY29tL2FwaS92MS9wcm9kdWN0cy80ODguanNvblwiXHJcbnByb2R1Y3RfY29sb3JzOiBbe+KApn1dXHJcbnByb2R1Y3RfbGluazogXCJodHRwczovL3dlbGwuY2EvcHJvZHVjdHMvbWF5YmVsbGluZS1maXQtbWUtYnJvbnplcl8zMTI2NS5odG1sXCJcclxucHJvZHVjdF90eXBlOiBcImJyb256ZXJcIlxyXG5yYXRpbmc6IDQuNVxyXG50YWdfbGlzdDogW11cclxudXBkYXRlZF9hdDogXCIyMDE3LTEyLTIzVDIxOjA4OjQ5Ljk4NVpcIlxyXG53ZWJzaXRlX2xpbms6IFwiaHR0cHM6Ly93ZWxsLmNhXCJcclxuX19wcm90b19fOiBPYmplY3RcclxuICovXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=