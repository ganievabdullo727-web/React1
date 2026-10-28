import axios from "axios";
import { useEffect, useState } from "react";

const api = "https://test-swagger-2ph6.onrender.com";

const Aboutus = () => {
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.get(api + "/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
      setUsers(Array.isArray(data) ? data : data.data ?? data.users ?? []);
    } catch (error) {
      console.log(error.response?.status, error.response?.data);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-100 bg-white">
        <table className="w-full text-left">
          <thead className="bg-[#FEDAD5] text-gray-800">
            <tr>
              <th className="px-6 py-4 text-sm font-bold uppercase tracking-wide">№</th>
              <th className="px-6 py-4 text-sm font-bold uppercase tracking-wide">Name</th>
              <th className="px-6 py-4 text-sm font-bold uppercase tracking-wide">Email</th>
              <th className="px-6 py-4 text-sm font-bold uppercase tracking-wide">Role</th>
              <th className="px-6 py-4 text-sm font-bold uppercase tracking-wide">City</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {users.map((e, index) => (
              <tr key={e.id} className="transition hover:bg-[#dea9a96b]">
                <td className="px-6 py-4 text-gray-500">{index + 1}</td>
                <td className="px-6 py-4 font-semibold text-gray-800">{e.name}</td>
                <td className="px-6 py-4 font-semibold text-gray-800">{e.email}</td>
                <td className="px-6 py-4 font-semibold text-gray-800">{e.role}</td>
                <td className="px-6 py-4 font-semibold text-gray-800">{e.city}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {users.length === 0 && (
          <p className="text-center text-gray-400 py-10">Нет данных</p>
        )}
      </div>
    </div>
  );
};

export default Aboutus;