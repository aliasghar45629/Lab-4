import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import ThemeToggle from "./components/ThemeToggle";
import { useState, useEffect } from "react";

function App() {
  const { theme } = useContext(ThemeContext);

  const appStyle = {
    backgroundColor: theme === "dark" ? "#222" : "#fff",
    color: theme === "dark" ? "#fff" : "#000",
    minHeight: "100vh",
    padding: "20px"
  };

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log("Error:", error));
  }, []);

  return (
    <div style={appStyle}>
      <h1>React State Management</h1>

      <UserProfile users={users} />

      <hr />

      <ThemeToggle />
    </div>
  );
}

export default App;