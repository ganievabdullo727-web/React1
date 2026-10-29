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
    </div>
  );
};

export default Aboutus;