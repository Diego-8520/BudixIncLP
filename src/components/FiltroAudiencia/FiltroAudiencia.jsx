import React from "react";
import { motion } from "framer-motion";

const paraQuienSi = [
  "Empresas que ya facturan y quieren escalar con estructura.",
  "Marcas que entienden que el crecimiento requiere método.",
  "Equipos dispuestos a ejecutar con disciplina.",
  "Negocios que quieren posicionamiento, no solo publicaciones.",
];

const paraQuienNo = [
  "Quien busca resultados sin estrategia.",
  "Quien cambia de dirección cada semana.",
  "Quien quiere más contenido pero no más claridad.",
  "Quien no está dispuesto a medir ni optimizar.",
];

const FiltroAudiencia = () => {
  return (
    <section id="filtro" className="w-full py-32 bg-[#0A0A0A] text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Budix no es para todos.
          </h2>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Y eso es exactamente lo que lo hace efectivo.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Para quién SÍ */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="border border-[#C6A75E]/40 rounded-2xl p-10 bg-white/[0.02]"
          >
            <h3 className="text-2xl font-medium text-[#C6A75E] mb-8">
              Para quién SÍ es
            </h3>

            <ul className="space-y-6">
              {paraQuienSi.map((item, index) => (
                <li key={index} className="text-gray-300 leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Para quién NO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="border border-white/10 rounded-2xl p-10 bg-white/[0.01]"
          >
            <h3 className="text-2xl font-medium text-gray-400 mb-8">
              Para quién NO es
            </h3>

            <ul className="space-y-6">
              {paraQuienNo.map((item, index) => (
                <li key={index} className="text-gray-500 leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Declaración final */}
        <div className="mt-28 text-center">
          <p className="text-2xl md:text-3xl font-light text-gray-300 max-w-3xl mx-auto">
            Si buscas estructura, claridad y crecimiento sostenido,
            <span className="block text-white mt-2">
              estás en el lugar correcto.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FiltroAudiencia;
