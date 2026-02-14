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
    <div className="relative inline-block">
      {/* Anillo de pulso difuminado */}
      <span
        className="
          absolute inset-0 rounded-full
          bg-gradient-radial from-[#EAAA00] via-[#EAAA00]/50 to-transparent
          opacity-60
          blur-sm
          animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]
        "
      />

      <button
        onClick={handleClick}
        aria-label="Solicitar diagnóstico"
        className="
          group relative inline-flex items-center justify-center
          px-10 py-4
          rounded-full
          font-semibold tracking-wide text-lg
          text-black
          
          /* Gradiente luminoso de fondo */
          bg-gradient-to-br from-[#FFD700] via-[#EAAA00] to-[#F5B800]
          
          /* Sombra visible en estado normal */
          shadow-[0_4px_20px_rgba(234,170,0,0.4)]
          
          transition-all duration-300 ease-out
          hover:scale-[1.08]
          hover:shadow-[0_0_40px_rgba(234,170,0,0.6),0_0_80px_rgba(234,170,0,0.3)]
          active:scale-[1.02]
          
          focus:outline-none
          focus-visible:ring-4 focus-visible:ring-[#EAAA00]/50 focus-visible:ring-offset-2
          overflow-hidden
        "
      >
        {/* Layer superior de brillo */}
        <span
          className="
            absolute inset-0 rounded-full
            bg-gradient-to-t from-transparent via-white/20 to-white/40
          "
        />

        {/* Gradiente de hover brillante */}
        <span
          className="
            absolute inset-0 rounded-full
            bg-gradient-to-r from-[#FFD700] via-[#FFED4E] to-[#FFD700]
            opacity-0 group-hover:opacity-100
            transition-opacity duration-500
          "
        />

        {/* Shine effect mejorado */}
        <span
          className="
            absolute inset-0 rounded-full
            -translate-x-full
            group-hover:translate-x-full
            transition-transform duration-1000 ease-in-out
            bg-gradient-to-r from-transparent via-white/40 to-transparent
            skew-x-12
          "
        />

        {/* Borde brillante animado */}
        <span
          className="
            absolute inset-0 rounded-full
            border-2 border-white/30
            opacity-0 group-hover:opacity-100
            transition-opacity duration-300
          "
        />

        {/* Content */}
        <span className="relative z-10 flex items-center gap-3 font-bold">
          {children}

          {/* Flecha con animación mejorada */}
          <svg
            className="
              w-5 h-5 
              transition-all duration-300 
              group-hover:translate-x-2
              group-hover:scale-110
            "
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

        {/* Resplandor de fondo mejorado */}
        <span
          className="
            absolute -inset-2 rounded-full
            bg-[#EAAA00] opacity-30 blur-xl
            group-hover:opacity-50
            transition-opacity duration-300
            -z-10
          "
        />
      </button>
    </div>
  );
};

export default Cta;
