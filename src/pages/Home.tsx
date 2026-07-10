import Lenis from "@studio-freight/lenis/types";
import axios from "axios";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import FloatingNav from "../components/FloatingNav";
import useScreenSize from "../hooks/useScreenSize";
import useScrollPosition from "../hooks/useScrollPosition";
import AboutCompany from "../sections/AboutCompany";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import SubsidiaryShowcase from "../sections/SubsidiaryShowcase";
import { Helmet } from "react-helmet";

const Home = ({ lenis }: { lenis: Lenis }) => {
  const { y: scrollY } = useScrollPosition();
  const { height } = useScreenSize();
  const [scrollTops, setScrollTops] = useState({
    engineering: 0,
    power: 0,
    consulting: 0,
  });

  const engineeringSpotlightRef = useRef<HTMLDivElement>(null);
  const powerSpotlightRef = useRef<HTMLDivElement>(null);
  const consultingSpotlightRef = useRef<HTMLDivElement>(null);

  const [engineeringLoading, setEngineeringLoading] = useState(false);
  const [engineeringData, setEngineeringData] = useState([]);
  const [powerLoading, setPowerLoading] = useState(false);
  const [powerData, setPowerData] = useState([]);
  const [consultingLoading, setConsultingLoading] = useState(false);
  const [consultingData, setConsultingData] = useState([]);

  const fetchEngineeringSpotlight = async () => {
    const options = {
      method: "GET",
      url: "https://app.nocodb.com/api/v2/tables/m9jiu7o232gnc51/records",
      params: { offset: "0", limit: "25", where: "" },
      headers: {
        "xc-token": "gbtt4j9PadEtKXdYLUJrtc1vvdJz7LptQqOE1z9T",
      },
    };

    try {
      setEngineeringLoading(true);
      const response = await axios.request(options);
      setEngineeringData(response.data.list);
    } catch (err) {
      console.log(err);
    } finally {
      setEngineeringLoading(false);
    }
  };
  const fetchPowerSpotlight = async () => {
    const options = {
      method: "GET",
      url: "https://app.nocodb.com/api/v2/tables/mv9ppgghnkn9gzl/records",
      params: { offset: "0", limit: "25", where: "" },
      headers: {
        "xc-token": "gbtt4j9PadEtKXdYLUJrtc1vvdJz7LptQqOE1z9T",
      },
    };

    try {
      setPowerLoading(true);
      const response = await axios.request(options);
      setPowerData(response.data.list);
    } catch (err) {
      console.log(err);
    } finally {
      setPowerLoading(false);
    }
  };
  const fetchConsultingSpotlight = async () => {
    const options = {
      method: "GET",
      url: "https://app.nocodb.com/api/v2/tables/mkrhguss1gvum5r/records",
      params: { offset: "0", limit: "25", where: "" },
      headers: {
        "xc-token": "gbtt4j9PadEtKXdYLUJrtc1vvdJz7LptQqOE1z9T",
      },
    };

    try {
      setConsultingLoading(true);
      const response = await axios.request(options);
      setConsultingData(response.data.list);
    } catch (err) {
      console.log(err);
    } finally {
      setConsultingLoading(false);
    }
  };
  const { scrollYProgress: engineeringScrollYProgress } = useScroll({
    target: engineeringSpotlightRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: powerScrollYProgress } = useScroll({
    target: powerSpotlightRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: consultingScrollYProgress } = useScroll({
    target: consultingSpotlightRef,
    offset: ["start end", "end start"],
  });

  const engineeringImageScale = useTransform(
    engineeringScrollYProgress,
    [0, 1],
    [1, 1.7]
  );
  const aboutUsY = useTransform(
    engineeringScrollYProgress,
    [0, 1],
    [1, engineeringSpotlightRef?.current?.offsetHeight ?? 0]
  );

  const engineeringY = useTransform(
    powerScrollYProgress,
    [0, 1],
    [0, powerSpotlightRef?.current?.offsetHeight ?? 0]
  );
  const powerImageScale = useTransform(powerScrollYProgress, [0, 1], [1, 1.7]);
  const powerY = useTransform(
    consultingScrollYProgress,
    [0, 1],
    [0, consultingSpotlightRef?.current?.offsetHeight ?? 0]
  );
  useEffect(() => {
    fetchEngineeringSpotlight();
    fetchPowerSpotlight();
    fetchConsultingSpotlight();
  }, []);
  const talentImageScale = useTransform(
    consultingScrollYProgress,
    [0, 1],
    [1, 1.7]
  );

  return (
    <>
      <Helmet>
        <title>Kelani</title>
      </Helmet>
      <motion.main
        exit={{ opacity: 0 }}
        id="home"
        className="bg-[#FEFEFE] shadow-lg z-[2] relative"
      >
        <Hero lenis={lenis} />
        <motion.div style={{ y: window.innerWidth <= 768 ? 0 : aboutUsY }} className="">
          <AboutCompany />
        </motion.div>

        <motion.div
          className="engineering"
          ref={engineeringSpotlightRef}
          style={{ y: window.innerWidth <= 768 ? 0 : engineeringY }}
        >
          <SubsidiaryShowcase
            setScrollTops={setScrollTops}
            spotlightLoading={engineeringLoading}
            type="engineering"
            spotlightData={engineeringData as unknown as Record<string, string>}
            leftImageScale={engineeringImageScale}
            title="Engineering"
            description="Kelani Engineering procures, facilitates and installs
            state-of-the-art machinery solutions for optimal
            performance to propel your productivity to new heights.
            Let’s engineer your path to success."
            sectionImage="/assets/images/engineering-section-image.png"
            services={[
              {
                title: "Cutting-Edge Machinery & Expert Advisory Services",
                paragraphs: [
                  "Specializing in high-end machinery and tools procurement, we deliver not just products but an unparalleled advisory experience. Our accessibility matches our efficiency, and your orders are merely a click away, bringing innovation to your fingertips.",
                ],
              },
              {
                title: "Innovative Plastic Recycling",
                paragraphs: [
                  "With exceptional expertise, we unveil transformative plastic recycling and repurposing projects, crafting plastics into diesel and other petrochemical marvels. In doing so, we ignite a progressive revolution, reshaping the very fabric of the industry.",
                ],
              },
              {
                title: "Turnkey Projects Mastery",
                paragraphs: [
                  "Embark on your manufacturing journey with us. Our turnkey projects, from paper recycling to PET crushing, showcase our commitment. With a 2-year guarantee and expert consulting, we build factories, empowering your path to excellence.",
                ],
              },
              {
                title: "Exceptional Operations Management",
                paragraphs: [
                  "With cutting-edge facility consulting and production management services, we empower new and existing companies to soar to the highest levels of efficiency. Join us on the path to transformative success.",
                ],
              },
            ]}
          />
        </motion.div>
        <motion.div
          className="power"
          style={{ y: window.innerWidth <= 768 ? 0 : powerY }}
          ref={powerSpotlightRef}
        >
          <SubsidiaryShowcase
            setScrollTops={setScrollTops}
            spotlightLoading={powerLoading}
            spotlightData={powerData as unknown as Record<string, string>}
            type="power"
            leftImageScale={powerImageScale}
            title="Power"
            description="Kelani Power enables industries and businesses with access to efficient energy solutions, cutting-edge financing options, advanced technology, and groundbreaking research"
            sectionImage="/assets/images/power-image.png"
            services={[
              {
                title: "Inclusive Financing to Power Progress",
                paragraphs: [
                  "Fuel your business growth with our comprehensive credit and financing options. Collaborate seamlessly with approved partners in energy generation utilities, while we expertly manage foreign exchange flows for uninterrupted operations.",
                ],
              },
              {
                title: "Seamless Bulk Energy Trading",
                paragraphs: [
                  "Specializing in large-scale energy trading, we connect users with top suppliers. Ready to elevate your energy game? Reach out, let's discuss maximizing your green energy impact. Your power, our passion!",
                ],
              },
              {
                title: "Proactive Collections Risk Management",
                paragraphs: [
                  "In the face of defaults or market shifts, we provide vital support, financing payment deficits, and facilitating the recovery of energy infrastructure. Partner with us to safeguard your operations and navigate challenges effectively.",
                ],
              },
              {
                title: "Innovative Research",
                paragraphs: [
                  "At the forefront of renewable innovation, we're committed to exploring cutting-edge methods and advanced transmission technologies for a cost-effective, sustainable energy supply. Join us in pushing boundaries for a greener, more efficient energy landscape.",
                ],
              },
            ]}
          />
        </motion.div>
        <div className="consulting" ref={consultingSpotlightRef}>
          <SubsidiaryShowcase
            setScrollTops={setScrollTops}
            spotlightLoading={consultingLoading}
            spotlightData={consultingData as unknown as Record<string, string>}
            type="consulting"
            leftImageScale={talentImageScale}
            title="Consulting"
            description="
            Kelani Consulting excels in manufacturing and engineering HR, spanning the entire value chain from raw material to distribution, near and far. With our guidance, success knows no limits!"
            sectionImage="/assets/images/consulting-image.png"
            services={[
              {
                title: "Tailored HRMS Solutions",
                paragraphs: [
                  "Streamline workforce management with our customized HRMS solutions, covering payroll and ensuring compliance for optimal efficiency.",
                ],
              },
              {
                title: "Strategic Outsourcing Solutions",
                paragraphs: [
                  "Elevate business strategy with our outsourcing solutions. We optimize processes, cut costs, and enhance efficiency, allowing a sharper focus on core business activities.",
                ],
              },
              {
                title: "Talent Management Excellence",
                paragraphs: [
                  "Unlock workforce potential with our holistic talent management. From strategic recruitment to ongoing development, we attract, retain, and nurture top-tier talent for unparalleled organizational success.",
                ],
              },
              {
                title: "Consulting Mastery",
                paragraphs: [
                  "Immerse in consulting mastery with our expert team. Navigate challenges, explore opportunities, and receive tailored solutions for transformative success in a rapidly evolving business landscape.",
                ],
              },
            ]}
          />
        </div>
        {/* <motion.div
          style={{
            // y: engineeringY,
            // opacity: engineeringOpacity,
            // scale: engineeringScale
          }}
          className="bg-[#fefefe] relative pt-[40px] rounded-t-[40px] pb-[20px] shadow-[0_0px_20px_2px_rgba(0,0,0,0.1)]"
          ref={engineeringSpotlightRef}
        >
          <SubsidiaryShowcase
            bgImage="/assets/images/kelani-industrials.jpeg"
            title="Kelani Engineering"
            description={
              "Unlocking the potential of precision engineering, our expertise propels your productivity to new heights. We procure, facilitate and install state-of-the-art machinery solutions for optimal performance. Let’s engineer your path to excellence."
            }
            setScrollTops={setScrollTops}
            type="industrials"
            spotlightLoading={engineeringLoading}
            spotlightData={engineeringData as unknown as Record<string, string>}
            services={[
              {
                title: "Cutting-Edge Machinery and Expert Advisory Services",
                paragraphs: [
                  "Specializing in high-end machinery and tools procurement, we deliver not just products but an unparalleled advisory experience. Our accessibility matches our efficiency, and your orders are merely a click away, bringing innovation to your fingertips.",
                ],
              },
              {
                title:
                  "Pioneering Plastic Transformation for a Sustainable Tomorrow",
                paragraphs: [
                  "With exceptional expertise, we unveil transformative plastic recycling and repurposing projects, crafting plastics into diesel and other petrochemical marvels. In doing so, we ignite a progressive revolution, reshaping the very fabric of the industry.",
                ],
              },
              {
                title: "Turnkey Projects Mastery",
                paragraphs: [
                  "Dreaming of starting a factory or manufacturing line? Look no further. We are your partner in turning dreams into reality. Our successful turnkey projects, from paper recycling to PET crushing and more, stand as a testament to our commitment. With a 2-year guarantee, inclusive services, and expert consulting, we not only build factories but also empower your journey to manufacturing excellence.",
                ],
              },
              {
                title:
                  "Production and Factory Management Operations to Unleash Success",
                paragraphs: [
                  "With cutting-edge facility consulting and production management services, we empower new and existing companies to soar to the highest levels of efficiency. Join us on the path to transformative success.",
                ],
              },
            ]}
          />
        </motion.div> */}
        {/* <motion.div
          // style={{ y: powerY, opacity: powerOpacity }}
          ref={powerSpotlightRef}
          className="bg-[#fefefe] relative  pt-[40px] rounded-t-[40px] shadow-[0_0px_20px_2px_rgba(0,0,0,0.1)]"
        >
          <SubsidiaryShowcase
            title="Kelani Power"
            bgImage="/assets/images/kelani-power.jpeg"
            description="Kelani Power enables industries and businesses with unrivaled access to efficient energy solutions, leveraging cutting-edge financing options, advanced technology and groundbreaking research. With our power, you’re just unstoppable!"
            setScrollTops={setScrollTops}
            type="power"
            services={[
              {
                title: "Inclusive Financing to Power Progress",
                paragraphs: [
                  "Fuel your business growth with our comprehensive credit and financing options. Collaborate seamlessly with approved partners in energy generation utilities, while we expertly manage foreign exchange flows for uninterrupted operations.",
                ],
              },
              {
                title: "Seamless Bulk Energy Trading for Sustainable Power",
                paragraphs: [
                  "We specialize in large-scale energy trading, linking end users with top-tier suppliers from private and public generation plants. Ready to elevate your energy game? Reach out, and let's discuss maximizing the impact of your green energy generation. Your power, our passion!",
                ],
              },
              {
                title:
                  "Proactive Collections Risk Management for Seamless Growth",
                paragraphs: [
                  "In the face of defaults or market shifts, we provide vital support, financing payment deficits, and facilitating the recovery of energy infrastructure. Partner with us to safeguard your operations and navigate challenges effectively.",
                ],
              },
              {
                title: "Research Excellence in Renewable Energy Innovation",
                paragraphs: [
                  "At the forefront of renewable innovation, we're committed to exploring cutting-edge methods and advanced transmission technologies for a cost-effective, sustainable energy supply. Join us in pushing boundaries for a greener, more efficient energy landscape.",
                ],
              },
            ]}
          />
        </motion.div> */}
        {/* <div
          className="bg-[#fefefe] relative  pt-[40px] rounded-t-[40px] shadow-[0_0px_20px_2px_rgba(0,0,0,0.1)]"
          ref={consultingSpotlightRef}
        >
          <SubsidiaryShowcase
            bgImage="/assets/images/kelani-consulting.jpeg"
            title="Kelani Consulting"
            description="Kelani Consulting and Talent Management is a premier engineering and industrial HR and training firm specializing in the manufacturing and engineering sectors. Our mastery entails the entire value chain from raw material extraction to manufacturing and distribution.
            With talent and experience, what cannot succeed?"
            services={[
              {
                title:
                  "Tailored HRMS and Talent Management Solutions to Elevate Your Workforce",
                paragraphs: [
                  "Unlock the full potential of your team with our comprehensive HR and talent management services, designed specifically for the unique needs of industries, factories, and engineering enterprises. Streamline your processes, enhance employee engagement, and foster growth with our specialized solutions",
                ],
              },
              {
                title: "Connecting Talent to Opportunity",
                paragraphs: [
                  "We specialize in bridging the gap between talent and opportunity, with a dedicated focus on outsourcing engineering design, industrial, and technical research tasks. Elevate your projects with our strategic outsourcing solutions.",
                ],
              },
            ]}
            setScrollTops={setScrollTops}
            type="consulting"
          />
        </div> */}
      </motion.main>
      <Footer
        contactUsUrl={
          "https://app.nocodb.com/api/v2/tables/mjgtqh17rbqo28w/records"
        }
      />
      <AnimatePresence>
        {scrollY > height * 0.5 &&
          scrollY < document.body.scrollHeight - window.innerHeight * 1.7 && (
            <FloatingNav
              lenis={lenis}
              scrollTops={scrollTops}
              activeNav={
                scrollY > document.body.scrollHeight - window.innerHeight * 2
                  ? ""
                  : scrollY > scrollTops.consulting
                    ? "consulting"
                    : scrollY > scrollTops.power
                      ? "power"
                      : scrollY > scrollTops.engineering
                        ? "engineering"
                        : ""
              }
            />
          )}
      </AnimatePresence>
      {/* <ParallaxCards /> */}
    </>
  );
};

export default Home;
