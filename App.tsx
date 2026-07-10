import Lenis from "@studio-freight/lenis";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
// import AboutCompany from './sections/AboutCompany'
// import Footer from './sections/Footer'
// import SubsidiaryShowcase from './sections/SubsidiaryShowcase'
import { AnimatePresence } from "framer-motion";
import { useEffect, useLayoutEffect, useState } from "react";
import About from "./pages/About2";
import Blog from "./pages/Blog";
import BlogItem from "./pages/BlogItem";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import ProductPage from "./sections/subsidiaryPages/ProductPage";
import SubsidiaryPageOne from "./sections/subsidiaryPages/SubsidiaryPageOne";
import {
  sub_one,
  sub_three,
  sub_two,
} from "./sections/subsidiaryPages/subConstants";
import Technology from "./pages/Technology";
import Approach from "./pages/Approach";
import Home3 from "./pages/Home3";
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
    // setTimeout(() => window.scrollTo(0, 0), 300);
    window.scrollTo(0, 0);
    // lenis.scrollTo("#top", {
    //   duration: 0
    // })
  }, [location.pathname]);

  return (
    <div id="top" className="overflow-y-clip">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home2 lenis={lenis} />} />
          <Route
            path="/consulting"
            element={
              <SubsidiaryPageOne
                cta_form="consulting"
                title="Kelani Talent"
                lenis={lenis}
                sub={sub_one}
              />
            }
          />
          {/* <Route
            path="/engineering"
            element={
              <SubsidiaryPageOne
                cta_form="engineering"
                title="Kelani Engineering"
                lenis={lenis}
                sub={sub_two}
              />
            }
          /> */}
          {/* <Route
            path="/power"
            element={
              <SubsidiaryPageOne
                cta_form="power"
                title="Kelani Power"
                lenis={lenis}
                sub={sub_three}
              />
            }
          /> */}
          <Route
            path="/about"
            element={<About lenis={lenis} />}
          />
          <Route
            path="/home1"
            element={<Home lenis={lenis} />}
          />
          {/* <Route
            path="/hh"
            element={<Home3 lenis={lenis} />}
          /> */}
          <Route
            path="/engineering"
            element={<Technology lenis={lenis} />}
          />
          <Route
            path="/energy"
            element={<Energy lenis={lenis} />}
          />
          <Route
            path="/approach"
            element={<Approach lenis={lenis} />}
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
          {/* <Route path="/parallax" element={<ParallaxCards />} /> */}
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
