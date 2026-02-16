import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LanguageDeck = ({ languages }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    // Switch pour tester les deux options facilement
    const displayOption = "B"; // Changez par "C" pour la version abstraite

    // Filtrage des langues en temps réel
    const filteredLanguages = languages.filter(lang =>
        lang.lang_name_fr.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lang.lang_name_native.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-[rgb(var(--color-bg-main))] transition-colors duration-300">

            {/* HEADER : ILLUSTRATION & TITRE */}
            <header className="pt-10 pb-6 px-6 text-center max-w-2xl mx-auto">

                {displayOption === "B" ? (
                    /* OPTION B : Illustration Humaine (Style Saynètes) */
                    <div className="mb-6 animate-in fade-in slide-in-from-top duration-700">
                        <div className="w-48 h-48 mx-auto bg-[rgb(var(--color-bg-pills))] rounded-full flex items-center justify-center relative shadow-inner">
                            <span className="text-6xl animate-bounce-slow">👋</span>
                            <div className="absolute -right-2 top-10 bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                                <p className="text-xs font-bold text-[rgb(var(--color-primary))]">Hello! مرحبا! Hola!</p>
                            </div>
                        </div>
                        <h1 className="mt-6 text-3xl font-bold text-[rgb(var(--color-text-main))] leading-tight">
                            Nous parlons <span className="text-[rgb(var(--color-primary))]">votre langue.</span>
                        </h1>
                    </div>
                ) : (
                    /* OPTION C : Version Abstraite & Focus Recherche */
                    <div className="mb-8 pt-4">
                        <h1 className="text-4xl font-black text-[rgb(var(--color-text-main))] mb-2 tracking-tight">
                            SÉLECTIONNEZ <br />UNE LANGUE
                        </h1>
                        <div className="w-16 h-1 bg-[rgb(var(--color-primary))] mx-auto rounded-full opacity-50"></div>
                    </div>
                )}

                {/* BARRE DE RECHERCHE (Amélioration UX) */}
                <div className="relative mt-8 group">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl opacity-40 group-focus-within:opacity-100 transition-opacity">🔍</span>
                    <input
                        type="text"
                        placeholder="Rechercher une langue..."
                        className="w-full py-4 pl-12 pr-6 rounded-2xl border-2 border-gray-100 dark:border-gray-800 bg-white dark:bg-[rgb(var(--color-bg-card))] text-[rgb(var(--color-text-main))] focus:border-[rgb(var(--color-primary))] outline-none transition-all shadow-sm focus:shadow-md"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </header>

            {/* LISTE DES LANGUES (Amélioration par tuiles) 
            onClick={() => navigate(`/theme_page/${lang.language}?l=${lang.language}`)}
            */}
            <main className="px-6 pb-20 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {filteredLanguages.sort((a, b) => a.lang_is_available < b.lang_is_available ? 1 : -1).map((lang) => (
                        <button
                            key={lang.lang_alpha2}
                            disabled={!lang.lang_is_available}
                            onClick={() => navigate(`/theme_page/${lang.language}?l=${lang.language}`)}
                            className={`flex items-center gap-4 p-4 rounded-2xl border transition-all shadow-sm group relative
    ${lang.lang_is_available
                                    ? 'bg-white dark:bg-[rgb(var(--color-bg-card))] border-gray-100 dark:border-gray-800 hover:border-[rgb(var(--color-primary))] hover:scale-[1.02] active:scale-95'
                                    : 'bg-gray-50 dark:bg-gray-900/50 border-transparent opacity-60 cursor-not-allowed'
                                }`}
                        >
                            {/* BADGE "BIENTÔT" */}
                            {!lang.lang_is_available && (
                                <span className="absolute -top-2 -right-2 bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-200 text-[10px] font-black px-2 py-1 rounded-lg shadow-sm uppercase tracking-tighter border border-amber-200 dark:border-amber-800 z-10">
                                    Bientôt
                                </span>
                            )}

                            {/* Le "Drapeau" ou Symbole Visuel */}
                            <div className="w-12 h-12 rounded-xl bg-[rgb(var(--color-bg-pills))] flex items-center justify-center overflow-hidden group-hover:bg-[rgb(var(--color-primary))] transition-colors shrink-0">
                                {lang.lang_flag_icon ? (
                                    <img
                                        src={lang.lang_flag_icon}
                                        alt={`Drapeau ${lang.lang_name_fr}`}
                                        className={`w-full h-full object-cover transition-transform ${lang.lang_is_available ? 'group-hover:scale-110' : 'grayscale'}`}
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentNode.innerHTML = '🌐';
                                        }}
                                    />
                                ) : (
                                    <span className="text-2xl">🌐</span>
                                )}
                            </div>

                            {/* Textes */}
                            <div className="text-left overflow-hidden">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1 truncate">
                                    {lang.lang_name_fr}
                                </p>
                                <p className={`text-lg font-bold truncate ${lang.lang_is_available ? 'text-[rgb(var(--color-text-main))]' : 'text-gray-400'}`}>
                                    {lang.lang_name_native}
                                </p>
                            </div>
                        </button>
                    ))}
                </div>

                {/* État vide si aucune recherche ne correspond */}
                {filteredLanguages.length === 0 && (
                    <div className="text-center py-20 opacity-50">
                        <p className="text-xl">Désolé, cette langue n'est pas <br />encore disponible. 🌏</p>
                    </div>
                )}
            </main>

            {/* FOOTER DISCRET */}
            <footer className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[rgb(var(--color-bg-main))] to-transparent pointer-events-none">
                <div className="max-w-2xl mx-auto flex justify-center">
                    <button onClick={() => navigate('/')} className="pointer-events-auto px-6 py-2 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-100 dark:border-gray-700 text-sm font-bold">
                        🏠 Retour Accueil
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default LanguageDeck;