import Component from "./component";

export default class Filter extends Component {
  constructor(name, title) {
    super();
    this._title = title;
    this._name = name;
    this._onFilter = null;
    this._onFilterClick = this._onFilterClick.bind(this);
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
      <span>
        <input type="radio" id="filter-${this._name}" name="filter" value="${this._name}">
         <label class="trip-filter__item" for="filter-${this._name}">${this._title}</label>        
      </span>
        `.trim();
  }

  bind() {
    this._element.querySelector(`#filter-${this._name}`)
      .addEventListener(`click`, this._onFilterClick);
  }

  unbind() {
    this._element.querySelector(`#filter-${this._name}`)
      .removeEventListener(`click`, this._onFilterClick);
  }
}
