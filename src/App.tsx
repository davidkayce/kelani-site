import Lenis from "@studio-freight/lenis";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect, useLayoutEffect, useState } from "react";

// Central pages 
import About from "./pages/About";
import Energy from "./pages/Energy";
import Engineering from "./pages/Engineering";

import Blog from "./pages/Blog";
import BlogItem from "./pages/BlogItem";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import {
  sub_three,
} from "./sections/subsidiaryPages/subConstants";
import "./App.css";


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
          <Route path="/" element={<Home lenis={lenis} />} />
          <Route
            path="/about"
            element={<About lenis={lenis} />}
          />
          <Route
            path="/engineering"
            element={<Engineering lenis={lenis} />}
          />
          <Route
            path="/energy"
            element={<Energy lenis={lenis} />}
          />
          <Route path="/engineering/products"
            element={
              <ProductPage
                cta_form="engineering"
                title="Kelani Talent"
                lenis={lenis}
                sub={sub_three}
              />
            }
          />
          <Route path="/blog"
            element={
              <Blog
                lenis={lenis}
              />
            }
          />
          <Route path="/blog/:id"
            element={
              <BlogItem
                lenis={lenis}
              />
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
