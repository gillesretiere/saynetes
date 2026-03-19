import React from 'react';
import { hand_barcode, } from "../assets/img/index.js";


const PractitionerGuide = ({ callbackModal }) => {
  const handleClick = () => {
    callbackModal();
  };


  return (
    <section id="guide_section" className="py-20 bg-[rgb(var(--color-bg-main))] transition-colors duration-300">
      <div className="container mx-auto px-6">

        {/* En-tête avec badge */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-2 rounded-full bg-[rgb(var(--color-primary)/0.1)] text-[rgb(var(--color-primary))] font-bold text-sm uppercase tracking-wider">
            Usage Clinique
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-6 mb-6 text-[rgb(var(--color-text-main))]">
            Un outil au service de <span className="text-[rgb(var(--color-primary))]">votre consultation</span>
          </h2>
          <p className="text-xl text-long-content">
            Les Saynètes, ce n'est pas seulement une application, c'est un médiateur thérapeutique qui s'intègre en trois étapes clés.
          </p>
        </div>

        {/* Parcours Utilisateur (Steps) */}
        <div className="grid lg:grid-cols-3 gap-12 relative">

          {/* Ligne de liaison (Desktop uniquement) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-[rgb(var(--color-primary)/0.3)] -translate-y-12"></div>

          {/* Étape 1 : En consultation */}
          <div className="relative flex flex-col items-center text-center group">
            <div className="w-16 h-16 mb-6 rounded-2xl bg-[rgb(var(--color-primary))] text-white flex items-center justify-center text-2xl font-bold shadow-lg z-10 group-hover:scale-110 transition-transform">
              1
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[rgb(var(--color-text-main))]">En consultation</h3>
            <p className="text-long-content">
              Utilisez les saynètes comme support visuel pour illustrer un propos technique ou une consigne de traitement.
            </p>
          </div>

          {/* Étape 2 : La "Prescription" */}
          <div className="relative flex flex-col items-center text-center group">
            <div className="w-16 h-16 mb-6 rounded-2xl bg-[rgb(var(--color-primary))] text-white flex items-center justify-center text-2xl font-bold shadow-lg z-10 group-hover:scale-110 transition-transform">
              2
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[rgb(var(--color-text-main))]">La "Prescription"</h3>
            <p className="text-long-content">
              En fin de séance, remettez un livret A5 ou faites scanner le QR code pour que le patient reparte avec l'outil.
            </p>
          </div>

          {/* Étape 3 : Autonomie à domicile */}
          <div className="relative flex flex-col items-center text-center group">
            <div className="w-16 h-16 mb-6 rounded-2xl bg-[rgb(var(--color-primary))] text-white flex items-center justify-center text-2xl font-bold shadow-lg z-10 group-hover:scale-110 transition-transform">
              3
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[rgb(var(--color-text-main))]">À domicile</h3>
            <p className="text-long-content">
              Le patient et son entourage consultent les rappels en toute autonomie, dans leur langue maternelle.
            </p>
          </div>

        </div>

        {/* Bloc Focus QR Code / Mobile Preview */}
        <div className="mt-20 p-8 lg:p-12 rounded-[48px] bg-[rgb(var(--color-bg-card))] shadow-[var(--card-shadow)] border border-gray-100 dark:border-gray-800 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold mb-6 text-[rgb(var(--color-text-main))]">
              Accès instantané <br />
              <span className="text-[rgb(var(--color-primary))]">Sans installation</span>
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-lg">
                <span className="text-green-500">✓</span> Format Web & Mobile hybride
              </li>
              <li className="flex items-center gap-3 text-lg">
                <span className="text-green-500">✓</span> Pas de création de compte requise
              </li>
              <li className="flex items-center gap-3 text-lg">
                <span className="text-green-500">✓</span> Respect de la confidentialité
              </li>
            </ul>
            <div className="flex flex-wrap gap-4">
              {/* Bouton Orange/Corail menant à l'application */}
              <a
                href="./language_page/"
                onClick={handleClick}
                className="px-10 py-4 bg-[rgb(var(--color-primary))] text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform text-center"
              >
                Je me connecte
              </a>
            </div>
          </div>
          <div className="lg:w-2/3 flex justify-center">
            {/* Ici on imagine une illustration d'un smartphone affichant un QR code */}
            <img src={hand_barcode} />
          </div>
          <a href="./language_page/"
            onClick={handleClick} className="text-xl font-bold my-6 text-[rgb(var(--color-primary))]">
            https://saynetes.fr
          </a>
        </div>

      </div>
    </section>
  );
};

export default PractitionerGuide;