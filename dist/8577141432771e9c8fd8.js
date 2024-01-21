/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 100%;
}

body {
  min-height: 100vh;
  font-family: "Sora", sans-serif;
}

.none {
  display: none;
}

/* \$gray: rgba(233, 230, 230, 0.425); */
/* @import './colors'; */
.underline {
  text-decoration: underline;
  text-underline-offset: 10px;
  text-decoration-color: rgb(19, 19, 107);
  text-decoration-thickness: 3px;
}

.a-Clicked {
  font-weight: 600;
}

a {
  cursor: pointer;
}

header {
  width: 100%;
}
header h1 {
  height: 120px;
  background-color: rgb(19, 19, 107);
  color: white;
  font-size: 1.75rem;
  padding: 10px 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
}
header .nav {
  width: 80%;
  max-width: 400px;
  height: 70px;
  margin: 15px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  border-radius: 15px;
  box-shadow: 1px 2px 2px lightgray;
  border: 1px solid rgba(233, 230, 230, 0.425);
}
header a {
  font-size: 1rem;
  color: rgb(19, 19, 107);
}

.last-results {
  padding: 0 15px;
  margin-top: 2.5rem;
  gap: 50px;
}
.last-results__title {
  font-size: 1.375rem;
  color: black;
  text-align: center;
  margin-bottom: 50px;
}

.draw {
  gap: 20px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.draw__date {
  font-size: 0.875rem;
  color: black;
}
.draw__balls {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
}
.draw__balls-5 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 5px;
  flex-wrap: wrap;
}
.draw__balls-2 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 5px;
}

/* \$gray: rgba(233, 230, 230, 0.425); */
.simulator {
  width: 100%;
  margin-top: 40px;
}
.simulator .menu {
  padding: 40px;
  min-height: 250px;
  width: 80%;
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  border-radius: 15px;
  box-shadow: 1px 2px 2px lightgray;
  border: 1px solid rgba(233, 230, 230, 0.425);
}
.simulator li:hover {
  color: rgb(19, 19, 107);
  font-weight: 600;
  cursor: pointer;
}

