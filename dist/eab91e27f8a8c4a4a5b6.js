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
.last-results__draws {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
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
.keyboard__advise {
  font-size: 0.875rem;
  font-weight: 400;
  color: grey;
  margin-right: 20px;
  text-align: center;
}
@media (min-width: 48rem) {
  .keyboard__advise {
    font-size: 1rem;
  }
}
.keyboard__keys {
  flex-wrap: wrap;
  gap: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
@media (min-width: 48rem) {
  .keyboard__keys {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto;
  }
}
.keyboard__blue-keys {
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
@media (min-width: 48rem) {
  .keyboard__blue-keys {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
}
.keyboard__yellow-keys {
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
@media (min-width: 48rem) {
  .keyboard__yellow-keys {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    row-gap: 20px;
    column-gap: 10px;
  }
}
.keyboard__config {
  font-size: 0.875rem;
  color: rgb(34, 33, 33);
  max-width: 400px;
  text-align: center;
  line-height: 24px;
  font-size: 0.875rem;
}
@media (min-width: 48rem) {
  .keyboard__config {
    font-size: 1rem;
  }
}

.ranking-board {
  width: 90%;
  position: relative;
  animation: fade-slide-in 0.6s ease-out forwards;
}
.ranking-board__boards {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}
@media (min-width: 36rem) {
  .ranking-board__boards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row: repeat(3, auto);
  }
}
@media (min-width: 62rem) {
  .ranking-board__boards {
    grid-template-columns: repeat(4, 1fr);
    grid-row: repeat(2, auto);
  }
}
@media (min-width: 87.5rem) {
  .ranking-board__boards {
    grid-template-columns: repeat(4, 1fr);
    grid-row: repeat(2, auto);
  }
}

.top10 {
  width: 90%;
  position: relative;
  animation: fade-slide-in 0.6s ease-out forwards;
  max-width: 700px;
}

.tools {
  width: 100%;
  margin-top: 40px;
}
.tools__menu {
  padding: 40px;
  min-height: 250px;
  width: 80%;
  max-width: 500px;
  margin: auto;
  font-size: 0.875rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  border-radius: 15px;
  box-shadow: 1px 2px 2px lightgray;
  border: 1px solid rgba(233, 230, 230, 0.425);
  background-color: white;
}
@media (min-width: 48rem) {
  .tools__menu {
    font-size: 1rem;
  }
}
.tools__menu li {
  list-style: disc;
}
.tools__menu li:hover {
  color: rgb(19, 19, 107);
  font-weight: 600;
  cursor: pointer;
}

.overlay {
  width: 100%;
  position: absolute;
  top: 0;
  min-height: 100vh;
  background-color: rgba(118, 118, 160, 0.301);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.search-handler {
  width: 90%;
  position: relative;
  animation: fade-slide-in 0.6s ease-out forwards;
  max-width: 500px;
}

.feedback {
  width: 90%;
  position: relative;
  animation: fade-slide-in 0.6s ease-out forwards;
  max-width: 400px;
}
.feedback__bubble {
  width: 100%;
  min-height: 200px;
  padding: 30px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 1px 2px 2px lightgray;
  border: 1px solid rgba(233, 230, 230, 0.425);
  background-color: white;
  gap: 30px;
}
.feedback__bubble .num {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 5px;
}
.feedback__bubble span {
  margin-right: 5px;
  font-size: 0.875rem;
}
@media (min-width: 48rem) {
  .feedback__bubble span {
    font-size: 1rem;
  }
}
.feedback__bubble .result-declaration {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}
.feedback__bubble .result-declaration .nowrap {
  text-wrap: nowrap;
}
.feedback__bubble--numBestFriends .result__list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
}
.feedback__bubble--numAppearences {
  min-height: 150px;
  max-height: 420px;
  overflow-y: scroll;
  justify-content: flex-start;
}
.feedback__bubble--message {
  min-height: 150px;
  color: rgb(19, 19, 107);
  font-size: 0.875rem;
  font-weight: 600;
  text-align: center;
}
@media (min-width: 48rem) {
  .feedback__bubble--message {
    font-size: 1rem;
  }
}

.draw {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
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

.keyboard-key {
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
.keyboard-key:hover {
  box-shadow: 2px 3px 2px rgb(228, 226, 226);
}
@media (min-width: 48rem) {
  .keyboard-key {
    width: 37px;
    height: 37px;
    font-size: 1rem;
  }
}
.keyboard-key--blue {
  color: rgb(19, 19, 107);
}
.keyboard-key--yellow {
  color: rgb(255, 217, 0);
}
.keyboard-key--blue:hover {
  color: rgba(19, 19, 107, 0.699);
}
.keyboard-key--yellow:hover {
  color: rgba(255, 230, 0, 0.63);
}
.keyboard-key__clicked--blue {
  color: white;
  background-color: rgb(19, 19, 107);
}
.keyboard-key__clicked--yellow {
  color: white;
  background-color: rgb(255, 217, 0);
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
.closing-cross--banner {
  border: none;
}
.closing-cross--keyboard {
  box-shadow: 1px 2px 2px rgb(247, 246, 246);
}
.closing-cross:hover {
  color: rgba(19, 19, 107, 0.699);
  cursor: pointer;
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
  width: 100%;
  font-size: 0.875rem;
  font-weight: 600;
  color: rgb(34, 33, 33);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
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
}

.search-form {
  min-height: 340px;
  padding: 30px;
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
.search-form__instruction {
  font-size: 0.75rem;
  color: grey;
  text-align: center;
}
.search-form__checkboxes {
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 15px;
}
.search-form .checkbox {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
}
.search-form .checkbox label {
  font-weight: 600;
}
.search-form .blue-b {
  font-size: 1rem;
  color: rgb(19, 19, 107);
}
.search-form .yellow-b {
  font-size: 1rem;
  color: rgb(255, 217, 0);
}
.search-form__input {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10px;
}
.search-form .number-input {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  max-width: 400px;
  height: 40px;
}
.search-form .number-input label {
  font-weight: 400;
  color: rgb(34, 33, 33);
}
.search-form input {
  width: 100%;
  max-width: 60px;
  height: 100%;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 10px;
}
.search-form input::-webkit-outer-spin-button,
.search-form input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.search-form input[type=number] {
  -moz-appearance: textfield;
}
.search-form__error-mess {
  text-align: center;
  color: red;
  font-size: 0.75rem;
  font-weight: 400;
}

.drowpDownInput {
  border: 1px solid rgb(19, 19, 107);
  border-radius: 4px;
  padding: 3px;
  background-color: white;
}

.blue-banner {
  width: 100%;
  min-height: 40px;
  text-align: center;
  padding: 30px;
  color: white;
  background-color: rgb(19, 19, 107);
  font-size: 1.375rem;
  margin-bottom: 20px;
  line-height: 38px;
}
@media (min-width: 48rem) {
  .blue-banner {
    font-size: 1.625rem;
  }
}
@media (min-width: 75rem) {
  .blue-banner {
    font-size: 1.875rem;
  }
}
@media (min-width: 48rem) {
  .blue-banner--med {
    font-size: 1.625rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/scss/base/_base.scss","webpack://./src/scss/main.scss","webpack://./src/scss/base/_colors.scss","webpack://./src/scss/base/_typography.scss","webpack://./src/scss/layout/_header.scss","webpack://./src/scss/base/_mixins.scss","webpack://./src/scss/layout/_last-results.scss","webpack://./src/scss/layout/_keyboard-container.scss","webpack://./src/scss/layout/_keyboard.scss","webpack://./src/scss/layout/_ranking-board.scss","webpack://./src/scss/layout/_top10.scss","webpack://./src/scss/layout/_tools.scss","webpack://./src/scss/layout/_overlay.scss","webpack://./src/scss/layout/_search-handler.scss","webpack://./src/scss/layout/_feedback.scss","webpack://./src/scss/components/_draw.scss","webpack://./src/scss/components/_balls.scss","webpack://./src/scss/components/_keyboard-key.scss","webpack://./src/scss/components/_closing-cross.scss","webpack://./src/scss/components/_board.scss","webpack://./src/scss/components/_btn.scss","webpack://./src/scss/components/_search-form.scss","webpack://./src/scss/components/_dropDownInput.scss","webpack://./src/scss/components/_blue-banner.scss"],"names":[],"mappings":"AAIA;EACI,sBAAA;EACA,SAAA;EACA,UAAA;ACFJ;;ADKA;EACI,eAAA;ACFJ;;ADKA;EACI,iBAAA;EACA,+BAAA;EACA,iBAAA;EACA,kBAAA;ACFJ;;ADKA;EACI,aAAA;ACFJ;;ADOA;EACI;IACI,4BAAA;ECJN;EDME;IACI,wBAAA;ECJN;AACF;AC1BA,uCAAA;ACHA,wBAAA;AAEA;EACI,0BAAA;EACA,2BAAA;EACA,uCDJG;ECKH,8BAAA;AF+BJ;;AE5BA;EACI,gBAAA;AF+BJ;;AE5BA;EACI,eAAA;AF+BJ;;AE5BA;EACI,gBAAA;AF+BJ;;AGhDA;EACI,WAAA;AHmDJ;AGlDI;EACI,aAAA;EACA,kCFJD;EEKC,YFNA;EEOA,iBAAA;EACA,kBAAA;EACA,kBAAA;ECOJ,aAAA;EACA,uBAAA;EACA,mBAAA;EDPI,gBAAA;AHsDR;AIvDC;EDPG;IAUQ,eAAA;EHwDV;AACF;AI5DC;EDPG;IAaQ,kBAAA;EH0DV;AACF;AIjEC;EDPG;IAgBQ,iBAAA;EH4DV;AACF;AGzDI;EACI,UAAA;EACA,gBAAA;EACA,YAAA;EACA,iBAAA;ECXJ,aAAA;EACA,uBAAA;EACA,mBAAA;EAiBA,mBAAA;EDNI,6BAAA;ECPJ,mBAAA;EACA,iCAAA;EACA,4CAAA;EACA,uBHzBI;AD+FR;AG9DI;EACI,eAAA;EACA,uBFlCD;ADkGP;;AKnGA;EACI,eAAA;EACA,kBAAA;EACA,SAAA;ALsGJ;AKpGI;EACI,mBAAA;EACA,sBJDA;EIEA,kBAAA;EACA,mBAAA;ALsGR;AIrGC;ECLG;IAMQ,iBAAA;ELwGV;AACF;AI1GC;ECLG;IASQ,mBAAA;EL0GV;AACF;AKvGI;EDFA,aAAA;EACA,uBAAA;EACA,mBAAA;EAYA,sBAAA;ECVI,SAAA;AL4GR;;AMhIA;EACI,WAAA;EACA,aAAA;EACA,gBAAA;EFaA,aAAA;EACA,uBAAA;EACA,mBAAA;EEbA,aAAA;EACA,+CAAA;ANqIJ;;AO3IA;EACI,WAAA;EACA,aAAA;EACA,SAAA;EACA,kBAAA;EACA,cAAA;EACA,uBNNI;EGsBJ,mBAAA;EACA,iCAAA;EACA,4CAAA;EACA,uBHzBI;EGgBJ,aAAA;EACA,uBAAA;EACA,mBAAA;EAYA,sBAAA;AJ8HJ;AOlJI;EACI,mBAAA;EACA,gBAAA;EACA,WNHD;EMIC,kBAAA;EACA,kBAAA;APoJR;AIzJC;EGAG;IAOQ,eAAA;EPsJV;AACF;AOnJI;EACI,eAAA;EACA,SAAA;EHPJ,aAAA;EACA,uBAAA;EACA,mBAAA;EAiBA,mBAAA;AJ6IJ;AItKC;EGWG;IAKQ,aAAA;IACA,gCAAA;IACA,wBAAA;EP0JV;AACF;AOvJI;EACI,eAAA;EACA,aAAA;EACA,gBAAA;EHnBJ,aAAA;EACA,uBAAA;EACA,mBAAA;EAiBA,mBAAA;AJ6JJ;AItLC;EGsBG;IAMQ,aAAA;IACA,sCAAA;IACA,kCAAA;EP8JV;AACF;AO3JI;EACI,eAAA;EACA,gBAAA;EACA,aAAA;EH/BJ,aAAA;EACA,uBAAA;EACA,mBAAA;EAiBA,mBAAA;AJ6KJ;AItMC;EGkCG;IAMQ,aAAA;IACA,qCAAA;IACA,kCAAA;IACA,aAAA;IACA,gBAAA;EPkKV;AACF;AO/JI;EACI,mBAAA;EACA,sBNtDA;EMuDA,gBAAA;EACA,kBAAA;EACA,iBAAA;EACA,mBAAA;APiKR;AIvNC;EGgDG;IAQQ,eAAA;EPmKV;AACF;;AQtOA;EJuCI,UAAA;EACA,kBAAA;EACA,+CAAA;AJmMJ;AQzOI;EACI,WAAA;EJYJ,aAAA;EACA,uBAAA;EACA,mBAAA;EAYA,sBAAA;EIxBI,SAAA;AR8OR;AI1OC;EIPG;IAKQ,aAAA;IACA,qCAAA;IACA,yBAAA;ERgPV;AACF;AIjPC;EIPG;IAUQ,qCAAA;IACA,yBAAA;ERkPV;AACF;AIvPC;EIPG;IAcQ,qCAAA;IACA,yBAAA;ERoPV;AACF;;ASvQA;ELuCI,UAAA;EACA,kBAAA;EACA,+CAAA;EKvCA,gBAAA;AT4QJ;;AU9QA;EACI,WAAA;EACA,gBAAA;AViRJ;AU/QI;EACI,aAAA;EACA,iBAAA;EACA,UAAA;EACA,gBAAA;EACA,YAAA;EACA,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,SAAA;ENQJ,mBAAA;EACA,iCAAA;EACA,4CAAA;EACA,uBHzBI;ADmSR;AIzRC;EMNG;IAaQ,eAAA;EVsRV;AACF;AUpRQ;EACI,gBAAA;AVsRZ;AUnRQ;EACI,uBTxBL;ESyBK,gBAAA;EACA,eAAA;AVqRZ;;AWhTA;EACI,WAAA;EACA,kBAAA;EACA,MAAA;EACA,iBAAA;EACA,4CVUK;EGCL,aAAA;EACA,uBAAA;EACA,mBAAA;EAYA,sBAAA;AJ8RJ;;AY5TA;ERuCI,UAAA;EACA,kBAAA;EACA,+CAAA;EQvCA,gBAAA;AZiUJ;;AanUA;ETuCI,UAAA;EACA,kBAAA;EACA,+CAAA;ESvCA,gBAAA;AbwUJ;AatUI;EACI,WAAA;EACA,iBAAA;EACA,aAAA;EACA,uBZRA;EGgBJ,aAAA;EACA,uBAAA;EACA,mBAAA;EAYA,sBAAA;EARA,mBAAA;EACA,iCAAA;EACA,4CAAA;EACA,uBHzBI;EYWA,SAAA;Ab8UR;Aa5UQ;ETGJ,aAAA;EACA,uBAAA;EACA,mBAAA;EAiBA,mBAAA;ESpBQ,QAAA;AbiVZ;Aa9UQ;EACI,iBAAA;EACA,mBAAA;AbgVZ;AI1VC;ESQO;IAIQ,eAAA;EbkVd;AACF;Aa/UQ;ETVJ,aAAA;EACA,uBAAA;EACA,mBAAA;EAiBA,mBAAA;ESPQ,eAAA;AboVZ;AanVY;EACI,iBAAA;AbqVhB;Aa9UQ;ETrBJ,aAAA;EACA,uBAAA;EACA,mBAAA;EAiBA,mBAAA;ESIQ,eAAA;EACA,SAAA;AbmVZ;Aa/UI;EACI,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,2BAAA;AbiVR;Aa9UI;EACI,iBAAA;EACA,uBZpDD;EYqDC,mBAAA;EACA,gBAAA;EACA,kBAAA;AbgVR;AI9XC;ESyCG;IAOQ,eAAA;EbkVV;AACF;;Ac7YA;EVgBI,aAAA;EACA,uBAAA;EACA,mBAAA;EAYA,sBAAA;EU5BA,SAAA;AdmZJ;AcjZI;EACI,mBAAA;EACA,sBAAA;AdmZR;AI/YC;EUNG;IAIQ,eAAA;EdqZV;AACF;AclZI;EVIA,aAAA;EACA,uBAAA;EACA,mBAAA;EAiBA,mBAAA;EUrBI,SAAA;EACA,eAAA;AduZR;AcpZI;EVFA,aAAA;EACA,uBAAA;EACA,mBAAA;EAiBA,mBAAA;EUfI,QAAA;EACA,eAAA;AdyZR;ActZI;EVRA,aAAA;EACA,uBAAA;EACA,mBAAA;EAiBA,mBAAA;EUTI,QAAA;Ad2ZR;;AClbA,uCAAA;AcAA;EACI,WAAA;EACA,YAAA;EACA,oBAAA;EACA,YdPI;EcQJ,gBAAA;EACA,mBAAA;EXOA,aAAA;EACA,uBAAA;EACA,mBAAA;AJgbJ;AIxbC;EWPD;IASQ,WAAA;IACA,YAAA;IACA,eAAA;Ef0bN;AACF;AexbI;EACI,kCdjBD;AD2cP;AevbI;EACI,kCddC;ADucT;;AgB/cA;EACI,WAAA;EACA,YAAA;EACA,gBAAA;EACA,0CAAA;EACA,mBAAA;EACA,oCAAA;EACA,uBfPI;EeQJ,mBAAA;EACA,eAAA;EZOA,aAAA;EACA,uBAAA;EACA,mBAAA;EYPA,gBAAA;AhBodJ;AgBndI;EACI,0CAAA;AhBqdR;AIxdC;EYVD;IAgBQ,WAAA;IACA,YAAA;IACA,eAAA;EhBsdN;AACF;AgBpdI;EACI,uBfrBD;AD2eP;AgBndI;EACI,uBflBC;ADueT;AgBldI;EACI,+Bf5BW;ADgfnB;AgBjdI;EACI,8BfzBa;AD4erB;AgBhdI;EACI,YftCA;EeuCA,kCftCD;ADwfP;AgB/cI;EACI,Yf3CA;Ee4CA,kCfpCC;ADqfT;;AiB7fA;EACI,WAAA;EACA,YAAA;EACA,mBAAA;EACA,mBAAA;EACA,2BAAA;EACA,uBhBNI;EgBOJ,kBAAA;EACA,QAAA;EACA,WAAA;EbOA,aAAA;EACA,uBAAA;EACA,mBAAA;EAYA,sBAAA;AJ+eJ;AiBjgBI;EACI,YAAA;AjBmgBR;AiBhgBI;EACI,0CAAA;AjBkgBR;AiB/fI;EACI,+BhBnBW;EgBoBX,eAAA;AjBigBR;;AkBvhBA;EACI,cAAA;EACA,uBjBFI;EiBGJ,4BAAA;EACA,WAAA;AlB0hBJ;AkBxhBI;EACI,WAAA;EACA,kCAAA;EACA,aAAA;EdOJ,aAAA;EACA,uBAAA;EACA,mBAAA;EAiBA,mBAAA;EcxBI,6BAAA;AlB6hBR;AkB1hBI;EACI,WAAA;EACA,mBAAA;EACA,gBAAA;EACA,sBjBZA;EiBaA,kBAAA;EdHJ,aAAA;EACA,uBAAA;EACA,mBAAA;EAiBA,mBAAA;AJghBJ;AIziBC;EcIG;IAQQ,eAAA;ElBiiBV;AACF;AkB9hBI;EACI,uBjB1BD;AD0jBP;AkB7hBI;EACI,uBjBvBC;EiBwBD,kBAAA;AlB+hBR;;AmB/jBA;EACI,WAAA;EACA,YAAA;EACA,kClBFG;EkBGH,YAAA;EACA,mBAAA;EACA,mBAAA;EACA,gBAAA;EACA,YlBRI;EkBSJ,eAAA;AnBkkBJ;AIjkBC;EeVD;IAWQ,eAAA;IACA,YAAA;EnBokBN;AACF;AmBnkBI;EACI,0ClBbW;ADklBnB;;AoBplBA;EACI,iBAAA;EACA,aAAA;EhBcA,aAAA;EACA,uBAAA;EACA,mBAAA;EAYA,sBAAA;EgB1BA,SAAA;EhBkBA,mBAAA;EACA,iCAAA;EACA,4CAAA;EACA,uBHzBI;ADkmBR;AoB3lBI;EACI,kBAAA;EACA,WnBCD;EmBAC,kBAAA;ApB6lBR;AoB1lBI;EACI,UAAA;EhBEJ,aAAA;EACA,uBAAA;EACA,mBAAA;EAiBA,mBAAA;EgBnBI,SAAA;ApB+lBR;AoB5lBI;EhBHA,aAAA;EACA,uBAAA;EACA,mBAAA;EAiBA,mBAAA;EgBdI,WAAA;ApBimBR;AoB/lBQ;EACI,gBAAA;ApBimBZ;AoB7lBI;EACI,eAAA;EACA,uBnB7BD;AD4nBP;AoB5lBI;EACI,eAAA;EACA,uBnB3BC;ADynBT;AoB3lBI;EhBtBA,aAAA;EACA,uBAAA;EACA,mBAAA;EAiBA,mBAAA;EgBKI,SAAA;ApBgmBR;AoB7lBI;EhB3BA,aAAA;EACA,uBAAA;EACA,mBAAA;EAiBA,mBAAA;EgBUI,SAAA;EACA,WAAA;EACA,gBAAA;EACA,YAAA;ApBkmBR;AoBhmBQ;EACI,gBAAA;EACA,sBnB9CJ;ADgpBR;AoB9lBI;EACI,WAAA;EACA,eAAA;EACA,YAAA;EACA,aAAA;EACA,2BAAA;EACA,mBAAA;ApBgmBR;AoB7lBI;;EAEA,wBAAA;EACA,SAAA;ApB+lBJ;AoB5lBI;EACA,0BAAA;ApB8lBJ;AoB3lBI;EACI,kBAAA;EACA,UnBtEF;EmBuEE,kBAAA;EACA,gBAAA;ApB6lBR;;AqB5qBA;EACI,kCAAA;EACA,kBAAA;EACA,YAAA;EACA,uBpBJI;ADmrBR;;AsBnrBA;EACI,WAAA;EACA,gBAAA;EACA,kBAAA;EACA,aAAA;EACA,YrBLI;EqBMJ,kCrBLG;EqBMH,mBAAA;EACA,mBAAA;EACA,iBAAA;AtBsrBJ;AIrrBC;EkBVD;IAWQ,mBAAA;EtBwrBN;AACF;AI1rBC;EkBVD;IAcQ,mBAAA;EtB0rBN;AACF;AI/rBC;EkBOG;IAEQ,mBAAA;EtB0rBV;AACF","sourcesContent":["// Font\r\n@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap');\r\n\r\n// Resets\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nhtml {\r\n    font-size: 100%;\r\n}\r\n\r\nbody {\r\n    min-height: 100vh;\r\n    font-family: 'Sora', sans-serif;\r\n    user-select: none;\r\n    position: relative;\r\n}\r\n\r\n.none {\r\n    display: none;\r\n}\r\n\r\n// Animations\r\n\r\n@keyframes fade-slide-in {\r\n    from {\r\n        transform: translateY(-5rem);\r\n    }\r\n    to {\r\n        transform: translateY(0);\r\n    }\r\n    }\r\n","@import url(\"https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap\");\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 100%;\n}\n\nbody {\n  min-height: 100vh;\n  font-family: \"Sora\", sans-serif;\n  user-select: none;\n  position: relative;\n}\n\n.none {\n  display: none;\n}\n\n@keyframes fade-slide-in {\n  from {\n    transform: translateY(-5rem);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n/* $gray: rgba(233, 230, 230, 0.425); */\n/* @import './colors'; */\n.underline {\n  text-decoration: underline;\n  text-underline-offset: 10px;\n  text-decoration-color: rgb(19, 19, 107);\n  text-decoration-thickness: 3px;\n}\n\n.a-Clicked {\n  font-weight: 600;\n}\n\na {\n  cursor: pointer;\n}\n\nli {\n  list-style: none;\n}\n\nheader {\n  width: 100%;\n}\nheader h1 {\n  height: 120px;\n  background-color: rgb(19, 19, 107);\n  color: white;\n  font-size: 1.5rem;\n  padding: 10px 20px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 700;\n}\n@media (min-width: 36rem) {\n  header h1 {\n    font-size: 28px;\n  }\n}\n@media (min-width: 48rem) {\n  header h1 {\n    font-size: 2.25rem;\n  }\n}\n@media (min-width: 75rem) {\n  header h1 {\n    font-size: 2.5rem;\n  }\n}\nheader .nav {\n  width: 80%;\n  max-width: 400px;\n  height: 70px;\n  margin: 15px auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-evenly;\n  border-radius: 15px;\n  box-shadow: 1px 2px 2px lightgray;\n  border: 1px solid rgba(233, 230, 230, 0.425);\n  background-color: white;\n}\nheader a {\n  font-size: 1rem;\n  color: rgb(19, 19, 107);\n}\n\n.last-results {\n  padding: 0 15px;\n  margin-top: 2.5rem;\n  gap: 50px;\n}\n.last-results__title {\n  font-size: 1.375rem;\n  color: rgb(34, 33, 33);\n  text-align: center;\n  margin-bottom: 50px;\n}\n@media (min-width: 48rem) {\n  .last-results__title {\n    font-size: 1.5rem;\n  }\n}\n@media (min-width: 75rem) {\n  .last-results__title {\n    font-size: 1.625rem;\n  }\n}\n.last-results__draws {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 50px;\n}\n\n.keyboard-container {\n  width: 100%;\n  padding: 20px;\n  max-width: 800px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 5000;\n  animation: fade-slide-in 0.7s ease-out forwards;\n}\n\n.keyboard {\n  width: 100%;\n  padding: 40px;\n  gap: 40px;\n  position: relative;\n  z-index: 10000;\n  background-color: white;\n  border-radius: 15px;\n  box-shadow: 1px 2px 2px lightgray;\n  border: 1px solid rgba(233, 230, 230, 0.425);\n  background-color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.keyboard__advise {\n  font-size: 0.875rem;\n  font-weight: 400;\n  color: grey;\n  margin-right: 20px;\n  text-align: center;\n}\n@media (min-width: 48rem) {\n  .keyboard__advise {\n    font-size: 1rem;\n  }\n}\n.keyboard__keys {\n  flex-wrap: wrap;\n  gap: 35px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n}\n@media (min-width: 48rem) {\n  .keyboard__keys {\n    display: grid;\n    grid-template-columns: auto auto;\n    grid-template-rows: auto;\n  }\n}\n.keyboard__blue-keys {\n  flex-wrap: wrap;\n  row-gap: 20px;\n  column-gap: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n}\n@media (min-width: 48rem) {\n  .keyboard__blue-keys {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n  }\n}\n.keyboard__yellow-keys {\n  flex-wrap: wrap;\n  column-gap: 10px;\n  row-gap: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n}\n@media (min-width: 48rem) {\n  .keyboard__yellow-keys {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(4, 1fr);\n    row-gap: 20px;\n    column-gap: 10px;\n  }\n}\n.keyboard__config {\n  font-size: 0.875rem;\n  color: rgb(34, 33, 33);\n  max-width: 400px;\n  text-align: center;\n  line-height: 24px;\n  font-size: 0.875rem;\n}\n@media (min-width: 48rem) {\n  .keyboard__config {\n    font-size: 1rem;\n  }\n}\n\n.ranking-board {\n  width: 90%;\n  position: relative;\n  animation: fade-slide-in 0.6s ease-out forwards;\n}\n.ranking-board__boards {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 20px;\n}\n@media (min-width: 36rem) {\n  .ranking-board__boards {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-row: repeat(3, auto);\n  }\n}\n@media (min-width: 62rem) {\n  .ranking-board__boards {\n    grid-template-columns: repeat(4, 1fr);\n    grid-row: repeat(2, auto);\n  }\n}\n@media (min-width: 87.5rem) {\n  .ranking-board__boards {\n    grid-template-columns: repeat(4, 1fr);\n    grid-row: repeat(2, auto);\n  }\n}\n\n.top10 {\n  width: 90%;\n  position: relative;\n  animation: fade-slide-in 0.6s ease-out forwards;\n  max-width: 700px;\n}\n\n.tools {\n  width: 100%;\n  margin-top: 40px;\n}\n.tools__menu {\n  padding: 40px;\n  min-height: 250px;\n  width: 80%;\n  max-width: 500px;\n  margin: auto;\n  font-size: 0.875rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 15px;\n  border-radius: 15px;\n  box-shadow: 1px 2px 2px lightgray;\n  border: 1px solid rgba(233, 230, 230, 0.425);\n  background-color: white;\n}\n@media (min-width: 48rem) {\n  .tools__menu {\n    font-size: 1rem;\n  }\n}\n.tools__menu li {\n  list-style: disc;\n}\n.tools__menu li:hover {\n  color: rgb(19, 19, 107);\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.overlay {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  min-height: 100vh;\n  background-color: rgba(118, 118, 160, 0.301);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.search-handler {\n  width: 90%;\n  position: relative;\n  animation: fade-slide-in 0.6s ease-out forwards;\n  max-width: 500px;\n}\n\n.feedback {\n  width: 90%;\n  position: relative;\n  animation: fade-slide-in 0.6s ease-out forwards;\n  max-width: 400px;\n}\n.feedback__bubble {\n  width: 100%;\n  min-height: 200px;\n  padding: 30px;\n  background-color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  border-radius: 15px;\n  box-shadow: 1px 2px 2px lightgray;\n  border: 1px solid rgba(233, 230, 230, 0.425);\n  background-color: white;\n  gap: 30px;\n}\n.feedback__bubble .num {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  gap: 5px;\n}\n.feedback__bubble span {\n  margin-right: 5px;\n  font-size: 0.875rem;\n}\n@media (min-width: 48rem) {\n  .feedback__bubble span {\n    font-size: 1rem;\n  }\n}\n.feedback__bubble .result-declaration {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.feedback__bubble .result-declaration .nowrap {\n  text-wrap: nowrap;\n}\n.feedback__bubble--numBestFriends .result__list {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.feedback__bubble--numAppearences {\n  min-height: 150px;\n  max-height: 420px;\n  overflow-y: scroll;\n  justify-content: flex-start;\n}\n.feedback__bubble--message {\n  min-height: 150px;\n  color: rgb(19, 19, 107);\n  font-size: 0.875rem;\n  font-weight: 600;\n  text-align: center;\n}\n@media (min-width: 48rem) {\n  .feedback__bubble--message {\n    font-size: 1rem;\n  }\n}\n\n.draw {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 20px;\n}\n.draw__date {\n  font-size: 0.875rem;\n  color: rgb(34, 33, 33);\n}\n@media (min-width: 48rem) {\n  .draw__date {\n    font-size: 1rem;\n  }\n}\n.draw__balls {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.draw__balls-5 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  gap: 5px;\n  flex-wrap: wrap;\n}\n.draw__balls-2 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  gap: 5px;\n}\n\n/* $gray: rgba(233, 230, 230, 0.425); */\n.ball {\n  width: 35px;\n  height: 35px;\n  border-radius: 100px;\n  color: white;\n  font-weight: 700;\n  font-size: 0.875rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n@media (min-width: 48rem) {\n  .ball {\n    width: 40px;\n    height: 40px;\n    font-size: 1rem;\n  }\n}\n.ball--blue {\n  background-color: rgb(19, 19, 107);\n}\n.ball--yellow {\n  background-color: rgb(255, 217, 0);\n}\n\n.keyboard-key {\n  width: 35px;\n  height: 35px;\n  font-weight: 600;\n  box-shadow: 3px 4px 3px rgb(228, 226, 226);\n  border-radius: 100%;\n  border: 1px solid rgb(245, 243, 243);\n  background-color: white;\n  font-size: 0.875rem;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  list-style: none;\n}\n.keyboard-key:hover {\n  box-shadow: 2px 3px 2px rgb(228, 226, 226);\n}\n@media (min-width: 48rem) {\n  .keyboard-key {\n    width: 37px;\n    height: 37px;\n    font-size: 1rem;\n  }\n}\n.keyboard-key--blue {\n  color: rgb(19, 19, 107);\n}\n.keyboard-key--yellow {\n  color: rgb(255, 217, 0);\n}\n.keyboard-key--blue:hover {\n  color: rgba(19, 19, 107, 0.699);\n}\n.keyboard-key--yellow:hover {\n  color: rgba(255, 230, 0, 0.63);\n}\n.keyboard-key__clicked--blue {\n  color: white;\n  background-color: rgb(19, 19, 107);\n}\n.keyboard-key__clicked--yellow {\n  color: white;\n  background-color: rgb(255, 217, 0);\n}\n\n.closing-cross {\n  width: 25px;\n  height: 25px;\n  font-size: 0.875rem;\n  border-radius: 100%;\n  border: 1px solid lightgray;\n  background-color: white;\n  position: absolute;\n  top: 7px;\n  right: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.closing-cross--banner {\n  border: none;\n}\n.closing-cross--keyboard {\n  box-shadow: 1px 2px 2px rgb(247, 246, 246);\n}\n.closing-cross:hover {\n  color: rgba(19, 19, 107, 0.699);\n  cursor: pointer;\n}\n\n.board {\n  z-index: 10000;\n  background-color: white;\n  box-shadow: 3px 4px 4px grey;\n  width: 100%;\n}\n.board__cells {\n  width: 100%;\n  border-bottom: 1px solid lightgray;\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-evenly;\n}\n.board__cell {\n  width: 100%;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: rgb(34, 33, 33);\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n}\n@media (min-width: 75rem) {\n  .board__cell {\n    font-size: 1rem;\n  }\n}\n.board__cell--blue {\n  color: rgb(19, 19, 107);\n}\n.board__cell--yellow {\n  color: rgb(255, 217, 0);\n  margin-right: 10px;\n}\n\n.btn {\n  width: 90px;\n  height: 40px;\n  background-color: rgb(19, 19, 107);\n  border: none;\n  border-radius: 30px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: white;\n  cursor: pointer;\n}\n@media (min-width: 48rem) {\n  .btn {\n    font-size: 1rem;\n    width: 100px;\n  }\n}\n.btn:hover {\n  background-color: rgba(19, 19, 107, 0.699);\n}\n\n.search-form {\n  min-height: 340px;\n  padding: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 40px;\n  border-radius: 15px;\n  box-shadow: 1px 2px 2px lightgray;\n  border: 1px solid rgba(233, 230, 230, 0.425);\n  background-color: white;\n}\n.search-form__instruction {\n  font-size: 0.75rem;\n  color: grey;\n  text-align: center;\n}\n.search-form__checkboxes {\n  width: 90%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  gap: 15px;\n}\n.search-form .checkbox {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  width: 100%;\n}\n.search-form .checkbox label {\n  font-weight: 600;\n}\n.search-form .blue-b {\n  font-size: 1rem;\n  color: rgb(19, 19, 107);\n}\n.search-form .yellow-b {\n  font-size: 1rem;\n  color: rgb(255, 217, 0);\n}\n.search-form__input {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  gap: 10px;\n}\n.search-form .number-input {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  gap: 20px;\n  width: 100%;\n  max-width: 400px;\n  height: 40px;\n}\n.search-form .number-input label {\n  font-weight: 400;\n  color: rgb(34, 33, 33);\n}\n.search-form input {\n  width: 100%;\n  max-width: 60px;\n  height: 100%;\n  padding: 10px;\n  border: 1px solid lightgray;\n  border-radius: 10px;\n}\n.search-form input::-webkit-outer-spin-button,\n.search-form input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.search-form input[type=number] {\n  -moz-appearance: textfield;\n}\n.search-form__error-mess {\n  text-align: center;\n  color: red;\n  font-size: 0.75rem;\n  font-weight: 400;\n}\n\n.drowpDownInput {\n  border: 1px solid rgb(19, 19, 107);\n  border-radius: 4px;\n  padding: 3px;\n  background-color: white;\n}\n\n.blue-banner {\n  width: 100%;\n  min-height: 40px;\n  text-align: center;\n  padding: 30px;\n  color: white;\n  background-color: rgb(19, 19, 107);\n  font-size: 1.375rem;\n  margin-bottom: 20px;\n  line-height: 38px;\n}\n@media (min-width: 48rem) {\n  .blue-banner {\n    font-size: 1.625rem;\n  }\n}\n@media (min-width: 75rem) {\n  .blue-banner {\n    font-size: 1.875rem;\n  }\n}\n@media (min-width: 48rem) {\n  .blue-banner--med {\n    font-size: 1.625rem;\n  }\n}","$white: white;\r\n$blue: rgb(19, 19, 107);\r\n$blue-transparent: rgba(19, 19, 107, 0.699);\r\n/* $gray: rgba(233, 230, 230, 0.425); */\r\n$gray: rgba(233, 230, 230, 0.425);\r\n$light-gray: lightgray;\r\n$black: rgb(34, 33, 33);\r\n$red: red;\r\n$yellow: rgb(255, 217, 0);\r\n$yellow-transparent: rgba(255, 230, 0, 0.63);\r\n$grey: grey;\r\n$keyboard-key-border: rgb(245, 243, 243);\r\n$keyboard-key-boxShadow: rgb(228, 226, 226);\r\n$closing-cross-border: rgb(245, 245, 245);\r\n$closing-cross-boxShasow: rgb(247, 246, 246);\r\n$overlay:rgba(118, 118, 160, 0.301);","/* @import './colors'; */\r\n\r\n.underline {\r\n    text-decoration: underline;\r\n    text-underline-offset: 10px;\r\n    text-decoration-color: $blue;\r\n    text-decoration-thickness: 3px;\r\n}\r\n\r\n.a-Clicked {\r\n    font-weight: 600;\r\n}\r\n\r\na {\r\n    cursor: pointer;\r\n}\r\n\r\nli {\r\n    list-style: none;\r\n}","\r\nheader {\r\n    width: 100%;\r\n    h1 {\r\n        height: 120px;\r\n        background-color: $blue;\r\n        color: $white;\r\n        font-size: 1.5rem;\r\n        padding: 10px 20px;\r\n        text-align: center;\r\n        @include flexCenter;\r\n        font-weight: 700;\r\n        @include breakpoint(small) {\r\n            font-size: 28px;\r\n        }\r\n        @include breakpoint(medium) {\r\n            font-size: 2.25rem;\r\n        }\r\n        @include breakpoint(x-large) {\r\n            font-size: 2.5rem;\r\n        }\r\n    }\r\n\r\n    .nav {\r\n        width: 80%;\r\n        max-width: 400px;\r\n        height: 70px;\r\n        margin: 15px auto;\r\n        @include flex-row;\r\n        justify-content: space-evenly;\r\n        @include stylingForBox;\r\n    }\r\n\r\n    a { \r\n        font-size: 1rem;\r\n        color: $blue;\r\n    }\r\n}","$breakpoints: (\r\n    'small': '36rem', // ≥576px\r\n    'small-medium': '42rem', // ≥676px\r\n    'medium': '48rem', // ≥768px\r\n    'large': '62rem', // ≥992p\r\n    'x-large': '75rem', // ≥1200px\r\n    'xx-large': '87.5rem', // ≥1400px\r\n);\r\n\r\n@mixin breakpoint($size) {\r\n\t@media (min-width: map-get($breakpoints, $size)) {\r\n\t\t@content;\r\n\t}\r\n}\r\n\r\n@mixin flexCenter {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n@mixin stylingForBox {\r\n    border-radius: 15px;\r\n    box-shadow: 1px 2px 2px $light-gray;\r\n    border: 1px solid $gray;\r\n    background-color: $white;\r\n}\r\n\r\n@mixin flex-column {\r\n    @include flexCenter;\r\n    flex-direction: column;\r\n}\r\n\r\n@mixin flex-row {\r\n    @include flexCenter;\r\n    flex-direction: row;\r\n}\r\n\r\n@mixin genericContainer {\r\n    width: 90%;\r\n    position: relative;\r\n    animation: fade-slide-in 0.6s ease-out forwards;\r\n}",".last-results {\r\n    padding: 0 15px;\r\n    margin-top: 2.5rem;\r\n    gap: 50px;\r\n\r\n    &__title {\r\n        font-size: 1.375rem;\r\n        color: $black;\r\n        text-align: center;\r\n        margin-bottom: 50px;\r\n        @include breakpoint(medium) {\r\n            font-size: 1.5rem;\r\n        }\r\n        @include breakpoint(x-large) {\r\n            font-size: 1.625rem;\r\n        }\r\n    }\r\n\r\n    &__draws {\r\n        @include flex-column;\r\n        gap: 50px;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n",".keyboard-container {\r\n    width: 100%;\r\n    padding: 20px;\r\n    max-width: 800px;\r\n    @include flexCenter;\r\n    z-index: 5000;\r\n    animation: fade-slide-in 0.7s ease-out forwards;\r\n}\r\n\r\n",".keyboard {\r\n    width: 100%;\r\n    padding: 40px;\r\n    gap: 40px;\r\n    position: relative;\r\n    z-index: 10000;\r\n    background-color: $white;\r\n    @include stylingForBox;\r\n    @include flex-column;\r\n\r\n    &__advise {\r\n        font-size: 0.875rem;\r\n        font-weight: 400;\r\n        color: $grey;\r\n        margin-right: 20px;\r\n        text-align: center;\r\n        @include breakpoint(medium) {\r\n            font-size: 1rem;\r\n        }\r\n    }\r\n\r\n    &__keys {\r\n        flex-wrap: wrap;\r\n        gap: 35px;\r\n        @include flex-row;\r\n        @include breakpoint(medium) {\r\n            display: grid;\r\n            grid-template-columns: auto auto;\r\n            grid-template-rows: auto;\r\n        }\r\n    }\r\n\r\n    &__blue-keys {\r\n        flex-wrap: wrap;\r\n        row-gap: 20px;\r\n        column-gap: 10px;\r\n        @include flex-row;\r\n        @include breakpoint(medium) {\r\n            display: grid;\r\n            grid-template-columns: repeat(10, 1fr);\r\n            grid-template-rows: repeat(5, 1fr);\r\n        }\r\n    }\r\n\r\n    &__yellow-keys {\r\n        flex-wrap: wrap;\r\n        column-gap:10px;\r\n        row-gap: 20px;\r\n        @include flex-row;\r\n        @include breakpoint(medium) {\r\n            display: grid;\r\n            grid-template-columns: repeat(3, 1fr);\r\n            grid-template-rows: repeat(4, 1fr);\r\n            row-gap: 20px;\r\n            column-gap: 10px;\r\n        }\r\n    }\r\n\r\n    &__config {\r\n        font-size: 0.875rem;\r\n        color: $black;\r\n        max-width: 400px;\r\n        text-align: center;\r\n        line-height: 24px;\r\n        font-size: 0.875rem;\r\n        @include breakpoint(medium) {\r\n            font-size: 1rem;\r\n        }\r\n    }\r\n}",".ranking-board {\r\n    @include genericContainer;\r\n\r\n    &__boards {\r\n        width: 100%;\r\n        @include flex-column;\r\n        gap: 20px;\r\n        @include breakpoint(small) {\r\n            display: grid;\r\n            grid-template-columns: repeat(2, 1fr);\r\n            grid-row: repeat(3, auto);\r\n        }\r\n        @include breakpoint(large) {\r\n            grid-template-columns: repeat(4, 1fr);\r\n            grid-row: repeat(2, auto);\r\n        }\r\n        @include breakpoint(xx-large) {\r\n            grid-template-columns: repeat(4, 1fr);\r\n            grid-row: repeat(2, auto);\r\n        }\r\n    }\r\n}\r\n",".top10 {\r\n    @include genericContainer;\r\n    max-width: 700px;\r\n}",".tools {\r\n    width: 100%;\r\n    margin-top: 40px;\r\n    \r\n    &__menu {\r\n        padding: 40px;\r\n        min-height: 250px;\r\n        width: 80%;\r\n        max-width: 500px;\r\n        margin: auto;\r\n        font-size: 0.875rem;\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        gap: 15px;\r\n        @include stylingForBox;\r\n        @include breakpoint(medium) {\r\n            font-size: 1rem;\r\n        }\r\n    \r\n        li {\r\n            list-style: disc;\r\n        }\r\n        \r\n        li:hover {\r\n            color: $blue;\r\n            font-weight: 600;\r\n            cursor: pointer;\r\n        }\r\n    }\r\n}",".overlay {\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    min-height: 100vh;\r\n    background-color: $overlay;\r\n    @include flex-column;\r\n}",".search-handler {\r\n    @include genericContainer;\r\n    max-width: 500px;\r\n}",".feedback {\r\n    @include genericContainer;\r\n    max-width: 400px;\r\n\r\n    &__bubble {\r\n        width: 100%;\r\n        min-height: 200px;\r\n        padding: 30px;\r\n        background-color: $white;\r\n        @include flex-column;\r\n        @include stylingForBox;\r\n        gap: 30px;\r\n\r\n        .num {\r\n            @include flex-row;\r\n            gap: 5px;\r\n        }\r\n\r\n        span {\r\n            margin-right: 5px;\r\n            font-size: 0.875rem;\r\n            @include breakpoint(medium) {\r\n                font-size: 1rem;\r\n            }\r\n        }\r\n\r\n        .result-declaration {\r\n            @include flex-row;\r\n            flex-wrap: wrap;\r\n            .nowrap {\r\n                text-wrap:nowrap;\r\n            }\r\n        }\r\n    }\r\n\r\n    &__bubble--numBestFriends {\r\n\r\n        .result__list {\r\n            @include flex-row;\r\n            flex-wrap: wrap;\r\n            gap: 10px;\r\n        }\r\n    }\r\n\r\n    &__bubble--numAppearences {\r\n        min-height: 150px;\r\n        max-height: 420px;\r\n        overflow-y: scroll;\r\n        justify-content: flex-start;\r\n    }\r\n\r\n    &__bubble--message {\r\n        min-height: 150px;\r\n        color: $blue;\r\n        font-size: 0.875rem;\r\n        font-weight: 600;\r\n        text-align: center;\r\n        @include breakpoint(medium) {\r\n            font-size: 1rem;\r\n        }\r\n    }\r\n}",".draw {\r\n    @include flex-column;\r\n    gap: 20px;\r\n\r\n    &__date {\r\n        font-size: 0.875rem;\r\n        color: $black;\r\n        @include breakpoint(medium) {\r\n            font-size: 1rem;\r\n        }\r\n    }\r\n\r\n    &__balls {\r\n        @include flex-row;\r\n        gap: 10px;\r\n        flex-wrap: wrap;\r\n    }\r\n\r\n    &__balls-5 {\r\n        @include flex-row;\r\n        gap: 5px;\r\n        flex-wrap: wrap;\r\n    }\r\n\r\n    &__balls-2 {\r\n        @include flex-row;\r\n        gap: 5px;\r\n    }\r\n}","@import '../base/colors';\r\n@import '../base/mixins';\r\n\r\n.ball {\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 100px;\r\n    color: $white;\r\n    font-weight: 700;\r\n    font-size: 0.875rem;\r\n    @include flexCenter;\r\n    @include breakpoint(medium) {\r\n        width: 40px;\r\n        height: 40px;\r\n        font-size: 1rem;\r\n    }\r\n\r\n    &--blue {\r\n        background-color: $blue;\r\n    }\r\n\r\n    &--yellow {\r\n        background-color: $yellow;\r\n    }\r\n}",".keyboard-key {\r\n    width: 35px;\r\n    height: 35px;\r\n    font-weight: 600;\r\n    box-shadow: 3px 4px 3px $keyboard-key-boxShadow;\r\n    border-radius: 100%;\r\n    border: 1px solid $keyboard-key-border;\r\n    background-color: $white;\r\n    font-size: 0.875rem;\r\n    cursor: pointer;\r\n    @include flexCenter;\r\n    list-style: none;\r\n    &:hover {\r\n        box-shadow: 2px 3px 2px $keyboard-key-boxShadow;\r\n    }\r\n    @include breakpoint(medium) {\r\n        width: 37px;\r\n        height: 37px;\r\n        font-size: 1rem;\r\n    }\r\n\r\n    &--blue {\r\n        color: $blue;\r\n    }\r\n\r\n    &--yellow {\r\n        color: $yellow;\r\n    }\r\n\r\n    &--blue:hover {\r\n        color: $blue-transparent;\r\n    }\r\n\r\n    &--yellow:hover {\r\n        color: $yellow-transparent;\r\n    }\r\n\r\n    &__clicked--blue {\r\n        color: $white;\r\n        background-color: $blue;\r\n    }\r\n\r\n    &__clicked--yellow {\r\n        color: $white;\r\n        background-color: $yellow;\r\n    }\r\n}",".closing-cross {\r\n    width: 25px;\r\n    height: 25px;\r\n    font-size: 0.875rem;\r\n    border-radius: 100%;\r\n    border: 1px solid $light-gray;\r\n    background-color: $white;\r\n    position: absolute;\r\n    top: 7px;\r\n    right: 12px;\r\n    @include flex-column;\r\n\r\n    &--banner {\r\n        border: none;\r\n    }\r\n\r\n    &--keyboard {\r\n        box-shadow: 1px 2px 2px $closing-cross-boxShasow;\r\n    }\r\n\r\n    &:hover {\r\n        color:$blue-transparent;\r\n        cursor: pointer;\r\n    }\r\n}\r\n\r\n\r\n",".board {\r\n    z-index: 10000;\r\n    background-color: $white;\r\n    box-shadow: 3px 4px 4px $grey;\r\n    width: 100%;\r\n\r\n    &__cells {\r\n        width: 100%;\r\n        border-bottom: 1px solid $light-gray;\r\n        padding: 10px;\r\n        @include flex-row;\r\n        justify-content: space-evenly;\r\n    }\r\n\r\n    &__cell {\r\n        width: 100%;\r\n        font-size: 0.875rem;\r\n        font-weight: 600;\r\n        color: $black;\r\n        text-align: center;\r\n        @include flex-row;\r\n        @include breakpoint(x-large) {\r\n            font-size: 1rem;\r\n        }\r\n    }\r\n\r\n    &__cell--blue {\r\n        color: $blue;\r\n    }\r\n\r\n    &__cell--yellow {\r\n        color: $yellow;\r\n        margin-right: 10px;\r\n        \r\n    }\r\n}",".btn {\r\n    width: 90px;\r\n    height: 40px;\r\n    background-color: $blue;\r\n    border: none;\r\n    border-radius: 30px;\r\n    font-size: 0.875rem;\r\n    font-weight: 600;\r\n    color: $white;\r\n    cursor: pointer;\r\n    @include breakpoint(medium) {\r\n        font-size: 1rem;\r\n        width: 100px;\r\n    }\r\n    &:hover {\r\n        background-color: $blue-transparent;\r\n    }\r\n}",".search-form {\r\n    min-height: 340px;\r\n    padding: 30px;\r\n    @include flex-column;\r\n    gap: 40px;\r\n    @include stylingForBox;\r\n\r\n    &__instruction {\r\n        font-size: 0.75rem;\r\n        color: $grey;\r\n        text-align: center;\r\n    }\r\n    \r\n    &__checkboxes {\r\n        width: 90%;\r\n        @include flex-row;\r\n        gap: 15px;\r\n    }\r\n    \r\n    .checkbox {\r\n        @include flex-row;\r\n        width: 100%;\r\n    \r\n        label {\r\n            font-weight: 600;\r\n        }\r\n    }\r\n    \r\n    .blue-b {\r\n        font-size: 1rem;\r\n        color: $blue;\r\n    }\r\n    \r\n    .yellow-b {\r\n        font-size: 1rem;\r\n        color: $yellow;\r\n    }\r\n    \r\n    &__input {\r\n        @include flex-row;\r\n        gap: 10px;\r\n    }\r\n    \r\n    .number-input {\r\n        @include flex-row;\r\n        gap: 20px;\r\n        width: 100%;\r\n        max-width: 400px;\r\n        height: 40px;\r\n    \r\n        label {\r\n            font-weight: 400;\r\n            color: $black;\r\n        }\r\n    }\r\n    \r\n    input {\r\n        width: 100%;\r\n        max-width: 60px;\r\n        height: 100%;\r\n        padding: 10px;\r\n        border: 1px solid $light-gray;\r\n        border-radius: 10px;\r\n    }\r\n    \r\n    input::-webkit-outer-spin-button,\r\n    input::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n    margin: 0;\r\n    }\r\n    \r\n    input[type=number] {\r\n    -moz-appearance: textfield;\r\n    }\r\n    \r\n    &__error-mess {\r\n        text-align: center;\r\n        color: $red;\r\n        font-size: 0.75rem;\r\n        font-weight: 400;\r\n    }\r\n}\r\n\r\n",".drowpDownInput {\r\n    border: 1px solid $blue;\r\n    border-radius: 4px;\r\n    padding: 3px;\r\n    background-color: $white;\r\n}",".blue-banner {\r\n    width: 100%;\r\n    min-height: 40px;\r\n    text-align: center;\r\n    padding: 30px;\r\n    color: $white;\r\n    background-color: $blue;\r\n    font-size: 1.375rem;\r\n    margin-bottom: 20px;\r\n    line-height: 38px;\r\n    @include breakpoint(medium) {\r\n        font-size: 1.625rem;\r\n    }\r\n    @include breakpoint(x-large) {\r\n        font-size: 1.875rem;\r\n    }\r\n\r\n    &--med {\r\n        @include breakpoint(medium) {\r\n            font-size: 1.625rem;\r\n        }\r\n    }\r\n}\r\n    "],"sourceRoot":""}]);
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
//# sourceMappingURL=eab91e27f8a8c4a4a5b6.js.map