import React, { createContext, useContext, useState } from 'react';

// Create context
const ThemeContext = createContext("light");

const ThemeProvider = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <h1>Current Theme: {theme}</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <ThemeMessage />
      </div>
    </ThemeContext.Provider>
  );
};

// Consume context
const ThemeMessage = () => {
  const theme = useContext(ThemeContext);
  return <p>The theme from context is: {theme}</p>;
};

export default ThemeProvider;
