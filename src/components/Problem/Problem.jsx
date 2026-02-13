import React from "react";
import { motion } from "framer-motion";

const problems = [
  {
    id: 1,
    title: "Público sin dirección",
    icon: "bi-crosshair2",
  },
  {
    id: 2,
    title: "Contenido sin estrategia",
    icon: "bi-compass",
  },
  {
    id: 3,
    title: "Métricas sin impacto real",
    icon: "bi-graph-up",
  },
  {
    id: 4,
    title: "Cambios constantes de enfoque",
    icon: "bi-shuffle",
  },
];

const Problem = () => {
  return (
    <section id="problema" className="py-32 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            No es falta de esfuerzo.
            <span className="block text-[#C6A75E] mt-3">
              Es falta de estructura.
            </span>
          </h2>

          <p className="text-gray-400 mt-6 text-lg leading-relaxed">
            Publicas. Analizas. Ajustas.
            <br />
            Pero el crecimiento no es consistente.
          </p>
        </motion.div>

        {/* Grid de problemas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-28">
          {problems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="
                group
                border border-white/10
                bg-white/[0.02]
                rounded-xl
                p-10
                flex flex-col
                items-center
                text-center
                hover:border-[#C6A75E]/40
                transition duration-300
              "
            >
              {/* Icono Bootstrap */}
              <div className="mb-6 text-5xl text-white/60 group-hover:text-[#C6A75E] transition duration-300">
                <i className={`bi ${item.icon}`} />
              </div>

              {/* Texto */}
              <h3 className="text-lg font-medium text-white leading-snug">
                {item.title}
              </h3>

              <div className="mt-6 h-px w-12 bg-white/10 group-hover:bg-[#C6A75E]/50 transition duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Declaración contundente */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-3xl md:text-4xl font-light leading-tight">
            Las redes funcionan.
            <span className="block text-[#C6A75E] mt-3">
              La improvisación no.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
