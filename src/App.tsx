import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Portfolio from "./pages/Portfolio/portfolio";
import Strategy from "./pages/Strategy/strategy";
import Partner from "./pages/Patterner/patterner";
import BOD from "./pages/teams/BOD/BOD";
import CEO from "./pages/CEO/ceo";
import Contact from "./pages/Contact/contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="/partnerships" element={<Partner />} />
        <Route path="/ceo" element={<CEO />} />
        <Route path="/bod" element={<BOD />} />
        <Route path="/management" element={<BOD />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;