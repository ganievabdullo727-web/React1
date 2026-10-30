import React, { useReducer, useState } from "react";

let initialState = {
  count: 0,
  value: 0,
  data: [
    { id: 1, name: "Abdullo" },
    { id: 2, name: "Hojiakbar" },
  ],
};

let countReducer = (state, actions) => {
  if (actions.type === "increment") {
    return { ...state, count: state.count + 1 };
  }

  if (actions.type === "incrementmin") {
    return { ...state, count: state.count - 1 };
  }

  if (actions.type === "delete") {
    return { ...state, data: state.data.filter((e) => e.id != actions.value) };
  }

  if (actions.type === "add") {
    return {
      ...state,
      data: [...state.data, { id: Date.now(), name: actions.value }],
    };
  }

  if (actions.type === "edit") {
    return {
      ...state,
      data: state.data.map((e) =>
        e.id === actions.id ? { ...e, name: actions.value } : e,
      ),
    };
  }

  return state;
};

const App = () => {
  let [state, dispatch] = useReducer(countReducer, initialState);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let value = e.target.name.value;
    if (value.trim() === "") return;
    dispatch({ type: "add", value: value });
    e.target.reset();
  }

  function openEdit(item) {
    setEditId(item.id);
    setEditText(item.name);
  }

  function closeEdit() {
    setEditId(null);
    setEditText("");
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    if (editText.trim() === "") return;
    dispatch({ type: "edit", id: editId, value: editText });
    closeEdit();
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="w-full max-w-md h-fit bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-center gap-6 mb-6">
          <button
            onClick={() => dispatch({ type: "incrementmin" })}
            className="w-10 h-10 rounded-full bg-red-500 text-white text-xl hover:bg-red-600"
          >
            -
          </button>
          <h1 className="text-3xl font-bold w-12 text-center">{state.count}</h1>
          <button
            onClick={() => dispatch({ type: "increment" })}
            className="w-10 h-10 rounded-full bg-green-500 text-white text-xl hover:bg-green-600"
          >
            +
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
          <input
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 outline-none focus:border-blue-500"
            type="text"
            name="name"
            placeholder="Введите имя"
          />
          <button className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600">
            Save
          </button>
        </form>


        <div className="flex flex-col gap-3">
          {state.data.map((e) => {
            return (
              <div
                key={e.id}
                className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl px-4 py-3"
              >
                <h1 className="text-lg font-medium">{e.name}</h1>
                <div className="flex gap-2">
                  <button
                    onClick={() => openEdit(e)}
                    className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg hover:bg-blue-200"
                  >
                    edit
                  </button>
                  <button
                    onClick={() => dispatch({ type: "delete", value: e.id })}
                    className="bg-red-100 text-red-600 px-3 py-1 rounded-lg hover:bg-red-200"
                  >
                    delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {editId && (
        <div
          onClick={closeEdit}
          className="fixed inset-0 bg-black/40 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-6"
          >
            <h2 className="text-xl font-bold mb-4">Изменить имя</h2>
            <form onSubmit={handleEditSubmit}>
              <input
                className="w-full border border-gray-300 rounded-full p-[10px] focus:border-blue-500"
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={closeEdit}
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button className="bg-blue-500 text-white px-5 py-2 rounded-full hover:bg-blue-600">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
