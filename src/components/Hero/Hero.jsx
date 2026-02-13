import React from "react";
import BotonCTA from "../CTA/Cta";
import RotatingTextUse from "../ui/RotatingTextUse";
import Fondo from "../../assets/12016.jpg";

const Hero = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        w-full
        bg-cover
        bg-bottom
        bg-no-repeat
        overflow-hidden
      "
      style={{ backgroundImage: `url(${Fondo})` }}
    >
      {/* Overlay degradado */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white" />

      <div className="relative z-10 flex min-h-screen items-center">
        <div
          className="
            mx-auto
            w-full
            max-w-6xl
            px-4
            sm:px-6
            text-center
          "
        >
          {/* Headline */}
          <h1
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              xl:text-7xl
              font-bold
              text-yellow-500
              mb-3
            "
          >
            El problema no es{" "}
            <span className="inline-block">
              <RotatingTextUse />
            </span>
          </h1>

          <h2
            className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            xl:text-7xl
            font-bold
            text-yellow-500
            mb-4
          "
          >
            Es que no tienes un sistema.
          </h2>

          {/* Descripción */}
          <p
            className="
              mx-auto
              max-w-4xl
              text-base
              sm:text-lg
              lg:text-xl
              text-gray-800
              mb-6
            "
          >
            En Budix diseñamos sistemas de crecimiento digital para empresas que
            buscan resultados reales, no acciones aisladas. Analizamos,
            estructuramos y optimizamos tu marketing con método, claridad y
            control.
          </p>

          {/* CTA */}
          <div className="flex justify-center mb-4">
            <BotonCTA />
          </div>

          {/* Gradient para suavizar el fondo debajo del navbar */}
          <div className="absolute top-20 left-0 w-full h-12 sm:h-24 bg-gradient-to-b from-white/90 via-white/60 to-transparent z-[-1] " />
        </div>
      </div>
    </section>
  );
};

export default Hero;
