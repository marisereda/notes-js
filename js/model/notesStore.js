import { initialNotes } from '../constants.js';
import { generateId } from '../helpers.js';

let notes = [...initialNotes];
let noteId;

export function setNoteId(id) {
  noteId = id;
}

export function getNoteId() {
  return noteId;
}

export function addNote({ name, category, content }) {
  notes.push({
    id: generateId(),
    name,
    category,
    created: Date.now(),
    content,
    dates: '',
    archived: false,
  });
}

export function updateNote(id, newData) {
  const index = notes.findIndex((note) => note.id === id);
  notes[index] = { ...notes[index], ...newData };
}

export function getNoteById(id) {
  return notes.find((note) => note.id === id);
}

export function getNotes() {
  return notes;
}

export function getZipNotes() {
  return notes.filter((note) => note.archived === true);
}

export function getActiveNotes() {
  return notes.filter((note) => {
    return note.archived === false;
  });
}

export function deleteNote(id) {
  notes = notes.filter((note) => note.id !== id);
}

export function deleteActiveNotes() {
  notes = notes.filter((note) => note.archived === true);
}
export function deleteZipNotesFromCategory(category) {
  notes = notes.filter(
    (note) =>
      note.category !== category ||
      (note.category === category && note.archived === false)
  );
}

export function zipNote(id) {
  const note = notes.find((note) => note.id === id);
  note.archived = true;
}

export function zipAllNotes() {
  notes.forEach((note) => (note.archived = true));
}

export function activateNote(id) {
  const note = notes.find((note) => note.id === id);
  note.archived = false;
}

export function activateAllNotesFromCategory(category) {
  notes.forEach((note) => {
    if (note.category === category) {
      note.archived = false;
    }
  });
}

export function getActiveNotesAmount(category) {
  const notesByCategory = notes.filter((note) => note.category === category);
  return notesByCategory.filter((note) => note.archived === false).length;
}

export function getArchivedNotesAmount(category) {
  const notesByCategory = notes.filter((note) => note.category === category);
  return notesByCategory.filter((note) => note.archived === true).length;
}
