import { atom } from 'recoil';

// Atom to manage the list of tasks
export const todoListState = atom({
  key: 'todoListState', // Unique key for the atom
  default: [], // Initial state is an empty array
});
