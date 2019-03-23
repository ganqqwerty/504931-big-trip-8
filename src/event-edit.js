import Component from './component.js';
import flatpickr from 'flatpickr';
import moment from 'moment';
import {Type, Offer} from './data.js';
import createElement from './create-element.js';

export default class EventEdit extends Component {
  constructor(data) {
    super();
    this._title = data.title;
    this._type = data.type;
    this._departureTime = data.departureTime;
    this._arrivalTime = data.arrivalTime;
    this._price = data.price;
    this._offer = data.offer;
    this._onSubmit = null;
    this._onReset = null;
    this._state.isFavorite = false;
    this._onResetClick = this._onResetClick.bind(this);
    this._onSubmitClick = this._onSubmitClick.bind(this);
    this._onChangeFavorite = this._onChangeFavorite.bind(this);
    this._onChangeType = this._onChangeType.bind(this);
  }

  _processForm(formData) {
    const entry = {
      title: ``,
      type: ``,
      price: ``,
      departureTime: ``,
      arrivalTime: ``,
      offer: [],
    };

    const eventEditMapper = EventEdit.createMapper(entry);
    for (const pair of formData.entries()) {
      const [property, value] = pair;
      if (typeof eventEditMapper[property] === `function`) {
        eventEditMapper[property](value);
      }
    }
    return entry;
  }


  _onSubmitClick(evt) {
    evt.preventDefault();

    const formData = new FormData(this._element.querySelector(`form`));
    const newData = this._processForm(formData);
    if (typeof this._onSubmit === `function`) {
      this._onSubmit(newData);
    }
    this.update(newData);
  }

  _onResetClick(evt) {
    evt.preventDefault();
    if (typeof this._onReset === `function`) {
      this._onReset();
    }
  }

  _onChangeType(evt) {
    this._element.querySelector(`.travel-way__label`).textContent = Type[evt.target.value];
  }

  _onChangeFavorite() {
    this._state.isFavorite = !this._state.isFavorite;
    const formData = new FormData(this._element.querySelector(`form`));
    const newData = this._processForm(formData);
    this.update(newData);
    this.unbind();
    this._partialUpdate();
    this.bind();
  }

  _partialUpdate() {
    let newElement = createElement(this.template);
    this._element.innerHTML = newElement.innerHTML;
  }

  set onSubmit(fn) {
    this._onSubmit = fn;
  }

  set onReset(fn) {
    this._onReset = fn;
  }

