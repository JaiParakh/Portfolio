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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_ProjectList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../components/ProjectList */ "./components/ProjectList.js");





var _jsxFileName = "D:\\College\\Projects\\Web-Dev\\Portfolio\\pages\\projects.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;



var projects = [{
  name: "Rex",
  description: ["An all in one CLI Application that can: ", "Parse the mail body for dates and then add a Google Calendar Event", "Parse Medium Daily Digest Mails and open blog links in the browser.", "Upload, download and share files on Google Drive", "Maintain a record of all applied internships/jobs", "Manage Todos"],
  technologies: ["Node.js", "Javascript", "GMAIL API", "Google Drive API", "Google Calendar API."],
  link: "https://github.com/JaiParakh/Rex",
  images: []
}, {
  name: "Cura (Google Build For Digital India)",
  description: ["Cura is an application that lets users add the food items they are allergic to and predicts the ingredient/item responsible, using Apriori algorithm.", "My team was amongst the 61 teams selected across India from 3.3k+ teams."],
  technologies: ["Javascript", "React", "Node.js", "Python", "Firebase ML Kit", "Firebase"],
  link: "https://github.com/JaiParakh/Cura",
  images: []
}, {
  name: "Study Jamm",
  description: ["A MERN Stack application that lets users ﬁnd mentors in their vicinity.", "It Detects the user's location and plots all tutors within the specified radius.", "It was up and running for 6 days, during which it had 60 users registered on the platform and around 8 active users on the day of project evaluation."],
  technologies: ["MongoDB", "React", "Node.js", "Express", "Openlayers Map"],
  link: "https://github.com/JaiParakh/Study-Jamm",
  images: []
}];

