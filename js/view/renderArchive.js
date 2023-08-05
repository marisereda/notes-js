import { elRefs } from '../handlers/refs.js';
import { findDates, formatDate } from '../helpers.js';
import * as notesStore from '../model/notesStore.js';
import { getCategoryIcon } from '../model/categoriesStore.js';
import * as categoriesStore from '../model/categoriesStore.js';
import { addArchiveEvents } from '../handlers/addEvents.js';
import { removeArchiveEvents } from '../handlers/removeEvents.js';

// ----------------------------------------------------------------

export function renderArchive() {
  const currentCategory = categoriesStore.getCategoryCurrent();
  const notes = notesStore
    .getZipNotes()
    .filter((note) => note.category === currentCategory);
  if (notes.length === 0) {
    closeModalArchive();
  }
  const html = notes.map((note) => getArchiveTemplate(note));
  elRefs.archive.list.innerHTML = html.join('\n');
}

// ----------------------------------------------------------------

function getArchiveTemplate(note) {
  return `<li data-category="${note.category}" data-id="${note.id}"
  class="flex items-center justify-center gap-2 p-3 border rounded bg-slate-200 border-slate-400"
>
  <div class="w-1/12">
    <svg
      class="block p-2 mx-auto bg-teal-700 rounded-full fill-white w-9 h-9"
    >
      <use href=${getCategoryIcon(note.category)}></use>
    </svg>
  </div>
  <p class="w-2/12 line-clamp-1">${note.name}</p>
  <p class="w-2/12 line-clamp-1">${formatDate(note.created)}</p>
  <p class="w-2/12 line-clamp-1">${note.category}</p>
  <p class="w-2/12 line-clamp-1">${note.content}</p>
  <p class="w-2/12 line-clamp-1">${findDates(note.content)}</p>
  <div class="flex justify-center w-1/12 gap-3 text-teal-700">
    <button data-operation="arch-activate">
      <svg class="block w-5 h-5 fill-current">
        <use href="./images/icons.svg#icon-active"></use>
      </svg>
    </button>
    <button data-operation="arch-delete">
      <svg class="block w-5 h-5 fill-current">
        <use href="./images/icons.svg#icon-delete"></use>
      </svg>
    </button>
  </div>
</li>`;
}

// ----------------------------------------------------------------

export function openModalArchive() {
  elRefs.archive.modal.classList.remove('hidden');
  addArchiveEvents();
}

// ----------------------------------------------------------------

export function closeModalArchive() {
  elRefs.archive.modal.classList.add('hidden');
  removeArchiveEvents();
}
