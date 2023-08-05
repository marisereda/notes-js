import { elRefs } from '../handlers/refs.js';
import * as notesStore from '../model/notesStore.js';
import * as categoriesStore from '../model/categoriesStore.js';

export function openNoteModal(id) {
  notesStore.setNoteId(id);
  if (!id) {
    elRefs.note.form.elements.category.value =
      categoriesStore.getCategories()[0];
    elRefs.note.form.elements.name.value = '';
    elRefs.note.form.elements.content.value = '';
  } else {
    const note = notesStore.getNoteById(id);
    elRefs.note.form.elements.category.value = note.category;
    elRefs.note.form.elements.name.value = note.name;
    elRefs.note.form.elements.content.value = note.content;
  }
  elRefs.note.modal.classList.remove('hidden');
}

export function closeNoteModal() {
  elRefs.note.modal.classList.add('hidden');
}
