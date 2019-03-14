import createElement from './create-element.js';

export default class EventEdit {
  constructor(data) {
    this._title = data.title;
    this._type = data.type;
    this._departureTime = data.departureTime;
    this._arrivalTime = data.arrivalTime;
    this._duration = data.duration;
    this._price = data.price;
    this._offer = data.offer;
    this._element = null;
    this._onSubmit = null;
    this._onReset = null;
  }

  _onSubmitClick(evt) {
    evt.preventDefault();
    if (typeof this._onSubmit === `function`) {
      this._onSubmit();
    }
  }

  _onResetClick(evt) {
    evt.preventDefault();
    if (typeof this._onReset === `function`) {
      this._onReset();
    }
  }

  set onSubmit(fn) {
    this._onSubmit = fn;
  }

  set onReset(fn) {
    this._onReset = fn;
  }

  get element() {
    return this._element;
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
            <label class="travel-way__label" for="travel-way__toggle">${this._type}️</label>
    
            <input type="checkbox" class="travel-way__toggle visually-hidden" id="travel-way__toggle">
    
            <div class="travel-way__select">
              <div class="travel-way__select-group">
                <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-taxi" name="travel-way" value="taxi">
                <label class="travel-way__select-label" for="travel-way-taxi">🚕 taxi</label>
    
                <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-bus" name="travel-way" value="bus">
                <label class="travel-way__select-label" for="travel-way-bus">🚌 bus</label>
    
                <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-train" name="travel-way" value="train">
                <label class="travel-way__select-label" for="travel-way-train">🚂 train</label>
    
                <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-flight" name="travel-way" value="train" checked>
                <label class="travel-way__select-label" for="travel-way-flight">✈️ flight</label>
              </div>
    
              <div class="travel-way__select-group">
                <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-check-in" name="travel-way" value="check-in">
                <label class="travel-way__select-label" for="travel-way-check-in">🏨 check-in</label>
    
                <input class="travel-way__select-input visually-hidden" type="radio" id="travel-way-sightseeing" name="travel-way" value="sight-seeing">
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
            <input class="point__input" type="text" value="${this._departureTime} — ${this._arrivalTime}" name="time" placeholder="${this._departureTime} — ${this._arrivalTime}">
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
            <input type="checkbox" class="point__favorite-input visually-hidden" id="favorite" name="favorite">
            <label class="point__favorite" for="favorite">favorite</label>
          </div>
        </header>
    
        <section class="point__details">
          <section class="point__offers">
            <h3 class="point__details-title">offers</h3>
    
            <div class="point__offers-wrap">
              <input class="point__offers-input visually-hidden" type="checkbox" id="add-luggage" name="offer" value="add-luggage">
              <label for="add-luggage" class="point__offers-label">
                <span class="point__offer-service">${this._offer}</span> + €<span class="point__offer-price">30</span>
              </label>
    
              <input class="point__offers-input visually-hidden" type="checkbox" id="switch-to-comfort-class" name="offer" value="switch-to-comfort-class">
              <label for="switch-to-comfort-class" class="point__offers-label">
                <span class="point__offer-service">${this._offer}</span> + €<span class="point__offer-price">100</span>
              </label>
    
              <input class="point__offers-input visually-hidden" type="checkbox" id="add-meal" name="offer" value="add-meal">
              <label for="add-meal" class="point__offers-label">
                <span class="point__offer-service">${this._offer}</span> + €<span class="point__offer-price">15</span>
              </label>
    
              <input class="point__offers-input visually-hidden" type="checkbox" id="choose-seats" name="offer" value="choose-seats">
              <label for="choose-seats" class="point__offers-label">
                <span class="point__offer-service">${this._offer}</span> + €<span class="point__offer-price">5</span>
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

  bind() {
    if (this._element !== null) {
      this._element.querySelector(`form`)
        .addEventListener(`submit`, this._onSubmitClick.bind(this));
      this._element.querySelector(`button[type="reset"]`)
        .addEventListener(`click`, this._onResetClick.bind(this));
    }
  }

  unbind() {
    if (this._element !== null) {
      this._element.querySelector(`form`)
        .removeEventListener(`submit`, this._onSubmitClick);
      this._element.querySelector(`button[type="reset"]`)
        .removeEventListener(`click`, this._onResetClick.bind(this));
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
