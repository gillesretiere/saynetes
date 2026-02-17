import React from 'react';

const SectionDivider = () => {
  return (
    <div className="relative w-full overflow-hidden leading-[0] rotate-180 bg-white dark:bg-[rgb(var(--color-bg-main))]">
      <svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none" 
        className="relative block w-full h-[60px] fill-white dark:fill-[rgb(var(--color-bg-main))]"
        style={{ filter: 'drop-shadow(0px -5px 5px rgba(0,0,0,0.05))' }}
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
      </svg>
    </div>
  );
};

export default SectionDivider;