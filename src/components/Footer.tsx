
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col gap-6 px-5 py-10 text-center bg-background-light dark:bg-background-dark border-t border-[#e6f4ec] dark:border-primary/20">
      <div className="flex flex-wrap items-center justify-center gap-6">
        <a
          className="text-[#45a16b] dark:text-primary/80 hover:text-primary dark:hover:text-primary text-base font-normal leading-normal min-w-40 transition-colors"
          href="#"
        >
          Política de Privacidad
        </a>
        <a
          className="text-[#45a16b] dark:text-primary/80 hover:text-primary dark:hover:text-primary text-base font-normal leading-normal min-w-40 transition-colors"
          href="#"
        >
          Términos de Servicio
        </a>
        <a
          className="text-[#45a16b] dark:text-primary/80 hover:text-primary dark:hover:text-primary text-base font-normal leading-normal min-w-40 transition-colors"
          href="#"
        >
          Contáctanos
        </a>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <a href="#" className="text-2xl text-[#45a16b] dark:text-primary/80 hover:text-primary dark:hover:text-primary transition-colors">
          <FaFacebook />
        </a>
        <a href="#" className="text-2xl text-[#45a16b] dark:text-primary/80 hover:text-primary dark:hover:text-primary transition-colors">
          <FaInstagram />
        </a>
        <a href="#" className="text-2xl text-[#45a16b] dark:text-primary/80 hover:text-primary dark:hover:text-primary transition-colors">
          <FaLinkedin />
        </a>
        <a href="#" className="text-2xl text-[#45a16b] dark:text-primary/80 hover:text-primary dark:hover:text-primary transition-colors">
          <FaTwitter />
        </a>
      </div>
      <p className="text-[#45a16b] dark:text-primary/80 text-base font-normal leading-normal">
        © 2025 Eco Moda S.R.L. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
