import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const TrueFocusText = () => {
  const phrases = ["El marketing funciona.", "La improvisación no."];
  const animationDuration = 0.5;
  const pauseBetweenAnimations = 2;
  const blurAmount = 3;
  const borderColor = "#0066CC";
  const glowColor = "rgba(0, 102, 204, 0.65)";

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const phraseRefs = useRef([]);
  const [focusRect, setFocusRect] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const interval = setInterval(
      () => {
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
      },
      (animationDuration + pauseBetweenAnimations) * 1000,
    );

    return () => clearInterval(interval);
  }, [phrases.length]);

  useEffect(() => {
    const updateFocusRect = () => {
      if (!phraseRefs.current[currentIndex] || !containerRef.current) return;

      const parentRect = containerRef.current.getBoundingClientRect();
      const activeRect =
        phraseRefs.current[currentIndex].getBoundingClientRect();

      setFocusRect({
        x: activeRect.left - parentRect.left,
        y: activeRect.top - parentRect.top,
        width: activeRect.width,
        height: activeRect.height,
      });
    };

    updateFocusRect();
    window.addEventListener("resize", updateFocusRect);

    return () => window.removeEventListener("resize", updateFocusRect);
  }, [currentIndex]);

  return (
    <span
      ref={containerRef}
      className="relative inline-flex flex-col items-center gap-3"
      style={{ outline: "none", userSelect: "none" }}
    >
      {phrases.map((phrase, index) => {
        const isActive = index === currentIndex;

        return (
          <span
            key={phrase}
            ref={(el) => (phraseRefs.current[index] = el)}
            className={`relative inline-block transition-opacity ${
              index === 1 ? "text-[#0066CC] font-normal" : ""
            }`}
            style={{
              filter: isActive ? "blur(0px)" : `blur(${blurAmount}px)`,
              opacity: isActive ? 1 : 0.5,
              transition: `filter ${animationDuration}s ease, opacity ${animationDuration}s ease`,
              outline: "none",
              userSelect: "none",
            }}
          >
            {phrase}
          </span>
        );
      })}

      <motion.span
        aria-hidden="true"
        className="absolute top-0 left-0 pointer-events-none box-border border-0"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: 1,
        }}
        transition={{ duration: animationDuration }}
        style={{
          "--border-color": borderColor,
          "--glow-color": glowColor,
        }}
      >
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] left-[-10px] border-r-0 border-b-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 4px var(--glow-color))",
          }}
        />
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] right-[-10px] border-l-0 border-b-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 4px var(--glow-color))",
          }}
        />
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] left-[-10px] border-r-0 border-t-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 4px var(--glow-color))",
          }}
        />
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] right-[-10px] border-l-0 border-t-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 4px var(--glow-color))",
          }}
        />
      </motion.span>
    </span>
  );
};

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
    <section id="problema" className="py-30 bg-black text-white">
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
            <span className="block text-[#0066CC] mt-3">
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
                hover:border-[#0066CC]/40
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
            <TrueFocusText />
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
