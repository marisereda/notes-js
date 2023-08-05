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
    created: 1654200800000, // 2023-08-04 08:13:20 PST
    content:
      'This is a new idea I had. 30/06/2023 I need to flesh it out more.',
    archived: false,
  },
  {
    id: generateId(),
    name: 'Buy groceries',
    category: 'Task',
    created: 1654200800000, // 2023-08-04 08:13:20 PST
    content: 'Milk, eggs, bread, cheese, fruit, vegetables.',
    archived: false,
  },
  {
    id: generateId(),
    name: 'Random Thought',
    category: 'Random Thought',
    created: 1654200800000, // 2023-08-04 08:13:20 PST
    content: '30/06/2025 I wonder what would happen if I could fly. 30/06/2026',
    archived: false,
  },
  {
    id: generateId(),
    name: 'Plan vacation',
    category: 'Idea',
    created: 1654200800000, // 2023-08-04 08:13:20 PST
    content: 'I want to go somewhere warm and sunny. Maybe Hawaii?',
    archived: false,
  },
  {
    id: generateId(),
    name: 'Call Mom',
    category: 'Task',
    created: 1654200800000, // 2023-08-04 08:13:20 PST
    content: 'I need to call my mom and wish her a happy birthday.',
    archived: true,
  },
  {
    id: generateId(),
    name: 'Learn to code',
    category: 'Idea',
    created: 1654200800000, // 2023-08-04 08:13:20 PST
    content:
      "I've always wanted to learn to code. Maybe I'll start with Python.",
    archived: true,
  },
  {
    id: generateId(),
    name: 'Write a novel',
    category: 'Idea',
    created: 1654200800000, // 2023-08-04 08:13:20 PST
    content:
      "I've always wanted to write a novel. Maybe I'll start with a short story.",
    archived: false,
  },
];
