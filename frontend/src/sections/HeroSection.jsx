import React from 'react';
import { medic_woman_1, hero_section_img_2, hero_section_img_3, } from "../assets/img/index.js";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[rgb(var(--color-bg-main))] pt-16 pb-24">
      {/* 1. La Vague de Header (inspirée du croquis et de l'image) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] fill-[rgb(var(--color-secondary))] opacity-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[200%] h-[100px]">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,1.42,1200,34.41V0Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 mt-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* 2. Colonne de Gauche : Textes et Bouton (Croquis) */}
          <div className="lg:w-1/2 text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-[rgb(var(--color-text-main))] leading-tight">
              L'éducation thérapeutique <br />
              <span className="text-[rgb(var(--color-primary))]">sans frontières.</span>
            </h1>
            <p className="text-lg lg:text-xl mb-10 text-long-content max-w-lg">
              Parce que comprendre son traitement ne devrait pas dépendre de sa langue maternelle. 
              Découvrez notre approche visuelle pour le suivi du diabète.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {/* Bouton Orange/Corail menant à l'application */}
              <a 
                href="./language_page/" 
                className="px-10 py-4 bg-[rgb(var(--color-primary))] text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform text-center"
              >
                Accéder à l'application
              </a>
            </div>
          </div>

          {/* 3. Colonne de Droite : Grille d'images (Croquis & Inspiration) */}
          <div className="lg:w-1/2 flex items-center justify-center gap-4">
            {/* Grande image verticale (Centrale dans le croquis) */}
            <div className="w-2/3 h-[400px] lg:h-[500px] rounded-[40px] overflow-hidden shadow-xl border-8 border-white">
              <img 
                src={medic_woman_1}
                alt="Interaction soignant patient" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Colonne de petites images (Droite dans le croquis) */}
            <div className="w-1/3 flex flex-col gap-4">
              <div className="h-[190px] lg:h-[240px] rounded-[30px] overflow-hidden shadow-lg border-4 border-white">
                <img src={hero_section_img_2} alt="Interface Saynètes" className="w-full h-full object-cover" />
              </div>
              <div className="h-[190px] lg:h-[240px] rounded-[30px] overflow-hidden shadow-lg border-4 border-white">
                <img src={hero_section_img_3} alt="Multilingue" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;