import moment from 'moment';
import API from "./api";

const AUTHORIZATION = `Basic eo0w590ik29889m`;
const END_POINT = `https://es8-demo-srv.appspot.com/big-trip/`;
const api = new API({endPoint: END_POINT, authorization: AUTHORIZATION});
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
  `taxi`,
  `bus`,
  `train`,
  `flight`,
  `checkin`,
  `sightseeing`
];

const Type = {
  taxi: `🚕`,
  bus: `🚌`,
  train: `🚂`,
  flight: `✈️`,
  checkin: `🏨`,
  sightseeing: `🏛️`
};

const CITY = [
  `Vienna`,
  `London`,
  `Boston`,
  `Amsterdam`
];

const OFFER_LIST = [
  `luggage`,
  `class`,
  `meal`,
  `seats`
];

const Offer = {
  luggage: {
    title: `Add luggage`,
    price: 30
  },
  class: {
    title: `Switch to comfort class`,
    price: 100
  },
  meal: {
    title: `Add meal`,
    price: 15
  },
  seats: {
    title: `Choose seats`,
    price: 5
  }
};

let destinationList = [];
api.getDestinations()
  .then((destinations) => {
    destinationList = destinations;
  });

let offerList = [];
api.getOffers()
  .then((offers) => {
    offerList = offers;
  });

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

const Filters = [
  {
    title: `Everything`,
    name: `everything`,
    filter: () => true
  },
  {
    title: `Future`,
    name: `future`,
    filter: (it) => it.departureTime > moment()
  },
  {
    title: `Past`,
    name: `past`,
    filter: (it) => it.arrivalTime < moment()
  },
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
  let offerQuantity = generateRandomInteger(0, 4);
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
 * @return {moment.Moment}
 */
const renderTime = function () {
  let randomTime = Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000;
  let time = moment(randomTime);
  time.hours(generateRandomInteger(0, 23));
  time.minutes(generateRandomInteger(0, 59));
  return time;
};


const generateEvent = () => {
  return {
    title: EVENT_TITLE[generateRandomInteger(0, EVENT_TITLE.length - 1)],
    type: EVENT_TYPE[generateRandomInteger(0, EVENT_TYPE.length)],
    city: CITY[generateRandomInteger(0, CITY.length - 1)],
    price: generateRandomInteger(PRICE_MIN, PRICE_MAX),
    departureTime: renderTime(),
    arrivalTime: renderTime(),
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

export {generateEventList, Type, Offer, Filters, api, destinationList, offerList};
