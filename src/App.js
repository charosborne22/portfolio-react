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
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ReactGA from "react-ga";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <main id="main">
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
