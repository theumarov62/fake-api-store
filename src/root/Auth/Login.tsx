import { useThemeStore } from "@/zustand/store";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { darkMode } = useThemeStore();
  const navigate = useNavigate();

  async function handRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username,
        password,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/admin");
      } else {
        console.log(
          "Token topilmadi, backend javobini tekshiring:",
          response.data
        );
      }
    } catch (error: any) {
      console.log(error.response?.data?.message || "Hatolik bo'ldi");
    }
  }

  return (
    <section className="flex flex-col items-center w-[100%] max-w-[1460px]">
      <div className="w-[100%] flex justify-end">
        <button className="btn-primary btn" onClick={() => navigate("/")}>
          Free accounts
        </button>
      </div>

      <div className="w-[90%]">
        <div
          className={`min-h-screen flex items-center justify-center px-4  ${
            darkMode ? "bg-[#121212]" : "bg-[#fff]"
          }`}
        >
          <form
            className={`w-full max-w-md p-8 rounded-lg flex flex-col shadow-lg ${
              darkMode
                ? "bg-black bg-opacity-50 shadow-white/20"
                : "bg-white bg-opacity-80 shadow-black/20"
            }`}
            onSubmit={handRegister}
          >
            <h2
              className={`text-2xl font-bold text-center mb-6 ${
                darkMode ? "text-white" : "text-[#121212]"
              }`}
            >
              Login
            </h2>

            {/* Username */}
            <label
              className={`mb-2 font-medium ${
                darkMode ? "text-white" : "text-[#121212]"
              }`}
              htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter username"
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`mb-4 p-3 rounded border outline-none transition-colors duration-200 ${
                darkMode
                  ? "bg-[#121212] text-white border-white placeholder-gray-400 focus:border-blue-400"
                  : "bg-[#fff] text-[#121212] border-black placeholder-gray-500 focus:border-blue-600"
              }`}
            />

            {/* Password */}
            <label
              className={`mb-2 font-medium ${
                darkMode ? "text-white" : "text-[#121212]"
              }`}
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`mb-6 p-3 rounded border outline-none transition-colors duration-200 ${
                darkMode
                  ? "bg-[#121212] text-white border-white placeholder-gray-400 focus:border-blue-400"
                  : "bg-[#fff] text-[#121212] border-black placeholder-gray-500 focus:border-blue-600"
              }`}
            />

            {/* Login Button */}
            <button
              type="submit"
              className={`p-3 rounded font-bold transition-colors cursor-pointer duration-200 hover:brightness-105 ${
                darkMode
                  ? "bg-white text-[#121212] hover:bg-gray-200"
                  : "bg-[#121212] text-white hover:bg-gray-800"
              }`}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
