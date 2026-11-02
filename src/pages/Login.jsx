import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function login(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    let res = await fetch("https://test-swagger-2ph6.onrender.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    });
    let data = await res.json();

    setLoading(false);

    if (res.ok === false) {
      setError(data.message);
      return;
    }

    localStorage.setItem("token", data.token);
    navigate("/");
  }

  return (
    <div className="relative mx-auto mt-[40px] w-[400px] px-[16px] text-[#3D3D3D]">
      <div className="flex justify-center gap-[16px] text-[24px] font-bold">
        <p className="text-[#46A358]">Login</p>
        <p>|</p>
        <Link to="/register">Register</Link>
      </div>

      <p className="mt-[32px] text-[14px]">
        Enter your username and password to login.
      </p>

      <form onSubmit={login} className="mt-[16px] flex flex-col gap-[16px]">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          className="rounded-[6px] border border-gray-300 px-[16px] py-[12px] text-[14px]"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="rounded-[6px] border border-gray-300 px-[16px] py-[12px] text-[14px]"
        />
        <div className="flex items-center rounded-[6px] px-[16px]">
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="w-[10%]"
          ></button>
        </div>

        <p className="text-right text-[14px] text-[#46A358]">
          Forgot Password?
        </p>

        {error && <p className="text-[14px] text-red-500">{error}</p>}

        <button
          disabled={loading}
          className="rounded-[6px] bg-[#46A358] py-[14px] font-bold text-white"
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>

      <div className="mt-[32px] flex items-center gap-[12px] text-[14px]">
        <div className="h-[1px] w-[40%] bg-gray-200"></div>
        <p className="w-[25%] text-center">Or login with</p>
        <div className="h-[1px] w-[40%] bg-gray-200"></div>
      </div>

      <button className="mt-[24px] flex w-full items-center justify-center gap-[12px] rounded-[6px] border border-gray-200 py-[12px] text-[14px]">
        <img
          src="/public/google 1.png"
          alt="google"
          className="h-[24px] w-[24px]"
        />
        Login with Google
      </button>

      <button className="mt-[16px] flex w-full items-center justify-center gap-[12px] rounded-[6px] border border-gray-200 py-[12px] text-[14px]">
        <img
          src="/public/facebook 1.png"
          alt="facebook"
          className="h-[24px] w-[24px]"
        />
        Login with Facebook
      </button>
    </div>
  );
};

export default Login;
