import {generateEventList as eventList} from './data.js';
import makeFilter from './make-filter.js';

const MAX_EVENT_COUNT = 10;
const MIN_EVENT_COUNT = 1;
const filterSection = document.querySelector(`.trip-filter`);
const eventSection = document.querySelector(`.trip-day__items`);

filterSection.insertAdjacentHTML(`beforeend`, makeFilter(`Everything`, true));
filterSection.insertAdjacentHTML(`beforeend`, makeFilter(`Future`));
filterSection.insertAdjacentHTML(`beforeend`, makeFilter(`Past`));

// filterSection.addEventListener(`click`, function (evt) {
//   evt.preventDefault();
//   eventSection.innerHTML = ``;
//   let randomEventNumber = Math.floor(Math.random() * (MAX_EVENT_COUNT - MIN_EVENT_COUNT) + MIN_EVENT_COUNT);
//   renderEvent(eventSection, eventList(randomEventNumber));
// });

const renderEvents = function (section, arr) {
  arr.forEach(function (element) {
    element.render(section);
  });
};

renderEvents(eventSection, eventList());
