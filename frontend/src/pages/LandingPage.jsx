import React from 'react';
import Navbar from "./Navbar"

// --- COMPOSANT HEADER / HERO ---
const HeroSection = () => (
    <section className="relative overflow-hidden bg-[rgb(var(--color-bg-main))] py-20 transition-colors duration-300">
        <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2 space-y-8">
                    <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-[rgb(var(--color-text-main))]">
                        L'éducation thérapeutique <br />
                        <span className="text-[rgb(var(--color-primary))]">sans frontières.</span>
                    </h1>
                    <p className="text-xl text-long-content max-w-lg">
                        Parce que comprendre son traitement ne devrait pas dépendre de sa langue maternelle. Découvrez notre approche visuelle pour le suivi du diabète.
                    </p>
                    <button className="px-8 py-4 bg-[rgb(var(--color-primary))] text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all">
                        Accéder à l'application
                    </button>
                </div>
                <div className="lg:w-1/2 relative">
                    <img src="/img/herosection.png" alt="Illustration Hero" className="rounded-[40px] shadow-2xl w-full h-auto" />
                </div>
            </div>
        </div>
        {/* Vague décorative inspirée du croquis */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-20 fill-white dark:fill-[rgb(var(--color-bg-main))]">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V120c68.85-24.3,143.43-32.51,214.34-31C248.83,91.07,284.52,71.68,321.39,56.44Z"></path>
            </svg>
        </div>
    </section>
);

// --- SECTION LE PROBLÈME ---
const ProblemSection = () => (
    <section className="py-24 bg-[rgb(var(--color-primary))] text-white">
        <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-16">
                <h2 className="text-3xl lg:text-5xl font-bold mb-6">Le défi de la barrière linguistique</h2>
                <p className="text-xl opacity-90">En France, les barrières linguistiques impactent l'observance et augmentent l'isolement des patients diabétiques.</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div className="p-8 rounded-[32px] bg-white text-[rgb(var(--color-text-body))] shadow-xl">
                        <h3 className="text-2xl font-bold mb-4 text-[rgb(var(--color-text-main))] flex items-center gap-2"><span>🩺</span> Côté Soignants</h3>
                        <ul className="space-y-2 opacity-90">
                            <li>• Temps de consultation limité.</li>
                            <li>• Difficulté à vérifier la compréhension réelle.</li>
                        </ul>
                    </div>
                    <div className="p-8 rounded-[32px] bg-white text-[rgb(var(--color-text-body))] shadow-xl">
                        <h3 className="text-2xl font-bold mb-4 text-[rgb(var(--color-text-main))] flex items-center gap-2"><span>👤</span> Côté Patients</h3>
                        <ul className="space-y-2 opacity-90">
                            <li>• Peur de mal prendre son traitement.</li>
                            <li>• Brochures textuelles souvent illisibles.</li>
                        </ul>
                    </div>
                </div>
                <div className="relative group rounded-[40px] overflow-hidden border-8 border-white/20 shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500">
                    <img src="/img/IMG_1759.jpg" alt="Barrière linguistique" className="w-full h-auto" />
                </div>
            </div>
        </div>
    </section>
);

// --- SECTION LA SOLUTION ---
const SolutionSection = () => (
    <section className="py-24 bg-[rgb(var(--color-bg-pills))] dark:bg-[rgb(var(--color-bg-main))]">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-16 text-[rgb(var(--color-text-main))]">
                Une approche <span className="text-[rgb(var(--color-primary))]">visuelle et inclusive</span>
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
                {[
                    { icon: "🎬", title: "Format Saynètes", desc: "Histoires courtes pour éviter la surcharge cognitive." },
                    { icon: "🩺", title: "Validé par des Pros", desc: "Textes rédigés par des professionnels de santé." },
                    { icon: "📱", title: "Zéro Barrière", desc: "Pas de compte, pas d'installation. Accès immédiat." }
                ].map((item, i) => (
                    <div key={i} className="p-10 rounded-[40px] bg-white dark:bg-[rgb(var(--color-bg-card))] shadow-[var(--card-shadow)] border-b-8 border-[rgb(var(--color-primary))]">
                        <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 dark:bg-white/10 rounded-3xl flex items-center justify-center text-4xl shadow-inner">
                            {item.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-[rgb(var(--color-primary))]">{item.title}</h3>
                        <p className="text-long-content">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// --- SECTION APP SHOWCASE (COLONNES ALTERNÉES) ---
const AppShowCase = () => (
    <section className="py-24 bg-white dark:bg-[rgb(var(--color-bg-main))]">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Colonne 1 : Texte puis Image */}
                <div className="space-y-12">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-[rgb(var(--color-text-main))] leading-tight">
                            Une approche créative et simple <span className="text-[rgb(var(--color-primary))]">pour une meilleure expérience</span>.
                        </h3>
                        <p className="text-lg text-long-content">
                            Les cartes permettent d'aller du global à la langue maternelle vers le détail du vocabulaire médical.
                        </p>
                    </div>
                    <div className="aspect-square rounded-[48px] overflow-hidden bg-[rgb(var(--color-bg-pills))] p-8 shadow-[var(--card-shadow)]">
                        <img src="/img/saynetes_mockup_3-C.jpg" alt="Multi-supports" className="w-full h-full object-contain" />
                    </div>
                </div>
                {/* Colonne 2 : Image puis Texte */}
                <div className="space-y-12 lg:mt-32">
                    <div className="aspect-square rounded-[48px] overflow-hidden bg-[rgb(var(--color-bg-pills))] p-8 shadow-[var(--card-shadow)]">
                        <img src="/img/iphone_mockup_saynete1_1ru.jpg" alt="Mobile View" className="w-full h-full object-contain" />
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-[rgb(var(--color-text-main))]">
                            Des cartes illustrées <span className="text-[rgb(var(--color-primary))]">pour lire et écouter</span>.
                        </h3>
                        <p className="text-lg text-long-content">
                            Les dialogues s'affichent sous forme de cartes avec texte et audio synchronisé dans la langue choisie.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- SECTION GUIDE SOIGNANT ---
const PractitionerGuide = () => (
    <section className="py-24 bg-[rgb(var(--color-bg-pills))] dark:bg-[rgb(var(--color-bg-main))]">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-5xl font-bold text-[rgb(var(--color-text-main))]">Un outil au service de votre consultation</h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
                {[
                    { step: "1", title: "En consultation", text: "Support visuel pour illustrer un propos technique complexe." },
                    { step: "2", title: "Prescription QR", text: "Faites scanner le code pour que le patient reparte avec l'outil." },
                    { step: "3", title: "À domicile", text: "Rappel des consignes en toute autonomie pour le patient." }
                ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 mb-6 rounded-2xl bg-[rgb(var(--color-primary))] text-white flex items-center justify-center text-2xl font-bold shadow-lg">{item.step}</div>
                        <h3 className="text-2xl font-bold mb-4 text-[rgb(var(--color-text-main))]">{item.title}</h3>
                        <p className="text-long-content">{item.text}</p>
                    </div>
                ))}
            </div>
            <div className="mt-20 p-12 rounded-[48px] bg-white dark:bg-[rgb(var(--color-bg-card))] shadow-[var(--card-shadow)] flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2 space-y-6">
                    <h3 className="text-3xl font-bold text-[rgb(var(--color-text-main))]">Accès instantané <span className="text-[rgb(var(--color-primary))]">sans installation</span></h3>
                    <button className="px-8 py-4 bg-[rgb(var(--color-primary))] text-white rounded-full font-bold">Générer mon kit soignant</button>
                </div>
                <div className="lg:w-1/2 flex justify-center text-6xl opacity-20">{"📱 + 🔳"}</div>
            </div>
        </div>
    </section>
);

// --- SECTION IMPACT ---
const ImpactSection = () => (
    <section className="py-24 bg-white dark:bg-[rgb(var(--color-bg-main))]">
        <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2 space-y-8">
                    <h2 className="text-3xl lg:text-5xl font-bold text-[rgb(var(--color-text-main))] leading-tight">
                        Un impact réel sur <br /><span className="text-[rgb(var(--color-primary))]">le parcours de soin</span>
                    </h2>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="p-6 rounded-3xl bg-[rgb(var(--color-bg-pills))] border-l-4 border-[rgb(var(--color-secondary))]">
                            <div className="text-3xl font-bold text-[rgb(var(--color-text-main))]">10+</div>
                            <div className="text-sm font-bold opacity-70 uppercase tracking-widest">Langues</div>
                        </div>
                        <div className="p-6 rounded-3xl bg-[rgb(var(--color-bg-pills))] border-l-4 border-[rgb(var(--color-primary))]">
                            <div className="text-3xl font-bold text-[rgb(var(--color-text-main))]">100%</div>
                            <div className="text-sm font-bold opacity-70 uppercase tracking-widest">Médicalisé</div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 p-10 bg-[rgb(var(--color-bg-pills))] rounded-[48px] italic text-xl text-long-content shadow-inner">
                    "Un outil qui me fait gagner 10 minutes d'explications complexes en consultation."
                    <span className="block mt-6 not-italic font-bold text-[rgb(var(--color-text-main))] text-base">— Un infirmier en ETP</span>
                </div>
            </div>
        </div>
    </section>
);

// --- SECTION TEAM & INTERPRÈTES ---
const TeamSection = () => (
    <section className="py-24 bg-[rgb(var(--color-bg-pills))] dark:bg-[rgb(var(--color-bg-main))]">
        <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/3 space-y-6">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[rgb(var(--color-text-main))]">Les voix de <span className="text-[rgb(var(--color-primary))]">l'inclusivité</span></h2>
                    <p className="text-long-content">Traductions réalisées par des interprètes professionnels diplômés.</p>
                </div>
                <div className="lg:w-2/3 flex flex-wrap justify-center gap-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gray-200 dark:bg-white/10 border-4 border-white dark:border-gray-800 shadow-lg grayscale hover:grayscale-0 hover:scale-110 transition-all cursor-pointer"></div>
                    ))}
                    <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-white/50 border-4 border-dashed border-gray-300 flex items-center justify-center text-2xl text-gray-400">+</div>
                </div>
            </div>
        </div>
    </section>
);

// --- FOOTER ---
const Footer = () => (
    <footer className="py-16 bg-white dark:bg-[rgb(var(--color-bg-card))] border-t border-gray-100 dark:border-gray-800 text-center">
        <div className="container mx-auto px-6 space-y-8">
            <div className="flex flex-col items-center gap-2">
                <h3 className="text-2xl font-bold">Saynètes<span className="text-[rgb(var(--color-primary))]">.fr</span></h3>
                <p className="text-long-content max-w-sm">Comprendre son traitement sans barrière de langue.</p>
            </div>
            <div className="w-24 h-px bg-gray-200 dark:bg-gray-700 mx-auto"></div>
            <p className="text-sm text-gray-400">Conception du site et graphisme © Hammer & Marteau 2026</p>
        </div>
    </footer>
);

// --- COMPOSANT PRINCIPAL ---
export default function LandingPage() {
    return (
        <div className="antialiased selection:bg-[rgb(var(--color-primary))] selection:text-white">
            <Navbar />
            <HeroSection />
            <ProblemSection />
            <SolutionSection />
            <AppShowCase />
            <PractitionerGuide />
            <ImpactSection />
            <TeamSection />
            <Footer />
        </div>
    );
}