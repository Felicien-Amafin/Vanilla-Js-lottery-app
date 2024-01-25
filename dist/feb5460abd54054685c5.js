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
  user-select: none;
  position: relative;
}

.none {
  display: none;
}

@keyframes fade-slide-in {
  from {
    transform: translateY(-5rem);
  }
  to {
    transform: translateY(0);
  }
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

li {
  list-style: none;
}

header {
  width: 100%;
}
header h1 {
  height: 120px;
  background-color: rgb(19, 19, 107);
  color: white;
  font-size: 1.5rem;
  padding: 10px 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
}
@media (min-width: 36rem) {
  header h1 {
    font-size: 28px;
  }
}
@media (min-width: 48rem) {
  header h1 {
    font-size: 2.25rem;
  }
}
@media (min-width: 75rem) {
  header h1 {
    font-size: 2.5rem;
  }
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
  background-color: white;
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
  color: rgb(34, 33, 33);
  text-align: center;
  margin-bottom: 50px;
}
@media (min-width: 48rem) {
  .last-results__title {
    font-size: 1.5rem;
  }
}
@media (min-width: 75rem) {
  .last-results__title {
    font-size: 1.625rem;
  }
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
  color: rgb(34, 33, 33);
}
@media (min-width: 48rem) {
  .draw__date {
    font-size: 1rem;
  }
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
  font-size: 0.875rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  border-radius: 15px;
  box-shadow: 1px 2px 2px lightgray;
  border: 1px solid rgba(233, 230, 230, 0.425);
  background-color: white;
}
@media (min-width: 48rem) {
  .simulator .menu {
    font-size: 1rem;
  }
}
.simulator li {
  list-style: disc;
}
.simulator li:hover {
  color: rgb(19, 19, 107);
  font-weight: 600;
  cursor: pointer;
}

.keyboard-container {
  width: 100%;
  padding: 20px;
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5000;
  animation: fade-slide-in 0.7s ease-out forwards;
}

.numbers-occurences {
  width: 90%;
  position: relative;
}
.numbers-occurences__title {
  width: 100%;
  min-height: 40px;
  text-align: center;
  padding: 30px;
  color: white;
  background-color: rgb(19, 19, 107);
  font-size: 1.375rem;
  margin-bottom: 20px;
}
@media (min-width: 48rem) {
  .numbers-occurences__title {
    font-size: 1.625rem;
  }
}
@media (min-width: 75rem) {
  .numbers-occurences__title {
    font-size: 1.875rem;
  }
}
.numbers-occurences .occurences-boards {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}
@media (min-width: 36rem) {
  .numbers-occurences .occurences-boards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row: repeat(3, auto);
  }
}
@media (min-width: 62rem) {
  .numbers-occurences .occurences-boards {
    grid-template-columns: repeat(4, 1fr);
    grid-row: repeat(2, auto);
  }
}
@media (min-width: 87.5rem) {
  .numbers-occurences .occurences-boards {
    grid-template-columns: repeat(4, 1fr);
    grid-row: repeat(2, auto);
  }
}

.yellowBs-top10 {
  width: 90%;
  position: relative;
  max-width: 700px;
}
.yellowBs-top10__title {
  width: 100%;
  min-height: 40px;
  text-align: center;
  padding: 30px;
  color: white;
  background-color: rgb(19, 19, 107);
  font-size: 1.375rem;
  margin-bottom: 20px;
}
@media (min-width: 48rem) {
  .yellowBs-top10__title {
    font-size: 1.625rem;
  }
}
@media (min-width: 75rem) {
  .yellowBs-top10__title {
    font-size: 1.875rem;
  }
}

.num-soulmate {
  width: 90%;
  max-width: 500px;
  position: relative;
  animation: fade-slide-in 0.7s ease-out forwards;
}
.num-soulmate__title {
  line-height: 32px;
  width: 100%;
  min-height: 40px;
  text-align: center;
  padding: 30px;
  color: white;
  background-color: rgb(19, 19, 107);
  font-size: 1.375rem;
  margin-bottom: 20px;
}
@media (min-width: 48rem) {
  .num-soulmate__title {
    font-size: 1.625rem;
  }
}
@media (min-width: 75rem) {
  .num-soulmate__title {
    font-size: 1.875rem;
  }
}
@media (min-width: 48rem) {
  .num-soulmate__title {
    font-size: 1.375rem;
  }
}
@media (min-width: 75rem) {
  .num-soulmate__title {
    font-size: 1.375rem;
  }
}
.num-soulmate__bubble {
  min-height: 340px;
  padding: 20px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  border-radius: 15px;
  box-shadow: 1px 2px 2px lightgray;
  border: 1px solid rgba(233, 230, 230, 0.425);
  background-color: white;
}
.num-soulmate__instruction {
  font-size: 14px;
  color: grey;
  text-align: center;
}
.num-soulmate .checkboxes {
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 15px;
}
.num-soulmate .checkbox {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
}
.num-soulmate label {
  font-weight: 600;
}
.num-soulmate .blue-b {
  font-size: 1rem;
  color: rgb(19, 19, 107);
}
.num-soulmate .yellow-b {
  font-size: 1rem;
  color: rgb(255, 217, 0);
}
.num-soulmate .number-input {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 40px;
  width: 100%;
  max-width: 400px;
  height: 40px;
}
.num-soulmate input {
  width: 100%;
  max-width: 80px;
  height: 100%;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 10px;
}
.num-soulmate input::-webkit-outer-spin-button,
.num-soulmate input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.num-soulmate input[type=number] {
  -moz-appearance: textfield;
}
.num-soulmate span {
  font-size: 1rem;
  color: rgb(34, 33, 33);
  font-weight: 500;
}
.num-soulmate__error-mess {
  text-align: center;
  color: red;
  font-size: 0.75rem;
  font-weight: 400;
}

