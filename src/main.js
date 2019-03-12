import {generateEventList as eventList} from './data.js';
import makeFilter from './make-filter.js';
import Event from './event.js';
import EventEdit from './event-edit.js';

// const MAX_EVENT_COUNT = 10;
// const MIN_EVENT_COUNT = 1;
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

/**
 * @param {Node} section
 * @param {Array} arr
 */
const renderEvents = function (section, arr) {
  arr.forEach(function (element) {
    const eventComponent = new Event(element);
    const editEventComponent = new EventEdit(element);
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

renderEvents(eventSection, eventList());

