
import React from 'react';

const AnalisisDiseno: React.FC = () => {
  return (
    <section id="analisis" className="scroll-mt-20">
      <main className="py-12 sm:py-16">
        {/* PageHeading */}
        <div className="flex flex-wrap justify-between gap-3 p-4 mb-8">
          <h1 className="text-[#343A40] dark:text-gray-100 text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em] min-w-72">
            Análisis y Diseño Estructurado
          </h1>
        </div>
        {/* ImageGrid para 2 columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center w-full h-40 bg-gray-200 rounded-xl shadow-sm">
              <p className="text-gray-500">Aquí va el diagrama de Modelo Ambiental</p>
            </div>
            <div>
              <h2 className="text-xl font-bold leading-normal text-[#343A40] dark:text-gray-100">
                Modelo Ambiental
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-relaxed mt-2">
                Un breve párrafo que explica la interacción del sistema con entidades externas, delineando el alcance y los límites del proyecto.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center w-full h-40 bg-gray-200 rounded-xl shadow-sm">
              <p className="text-gray-500">Aquí va el diagrama de Modelo de Comportamiento</p>
            </div>
            <div>
              <h2 className="text-xl font-bold leading-normal text-[#343A40] dark:text-gray-100">
                Modelo de Comportamiento
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-relaxed mt-2">
                Una explicación concisa de los principales procesos y flujos de datos dentro del sistema, detallando cómo se mueve y transforma la información.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 sm:mt-24">
          {/* SectionHeader */}
          <h3 className="text-[#343A40] dark:text-gray-100 text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-4 pt-4 border-b border-gray-200 dark:border-gray-700">
            Artefactos Adicionales del Proyecto
          </h3>
          {/* DescriptionList */}
          <div className="p-4 grid grid-cols-1 md:grid-cols-[25%_1fr] gap-x-6">
            <div className="col-span-1 md:col-span-2 grid grid-cols-subgrid border-b border-gray-200 dark:border-gray-700 py-6">
              <p className="text-primary text-base font-medium leading-normal">
                Diccionario de Datos
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-base font-normal leading-relaxed mt-2 md:mt-0">
                Un catálogo completo de todos los elementos de datos dentro del sistema, que define su significado, relaciones, origen, uso y formato.
              </p>
            </div>
            <div className="col-span-1 md:col-span-2 grid grid-cols-subgrid border-b border-gray-200 dark:border-gray-700 py-6">
              <p className="text-primary text-base font-medium leading-normal">
                Descripción de Procesos (Especificaciones)
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-base font-normal leading-relaxed mt-2 md:mt-0">
                Especificaciones detalladas que describen la lógica, las reglas y los procedimientos para cada proceso del sistema, garantizando pautas de implementación claras.
              </p>
            </div>
            <div className="col-span-1 md:col-span-2 grid grid-cols-subgrid py-6">
              <p className="text-primary text-base font-medium leading-normal">
                Diagrama Entidad-Relación
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-base font-normal leading-relaxed mt-2 md:mt-0">
                Una representación visual del modelo de datos del sistema, que muestra las entidades, sus atributos y las relaciones entre ellas.
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default AnalisisDiseno;
