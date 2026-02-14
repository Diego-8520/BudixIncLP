import React from "react";
import { motion } from "framer-motion";

const painPoints = [
  {
    id: 1,
    question: "¿Por qué publicas tanto y vendes tan poco?",
    answer: "Porque el contenido sin arquitectura de conversión es solo ruido.",
    icon: "bi-chat-square-text",
  },
  {
    id: 2,
    question: "¿Por qué tus métricas suben pero tu pipeline no?",
    answer: "Porque estás midiendo vanidad, no conversión real.",
    icon: "bi-graph-down",
  },
  {
    id: 3,
    question: "¿Por qué cada mes cambias de estrategia?",
    answer: "Porque sin sistema, confundes experimentar con improvisar.",
    icon: "bi-arrow-left-right",
  },
  {
    id: 4,
    question: "¿Por qué tu competencia crece y tú no?",
    answer: "Porque ellos tienen estructura. Tú tienes ejecución suelta.",
    icon: "bi-bar-chart-line",
  },
];

const Problem = () => {
  return (
    <section id="problema" className="py-32 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            Las preguntas que te haces
            <span className="block text-[#C6A75E] mt-3">
              cuando el marketing no convierte.
            </span>
          </h2>

          <p className="text-gray-400 mt-6 text-lg leading-relaxed">
            Ya sabes que algo no está funcionando.
            <br />
            <strong className="text-white">
              El problema es estructural, no de esfuerzo.
            </strong>
          </p>
        </motion.div>

        {/* Grid de pain points */}
        <div className="space-y-6 mb-28 max-w-4xl mx-auto">
          {painPoints.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="
                border border-white/10
                bg-white/[0.02]
                rounded-xl
                p-8
                hover:border-[#C6A75E]/40
                transition duration-300
              "
            >
              <div className="flex items-start gap-6">
                {/* Icono */}
                <div className="text-3xl text-white/40 flex-shrink-0 mt-1">
                  <i className={`bi ${item.icon}`} />
                </div>

                <div className="flex-1">
                  {/* Pregunta */}
                  <h3 className="text-xl md:text-2xl font-medium text-white mb-4 leading-snug">
                    {item.question}
                  </h3>

                  {/* Respuesta */}
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Declaración contundente */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-3xl md:text-4xl font-light leading-tight">
            El marketing funciona.
            <span className="block text-[#C6A75E] mt-3 font-normal">
              La improvisación no.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
