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

/***/ "./src/create-element.js":
/*!*******************************!*\
  !*** ./src/create-element.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
});


/***/ }),

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
 * @return {Array} descriptionList
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
    description: generateDescription(),
  };
};
/**
 * @param {Number} count
 * @return {Array} eventList
 */
const generateEventList = function (count = EVENT_QUANTITY) {
  let eventList = [];
  let eventItem;
  for (let i = 0; i < count; i++) {
    do {
      eventItem = generateEvent();
    } while (eventList.indexOf(eventItem) !== -1);
    eventList.push(eventItem);
  }
  return eventList;
};




/***/ }),

/***/ "./src/event-edit.js":
/*!***************************!*\
  !*** ./src/event-edit.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventEdit; });
/* harmony import */ var _create_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-element.js */ "./src/create-element.js");


class EventEdit {
  constructor(data) {
    this._title = data.title;
    this._type = data.type;
    this._departureTime = data.departureTime;
    this._arrivalTime = data.arrivalTime;
    this._duration = data.duration;
    this._price = data.price;
    this._offer = data.offer;
    this._element = null;
    this._onSubmit = null;
    this._onReset = null;
  }

  _onSubmitClick(evt) {
    evt.preventDefault();
    if (typeof this._onSubmit === `function`) {
      this._onSubmit();
    }
  }

  _onResetClick(evt) {
    evt.preventDefault();
    if (typeof this._onReset === `function`) {
      this._onReset();
    }
  }

  set onSubmit(fn) {
    this._onSubmit = fn;
  }

  set onReset(fn) {
    this._onReset = fn;
  }

  get element() {
    return this._element;
  }

  get template() {
    return `
    <article class="point">
      <form action="" method="get">
        <header class="point__header">
          <label class="point__date">
            choose day
            <input class="point__input" type="text" placeholder="MAR 18" name="day">
          </label>
    
          <div class="travel-way">
            <label class="travel-way__label" for="travel-way__toggle">${this._type}️</label>
    
            <input type="checkbox" class="travel-way__toggle visually-hidden" id="travel-way__toggle">
    
            <div class="travel-way__select">
              <div class="travel-way__select-group">
                <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-taxi" name="travel-way" value="taxi">
                <label class="travel-way__select-label" for="travel-way-taxi">🚕 taxi</label>
    
                <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-bus" name="travel-way" value="bus">
                <label class="travel-way__select-label" for="travel-way-bus">🚌 bus</label>
    
                <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-train" name="travel-way" value="train">
                <label class="travel-way__select-label" for="travel-way-train">🚂 train</label>
    
                <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-flight" name="travel-way" value="train" checked>
                <label class="travel-way__select-label" for="travel-way-flight">✈️ flight</label>
              </div>
    
              <div class="travel-way__select-group">
                <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-check-in" name="travel-way" value="check-in">
                <label class="travel-way__select-label" for="travel-way-check-in">🏨 check-in</label>
    
                <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-sightseeing" name="travel-way" value="sight-seeing">
                <label class="travel-way__select-label" for="travel-way-sightseeing">🏛 sightseeing</label>
              </div>
            </div>
          </div>
    
          <div class="point__destination-wrap">
            <label class="point__destination-label" for="destination"></label>
            <input class="point__destination-input" list="destination-select" id="destination" value="${this._title}" name="destination">
            <datalist id="destination-select">
              <option value="airport"></option>
              <option value="Geneva"></option>
              <option value="Chamonix"></option>
              <option value="hotel"></option>
            </datalist>
          </div>
    
          <label class="point__time">
            choose time
            <input class="point__input" type="text" value="${this._departureTime} — ${this._arrivalTime}" name="time" placeholder="${this._departureTime} — ${this._arrivalTime}">
          </label>
    
          <label class="point__price">
            write price
            <span class="point__price-currency">€</span>
            <input class="point__input" type="text" value="${this._price}" name="price">
          </label>
    
          <div class="point__buttons">
            <button class="point__button point__button--save" type="submit">Save</button>
            <button class="point__button" type="reset">Delete</button>
          </div>
    
          <div class="paint__favorite-wrap">
            <input type="checkbox" class="point__favorite-input visually-hidden" id="favorite" name="favorite">
            <label class="point__favorite" for="favorite">favorite</label>
          </div>
        </header>
    
        <section class="point__details">
          <section class="point__offers">
            <h3 class="point__details-title">offers</h3>
    
            <div class="point__offers-wrap">
              <input class="point__offers-input visually-hidden" type="checkbox" id="add-luggage" name="offer" value="add-luggage">
              <label for="add-luggage" class="point__offers-label">
                <span class="point__offer-service">${this._offer}</span> + €<span class="point__offer-price">30</span>
              </label>
    
              <input class="point__offers-input visually-hidden" type="checkbox" id="switch-to-comfort-class" name="offer" value="switch-to-comfort-class">
              <label for="switch-to-comfort-class" class="point__offers-label">
                <span class="point__offer-service">${this._offer}</span> + €<span class="point__offer-price">100</span>
              </label>
    
              <input class="point__offers-input visually-hidden" type="checkbox" id="add-meal" name="offer" value="add-meal">
              <label for="add-meal" class="point__offers-label">
                <span class="point__offer-service">${this._offer}</span> + €<span class="point__offer-price">15</span>
              </label>
    
              <input class="point__offers-input visually-hidden" type="checkbox" id="choose-seats" name="offer" value="choose-seats">
              <label for="choose-seats" class="point__offers-label">
                <span class="point__offer-service">${this._offer}</span> + €<span class="point__offer-price">5</span>
              </label>
            </div>
    
          </section>
          <section class="point__destination">
            <h3 class="point__details-title">Destination</h3>
            <p class="point__destination-text">Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.</p>
            <div class="point__destination-images">
              <img src="http://picsum.photos/330/140?r=123" alt="picture from place" class="point__destination-image">
              <img src="http://picsum.photos/300/200?r=1234" alt="picture from place" class="point__destination-image">
              <img src="http://picsum.photos/300/100?r=12345" alt="picture from place" class="point__destination-image">
              <img src="http://picsum.photos/200/300?r=123456" alt="picture from place" class="point__destination-image">
              <img src="http://picsum.photos/100/300?r=1234567" alt="picture from place" class="point__destination-image">
            </div>
          </section>
          <input type="hidden" class="point__total-price" name="total-price" value="">
        </section>
      </form>
  </article>
    `.trim();
  }

