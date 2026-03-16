import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // On initialise l'état avec la valeur stockée dans le navigateur ou "false" par défaut
  const [isDark, setIsDark] = useState(() => {
    // 1. On vérifie d'abord s'il y a un choix sauvegardé manuellement
    const saved = localStorage.getItem('theme');
    if (saved) {
      return saved === 'dark';
    }

    // 2. Sinon, on détecte la préférence du système (Windows/macOS/iOS/Android)
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return systemPrefersDark;
  });

  // On synchronise la classe CSS et le stockage local
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Optionnel : Écouter le changement de thème système en temps réel
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      // On ne change automatiquement que si l'utilisateur n'a pas déjà fait un choix manuel
      if (!localStorage.getItem('theme')) {
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personnalisé pour l'utiliser facilement
export const useTheme = () => useContext(ThemeContext);