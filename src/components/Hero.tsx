
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center py-20 lg:py-32"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 dark:opacity-5"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDzFogqYQqYqbYjwiynpRCXMP3C7EhtM7qB3WoV4bP9ri-tNguczaydatKfAOurXVVhNy_eYT3zT4zEOJq3wQWW1iFIb5GZBogljReld0C7nurN35BlxP4doo5G6Chy7rlSf9YLsHLdYIesOTGaizfttOEmW8-yDttusAPUY5MkmnpWZYRNqx_MF0yKkgviuKBbWB5DDQH7a30qV65ds0rtdX2UBthghzTqKmVWt1b-ymC9CIE_drBRswcGoJVHE0LLZufziFG-5NLJ')",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background-light via-background-light/80 to-transparent dark:from-background-dark dark:via-background-dark/80"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-text-light dark:text-text-dark">
            Tejiendo un Futuro Sostenible con Tecnología
          </h1>
          <h2 className="max-w-3xl text-lg font-normal text-text-light/80 dark:text-text-dark/80 sm:text-xl">
            Un innovador proyecto de sistema que combina la alta moda con la responsabilidad ecológica, optimizando la producción para un mañana más verde.
          </h2>
          <a
            className="inline-flex h-12 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-text-light px-8 text-base font-bold text-background-light shadow-lg transition-transform duration-200 hover:scale-105 dark:bg-primary dark:text-background-dark"
            href="#generalidades"
          >
            <span>Ver más</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
