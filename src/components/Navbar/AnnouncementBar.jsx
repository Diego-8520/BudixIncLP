import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
          className="overflow-hidden"
        >
          <div className="relative bg-gradient-to-r from-[#003E8A] via-[#0066CC] to-[#0080FF] py-2.5 px-10 text-center overflow-hidden">
            {/* Shimmer sweep */}
            <motion.div
              className="absolute inset-y-0 w-48 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none"
              initial={{ left: "-192px" }}
              animate={{ left: "calc(100% + 192px)" }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 2.5,
              }}
            />

            {/* Pulsing live dot */}
            <span className="absolute left-4 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-70" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
              </span>
              <span className="text-white/70 text-xs font-medium tracking-wide uppercase hidden md:inline">
                En vivo
              </span>
            </span>

            {/* Content */}
            <p className="text-white text-sm font-medium leading-none">
              <span className="mr-1.5">🔥</span>
              <span className="font-bold">Plazas limitadas</span>
              <span className="mx-2 opacity-50">—</span>
              Solo quedan{" "}
              <span className="inline-block bg-white/20 border border-white/30 font-bold px-2 py-0.5 rounded text-xs tracking-widest mx-0.5">
                3 CUPOS
              </span>{" "}
              disponibles este mes.{" "}
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("hero")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="underline underline-offset-2 font-semibold hover:opacity-80 transition-opacity cursor-pointer"
              >
                Solicita tu diagnóstico gratis →
              </a>
            </p>

            {/* Close */}
            <button
              onClick={() => setIsVisible(false)}
              aria-label="Cerrar anuncio"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full text-white/60 hover:text-white hover:bg-white/15 transition-all duration-200"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementBar;