  bind() {
    this._element.querySelector(`form`)
      .addEventListener(`submit`, this._onSubmitClick.bind(this));
    this._element.querySelector(`button[type="reset"]`)
      .addEventListener(`click`, this._onResetClick.bind(this));
  }

  unbind() {
    this._element.querySelector(`form`)
      .removeEventListener(`submit`, this._onSubmitClick);
    this._element.querySelector(`button[type="reset"]`)
      .removeEventListener(`click`, this._onResetClick.bind(this));
  }

  render() {
    this._element = Object(_create_element_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.template);
    this.bind();
    return this._element;
  }

  unrender() {
    this.unbind();
    this._element = null;
  }
}


/***/ }),

/***/ "./src/event.js":
/*!**********************!*\
  !*** ./src/event.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Event; });
/* harmony import */ var _create_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-element.js */ "./src/create-element.js");


class Event {
  constructor(data) {
    this._title = data.title;
    this._type = data.type;
    this._departureTime = data.departureTime;
    this._arrivalTime = data.arrivalTime;
    this._duration = data.duration;
    this._price = data.price;
    this._offer = data.offer;
    this._element = null;
    this._onEdit = null;
  }

  _onClick() {
    if (typeof this._onEdit === `function`) {
      this._onEdit();
    }
  }

  get element() {
    return this._element;
  }

  set onEdit(fn) {
    this._onEdit = fn;
  }

  get template() {
    return `
        <article class="trip-point">
          <i class="trip-icon">${this._type}</i>
          <h3 class="trip-point__title">${this._title}</h3>
          <p class="trip-point__schedule">
            <span class="trip-point__timetable">${this._departureTime}&nbsp;&mdash; ${this._arrivalTime}</span>
            <span class="trip-point__duration">${this._duration}</span>
          </p>
          <p class="trip-point__price">€ ${this._price}</p>
          <ul class="trip-point__offers">
            <li>
              <button class="trip-point__offer">${this._offer}</button>
            </li>
            <li>
              <button class="trip-point__offer">${this._offer}</button>
            </li>
          </ul>
        </article>
  `.trim();
  }

  bind() {
    this._element.querySelector(`.trip-point__title`)
      .addEventListener(`click`, this._onClick.bind(this));
  }

  unbind() {
    this._element.querySelector(`.trip-point__title`)
      .removeEventListener(`click`, this._onClick);
  }

  render() {
    this._element = Object(_create_element_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.template);
    this.bind();
    return this._element;
  }

  unrender() {
    this.unbind();
    this._element = null;
  }
}


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
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event.js */ "./src/event.js");
/* harmony import */ var _event_edit_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-edit.js */ "./src/event-edit.js");





// const MAX_EVENT_COUNT = 10;
// const MIN_EVENT_COUNT = 1;
const filterSection = document.querySelector(`.trip-filter`);
const eventSection = document.querySelector(`.trip-day__items`);

filterSection.insertAdjacentHTML(`beforeend`, Object(_make_filter_js__WEBPACK_IMPORTED_MODULE_1__["default"])(`Everything`, true));
filterSection.insertAdjacentHTML(`beforeend`, Object(_make_filter_js__WEBPACK_IMPORTED_MODULE_1__["default"])(`Future`));
filterSection.insertAdjacentHTML(`beforeend`, Object(_make_filter_js__WEBPACK_IMPORTED_MODULE_1__["default"])(`Past`));

// filterSection.addEventListener(`click`, function (evt) {
//   evt.preventDefault();
//   eventSection.innerHTML = ``;
//   let randomEventNumber = Math.floor(Math.random() * (MAX_EVENT_COUNT - MIN_EVENT_COUNT) + MIN_EVENT_COUNT);
//   renderEvent(eventSection, eventList(randomEventNumber));
// });

/**
 * @param {Node} section
 * @param {Array} arr
 */
const renderEvents = function (section, arr) {
  arr.forEach(function (element) {
    const eventComponent = new _event_js__WEBPACK_IMPORTED_MODULE_2__["default"](element);
    const editEventComponent = new _event_edit_js__WEBPACK_IMPORTED_MODULE_3__["default"](element);
    section.appendChild(eventComponent.render());

    eventComponent.onEdit = () => {
      editEventComponent.render();
      section.replaceChild(editEventComponent.element, eventComponent.element);
      eventComponent.unrender();
    };

    editEventComponent.onSubmit = () => {
      eventComponent.render();
      section.replaceChild(eventComponent.element, editEventComponent.element);
      editEventComponent.unrender();
    };

    editEventComponent.onReset = () => {
      eventComponent.render();
      section.replaceChild(eventComponent.element, editEventComponent.element);
      editEventComponent.unrender();
    };
  });
};

renderEvents(eventSection, Object(_data_js__WEBPACK_IMPORTED_MODULE_0__["generateEventList"])());



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