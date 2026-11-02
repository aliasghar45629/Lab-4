import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
    const [loggedIn, setLoggedIn] = useState(() => {
        return JSON.parse(localStorage.getItem("loggedIn")) || false;
    });

    useEffect(() => {
        localStorage.setItem("loggedIn", JSON.stringify(loggedIn));
    }, [loggedIn]);

    return (
        <UserContext.Provider value={{ loggedIn, setLoggedIn }}>
            {children}
        </UserContext.Provider>
    );
}