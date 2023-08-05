import { elRefs } from './refs.js';
import { onClickHeaderButtons, onClickNotesList } from './notesListHandlers.js';
import { cancelSavingNote, saveNote } from './noteModalHandlers.js';
import { openArchive } from './categoriesListHandler.js';
import { onClickArchTable, closeArchive } from './archiveHandler.js';

export function addNotesListEvents() {
  elRefs.notes.headerButtons.addEventListener('click', onClickHeaderButtons);
  elRefs.notes.list.addEventListener('click', onClickNotesList);
}

export function addCategoriesListEvents() {
  elRefs.categories.list.addEventListener('click', openArchive);
}

export function addNoteEvents() {
  elRefs.note.form.addEventListener('submit', saveNote);
  elRefs.note.form.addEventListener('reset', cancelSavingNote);
}

export function addArchiveEvents() {
  elRefs.archive.table.addEventListener('click', onClickArchTable);
  elRefs.archive.close.addEventListener('click', closeArchive);
}
