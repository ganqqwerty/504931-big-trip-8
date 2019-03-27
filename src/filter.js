import Component from "./component";

export default class Filter extends Component {
  constructor(data) {
    super();
    this._title = data.title;
    this._name = data.name;
    this._onFilter = null;
    this._onFilterClick = this._onFilterClick.bind;
  }

  _onFilterClick() {
    if (typeof this._onFilter === `function`) {
      this._onFilter();
    }
  }

  set onFilter(fn) {
    this._onFilter = fn;
  }

  get template() {
    return `
    <form class="trip-filter">
          <input type="radio" id="filter-everything" name="filter" value="everything" checked>
          <label class="trip-filter__item" for="filter-everything">${this._title}</label>
        </form>`.trim();
  }

  bind() {
    this._element.querySelector(`.trip-filter`)
      .addEventListener(`click`, this._onFilterClick);
  }

  unbind() {
    this._element.querySelector(`.trip-filter`)
      .removeEventListener(`click`, this._onFilterClick);
  }
}
