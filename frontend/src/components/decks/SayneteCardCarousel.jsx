import React, { useState, useEffect, } from 'react';
import { base_server_url, } from "../../assets/localData/data.js";
import SingleCardCarousel from './SingleCardCarousel.jsx';


const SayneteCardCarousel = ({ cards, lang }) => {

    const [audioWave, setAudioWave] = useState(false);

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => {
        if (currentIndex < cards.length - 1) setCurrentIndex(currentIndex + 1);
    };

    const prevCard = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    };

    if (!cards || cards.length === 0) return null;

    return (
        // On limite la hauteur de tout le container à 95% de l'écran max
        <div className="flex flex-col items-center justify-between w-full max-w-lg mx-auto h-[90vh] max-h-[800px] p-2 sm:p-4">

            {/* 1. Barre de progression (en haut) */}
            <div className="w-full h-1 bg-gray-200 dark:bg-gray-800 rounded-full">
                <div
                    className="h-full bg-[rgb(var(--color-primary))] transition-all duration-300"
                    style={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
                />
            </div>

            {/* 2. Le Carousel (milieu) - On utilise flex-1 pour qu'il prenne l'espace restant sans pousser les boutons */}
            <div className="relative w-full flex-1 my-4 overflow-hidden rounded-[32px] shadow-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[rgb(var(--color-bg-card))]">
                <div
                    className="flex h-full transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {cards.map((card, index) => (
                        <>
                            <SingleCardCarousel card={card} index={index} lang={lang}/>
                        </>

                    ))}
                </div>
            </div>

            {/* 3. Navigation (bas) - Toujours visible car contenue dans le h-[90vh] */}
            <div className="flex items-center justify-center gap-6 pb-2">
                <button
                    onClick={prevCard}
                    disabled={currentIndex === 0}
                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${currentIndex === 0 ? 'border-gray-100 text-gray-200' : 'border-[rgb(var(--color-primary))] text-[rgb(var(--color-primary))]'
                        }`}
                >
                    ←
                </button>

                <span className="text-sm font-bold text-gray-500 tabular-nums">
                    {currentIndex + 1} / {cards.length}
                </span>

                <button
                    onClick={nextCard}
                    disabled={currentIndex === cards.length - 1}
                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${currentIndex === cards.length - 1 ? 'border-gray-100 text-gray-200' : 'border-[rgb(var(--color-primary))] text-[rgb(var(--color-primary))]'
                        }`}
                >
                    →
                </button>
            </div>
        </div>
    );
};

export default SayneteCardCarousel;