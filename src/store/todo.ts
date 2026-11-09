import axios from "axios";
import { create } from "zustand";

const api = "/api/to-dos";

export const useTodo = create((set, get) => ({
  data: [],
  getData: async () => {
    try {
      const { data } = await axios.get(api);
      set({ data: data.data });
    } catch (e) {
      console.error(e);
    }
  },
  addUser: async (user) => {
    try {
      const formData = new FormData();
      formData.append("Name", user.name);
      formData.append("Description", user.description);
      await axios.post(api, formData);
      get().getData();
    } catch (e) {
      console.error(e);
    }
  },
  editUser: async (user) => {
    try {
      await axios.put(api, user);
      get().getData();
    } catch (e) {
      console.error(e);
    }
  },
  deleteUser: async (id) => {
    try {
      await axios.delete(`${api}?id=${id}`);
      get().getData();
    } catch (e) {
      console.error(e);
    }
  },
}));