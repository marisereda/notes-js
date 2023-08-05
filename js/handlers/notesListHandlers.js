import { elRefs } from './refs.js';
import { getCategories } from '../model/categoriesStore.js';
import * as notesStore from '../model/notesStore.js';
import { renderNotes } from '../view/renderNotes.js';
import { renderCategories } from '../view/renderCategories.js';
import { openNoteModal } from '../view/renderModal.js';

// ----------------------------------------------------------------

export function onClickHeaderButtons(e) {
  const button = e.target.closest('button');
  if (!button) {
    return;
  }
  switch (button.dataset.operation) {
    case 'notes-add':
      openNoteModal();
      break;
    case 'notes-zip-all':
      notesStore.zipAllNotes();
      renderNotes();
      renderCategories();

      break;
    case 'notes-delete-all':
      notesStore.deleteActiveNotes();
      renderNotes();
      renderCategories();
      break;
  }
}

// ----------------------------------------------------------------

export function onClickNotesList(e) {
  const item = e.target.closest('li');
  const button = e.target.closest('button');
  if (!button) {
    return;
  }
  switch (button.dataset.operation) {
    case 'notes-edit':
      openNoteModal(item.dataset.id);
      break;
    case 'notes-zip':
      notesStore.zipNote(item.dataset.id);
      renderNotes();
      renderCategories();
      break;
    case 'notes-delete':
      notesStore.deleteNote(item.dataset.id);
      renderNotes();
      renderCategories();
      break;
  }
}
