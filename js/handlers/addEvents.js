import { elRefs } from './refs.js';
import { onClickNotesTable } from './notesListHandlers.js';
import { saveNote } from './noteModalHandlers.js';
import { openArchive } from './categoriesListHandler.js';
import { onClickArchTable } from './archiveHandler.js';
import { closeModalArchive } from '../view/renderArchive.js';
import { closeNoteModal } from '../view/renderModal.js';

export function addNotesListEvents() {
  elRefs.notes.table.addEventListener('click', onClickNotesTable);
}

export function addCategoriesListEvents() {
  elRefs.categories.list.addEventListener('click', openArchive);
}

export function addNoteEvents() {
  elRefs.note.form.addEventListener('submit', saveNote);
  elRefs.note.form.addEventListener('reset', closeNoteModal);
}

export function addArchiveEvents() {
  elRefs.archive.table.addEventListener('click', onClickArchTable);
  elRefs.archive.close.addEventListener('click', closeModalArchive);
}
