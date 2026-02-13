import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "01. Estrategia",
    description:
      "Definir con precisión a quién le hablas y qué problema resuelves. Sin claridad, todo es ruido.",
  },
  {
    title: "02. Mensaje",
    description:
      "Las marcas que crecen no dicen de todo. Comunican pocas ideas, con consistencia.",
  },
  {
    title: "03. Estructura",
    description:
      "No todo el contenido es para todos. Cada pieza cumple una función dentro del sistema.",
  },
  {
    title: "04. Sistemas",
    description:
      "El crecimiento viene de repetir lo que funciona. No de improvisar cada semana.",
  },
  {
    title: "05. Medición y ajuste",
    description: "No adivines. Mide, analiza y optimiza continuamente.",
  },
];

const SistemaBudix = () => {
  return (
    <section id="sistema" className="w-full py-32 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            El problema no es el algoritmo.
            <span className="block text-[#C6A75E] mt-2">
              Es que no tienes un sistema.
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-gray-400 mt-6 text-lg">
            Budix no ejecuta acciones aisladas. Construye estructuras de
            crecimiento con método, orden y repetición estratégica.
          </p>
        </motion.div>

        {/* Diagrama estructural */}
        <div className="relative">
          {/* Línea central vertical (estructura visual) */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-[#C6A75E]/30" />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={`md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-16" : "md:pl-16 md:ml-auto"
                }`}
              >
                <div className="border border-white/10 p-8 rounded-xl bg-white/[0.02] hover:border-[#C6A75E]/40 transition duration-300">
                  <h3 className="text-xl font-medium text-[#C6A75E] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Cierre estratégico */}
        <div className="mt-28 text-center">
          <p className="text-2xl md:text-3xl font-light text-gray-300 max-w-3xl mx-auto">
            Las empresas que crecen no reaccionan.
            <span className="block text-white mt-2">
              Operan bajo estructura.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SistemaBudix;
