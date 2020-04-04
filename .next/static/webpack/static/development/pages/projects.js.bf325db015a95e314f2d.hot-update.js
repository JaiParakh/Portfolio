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
  link: "https://github.com/JaiParakh/Rex"
}, {
  name: "Cura (Google Build For Digital India)",
  description: ["Cura is an application that lets users add the food items they are allergic to and predicts the ingredient/item responsible, using Apriori algorithm.", "My team was amongst the 61 teams selected across India from 3.3k+ teams."],
  technologies: ["Javascript", "React", "Node.js", "Python", "Firebase ML Kit", "Firebase"],
  link: "https://github.com/JaiParakh/Cura"
}, {
  name: "Study Jamm",
  description: ["A MERN Stack application that lets users ﬁnd mentors in their vicinity.", "It Detects the user's location and plots all tutors within the specified radius.", "It was up and running for 6 days, during which it had 60 users registered on the platform and around 8 active users on the day of project evaluation."],
  technologies: ["MongoDB", "React", "Node.js", "Express", "Openlayers Map"],
  link: "https://github.com/JaiParakh/Study-Jamm"
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
          lineNumber: 30
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2381539818" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, projects.map(function (p) {
        return __jsx(_components_ProjectList__WEBPACK_IMPORTED_MODULE_8__["default"], {
          name: p.name,
          body: p.description,
          technologies: p.technologies,
          link: p.link,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        });
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2381539818",
        __self: this
      }, ".container.jsx-2381539818{max-height:100vh;overflow-y:scroll;padding:1em 1em 2em 0em;}.container.jsx-2381539818::-webkit-scrollbar{width:0 !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxDb2xsZWdlXFxQcm9qZWN0c1xcV2ViLURldlxcUG9ydGZvbGlvXFxwYWdlc1xccHJvamVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNnQixBQUd1QixBQUlnQyxpQkFIL0IsRUFHZ0MsZ0JBRjFCLHdCQUN6QiIsImZpbGUiOiJEOlxcQ29sbGVnZVxcUHJvamVjdHNcXFdlYi1EZXZcXFBvcnRmb2xpb1xccGFnZXNcXHByb2plY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgUHJvamVjdExpc3QgZnJvbSAnLi8uLi9jb21wb25lbnRzL1Byb2plY3RMaXN0JztcclxuXHJcbmNvbnN0IHByb2plY3RzID0gW1xyXG5cdHtcclxuXHRcdG5hbWU6IFwiUmV4XCIsXHJcblx0XHRkZXNjcmlwdGlvbjogW1wiQW4gYWxsIGluIG9uZSBDTEkgQXBwbGljYXRpb24gdGhhdCBjYW46IFwiLCBcIlBhcnNlIHRoZSBtYWlsIGJvZHkgZm9yIGRhdGVzIGFuZCB0aGVuIGFkZCBhIEdvb2dsZSBDYWxlbmRhciBFdmVudFwiLCBcIlBhcnNlIE1lZGl1bSBEYWlseSBEaWdlc3QgTWFpbHMgYW5kIG9wZW4gYmxvZyBsaW5rcyBpbiB0aGUgYnJvd3Nlci5cIiwgXCJVcGxvYWQsIGRvd25sb2FkIGFuZCBzaGFyZSBmaWxlcyBvbiBHb29nbGUgRHJpdmVcIiwgXCJNYWludGFpbiBhIHJlY29yZCBvZiBhbGwgYXBwbGllZCBpbnRlcm5zaGlwcy9qb2JzXCIsIFwiTWFuYWdlIFRvZG9zXCJdLCBcclxuXHRcdHRlY2hub2xvZ2llczogW1wiTm9kZS5qc1wiLCBcIkphdmFzY3JpcHRcIiwgXCJHTUFJTCBBUElcIixcIkdvb2dsZSBEcml2ZSBBUElcIixcIkdvb2dsZSBDYWxlbmRhciBBUEkuXCJdLFxyXG5cdFx0bGluazogXCJodHRwczovL2dpdGh1Yi5jb20vSmFpUGFyYWtoL1JleFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRuYW1lOiBcIkN1cmEgKEdvb2dsZSBCdWlsZCBGb3IgRGlnaXRhbCBJbmRpYSlcIixcclxuXHRcdGRlc2NyaXB0aW9uOiBbXCJDdXJhIGlzIGFuIGFwcGxpY2F0aW9uIHRoYXQgbGV0cyB1c2VycyBhZGQgdGhlIGZvb2QgaXRlbXMgdGhleSBhcmUgYWxsZXJnaWMgdG8gYW5kIHByZWRpY3RzIHRoZSBpbmdyZWRpZW50L2l0ZW0gcmVzcG9uc2libGUsIHVzaW5nIEFwcmlvcmkgYWxnb3JpdGhtLlwiLFwiTXkgdGVhbSB3YXMgYW1vbmdzdCB0aGUgNjEgdGVhbXMgc2VsZWN0ZWQgYWNyb3NzIEluZGlhIGZyb20gMy4zaysgdGVhbXMuXCJdLFxyXG5cdFx0dGVjaG5vbG9naWVzOiBbXCJKYXZhc2NyaXB0XCIsIFwiUmVhY3RcIiwgXCJOb2RlLmpzXCIsIFwiUHl0aG9uXCIsIFwiRmlyZWJhc2UgTUwgS2l0XCIsIFwiRmlyZWJhc2VcIl0sXHJcblx0XHRsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9KYWlQYXJha2gvQ3VyYVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRuYW1lOiBcIlN0dWR5IEphbW1cIixcclxuXHRcdGRlc2NyaXB0aW9uOiBbXCJBIE1FUk4gU3RhY2sgYXBwbGljYXRpb24gdGhhdCBsZXRzIHVzZXJzIO+sgW5kIG1lbnRvcnMgaW4gdGhlaXIgdmljaW5pdHkuXCIsXCJJdCBEZXRlY3RzIHRoZSB1c2VyJ3MgbG9jYXRpb24gYW5kIHBsb3RzIGFsbCB0dXRvcnMgd2l0aGluIHRoZSBzcGVjaWZpZWQgcmFkaXVzLlwiLFwiSXQgd2FzIHVwIGFuZCBydW5uaW5nIGZvciA2IGRheXMsIGR1cmluZyB3aGljaCBpdCBoYWQgNjAgdXNlcnMgcmVnaXN0ZXJlZCBvbiB0aGUgcGxhdGZvcm0gYW5kIGFyb3VuZCA4IGFjdGl2ZSB1c2VycyBvbiB0aGUgZGF5IG9mIHByb2plY3QgZXZhbHVhdGlvbi5cIl0sXHJcblx0XHR0ZWNobm9sb2dpZXM6IFtcIk1vbmdvREJcIiwgXCJSZWFjdFwiLCBcIk5vZGUuanNcIiwgXCJFeHByZXNzXCIsIFwiT3BlbmxheWVycyBNYXBcIl0sXHJcblx0XHRsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9KYWlQYXJha2gvU3R1ZHktSmFtbVwiXHJcblx0fVxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRwcm9qZWN0cy5tYXAoKHApID0+IHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIDxQcm9qZWN0TGlzdCBuYW1lPXtwLm5hbWV9IGJvZHk9e3AuZGVzY3JpcHRpb259IHRlY2hub2xvZ2llcz17cC50ZWNobm9sb2dpZXN9IGxpbms9e3AubGlua30vPlxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PHN0eWxlIGpzeD57YFxyXG5cdFx0XHRcdC5jb250YWluZXJ7XHJcblx0XHRcdFx0XHRtYXgtaGVpZ2h0OiAxMDB2aDtcclxuXHRcdFx0XHRcdG92ZXJmbG93LXk6IHNjcm9sbDtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDFlbSAxZW0gMmVtIDBlbTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIgeyB3aWR0aDogMCAhaW1wb3J0YW50IH1cclxuXHRcdFx0YH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXX0= */\n/*@ sourceURL=D:\\\\College\\\\Projects\\\\Web-Dev\\\\Portfolio\\\\pages\\\\projects.js */"));
    }
  }]);

  return Projects;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=projects.js.bf325db015a95e314f2d.hot-update.js.map