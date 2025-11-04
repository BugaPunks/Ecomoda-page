
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    return `text-sm font-medium transition-colors hover:text-primary dark:hover:text-primary ${
      location.pathname === path ? 'text-primary dark:text-primary' : ''
    }`;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-light dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="size-6 text-text-light dark:text-primary">
              <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  clipRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
            <h2 className="text-lg font-bold tracking-tight text-text-light dark:text-text-dark">
              Eco Moda
            </h2>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              className={getLinkClass('/')}
              to="/"
            >
              Inicio
            </Link>
            <Link
              className={getLinkClass('/generalidades')}
              to="/generalidades"
            >
              Generalidades
            </Link>
            <Link
              className={getLinkClass('/analisis-y-diseno')}
              to="/analisis-y-diseno"
            >
              Análisis y Diseño
            </Link>
            <a
              className="text-sm font-medium transition-colors hover:text-primary dark:hover:text-primary"
              href="/#objetos"
            >
              Orientado a Objetos
            </a>
            <a
              className="text-sm font-medium transition-colors hover:text-primary dark:hover:text-primary"
              href="/#video"
            >
              Video Tutorial
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
