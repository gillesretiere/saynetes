import React from 'react';
import { saynetes_mockup_3, mobileinhand, } from "../assets/img/index.js";

const AppShowcase = () => {
  return (
    <section id="app_section" className="py-24 bg-[rgb(var(--color-bg-pills))] dark:bg-[rgb(var(--color-bg-main))] transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* En-tête de section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-[rgb(var(--color-text-main))] mb-6">
            Une interface <span className="text-[rgb(var(--color-primary))]">adaptée à chaque écran</span>
          </h2>
          <p className="text-xl text-long-content max-w-2xl mx-auto">
            De la tablette du soignant en consultation au smartphone du patient à domicile, l’expérience reste fluide et accessible.
          </p>
        </div>

        {/* Grille de contenu Colonne 1 / Colonne 2 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* COLONNE 1 */}
          <div className="space-y-12">
            {/* Bloc Texte 1 */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-">
                Une approche créative et simple <span className="text-[rgb(var(--color-primary))]">pour une meilleure expérience.</span>
              </h3>
              <p className="text-lg text-long-content">
                L'utilisateur choisit d'abord sa langue, puis une histoire. Les dialogues s'affichent sous forme de <strong>cartes avec texte et audio synchronisé</strong>.
              </p>
            </div>

            {/* Image Carrée 1 (Mockup 3 formats) */}
            <div className="aspect-square rounded-[48px] overflow-hidden bg-white dark:bg-[rgb(var(--color-bg-card))] shadow-[var(--card-shadow)] p-6">
              <img 
                src={mobileinhand}
                alt="Mockup multi-supports" 
                className="w-full h-full object-contain rounded-[32px]"
              />
            </div>
          </div>

          {/* COLONNE 2 */}
          <div className="space-y-12 lg:mt-32">
            {/* Image Carrée 2 (Main tenant le mobile) */}
            <div className="aspect-square rounded-[48px] overflow-hidden bg-white dark:bg-[rgb(var(--color-bg-card))] shadow-[var(--card-shadow)] p-6 group">
              <img 
                src={saynetes_mockup_3}
                alt="Usage smartphone" 
                className="w-full h-full object-cover rounded-[32px] transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Bloc Texte 2 */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">
                Des cartes illustrées <span className="text-[rgb(var(--color-primary))]">pour lire et écouter.</span>
              </h3>
              <p className="text-lg text-long-content">
                Les cartes permettent d'aller du global au détail. Les mots de vocabulaire à retenir sont surlignés et complétés par une mini-carte d'explications.
              </p>
              <ul className="space-y-4 text-long-content">
                <li className="flex items-center gap-3">
                  <span className="text-[rgb(var(--color-primary))] font-bold text-xl">🎧</span>
                  Traductions audios réalisées par des interprètes professionnels.
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[rgb(var(--color-primary))] font-bold text-xl">👁️</span>
                  Contrastes élevés pour l'inclusivité et l'accessibilité.
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppShowcase;