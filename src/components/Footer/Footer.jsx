import React from "react";
import CTA from "../CTA/Cta";
import { motion } from "framer-motion";

const RedesLinks = [
  {
    id: 1,
    link: "https://www.instagram.com/budix_inc/",
    icon: "bi-instagram",
  },
  {
    id: 2,
    link: "https://www.facebook.com/budix_inc/",
    icon: "bi-facebook",
  },
  {
    id: 3,
    link: "https://www.linkedin.com/company/budix-inc/",
    icon: "bi-linkedin",
  },
  {
    id: 4,
    link: "https://wa.me/573053737373",
    icon: "bi-whatsapp",
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-28">
        {/* BLOQUE CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            Si no tienes un sistema,
            <span className="block text-[#C6A75E] mt-3">
              tienes improvisación.
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Agenda un diagnóstico estratégico y descubre dónde está el verdadero
            bloqueo en tu crecimiento.
          </p>

          <div className="mt-10">
            <CTA />
          </div>
        </motion.div>

        {/* SECCIÓN INSTITUCIONAL */}
        <div className="border-t border-white/10 pt-14 flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Marca + redes */}
          <div className="flex flex-col items-center md:items-start gap-8">
            {/* Marca */}
            <div className="text-xl font-medium tracking-wide">
              <span className="text-[#C6A75E]">Budix</span> Inc.
            </div>

            {/* Redes */}
            <div className="flex gap-5">
              {RedesLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-11 h-11
                    flex items-center justify-center
                    rounded-full
                    border border-white/10
                    text-white/70
                    hover:text-[#C6A75E]
                    hover:border-[#C6A75E]/50
                    transition-all duration-300
                  "
                >
                  <i className={`bi ${item.icon} text-lg`} />
                </a>
              ))}
            </div>
          </div>

          {/* Declaración institucional */}
          <div className="text-gray-500 text-sm text-center md:text-right max-w-md leading-relaxed">
            Reposicionamiento estratégico y sistemas de crecimiento.
            <br />© {new Date().getFullYear()} Budix Inc. Todos los derechos
            reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
