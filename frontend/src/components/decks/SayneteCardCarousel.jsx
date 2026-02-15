import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SingleCardCarousel from './SingleCardCarousel.jsx';

const SayneteCardCarousel = ({ cards, lang }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showThumbnails, setShowThumbnails] = useState(false);
    const navigate = useNavigate();

    const nextCard = () => {
        if (currentIndex < cards.length - 1) setCurrentIndex(currentIndex + 1);
    };

    const prevCard = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    };

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark');
    };

    if (!cards || cards.length === 0) return null;

    return (
        <div className="flex flex-col items-center justify-between w-full max-w-lg mx-auto h-[95vh] max-h-[850px] p-2 sm:p-4 relative">
            
            {/* BARRE SUPÉRIEURE (Inspirée du croquis) */}
            <div className="w-full flex items-center justify-between mb-2">
                {/* Bouton Fermer (X) */}
                <button 
                    onClick={() => navigate(-1)} 
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-xl font-bold"
                >
                    ✕
                </button>

                {/* Groupe Navigation Minimale */}
                <div className="flex items-center gap-2 px-4 py-1 border border-gray-300 dark:border-gray-600 rounded-full bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                    <button onClick={() => navigate('/')} className="p-2 hover:scale-110 transition-transform">🏠</button>
                    <button onClick={toggleDarkMode} className="p-2 hover:scale-110 transition-transform">☀️</button>
                    <button onClick={() => setShowThumbnails(!showThumbnails)} className="p-2 hover:scale-110 transition-transform">☰</button>
                </div>
                
                {/* Placeholder pour l'équilibre visuel */}
                <div className="w-10"></div>
            </div>

            {/* 1. Barre de progression */}
            <div className="w-full h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                <div
                    className="h-full bg-[rgb(var(--color-primary))] transition-all duration-300"
                    style={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
                />
            </div>

            {/* 2. Le Carousel ou la Mosaïque */}
            <div className="relative w-full flex-1 my-4 overflow-hidden rounded-[32px] shadow-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[rgb(var(--color-bg-card))]">
                
                {/* Vue Mosaïque (Thumbnails) déclenchée par le hamburger */}
                {showThumbnails ? (
                    <div className="absolute inset-0 z-10 bg-white dark:bg-gray-900 p-4 overflow-y-auto grid grid-cols-3 gap-2 animate-in fade-in zoom-in duration-300">
                        {cards.map((card, idx) => (
                            <button 
                                key={idx} 
                                onClick={() => { setCurrentIndex(idx); setShowThumbnails(false); }}
                                className={`aspect-square rounded-lg overflow-hidden border-2 ${currentIndex === idx ? 'border-[rgb(var(--color-primary))] scale-95' : 'border-transparent opacity-70'}`}
                            >
                                <img src={card.phrase_illustration} className="w-full h-full object-cover" alt="" />
                            </button>
                        ))}
                    </div>
                ) : null}

                {/* Le Train de cartes */}
                <div
                    className="flex h-full transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {cards.map((card, index) => (
                        <SingleCardCarousel key={index} card={card} index={index} lang={lang}/>
                    ))}
                </div>
            </div>

            {/* 3. Navigation (bas) */}
            <div className="flex items-center justify-center gap-8 pb-2">
                <button
                    onClick={prevCard}
                    disabled={currentIndex === 0}
                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${currentIndex === 0 ? 'border-gray-100 text-gray-200' : 'border-[rgb(var(--color-primary))] text-[rgb(var(--color-primary))] active:scale-90'
                        }`}
                >
                    ←
                </button>

                <span className="text-sm font-bold text-gray-500 tabular-nums bg-gray-100 dark:bg-gray-800 px-4 py-1 rounded-full">
                    {currentIndex + 1} / {cards.length}
                </span>

                <button
                    onClick={nextCard}
                    disabled={currentIndex === cards.length - 1}
                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${currentIndex === cards.length - 1 ? 'border-gray-100 text-gray-200' : 'border-[rgb(var(--color-primary))] text-[rgb(var(--color-primary))] active:scale-90'
                        }`}
                >
                    →
                </button>
            </div>
        </div>
    );
};

export default SayneteCardCarousel;