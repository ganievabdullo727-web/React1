import { useTheme } from "./ThemeContext";

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label="Переключить тему"
      className={`relative w-16 h-8 rounded-full border border-black/10 shadow-inner cursor-pointer transition-colors duration-300 ${
        isDark ? "bg-[#042758]" : "bg-white/70"
      }`}
    >
      <span
  className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
    isDark ? "translate-x-8" : "translate-x-0"
  }`}
/>
    </button>
  );
}