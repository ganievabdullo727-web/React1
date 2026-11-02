import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import google from "../Layout/img/google 1.png";
import face from "../Layout/img/facebook 1.png";
import logo from "../Layout/img/Logo (11).png";

// ВАЖНО: проверь адрес и поля в swagger, это моё предположение
const LOGIN_URL = "https://test-swagger-2ph6.onrender.com/auth/login";

async function loginRequest(obj) {
  try {
    const { data } = await axios.post(LOGIN_URL, obj);
    const token =
      data?.token ??
      data?.accessToken ??
      data?.access_token ??
      data?.data?.token;

    if (token) {
      localStorage.setItem("token", token);
      return token;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const token = await loginRequest({
      email: e.target.email.value,
      password: e.target.pass.value,
    });

    setLoading(false);

    if (token) {
      navigate("/", { replace: true });
    } else {
      setError(t("Wrong email or password"));
    }
  };

  return (
    <div className="flex justify-center pt-0 lg:pt-[100px] lg:bg-[#BEBEC0]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[25px] mb-0 lg:mb-[80px] w-full max-w-[600px] pt-[25px] bg-white text-black p-8 items-center lg:h-[600px]"
      >
        <img src={logo} className="block lg:hidden" alt="GreenShop" />

        <h1 className="text-[20px]">
          <span className="text-[#46A358]">{t("Login")}</span> | {t("Register")}
        </h1>

        <Field>
          <FieldLabel htmlFor="login-email">
            {t("Enter your username and password to login.")}
          </FieldLabel>
          <Input
            className="h-[40px] w-full"
            id="login-email"
            name="email"
            type="text"
            placeholder="almamun_uxui@outlook.com"
            required
          />
        </Field>

        <Field>
          <Input
            className="h-[40px] w-full"
            id="login-pass"
            name="pass"
            type="password"
            placeholder={t("Password")}
            required
          />
        </Field>

        {error && <p className="text-red-500 self-start">{error}</p>}

        <p className="text-[#46A358] self-end">{t("Forgot Password?")}</p>

        <button
          type="submit"
          disabled={loading}
          className="text-white bg-[#46A358] w-full rounded-[5px] h-[50px] disabled:opacity-60"
        >
          {loading ? "..." : t("Login")}
        </button>

        <p>{t("Or login with")}</p>

        <div className="flex items-center lg:bg-white lg:text-black text-white bg-[#4086F4] justify-center gap-[15px] h-[55px] rounded-[5px] border border-gray-400 w-full">
          <img src={google} alt="" />
          <p>{t("Login with Google")}</p>
        </div>

        <div className="flex items-center lg:bg-white lg:text-black text-white bg-[#3B5999] justify-center gap-[15px] h-[55px] rounded-[5px] border border-gray-400 w-full">
          <img src={face} alt="" />
          <p>{t("Login with Facebook")}</p>
        </div>
      </form>
    </div>
  );
};

export default Login;