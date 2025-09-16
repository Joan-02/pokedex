import "./App.css";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

export const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      return currentTheme === "light" ? "dark" : "light";
    });
  };

  return (
    <>
      <div className="outlet-container">
        <Outlet context={{ theme, toggleTheme }} />
      </div>
    </>
  );
};
