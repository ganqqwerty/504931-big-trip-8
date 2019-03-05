import {generateEventList as eventList} from "./data.js";
import makeFilter from './make-filter.js';
import makeEvent from './make-event.js';

const MAX_EVENT_COUNT = 10;
const MIN_EVENT_COUNT = 1;
const filterSection = document.querySelector(`.trip-filter`);
const eventSection = document.querySelector(`.trip-day__items`);

filterSection.insertAdjacentHTML(`beforeend`, makeFilter(`Everything`, true));
filterSection.insertAdjacentHTML(`beforeend`, makeFilter(`Future`));
filterSection.insertAdjacentHTML(`beforeend`, makeFilter(`Past`));

/**
 * @param {Element} section
 * @param {Array} arr
 */
const renderEvent = function (section, arr) {
  arr = arr.map(makeEvent);
  section.insertAdjacentHTML(`beforeend`, arr.join(``));
};


renderEvent(eventSection, eventList());

filterSection.addEventListener(`click`, function (evt) {
  evt.preventDefault();
  eventSection.innerHTML = ``;
  let randomEventNumber = Math.floor(Math.random() * (MAX_EVENT_COUNT - MIN_EVENT_COUNT) + MIN_EVENT_COUNT);
  renderEvent(eventSection, eventList(randomEventNumber));
});