.keyboard-container {
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* \$gray: rgba(233, 230, 230, 0.425); */
.ball {
  width: 40px;
  height: 40px;
  border-radius: 100px;
  color: white;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ball--blue {
  background-color: rgb(19, 19, 107);
}
.ball--yellow {
  background-color: rgb(255, 230, 0);
}

/* @import '../base/colors';
@import '../base/mixins'; */
.keyboard {
  width: 100%;
  max-width: 850px;
  padding: 35px;
  gap: 50px;
  position: relative;
  border-radius: 15px;
  box-shadow: 1px 2px 2px lightgray;
  border: 1px solid rgba(233, 230, 230, 0.425);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.keyboard .closing-cross--keyboard {
  position: absolute;
  top: 10px;
  right: 15px;
}
.keyboard__instruction {
  font-size: 0.875rem;
  font-weight: 400;
  color: grey;
  margin-right: 20px;
}
@media (min-width: 48rem) {
  .keyboard__instruction {
    font-size: 1rem;
  }
}
.keyboard .keys-container {
  flex-wrap: wrap;
  gap: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
@media (min-width: 48rem) {
  .keyboard .keys-container {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto;
  }
}
.keyboard .blue-keys {
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
@media (min-width: 48rem) {
  .keyboard .blue-keys {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
}
.keyboard .yellow-keys {
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
@media (min-width: 48rem) {
  .keyboard .yellow-keys {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }
}
@media (min-width: 62rem) {
  .keyboard .yellow-keys {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    row-gap: 20px;
    column-gap: 10px;
  }
}
.keyboard__key {
  width: 35px;
  height: 35px;
  font-weight: 600;
  box-shadow: 3px 4px 3px rgb(228, 226, 226);
  border-radius: 100%;
  border: 1px solid rgb(245, 243, 243);
  background-color: white;
  font-size: 0.875rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
}
@media (min-width: 48rem) {
  .keyboard__key {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
}
.keyboard__key--blue {
  color: rgb(19, 19, 107);
}
.keyboard__key--yellow {
  color: rgb(255, 230, 0);
}
.keyboard__key--blue:hover {
  color: rgba(19, 19, 107, 0.699);
}
.keyboard__key--yellow:hover {
  color: rgba(255, 230, 0, 0.63);
}
.keyboard__keyClicked--blue {
  color: white;
  background-color: rgb(19, 19, 107);
}
.keyboard__keyClicked--yellow {
  color: white;
  background-color: rgb(255, 230, 0);
}
.keyboard__result-config {
  font-size: 0.875rem;
  color: black;
}
.keyboard__select {
  border: 1px solid rgb(19, 19, 107);
  border-radius: 4px;
  padding: 3px;
}
.keyboard__result-config {
  max-width: 400px;
  text-align: center;
  line-height: 24px;
  font-size: 0.875rem;
}
@media (min-width: 48rem) {
  .keyboard__result-config {
    font-size: 1rem;
  }
}
.keyboard__btn {
  width: 90px;
  height: 40px;
  background-color: rgb(19, 19, 107);
  border: none;
  border-radius: 30px;
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  cursor: pointer;
}
@media (min-width: 48rem) {
  .keyboard__btn {
    font-size: 1rem;
    width: 100px;
  }
}
.keyboard__btn:hover {
  background-color: rgba(19, 19, 107, 0.699);
}

.closing-cross {
  width: 30px;
  height: 30px;
  font-size: 1.125rem;
  border-radius: 100%;
  box-shadow: 1px 2px 2px rgb(247, 246, 246);
  border: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
}
.closing-cross:hover {
  color: rgba(19, 19, 107, 0.699);
  cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/scss/base/_base.scss","webpack://./src/scss/main.scss","webpack://./src/scss/base/_colors.scss","webpack://./src/scss/base/_typography.scss","webpack://./src/scss/layout/_header.scss","webpack://./src/scss/base/_mixins.scss","webpack://./src/scss/layout/_last-results.scss","webpack://./src/scss/layout/_simulator.scss","webpack://./src/scss/layout/_keyboard-container.scss","webpack://./src/scss/components/_balls.scss","webpack://./src/scss/components/_keyboard.scss","webpack://./src/scss/components/_closing-cross.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap');\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nhtml {\r\n    font-size: 100%;\r\n}\r\n\r\nbody {\r\n    min-height: 100vh;\r\n    font-family: 'Sora', sans-serif;\r\n}\r\n\r\n.none {\r\n    display: none;\r\n}\r\n\r\n","@import url(\"https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap\");\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 100%;\n}\n\nbody {\n  min-height: 100vh;\n  font-family: \"Sora\", sans-serif;\n}\n\n.none {\n  display: none;\n}\n\n/* $gray: rgba(233, 230, 230, 0.425); */\n/* @import './colors'; */\n.underline {\n  text-decoration: underline;\n  text-underline-offset: 10px;\n  text-decoration-color: rgb(19, 19, 107);\n  text-decoration-thickness: 3px;\n}\n\n.a-Clicked {\n  font-weight: 600;\n}\n\na {\n  cursor: pointer;\n}\n\nheader {\n  width: 100%;\n}\nheader h1 {\n  height: 120px;\n  background-color: rgb(19, 19, 107);\n  color: white;\n  font-size: 1.75rem;\n  padding: 10px 20px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 700;\n}\nheader .nav {\n  width: 80%;\n  max-width: 400px;\n  height: 70px;\n  margin: 15px auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-evenly;\n  border-radius: 15px;\n  box-shadow: 1px 2px 2px lightgray;\n  border: 1px solid rgba(233, 230, 230, 0.425);\n}\nheader a {\n  font-size: 1rem;\n  color: rgb(19, 19, 107);\n}\n\n.last-results {\n  padding: 0 15px;\n  margin-top: 2.5rem;\n  gap: 50px;\n}\n.last-results__title {\n  font-size: 1.375rem;\n  color: black;\n  text-align: center;\n  margin-bottom: 50px;\n}\n\n.draw {\n  gap: 20px;\n  margin-bottom: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.draw__date {\n  font-size: 0.875rem;\n  color: black;\n}\n.draw__balls {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.draw__balls-5 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  gap: 5px;\n  flex-wrap: wrap;\n}\n.draw__balls-2 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  gap: 5px;\n}\n\n/* $gray: rgba(233, 230, 230, 0.425); */\n.simulator {\n  width: 100%;\n  margin-top: 40px;\n}\n.simulator .menu {\n  padding: 40px;\n  min-height: 250px;\n  width: 80%;\n  max-width: 500px;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 10px;\n  border-radius: 15px;\n  box-shadow: 1px 2px 2px lightgray;\n  border: 1px solid rgba(233, 230, 230, 0.425);\n}\n.simulator li:hover {\n  color: rgb(19, 19, 107);\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.keyboard-container {\n  width: 100%;\n  padding: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* $gray: rgba(233, 230, 230, 0.425); */\n.ball {\n  width: 40px;\n  height: 40px;\n  border-radius: 100px;\n  color: white;\n  font-weight: 700;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.ball--blue {\n  background-color: rgb(19, 19, 107);\n}\n.ball--yellow {\n  background-color: rgb(255, 230, 0);\n}\n\n/* @import '../base/colors';\n@import '../base/mixins'; */\n.keyboard {\n  width: 100%;\n  max-width: 850px;\n  padding: 35px;\n  gap: 50px;\n  position: relative;\n  border-radius: 15px;\n  box-shadow: 1px 2px 2px lightgray;\n  border: 1px solid rgba(233, 230, 230, 0.425);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.keyboard .closing-cross--keyboard {\n  position: absolute;\n  top: 10px;\n  right: 15px;\n}\n.keyboard__instruction {\n  font-size: 0.875rem;\n  font-weight: 400;\n  color: grey;\n  margin-right: 20px;\n}\n@media (min-width: 48rem) {\n  .keyboard__instruction {\n    font-size: 1rem;\n  }\n}\n.keyboard .keys-container {\n  flex-wrap: wrap;\n  gap: 35px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n}\n@media (min-width: 48rem) {\n  .keyboard .keys-container {\n    display: grid;\n    grid-template-columns: auto auto;\n    grid-template-rows: auto;\n  }\n}\n.keyboard .blue-keys {\n  flex-wrap: wrap;\n  row-gap: 20px;\n  column-gap: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n}\n@media (min-width: 48rem) {\n  .keyboard .blue-keys {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n  }\n}\n.keyboard .yellow-keys {\n  flex-wrap: wrap;\n  column-gap: 10px;\n  row-gap: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n}\n@media (min-width: 48rem) {\n  .keyboard .yellow-keys {\n    display: grid;\n    gap: 10px;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(6, 1fr);\n  }\n}\n@media (min-width: 62rem) {\n  .keyboard .yellow-keys {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(4, 1fr);\n    row-gap: 20px;\n    column-gap: 10px;\n  }\n}\n.keyboard__key {\n  width: 35px;\n  height: 35px;\n  font-weight: 600;\n  box-shadow: 3px 4px 3px rgb(228, 226, 226);\n  border-radius: 100%;\n  border: 1px solid rgb(245, 243, 243);\n  background-color: white;\n  font-size: 0.875rem;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  list-style: none;\n}\n@media (min-width: 48rem) {\n  .keyboard__key {\n    width: 40px;\n    height: 40px;\n    font-size: 1rem;\n  }\n}\n.keyboard__key--blue {\n  color: rgb(19, 19, 107);\n}\n.keyboard__key--yellow {\n  color: rgb(255, 230, 0);\n}\n.keyboard__key--blue:hover {\n  color: rgba(19, 19, 107, 0.699);\n}\n.keyboard__key--yellow:hover {\n  color: rgba(255, 230, 0, 0.63);\n}\n.keyboard__keyClicked--blue {\n  color: white;\n  background-color: rgb(19, 19, 107);\n}\n.keyboard__keyClicked--yellow {\n  color: white;\n  background-color: rgb(255, 230, 0);\n}\n.keyboard__result-config {\n  font-size: 0.875rem;\n  color: black;\n}\n.keyboard__select {\n  border: 1px solid rgb(19, 19, 107);\n  border-radius: 4px;\n  padding: 3px;\n}\n.keyboard__result-config {\n  max-width: 400px;\n  text-align: center;\n  line-height: 24px;\n  font-size: 0.875rem;\n}\n@media (min-width: 48rem) {\n  .keyboard__result-config {\n    font-size: 1rem;\n  }\n}\n.keyboard__btn {\n  width: 90px;\n  height: 40px;\n  background-color: rgb(19, 19, 107);\n  border: none;\n  border-radius: 30px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: white;\n  cursor: pointer;\n}\n@media (min-width: 48rem) {\n  .keyboard__btn {\n    font-size: 1rem;\n    width: 100px;\n  }\n}\n.keyboard__btn:hover {\n  background-color: rgba(19, 19, 107, 0.699);\n}\n\n.closing-cross {\n  width: 30px;\n  height: 30px;\n  font-size: 1.125rem;\n  border-radius: 100%;\n  box-shadow: 1px 2px 2px rgb(247, 246, 246);\n  border: 1px solid lightgray;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.closing-cross:hover {\n  color: rgba(19, 19, 107, 0.699);\n  cursor: pointer;\n}","$white: white;\r\n$blue: rgb(19, 19, 107);\r\n$blue-transparent: rgba(19, 19, 107, 0.699);\r\n/* $gray: rgba(233, 230, 230, 0.425); */\r\n$gray: rgba(233, 230, 230, 0.425);\r\n$light-gray: lightgray;\r\n$black: black;\r\n$yellow: rgb(255, 230, 0);\r\n$yellow-transparent: rgba(255, 230, 0, 0.63);\r\n$grey: grey;\r\n$keyboard-key-border: rgb(245, 243, 243);\r\n$keyboard-key-boxShadow: rgb(228, 226, 226);\r\n$closing-cross-border: rgb(245, 245, 245);\r\n$closing-cross-boxShasow: rgb(247, 246, 246);","/* @import './colors'; */\r\n\r\n.underline {\r\n    text-decoration: underline;\r\n    text-underline-offset: 10px;\r\n    text-decoration-color: $blue;\r\n    text-decoration-thickness: 3px;\r\n}\r\n\r\n.a-Clicked {\r\n    font-weight: 600;\r\n}\r\n\r\na {\r\n    cursor: pointer;\r\n}","\r\nheader {\r\n    width: 100%;\r\n    h1 {\r\n        height: 120px;\r\n        background-color: $blue;\r\n        color: $white;\r\n        font-size: 1.75rem;\r\n        padding: 10px 20px;\r\n        text-align: center;\r\n        @include flexCenter;\r\n        font-weight: 700;\r\n    }\r\n\r\n    .nav {\r\n        width: 80%;\r\n        max-width: 400px;\r\n        height: 70px;\r\n        margin: 15px auto;\r\n        @include flex-row;\r\n        justify-content: space-evenly;\r\n        @include stylingForBox;\r\n    }\r\n\r\n    a { \r\n        font-size: 1rem;\r\n        color: $blue;\r\n    }\r\n}","$breakpoints: (\r\n    'small': '36rem', // ≥576px\r\n    'medium': '48rem', // ≥768px\r\n    'large': '62rem', // ≥992p\r\n    'x-large': '75rem', // ≥1200px\r\n    'xx-large': '87.5rem', // ≥1400px\r\n);\r\n\r\n@mixin breakpoint($size) {\r\n\t@media (min-width: map-get($breakpoints, $size)) {\r\n\t\t@content;\r\n\t}\r\n}\r\n\r\n@mixin flexCenter {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n@mixin stylingForBox {\r\n    border-radius: 15px;\r\n    box-shadow: 1px 2px 2px $light-gray;\r\n    border: 1px solid $gray;\r\n}\r\n\r\n@mixin flex-column {\r\n    @include flexCenter;\r\n    flex-direction: column;\r\n}\r\n\r\n@mixin flex-row {\r\n    @include flexCenter;\r\n    flex-direction: row;\r\n}",".last-results {\r\n    padding: 0 15px;\r\n    margin-top: 2.5rem;\r\n    gap: 50px;\r\n\r\n    &__title {\r\n        font-size: 1.375rem;\r\n        color: $black;\r\n        text-align: center;\r\n        margin-bottom: 50px;\r\n    }\r\n}\r\n\r\n\r\n.draw {\r\n    gap: 20px;\r\n    margin-bottom: 50px;\r\n    @include flex-column;\r\n\r\n    &__date {\r\n        font-size: 0.875rem;\r\n        color: $black;\r\n    }\r\n\r\n    &__balls {\r\n        @include flex-row;\r\n        gap: 10px;\r\n        flex-wrap: wrap;\r\n    }\r\n\r\n    &__balls-5 {\r\n        @include flex-row;\r\n        gap: 5px;\r\n        flex-wrap: wrap;\r\n    }\r\n\r\n    &__balls-2 {\r\n        @include flex-row;\r\n        gap: 5px;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n","@import '../base/colors';\r\n\r\n.simulator {\r\n    width: 100%;\r\n    margin-top: 40px;\r\n    .menu {\r\n        padding: 40px;\r\n        min-height: 250px;\r\n        width: 80%;\r\n        max-width: 500px;\r\n        margin: auto;\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        gap: 10px;\r\n        @include stylingForBox;\r\n    }\r\n\r\n    li:hover {\r\n        color: $blue;\r\n        font-weight: 600;\r\n        cursor: pointer;\r\n    }\r\n}\r\n",".keyboard-container {\r\n    width: 100%;\r\n    padding: 20px;\r\n    @include flexCenter;\r\n}","@import '../base/colors';\r\n@import '../base/mixins';\r\n\r\n.ball {\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 100px;\r\n    color: $white;\r\n    font-weight: 700;\r\n    @include flexCenter;\r\n\r\n    &--blue {\r\n        background-color: $blue;\r\n    }\r\n\r\n    &--yellow {\r\n        background-color: $yellow;\r\n    }\r\n}","/* @import '../base/colors';\r\n@import '../base/mixins'; */\r\n\r\n.keyboard {\r\n    width: 100%;\r\n    max-width: 850px;\r\n    padding: 35px;\r\n    gap: 50px;\r\n    position: relative;\r\n    @include stylingForBox;\r\n    @include flex-column;\r\n    \r\n    .closing-cross--keyboard {\r\n        position: absolute;\r\n        top: 10px;\r\n        right: 15px;\r\n    }\r\n\r\n    &__instruction {\r\n        font-size: 0.875rem;\r\n        font-weight: 400;\r\n        color: $grey;\r\n        margin-right: 20px;\r\n        @include breakpoint(medium) {\r\n            font-size: 1rem;\r\n        }\r\n    }\r\n\r\n    .keys-container {\r\n        flex-wrap: wrap;\r\n        gap: 35px;\r\n        @include flex-row;\r\n        @include breakpoint(medium) {\r\n            display: grid;\r\n            grid-template-columns: auto auto;\r\n            grid-template-rows: auto;\r\n        }\r\n    }\r\n\r\n    .blue-keys {\r\n        flex-wrap: wrap;\r\n        row-gap: 20px;\r\n        column-gap: 10px;\r\n        @include flex-row;\r\n        @include breakpoint(medium) {\r\n            display: grid;\r\n            grid-template-columns: repeat(10, 1fr);\r\n            grid-template-rows: repeat(5, 1fr);\r\n        }\r\n    }\r\n\r\n    .yellow-keys {\r\n        flex-wrap: wrap;\r\n        column-gap:10px;\r\n        row-gap: 20px;\r\n        @include flex-row;\r\n        @include breakpoint(medium) {\r\n            display: grid;\r\n            gap:10px;\r\n            grid-template-columns: repeat(2, 1fr);\r\n            grid-template-rows: repeat(6, 1fr);\r\n        }\r\n        @include breakpoint(large) {\r\n            display: grid;\r\n            grid-template-columns: repeat(3, 1fr);\r\n            grid-template-rows: repeat(4, 1fr);\r\n            row-gap: 20px;\r\n            column-gap: 10px;\r\n        }\r\n    }\r\n\r\n    &__key {\r\n        width: 35px;\r\n        height: 35px;\r\n        font-weight: 600;\r\n        box-shadow: 3px 4px 3px $keyboard-key-boxShadow;\r\n        border-radius: 100%;\r\n        border: 1px solid $keyboard-key-border;\r\n        background-color: $white;\r\n        font-size: 0.875rem;\r\n        cursor: pointer;\r\n        @include flexCenter;\r\n        list-style: none;\r\n        @include breakpoint(medium) {\r\n            width: 40px;\r\n            height: 40px;\r\n            font-size: 1rem;\r\n        }\r\n    }\r\n\r\n    &__key--blue {\r\n        color: $blue;\r\n    }\r\n\r\n    &__key--yellow {\r\n        color: $yellow;\r\n    }\r\n\r\n    &__key--blue:hover {\r\n        color: $blue-transparent;\r\n    }\r\n\r\n    &__key--yellow:hover {\r\n        color: $yellow-transparent;\r\n    }\r\n\r\n    &__keyClicked--blue {\r\n        color: $white;\r\n        background-color: $blue;\r\n    }\r\n\r\n    &__keyClicked--yellow {\r\n        color: $white;\r\n        background-color: $yellow;\r\n    }\r\n\r\n    &__result-config {\r\n        font-size: 0.875rem;\r\n        color: $black;\r\n    }\r\n\r\n    &__select {\r\n        border: 1px solid $blue;\r\n        border-radius: 4px;\r\n        padding: 3px;\r\n    }\r\n\r\n    &__result-config {\r\n        max-width: 400px;\r\n        text-align: center;\r\n        line-height: 24px;\r\n        font-size: 0.875rem;\r\n        @include breakpoint(medium) {\r\n            font-size: 1rem;\r\n        }\r\n    }\r\n\r\n    &__btn {\r\n        width: 90px;\r\n        height: 40px;\r\n        background-color: $blue;\r\n        border: none;\r\n        border-radius: 30px;\r\n        font-size: 0.875rem;\r\n        font-weight: 600;\r\n        color: $white;\r\n        cursor: pointer;\r\n        @include breakpoint(medium) {\r\n            font-size: 1rem;\r\n            width: 100px;\r\n        }\r\n    }\r\n\r\n    &__btn:hover {\r\n        background-color: $blue-transparent;\r\n    }\r\n}",".closing-cross {\r\n    width: 30px;\r\n    height: 30px;\r\n    font-size: 1.125rem;\r\n    border-radius: 100%;\r\n    box-shadow: 1px 2px 2px $closing-cross-boxShasow;\r\n    border: 1px solid $light-gray;\r\n    @include flexCenter;\r\n\r\n    &:hover {\r\n        color:$blue-transparent;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");

})();

/******/ })()
;
//# sourceMappingURL=8577141432771e9c8fd8.js.map