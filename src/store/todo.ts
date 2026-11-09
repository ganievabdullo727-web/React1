import axios from "axios";
import { create } from "zustand";

const api = "https://to-dos-api.softclub.tj/api/to-dos";

interface Todo {
  id: number;
  name: string;
  description: string;
  isCompleted: boolean;
}

interface TodoStore {
  data: Todo[];
  getData: () => void;
  getDelete: (id: number) => void;
  getAdd: (newTodo: FormData) => void;
}

export const useTodo = create<TodoStore>()((set, get) => ({
  data: [],
  getData: async () => {
    try {
      const { data } = await axios.get(api);
      set({ data: data.data });
    } catch (error) {
      console.error(error);
    }
  },
  getDelete: async (id) => {
    try {
      await axios.delete(`${api}?id=${id}`);
      await get().getData();
    } catch (error) {
      console.error(error);
    }
  },
  getAdd: async (newTodo) => {
    try {
      await axios.post(api, newTodo);
      await get().getData();
    } catch (error) {
      console.error(error);
    }
  },
}));