import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

const CASES = [
  {
    id: 1,
    client: "Business Colombia",
    url: "www.businesscolombia.shop",
    industry: "E-commerce B2B",
    metric: "+381%",
    metricLabel: "en MRR mensual",
    revenueBefore: "$154,612,194.00 COP",
    revenueAfter: "$743,340,000.00 COP",
    timeline: "3 meses",
    challenge:
      "Sus ventas estaban estancadas y no lograban superar el techo de ingresos. Necesitaban identificar qué estaba frenando su crecimiento.",
    solution:
      "Realizamos un diagnóstico profundo para detectar los cuellos de botella en su operación. Luego implementamos automatizaciones con IA que optimizaron el funnel de ventas y eliminaron la improvisación.",
    sparkData: [10, 12, 15, 19, 26, 35, 48, 65, 75, 100],
    proof: {
      type: "Shopify",
      label: "Ingresos en Shopify",
      beforeImage: "/business - antes.jpeg",
      afterImage: "/business - despues.jpeg",
      beforeLabel: "Antes",
      afterLabel: "Después",
    },
  },
  {
    id: 2,
    client: "La Piquiña",
    url: "www.kick.com/lapiquina",
    industry: "Creadores de Contenido",
    metric: "+500%",
    metricLabel: "en ingresos mensuales por monetización",
    revenueBefore: "$0 USD",
    revenueAfter: "$20,125 USD",
    timeline: "5 meses",
    challenge:
      "Comenzó en Kick con 250 seguidores, sin ingresos ni estrategia para monetizar contenido. El reto era convertir su presencia digital en un proyecto rentable desde cero.",
    solution:
      "Implementamos una estrategia de crecimiento y monetización: membresías, escalamiento de comunidad hasta 1.2M seguidores y alianzas con marcas. También lideramos dirección creativa, producción y estrategia comercial en Kick, YouTube y TikTok para convertir audiencia en ingresos recurrentes.",
    sparkData: [2, 4, 6, 8, 12, 18, 25, 35, 50, 75, 100],
    proof: {
      type: "Kick",
      label: "Crecimiento de seguidores",
      beforeImage: "/la piquiña - antes.jpeg",
      afterImage: "/la piquiña - despues.jpeg",
      beforeLabel: "Antes",
      afterLabel: "Después",
    },
  },
  {
    id: 3,
    client: "Casa Azul Mexican Kitchen",
    url: "www.casaazulkitchen.com",
    industry: "Gastronomía & Restaurante",
    metric: "+52%",
    metricLabel: "en ingresos digitales",
    revenueBefore: "$328,000 USD",
    revenueAfter: "$498,000 USD",
    timeline: "2 meses",
    challenge:
      "Sus canales digitales no generaban ingresos y no estaban siendo aprovechados correctamente para atraer clientes.",
    solution:
      "Implementamos una estrategia SEO con palabras clave y reestructuramos por completo su sitio web para aumentar tráfico, captar clientes y generar ventas desde el canal digital.",
    sparkData: [5, 8, 12, 18, 25, 32, 38, 44, 48, 52],
  },
];

const GAP = 24;
const AUTOPLAY_MS = 6000;

const Sparkline = ({ data, id }) => {
  const W = 220;
  const H = 56;
  const P = 4;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const pts = data.map((v, i) => {
    const x = P + (i / (data.length - 1)) * (W - P * 2);
    const y = H - P - ((v - min) / range) * (H - P * 2);
    return [x, y];
  });

  const linePoints = pts.map(([x, y]) => `${x},${y}`).join(" ");
  const areaPath =
    `M ${pts[0][0]},${H} ` +
    pts.map(([x, y]) => `L ${x},${y}`).join(" ") +
    ` L ${pts[pts.length - 1][0]},${H} Z`;

  const gradId = `spark-${id}`;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full"
      style={{ height: 56 }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0066CC" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#0066CC" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill={`url(#${gradId})`} />
      <polyline
        points={linePoints}
        fill="none"
        stroke="#0066CC"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx={pts[pts.length - 1][0]}
        cy={pts[pts.length - 1][1]}
        r="4"
        fill="#0066CC"
      />
    </svg>
  );
};

