import React from 'react';

const ImpactSection = () => {
  return (
    <section id="impact_section" className="py-24 bg-[rgb(var(--color-orange)/0.15)] dark:bg-[rgb(var(--color-bg-main))] overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Colonne Gauche : Vision & Chiffres */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-[rgb(var(--color-text-main))] leading-tight">
              Un impact mesurable sur <br/>
              <span className="text-[rgb(var(--color-primary))]">le parcours de soin</span>
            </h2>
            <p className="text-xl text-long-content mb-10">
              Notre ambition est de transformer chaque consultation difficile en un moment de partage et de compréhension mutuelle.
            </p>
            
            {/* Statistiques (Placeholders) */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-white dark:bg-[rgb(var(--color-bg-card))] shadow-sm border-l-4 border-[rgb(var(--color-secondary))]">
                <div className="text-3xl font-bold text-[rgb(var(--color-text-main))] mb-1">10+</div>
                <div className="text-sm text-long-content font-medium uppercase tracking-wider">Langues</div>
              </div>
              <div className="p-6 rounded-3xl bg-white dark:bg-[rgb(var(--color-bg-card))] shadow-sm border-l-4 border-[rgb(var(--color-primary))]">
                <div className="text-3xl font-bold text-[rgb(var(--color-text-main))] mb-1">100%</div>
                <div className="text-sm text-long-content font-medium uppercase tracking-wider">Médicalisé</div>
              </div>
            </div>
          </div>

          {/* Colonne Droite : Témoignages (Format Bulles de Saynètes) */}
          <div className="lg:w-1/2 relative">
            {/* Décoration de fond (Cercle bleu diffus) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[rgb(var(--color-secondary))] opacity-10 rounded-full blur-3xl"></div>

            <div className="space-y-6 relative z-10">
              
              {/* Bulle Témoignage 1 */}
              <div className="p-6 rounded-[32px] rounded-bl-none bg-white dark:bg-[rgb(var(--color-bg-card))] shadow-xl border border-gray-100 dark:border-gray-800 transform -rotate-1">
                <p className="italic text-[rgb(var(--color-text-body))] mb-4">
                  "L'espace réservé pour votre premier témoignage soignant. Un retour sur l'efficacité de l'outil en consultation."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">🩺</div>
                  <span className="font-bold text-[rgb(var(--color-text-main))]">Prénom Nom, Infirmier(e) ETP</span>
                </div>
              </div>

              {/* Bulle Témoignage 2 */}
              <div className="p-6 rounded-[32px] rounded-br-none bg-[rgb(var(--color-orange)/0.75)] text-white shadow-xl translate-x-4 lg:translate-x-8 transform rotate-1">
                <p className="italic mb-4 opacity-95">
                  "Ici, un témoignage sur l'autonomie retrouvée par les patients à leur domicile grâce aux vidéos."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">👤</div>
                  <span className="font-bold">Accompagnant / Patient</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Section Vision / Futur */}
        <div className="mt-24 p-8 lg:p-12 rounded-[48px] bg-gradient-to-br from-[rgb(var(--color-orange))] to-[rgb(var(--color-orange-bright))] text-white text-center">
          <h3 className="text-2xl lg:text-4xl font-bold mb-6">Notre Vision : Étendre l'accessibilité</h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Demain, nous souhaitons adapter ce catalogue de saynètes à d'autres pathologies chroniques pour continuer à briser les barrières linguistiques de la santé.
          </p>
          <div className="flex justify-center gap-4">
             <span className="px-6 py-2 bg-white/20 rounded-full text-sm font-bold">Hypertension</span>
             <span className="px-6 py-2 bg-white/20 rounded-full text-sm font-bold">Asthme</span>
             <span className="px-6 py-2 bg-white/20 rounded-full text-sm font-bold">Nutrition</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ImpactSection;