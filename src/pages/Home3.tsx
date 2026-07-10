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
import FAQ from "../components/FAQ";
import {
  consultingDataJSON,
  powerServicesJSON,
  WasteCyclingDataJSON,
} from "../utils/json";

const Home3 = ({ lenis }: { lenis: Lenis }) => {
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

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

  const getHoverColor = (index: number) => {
    switch (index) {
      case 0:
        return "#d8bbdd";
      case 1:
        return "#e3cee7";
      case 2:
        return "#f8f3f9";
      case 3:
        return "#eadaec";
      default:
        return "#b077ba";
    }
  };

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
        <motion.div
          style={{ y: window.innerWidth <= 768 ? 0 : aboutUsY }}
          className=""
        >
          <AboutCompany />
        </motion.div>

        <div
          className="flex flex-col md:flex-row justify-between items-center py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto lg:h-3/4 h-full gap-x-20"
          id="waste-treatment-cycling"
        >
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex">
            <div className="w-[1px] h-100 bg-gray-300 mr-5"></div>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold space-grotesk-semibold mb-4">
                Waste Treatment Upcycling
              </h1>
              <p className="text-lg md:text-xl museo-sans mb-6 leading-relaxed">
                The MIHG process delivers negative net greenhouse gas emissions
                when processing general wastes destined for landfill.
              </p>
              <button className="bg-black text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-[#f2e5a2] hover:text-[#000] transition duration-300 ease-in-out">
                <a href="https://www.wildfireenergy.com.au/">Read More</a>
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <FAQ items={WasteCyclingDataJSON} />
          </div>
        </div>

        {/* hidden */}
        <motion.div
          className="engineering hidden"
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
            Let's engineer your path to success."
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

        <div
          className="bg-[#245248] bg-cover bg-center min-h-screen w-full text-white flex justify-center p-4 sm:p-8 md:p-12 gap-24"
          id="mixed-plastic"
        >
          <div className="w-[50%] mt-28 h-fit">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 space-grotesk-semibold">
              Mixed Plastics
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed museo-sans">
              Globally mixed and contaminated plastics are a major disposal
              problem and environmental issues. Many material recovery
              facilities (MRFs) produce plastics with high levels of
              contaminants, such as glass fines, rendering them unrecyclable. In
              Australia only 12% of plastics are recycled.
            </p>
            <button className="hover:bg-black hover:text-white py-3 px-6 mt-4 rounded-full text-lg font-semibold bg-[#f2e5a2] text-[#000] transition duration-300 ease-in-out">
              <a href="https://wildfireenergy.com.au/mixed-plastics">
                Read More
              </a>
            </button>
          </div>
          <div className="w-[28%] my-auto h-fit">
            <p>
              {" "}
              <span className="font-bold">
                Wildfire Energy's MIHG technology{" "}
              </span>{" "}
              can be applied to recover energy from mixed plastics residuals
              that can't be recycled and are destined for landfill.
            </p>
            <h1 className="font-bold mt-5 mb-1"> Configuration</h1>
            <p>
              Mixed plastics are co-fed with other general wastes into the MIHG
              energy recovery facility. The total plastics can be {">"} 40 wt%
              of the waste feedstock.{" "}
            </p>
            <h1 className="font-bold mt-5 mb-1">Results</h1>
            <ul>
              <li>Reduced plastics sent to landfill</li>
              <li>Beneficial use in production of energy products</li>
            </ul>
          </div>
          <div className="bg-white py-8 px-4 mt-8 sm:mt-12 rounded-lg w-full overflow-x-auto hidden">
            <div className="flex space-x-4 sm:space-x-6 md:space-x-10">
              {powerServicesJSON.map((service) => (
                <div
                  key={service.id}
                  className="flex flex-col bg-gray-100 text-black rounded-lg p-4 sm:p-6 w-64 sm:w-72 md:w-80 flex-shrink-0"
                >
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm sm:text-base">
                    {service.description}
                  </p>
                  <a
                    href={service.link}
                    className="mt-auto text-green-500 hover:text-white hover:bg-green-500 w-fit px-3 py-1 sm:px-4 sm:py-2 rounded-full hover:font-semibold text-sm sm:text-base transition-colors duration-300"
                  >
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="power hidden"
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

        {/* Consulting */}
        <div
          className="flex flex-col gap-0 lg:gap-12 lg:flex-row justify-between items-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16 max-w-7xl mx-auto min-h-screen"
          id="food-processing"
        >
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex flex-col lg:sticky lg:top-24">
            <div className="flex items-start">
              <div className="w-[1px] h-[14rem] bg-gray-300 mr-5 hidden sm:block"></div>
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold space-grotesk-semibold mb-4">
                  Food processing
                </h1>
                <p className="text-base sm:text-lg md:text-xl museo-sans mb-6 leading-relaxed">
                  Agriculture and farming generate a large quantity of residual
                  biomass which is suitable for processing into energy products
                  in the MIHG technology. The range of agricultural and farm
                  residues which may be suitable for a MIHG project are very
                  broad...
                </p>
                <button className="bg-black text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full text-base sm:text-lg font-semibold hover:bg-[#b077ba] transition duration-300 ease-in-out">
                  <a href="https://www.wildfireenergy.com.au/agriculture-and-farming">
                    Read More
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:mt-0">
            {consultingDataJSON.map((item: any, index: number) => (
              <motion.div
                key={item.Id}
                className="bg-white p-4 rounded-lg shadow-md cursor-pointer"
                style={
                  hoveredIndex === index
                    ? { backgroundColor: getHoverColor(index) }
                    : {}
                }
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <h3 className="text-base sm:text-lg font-semibold mb-2">
                  {item.Spotlight_Description}
                </h3>
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-gray-600 mb-4">
                        {item.Spotlight_Subtext}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="consulting hidden" ref={consultingSpotlightRef}>
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
              "Unlocking the potential of precision engineering, our expertise propels your productivity to new heights. We procure, facilitate and install state-of-the-art machinery solutions for optimal performance. Let's engineer your path to excellence."
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
            description="Kelani Power enables industries and businesses with unrivaled access to efficient energy solutions, leveraging cutting-edge financing options, advanced technology and groundbreaking research. With our power, you're just unstoppable!"
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

export default Home3;
