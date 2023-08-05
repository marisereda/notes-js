// import { elRefs } from './js/handlers/refs.js';
// import * as notes from './js/model/notesStore.js';
import {
  addNotesListEvents,
  addNoteEvents,
  addCategoriesListEvents,
} from './js/handlers/addEvents.js';
import { renderNotes } from './js/view/renderNotes.js';
import { renderCategories } from './js/view/renderCategories.js';

addNotesListEvents();
addNoteEvents();
addCategoriesListEvents();
renderNotes();
renderCategories();
