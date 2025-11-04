
import React, { useRef } from 'react';

const DisenoObjetos: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <section id="objetos" className="w-full py-16 sm:py-24">
      <div className="container mx-auto px-4">
        {/* PageHeading Component */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-black tracking-tighter text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              Diseño Orientado a Objetos (UML)
            </h1>
            <p className="mt-4 text-lg text-primary">
              Modelando objetos del mundo real: Cliente, Producto, Venta.
            </p>
          </div>
        </div>
        {/* Fin PageHeading Component */}
        {/* Carousel Component */}
        <div className="relative w-full max-w-7xl mx-auto">
          <button
            onClick={() => scroll(-312)}
            className="absolute top-1/2 -left-4 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background-light dark:bg-background-dark/80 shadow-md transition-colors hover:bg-gray-200 dark:hover:bg-background-dark"
          >
            <span className="material-symbols-outlined text-gray-800 dark:text-gray-200">
              arrow_back
            </span>
          </button>
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth"
          >
            <div className="flex items-stretch p-4 gap-6">
              {/* Card 1 */}
              <div className="flex flex-col flex-shrink-0 w-72 transform transition-transform duration-300 hover:-translate-y-2 rounded-xl bg-white dark:bg-gray-800 shadow-lg overflow-hidden group">
                <div className="flex items-center justify-center w-full h-40 bg-gray-200 rounded-xl shadow-sm">
                  <p className="text-gray-500">Aquí va el Diagrama de Casos de Uso</p>
                </div>
                <div className="flex flex-col flex-1 justify-between p-5">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      Diagrama de Casos de Uso
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      Este diagrama modela las interacciones entre los usuarios (actores) y el sistema, definiendo qué hace el sistema desde una perspectiva externa.
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="flex flex-col flex-shrink-0 w-72 transform transition-transform duration-300 hover:-translate-y-2 rounded-xl bg-white dark:bg-gray-800 shadow-lg overflow-hidden group">
                <div className="flex items-center justify-center w-full h-40 bg-gray-200 rounded-xl shadow-sm">
                  <p className="text-gray-500">Aquí va el Diagrama de Clases</p>
                </div>
                <div className="flex flex-col flex-1 justify-between p-5">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      Diagrama de Clases
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      Representa la estructura estática del sistema, mostrando las clases, sus atributos, métodos y las relaciones entre objetos como Cliente y Producto.
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="flex flex-col flex-shrink-0 w-72 transform transition-transform duration-300 hover:-translate-y-2 rounded-xl bg-white dark:bg-gray-800 shadow-lg overflow-hidden group">
                <div className="flex items-center justify-center w-full h-40 bg-gray-200 rounded-xl shadow-sm">
                  <p className="text-gray-500">Aquí va el Diagrama de Secuencia: Venta</p>
                </div>
                <div className="flex flex-col flex-1 justify-between p-5">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      Diagrama de Secuencia: Venta
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      Muestra la interacción de objetos en una secuencia temporal, detallando el flujo paso a paso del proceso de realización de una venta.
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 4 */}
              <div className="flex flex-col flex-shrink-0 w-72 transform transition-transform duration-300 hover:-translate-y-2 rounded-xl bg-white dark:bg-gray-800 shadow-lg overflow-hidden group">
                <div className="flex items-center justify-center w-full h-40 bg-gray-200 rounded-xl shadow-sm">
                  <p className="text-gray-500">Aquí va el Diagrama de Despliegue</p>
                </div>
                <div className="flex flex-col flex-1 justify-between p-5">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      Diagrama de Despliegue
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      Describe la arquitectura física del sistema, incluyendo los nodos de hardware y el software que se ejecuta en ellos.
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 5 */}
              <div className="flex flex-col flex-shrink-0 w-72 transform transition-transform duration-300 hover:-translate-y-2 rounded-xl bg-white dark:bg-gray-800 shadow-lg overflow-hidden group">
                <div className="flex items-center justify-center w-full h-40 bg-gray-200 rounded-xl shadow-sm">
                  <p className="text-gray-500">Aquí va el Diagrama de Componentes</p>
                </div>
                <div className="flex flex-col flex-1 justify-between p-5">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      Diagrama de Componentes
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      Visualiza la organización y dependencias entre los componentes de software modulares del sistema de Eco Moda.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => scroll(312)}
            className="absolute top-1/2 -right-4 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background-light dark:bg-background-dark/80 shadow-md transition-colors hover:bg-gray-200 dark:hover:bg-background-dark"
          >
            <span className="material-symbols-outlined text-gray-800 dark:text-gray-200">
              arrow_forward
            </span>
          </button>
        </div>
        {/* End Carousel Component */}
      </div>
    </section>
  );
};

export default DisenoObjetos;