const CaseCard = ({ caso }) => (
  <article className="bg-white rounded-2xl border border-blue-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 p-6 flex flex-col gap-4 h-full">
    <div className="flex items-start justify-between gap-2">
      <div className="min-w-0">
        <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider truncate">
          {caso.industry}
        </p>
        <h3 className="text-base font-semibold text-gray-900 mt-0.5">
          {caso.client}
        </h3>
        <p className="text-xs text-gray-400">{caso.url}</p>
      </div>
      <span className="flex-shrink-0 inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100">
        {caso.timeline}
      </span>
    </div>

    <div className="text-center py-1">
      <p
        className="text-5xl font-bold tracking-tight"
        style={{ color: "#0066CC" }}
      >
        {caso.metric}
      </p>
      <p className="text-sm text-gray-500 mt-1">{caso.metricLabel}</p>
    </div>

    <div className="px-1">
      <Sparkline data={caso.sparkData} id={caso.id} />
    </div>

    <div className="grid grid-cols-2 gap-3">
      <div className="bg-gray-50 rounded-xl p-3 text-center border border-gray-100">
        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">
          Antes
        </p>
        <p className="text-lg font-semibold text-gray-500 mt-0.5">
          {caso.revenueBefore}
        </p>
      </div>
      <div className="bg-blue-50 rounded-xl p-3 text-center border border-blue-100">
        <p
          className="text-xs font-semibold uppercase tracking-wide"
          style={{ color: "#0066CC" }}
        >
          Después
        </p>
        <p
          className="text-lg font-semibold mt-0.5"
          style={{ color: "#0066CC" }}
        >
          {caso.revenueAfter}
        </p>
      </div>
    </div>

    <div className="space-y-3 flex-1">
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
          Reto
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">
          {caso.challenge}
        </p>
      </div>
      <div>
        <p
          className="text-xs font-semibold uppercase tracking-wide mb-1"
          style={{ color: "#0066CC" }}
        >
          Solución Up Sales
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">{caso.solution}</p>
      </div>
    </div>
  </article>
);

const EvidenceCard = ({ caso }) => {
  const [activeImage, setActiveImage] = useState("after");

  if (!caso.proof) return null;

  const isBeforeActive = activeImage === "before";

  return (
    <article className="relative h-full min-h-[560px] overflow-hidden rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,102,204,0.13),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(0,102,204,0.08),transparent_30%)]" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-5 flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
              Evidencia visual
            </p>
            <h3 className="mt-1 text-base font-semibold text-gray-900">
              {caso.client}
            </h3>
            <p className="mt-1 text-xs text-gray-400">{caso.proof.label}</p>
          </div>

          <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
            {caso.proof.type}
          </span>
        </div>

        <div className="relative flex flex-1 items-center justify-center py-4">
          <div
            className="relative h-[430px] w-[240px] sm:h-[455px] sm:w-[255px]"
            onMouseEnter={() => setActiveImage("before")}
            onMouseLeave={() => setActiveImage("after")}
            onFocus={() => setActiveImage("before")}
            onBlur={() => setActiveImage("after")}
            tabIndex={0}
            role="button"
            aria-label={`Comparar antes y después de ${caso.client}`}
          >
            {/* Card ANTES */}
            <div
              className={`pointer-events-none absolute left-1/2 top-1/2 aspect-[9/16] w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2rem] border bg-white text-left shadow-xl transition-all duration-500 ease-out ${
                isBeforeActive
                  ? "z-30 rotate-[0deg] scale-100 border-gray-300 shadow-2xl"
                  : "z-10 -translate-x-[58%] rotate-[-8deg] scale-[0.93] border-gray-200 shadow-lg"
              }`}
            >
              <div className="absolute left-3 top-3 z-20 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-gray-500 shadow-sm backdrop-blur">
                {caso.proof.beforeLabel}
              </div>

              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/20 via-transparent to-white/10" />

              <img
                src={caso.proof.beforeImage}
                alt={`${caso.client} antes`}
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
            </div>

            {/* Card DESPUÉS */}
            <div
              className={`pointer-events-none absolute left-1/2 top-1/2 aspect-[9/16] w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2rem] border bg-white text-left shadow-xl transition-all duration-500 ease-out ${
                isBeforeActive
                  ? "z-20 translate-x-[-42%] rotate-[8deg] scale-[0.93] border-blue-100 shadow-lg"
                  : "z-30 rotate-[0deg] scale-100 border-blue-200 shadow-2xl"
              }`}
            >
              <div className="absolute left-3 top-3 z-20 rounded-full bg-blue-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-sm">
                {caso.proof.afterLabel}
              </div>

              <div className="absolute inset-0 z-10 bg-gradient-to-t from-blue-950/25 via-transparent to-white/10" />

              <img
                src={caso.proof.afterImage}
                alt={`${caso.client} después`}
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50/70 p-3">
          <p className="text-xs leading-relaxed text-gray-500">
            Capturas reales proporcionadas por el cliente. Algunos datos pueden
            estar parcialmente ocultos por privacidad.
          </p>
        </div>
      </div>
    </article>
  );
};

