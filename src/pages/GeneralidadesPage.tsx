
import React from 'react';
import Generalidades from '../components/Generalidades';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GeneralidadesPage: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto max-w-4xl space-y-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <Generalidades />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GeneralidadesPage;
