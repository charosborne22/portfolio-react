import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Cookies from "./components/Cookies";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Submitted from "./pages/Submitted";
import Ethics from "./pages/Ethics";
import Policy from "./pages/Policy";
import Error from "./pages/Error";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <main>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" exact element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/submitted" element={<Submitted />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/ethics" element={<Ethics />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Cookies />
      <Footer />
    </div>
  );
}

export default App;
