import React from 'react';

const TeamSection = () => {
  // Simulation d'une liste d'interprètes (à remplir avec vos photos réelles)
  const interpreters = [
    { name: "Amira", lang: "Arabe", img: "/img/team/amira.jpg" },
    { name: "Stefan", lang: "Roumain", img: "/img/team/stefan.jpg" },
    { name: "Elena", lang: "Russe", img: "/img/team/elena.jpg" },
    { name: "Yusuf", lang: "Turc", img: "/img/team/yusuf.jpg" },
    { name: "Maria", lang: "Espagnol", img: "/img/team/maria.jpg" },
    { name: "Lamine", lang: "Malinké", img: "/img/team/lamine.jpg" },
        { name: "Amira", lang: "Arabe", img: "/img/team/amira.jpg" },
    { name: "Stefan", lang: "Roumain", img: "/img/team/stefan.jpg" },
    { name: "Elena", lang: "Russe", img: "/img/team/elena.jpg" },
    { name: "Yusuf", lang: "Turc", img: "/img/team/yusuf.jpg" },
    { name: "Maria", lang: "Espagnol", img: "/img/team/maria.jpg" },
    { name: "Lamine", lang: "Malinké", img: "/img/team/lamine.jpg" },
    // Ajoutez autant d'entrées que nécessaire...
  ];

  return (
    <section id="equipe_section" className="py-24 bg-[rgb(var(--color-bg-main))] transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Texte à gauche */}
          <div className="lg:w-1/3 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-[rgb(var(--color-text-main))]">
              Les voix de <span className="text-[rgb(var(--color-primary))]">l'inclusivité</span>
            </h2>
            <p className="text-long-content">
              Nos contenus sont traduits et enregistrés par des interprètes professionnels diplômés, garantissant une fidélité médicale absolue dans chaque langue.
            </p>
            <div className="flex gap-2">
              <span className="px-4 py-1 bg-[rgb(var(--color-secondary)/0.1)] text-[rgb(var(--color-secondary))] rounded-full text-sm font-bold">
                10+ Langues
              </span>
              <span className="px-4 py-1 bg-[rgb(var(--color-primary)/0.1)] text-[rgb(var(--color-primary))] rounded-full text-sm font-bold">
                Experts diplômés
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

        </div>
      </div>
    </section>
  );
};

export default TeamSection;