import { renderArchive } from '../view/renderArchive.js';
import { renderNotes } from '../view/renderNotes.js';
import { renderCategories } from '../view/renderCategories.js';
import * as notesStore from '../model/notesStore.js';
import * as categoriesStore from '../model/categoriesStore.js';

export function onClickArchTable(e) {
  const button = e.target.closest('button');
  const archiveItem = e.target.closest('li');
  if (!button) {
    return;
  }
  switch (button.dataset.operation) {
    case 'arch-activate-all':
      notesStore.activateAllNotesFromCategory(
        categoriesStore.getCategoryCurrent()
      );
      renderNotes();
      renderCategories();
      renderArchive();
      break;

    case 'arch-delete-all':
      notesStore.deleteZipNotesFromCategory(
        categoriesStore.getCategoryCurrent()
      );
      renderNotes();
      renderCategories();
      renderArchive();
      break;

    case 'arch-activate':
      notesStore.activateNote(archiveItem.dataset.id);
      renderNotes();
      renderCategories();
      renderArchive();
      break;

    case 'arch-delete':
      notesStore.deleteNote(archiveItem.dataset.id);
      renderNotes();
      renderCategories();
      renderArchive();
      break;
  }
}
