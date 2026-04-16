import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollToTop from "./components/scrollToTop";

import Home from "./pages/Home/home";
import About from "./pages/About/about";
import ESG from "./pages/ESG/esg";
import Portfolio from "./pages/Portfolio/portfolio";
import Strategy from "./pages/Strategy/strategy";
import Partner from "./pages/Patterner/patterner";
import BOD from "./pages/teams/BOD/BOD";
import Management from "./pages/teams/ourteams/teams";
import CEO from "./pages/CEO/ceo";
import Contact from "./pages/Contact/contact";
import Env from "./pages/Enviromental/env";
import Social from "./pages/Social/social";
import Community from "./pages/Community/community";
import Governance from "./pages/Governance/governance";


function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/esg" element={<ESG />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="/partnerships" element={<Partner />} />
        <Route path="/ceo" element={<CEO />} />
        <Route path="/bod" element={<BOD />} />
        <Route path="/management" element={<Management />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enviromental" element={<Env />} />
        <Route path="/social" element={<Social />} />
        <Route path="/community" element={<Community />} />
        <Route path="/governance" element={<Governance />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;