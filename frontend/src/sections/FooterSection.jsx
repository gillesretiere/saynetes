import React from 'react';
import { logo_asamla, hmrt_logo, } from "../assets/img/index.js";

const FooterSection = () => {
  return (
    <footer className="py-16 bg-white dark:bg-[rgb(var(--color-bg-card))] border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          
          {/* Logo et Nom du Projet */}
          <div className="mb-8 group">
            <img 
              src={logo_asamla} 
              alt="Logo Saynètes" 
              className="h-16 w-auto mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="text-2xl font-bold text-[rgb(var(--color-text-main))] tracking-tight">
              Saynètes<span className="text-[rgb(var(--color-primary))]">.fr</span>
            </h3>
          </div>

          {/* Mission & Réseaux Sociaux */}
          <div className="max-w-md mb-12">
            <p className="text-long-content mb-8">
              L'éducation thérapeutique du diabète sans la barrière de la langue. Une initiative pour l'autonomie et l'inclusivité dans le parcours de soin.
            </p>
            <div className="flex justify-center gap-6">
              {['LinkedIn', 'Twitter', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-bold uppercase tracking-widest text-[rgb(var(--color-text-body))] hover:text-[rgb(var(--color-primary))] transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Séparateur discret */}
          <div className="w-24 h-px bg-gray-200 dark:bg-gray-700 mb-8"></div>
            <img 
              src={hmrt_logo} 
              alt="Logo Saynètes" 
              className="h-16 w-auto mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
            />
          {/* Crédits et Mentions Légales */}
          <div className="text-sm text-gray-400 dark:text-gray-500 space-y-2">
            <p>Conception du site et graphisme © Hammer & Marteau 2026</p>
            <p className="opacity-75">
              Projet validé par des professionnels de santé. Textes et audios traduits par des interprètes diplômés.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default FooterSection;