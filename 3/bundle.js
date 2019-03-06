/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: generateEventList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateEventList", function() { return generateEventList; });

const EVENT_QUANTITY = 5;
const PRICE_MIN = 1;
const PRICE_MAX = 1000;
const EVENT_TITLE = [
  `Taxi to Airport`,
  `Taxi to Hotel`,
  `Check-in`,
  `Drive to Restaurant`
];

const EVENT_TYPE = [
  `🚕`,
  `🚌`,
  `🚂`,
  `🛳️`,
  `🚊`,
  `🚗`,
  `✈️`,
  `🏨`,
  `🏛️`,
  `🍴`
];

const CITY = [
  `Vienna`,
  `London`,
  `Boston`,
  `Amsterdam`
];

const OFFER_LIST = [
  `Add luggage`,
  `Switch to comfort class`,
  `Add meal`,
  `Choose seats`
];

const DESCRIPTION_LIST = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

/**
 * @param {number} minValue
 * @param {number} maxValue
 * @return {number}
 */
const generateRandomInteger = (minValue, maxValue) => Math.floor(Math.random() * (maxValue - minValue) + minValue);

/**
 * @return {Array}
 */
const generateOfferList = function () {
  let offerList = [];
  let element = ``;
  let offerQuantity = generateRandomInteger(0, 2);
  for (let i = 0; i < offerQuantity; i++) {
    do {
      element = OFFER_LIST[generateRandomInteger(0, OFFER_LIST.length - 1)];
    } while (offerList.indexOf(element) !== -1);
    offerList.push(element);
  }
  return offerList;
};

/**
 * @return {Array}
 */
const generateDescription = function () {
  let descriptionList = [];
  let description = ``;
  let descriptionAmount = generateRandomInteger(1, 3);
  for (let i = 0; i < descriptionAmount; i++) {
    do {
      description = DESCRIPTION_LIST[generateRandomInteger(0, DESCRIPTION_LIST.length - 1)];
    } while (descriptionList.indexOf(description) !== -1);
    descriptionList.push(description);
  }
  return descriptionList;
};

/**
 * @return {string}
 */
const renderTime = function () {
  let randomTime = Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000;
  let time = new Date(randomTime);
  time.setHours(generateRandomInteger(0, 23));
  time.setMinutes(generateRandomInteger(0, 59));
  return `${time.getHours() < 10 ? `0` + time.getHours() : time.getHours()}:${time.getMinutes() < 10 ? `0` + time.getMinutes() : time.getMinutes()}`;
};

/**
 * @return {Object}
 */
const generateEvent = () => {
  return {
    title: EVENT_TITLE[generateRandomInteger(0, EVENT_TITLE.length - 1)],
    type: EVENT_TYPE[generateRandomInteger(0, EVENT_TYPE.length - 1)],
    city: CITY[generateRandomInteger(0, CITY.length - 1)],
    price: generateRandomInteger(PRICE_MIN, PRICE_MAX),
    departureTime: renderTime(),
    arrivalTime: renderTime(),
    duration: Math.floor(Math.random() * 7),
    picture: `//picsum.photos/300/150?r=${Math.random()}`,
    offer: generateOfferList(),
    description: generateDescription()
  };
};

/**
 * @param {Number} count
 * @return {Array}
 */
const generateEventList = function (count = EVENT_QUANTITY) {
  let eventList = [];
  for (let i = 0; i < count; i++) {
    eventList[i] = generateEvent();
  }
  return eventList;
};




/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
/* harmony import */ var _make_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./make-filter.js */ "./src/make-filter.js");
/* harmony import */ var _make_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./make-event.js */ "./src/make-event.js");




const MAX_EVENT_COUNT = 10;
const MIN_EVENT_COUNT = 1;
const filterSection = document.querySelector(`.trip-filter`);
const eventSection = document.querySelector(`.trip-day__items`);

filterSection.insertAdjacentHTML(`beforeend`, Object(_make_filter_js__WEBPACK_IMPORTED_MODULE_1__["default"])(`Everything`, true));
filterSection.insertAdjacentHTML(`beforeend`, Object(_make_filter_js__WEBPACK_IMPORTED_MODULE_1__["default"])(`Future`));
filterSection.insertAdjacentHTML(`beforeend`, Object(_make_filter_js__WEBPACK_IMPORTED_MODULE_1__["default"])(`Past`));

/**
 * @param {Element} section
 * @param {Array} arr
 */
const renderEvent = function (section, arr) {
  arr = arr.map(_make_event_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
  section.insertAdjacentHTML(`beforeend`, arr.join(``));
};


renderEvent(eventSection, Object(_data_js__WEBPACK_IMPORTED_MODULE_0__["generateEventList"])());

filterSection.addEventListener(`click`, function (evt) {
  evt.preventDefault();
  eventSection.innerHTML = ``;
  let randomEventNumber = Math.floor(Math.random() * (MAX_EVENT_COUNT - MIN_EVENT_COUNT) + MIN_EVENT_COUNT);
  renderEvent(eventSection, Object(_data_js__WEBPACK_IMPORTED_MODULE_0__["generateEventList"])(randomEventNumber));
});


/***/ }),

/***/ "./src/make-event.js":
/*!***************************!*\
  !*** ./src/make-event.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/* harmony default export */ __webpack_exports__["default"] = ((event) =>
  `
  <article class="trip-point">
          <i class="trip-icon">${event.type}</i>
          <h3 class="trip-point__title">${event.title}</h3>
          <p class="trip-point__schedule">
            <span class="trip-point__timetable">${event.departureTime}&nbsp;&mdash; ${event.arrivalTime}</span>
            <span class="trip-point__duration">${event.duration}</span>
          </p>
          <p class="trip-point__price">€ ${event.price}</p>
          <ul class="trip-point__offers">
            <li>
              <button class="trip-point__offer">${event.offer}</button>
            </li>
            <li>
              <button class="trip-point__offer">${event.offer}</button>
            </li>
          </ul>
        </article>
  `);




/***/ }),

/***/ "./src/make-filter.js":
/*!****************************!*\
  !*** ./src/make-filter.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/**
 *
 * @param {String} title
 * @param {boolean} isChecked
 * @return {string}
 */
/* harmony default export */ __webpack_exports__["default"] = ((title, isChecked = false) => `
    <input
      type="radio" 
      id="filter-${title.toLowerCase()}" 
      name="filter" 
      value="${title.toLowerCase()}" 
      ${isChecked ? ` checked` : ``}
      />
    <label class="trip-filter__item" for="filter-${title.toLowerCase()}">${title}</label>
  `);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map