import Lenis from "@studio-freight/lenis";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import { useEffect, useLayoutEffect, useState } from "react";
import About from "./pages/About2";
import Blog from "./pages/Blog";
import BlogItem from "./pages/BlogItem";
import Home2 from "./pages/Home2";
import Model from "./pages/Model";
import Industry from "./pages/Industry";
import FoodWater from "./pages/FoodWater";
import Plastics from "./pages/Plastics";
import Energy from "./pages/Energy";

function App() {
  const [lenis, setLenis] = useState(null as unknown as Lenis)
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    setLenis(lenis)
  }, [])
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div id="top" className="overflow-y-clip">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home2 lenis={lenis} />} />
          <Route path="/about" element={<About lenis={lenis} />} />
          <Route path="/model" element={<Model lenis={lenis} />} />
          <Route path="/industry" element={<Industry lenis={lenis} />} />
          <Route
            path="/industry/food-water"
            element={<FoodWater lenis={lenis} />}
          />
          <Route
            path="/industry/plastics"
            element={<Plastics lenis={lenis} />}
          />
          <Route path="/energy" element={<Energy lenis={lenis} />} />
          <Route path="/blog" element={<Blog lenis={lenis} />} />
          <Route path="/blog/:id" element={<BlogItem lenis={lenis} />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
