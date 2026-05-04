import React from 'react';
import { interpretes, mariama, mohamed, nune, paula, sonia, alysone, gulseren, } from "../assets/img/index.js";

const TeamSection = () => {
  // Simulation d'une liste d'interprètes (à remplir avec vos photos réelles)
  const interpreters = [
    { name: "Paula", lang: "Roumain", img: paula },
    { name: "Nune", lang: "Russe", img: nune },
    { name: "Mariama", lang: "Portugais", img: mariama },
    { name: "Sonia", lang: "Espagnol", img: sonia },
    { name: "Alysone", lang: "Anglais", img: alysone },
    { name: "Mohamed", lang: "Arabe", img: mohamed },
    { name: "Gulseren", lang: "Turc", img: gulseren }
    // Ajoutez autant d'entrées que nécessaire...
  ];

  return (
    <section id="equipe_section" className="py-24 bg-[rgb(var(--color-secondary)/0.1)] transition-colors duration-300">
      <div className="container mx-auto px-6">

        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Texte à gauche */}
          <div className="lg:w-2/3 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-[rgb(var(--color-text-main))]">
              Les voix de <span className="text-[rgb(var(--color-primary))]">l'inclusivité</span>
            </h2>
            <p className="text-long-content">
              Nos contenus sont rédigés par des professionnels de santé, puis traduits et enregistrés par des interprètes traducteurs professionnels diplômés, garantissant une fidélité médicale absolue dans chaque langue.
            </p>
            <div className="flex gap-2">
              <span className="px-4 py-1 bg-[rgb(var(--color-secondary)/0.1)] text-[rgb(var(--color-secondary))] rounded-full text-sm font-bold">
                7+ Langues
              </span>
              <span className="px-4 py-1 bg-[rgb(var(--color-primary)/0.1)] text-[rgb(var(--color-primary))] rounded-full text-sm font-bold">
                Interprètes Traducteurs diplômés
              </span>
            </div>
          </div>

          {/* Nuage d'avatars à droite */}
          <div className="lg:w-2/3">
            <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
              {interpreters.map((person, i) => (
                <div key={i} className="group relative">
                  {/* Avatar Circulaire */}
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-4 border-white dark:border-[rgb(var(--color-bg-card))] shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:border-[rgb(var(--color-primary))]">
                    <img
                      src={person.img}
                      alt={person.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>

                  {/* Tooltip au survol */}
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-[rgb(var(--color-text-main))] text-white text-xs py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 shadow-xl">
                    <span className="font-bold">{person.name}</span> — {person.lang}
                  </div>
                </div>
              ))}

              {/* Bulle "Et d'autres..." pour montrer l'étendue de l'équipe */}
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-[rgb(var(--color-bg-pills))] flex items-center justify-center border-4 border-dashed border-gray-300 dark:border-gray-600">
                <span className="text-2xl text-gray-400 font-bold">+</span>
              </div>
            </div>
          </div>
          {/* Image Carrée 2 (Main tenant le mobile) */}
          <div className="aspect-square rounded-[48px] overflow-hidden bg-[rgb(var(--color-secondary)/0.15)] dark:bg-[rgb(var(--color-bg-card))] shadow-[var(--card-shadow)] p-6 group">
            <img
              src={interpretes}
              alt="Usage smartphone"
              className="w-90 object-cover rounded-[32px] transition-transform duration-700 group-hover:scale-105"
            />
            <h2 className="flex my-3 justify-center text-3xl lg:text-4xl font-bold text-[rgb(var(--color-text-main))]">
              Nous parlons&nbsp;<span className="text-[rgb(var(--color-primary))]">votre langue</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;