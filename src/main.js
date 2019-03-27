import {generateEventList} from './data.js';
import Event from './event.js';
import EventEdit from './event-edit.js';
import Filter from './filter.js';
import moment from "moment";
import {moneyChart, transportChart} from "./charts";
import {Offer} from "./data";

const eventSection = document.querySelector(`.trip-day__items`);
const filters = document.querySelector(`.trip-filter`);
const eventList = generateEventList();
/**
 * @param {Array} array
 * @param {Element} itemToDelete
 * @return {Array}
 */
const deleteEvent = (array, itemToDelete) => {
  const index = array.findIndex((it) => it === itemToDelete);
  delete array[index];
  return array;
};

const filterEvents = (events, filterName) => {
  switch (filterName) {
    case `filter-everything`:
      return events;
    case `filter-future`:
      return events.filter((it) => it.departureTime > moment());
    case `filter-past`:
      return events.filter((it) => it.arrivalTime < moment());
  }
};

/**
 * @param {Element} section
 * @param {Array} arr
 */
const renderEvents = function (section, arr) {
  section.innerHTML = ``;

  arr.forEach(function (element) {
    const eventComponent = new Event(element);
    const editEventComponent = new EventEdit(element);
    section.appendChild(eventComponent.render());

    eventComponent.onEdit = () => {
      editEventComponent.render();
      section.replaceChild(editEventComponent.element, eventComponent.element);
      eventComponent.unrender();
    };

    editEventComponent.onSubmit = (newObject) => {
      eventComponent.update(newObject);
      eventComponent.render();
      section.replaceChild(eventComponent.element, editEventComponent.element);
      editEventComponent.unrender();
    };

    editEventComponent.onDelete = () => {
      deleteEvent(arr, element);
      section.removeChild(editEventComponent.element);
    };
  });
};
renderEvents(eventSection, eventList);
// const renderFilters = function () {
//   const filter = new Filter();
//   filter.onFilter = (evt) => {
//     const filterName = evt.target.id;
//     const filteredEvents = filterEvents(eventList, filterName);
//     renderEvents(eventSection, filteredEvents);
//   };
// };



// Статистика транспорта
const eventTypes = eventList.map((item) => item.type);

const filteredTransportTypes = eventTypes.filter((it) => it !== `checkin` && it !== `sightseeing`);
const counts = filteredTransportTypes.reduce((arr, current) => {
  if (arr[current] !== undefined) {
    arr[current]++;
  } else {
    arr[current] = 1;
  }
  return arr;
}, []);

transportChart.data.labels = [...new Set(filteredTransportTypes)];
transportChart.data.datasets[0].data = Object.values(counts);
transportChart.update();

// Статистика затрат
moneyChart.data.labels = [...new Set(eventTypes)];
const priceCount = eventList.reduce((totalPrices, event) => {
  let price = event.offer.reduce(function (totalPrice, current) {
    return totalPrice + Offer[current].price;
  }, event.price);
  if (totalPrices[event.type] !== undefined) {
    totalPrices[event.type] += price;
  } else {
    totalPrices[event.type] = price;
  }
  return totalPrices;
}, []);
moneyChart.data.datasets[0].data = Object.values(priceCount);
moneyChart.update();
