import React from 'react';

const SolutionSection = () => {
  return (
    <section id="solution_section" className="py-20 bg-[rgb(var(--color-bg-pills))] dark:bg-[rgb(var(--color-bg-main))] transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-[rgb(var(--color-text-main))]">
            Une approche <span className="text-[rgb(var(--color-primary))]">visuelle et inclusive</span>
          </h2>
          <p className="text-xl text-long-content">
            Les Saynètes transforment l'éducation thérapeutique en une expérience nouvelle, combinant rigueur médicale et accessibilité totale.
          </p>
        </div>

        {/* Grille de fonctionnalités */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Carte 1 : Format Saynètes */}
          <div className="p-8 rounded-[40px] bg-white dark:bg-[rgb(var(--color-bg-card))] shadow-[var(--card-shadow)] flex flex-col items-center text-center">
            <div className="w-20 h-20 mb-6 bg-[rgb(var(--color-primary)/0.1)] rounded-3xl flex items-center justify-center text-4xl">
              🎬
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[rgb(var(--color-text-main))]">Format Saynètes</h3>
            <p className="text-long-content">
              Des histoires courtes et illustrées pour transmettre des messages clés sans surcharge cognitive.
            </p>
          </div>

          {/* Carte 2 : Rigueur Médicale */}
          <div className="p-8 rounded-[40px] bg-white dark:bg-[rgb(var(--color-bg-card))] shadow-[var(--card-shadow)] flex flex-col items-center text-center border-b-8 border-[rgb(var(--color-primary))]">
            <div className="w-20 h-20 mb-6 bg-[rgb(var(--color-primary)/0.1)] rounded-3xl flex items-center justify-center text-4xl">
              🩺
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[rgb(var(--color-text-main))]">Validé par des Pros</h3>
            <p className="text-long-content">
              Des textes rédigés par des professionnels de santé et traduits par des interprètes diplômés.
            </p>
          </div>

          {/* Carte 3 : Accessibilité Totale */}
          <div className="p-8 rounded-[40px] bg-white dark:bg-[rgb(var(--color-bg-card))] shadow-[var(--card-shadow)] flex flex-col items-center text-center">
            <div className="w-20 h-20 mb-6 bg-[rgb(var(--color-primary)/0.1)] rounded-3xl flex items-center justify-center text-4xl">
              📱
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[rgb(var(--color-text-main))]">Zéro Barrière</h3>
            <p className="text-long-content">
              Aucun compte à créer, aucune installation requise. Une navigation intuitive.
            </p>
          </div>

        </div>

        {/* Section Langues (Drapeaux/Pills) */}
        <div className="mt-20 p-10 rounded-[50px] bg-white dark:bg-[rgb(var(--color-bg-card))] shadow-[var(--card-shadow)] overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-center text-[rgb(var(--color-text-main))]">
              Déjà <span className="text-[rgb(var(--color-secondary))]">7 langues</span> disponibles
            </h3>
            
            {/* Simulation d'un ruban de langues (Marquee ou Flex wrap) */}
            <div className="flex flex-wrap justify-center gap-4">
              {['Français', 'Anglais', 'Arabe', 'Espagnol', 'Russe', 'Roumain', 'Portugais', ].map((lang) => (
                <span key={lang} className="px-6 py-3 rounded-full bg-[rgb(var(--color-bg-pills))] dark:bg-[rgb(var(--color-bg-main))] text-[rgb(var(--color-text-main))] font-medium shadow-sm hover:scale-105 transition-transform cursor-default">
                  {lang}
                </span>
              ))}
              <span className="px-6 py-3 rounded-full bg-[rgb(var(--color-secondary)/0.1)] text-[rgb(var(--color-secondary))] font-bold italic">
                Et bien d'autres en prévision...
              </span>
            </div>
          </div>
          
          {/* Décoration d'arrière-plan (Vague légère) */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-[rgb(var(--color-secondary))] opacity-5 rounded-full blur-3xl"></div>
        </div>

      </div>
    </section>
  );
};

export default SolutionSection;