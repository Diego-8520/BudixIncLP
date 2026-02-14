import React from "react";
import { motion } from "framer-motion";

const fases = [
  {
    id: 1,
    numero: "01",
    titulo: "Diagnóstico",
    descripcion:
      "Identificamos exactamente dónde está el bloqueo en tu crecimiento actual",
    resultado: "Claridad total sobre qué está fallando",
    icon: "bi-search",
    color: "#C6A75E",
  },
  {
    id: 2,
    numero: "02",
    titulo: "Posicionamiento",
    descripcion:
      "Definimos con precisión a quién le hablas, qué problema resuelves y por qué eres diferente",
    resultado: "Mensaje que genera autoridad real",
    icon: "bi-bullseye",
    color: "#C6A75E",
  },
  {
    id: 3,
    numero: "03",
    titulo: "Arquitectura de contenido",
    descripcion:
      "Estructuramos cada pieza de contenido como parte de un sistema de persuasión",
    resultado: "Contenido que convierte, no solo que informa",
    icon: "bi-diagram-3",
    color: "#C6A75E",
  },
  {
    id: 4,
    numero: "04",
    titulo: "Implementación",
    descripcion: "Ejecutamos el sistema completo con método y consistencia",
    resultado: "Marketing que opera sin improvisación",
    icon: "bi-gear",
    color: "#C6A75E",
  },
  {
    id: 5,
    numero: "05",
    titulo: "Optimización continua",
    descripcion:
      "Medimos conversión real y ajustamos basados en datos, no en intuición",
    resultado: "Crecimiento predecible y escalable",
    icon: "bi-arrow-repeat",
    color: "#C6A75E",
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            El Sistema Budix
            <span className="block text-[#C6A75E] mt-2">
              no ejecuta acciones aisladas.
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-gray-400 mt-6 text-lg">
            Construimos arquitectura de crecimiento completa: desde el
            diagnóstico hasta la optimización continua.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          id="video"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-[#C6A75E]/30 bg-white/[0.02]">
            {/* Placeholder del video - reemplazar con tu video real */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black to-gray-900">
              <div className="text-center">
                <i className="bi bi-play-circle text-6xl text-[#C6A75E] mb-4"></i>
                <p className="text-gray-400 text-lg">
                  Cómo funciona el Sistema Budix
                  <span className="block text-sm mt-2 text-gray-500">
                    3 minutos que cambiarán cómo ves el marketing
                  </span>
                </p>
              </div>
            </div>

            {/* Cuando tengas el video, usa esto:
            <iframe
              src="URL_DE_TU_VIDEO"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            */}
          </div>
        </motion.div>

        {/* Flujo de fases - Diseño horizontal con conectores */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center mb-12 text-gray-300">
            Las 5 fases del sistema
          </h3>

          {/* Desktop: Flujo horizontal */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Línea conectora */}
              <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C6A75E]/20 via-[#C6A75E]/50 to-[#C6A75E]/20" />

              <div className="grid grid-cols-5 gap-4">
                {fases.map((fase, index) => (
                  <motion.div
                    key={fase.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Número con círculo */}
                    <div className="flex justify-center mb-6">
                      <div className="w-24 h-24 rounded-full border-2 border-[#C6A75E] bg-black flex items-center justify-center relative z-10">
                        <span className="text-3xl font-bold text-[#C6A75E]">
                          {fase.numero}
                        </span>
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className="text-center">
                      <div className="mb-3">
                        <i
                          className={`bi ${fase.icon} text-3xl text-[#C6A75E]`}
                        ></i>
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {fase.titulo}
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {fase.descripcion}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet: Flujo vertical */}
          <div className="lg:hidden space-y-8">
            {fases.map((fase, index) => (
              <motion.div
                key={fase.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-white/10 rounded-xl p-6 bg-white/[0.02] hover:border-[#C6A75E]/40 transition duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Número */}
                  <div className="w-16 h-16 rounded-full border-2 border-[#C6A75E] bg-black flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-[#C6A75E]">
                      {fase.numero}
                    </span>
                  </div>

                  {/* Contenido */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <i
                        className={`bi ${fase.icon} text-2xl text-[#C6A75E]`}
                      ></i>
                      <h4 className="text-xl font-semibold text-white">
                        {fase.titulo}
                      </h4>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-3">
                      {fase.descripcion}
                    </p>
                    <p className="text-[#C6A75E] text-sm font-medium">
                      → {fase.resultado}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Diferenciador clave */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border-2 border-[#C6A75E]/40 rounded-2xl p-10 bg-[#C6A75E]/[0.03] mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                La diferencia entre sistema y ejecución
              </h3>
              <p className="text-gray-400 leading-relaxed">
                La mayoría contrata agencias que ejecutan: crean contenido,
                corren anuncios, miden métricas. Nosotros construimos el plano
                completo antes de la primera acción.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <i className="bi bi-x-circle text-red-400 text-xl flex-shrink-0 mt-1"></i>
                <div>
                  <p className="text-white font-medium">Ejecución aislada</p>
                  <p className="text-gray-500 text-sm">
                    Publicar → Esperar → Ajustar → Repetir
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <i className="bi bi-check-circle text-[#C6A75E] text-xl flex-shrink-0 mt-1"></i>
                <div>
                  <p className="text-white font-medium">Sistema estructurado</p>
                  <p className="text-gray-500 text-sm">
                    Diagnosticar → Diseñar → Ejecutar → Optimizar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cierre con transición al CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-2xl md:text-3xl font-light text-gray-300 max-w-3xl mx-auto leading-tight">
            El primer paso es siempre el mismo:
            <span className="block text-white mt-3 font-normal">
              entender exactamente dónde está el bloqueo.
            </span>
          </p>

          <p className="text-gray-400 mt-6 text-lg">
            Ese es el objetivo del diagnóstico estratégico.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SistemaBudix;
