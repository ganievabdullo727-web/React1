import { deleteName, storeAddName } from "@/app/store";
import { useAges } from "@/store/zustand";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const [addName, setAddName] = useState("");
  const [addAge, setAddAge] = useState("");
  let name = useSelector((e) => e.name);
  let age = useAges((e) => e.age);

  const deleteAge = useAges((e) => e.deleteAge);
  const addAgeUser = useAges((e) => e.addAgeUser);

  let data = name.map((elem) => ({
    id: elem.id,
    name: elem.name,
    age: age.find((e) => e.id === elem.id)?.age,
  }));

  const dispatch = useDispatch();

  let deleteUser = (id) => {
    dispatch(deleteName(id));
    deleteAge(id);
  };

  let addUser = (e) => {
    e.preventDefault();
    const id = Date.now();
    dispatch(storeAddName({ id, name: addName }));
    addAgeUser({ id, age: Number(addAge) });

    setAddName("");
    setAddAge("");
  };
  return (
    <div>
      <form onSubmit={addUser}>
        <input
          value={addName}
          onChange={(e) => setAddName(e.target.value)}
          placeholder="Name"
        />

        <input
          value={addAge}
          onChange={(e) => setAddAge(e.target.value)}
          placeholder="Age"
        />

        <button type="submit">Add</button>
      </form>
      {data.map((el) => (
        <div key={el.id}>
          <h1> {el.name}</h1>
          <p>{el.age}</p>
          <button className="text-[red]" onClick={() => deleteUser(el.id)}>
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default App;