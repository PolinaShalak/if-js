/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider.js */ \"./src/slider.js\");\n/* harmony import */ var _searchAndSendForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchAndSendForm.js */ \"./src/searchAndSendForm.js\");\n\r\n(0,_slider_js__WEBPACK_IMPORTED_MODULE_0__.slider)('homes__arrow-next', 'homes__arrow-back', '.cards');\r\n\r\n\r\n(0,_searchAndSendForm_js__WEBPACK_IMPORTED_MODULE_1__.searchAndSendForm)();\n\n//# sourceURL=webpack://if-js/./src/app.js?");

/***/ }),

/***/ "./src/searchAndSendForm.js":
/*!**********************************!*\
  !*** ./src/searchAndSendForm.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchAndSendForm\": () => (/* binding */ searchAndSendForm)\n/* harmony export */ });\nfunction searchAndSendForm() {\r\n    const formEl = document.getElementById('header__form');\r\n    const formDestinationEl = document.getElementById('city');\r\n    const availableHotelsEl = document.getElementById('available--hotels');\r\n    formEl.addEventListener('submit', async (event) => {\r\n        event.preventDefault();\r\n        const search1 = formDestinationEl.value.toLowerCase().trim();\r\n\r\n        const res = await getDataFromAPI(`https://fe-student-api.herokuapp.com/api/hotels?search=${search1\r\n        }&dateFrom=${selectedDateCheckIN.getTime()}&dateTo=${selectedDateCheckOut.getTime()}`);\r\n        if (res.length === 0) {\r\n            if (availableHotelsEl.classList.contains('background__successfully')) {\r\n                availableHotelsEl.classList.remove('background__successfully');\r\n            }\r\n            availableHotelsEl.classList.add('background__not-successfully');\r\n            availableHotelsEl.innerHTML = `\r\n    <div class=\"container\">\r\n        <h2 class=\"title\">Available hotels</h2>\r\n        <p class=\"available--text\">Unfortunately, your search returned no results </p>\r\n    </div>\r\n    `;\r\n        }\r\n        if (res.length !== 0) {\r\n            bubbleSort(res);\r\n            availableHotelsEl.classList.add('background__successfully');\r\n            availableHotelsEl.innerHTML = `\r\n    <div class=\"container\">\r\n        <h2 class=\"title\">Available hotels</h2>\r\n        <div class=\"row\" id=\"available--cards\">\r\n        <svg class=\"available__svg_arrow-back display-none\" id=\"available__arrow-back\">\r\n            <use href=\"#arrow\"></use>\r\n        </svg>\r\n        <svg class=\"homes__svg_arrow-next\" id=\"available__arrow-next\">\r\n            <use href=\"#arrow\"></use>\r\n        </svg>\r\n    </div>\r\n    `;\r\n            const availableCardsEl = document.getElementById('available--cards');\r\n            addHomesCards(res, availableCardsEl, 'availableCards');\r\n        }\r\n        slider('available__arrow-next', 'available__arrow-back', '.availableCards');\r\n    });\r\n}\n\n//# sourceURL=webpack://if-js/./src/searchAndSendForm.js?");

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slider\": () => (/* binding */ slider)\n/* harmony export */ });\nfunction slider(arrowNextEl, arrowBackEl, cardsSelector) {\r\n    const homesArrowNextEl = document.getElementById(arrowNextEl);\r\n    const homesArrowBackEl = document.getElementById(arrowBackEl);\r\n\r\n    let startNumberSlider = 0;\r\n    let nextNumberSlider = 4;\r\n\r\n    const homesCardsElements = document.querySelectorAll(cardsSelector);\r\n    //  console.log(homesCardsElements);\r\n\r\n    if (homesCardsElements.length <= 3) {\r\n        homesArrowNextEl.classList.add('display-none');\r\n    }\r\n\r\n    homesArrowNextEl.addEventListener('click', () => {\r\n        homesCardsElements[startNumberSlider].classList.add('display-none');\r\n        homesCardsElements[nextNumberSlider].classList.remove('display-none');\r\n\r\n        if (nextNumberSlider === homesCardsElements.length - 1) {\r\n            homesArrowNextEl.classList.add('display-none');\r\n            return;\r\n        }\r\n        startNumberSlider++;\r\n        nextNumberSlider++;\r\n        console.log(startNumberSlider)\r\n\r\n        if (startNumberSlider > 0) {\r\n            homesArrowBackEl.classList.remove('display-none');\r\n        }\r\n    });\r\n\r\n    homesArrowBackEl.addEventListener('click', () => {\r\n        if (nextNumberSlider === homesCardsElements.length - 1) {\r\n            homesArrowNextEl.classList.remove('display-none');\r\n        }\r\n\r\n        homesCardsElements[nextNumberSlider].classList.add('display-none');\r\n        homesCardsElements[startNumberSlider].classList.remove('display-none');\r\n        if (startNumberSlider === 0) {\r\n            homesArrowBackEl.classList.add('display-none');\r\n            return;\r\n        }\r\n        startNumberSlider--;\r\n        nextNumberSlider--;\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://if-js/./src/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;