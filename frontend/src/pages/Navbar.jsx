import React, { useState, useEffect, useContext, } from 'react';
import DeckContext from '../store/DeckContext';

const Navbar = ({ context }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [navbarItems, setNavbarItems] = useState([]);

  useEffect(() => {
    setNavbarItems(context.current_deck.navlinks);
  }, [context.current_deck.navlinks]);

  // Synchronisation du mode sombre avec la classe .dark sur le body
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl rounded-full">
      <div className="bg-white/80 dark:bg-[rgb(var(--color-bg-card))/0.8] backdrop-blur-lg border border-gray-200 dark:border-gray-800 rounded-full px-6 py-3 shadow-2xl flex items-center justify-between">

        {/* Bouton Home / Logo */}
        <button
          onClick={() => window.scrollTo(0, 0)}
          className="flex items-center gap-2 font-bold text-[rgb(var(--color-text-main))] hover:text-[rgb(var(--color-primary))] transition-colors"
        >
          <span className="text-xl">🏠</span>
          <span className="hidden sm:inline">Les Saynètes</span>

        </button>

        <div className="flex items-center gap-4">
          {/* Switch Mode Sombre */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-110 transition-transform"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? "☀️" : "🌙"}
          </button>

          {/* Bouton Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[rgb(var(--color-text-main))] hover:text-[rgb(var(--color-primary))]"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-current transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-current transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-current transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Menu dépliant (Hamburger) */}
      <div className={`absolute top-full mt-4 left-0 right-0 rounded-[32px]  overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white dark:bg-[rgb(var(--color-bg-card))] border border-gray-200 dark:border-gray-800 rounded-[32px] p-6 shadow-2xl grid grid-cols-2 gap-4">
          {navbarItems && navbarItems.map((item) => (
            item.active ? (<a
              key={item.index}
              href={`${item.url}`}
              onClick={() => setIsOpen(false)}
              className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 text-center font-bold text-[rgb(var(--color-text-main))] hover:bg-[rgb(var(--color-primary))] hover:text-white transition-all"
            >
              {item.label}
            </a>) : (<a
              key={item.index}
              className="p-4 rounded-2xl bg-gray-50 dark:bg-white/5 text-center font-bold text-[rgb(var(--color-text-main))] hover:bg-gray-400 hover:text-white transition-all"
            >
              {item.label}
            </a>)

          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;