/* \$gray: rgba(233, 230, 230, 0.425); */
.ball {
  width: 35px;
  height: 35px;
  border-radius: 100px;
  color: white;
  font-weight: 700;
  font-size: 0.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (min-width: 48rem) {
  .ball {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
}
.ball--blue {
  background-color: rgb(19, 19, 107);
}
.ball--yellow {
  background-color: rgb(255, 217, 0);
}

/* @import '../base/colors';
@import '../base/mixins'; */
.keyboard {
  width: 100%;
  padding: 40px;
  gap: 40px;
  position: relative;
  z-index: 10000;
  background-color: white;
  border-radius: 15px;
  box-shadow: 1px 2px 2px lightgray;
  border: 1px solid rgba(233, 230, 230, 0.425);
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  /*  @include breakpoint(large) {
       display: grid;
       grid-template-columns: repeat(3, 1fr);
       grid-template-rows: repeat(4, 1fr);
       row-gap: 20px;
       column-gap: 10px;
   } */
}
@media (min-width: 48rem) {
  .keyboard .yellow-keys {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
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
.keyboard__key:hover {
  box-shadow: 2px 3px 2px rgb(228, 226, 226);
}
@media (min-width: 48rem) {
  .keyboard__key {
    width: 37px;
    height: 37px;
    font-size: 1rem;
  }
}
.keyboard__key--blue {
  color: rgb(19, 19, 107);
}
.keyboard__key--yellow {
  color: rgb(255, 217, 0);
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
  background-color: rgb(255, 217, 0);
}
.keyboard__result-config {
  font-size: 0.875rem;
  color: rgb(34, 33, 33);
}
.keyboard__select {
  border: 1px solid rgb(19, 19, 107);
  border-radius: 4px;
  padding: 3px;
  background-color: white;
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

.closing-cross {
  width: 25px;
  height: 25px;
  font-size: 0.875rem;
  border-radius: 100%;
  border: 1px solid lightgray;
  background-color: white;
  position: absolute;
  top: 7px;
  right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.closing-cross--board {
  border: none;
}
.closing-cross--keyboard {
  box-shadow: 1px 2px 2px rgb(247, 246, 246);
}
.closing-cross:hover {
  color: rgba(19, 19, 107, 0.699);
  cursor: pointer;
}

.overlay {
  width: 100%;
  position: absolute;
  top: 0;
  min-height: 100vh;
  background-color: rgba(226, 221, 221, 0.562);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.board {
  z-index: 10000;
  background-color: white;
  box-shadow: 3px 4px 4px grey;
  width: 100%;
}
.board__cells {
  width: 100%;
  border-bottom: 1px solid lightgray;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
}
.board__cell {
  text-align: center;
  font-size: 0.875rem;
  font-weight: 600;
  color: rgb(34, 33, 33);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
@media (min-width: 75rem) {
  .board__cell {
    font-size: 1rem;
  }
}
.board__cell--blue {
  color: rgb(19, 19, 107);
}
.board__cell--yellow {
  color: rgb(255, 217, 0);
  margin-right: 10px;
}

.btn {
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
  .btn {
    font-size: 1rem;
    width: 100px;
  }
}
.btn:hover {
  background-color: rgba(19, 19, 107, 0.699);
}`, "",{"version":3,"sources":["webpack://./src/scss/base/_base.scss","webpack://./src/scss/main.scss","webpack://./src/scss/base/_colors.scss","webpack://./src/scss/base/_typography.scss","webpack://./src/scss/layout/_header.scss","webpack://./src/scss/base/_mixins.scss","webpack://./src/scss/layout/_last-results.scss","webpack://./src/scss/layout/_simulator.scss","webpack://./src/scss/layout/_keyboard-container.scss","webpack://./src/scss/layout/_numbers-occurences.scss","webpack://./src/scss/layout/_yellow-balls-top10.scss","webpack://./src/scss/layout/_number-soulmate.scss","webpack://./src/scss/components/_balls.scss","webpack://./src/scss/components/_keyboard.scss","webpack://./src/scss/components/_closing-cross.scss","webpack://./src/scss/components/_overlay.scss","webpack://./src/scss/components/_board.scss","webpack://./src/scss/components/_btn.scss"],"names":[],"mappings":"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","sourcesContent":["// Font\r\n@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap');\r\n\r\n// Resets\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nhtml {\r\n    font-size: 100%;\r\n}\r\n\r\nbody {\r\n    min-height: 100vh;\r\n    font-family: 'Sora', sans-serif;\r\n    user-select: none;\r\n    position: relative;\r\n}\r\n\r\n.none {\r\n    display: none;\r\n}\r\n\r\n// Animations\r\n@keyframes fade-slide-in {\r\n    from {\r\n      transform: translateY(-5rem);\r\n    }\r\n    to {\r\n      transform: translateY(0);\r\n    }\r\n  }","@import url(\"https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap\");\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 100%;\n}\n\nbody {\n  min-height: 100vh;\n  font-family: \"Sora\", sans-serif;\n  user-select: none;\n  position: relative;\n}\n\n.none {\n  display: none;\n}\n\n@keyframes fade-slide-in {\n  from {\n    transform: translateY(-5rem);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n/* $gray: rgba(233, 230, 230, 0.425); */\n/* @import './colors'; */\n.underline {\n  text-decoration: underline;\n  text-underline-offset: 10px;\n  text-decoration-color: rgb(19, 19, 107);\n  text-decoration-thickness: 3px;\n}\n\n.a-Clicked {\n  font-weight: 600;\n}\n\na {\n  cursor: pointer;\n}\n\nli {\n  list-style: none;\n}\n\nheader {\n  width: 100%;\n}\nheader h1 {\n  height: 120px;\n  background-color: rgb(19, 19, 107);\n  color: white;\n  font-size: 1.5rem;\n  padding: 10px 20px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 700;\n}\n@media (min-width: 36rem) {\n  header h1 {\n    font-size: 28px;\n  }\n}\n@media (min-width: 48rem) {\n  header h1 {\n    font-size: 2.25rem;\n  }\n}\n@media (min-width: 75rem) {\n  header h1 {\n    font-size: 2.5rem;\n  }\n}\nheader .nav {\n  width: 80%;\n  max-width: 400px;\n  height: 70px;\n  margin: 15px auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-evenly;\n  border-radius: 15px;\n  box-shadow: 1px 2px 2px lightgray;\n  border: 1px solid rgba(233, 230, 230, 0.425);\n  background-color: white;\n}\nheader a {\n  font-size: 1rem;\n  color: rgb(19, 19, 107);\n}\n\n.last-results {\n  padding: 0 15px;\n  margin-top: 2.5rem;\n  gap: 50px;\n}\n.last-results__title {\n  font-size: 1.375rem;\n  color: rgb(34, 33, 33);\n  text-align: center;\n  margin-bottom: 50px;\n}\n@media (min-width: 48rem) {\n  .last-results__title {\n    font-size: 1.5rem;\n  }\n}\n@media (min-width: 75rem) {\n  .last-results__title {\n    font-size: 1.625rem;\n  }\n}\n\n.draw {\n  gap: 20px;\n  margin-bottom: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.draw__date {\n  font-size: 0.875rem;\n  color: rgb(34, 33, 33);\n}\n@media (min-width: 48rem) {\n  .draw__date {\n    font-size: 1rem;\n  }\n}\n.draw__balls {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.draw__balls-5 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  gap: 5px;\n  flex-wrap: wrap;\n}\n.draw__balls-2 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  gap: 5px;\n}\n\n/* $gray: rgba(233, 230, 230, 0.425); */\n.simulator {\n  width: 100%;\n  margin-top: 40px;\n}\n.simulator .menu {\n  padding: 40px;\n  min-height: 250px;\n  width: 80%;\n  max-width: 500px;\n  margin: auto;\n  font-size: 0.875rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 20px;\n  border-radius: 15px;\n  box-shadow: 1px 2px 2px lightgray;\n  border: 1px solid rgba(233, 230, 230, 0.425);\n  background-color: white;\n}\n@media (min-width: 48rem) {\n  .simulator .menu {\n    font-size: 1rem;\n  }\n}\n.simulator li {\n  list-style: disc;\n}\n.simulator li:hover {\n  color: rgb(19, 19, 107);\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.keyboard-container {\n  width: 100%;\n  padding: 20px;\n  max-width: 800px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 5000;\n  animation: fade-slide-in 0.7s ease-out forwards;\n}\n\n.numbers-occurences {\n  width: 90%;\n  position: relative;\n}\n.numbers-occurences__title {\n  width: 100%;\n  min-height: 40px;\n  text-align: center;\n  padding: 30px;\n  color: white;\n  background-color: rgb(19, 19, 107);\n  font-size: 1.375rem;\n  margin-bottom: 20px;\n}\n@media (min-width: 48rem) {\n  .numbers-occurences__title {\n    font-size: 1.625rem;\n  }\n}\n@media (min-width: 75rem) {\n  .numbers-occurences__title {\n    font-size: 1.875rem;\n  }\n}\n.numbers-occurences .occurences-boards {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 20px;\n}\n@media (min-width: 36rem) {\n  .numbers-occurences .occurences-boards {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-row: repeat(3, auto);\n  }\n}\n@media (min-width: 62rem) {\n  .numbers-occurences .occurences-boards {\n    grid-template-columns: repeat(4, 1fr);\n    grid-row: repeat(2, auto);\n  }\n}\n@media (min-width: 87.5rem) {\n  .numbers-occurences .occurences-boards {\n    grid-template-columns: repeat(4, 1fr);\n    grid-row: repeat(2, auto);\n  }\n}\n\n.yellowBs-top10 {\n  width: 90%;\n  position: relative;\n  max-width: 700px;\n}\n.yellowBs-top10__title {\n  width: 100%;\n  min-height: 40px;\n  text-align: center;\n  padding: 30px;\n  color: white;\n  background-color: rgb(19, 19, 107);\n  font-size: 1.375rem;\n  margin-bottom: 20px;\n}\n@media (min-width: 48rem) {\n  .yellowBs-top10__title {\n    font-size: 1.625rem;\n  }\n}\n@media (min-width: 75rem) {\n  .yellowBs-top10__title {\n    font-size: 1.875rem;\n  }\n}\n\n.num-soulmate {\n  width: 90%;\n  max-width: 500px;\n  position: relative;\n  animation: fade-slide-in 0.7s ease-out forwards;\n}\n.num-soulmate__title {\n  line-height: 32px;\n  width: 100%;\n  min-height: 40px;\n  text-align: center;\n  padding: 30px;\n  color: white;\n  background-color: rgb(19, 19, 107);\n  font-size: 1.375rem;\n  margin-bottom: 20px;\n}\n@media (min-width: 48rem) {\n  .num-soulmate__title {\n    font-size: 1.625rem;\n  }\n}\n@media (min-width: 75rem) {\n  .num-soulmate__title {\n    font-size: 1.875rem;\n  }\n}\n@media (min-width: 48rem) {\n  .num-soulmate__title {\n    font-size: 1.375rem;\n  }\n}\n@media (min-width: 75rem) {\n  .num-soulmate__title {\n    font-size: 1.375rem;\n  }\n}\n.num-soulmate__bubble {\n  min-height: 340px;\n  padding: 20px 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 40px;\n  border-radius: 15px;\n  box-shadow: 1px 2px 2px lightgray;\n  border: 1px solid rgba(233, 230, 230, 0.425);\n  background-color: white;\n}\n.num-soulmate__instruction {\n  font-size: 14px;\n  color: grey;\n  text-align: center;\n}\n.num-soulmate .checkboxes {\n  width: 90%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  gap: 15px;\n}\n.num-soulmate .checkbox {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  width: 100%;\n}\n.num-soulmate label {\n  font-weight: 600;\n}\n.num-soulmate .blue-b {\n  font-size: 1rem;\n  color: rgb(19, 19, 107);\n}\n.num-soulmate .yellow-b {\n  font-size: 1rem;\n  color: rgb(255, 217, 0);\n}\n.num-soulmate .number-input {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  gap: 40px;\n  width: 100%;\n  max-width: 400px;\n  height: 40px;\n}\n.num-soulmate input {\n  width: 100%;\n  max-width: 80px;\n  height: 100%;\n  padding: 10px;\n  border: 1px solid lightgray;\n  border-radius: 10px;\n}\n.num-soulmate input::-webkit-outer-spin-button,\n.num-soulmate input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.num-soulmate input[type=number] {\n  -moz-appearance: textfield;\n}\n.num-soulmate span {\n  font-size: 1rem;\n  color: rgb(34, 33, 33);\n  font-weight: 500;\n}\n.num-soulmate__error-mess {\n  text-align: center;\n  color: red;\n  font-size: 0.75rem;\n  font-weight: 400;\n}\n\n/* $gray: rgba(233, 230, 230, 0.425); */\n.ball {\n  width: 35px;\n  height: 35px;\n  border-radius: 100px;\n  color: white;\n  font-weight: 700;\n  font-size: 0.875rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media (min-width: 48rem) {\n  .ball {\n    width: 40px;\n    height: 40px;\n    font-size: 1rem;\n  }\n}\n.ball--blue {\n  background-color: rgb(19, 19, 107);\n}\n.ball--yellow {\n  background-color: rgb(255, 217, 0);\n}\n\n/* @import '../base/colors';\n@import '../base/mixins'; */\n.keyboard {\n  width: 100%;\n  padding: 40px;\n  gap: 40px;\n  position: relative;\n  z-index: 10000;\n  background-color: white;\n  border-radius: 15px;\n  box-shadow: 1px 2px 2px lightgray;\n  border: 1px solid rgba(233, 230, 230, 0.425);\n  background-color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.keyboard__instruction {\n  font-size: 0.875rem;\n  font-weight: 400;\n  color: grey;\n  margin-right: 20px;\n}\n@media (min-width: 48rem) {\n  .keyboard__instruction {\n    font-size: 1rem;\n  }\n}\n.keyboard .keys-container {\n  flex-wrap: wrap;\n  gap: 35px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n}\n@media (min-width: 48rem) {\n  .keyboard .keys-container {\n    display: grid;\n    grid-template-columns: auto auto;\n    grid-template-rows: auto;\n  }\n}\n.keyboard .blue-keys {\n  flex-wrap: wrap;\n  row-gap: 20px;\n  column-gap: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n}\n@media (min-width: 48rem) {\n  .keyboard .blue-keys {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n  }\n}\n.keyboard .yellow-keys {\n  flex-wrap: wrap;\n  column-gap: 10px;\n  row-gap: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  /*  @include breakpoint(large) {\n       display: grid;\n       grid-template-columns: repeat(3, 1fr);\n       grid-template-rows: repeat(4, 1fr);\n       row-gap: 20px;\n       column-gap: 10px;\n   } */\n}\n@media (min-width: 48rem) {\n  .keyboard .yellow-keys {\n    display: grid;\n    gap: 10px;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(6, 1fr);\n  }\n}\n.keyboard__key {\n  width: 35px;\n  height: 35px;\n  font-weight: 600;\n  box-shadow: 3px 4px 3px rgb(228, 226, 226);\n  border-radius: 100%;\n  border: 1px solid rgb(245, 243, 243);\n  background-color: white;\n  font-size: 0.875rem;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  list-style: none;\n}\n.keyboard__key:hover {\n  box-shadow: 2px 3px 2px rgb(228, 226, 226);\n}\n@media (min-width: 48rem) {\n  .keyboard__key {\n    width: 37px;\n    height: 37px;\n    font-size: 1rem;\n  }\n}\n.keyboard__key--blue {\n  color: rgb(19, 19, 107);\n}\n.keyboard__key--yellow {\n  color: rgb(255, 217, 0);\n}\n.keyboard__key--blue:hover {\n  color: rgba(19, 19, 107, 0.699);\n}\n.keyboard__key--yellow:hover {\n  color: rgba(255, 230, 0, 0.63);\n}\n.keyboard__keyClicked--blue {\n  color: white;\n  background-color: rgb(19, 19, 107);\n}\n.keyboard__keyClicked--yellow {\n  color: white;\n  background-color: rgb(255, 217, 0);\n}\n.keyboard__result-config {\n  font-size: 0.875rem;\n  color: rgb(34, 33, 33);\n}\n.keyboard__select {\n  border: 1px solid rgb(19, 19, 107);\n  border-radius: 4px;\n  padding: 3px;\n  background-color: white;\n}\n.keyboard__result-config {\n  max-width: 400px;\n  text-align: center;\n  line-height: 24px;\n  font-size: 0.875rem;\n}\n@media (min-width: 48rem) {\n  .keyboard__result-config {\n    font-size: 1rem;\n  }\n}\n\n.closing-cross {\n  width: 25px;\n  height: 25px;\n  font-size: 0.875rem;\n  border-radius: 100%;\n  border: 1px solid lightgray;\n  background-color: white;\n  position: absolute;\n  top: 7px;\n  right: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.closing-cross--board {\n  border: none;\n}\n.closing-cross--keyboard {\n  box-shadow: 1px 2px 2px rgb(247, 246, 246);\n}\n.closing-cross:hover {\n  color: rgba(19, 19, 107, 0.699);\n  cursor: pointer;\n}\n\n.overlay {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  min-height: 100vh;\n  background-color: rgba(226, 221, 221, 0.562);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.board {\n  z-index: 10000;\n  background-color: white;\n  box-shadow: 3px 4px 4px grey;\n  width: 100%;\n}\n.board__cells {\n  width: 100%;\n  border-bottom: 1px solid lightgray;\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-evenly;\n}\n.board__cell {\n  text-align: center;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: rgb(34, 33, 33);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n@media (min-width: 75rem) {\n  .board__cell {\n    font-size: 1rem;\n  }\n}\n.board__cell--blue {\n  color: rgb(19, 19, 107);\n}\n.board__cell--yellow {\n  color: rgb(255, 217, 0);\n  margin-right: 10px;\n}\n\n.btn {\n  width: 90px;\n  height: 40px;\n  background-color: rgb(19, 19, 107);\n  border: none;\n  border-radius: 30px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: white;\n  cursor: pointer;\n}\n@media (min-width: 48rem) {\n  .btn {\n    font-size: 1rem;\n    width: 100px;\n  }\n}\n.btn:hover {\n  background-color: rgba(19, 19, 107, 0.699);\n}","$white: white;\r\n$blue: rgb(19, 19, 107);\r\n$blue-transparent: rgba(19, 19, 107, 0.699);\r\n/* $gray: rgba(233, 230, 230, 0.425); */\r\n$gray: rgba(233, 230, 230, 0.425);\r\n$light-gray: lightgray;\r\n$black: rgb(34, 33, 33);\r\n$red: red;\r\n$yellow: rgb(255, 217, 0);\r\n$yellow-transparent: rgba(255, 230, 0, 0.63);\r\n$grey: grey;\r\n$keyboard-key-border: rgb(245, 243, 243);\r\n$keyboard-key-boxShadow: rgb(228, 226, 226);\r\n$closing-cross-border: rgb(245, 245, 245);\r\n$closing-cross-boxShasow: rgb(247, 246, 246);\r\n$overlay: rgba(226, 221, 221, 0.562);","/* @import './colors'; */\r\n\r\n.underline {\r\n    text-decoration: underline;\r\n    text-underline-offset: 10px;\r\n    text-decoration-color: $blue;\r\n    text-decoration-thickness: 3px;\r\n}\r\n\r\n.a-Clicked {\r\n    font-weight: 600;\r\n}\r\n\r\na {\r\n    cursor: pointer;\r\n}\r\n\r\nli {\r\n    list-style: none;\r\n}","\r\nheader {\r\n    width: 100%;\r\n    h1 {\r\n        height: 120px;\r\n        background-color: $blue;\r\n        color: $white;\r\n        font-size: 1.5rem;\r\n        padding: 10px 20px;\r\n        text-align: center;\r\n        @include flexCenter;\r\n        font-weight: 700;\r\n        @include breakpoint(small) {\r\n            font-size: 28px;\r\n        }\r\n        @include breakpoint(medium) {\r\n            font-size: 2.25rem;\r\n        }\r\n        @include breakpoint(x-large) {\r\n            font-size: 2.5rem;\r\n        }\r\n    }\r\n\r\n    .nav {\r\n        width: 80%;\r\n        max-width: 400px;\r\n        height: 70px;\r\n        margin: 15px auto;\r\n        @include flex-row;\r\n        justify-content: space-evenly;\r\n        @include stylingForBox;\r\n    }\r\n\r\n    a { \r\n        font-size: 1rem;\r\n        color: $blue;\r\n    }\r\n}","$breakpoints: (\r\n    'small': '36rem', // ≥576px\r\n    'small-medium': '42rem', // ≥676px\r\n    'medium': '48rem', // ≥768px\r\n    'large': '62rem', // ≥992p\r\n    'x-large': '75rem', // ≥1200px\r\n    'xx-large': '87.5rem', // ≥1400px\r\n);\r\n\r\n@mixin breakpoint($size) {\r\n\t@media (min-width: map-get($breakpoints, $size)) {\r\n\t\t@content;\r\n\t}\r\n}\r\n\r\n@mixin flexCenter {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n@mixin stylingForBox {\r\n    border-radius: 15px;\r\n    box-shadow: 1px 2px 2px $light-gray;\r\n    border: 1px solid $gray;\r\n    background-color: $white;\r\n}\r\n\r\n@mixin flex-column {\r\n    @include flexCenter;\r\n    flex-direction: column;\r\n}\r\n\r\n@mixin flex-row {\r\n    @include flexCenter;\r\n    flex-direction: row;\r\n}\r\n\r\n@mixin boardTitle {\r\n    width: 100%;\r\n    min-height: 40px;\r\n    text-align: center;\r\n    padding: 30px;\r\n    color: $white;\r\n    background-color: $blue;\r\n    font-size: 1.375rem;\r\n    margin-bottom: 20px;\r\n    @include breakpoint(medium) {\r\n        font-size: 1.625rem;\r\n    }\r\n    @include breakpoint(x-large) {\r\n        font-size: 1.875rem;\r\n    }\r\n}",".last-results {\r\n    padding: 0 15px;\r\n    margin-top: 2.5rem;\r\n    gap: 50px;\r\n\r\n    &__title {\r\n        font-size: 1.375rem;\r\n        color: $black;\r\n        text-align: center;\r\n        margin-bottom: 50px;\r\n        @include breakpoint(medium) {\r\n            font-size: 1.5rem;\r\n        }\r\n        @include breakpoint(x-large) {\r\n            font-size: 1.625rem;\r\n        }\r\n    }\r\n}\r\n\r\n\r\n.draw {\r\n    gap: 20px;\r\n    margin-bottom: 50px;\r\n    @include flex-column;\r\n\r\n    &__date {\r\n        font-size: 0.875rem;\r\n        color: $black;\r\n        @include breakpoint(medium) {\r\n            font-size: 1rem;\r\n        }\r\n    }\r\n\r\n    &__balls {\r\n        @include flex-row;\r\n        gap: 10px;\r\n        flex-wrap: wrap;\r\n    }\r\n\r\n    &__balls-5 {\r\n        @include flex-row;\r\n        gap: 5px;\r\n        flex-wrap: wrap;\r\n    }\r\n\r\n    &__balls-2 {\r\n        @include flex-row;\r\n        gap: 5px;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n","@import '../base/colors';\r\n\r\n.simulator {\r\n    width: 100%;\r\n    margin-top: 40px;\r\n    .menu {\r\n        padding: 40px;\r\n        min-height: 250px;\r\n        width: 80%;\r\n        max-width: 500px;\r\n        margin: auto;\r\n        font-size: 0.875rem;\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        gap: 20px;\r\n        @include stylingForBox;\r\n        @include breakpoint(medium) {\r\n            font-size: 1rem;\r\n        }\r\n    }\r\n\r\n    li {\r\n        list-style: disc;\r\n    }\r\n\r\n    li:hover {\r\n        color: $blue;\r\n        font-weight: 600;\r\n        cursor: pointer;\r\n    }\r\n}\r\n",".keyboard-container {\r\n    width: 100%;\r\n    padding: 20px;\r\n    max-width: 800px;\r\n    @include flexCenter;\r\n    z-index: 5000;\r\n    animation: fade-slide-in 0.7s ease-out forwards;\r\n}",".numbers-occurences {\r\n    width: 90%;\r\n    position: relative;\r\n\r\n    &__title {\r\n        @include boardTitle;\r\n    }\r\n\r\n    .occurences-boards {\r\n        width: 100%;\r\n        @include flex-column;\r\n        gap: 20px;\r\n        @include breakpoint(small) {\r\n            display: grid;\r\n            grid-template-columns: repeat(2, 1fr);\r\n            grid-row: repeat(3, auto);\r\n        }\r\n        @include breakpoint(large) {\r\n            grid-template-columns: repeat(4, 1fr);\r\n            grid-row: repeat(2, auto);\r\n        }\r\n        @include breakpoint(xx-large) {\r\n            grid-template-columns: repeat(4, 1fr);\r\n            grid-row: repeat(2, auto);\r\n        }\r\n    }\r\n}\r\n",".yellowBs-top10 {\r\n    width: 90%;\r\n    position: relative;\r\n    max-width: 700px;\r\n\r\n    &__title {\r\n        @include boardTitle;\r\n    }\r\n}",".num-soulmate {\r\n    width: 90%;\r\n    max-width: 500px;\r\n    position: relative;\r\n    animation: fade-slide-in 0.7s ease-out forwards;\r\n\r\n    &__title {\r\n        line-height: 32px;\r\n        @include boardTitle;\r\n        @include breakpoint(medium) {\r\n            font-size: 1.375rem;\r\n        }\r\n        @include breakpoint(x-large) {\r\n            font-size: 1.375rem;\r\n        }\r\n    }\r\n\r\n    &__bubble {\r\n        min-height: 340px;\r\n        padding: 20px 30px;\r\n        @include flex-column;\r\n        gap: 40px;\r\n        @include stylingForBox;\r\n    }\r\n\r\n    &__instruction {\r\n        font-size: 14px;\r\n        color: $grey;\r\n        text-align: center;\r\n    }\r\n\r\n    .checkboxes {\r\n        width: 90%;\r\n        @include flex-row;\r\n        gap: 15px;\r\n    }\r\n\r\n    .checkbox {\r\n        @include flex-row;\r\n        width: 100%;\r\n    }\r\n\r\n    label {\r\n        font-weight: 600;\r\n    }\r\n\r\n    .blue-b {\r\n        font-size: 1rem;\r\n        color: $blue;\r\n    }\r\n\r\n    .yellow-b {\r\n        font-size: 1rem;\r\n        color: $yellow;\r\n    }\r\n\r\n    .number-input {\r\n        @include flex-row;\r\n        gap: 40px;\r\n        width: 100%;\r\n        max-width: 400px;\r\n        height: 40px;\r\n    }\r\n\r\n    input {\r\n        width: 100%;\r\n        max-width: 80px;\r\n        height: 100%;\r\n        padding: 10px;\r\n        border: 1px solid $light-gray;\r\n        border-radius: 10px;\r\n    }\r\n\r\n    input::-webkit-outer-spin-button,\r\n    input::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n    margin: 0;\r\n    }\r\n\r\n    input[type=number] {\r\n    -moz-appearance: textfield;\r\n    }\r\n\r\n    span {\r\n        font-size: 1rem;\r\n        color: $black;\r\n        font-weight: 500;\r\n    }\r\n\r\n    &__error-mess {\r\n        text-align: center;\r\n        color: $red;\r\n        font-size: 0.75rem;\r\n        font-weight: 400;\r\n    }\r\n}","@import '../base/colors';\r\n@import '../base/mixins';\r\n\r\n.ball {\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 100px;\r\n    color: $white;\r\n    font-weight: 700;\r\n    font-size: 0.875rem;\r\n    @include flexCenter;\r\n    @include breakpoint(medium) {\r\n        width: 40px;\r\n        height: 40px;\r\n        font-size: 1rem;\r\n    }\r\n\r\n    &--blue {\r\n        background-color: $blue;\r\n    }\r\n\r\n    &--yellow {\r\n        background-color: $yellow;\r\n    }\r\n}","/* @import '../base/colors';\r\n@import '../base/mixins'; */\r\n\r\n.keyboard {\r\n    width: 100%;\r\n    padding: 40px;\r\n    gap: 40px;\r\n    position: relative;\r\n    z-index: 10000;\r\n    background-color: $white;\r\n    @include stylingForBox;\r\n    @include flex-column;\r\n\r\n    &__instruction {\r\n        font-size: 0.875rem;\r\n        font-weight: 400;\r\n        color: $grey;\r\n        margin-right: 20px;\r\n        @include breakpoint(medium) {\r\n            font-size: 1rem;\r\n        }\r\n    }\r\n\r\n    .keys-container {\r\n        flex-wrap: wrap;\r\n        gap: 35px;\r\n        @include flex-row;\r\n        @include breakpoint(medium) {\r\n            display: grid;\r\n            grid-template-columns: auto auto;\r\n            grid-template-rows: auto;\r\n        }\r\n    }\r\n\r\n    .blue-keys {\r\n        flex-wrap: wrap;\r\n        row-gap: 20px;\r\n        column-gap: 10px;\r\n        @include flex-row;\r\n        @include breakpoint(medium) {\r\n            display: grid;\r\n            grid-template-columns: repeat(10, 1fr);\r\n            grid-template-rows: repeat(5, 1fr);\r\n        }\r\n    }\r\n\r\n    .yellow-keys {\r\n        flex-wrap: wrap;\r\n        column-gap:10px;\r\n        row-gap: 20px;\r\n        @include flex-row;\r\n        @include breakpoint(medium) {\r\n            display: grid;\r\n            gap:10px;\r\n            grid-template-columns: repeat(2, 1fr);\r\n            grid-template-rows: repeat(6, 1fr);\r\n        }\r\n       /*  @include breakpoint(large) {\r\n            display: grid;\r\n            grid-template-columns: repeat(3, 1fr);\r\n            grid-template-rows: repeat(4, 1fr);\r\n            row-gap: 20px;\r\n            column-gap: 10px;\r\n        } */\r\n    }\r\n\r\n    &__key {\r\n        width: 35px;\r\n        height: 35px;\r\n        font-weight: 600;\r\n        box-shadow: 3px 4px 3px $keyboard-key-boxShadow;\r\n        border-radius: 100%;\r\n        border: 1px solid $keyboard-key-border;\r\n        background-color: $white;\r\n        font-size: 0.875rem;\r\n        cursor: pointer;\r\n        @include flexCenter;\r\n        list-style: none;\r\n        &:hover {\r\n            box-shadow: 2px 3px 2px $keyboard-key-boxShadow;\r\n        }\r\n        @include breakpoint(medium) {\r\n            width: 37px;\r\n            height: 37px;\r\n            font-size: 1rem;\r\n        }\r\n    }\r\n\r\n    &__key--blue {\r\n        color: $blue;\r\n    }\r\n\r\n    &__key--yellow {\r\n        color: $yellow;\r\n    }\r\n\r\n    &__key--blue:hover {\r\n        color: $blue-transparent;\r\n    }\r\n\r\n    &__key--yellow:hover {\r\n        color: $yellow-transparent;\r\n    }\r\n\r\n    &__keyClicked--blue {\r\n        color: $white;\r\n        background-color: $blue;\r\n    }\r\n\r\n    &__keyClicked--yellow {\r\n        color: $white;\r\n        background-color: $yellow;\r\n    }\r\n\r\n    &__result-config {\r\n        font-size: 0.875rem;\r\n        color: $black;\r\n    }\r\n\r\n    &__select {\r\n        border: 1px solid $blue;\r\n        border-radius: 4px;\r\n        padding: 3px;\r\n        background-color: $white;\r\n    }\r\n\r\n    &__result-config {\r\n        max-width: 400px;\r\n        text-align: center;\r\n        line-height: 24px;\r\n        font-size: 0.875rem;\r\n        @include breakpoint(medium) {\r\n            font-size: 1rem;\r\n        }\r\n    }\r\n}",".closing-cross {\r\n    width: 25px;\r\n    height: 25px;\r\n    font-size: 0.875rem;\r\n    border-radius: 100%;\r\n    border: 1px solid $light-gray;\r\n    background-color: $white;\r\n    position: absolute;\r\n    top: 7px;\r\n    right: 12px;\r\n    @include flex-column;\r\n\r\n    &--board {\r\n        border: none;\r\n    }\r\n\r\n    &--keyboard {\r\n        box-shadow: 1px 2px 2px $closing-cross-boxShasow;\r\n    }\r\n\r\n    &:hover {\r\n        color:$blue-transparent;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n\r\n",".overlay {\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    min-height: 100vh;\r\n    background-color: $overlay;\r\n    @include flex-column;\r\n}",".board {\r\n    z-index: 10000;\r\n    background-color: $white;\r\n    box-shadow: 3px 4px 4px $grey;\r\n    width: 100%;\r\n\r\n    &__cells {\r\n        width: 100%;\r\n        border-bottom: 1px solid $light-gray;\r\n        padding: 10px;\r\n        @include flex-row;\r\n        justify-content: space-evenly;\r\n    }\r\n\r\n    &__cell {\r\n        text-align: center;\r\n        font-size: 0.875rem;\r\n        font-weight: 600;\r\n        color: $black;\r\n        @include flex-column;\r\n        @include breakpoint(x-large) {\r\n            font-size: 1rem;\r\n        }\r\n    }\r\n\r\n    &__cell--blue {\r\n        color: $blue;\r\n    }\r\n\r\n    &__cell--yellow {\r\n        color: $yellow;\r\n        margin-right: 10px;\r\n    }\r\n}",".btn {\r\n    width: 90px;\r\n    height: 40px;\r\n    background-color: $blue;\r\n    border: none;\r\n    border-radius: 30px;\r\n    font-size: 0.875rem;\r\n    font-weight: 600;\r\n    color: $white;\r\n    cursor: pointer;\r\n    @include breakpoint(medium) {\r\n        font-size: 1rem;\r\n        width: 100px;\r\n    }\r\n    &:hover {\r\n        background-color: $blue-transparent;\r\n    }\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=feb5460abd54054685c5.js.map