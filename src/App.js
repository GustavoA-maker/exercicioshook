// src/App.js
import React from 'react';
import './App.css';
import { useTheme } from './ThemeContext';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="app">
      <header className="app-header">
        <h1>Tema</h1>
        <button onClick={toggleTheme}>
          Mude o tema {theme === 'light' ? 'Dark' : 'Light'} Tema
        </button>
      </header>
    </div>
  );
};

export default App;
