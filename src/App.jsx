import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Problem from "./components/Problem/Problem";
import Sistema from "./components/SistemaBudix/SitemaBudix";
import Filtro from "./components/FiltroAudiencia/FiltroAudiencia";
import CasosExito from "./components/CasosExito/CasosExito";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Filtro />
      <Problem />
      <Sistema />
      <CasosExito />
      <Footer />
    </div>
  );
}

export default App;