const ArrowButton = ({ onClick, label, children, className = "" }) => (
  <button
    onClick={onClick}
    aria-label={label}
    className={`flex items-center justify-center w-11 h-11 rounded-full bg-white border border-blue-100 shadow-sm text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${className}`}
  >
    {children}
  </button>
);

const ChevronLeft = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

const ChevronRight = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const CasosExito = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [slideWidth, setSlideWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  const slides = CASES.flatMap((caso) => {
    const caseSlide = { id: `case-${caso.id}`, type: "case", caso };
    if (!caso.proof) return [caseSlide];
    return [caseSlide, { id: `proof-${caso.id}`, type: "proof", caso }];
  });

  const maxIndex = Math.max(0, slides.length - visibleCards);
  const safeIndex = Math.min(currentIndex, maxIndex);

  const updateLayout = useCallback(() => {
    if (!containerRef.current) return;
    const containerW = containerRef.current.offsetWidth;
    const iw = window.innerWidth;
    const cards = iw >= 1024 ? 3 : iw >= 768 ? 2 : 1;
    setVisibleCards(cards);
    const cardW = (containerW - GAP * (cards - 1)) / cards;
    setSlideWidth(cardW + GAP);
  }, []);

  useEffect(() => {
    const rafId = requestAnimationFrame(updateLayout);
    const ro = new ResizeObserver(updateLayout);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, [updateLayout]);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const goTo = useCallback(
    (idx) => setCurrentIndex(Math.max(0, Math.min(idx, maxIndex))),
    [maxIndex],
  );

  useEffect(() => {
    clearInterval(intervalRef.current);
    if (isPaused || maxIndex === 0) return;
    intervalRef.current = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(intervalRef.current);
  }, [isPaused, next, maxIndex]);

  const dotCount = maxIndex + 1;
  const cardStyle =
    slideWidth > 0 ? { width: `${slideWidth - GAP}px` } : { width: "100%" };

  return (
    <section
      id="casos-exito"
      className="py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border border-blue-100 mb-5">
            Casos de éxito
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Resultados reales,
            <br />
            <span style={{ color: "#0066CC" }}>
              respaldados con evidencia visual.
            </span>
          </h2>
          <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
            Casos de crecimiento documentados con métricas, contexto estratégico
            y capturas proporcionadas por nuestros clientes.
          </p>
        </motion.div>

        <div
          ref={containerRef}
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          aria-roledescription="carrusel"
          aria-label="Casos de éxito"
        >
          <ArrowButton
            onClick={prev}
            label="Caso anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 hidden md:flex z-10"
          >
            <ChevronLeft />
          </ArrowButton>
          <ArrowButton
            onClick={next}
            label="Siguiente caso"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 hidden md:flex z-10"
          >
            <ChevronRight />
          </ArrowButton>

          <div className="overflow-hidden">
            <motion.div
              className="flex"
              style={{ gap: GAP }}
              animate={{ x: -(safeIndex * slideWidth) }}
              transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
            >
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className="flex-shrink-0"
                  style={cardStyle}
                  role="group"
                  aria-roledescription="diapositiva"
                  aria-label={
                    slide.type === "case"
                      ? `${slide.caso.client} — ${slide.caso.metric}`
                      : `Evidencia visual de ${slide.caso.client}`
                  }
                >
                  {slide.type === "case" ? (
                    <CaseCard caso={slide.caso} />
                  ) : (
                    <EvidenceCard caso={slide.caso} />
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="flex md:hidden justify-center gap-4 mt-6">
          <ArrowButton onClick={prev} label="Caso anterior">
            <ChevronLeft />
          </ArrowButton>
          <ArrowButton onClick={next} label="Siguiente caso">
            <ChevronRight />
          </ArrowButton>
        </div>

        {dotCount > 1 && (
          <div
            className="flex justify-center items-center gap-2 mt-8"
            role="tablist"
            aria-label="Navegación del carrusel"
          >
            {Array.from({ length: dotCount }).map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === safeIndex}
                aria-label={`Ir al grupo ${i + 1}`}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === safeIndex
                    ? "w-8 h-2.5 bg-blue-600"
                    : "w-2.5 h-2.5 bg-blue-200 hover:bg-blue-300"
                }`}
              />
            ))}
          </div>
        )}

        <div className="mt-4 max-w-xs mx-auto h-0.5 bg-blue-100 rounded-full overflow-hidden">
          {!isPaused && maxIndex > 0 && (
            <motion.div
              key={`${safeIndex}-${isPaused}`}
              className="h-full rounded-full"
              style={{ backgroundColor: "#0066CC", opacity: 0.4 }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default CasosExito;
