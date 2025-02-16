import useTheme from "../../hooks/useTheme";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      className="absolute top-5 right-5 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
      onClick={toggleTheme}
    >
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
