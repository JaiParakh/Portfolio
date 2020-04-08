webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/MyTerminal.js":
/*!**********************************!*\
  !*** ./components/MyTerminal.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyTerminal; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var terminal_in_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! terminal-in-react */ "./node_modules/terminal-in-react/lib/js/index.js");
/* harmony import */ var terminal_in_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(terminal_in_react__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "D:\\College\\Projects\\Web-Dev\\Portfolio\\components\\MyTerminal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;


var MyTerminal = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MyTerminal, _React$Component);

  function MyTerminal() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MyTerminal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MyTerminal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "showMsg", function () {
      return 'Hello World';
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "about", function () {
      return '';
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MyTerminal, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "93.4vh"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, __jsx(terminal_in_react__WEBPACK_IMPORTED_MODULE_8___default.a, {
        color: "green",
        backgroundColor: "#1e2227",
        barColor: "black",
        style: {
          fontWeight: "bold",
          fontSize: "1em",
          "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.6)",
          "overflow-x": "hidden",
          "overflow-y": "hidden"
        },
        commands: {
          'open-github': function openGithub() {
            return window.open('https://github.com/JaiParakh', '_blank');
          },
          'open-linkedin': function openLinkedin() {
            return window.open('https://www.linkedin.com/in/jai-parakh-5626b4178/', '_blank');
          },
          'open-medium': function openMedium() {
            return window.open('https://medium.com/@parakh.js', '_blank');
          },
          'open-twitter': function openTwitter() {
            return window.open('https://twitter.com/parakh_js', '_blank');
          },
          'contact': function contact() {
            return window.open('https://mail.google.com/mail/u/0/?view=cm&fs=1&to=contact.jaiparakh@gmail.com&tf=1', '_blank');
          },
          college: function college() {
            return 'Jaypee Institute Of Information Technology, Noida';
          },
          about: this.about,
          skills: function skills() {
            return "[\"Javascript\", \"React\", \"Node.js\", \"Next.js\", \"Express\", \"MongoDB\", \"Python\", \"C++\", \"HTML5\", \"Google Cloud Platform\", \"CSS3\", \"C\", \"PHP\", \"Wordpress\"] \n\n length: 14";
          },
          projects: function projects() {
            return "[\"Cura (Build For Digital India)\", \"Rex\", \"Study Jamm\", \"Coretech\"] \n\n length: 4";
          }
        },
        descriptions: {
          'open-github': 'Opens Github Profile',
          'open-linkedin': 'Opens Linkedin Profile',
          'open-medium': 'Opens Medium Profile',
          'open-twitter': 'Opens Twitter Profile',
          'contact': 'Contact',
          'college': 'Where does he study?',
          'about': 'Who is this Guy?',
          'skills': 'What are his skills?',
          'projects': 'What projects has he worked on?'
        },
        msg: "Hi, I am Jai",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }));
    }
  }]);

  return MyTerminal;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.f141b6df24feb1903082.hot-update.js.map