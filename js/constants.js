import { generateId } from './helpers.js';

export const initialCategories = [
  {
    icon: './images/icons.svg#icon-task',
    name: 'Task',
  },
  {
    icon: './images/icons.svg#icon-thought',
    name: 'Random Thought',
  },
  {
    icon: './images/icons.svg#icon-idea',
    name: 'Idea',
  },
];

export const initialNotes = [
  {
    id: generateId(),
    name: 'New Idea',
    category: 'Idea',
    created: 1689109200000,
    content:
      'This is a new idea I had. 30/06/2023 I need to flesh it out more.',
    archived: false,
  },
  {
    id: generateId(),
    name: 'Buy groceries',
    category: 'Task',
    created: 1689195600000,
    content: 'Milk, eggs, bread, cheese, fruit, vegetables.',
    archived: false,
  },
  {
    id: generateId(),
    name: 'Random Thought',
    category: 'Random Thought',
    created: 1689541200000,
    content: ' I wonder what would happen if I could fly.',
    archived: false,
  },
  {
    id: generateId(),
    name: 'Plan vacation',
    category: 'Idea',
    created: 1689627600000,
    content:
      'I want to go somewhere warm and sunny. Maybe Hawaii? What about 20/09/23 or 20/10/23?',
    archived: false,
  },
  {
    id: generateId(),
    name: 'Call Mom',
    category: 'Task',
    created: 1689714000000,
    content: 'I need to call my mom and wish her a happy birthday.',
    archived: true,
  },
  {
    id: generateId(),
    name: 'Learn to code',
    category: 'Idea',
    created: 1689800400000,
    content:
      "I've always wanted to learn to code. Maybe I'll start with Python.",
    archived: true,
  },
  {
    id: generateId(),
    name: 'Write a novel',
    category: 'Idea',
    created: 1689973200000,
    content:
      "I've always wanted to write a novel. Maybe I'll start with a short story.",
    archived: false,
  },
];
