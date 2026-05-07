import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const phone = "573001234567";
  const message = "Hola, quiero solicitar mi diagnóstico gratis.";

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

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
            <p className="text-white text-sm font-medium leading-none">
              <span className="mr-1.5">🔥</span>
              <span className="font-bold">Plazas limitadas</span>
              <span className="mx-2 opacity-50">—</span>
              Solo quedan{" "}
              <span className="inline-block bg-white/20 border border-white/30 font-bold px-2 py-0.5 rounded text-xs tracking-widest mx-0.5">
                3 CUPOS
              </span>{" "}
              disponibles este mes.{" "}
              <button
                onClick={handleClick}
                className="underline underline-offset-2 font-semibold hover:opacity-80 transition-opacity cursor-pointer"
              >
                Solicita tu diagnóstico gratis →
              </button>
            </p>

            <button
              onClick={() => setIsVisible(false)}
              aria-label="Cerrar anuncio"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full text-white/60 hover:text-white hover:bg-white/15 transition-all duration-200"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementBar;
