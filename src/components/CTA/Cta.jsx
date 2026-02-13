import React from "react";

const PHONE_NUMBER = "573053737373";
const DEFAULT_MESSAGE =
  "Hola, quiero solicitar un diagnóstico para mi empresa.";

const Cta = ({
  message = DEFAULT_MESSAGE,
  phone = PHONE_NUMBER,
  children = "Solicitar diagnóstico",
}) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Solicitar diagnóstico"
      className="
        group relative inline-flex items-center justify-center
        px-8 py-3.5
        rounded-full
        font-semibold tracking-wide
        text-black
        bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37]
        transition-all duration-300 ease-out
        hover:scale-105
        hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]
        focus:outline-none
        focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2
        overflow-hidden
      "
    >
      {/* Overlay hover */}
      <span
        className="
          absolute inset-0
          bg-gradient-to-r from-[#F4D03F] via-[#FFD700] to-[#F4D03F]
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        "
      />

      {/* Shine effect */}
      <span
        className="
          absolute inset-0 -translate-x-full
          group-hover:translate-x-full
          transition-transform duration-700
          bg-gradient-to-r from-transparent via-white/30 to-transparent
          skew-x-12
        "
      />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2 text-base md:text-lg">
        {children}
        <svg
          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </span>
    </button>
  );
};

export default Cta;
