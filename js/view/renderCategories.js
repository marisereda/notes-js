import { elRefs } from '../handlers/refs.js';
import { getCategoryIcon } from '../model/categoriesStore.js';
import * as categoriesStore from '../model/categoriesStore.js';
import * as notesStore from '../model/notesStore.js';

export function renderCategories() {
  const categories = categoriesStore.getCategories();
  const html = categories.map((category) => getCategoriesTemplate(category));
  elRefs.categories.list.innerHTML = html.join('\n');
}

function getCategoriesTemplate(category) {
  return `<li
  data-category="${category}"
  class="flex items-center justify-center gap-2 p-3 border rounded bg-slate-200 border-slate-400"
>
  <div class="w-1/12">
    <svg
      class="block p-2 mx-auto bg-teal-700 rounded-full fill-white w-9 h-9"
    >
      <use href=${getCategoryIcon(category)}></use>
    </svg>
  </div>
  <p class="w-4/12">${category}</p>
  <p class="w-3/12 text-center">${notesStore.getActiveNotesAmount(category)}</p>
  <p class="w-3/12 text-center">${notesStore.getArchivedNotesAmount(
    category
  )}</p>
  <div class="w-1/12 text-teal-700">
    <button id="open-arch">
      <svg class="block w-5 h-5 fill-current">
        <use href="./images/icons.svg#icon-open"></use>
      </svg>
    </button>
  </div>
</li>`;
}
