import { initialCategories } from '../constants.js';

const categoriesStore = [...initialCategories];

let categoryCurrent;

export function setCategoryCurrent(category) {
  categoryCurrent = category;
}

export function getCategoryCurrent() {
  return categoryCurrent;
}

export function getCategories() {
  return categoriesStore.map((category) => category.name);
}

export function getCategoryIcon(name) {
  const category = categoriesStore.find((category) => category.name === name);
  return category.icon;
}
