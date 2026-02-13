import { useState, useEffect } from "react";
import BotonCTA from "../../components/CTA/Cta";
import logoBlancoCircular from "../../assets/logo x blanco fondo negro circular.png";

const navbarLinks = [
  { id: 1, title: "Inicio", link: "#hero" },
  { id: 2, title: "Análisis", link: "#problema" },
  { id: 3, title: "Sistema Budix", link: "#sistema" },
  { id: 4, title: "¿Para quiénes somos?", link: "#filtro" },
];

const navbarRedesLinks = [
  {
    id: 1,
    link: "https://www.instagram.com/budix_inc/",
    icon: "bi bi-instagram",
  },
  {
    id: 2,
    link: "https://www.facebook.com/budix_inc/",
    icon: "bi bi-facebook",
  },
  {
    id: 3,
    link: "https://www.linkedin.com/company/budix-inc/",
    icon: "bi bi-linkedin",
  },
  { id: 4, link: "https://wa.me/573053737373", icon: "bi bi-whatsapp" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHero, setIsHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (!heroSection) return;

      const heroHeight = heroSection.offsetHeight;
      setIsHero(window.scrollY < heroHeight - 80);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 overflow-visible isolate transition-all duration-300">
      {/* Gradiente SOLO en Hero */}
      {isHero && (
        <div className="pointer-events-none absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white via-white/95 to-white/90 z-[-1] backdrop-blur-[2px]" />
      )}

      {/* Fondo sólido cuando NO estamos en Hero */}
      {!isHero && (
        <div className="absolute inset-0 bg-white shadow-md z-[-1] transition-all duration-300" />
      )}

      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-6">
        {/* Logo */}
        <div className="flex items-center gap-5">
          <img
            src={logoBlancoCircular}
            alt="Budix Inc"
            className="h-10 w-auto transition-transform duration-300 hover:scale-105"
          />
          <span className="text-black text-xl sm:text-2xl font-semibold font-[Inter_Tight]">
            Budix Inc
          </span>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navbarLinks.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className="text-black text-lg font-medium hover:text-[#C6A75E] transition-colors duration-200"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] max-w-sm bg-white z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full py-8 px-6">
          <ul className="flex flex-col items-start gap-6 flex-1">
            {navbarLinks.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="text-black text-lg font-medium hover:text-[#C6A75E] transition-colors"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="text-center my-6">
            <BotonCTA />
          </div>

          <ul className="flex gap-6 pb-4 justify-center">
            {navbarRedesLinks.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black text-xl hover:text-[#C6A75E] transition-colors"
                >
                  <i className={item.icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
