import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  async function login() {
    try {
      let res = await fetch(
        "https://test-swagger-2ph6.onrender.com/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: "admin@softclub.tj",
            password: "ПАРОЛЬ",
          }),
        },
      );
      let data = await res.json();
      localStorage.setItem("token", data.token);
    } catch (error) {
      console.error(error);
    }
  }

  async function getUsers() {
    try {
      let token = localStorage.getItem("token");
      let res = await fetch("https://test-swagger-2ph6.onrender.com/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      let data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteUser(id) {
    try {
      let token = localStorage.getItem("token");
      await fetch(`https://test-swagger-2ph6.onrender.com/users/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      getUsers();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    async function start() {
      await login();
      getUsers();
    }
    start();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto px-[16px] py-[16px]">
      <h1 className="text-[24px] font-bold">Пользователи</h1>

      <div className="mt-[16px] flex flex-col gap-[12px]">
        {users.map((el) => (
          <div
            key={el.id}
            className="flex items-center justify-between bg-[#FBFBFB] p-[12px] rounded-[8px]"
          >
            <p>{el.email}</p>
            <button
              onClick={() => deleteUser(el.id)}
              className="bg-red-500 text-white text-[14px] px-[16px] py-[6px] rounded-[6px]"
            >
              Удалить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
