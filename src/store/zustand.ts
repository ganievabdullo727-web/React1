import { create } from "zustand";

export const useAges = create((set) => ({
  age: [
    { id: 1, age: 16 },
    { id: 2, age: 17 },
  ],
  deleteAge: (id) =>
    set((state) => ({
      age: state.age.filter((e) => e.id !== id),
    })),
  addAgeUser: (user) =>
    set((state) => ({
      age: [...state.age, user],
    })),
}));