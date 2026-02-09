import React, { useEffect, useState, useContext, } from 'react';
import DeckContext from '../../../store/DeckContext';

const LanguageSelector = ({ currentLang, onChange }) => {

  const saved = localStorage.getItem("current_foreign_language");

  const languages = [
    { code: 'fre', label: 'Français' },
    { code: saved, label: saved }
  ];

  return (
    <div className="flex justify-center my-4">
      <div className="inline-flex p-1 bg-pills-bg rounded-full shadow-inner">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => onChange(lang.code)}
            className={`
              px-6 py-1.5 rounded-full text-sm font-medium transition-all duration-300
              ${currentLang === lang.code
                ? 'text-[#FF2D55] hover:text-[#FF2D55] shadow-sm scale-105'
                : 'text-gray-500 hover:text-primary-main'}
            `}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;