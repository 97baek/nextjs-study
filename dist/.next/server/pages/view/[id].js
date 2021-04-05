(function() {
var exports = {};
exports.id = "pages/view/[id]";
exports.ids = ["pages/view/[id]"];
exports.modules = {

/***/ "./pages/view/[id].js":
/*!****************************!*\
  !*** ./pages/view/[id].js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_Item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/components/Item */ "./src/components/Item.js");

var _jsxFileName = "C:\\Users\\BAEK\\Documents\\portfolio\\WebPractice\\typescript-study\\nextjs-tutorial\\pages\\view\\[id].js";





const Post = () => {
  const {
    0: item,
    1: setItem
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    id
  } = router.query;
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

  const getData = () => {
    axios__WEBPACK_IMPORTED_MODULE_2___default().get(API_URL).then(res => {
      setItem(res.data);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (id && id > 0) {
      getData();
    }
  }, [id]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Item__WEBPACK_IMPORTED_MODULE_4__.default, {
    item: item
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "./src/components/Item.js":
/*!********************************!*\
  !*** ./src/components/Item.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Item_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Item.module.css */ "./src/components/Item.module.css");
/* harmony import */ var _Item_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Item_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\BAEK\\Documents\\portfolio\\WebPractice\\typescript-study\\nextjs-tutorial\\src\\components\\Item.js";




function Item({
  item
}) {
  const {
    name,
    image_link,
    price,
    description,
    updated_at,
    category,
    product_type,
    product_link
  } = item;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Item_module_css__WEBPACK_IMPORTED_MODULE_3___default().wrap),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Item_module_css__WEBPACK_IMPORTED_MODULE_3___default().img_item),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: image_link,
          alt: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Item_module_css__WEBPACK_IMPORTED_MODULE_3___default().info_item),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          className: (_Item_module_css__WEBPACK_IMPORTED_MODULE_3___default().tit_item),
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          className: (_Item_module_css__WEBPACK_IMPORTED_MODULE_3___default().num_price),
          children: ["$", price]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_Item_module_css__WEBPACK_IMPORTED_MODULE_3___default().txt_info),
          children: [category ? `${category}/` : '', product_type]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
          color: "orange",
          children: "\uAD6C\uB9E4\uD558\uAE30"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Header, {
      as: "h3",
      children: "Description"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      style: {
        paddingBottom: 20,
        fontSize: 18
      },
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

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

/***/ }),

/***/ "./src/components/Item.module.css":
/*!****************************************!*\
  !*** ./src/components/Item.module.css ***!
  \****************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"wrap": "Item_wrap__3rjaB",
	"img_item": "Item_img_item__1xfQ_",
	"info_item": "Item_info_item__2unuU",
	"tit_item": "Item_tit_item__1O3j0",
	"num_price": "Item_num_price__2VUzc",
	"txt_info": "Item_txt_info__QOW2h"
};


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/view/[id].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtdHV0b3JpYWwvLi9wYWdlcy92aWV3L1tpZF0uanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLXR1dG9yaWFsLy4vc3JjL2NvbXBvbmVudHMvSXRlbS5qcyIsIndlYnBhY2s6Ly9uZXh0anMtdHV0b3JpYWwvLi9zcmMvY29tcG9uZW50cy9JdGVtLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbmV4dGpzLXR1dG9yaWFsL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9uZXh0anMtdHV0b3JpYWwvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL25leHRqcy10dXRvcmlhbC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLXR1dG9yaWFsL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLXR1dG9yaWFsL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiJdLCJuYW1lcyI6WyJQb3N0IiwiaXRlbSIsInNldEl0ZW0iLCJ1c2VTdGF0ZSIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJBUElfVVJMIiwiZ2V0RGF0YSIsImF4aW9zIiwidGhlbiIsInJlcyIsImRhdGEiLCJ1c2VFZmZlY3QiLCJJdGVtIiwibmFtZSIsImltYWdlX2xpbmsiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwidXBkYXRlZF9hdCIsImNhdGVnb3J5IiwicHJvZHVjdF90eXBlIiwicHJvZHVjdF9saW5rIiwic3R5bGVzIiwicGFkZGluZ0JvdHRvbSIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLE1BQU07QUFDakIsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQywrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFN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cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEl0ZW0gZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvSXRlbSc7XHJcblxyXG5jb25zdCBQb3N0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpdGVtLCBzZXRJdGVtXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIGNvbnN0IEFQSV9VUkwgPSBgaHR0cDovL21ha2V1cC1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvdjEvcHJvZHVjdHMvJHtpZH0uanNvbmA7XHJcblxyXG4gIGNvbnN0IGdldERhdGEgPSAoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoQVBJX1VSTCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHNldEl0ZW0ocmVzLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpZCAmJiBpZCA+IDApIHtcclxuICAgICAgZ2V0RGF0YSgpO1xyXG4gICAgfVxyXG4gIH0sIFtpZF0pO1xyXG5cclxuICByZXR1cm4gPEl0ZW0gaXRlbT17aXRlbX0gLz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sIEhlYWRlciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0l0ZW0ubW9kdWxlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBJdGVtKHsgaXRlbSB9KSB7XHJcbiAgY29uc3Qge1xyXG4gICAgbmFtZSxcclxuICAgIGltYWdlX2xpbmssXHJcbiAgICBwcmljZSxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgdXBkYXRlZF9hdCxcclxuICAgIGNhdGVnb3J5LFxyXG4gICAgcHJvZHVjdF90eXBlLFxyXG4gICAgcHJvZHVjdF9saW5rLFxyXG4gIH0gPSBpdGVtO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXB9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1nX2l0ZW19PlxyXG4gICAgICAgICAgPGltZyBzcmM9e2ltYWdlX2xpbmt9IGFsdD17bmFtZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm9faXRlbX0+XHJcbiAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17c3R5bGVzLnRpdF9pdGVtfT57bmFtZX08L3N0cm9uZz5cclxuICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtzdHlsZXMubnVtX3ByaWNlfT4ke3ByaWNlfTwvc3Ryb25nPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudHh0X2luZm99PlxyXG4gICAgICAgICAgICB7Y2F0ZWdvcnkgPyBgJHtjYXRlZ29yeX0vYCA6ICcnfVxyXG4gICAgICAgICAgICB7cHJvZHVjdF90eXBlfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cIm9yYW5nZVwiPuq1rOunpO2VmOq4sDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEhlYWRlciBhcz1cImgzXCI+RGVzY3JpcHRpb248L0hlYWRlcj5cclxuICAgICAgPHAgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogMjAsIGZvbnRTaXplOiAxOCB9fT57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSXRlbTtcclxuXHJcbi8qKlxyXG4gKiBhcGlfZmVhdHVyZWRfaW1hZ2U6IFwiLy9zMy5hbWF6b25hd3MuY29tL2Rvbm92YW5iYWlsZXkvcHJvZHVjdHMvYXBpX2ZlYXR1cmVkX2ltYWdlcy8wMDAvMDAwLzQ4OC9vcmlnaW5hbC9vcGVuLXVyaTIwMTcxMjIzLTQtZGVvODJjPzE1MTQwNjMzMjlcIlxyXG5icmFuZDogXCJtYXliZWxsaW5lXCJcclxuY2F0ZWdvcnk6IG51bGxcclxuY3JlYXRlZF9hdDogXCIyMDE2LTEwLTAxVDE4OjM2OjA1LjU4NFpcIlxyXG5jdXJyZW5jeTogbnVsbFxyXG5kZXNjcmlwdGlvbjogXCJXaHkgWW91J2xsIExvdmUgSXTihrXihrVMaWdodHdlaWdodCBwaWdtZW50cyBibGVuZCBlYXNpbHkgYW5kIHdlYXIgZXZlbmx54oa1UHJvdmlkZXMgYSBuYXR1cmFsLCBmYWRlLXByb29mIGJyb256ZWQgY29sb3IgdGhhdCBsZWF2ZXMgc2tpbiB0aGUgd2F5IGl0IHdhcyBtZWFudCB0byBiZS4uLmZyZXNoLCBicmVhdGhpbmcgYW5kIG5hdHVyYWzihrXihrVGb3IgQmVzdCBSZXN1bHRzOiBGb3Igc29mdCwgbmF0dXJhbCBsb29rLCBicnVzaCBhbG9uZyBjaGVla2JvbmUsIHN3ZWVwaW5nIHVwd2FyZC5cIlxyXG5pZDogNDg4XHJcbmltYWdlX2xpbms6IFwiaHR0cHM6Ly9kM3QzMmhzbmp4bzdxNi5jbG91ZGZyb250Lm5ldC9pL2Q0ZjdkODJiNDg1OGM2MjJiYjNjMWNlZjA3YjlkODUwX3JhLHcxNTgsaDE4NF9wYSx3MTU4LGgxODQucG5nXCJcclxubmFtZTogXCJNYXliZWxsaW5lIEZpdCBNZSBCcm9uemVyXCJcclxucHJpY2U6IFwiMTAuMjlcIlxyXG5wcmljZV9zaWduOiBudWxsXHJcbnByb2R1Y3RfYXBpX3VybDogXCJodHRwOi8vbWFrZXVwLWFwaS5oZXJva3VhcHAuY29tL2FwaS92MS9wcm9kdWN0cy80ODguanNvblwiXHJcbnByb2R1Y3RfY29sb3JzOiBbe+KApn1dXHJcbnByb2R1Y3RfbGluazogXCJodHRwczovL3dlbGwuY2EvcHJvZHVjdHMvbWF5YmVsbGluZS1maXQtbWUtYnJvbnplcl8zMTI2NS5odG1sXCJcclxucHJvZHVjdF90eXBlOiBcImJyb256ZXJcIlxyXG5yYXRpbmc6IDQuNVxyXG50YWdfbGlzdDogW11cclxudXBkYXRlZF9hdDogXCIyMDE3LTEyLTIzVDIxOjA4OjQ5Ljk4NVpcIlxyXG53ZWJzaXRlX2xpbms6IFwiaHR0cHM6Ly93ZWxsLmNhXCJcclxuX19wcm90b19fOiBPYmplY3RcclxuICovXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndyYXBcIjogXCJJdGVtX3dyYXBfXzNyamFCXCIsXG5cdFwiaW1nX2l0ZW1cIjogXCJJdGVtX2ltZ19pdGVtX18xeGZRX1wiLFxuXHRcImluZm9faXRlbVwiOiBcIkl0ZW1faW5mb19pdGVtX18ydW51VVwiLFxuXHRcInRpdF9pdGVtXCI6IFwiSXRlbV90aXRfaXRlbV9fMU8zajBcIixcblx0XCJudW1fcHJpY2VcIjogXCJJdGVtX251bV9wcmljZV9fMlZVemNcIixcblx0XCJ0eHRfaW5mb1wiOiBcIkl0ZW1fdHh0X2luZm9fX1FPVzJoXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9