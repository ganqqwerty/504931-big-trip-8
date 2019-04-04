import {generateEventList} from './data.js';
import Event from './event.js';
import EventEdit from './event-edit.js';
import Filter from './filter.js';
import {moneyChart, transportChart} from "./charts";
import {Offer, Filters, api} from "./data";

const eventSection = document.querySelector(`.trip-day__items`);
const filtersForm = document.querySelector(`.trip-filter`);
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
      element.destination = newObject.destination;
      element.type = newObject.type;
      element.departureTime = newObject.departureTime;
      element.arrivalTime = newObject.arrivalTime
      element.price = parseInt(newObject.price, 10);
      element.checkedOffers = newObject.checkedOffers;
      api.updateEvents(element.id, element.toRAW())
        .then((newPoint) => {
          eventComponent.update(newPoint);
          eventComponent.render();
          section.replaceChild(eventComponent.element, editEventComponent.element);
          editEventComponent.unrender();
        });
    };

    editEventComponent.onDelete = (id) => {
      api.deleteEvent(id)
        .then(() => api.getPoints())
        .then((points) => {
          renderEvents(eventSection, points);
        });
    };
  });
};


// Фильтры
const renderFilters = function (events) {
  Filters.forEach((item) => {
    const filter = new Filter(item.name, item.title);
    filter.onFilter = () => {
      const filteredEvents = events.filter(item.filter);
      renderEvents(eventSection, filteredEvents);
    };
    filtersForm.appendChild(filter.render());
  });
};


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

api.getPoints()
  .then((points) => {
    renderEvents(eventSection, points);
    renderFilters(points);
  });
