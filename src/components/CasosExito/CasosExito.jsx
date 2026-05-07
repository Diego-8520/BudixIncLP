import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

const CASES = [
  {
    id: 1,
    client: "ModaElite Store",
    url: "modaelite.co",
    industry: "E-commerce Fashion",
    metric: "+245%",
    metricLabel: "crecimiento en ventas",
    revenueBefore: "$12,500 usd",
    revenueAfter: "$43,125 usd",
    timeline: "3 meses",
    challenge:
      "Tráfico alto sin conversión. Carritos abandonados sin sistema de recuperación.",
    solution:
      "Funnels segmentados por buyer persona + remarketing automatizado con secuencias de email.",
    sparkData: [12, 13, 15, 17, 22, 28, 35, 38, 42, 43],
  },
  {
    id: 2,
    client: "Business Colombia",
    url: "www.businesscolombia.shop",
    industry: "E-comerce B2B",
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
  },
  {
    id: 3,
    client: "Amplifica Agency",
    url: "amplifica.agency",
    industry: "Marketing Agency",
    metric: "+156%",
    metricLabel: "en ingresos recurrentes",
    revenueBefore: "$22,000 usd",
    revenueAfter: "$56,320 usd",
    timeline: "3 meses",
    challenge:
      "Dependencia total de referidos. Sin sistema de prospección escalable ni predecible.",
    solution:
      "Lead magnet de alto valor + pipeline de ventas consultivas con automatización de seguimiento.",
    sparkData: [22, 24, 27, 31, 36, 41, 47, 52, 55, 56],
  },
  {
    id: 4,
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
  },
  {
    id: 5,
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
    {/* Header */}
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

    {/* Main metric */}
    <div className="text-center py-1">
      <p
        className="text-5xl font-bold tracking-tight"
        style={{ color: "#0066CC" }}
      >
        {caso.metric}
      </p>
      <p className="text-sm text-gray-500 mt-1">{caso.metricLabel}</p>
    </div>

    {/* Sparkline */}
    <div className="px-1">
      <Sparkline data={caso.sparkData} id={caso.id} />
    </div>

    {/* Before / After */}
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

    {/* Challenge & Solution */}
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

  const maxIndex = Math.max(0, CASES.length - visibleCards);
  const safeIndex = Math.min(currentIndex, maxIndex);

  const updateLayout = useCallback(() => {
    if (!containerRef.current) return;
    const containerW = containerRef.current.offsetWidth;
    const iw = window.innerWidth;
    const cards = iw >= 1024 ? 3 : iw >= 768 ? 2 : 1;
    setVisibleCards(cards);
    // Distance to move per step = card width + one gap
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
    if (isPaused) return;
    intervalRef.current = setInterval(next, 6000);
    return () => clearInterval(intervalRef.current);
  }, [isPaused, next]);

  const dotCount = maxIndex + 1;
  const cardStyle =
    slideWidth > 0 ? { width: `${slideWidth - GAP}px` } : { width: "100%" };

  return (
    <section
      id="casos-exito"
      className="py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
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
            <span style={{ color: "#0066CC" }}>métricas verificables.</span>
          </h2>
          <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
            Empresas que transformaron su crecimiento con el sistema Up Sale.
          </p>
        </motion.div>

        {/* Carousel wrapper */}
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
          {/* Desktop side arrows */}
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

          {/* Track */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              style={{ gap: GAP }}
              animate={{ x: -(safeIndex * slideWidth) }}
              transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
            >
              {CASES.map((caso) => (
                <div
                  key={caso.id}
                  className="flex-shrink-0"
                  style={cardStyle}
                  role="group"
                  aria-roledescription="diapositiva"
                  aria-label={`${caso.client} — ${caso.metric}`}
                >
                  <CaseCard caso={caso} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mobile arrows */}
        <div className="flex md:hidden justify-center gap-4 mt-6">
          <ArrowButton onClick={prev} label="Caso anterior">
            <ChevronLeft />
          </ArrowButton>
          <ArrowButton onClick={next} label="Siguiente caso">
            <ChevronRight />
          </ArrowButton>
        </div>

        {/* Dots */}
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

        {/* Progress bar */}
        <div className="mt-4 max-w-xs mx-auto h-0.5 bg-blue-100 rounded-full overflow-hidden">
          {!isPaused && (
            <motion.div
              key={`${safeIndex}-${isPaused}`}
              className="h-full rounded-full"
              style={{ backgroundColor: "#0066CC", opacity: 0.4 }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 6, ease: "linear" }}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default CasosExito;
