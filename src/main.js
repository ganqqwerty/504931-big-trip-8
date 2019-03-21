import {generateEventList as eventList} from './data.js';
import Event from './event.js';
import EventEdit from './event-edit.js';

const eventSection = document.querySelector(`.trip-day__items`);

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


    // editEventComponent.onSubmit = () => {
    //   eventComponent.render();
    //   section.replaceChild(eventComponent.element, editEventComponent.element);
    //   editEventComponent.unrender();
    // };

    editEventComponent.onSubmit = (newObject) => {
      event.title = newObject.title;
      event.price = newObject.price;
      event.offer = newObject.offer;
      event.arrivalTime = newObject.arrivalTime;
      event.departureTime = newObject.departureTime;
      //event.type = newObject.type;
      eventComponent.update(event);
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


