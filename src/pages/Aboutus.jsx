import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Slider from "../Slider.jsx";

const api = "https://test-swagger-2ph6.onrender.com";

const Aboutus = () => {
  const { t } = useTranslation();
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
      <Slider />

      <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-100 bg-white dark:bg-[#1e1e1e] dark:border-white/10">
        <table className="w-full text-left">
          <thead className="bg-[#FEDAD5] text-gray-800 dark:bg-[#3a2a27] dark:text-white">
            <tr>
              <th className="px-6 py-4 text-sm font-bold uppercase tracking-wide">№</th>
              <th className="px-6 py-4 text-sm font-bold uppercase tracking-wide">{t("name")}</th>
              <th className="px-6 py-4 text-sm font-bold uppercase tracking-wide">{t("email")}</th>
              <th className="px-6 py-4 text-sm font-bold uppercase tracking-wide">{t("role")}</th>
              <th className="px-6 py-4 text-sm font-bold uppercase tracking-wide">{t("city")}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-white/10">
            {users.map((e, index) => (
              <tr key={e.id} className="transition hover:bg-[#dea9a96b] dark:hover:bg-white/5">
                <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{index + 1}</td>
                <td className="px-6 py-4 font-semibold text-gray-800 dark:text-gray-100">{e.name}</td>
                <td className="px-6 py-4 font-semibold text-gray-800 dark:text-gray-100">{e.email}</td>
                <td className="px-6 py-4 font-semibold text-gray-800 dark:text-gray-100">{e.role}</td>
                <td className="px-6 py-4 font-semibold text-gray-800 dark:text-gray-100">{e.city}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {users.length === 0 && (
          <p className="text-center text-gray-400 py-10 dark:text-gray-500">{t("noData")}</p>
        )}
      </div>
    </div>
  );
};

export default Aboutus;