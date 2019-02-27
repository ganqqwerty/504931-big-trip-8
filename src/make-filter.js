
/**
 *
 * @param {String} title
 * @param {boolean} isChecked
 * @return {string}
 */
export default (title, isChecked = false) => `
    <input
      type="radio" 
      id="filter-${title.toLowerCase()}" 
      name="filter" 
      value="${title.toLowerCase()}" 
      ${isChecked ? ` checked` : ``}
      />
    <label class="trip-filter__item" for="filter-${title.toLowerCase()}">${title}</label>
  `;
