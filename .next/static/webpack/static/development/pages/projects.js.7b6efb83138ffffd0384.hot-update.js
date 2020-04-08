webpackHotUpdate("static\\development\\pages\\projects.js",{

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Projects; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_ProjectList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/ProjectList */ "./components/ProjectList.js");





var _jsxFileName = "D:\\College\\Projects\\Web-Dev\\Portfolio\\pages\\projects.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;



var projects = [{
  name: "Rex",
  description: ["Parse the mail body for dates and then add a Google Calendar Event", "Parse Medium Daily Digest Mails and open blog links in the browser.", "Upload, download and share files on Google Drive", "Maintain a record of all applied internships/jobs", "Manage Todos"],
  technologies: ["Node.js", "Javascript", "GMAIL API", "Google Drive API", "Google Calendar API"],
  link: "https://github.com/JaiParakh/Rex",
  img: ""
}, {
  name: "Cura (Google Build For Digital India)",
  description: ["Cura is an application that lets users add the food items they are allergic to and predict the ingredient/item responsible, using Apriori algorithm.", "My team was amongst the 61 teams selected across India from 3.3k+ teams for the Feedback Phase."],
  technologies: ["Javascript", "React", "Node.js", "Python", "Firebase ML Kit", "Firebase"],
  link: "https://github.com/JaiParakh/Cura",
  img: "Cura.jpg"
}, {
  name: "Study Jamm",
  description: ["A MERN Stack application that lets users ﬁnd mentors in their vicinity.", "It Detects the user's location and plots all tutors within the specified radius.", "It was up and running for 6 days, during which it had 60 users registered on the platform and around 8 active users on the day of project evaluation."],
  technologies: ["MongoDB", "React", "Node.js", "Express", "Openlayers Map"],
  link: "https://github.com/JaiParakh/Study-Jamm",
  img: "Study-Jamm-2.png"
}
/*{
	name: "Coretech",
	description: ["Created an online store for Coretech."],
	technologies: ["Wordpress", "Bootstrap-4"],
	link: "https://coretech.net.in/",
	img: "Coretech-2.png"
}*/
];

var Projects = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Projects, _React$Component);

  function Projects() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Projects);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Projects).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Projects, [{
    key: "render",
    value: function render() {
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, projects.map(function (p) {
        return __jsx(_components_ProjectList__WEBPACK_IMPORTED_MODULE_7__["default"], {
          name: p.name,
          body: p.description,
          technologies: p.technologies,
          link: p.link,
          img: p.img,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        });
      }));
    }
  }]);

  return Projects;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ })

})
//# sourceMappingURL=projects.js.7b6efb83138ffffd0384.hot-update.js.map