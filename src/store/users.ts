// @ts-nocheck
import axios from "axios";
import { atom } from "jotai";

const api = "/api/to-dos";

export const usersAtom = atom([]);

export const getDataAtom = atom(null, async (get, set) => {
  try {
    const { data } = await axios.get(api);
    set(usersAtom, data.data);
  } catch (e) {
    console.error(e);
  }
});

export const addUserAtom = atom(null, async (get, set, user) => {
  try {
    const formData = new FormData();
    formData.append("Name", user.name);
    formData.append("Description", user.description);
    await axios.post(api, formData);
    await set(getDataAtom);
  } catch (e) {
    console.error(e);
  }
});

export const editUserAtom = atom(null, async (get, set, user) => {
  try {
    await axios.put(api, user);
    await set(getDataAtom);
  } catch (e) {
    console.error(e);
  }
});

export const deleteUserAtom = atom(null, async (get, set, id) => {
  try {
    await axios.delete(`${api}?id=${id}`);
    await set(getDataAtom);
  } catch (e) {
    console.error(e);
  }
});