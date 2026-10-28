import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginRequest from "../api.js";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const obj = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const token = await loginRequest(obj);
    setLoading(false);

    if (token) {
      navigate("/", { replace: true });
    } else {
      setError("Неверный email или пароль");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FEDAD5] via-white to-[#E8F5E9] px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 sm:p-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">С возвращением!</h1>
          <p className="text-gray-500 mt-2">Войдите в свой аккаунт</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="name@company.com"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 outline-none transition focus:border-[#2E7D32] focus:bg-white focus:ring-4 focus:ring-[#2E7D32]/10"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1">
              Пароль
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 pr-20 rounded-xl border border-gray-200 bg-gray-50 outline-none transition focus:border-[#2E7D32] focus:bg-white focus:ring-4 focus:ring-[#2E7D32]/10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-gray-500 hover:text-[#2E7D32]"
              >
                {showPassword ? "Скрыть" : "Показать"}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label htmlFor="remember" className="flex items-center gap-2 text-gray-600 cursor-pointer">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 rounded accent-[#2E7D32]"
              />
              Запомнить меня
            </label>
            <a href="#" className="font-semibold text-[#2E7D32] hover:underline">
              Забыли пароль?
            </a>
          </div>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-[#2E7D32] text-white font-bold shadow-lg shadow-[#2E7D32]/30 transition hover:bg-[#256628] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Входим..." : "Войти"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login; 