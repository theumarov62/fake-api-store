import { useEffect } from "react";
import { useThemeStore } from "../../zustand/store.js";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const { darkMode, toggleTheme } = useThemeStore();
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-[#121212]", "text-white");
      document.body.classList.remove("bg-[#fff]", "text-[#121212]");
    } else {
      document.body.classList.remove("bg-[#121212]", "text-white");
      document.body.classList.add("bg-[#fff]", "text-[#121212]");
    }
  }, [darkMode]);
  return (
    <header className="p-4">
      <div className="w-[100%] max-w-[1400px] ml-auto mr-auto justify-between flex">
        <h3
          className="text-[30px] cursor-pointer"
          onClick={() => navigate("/")}
        >
          Logo
        </h3>
        <button
          className="btn"
          onClick={toggleTheme}
          style={{ borderColor: darkMode ? "#fff" : "#121212" }}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
}

export default Header;
