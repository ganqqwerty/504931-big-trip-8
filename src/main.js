import makeFilter from './make-filter.js';
import makeEvent from './make-event.js';

const MAX_EVENT_COUNT = 10;
const MIN_EVENT_COUNT = 1;
const EVENT_NUMBER = 7;
const filterSection = document.querySelector(`.trip-filter`);
const eventSection = document.querySelector(`.trip-day__items`);

filterSection.insertAdjacentHTML(`beforeend`, makeFilter(`Everything`, true));
filterSection.insertAdjacentHTML(`beforeend`, makeFilter(`Future`));
filterSection.insertAdjacentHTML(`beforeend`, makeFilter(`Past`));

/**
 * @param {Element} section
 * @param {Number} count
 */
const renderEvent = function (section, count) {
  const events = new Array(count)
    //.fill()
    .map(makeEvent);
  section.insertAdjacentHTML(`beforeend`, events.join(``));
};


renderEvent(eventSection, EVENT_NUMBER);

filterSection.addEventListener(`click`, function (evt) {
  evt.preventDefault();
  eventSection.innerHTML = ``;
  let randomEventNumber = Math.floor(Math.random() * (MAX_EVENT_COUNT - MIN_EVENT_COUNT) + MIN_EVENT_COUNT);
  renderEvent(eventSection, randomEventNumber);
});
