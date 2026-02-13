import React, { useState } from 'react';

const SayneteCarousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sécurité si pas de cartes
  if (!cards || cards.length === 0) return <div>Chargement...</div>;

  const nextCard = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const progress = ((currentIndex + 1) / cards.length) * 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full max-w-2xl mx-auto p-4">
      
      {/* Barre de progression discrète */}
      <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full mb-8">
        <div 
          className="h-full bg-[rgb(var(--color-primary))] transition-all duration-300 rounded-full" 
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Conteneur de la Carte Active */}
      <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] perspective-1000">
        <div className="w-full h-full bg-white dark:bg-[rgb(var(--color-bg-card))] rounded-[40px] shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col transition-transform duration-500">
          
          {/* Image de la saynète */}
          <div className="h-1/2 overflow-hidden">
            <img 
              src={cards[currentIndex].phrase_illustration} 
              alt="Illustration" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Contenu Texte & Audio */}
          <div className="h-1/2 p-8 flex flex-col justify-between text-center">
            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Français</p>
              <p className="text-xl font-medium text-[rgb(var(--color-text-main))] italic">
                "{cards[currentIndex].story_name}"
              </p>
              
              <div className="h-px w-12 bg-gray-200 mx-auto my-4"></div>
              
              <p className="text-sm font-bold uppercase tracking-widest text-[rgb(var(--color-primary))]">Traduction</p>
              <p className="text-2xl font-bold text-[rgb(var(--color-text-main))]">
                {cards[currentIndex].phrase_translation}
              </p>
            </div>

            {/* Bouton Audio centralisé */}
            <button className="mx-auto w-16 h-16 rounded-full bg-[rgb(var(--color-primary))] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
              <span className="text-2xl">🔊</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-8 mt-10">
        <button 
          onClick={prevCard}
          disabled={currentIndex === 0}
          className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all ${
            currentIndex === 0 
            ? 'border-gray-200 text-gray-300 cursor-not-allowed' 
            : 'border-[rgb(var(--color-primary))] text-[rgb(var(--color-primary))] hover:bg-[rgb(var(--color-primary))] hover:text-white'
          }`}
        >
          ←
        </button>

        <span className="font-bold text-gray-500">
          {currentIndex + 1} / {cards.length}
        </span>

        <button 
          onClick={nextCard}
          disabled={currentIndex === cards.length - 1}
          className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all ${
            currentIndex === cards.length - 1 
            ? 'border-gray-200 text-gray-300 cursor-not-allowed' 
            : 'border-[rgb(var(--color-primary))] text-[rgb(var(--color-primary))] hover:bg-[rgb(var(--color-primary))] hover:text-white'
          }`}
        >
          →
        </button>
      </div>

      {/* Bouton de fin de session (visible uniquement à la dernière carte) */}
      {currentIndex === cards.length - 1 && (
        <button className="mt-8 px-8 py-3 bg-green-500 text-white rounded-full font-bold animate-bounce">
          Terminer la saynète
        </button>
      )}
    </div>
  );
};

export default SayneteCarousel;