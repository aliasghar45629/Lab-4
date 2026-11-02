import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeToggle() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            <h2>Theme: {theme}</h2>

            <button onClick={toggleTheme}>
                Toggle Theme
            </button>
        </div>
    );
}

export default ThemeToggle;