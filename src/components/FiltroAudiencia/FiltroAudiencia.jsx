import React from "react";
import { motion } from "framer-motion";

const paraQuienSi = [
  {
    id: 1,
    text: "Tienes clientes, tienes ingresos, pero no tienes un sistema que genere crecimiento predecible",
    icon: "bi-graph-up-arrow",
  },
  {
    id: 2,
    text: "Ya probaste varias cosas en marketing y ninguna generó crecimiento consistente",
    icon: "bi-arrow-repeat",
  },
  {
    id: 3,
    text: "Entiendes que construir un sistema toma 90-180 días, no 2 semanas",
    icon: "bi-clock-history",
  },
  {
    id: 4,
    text: "Estás dispuesto a comprometerte con un proceso estructurado, no buscas trucos rápidos",
    icon: "bi-check-circle",
  },
];

const paraQuienNo = [
  {
    id: 1,
    text: "Buscas resultados inmediatos sin cambiar tu forma de operar",
    icon: "bi-x-circle",
  },
  {
    id: 2,
    text: "Quieres que 'hagamos magia' sin tu participación activa",
    icon: "bi-magic",
  },
  {
    id: 3,
    text: "No estás dispuesto a medir, analizar y ajustar basado en datos",
    icon: "bi-bar-chart",
  },
  {
    id: 4,
    text: "Crees que el problema es solo 'crear más contenido' o 'correr más anuncios'",
    icon: "bi-lightning",
  },
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
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            Budix no es para todos.
            <span className="block text-[#C6A75E] mt-3">
              Y eso es exactamente lo que lo hace efectivo.
            </span>
          </h2>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Trabajamos con empresas específicas que entienden que el crecimiento
            real requiere método, no milagros.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Para quién SÍ */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="border-2 border-[#C6A75E]/60 rounded-2xl p-10 bg-[#C6A75E]/[0.03]"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-[#C6A75E]/20 flex items-center justify-center">
                <i className="bi bi-check-lg text-[#C6A75E] text-2xl"></i>
              </div>
              <h3 className="text-2xl font-semibold text-[#C6A75E]">
                Esto es para ti si:
              </h3>
            </div>

            <ul className="space-y-6">
              {paraQuienSi.map((item) => (
                <li key={item.id} className="flex items-start gap-4">
                  <i
                    className={`bi ${item.icon} text-[#C6A75E] text-xl flex-shrink-0 mt-1`}
                  ></i>
                  <span className="text-gray-200 leading-relaxed text-lg">
                    {item.text}
                  </span>
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
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                <i className="bi bi-x-lg text-red-400/80 text-2xl"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-400">
                Esto NO es para ti si:
              </h3>
            </div>

            <ul className="space-y-6">
              {paraQuienNo.map((item) => (
                <li key={item.id} className="flex items-start gap-4">
                  <i
                    className={`bi ${item.icon} text-red-400/60 text-xl flex-shrink-0 mt-1`}
                  ></i>
                  <span className="text-gray-500 leading-relaxed text-lg">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Validación final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="border border-[#C6A75E]/30 rounded-xl p-8 bg-[#C6A75E]/[0.02]">
            <p className="text-2xl md:text-3xl font-light text-gray-300 leading-tight">
              Si llegaste hasta aquí y sigues leyendo,
              <span className="block text-white mt-3 font-normal">
                probablemente eres el perfil correcto.
              </span>
            </p>

            <p className="text-gray-400 mt-6 text-lg">
              La pregunta ahora es: ¿estás listo para construir estructura o
              seguirás improvisando?
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FiltroAudiencia;
