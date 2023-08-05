import { setCategoryCurrent } from '../model/categoriesStore.js';
import { renderArchive } from '../view/renderArchive.js';
import { openModalArchive } from '../view/renderArchive.js';

export function openArchive(e) {
  const button = e.target.closest('button');
  const categoryItem = e.target.closest('li');

  if (!button) {
    return;
  }

  setCategoryCurrent(categoryItem.dataset.category);
  renderArchive();
  openModalArchive();
}
