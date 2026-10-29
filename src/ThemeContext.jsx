import { createContext, useContext, useEffect, useRef, useState } from "react";

const ThemeContext = createContext();

function getInitialTheme() {
  try {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
  } catch {}
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const root = document.documentElement;

    // при первой загрузке анимация не нужна
    if (!isFirstRender.current) {
      root.classList.add("theme-transition");
    }

    root.classList.toggle("dark", theme === "dark");

    try {
      localStorage.setItem("theme", theme);
    } catch {}

    const timer = setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 350);

    isFirstRender.current = false;
    return () => clearTimeout(timer);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);