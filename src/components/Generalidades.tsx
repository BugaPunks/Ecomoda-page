
import React from 'react';

const Generalidades: React.FC = () => {
  return (
    <section id="generalidades" className="scroll-mt-20">
      <div className="w-full max-w-4xl flex flex-col gap-8 mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-3 text-center">
          <h1 className="text-[#0c1d13] dark:text-white text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">
            Generalidades de la Empresa
          </h1>
          <p className="text-[#45a16b] dark:text-primary/80 text-base font-normal leading-normal">
            Una visión general de la empresa Eco Moda S.R.L.
          </p>
        </div>
        <div className="flex flex-col p-4 gap-3">
          <details
            className="flex flex-col rounded-lg border border-[#cdead9] dark:border-primary/20 bg-white dark:bg-background-dark/50 group"
            open
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-4">
              <p className="text-[#0c1d13] dark:text-white text-base font-medium leading-normal">
                Descripción General
              </p>
              <div className="text-[#0c1d13] dark:text-white group-open:rotate-180 transition-transform">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </summary>
            <div className="px-4 pb-4">
              <p className="text-[#45a16b] dark:text-gray-300 text-sm font-normal leading-normal">
                Eco Moda S.R.L. es una tienda de ropa que se dedica a la venta de prendas de vestir para hombres, mujeres y niños. La empresa busca mejorar la gestión de inventarios, las ventas, los pedidos y el control de clientes mediante la implementación de un sistema informático integral que optimice sus procesos administrativos y operativos.
              </p>
            </div>
          </details>
          <details className="flex flex-col rounded-lg border border-[#cdead9] dark:border-primary/20 bg-white dark:bg-background-dark/50 group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-4">
              <p className="text-[#0c1d13] dark:text-white text-base font-medium leading-normal">
                Misión
              </p>
              <div className="text-[#0c1d13] dark:text-white group-open:rotate-180 transition-transform">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </summary>
            <div className="px-4 pb-4">
              <p className="text-[#45a16b] dark:text-gray-300 text-sm font-normal leading-normal">
                Ofrecer a los clientes productos de moda de alta calidad, con un servicio eficiente y personalizado, aprovechando herramientas tecnológicas para optimizar la gestión de ventas e inventario.
              </p>
            </div>
          </details>
          <details className="flex flex-col rounded-lg border border-[#cdead9] dark:border-primary/20 bg-white dark:bg-background-dark/50 group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-4">
              <p className="text-[#0c1d13] dark:text-white text-base font-medium leading-normal">
                Visión
              </p>
              <div className="text-[#0c1d13] dark:text-white group-open:rotate-180 transition-transform">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </summary>
            <div className="px-4 pb-4">
              <p className="text-[#45a16b] dark:text-gray-300 text-sm font-normal leading-normal">
                Ser una empresa líder en el rubro de ropa urbana y formal, reconocida por su atención al cliente y por la innovación en el uso de sistemas informáticos para la gestión de sus operaciones.
              </p>
            </div>
          </details>
          <details className="flex flex-col rounded-lg border border-[#cdead9] dark:border-primary/20 bg-white dark:bg-background-dark/50 group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-4">
              <p className="text-[#0c1d13] dark:text-white text-base font-medium leading-normal">
                Actividades Principales
              </p>
              <div className="text-[#0c1d13] dark:text-white group-open:rotate-180 transition-transform">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </summary>
            <div className="px-4 pb-4">
              <ul className="list-disc list-inside text-[#45a16b] dark:text-gray-300 text-sm font-normal leading-normal">
                <li>Venta de prendas de vestir al por menor.</li>
                <li>Control de stock e inventario.</li>
                <li>Registro y seguimiento de clientes.</li>
                <li>Control de ventas y generación de reportes.</li>
                <li>Administración de proveedores y pedidos.</li>
              </ul>
            </div>
          </details>
          <details className="flex flex-col rounded-lg border border-[#cdead9] dark:border-primary/20 bg-white dark:bg-background-dark/50 group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-4">
              <p className="text-[#0c1d13] dark:text-white text-base font-medium leading-normal">
                INTRODUCCIÓN
              </p>
              <div className="text-[#0c1d13] dark:text-white group-open:rotate-180 transition-transform">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </summary>
            <div className="px-4 pb-4">
            </div>
          </details>
          <details className="flex flex-col rounded-lg border border-[#cdead9] dark:border-primary/20 bg-white dark:bg-background-dark/50 group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-4">
              <p className="text-[#0c1d13] dark:text-white text-base font-medium leading-normal">
                ANTECEDENTES
              </p>
              <div className="text-[#0c1d13] dark:text-white group-open:rotate-180 transition-transform">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </summary>
            <div className="px-4 pb-4">
            </div>
          </details>
          <details className="flex flex-col rounded-lg border border-[#cdead9] dark:border-primary/20 bg-white dark:bg-background-dark/50 group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-4">
              <p className="text-[#0c1d13] dark:text-white text-base font-medium leading-normal">
                PLANTEAMIENTO DEL PROBLEMA
              </p>
              <div className="text-[#0c1d13] dark:text-white group-open:rotate-180 transition-transform">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </summary>
            <div className="px-4 pb-4">
            </div>
          </details>
          <details className="flex flex-col rounded-lg border border-[#cdead9] dark:border-primary/20 bg-white dark:bg-background-dark/50 group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-4">
              <p className="text-[#0c1d13] dark:text-white text-base font-medium leading-normal">
                ÁRBOL DE PROBLEMAS
              </p>
              <div className="text-[#0c1d13] dark:text-white group-open:rotate-180 transition-transform">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </summary>
            <div className="px-4 pb-4">
            </div>
          </details>
          <details className="flex flex-col rounded-lg border border-[#cdead9] dark:border-primary/20 bg-white dark:bg-background-dark/50 group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-4">
              <p className="text-[#0c1d13] dark:text-white text-base font-medium leading-normal">
                FORMULACIÓN DEL PROBLEMA
              </p>
              <div className="text-[#0c1d13] dark:text-white group-open:rotate-180 transition-transform">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </summary>
            <div className="px-4 pb-4">
            </div>
          </details>
          <details className="flex flex-col rounded-lg border border-[#cdead9] dark:border-primary/20 bg-white dark:bg-background-dark/50 group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-4">
              <p className="text-[#0c1d13] dark:text-white text-base font-medium leading-normal">
                PROPÓSITO DEL ESTUDIO
              </p>
              <div className="text-[#0c1d13] dark:text-white group-open:rotate-180 transition-transform">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </summary>
            <div className="px-4 pb-4">
            </div>
          </details>
          <details className="flex flex-col rounded-lg border border-[#cdead9] dark:border-primary/20 bg-white dark:bg-background-dark/50 group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-4">
              <p className="text-[#0c1d13] dark:text-white text-base font-medium leading-normal">
                MÉTODO, MEDIOS E INSTRUMENTOS DE INVESTIGACIÓN
              </p>
              <div className="text-[#0c1d13] dark:text-white group-open:rotate-180 transition-transform">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </summary>
            <div className="px-4 pb-4">
            </div>
          </details>
          <details className="flex flex-col rounded-lg border border-[#cdead9] dark:border-primary/20 bg-white dark:bg-background-dark/50 group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-4">
              <p className="text-[#0c1d13] dark:text-white text-base font-medium leading-normal">
                PLANIFICACIÓN DE ACTIVIDADES
              </p>
              <div className="text-[#0c1d13] dark:text-white group-open:rotate-180 transition-transform">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </summary>
            <div className="px-4 pb-4">
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Generalidades;
