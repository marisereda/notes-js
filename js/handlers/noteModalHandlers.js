import { elRefs } from './refs.js';
import { closeNoteModal } from '../view/renderModal.js';
import * as notesStore from '../model/notesStore.js';
import { renderNotes } from '../view/renderNotes.js';
import { renderCategories } from '../view/renderCategories.js';

export function saveNote(e) {
  e.preventDefault();
  const note = {
    name: elRefs.note.form.elements.name.value,
    category: elRefs.note.form.elements.category.value,
    content: elRefs.note.form.elements.content.value,
  };

  const id = notesStore.getNoteId();
  if (id) {
    notesStore.updateNote(id, note);
  } else {
    notesStore.addNote(note);
  }

  closeNoteModal();
  renderNotes();
  renderCategories();
}

// ----------------------------------------------------------------

export function cancelSavingNote() {
  closeNoteModal();
}

// // ----------------------------------------------------------------
