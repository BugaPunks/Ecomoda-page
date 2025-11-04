
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import DisenoObjetos from '../components/DisenoObjetos';
import VideoTutorial from '../components/VideoTutorial';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <div className="container mx-auto max-w-4xl space-y-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <DisenoObjetos />
          <VideoTutorial />
        </div>
      </main>
      <a
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-text-light text-background-light shadow-lg transition-transform duration-200 hover:scale-110 dark:bg-primary dark:text-background-dark"
        href="#inicio"
      >
        <span className="material-symbols-outlined">arrow_upward</span>
      </a>
      <Footer />
    </div>
  );
};

export default HomePage;
