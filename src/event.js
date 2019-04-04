import Component from './component.js';
import {Type} from './data.js';
import moment from 'moment';

export default class Event extends Component {
  constructor(data) {
    super();
    this._id = data.id;
    this._destination = data.destination;
    this._type = data.type;
    this._departureTime = data.departureTime;
    this._arrivalTime = data.arrivalTime;
    this._duration = moment.duration(data.arrivalTime.diff(data.departureTime));
    this._price = data.price;
    this._checkedOffers = data.checkedOffers;
    this._onEdit = null;
  }
  get title() {
    return this._destination.name;
  }
  _onClick() {
    if (typeof this._onEdit === `function`) {
      this._onEdit();
    }
  }

  set onEdit(fn) {
    this._onEdit = fn;
  }

  get totalPrice() {
    return this._checkedOffers.reduce(function (totalPrice, current) {
      return totalPrice + current.price;
    }, this._price);
  }

  get template() {
    let offersList = this._checkedOffers.map((offer) => `
        <li>
          <button class="trip-point__offer">${offer.name}</button>
        </li>
      `.trim()
    );
    return `
        <article class="trip-point">
          <i class="trip-icon">${Type[this._type]}</i>
          <h3 class="trip-point__title">${this.title}</h3>
          <p class="trip-point__schedule">
            <span class="trip-point__timetable">${this._departureTime.format(`HH:mm`)} &nbsp;&mdash; ${this._arrivalTime.format(`HH:mm`)}</span>
            <span class="trip-point__duration">${this._duration.get(`h`)}h ${this._duration.get(`m`)}m</span>
          </p>
          <p class="trip-point__price">€ ${this.totalPrice}</p>
          <ul class="trip-point__offers">
            ${offersList.join(``)}
          </ul>
        </article>
  `.trim();
  }

  // Вызов метода bind() возможен только после вызова render()
  bind() {
    this._element.querySelector(`.trip-point__title`)
      .addEventListener(`click`, this._onClick.bind(this));
  }

  // Вызов метода unbind() возможен только после вызова render()
  unbind() {
    this._element.querySelector(`.trip-point__title`)
      .removeEventListener(`click`, this._onClick);
  }

  update(data) {
    this._destination = data.destination;
    this._type = data.type;
    this._departureTime = data.departureTime;
    this._arrivalTime = data.arrivalTime;
    this._price = parseInt(data.price, 10);
    this._checkedOffers = data.checkedOffers;
  }
}
