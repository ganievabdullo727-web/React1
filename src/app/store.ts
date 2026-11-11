import { configureStore, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "name",
  initialState: [
    {
      id: 1,
      name: "Abdullo",
    },
    {
      id: 2,
      name: "Hoji",
    },
  ],
  reducers: {
     deleteName: (state, action) => {
    return state.filter((e) => e.id !== action.payload)
  },
    storeAddName: (state, {payload:user}) => {
 state=[...state,user]
    },
  },
});

export const { deleteName ,storeAddName} = slice.actions

export const store = configureStore({
  reducer: {
    name: slice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
