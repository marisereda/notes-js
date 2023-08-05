import { elRefs } from '../handlers/refs.js';
import { findDates, formatDate } from '../helpers.js';
import { getCategoryIcon } from '../model/categoriesStore.js';
import * as notesStore from '../model/notesStore.js';

export function renderNotes() {
  const notes = notesStore.getActiveNotes();
  const html = notes.map((note) => getNotesTemplate(note));
  elRefs.notes.list.innerHTML = html.join('\n');
}

function getNotesTemplate(note) {
  return ` <li
 data-id="${note.id}"
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
  <div
    id="notes-item-buttons"
    class="flex w-1/12 gap-3 text-teal-700"
  >
    <button id="notes-edit" data-operation="notes-edit">
      <svg class="block w-4 h-4 fill-current">
        <use href="./images/icons.svg#icon-edit"></use>
      </svg>
    </button>
    <button id="notes-zip" data-operation="notes-zip">
      <svg class="block w-5 h-5 fill-current">
        <use href="./images/icons.svg#icon-zip"></use>
      </svg>
    </button>
    <button id="notes-delete" data-operation="notes-delete">
      <svg class="block w-5 h-5 fill-current">
        <use href="./images/icons.svg#icon-delete"></use>
      </svg>
    </button>
  </div>
</li>`;
}