var Projects = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Projects, _React$Component);

  function Projects() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Projects);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Projects).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Projects, [{
    key: "render",
    value: function render() {
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2381539818" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, projects.map(function (p) {
        return __jsx(_components_ProjectList__WEBPACK_IMPORTED_MODULE_8__["default"], {
          name: p.name,
          body: p.description,
          technologies: p.technologies,
          link: p.link,
          images: p.images,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        });
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2381539818",
        __self: this
      }, ".container.jsx-2381539818{max-height:100vh;overflow-y:scroll;padding:1em 1em 2em 0em;}.container.jsx-2381539818::-webkit-scrollbar{width:0 !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxDb2xsZWdlXFxQcm9qZWN0c1xcV2ViLURldlxcUG9ydGZvbGlvXFxwYWdlc1xccHJvamVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NnQixBQUd1QixBQUlnQyxpQkFIL0IsRUFHZ0MsZ0JBRjFCLHdCQUN6QiIsImZpbGUiOiJEOlxcQ29sbGVnZVxcUHJvamVjdHNcXFdlYi1EZXZcXFBvcnRmb2xpb1xccGFnZXNcXHByb2plY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgUHJvamVjdExpc3QgZnJvbSAnLi8uLi9jb21wb25lbnRzL1Byb2plY3RMaXN0JztcclxuXHJcbmNvbnN0IHByb2plY3RzID0gW1xyXG5cdHtcclxuXHRcdG5hbWU6IFwiUmV4XCIsXHJcblx0XHRkZXNjcmlwdGlvbjogW1wiQW4gYWxsIGluIG9uZSBDTEkgQXBwbGljYXRpb24gdGhhdCBjYW46IFwiLCBcIlBhcnNlIHRoZSBtYWlsIGJvZHkgZm9yIGRhdGVzIGFuZCB0aGVuIGFkZCBhIEdvb2dsZSBDYWxlbmRhciBFdmVudFwiLCBcIlBhcnNlIE1lZGl1bSBEYWlseSBEaWdlc3QgTWFpbHMgYW5kIG9wZW4gYmxvZyBsaW5rcyBpbiB0aGUgYnJvd3Nlci5cIiwgXCJVcGxvYWQsIGRvd25sb2FkIGFuZCBzaGFyZSBmaWxlcyBvbiBHb29nbGUgRHJpdmVcIiwgXCJNYWludGFpbiBhIHJlY29yZCBvZiBhbGwgYXBwbGllZCBpbnRlcm5zaGlwcy9qb2JzXCIsIFwiTWFuYWdlIFRvZG9zXCJdLCBcclxuXHRcdHRlY2hub2xvZ2llczogW1wiTm9kZS5qc1wiLCBcIkphdmFzY3JpcHRcIiwgXCJHTUFJTCBBUElcIixcIkdvb2dsZSBEcml2ZSBBUElcIixcIkdvb2dsZSBDYWxlbmRhciBBUEkuXCJdLFxyXG5cdFx0bGluazogXCJodHRwczovL2dpdGh1Yi5jb20vSmFpUGFyYWtoL1JleFwiLFxyXG5cdFx0aW1hZ2VzOiBbXVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0bmFtZTogXCJDdXJhIChHb29nbGUgQnVpbGQgRm9yIERpZ2l0YWwgSW5kaWEpXCIsXHJcblx0XHRkZXNjcmlwdGlvbjogW1wiQ3VyYSBpcyBhbiBhcHBsaWNhdGlvbiB0aGF0IGxldHMgdXNlcnMgYWRkIHRoZSBmb29kIGl0ZW1zIHRoZXkgYXJlIGFsbGVyZ2ljIHRvIGFuZCBwcmVkaWN0cyB0aGUgaW5ncmVkaWVudC9pdGVtIHJlc3BvbnNpYmxlLCB1c2luZyBBcHJpb3JpIGFsZ29yaXRobS5cIixcIk15IHRlYW0gd2FzIGFtb25nc3QgdGhlIDYxIHRlYW1zIHNlbGVjdGVkIGFjcm9zcyBJbmRpYSBmcm9tIDMuM2srIHRlYW1zLlwiXSxcclxuXHRcdHRlY2hub2xvZ2llczogW1wiSmF2YXNjcmlwdFwiLCBcIlJlYWN0XCIsIFwiTm9kZS5qc1wiLCBcIlB5dGhvblwiLCBcIkZpcmViYXNlIE1MIEtpdFwiLCBcIkZpcmViYXNlXCJdLFxyXG5cdFx0bGluazogXCJodHRwczovL2dpdGh1Yi5jb20vSmFpUGFyYWtoL0N1cmFcIixcclxuXHRcdGltYWdlczogW11cclxuXHR9LFxyXG5cdHtcclxuXHRcdG5hbWU6IFwiU3R1ZHkgSmFtbVwiLFxyXG5cdFx0ZGVzY3JpcHRpb246IFtcIkEgTUVSTiBTdGFjayBhcHBsaWNhdGlvbiB0aGF0IGxldHMgdXNlcnMg76yBbmQgbWVudG9ycyBpbiB0aGVpciB2aWNpbml0eS5cIixcIkl0IERldGVjdHMgdGhlIHVzZXIncyBsb2NhdGlvbiBhbmQgcGxvdHMgYWxsIHR1dG9ycyB3aXRoaW4gdGhlIHNwZWNpZmllZCByYWRpdXMuXCIsXCJJdCB3YXMgdXAgYW5kIHJ1bm5pbmcgZm9yIDYgZGF5cywgZHVyaW5nIHdoaWNoIGl0IGhhZCA2MCB1c2VycyByZWdpc3RlcmVkIG9uIHRoZSBwbGF0Zm9ybSBhbmQgYXJvdW5kIDggYWN0aXZlIHVzZXJzIG9uIHRoZSBkYXkgb2YgcHJvamVjdCBldmFsdWF0aW9uLlwiXSxcclxuXHRcdHRlY2hub2xvZ2llczogW1wiTW9uZ29EQlwiLCBcIlJlYWN0XCIsIFwiTm9kZS5qc1wiLCBcIkV4cHJlc3NcIiwgXCJPcGVubGF5ZXJzIE1hcFwiXSxcclxuXHRcdGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL0phaVBhcmFraC9TdHVkeS1KYW1tXCIsXHJcblx0XHRpbWFnZXM6IFtdXHJcblx0fVxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRwcm9qZWN0cy5tYXAoKHApID0+IHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIDxQcm9qZWN0TGlzdCBuYW1lPXtwLm5hbWV9IGJvZHk9e3AuZGVzY3JpcHRpb259IHRlY2hub2xvZ2llcz17cC50ZWNobm9sb2dpZXN9IGxpbms9e3AubGlua30gaW1hZ2VzPXtwLmltYWdlc30gLz5cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdFx0XHQuY29udGFpbmVye1xyXG5cdFx0XHRcdFx0bWF4LWhlaWdodDogMTAwdmg7XHJcblx0XHRcdFx0XHRvdmVyZmxvdy15OiBzY3JvbGw7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAxZW0gMWVtIDJlbSAwZW07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgd2lkdGg6IDAgIWltcG9ydGFudCB9XHJcblx0XHRcdGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=D:\\\\College\\\\Projects\\\\Web-Dev\\\\Portfolio\\\\pages\\\\projects.js */"));
    }
  }]);

  return Projects;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=projects.js.c828379d3fb5823fe520.hot-update.js.map