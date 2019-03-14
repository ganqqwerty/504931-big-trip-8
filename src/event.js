import createElement from './create-element.js';

export default class Event {
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
    if (this._element !== null) {
      this._element.querySelector(`.trip-point__title`)
        .addEventListener(`click`, this._onClick.bind(this));
    }
  }

  unbind() {
    if (this._element !== null) {
      this._element.querySelector(`.trip-point__title`)
        .removeEventListener(`click`, this._onClick);
    }
  }

  render() {
    this._element = createElement(this.template);
    this.bind();
    return this._element;
  }

  unrender() {
    this.unbind();
    this._element = null;
  }
}
