import React, { useEffect, useState } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const ThemeSwitcher = () => {
  // On initialise l'état avec la valeur stockée ou la préférence système
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-gray-200 dark:bg-slate-700 transition-colors duration-300 shadow-md"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? (
        <LightModeIcon className="text-yellow-400" />
      ) : (
        <DarkModeIcon className="text-slate-700" />
      )}
    </button>
  );
};

export default ThemeSwitcher;