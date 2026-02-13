import React from 'react';
import { landing_page_01, } from "../assets/img/index.js";

const ProblemSection = () => {
  return (
    <section id="problem_section" className="py-20 bg-white dark:bg-[rgb(var(--color-bg-main))] transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* En-tête de section */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-[rgb(var(--color-text-main))]">
            Le défi de la <span className="text-[rgb(var(--color-primary))]">barrière linguistique</span>
          </h2>
          <p className="text-xl text-long-content">
            En France, une part importante des patients diabétiques fait face à des difficultés de compréhension qui impactent directement leur santé.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            {/* Carte Soignants - Fond gris clair adaptatif */}
            <div className="p-8 rounded-[32px] bg-[rgb(var(--color-bg-pills))] dark:bg-[rgb(var(--color-bg-card))] border border-gray-200 dark:border-gray-800 shadow-[var(--card-shadow)]">
              <div className="flex items-center gap-4 mb-4">
                <span className="p-3 bg-white dark:bg-[rgb(var(--color-bg-main))] rounded-2xl shadow-sm text-2xl">🩺</span>
                <h3 className="text-2xl font-bold text-[rgb(var(--color-text-main))]">Côté Soignants</h3>
              </div>
              <ul className="space-y-4 text-long-content">
                <li className="flex items-start gap-3">
                  <span className="text-[rgb(var(--color-primary))] font-bold mt-1">•</span>
                  Temps de consultation limité pour des explications complexes.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[rgb(var(--color-primary))] font-bold mt-1">•</span>
                  Difficulté à vérifier la compréhension réelle du patient.
                </li>
              </ul>
            </div>

            {/* Carte Patients - Retour du fond Bleu Ciel en mode clair */}
            <div className="p-8 rounded-[32px] bg-[rgb(var(--color-secondary)/0.15)] dark:bg-[rgb(var(--color-bg-card))] border border-[rgb(var(--color-secondary)/0.3)] dark:border-gray-800 shadow-[var(--card-shadow)] dark:border-l-8 dark:border-l-[rgb(var(--color-secondary))]">
              <div className="flex items-center gap-4 mb-4">
                <span className="p-3 bg-white dark:bg-[rgb(var(--color-bg-main))] rounded-2xl shadow-sm text-2xl">👤</span>
                <h3 className="text-2xl font-bold text-[rgb(var(--color-text-main))]">Côté Patients</h3>
              </div>
              <ul className="space-y-4 text-long-content">
                <li className="flex items-start gap-3">
                  <span className="text-[rgb(var(--color-primary))] font-bold mt-1">•</span>
                  Isolement face à une pathologie chronique complexe.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[rgb(var(--color-primary))] font-bold mt-1">•</span>
                  Brochures et documents textuels totalement illisibles.
                </li>
              </ul>
            </div>
          </div>

          {/* Illustration avec retour de la rotation */}
          <div className="relative group">
            <div className="rounded-[40px] overflow-hidden border-4 border-white dark:border-[rgb(var(--color-bg-card))] shadow-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-500">
              <img 
                src={landing_page_01}
                alt="Défi linguistique" 
                className="w-full h-auto" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <p className="absolute bottom-6 left-6 right-6 text-white text-sm italic">
                "Comprendre son traitement est le premier pas vers l'autonomie."
              </p>
            </div>
            {/* Décoration en arrière-plan */}
            <div className="absolute -bottom-6 -right-6 -z-10 w-32 h-32 bg-[rgb(var(--color-primary))] opacity-10 rounded-full blur-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSection;