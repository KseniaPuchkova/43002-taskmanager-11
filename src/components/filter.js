import {createElement} from '../utils.js';

const createFilterMarkup = (filter, isChecked) => {
  const {name, count} = filter;
  return (
    `<section class="main__filter filter container">
        <input
        type="radio"
        id="filter__${name}"
        class="filter__input visually-hidden"
        name="filter"
        ${isChecked ? `checked` : ``}/>
        <label for="filter__${name}" class="filter__label">${name}
           <span class="filter__${name}-count">${count}</span>
        </label>
      </section>`
  );
};

export const createFilterTemplate = (filters) => {
  const filtersMarkup = filters.map((it, i) => createFilterMarkup(it, i === 0)).join(`\n`);

  return `<section class="main__filter filter container">${filtersMarkup}</section>`;
};

export default class Filter {
  constructor(filter) {
    this._element = null;
    this._filter = filter;
  }

  getTemplate() {
    return createFilterTemplate(this._filter);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