  get template() {
    return `
    <article class="point">
      <form action="" method="get">
        <header class="point__header">
          <label class="point__date">
            choose day
            <input class="point__input" type="text" placeholder="MAR 18" name="day">
          </label>
    
          <div class="travel-way">
            <label class="travel-way__label" for="travel-way__toggle">${Type[this._type]}️</label>
    
            <input type="checkbox" class="travel-way__toggle visually-hidden" id="travel-way__toggle">
    
            <div class="travel-way__select">
              <div class="travel-way__select-group">
                <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-taxi" name="type" value="taxi" ${this._type === `taxi` && `checked`}>
                <label class="travel-way__select-label" for="travel-way-taxi">🚕 taxi</label>

                <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-bus" name="type" value="bus" ${this._type === `bus` && `checked`}>
                <label class="travel-way__select-label" for="travel-way-bus">🚌 bus</label>

                <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-train" name="type" value="train" ${this._type === `train` && `checked`}>
                <label class="travel-way__select-label" for="travel-way-train">🚂 train</label>

                <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-flight" name="type" value="flight" ${this._type === `flight` && `checked`}>
                <label class="travel-way__select-label" for="travel-way-flight">✈️ flight</label>
              </div>

              <div class="travel-way__select-group">
                <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-check-in" name="type" value="checkin" ${this._type === `checkin` && `checked`}>
                <label class="travel-way__select-label" for="travel-way-check-in">🏨 check-in</label>

                <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-sightseeing" name="type" value="sightseeing" ${this._type === `sightseeing` && `checked`}>
                <label class="travel-way__select-label" for="travel-way-sightseeing">🏛 sightseeing</label>
              </div>
            </div>
          </div>

          <div class="point__destination-wrap">
            <label class="point__destination-label" for="destination"></label>
            <input class="point__destination-input" list="destination-select" id="destination" value="${this._title}" name="destination">
            <datalist id="destination-select">
              <option value="airport"></option>
              <option value="Geneva"></option>
              <option value="Chamonix"></option>
              <option value="hotel"></option>
            </datalist>
          </div>

          <label class="point__time">
            choose time
            <input class="point__input" type="text" value="${this._departureTime.format(`YYYY-MM-DD HH:mm`)}" name="time" placeholder="${this._departureTime} — ${this._arrivalTime}">
          </label>

          <label class="point__price">
            write price
            <span class="point__price-currency">€</span>
            <input class="point__input" type="text" value="${this._price}" name="price">
          </label>

          <div class="point__buttons">
            <button class="point__button point__button--save" type="submit">Save</button>
            <button class="point__button" type="reset">Delete</button>
          </div>

          <div class="paint__favorite-wrap">
            <input type="checkbox" class="point__favorite-input visually-hidden" id="favorite" name="favorite" ${this._state.isFavorite && `checked`}>
            <label class="point__favorite" for="favorite">favorite</label>
          </div>
        </header>

        <section class="point__details">
          <section class="point__offers">
            <h3 class="point__details-title">offers</h3>

            <div class="point__offers-wrap">
              <input class="point__offers-input visually-hidden" type="checkbox" id="add-luggage" name="offer" value="luggage" ${this._offer.indexOf(`luggage`) !== -1 && `checked`}>
              <label for="add-luggage" class="point__offers-label">
                <span class="point__offer-service">Add luggage</span> + €<span class="point__offer-price">${Offer[`luggage`].price}</span>
              </label>

              <input class="point__offers-input visually-hidden" type="checkbox" id="switch-to-comfort-class" name="offer" value="class" ${this._offer.indexOf(`class`) !== -1 && `checked`}>
              <label for="switch-to-comfort-class" class="point__offers-label">
                <span class="point__offer-service">Switch to comfort class</span> + €<span class="point__offer-price">${Offer[`class`].price}</span>
              </label>

              <input class="point__offers-input visually-hidden" type="checkbox" id="add-meal" name="offer" value="meal" ${this._offer.indexOf(`meal`) !== -1 && `checked`}>
              <label for="add-meal" class="point__offers-label">
                <span class="point__offer-service">Add meal </span> + €<span class="point__offer-price">${Offer[`meal`].price}</span>
              </label>

              <input class="point__offers-input visually-hidden" type="checkbox" id="choose-seats" name="offer" value="seats" ${this._offer.indexOf(`seats`) !== -1 && `checked`}>
              <label for="choose-seats" class="point__offers-label">
                <span class="point__offer-service">Choose seats</span> + €<span class="point__offer-price">${Offer[`seats`].price}</span>
              </label>
            </div>

          </section>
          <section class="point__destination">
            <h3 class="point__details-title">Destination</h3>
            <p class="point__destination-text">Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.</p>
            <div class="point__destination-images">
              <img src="http://picsum.photos/330/140?r=123" alt="picture from place" class="point__destination-image">
              <img src="http://picsum.photos/300/200?r=1234" alt="picture from place" class="point__destination-image">
              <img src="http://picsum.photos/300/100?r=12345" alt="picture from place" class="point__destination-image">
              <img src="http://picsum.photos/200/300?r=123456" alt="picture from place" class="point__destination-image">
              <img src="http://picsum.photos/100/300?r=1234567" alt="picture from place" class="point__destination-image">
            </div>
          </section>
          <input type="hidden" class="point__total-price" name="total-price" value="">
        </section>
      </form>
  </article>
    `.trim();
  }

  // Вызов метода bind() возможен только после вызова render()
  bind() {
    this._element.querySelector(`form`)
      .addEventListener(`submit`, this._onSubmitClick);
    this._element.querySelector(`button[type="reset"]`)
      .addEventListener(`click`, this._onResetClick);
    this.element.querySelector(`.point__favorite-input`)
      .addEventListener(`click`, this._onChangeFavorite);
    this.element.querySelectorAll(`input[name="type"]`).forEach((radio) => {
      radio.addEventListener(`change`, this._onChangeType);
    });
    let timeInput = this._element.querySelector(`input[name='time']`);
    flatpickr(timeInput, {enableTime: true, dateFormat: `Y-m-d H:i`});
  }

  // Вызов метода unbind() возможен только после вызова render()
  unbind() {
    this._element.querySelector(`form`)
      .removeEventListener(`submit`, this._onSubmitClick);
    this._element.querySelector(`button[type="reset"]`)
      .removeEventListener(`click`, this._onResetClick);
    this.element.querySelector(`.point__favorite-input`)
      .removeEventListener(`click`, this._onChangeFavorite);
    this.element.querySelectorAll(`input[name="type"]`).forEach((radio) => {
      radio.removeEventListener(`change`, this._onChangeType);
    });
  }

  update(data) {
    this._title = data.title;
    this._type = data.type;
    this._price = data.price;
    this._arrivalTime = data.arrivalTime;
    this._departureTime = data.departureTime;
    this._offer = data.offer;
  }

  static createMapper(target) {
    return {
      type: (value) => {
        target.type = value;
      },
      destination: (value) => {
        target.title = value;
      },
      price: (value) => {
        target.price = value;
      },
      offer: (value) => {
        target.offer.push(value);
      },
      time: (value) => {
        target.departureTime = moment(value);
      }
    };
  }
}
