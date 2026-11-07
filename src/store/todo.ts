import { create } from "zustand";

export const useTodo = create((set) => ({
  data: [
    { id: 1, name: "Abdullo", job: "student" },
    { id: 2, name: "Hoji", job: "puple" },
  ],
  deleteUser: (id) =>
    set((state) => ({
      data: state.data.filter((e) => e.id !== id),
    })),
  editUser: (id, newData) =>
    set((state) => ({
      data: state.data.map((e) => (e.id === id ? { ...e, ...newData } : e)),
    })),
  addUser: (user) =>
    set((state) => ({
      data: [...state.data, { id: Date.now(), ...user }],
    })),
}));