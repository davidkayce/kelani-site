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
import "./home2.css";
import NavBar from "../components/NavBar";
import useNavStore from "../store/nav";
import SubsidiaryShowcase2 from "../sections/SubsidiaryShowcase2";
import FadeUpAnimation from "../components/FadeUpAnimation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SpotlightCard from "../components/SpotlightCard";

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
  const { navShowing, setNavShowing } = useNavStore();
  const [powerCtaHovered, setPowerCtaHovered] = useState(false);
  const SlidePrevButton = ({ themeColor }: { themeColor: string }) => {
    const swiper = useSwiper();
    return (
      <motion.div
        onClick={() => {
          swiper.slidePrev();
        }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.96 }}
        style={{ backgroundColor: themeColor }}
        className="bg-[#E98B49] w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full flex items-center justify-center cursor-pointer"
      >
        <svg
          className="md:w-[24px] md:h-[20px] w-[18px] h-[14.4px] scale-50"
          viewBox="0 0 24 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.2925 10.7076L9.2925 19.7076C9.48014 19.8952 9.73464 20.0006 10 20.0006C10.2654 20.0006 10.5199 19.8952 10.7075 19.7076C10.8951 19.5199 11.0006 19.2654 11.0006 19.0001C11.0006 18.7347 10.8951 18.4802 10.7075 18.2926L3.41375 11.0001H23C23.2652 11.0001 23.5196 10.8947 23.7071 10.7072C23.8946 10.5196 24 10.2653 24 10.0001C24 9.73485 23.8946 9.4805 23.7071 9.29296C23.5196 9.10542 23.2652 9.00007 23 9.00007H3.41375L10.7075 1.70757C10.8951 1.51993 11.0006 1.26543 11.0006 1.00007C11.0006 0.734704 10.8951 0.480208 10.7075 0.292568C10.5199 0.104927 10.2654 -0.000488281 10 -0.000488281C9.73464 -0.000488281 9.48014 0.104927 9.2925 0.292568L0.2925 9.29257C0.199524 9.38544 0.125763 9.49573 0.0754395 9.61713C0.025116 9.73853 -0.000785828 9.86865 -0.000785828 10.0001C-0.000785828 10.1315 0.025116 10.2616 0.0754395 10.383C0.125763 10.5044 0.199524 10.6147 0.2925 10.7076Z"
            fill="white"
          />
        </svg>
      </motion.div>
    );
  };

  const { width } = useScreenSize();
  const themeColor = "#E36E1B";
  const SlideNextButton = ({ themeColor }: { themeColor: string }) => {
    const swiper = useSwiper();
    return (
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
        onClick={() => {
          swiper.slideNext();
        }}
        initial={{ rotateZ: 180 }}
        whileTap={{ scale: 0.98 }}
        style={{ backgroundColor: themeColor }}
        className=" w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full flex items-center justify-center cursor-pointer"
      >
        <svg
          className="md:w-[24px] md:h-[20px] w-[18px] h-[14.4px] scale-50"
          viewBox="0 0 24 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.2925 10.7076L9.2925 19.7076C9.48014 19.8952 9.73464 20.0006 10 20.0006C10.2654 20.0006 10.5199 19.8952 10.7075 19.7076C10.8951 19.5199 11.0006 19.2654 11.0006 19.0001C11.0006 18.7347 10.8951 18.4802 10.7075 18.2926L3.41375 11.0001H23C23.2652 11.0001 23.5196 10.8947 23.7071 10.7072C23.8946 10.5196 24 10.2653 24 10.0001C24 9.73485 23.8946 9.4805 23.7071 9.29296C23.5196 9.10542 23.2652 9.00007 23 9.00007H3.41375L10.7075 1.70757C10.8951 1.51993 11.0006 1.26543 11.0006 1.00007C11.0006 0.734704 10.8951 0.480208 10.7075 0.292568C10.5199 0.104927 10.2654 -0.000488281 10 -0.000488281C9.73464 -0.000488281 9.48014 0.104927 9.2925 0.292568L0.2925 9.29257C0.199524 9.38544 0.125763 9.49573 0.0754395 9.61713C0.025116 9.73853 -0.000785828 9.86865 -0.000785828 10.0001C-0.000785828 10.1315 0.025116 10.2616 0.0754395 10.383C0.125763 10.5044 0.199524 10.6147 0.2925 10.7076Z"
            fill="white"
          />
        </svg>
      </motion.div>
    );
  };

  return (
    <>
      <AnimatePresence>
        {navShowing && (
          <NavBar lenis={lenis} closeNav={() => setNavShowing(false)} />
        )}
      </AnimatePresence>
      <nav className="">
        {" "}
        <div className="w-full p-[20px] md:p-[30px] md:px-[48px] flex justify-between z-20 max-w-[1660px] mx-auto">
          <div className=" lg:px-[20px] h-[35px] rounded-full flex items-center justify-center">
            <a href="/" className="my-auto">
              <img
                className="h-[40px] md:h-[50px] lg:h-[55px]"
                src="/assets/images/kelani-logo-white.png"
              />
            </a>
          </div>
          <motion.div
            onClick={() => setNavShowing(true)}
            whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.3 } }}
            className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] bg-transparent rounded-full flex justify-center items-center cursor-pointer  bg-white"
          >
            <img
              className="scale-90 sm:scale-100"
              src="/assets/images/icon-nav.svg"
            />
          </motion.div>
        </div>
      </nav>

      <motion.main 
        exit={{ opacity: 0 }}
        id="home"
        className="bg-[#FEFEFE] shadow-lg z-[2] relative pt-20">
        {/* <section className="module home-hero">
            <picture className="home-hero__img">
              <source
                srcSet="https://aether-fuel.transforms.svdcdn.com/production/assets/images/content-blocks/hero/tri-reactor-3296.webp?w=3296&q=80&fm=webp&fit=crop&dm=1722285344&s=218f3e82e364e0d51d96a93a98ffce37"
                media="(min-width: 1648px)"
              />
              <source
                srcSet="https://aether-fuel.transforms.svdcdn.com/production/assets/images/content-blocks/hero/tri-reactor-3296.webp?w=3067&q=80&fm=webp&fit=crop&dm=1722285344&s=9ce74c6f4926aeae98018971f103acd4"
                media="(min-width: 1533px)"
              />
              <source
                srcSet="https://aether-fuel.transforms.svdcdn.com/production/assets/images/content-blocks/hero/tri-reactor-3296.webp?w=2620&q=80&fm=webp&fit=crop&dm=1722285344&s=8b195362e3364f947263e5f9877c5cd7"
                media="(min-width: 1310px)"
              />
              <source
                srcSet="https://aether-fuel.transforms.svdcdn.com/production/assets/images/content-blocks/hero/tri-reactor-3296.webp?w=2347&q=80&fm=webp&fit=crop&dm=1722285344&s=51ddf0ad6dbd38d4c97df9bcd794f591"
                media="(min-width: 1173px)"
              />
              <source
                srcSet="https://aether-fuel.transforms.svdcdn.com/production/assets/images/content-blocks/hero/tri-reactor-3296.webp?w=2039&q=80&fm=webp&fit=crop&dm=1722285344&s=16e30db458d368862dfb506384c84eb0"
                media="(min-width: 960px)"
              />
              <source
                srcSet="https://aether-fuel.transforms.svdcdn.com/production/assets/images/hero/mobile/tri-reactor-1400.webp?w=1400&q=80&fm=webp&fit=crop&dm=1722285339&s=4ef5173648e55590fdb17e1ae33e855f"
                media="(min-width: 700px)"
              />
              <img
                srcSet="https://aether-fuel.transforms.svdcdn.com/production/assets/images/hero/mobile/tri-reactor-1400.webp?w=750&q=80&fm=webp&fit=crop&dm=1722285339&s=899aabc6a04f554965e89b8fbbdbce7d"
                height={1007}
                width={1648}
                alt="Rendering of a section of the 100 gallon per day scale demo plant under construction by Kelani and strategic partner GTI Energy"
              />
            </picture>
            <div className="module-wrapper home-hero__body">
              <div className="grid-row">
                <div className="grid-col-width-3">
                  <h2 className="text-5xl leading-[32px] ">
                  Building Africa’s Future With Engineering Excellence
                  For Growth
                  </h2>
                </div>
              </div>
              <a href="https://aetherfuels.com/approach" className="module-cta">
                Our approach
              </a>
            </div>
          </section> */}
        <section className="module sub-page-hero pb-20">
          <div className="module-wrapper pt-sm pb-sm ">
            <div className="grid-row">
              <div className="grid-col-width-7">
                {/* <h2>Kelani</h2> */}
                <h2 className="bg-gradient-to-r from-[#440572e6] to-[#ff9a53] bg-clip-text text-transparent">
                  Kelani
                </h2>
                <h3>
                  {" "}
                  Building Africa’s Future With Engineering Excellence For
                  Growth
                </h3>
              </div>
              <div className="sub-page-hero__body grid-col-width-4 grid-col-start-9 column-border-md">
                <p>
                  At Kelani, industrial expertise, talent development, and a
                  commitment to sustainable energy converge. Join us on a
                  transformative journey shaping an extraordinary future across
                  Africa.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="module full-width-media">
          <div className="pt-sm  ">
            {/* <video
              autoPlay=""
              disablepictureinpicture=""
              loop=""
              muted=""
              playsInline=""
              height={927}
              width={1648}
            >
              <source
                src="https://servd-aether-fuel.b-cdn.net/production/assets/videos/hero/tri-reactor-rotate-alt.webm"
                type="video/webm"
              />
            </video> */}
            {/* <div className="flex flex-row w-full md:bg-black h-[500px] md:h-[700px]">
              <div className="bg"></div>
            </div>
             */}
            <motion.div
              className="engineering"
              ref={engineeringSpotlightRef}
              style={{ y: window.innerWidth <= 768 ? 0 : engineeringY }}
            >
              <SubsidiaryShowcase2
                setScrollTops={setScrollTops}
                spotlightLoading={engineeringLoading}
                type="engineering"
                spotlightData={
                  engineeringData as unknown as Record<string, string>
                }
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
                  // {
                  //   title: "Innovative Plastic Recycling",
                  //   paragraphs: [
                  //     "With exceptional expertise, we unveil transformative plastic recycling and repurposing projects, crafting plastics into diesel and other petrochemical marvels. In doing so, we ignite a progressive revolution, reshaping the very fabric of the industry.",
                  //   ],
                  // },
                  // {
                  //   title: "Turnkey Projects Mastery",
                  //   paragraphs: [
                  //     "Embark on your manufacturing journey with us. Our turnkey projects, from paper recycling to PET crushing, showcase our commitment. With a 2-year guarantee and expert consulting, we build factories, empowering your path to excellence.",
                  //   ],
                  // },
                  // {
                  //   title: "Exceptional Operations Management",
                  //   paragraphs: [
                  //     "With cutting-edge facility consulting and production management services, we empower new and existing companies to soar to the highest levels of efficiency. Join us on the path to transformative success.",
                  //   ],
                  // },
                ]}
              />
            </motion.div>

            <motion.div
              className="power"
              style={{ y: window.innerWidth <= 768 ? 0 : powerY }}
              ref={powerSpotlightRef}
            >
              <SubsidiaryShowcase2
                setScrollTops={setScrollTops}
                spotlightLoading={powerLoading}
                spotlightData={powerData as unknown as Record<string, string>}
                type="power"
                leftImageScale={powerImageScale}
                title="Energy"
                description="Kelani Power enables industries and businesses with access to efficient energy solutions, cutting-edge financing options, advanced technology, and groundbreaking research"
                sectionImage="/assets/images/power-image.png"
                services={[
                  {
                    title: "Inclusive Financing to Power Progress",
                    paragraphs: [
                      "Fuel your business growth with our comprehensive credit and financing options. Collaborate seamlessly with approved partners in energy generation utilities, while we expertly manage foreign exchange flows for uninterrupted operations.",
                    ],
                  },
                  // {
                  //   title: "Seamless Bulk Energy Trading",
                  //   paragraphs: [
                  //     "Specializing in large-scale energy trading, we connect users with top suppliers. Ready to elevate your energy game? Reach out, let's discuss maximizing your green energy impact. Your power, our passion!",
                  //   ],
                  // },
                  // {
                  //   title: "Proactive Collections Risk Management",
                  //   paragraphs: [
                  //     "In the face of defaults or market shifts, we provide vital support, financing payment deficits, and facilitating the recovery of energy infrastructure. Partner with us to safeguard your operations and navigate challenges effectively.",
                  //   ],
                  // },
                  // {
                  //   title: "Innovative Research",
                  //   paragraphs: [
                  //     "At the forefront of renewable innovation, we're committed to exploring cutting-edge methods and advanced transmission technologies for a cost-effective, sustainable energy supply. Join us in pushing boundaries for a greener, more efficient energy landscape.",
                  //   ],
                  // },
                ]}
              />
            </motion.div>

            {/* <SubsidiaryShowcase
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
                title: "Exceptional Operations Management",
                paragraphs: [
                  "With cutting-edge facility consulting and production management services, we empower new and existing companies to soar to the highest levels of efficiency. Join us on the path to transformative success.",
                ],
              },
            ]}
          /> */}

          </div>
        </section>
        <section className="module large-text-full pt-[1.6rem] pb-[13rem]">
          <div className="module-wrapper pt-xl">
            <div className="grid-row">
              <div className="grid-col-width-9 column-border-lg">
                <p >
                  <strong className="">Elevating African Prosperity Through Indigenous Innovation</strong>
                  <span className="">{" "}Relentlessly pursuing excellence for over 20 years, we strive to develop and enhance African well-being through nurturing and growing indigenous production and providing cutting-edge technological solutions.</span>
                </p>
              </div>
            </div>
          </div>
          <div className="px-clamp-inline flex flex-col space-y-[20px] md:space-y-0 md:flex-row justify-between mt-[26px] md:mt-[36px] w-full text-black">
                <div className="px-20 md:px-[3rem] md:w-[90%] flex flex-col md:flex-row justify-between w-full space-y-[20px] md:space-y-0 mt-16">
                <div className="">
                  <p className="text-[#0f1930] font-semibold text-[3.5rem]">
                    20+
                  </p>
                  <p className=" text-[1rem] leading-[1.1] text-[#00000060]">
                    Years of flawless <br className="hidden lg:block" /> delivery
                  </p>
                </div>
                
                <div className="">
                  <p className="text-[#0f1930] font-semibold text-[3.5rem]">
                    $500+
                  </p>
                  <p className="text-[1rem] leading-[1.1] text-[#00000060]">
                    Million dollars in <br className="hidden lg:block" /> machinery
                  </p>
                </div>
                <div className="">
                  <p className="text-[#0f1930] font-semibold text-[3.5rem]">
                    250+
                  </p>
                  <p className="text-[1rem] leading-[1.1] text-[#00000060]">
                    Thrilled client <br className="hidden lg:block" /> businesses
                  </p>
                </div>
                </div>
              </div> 
        </section>
        {(engineeringData?.length as number) > 0 && (
          <div
            style={{ backgroundColor: "#fff" }}
            className="relative pt-[70px] pb-32"
          >
            <FadeUpAnimation y={0}>
              <Swiper
                className="md:min-w-[25rem] lg:min-w-[35rem]  static overflow-y-visible flex flex-col-reverse px-[20px] lg:px-[48px]"
                slidesPerView={width > 1024 ? 2.1 : 1}
                spaceBetween={23}
              >
                <div className="flex mb-[20px] md:mb-[31px] pt-[12px] space-x-[12px] md:space-x-[16px] ">
                  <div className="space-grotesk-medium text-[3.5rem]text-[#0f1930] font-semibold text-[3.5rem]">
                    Spotlight
                  </div>
                  <div className="flex items-center space-x-[12px]">
                    <SlidePrevButton themeColor={"#7c7c7c60"} />
                    <SlideNextButton themeColor={"#7c7c7c60"} />
                  </div>
                  <div className="museo-sans font-light text-[12px] text-[#7c7c7c] space-x-[16px] md:space-x-[32px] flex items-end">
                    <div
                    
                      className="text-[12px] md:text-[14px] py-[3px] md:py-[6px] px-[10px] md:px-[20px] rounded-[8px] leading-[0.8] md:leading-[1] flex items-center justify-center museo-sans text-[#0f1930] h-[80%] font-semibold uppercase "
                    >
                      Drag
                    </div>
                  </div>
                </div>
                <div className="cursor-grabbing">
           

                  {engineeringData?.map((item: any, index: number) => (
                    <SwiperSlide key={index}>
                      <SpotlightCard
                        subtext={item["Spotlight Subtext"]}
                        index={`0${index + 1}`}
                        accentColor={"#4a2a15"}
                        description={item["Spotlight Description"]}
                        link={item["Spotlight Link"]}
                        image={item["Image Url / Video Thumbnail Url"]}
                        key={index}
                        themeColor={"#E36E1B"}
                      />
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
            </FadeUpAnimation>
          </div>
        )}
    

        {/* <section className="module full-width-media">
          <div className="pt-sm pb-xs ">
            <img
              sizes="(max-width: 108.9375rem) 100vw, 103rem"
              srcSet="https://aether-fuel.transforms.svdcdn.com/production/assets/images/media-full-width/trireactor-3296.webp?w=750&q=80&fm=webp&fit=crop&dm=1721077384&s=42cb0a58985c2d3ffebb1552f234a510 750w,
                  https://aether-fuel.transforms.svdcdn.com/production/assets/images/media-full-width/trireactor-3296.webp?w=2039&q=80&fm=webp&fit=crop&dm=1721077384&s=9d247ff33980533ffe74bcce5d102384 2039w,
                  https://aether-fuel.transforms.svdcdn.com/production/assets/images/media-full-width/trireactor-3296.webp?w=2347&q=80&fm=webp&fit=crop&dm=1721077384&s=cc8b20785412aba38abcbb4a0a42aa31 2347w,
                  https://aether-fuel.transforms.svdcdn.com/production/assets/images/media-full-width/trireactor-3296.webp?w=2620&q=80&fm=webp&fit=crop&dm=1721077384&s=96c10a29fdb252c789babd6121f03c43 2620w,
                  https://aether-fuel.transforms.svdcdn.com/production/assets/images/media-full-width/trireactor-3296.webp?w=3067&q=80&fm=webp&fit=crop&dm=1721077384&s=40bcb7ac2a5891853dd03a5484fa073e 3067w,
                  https://aether-fuel.transforms.svdcdn.com/production/assets/images/media-full-width/trireactor-3296.webp?w=3296&q=80&fm=webp&fit=crop&dm=1721077384&s=6f09f86ace4c14cbe45784fa2c7d6bcb 3296w"
              src="https://aether-fuel.transforms.svdcdn.com/production/assets/images/media-full-width/trireactor-3296.webp?w=750&q=80&fm=webp&fit=crop&dm=1721077384&s=42cb0a58985c2d3ffebb1552f234a510"
              height={904}
              width={1648}
              alt="Kelani engineer inspecting a section of the 100 gpd scale demo plant."
            />
            <p className="full-width-media__caption">
              Kelani engineer inspecting a section of the 100 gpd scale demo
              plant.
            </p>
          </div>
        </section> */}
        <section className="module large-text-columns">
          
          <div className="module-wrapper pt-sm pb-md bg-alt">
          <div className="space-grotesk-medium text-[#0f1930] font-semibold text-[3rem] pb-sm">
                    Our Technology
                  </div>
            <div className="grid-row">
              <div className="grid-col-width-6 column-border-lg">
                <p>
                  <b>By 2050</b>, aviation and ocean shipping alone will need
                  one billion metric tonnes of sustainable fuel to reach net
                  zero.
                </p>
                <p>
                  True sustainability at this scale, demands breakthrough
                  economics.
                </p>
              </div>
              <div className="large-text-columns__body grid-col-width-4 grid-col-start-9 column-border-md">
                <p>
                  <b>Government policies</b>
                  and corporate sustainability commitments are driving massive
                  demand that requires a “next gen” solution capable of
                  economically converting abundant sources of carbon into
                  sustainable fuels.
                </p>
                <p>
                  Kelani provides the efficiency and flexibility to economically
                  scale to meet this urgent need and unlock this massive
                  opportunity.
                </p>
                {/* <a
                  href="/technology"
                  className="module-cta"
                >
                  Our approach
                </a> */}
              </div>
            </div>
          </div>
        </section>
        <section className="module full-width-media hidden">
          <div className="module-wrapper pt-md pb-md bg-alt">
            {/* <video
              autoPlay=""
              disablepictureinpicture=""
              loop=""
              muted=""
              playsInline=""
              height={927}
              width={1648}
            >
              <source
                src="https://servd-aether-fuel.b-cdn.net/production/assets/videos/hero/world-map-animation.webm"
                type="video/webm"
              />
            </video> */}
          </div>
        </section>
        <section className="module section-label hidden">
          <div className="module-wrapper pt-lg  ">
            <h2>Latest News</h2>
          </div>
        </section>
        <section className="module news hidden">
          <div className="module-wrapper pt-sm pb-lg ">
            <div className="grid-row">
              <div className="grid-col-width-3 column-border-sm">
                <h3 className="line-clamp-4">
                  <a href="https://aetherfuels.com/news-and-press/aether-fuels-signs-mou-with-jetblue">
                    Kelani Fuels Signs MOU with JetBlue
                  </a>
                </h3>
                <a
                  href="https://aetherfuels.com/news-and-press/aether-fuels-signs-mou-with-jetblue"
                  className="news__img"
                  tabIndex={-1}
                >
                  <img
                    sizes="(max-width: 59.9375rem) 100vw, 18vw"
                    srcSet="https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/JetBlue-A321-Balloon-Livery-FINAL-2-News-Card.jpg?w=750&q=80&fm=webp&fit=crop&dm=1727124550&s=1624acd2fcc75b2ce18c92fb973bd287 750w,
                              https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/JetBlue-A321-Balloon-Livery-FINAL-2-News-Card.jpg?w=1065&q=80&fm=webp&fit=crop&dm=1727124550&s=72b0147ec221db4653c78af02afb4dff 1065w,
                              https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/JetBlue-A321-Balloon-Livery-FINAL-2-News-Card.jpg?w=1335&q=80&fm=webp&fit=crop&dm=1727124550&s=141be60dc50fed48b77907a7e0138c7f 1335w,
                              https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/JetBlue-A321-Balloon-Livery-FINAL-2-News-Card.jpg?w=1572&q=80&fm=webp&fit=crop&dm=1727124550&s=56d85439bb736830b6e729bc7013adf6 1572w"
                    src="https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/JetBlue-A321-Balloon-Livery-FINAL-2-News-Card.jpg?w=750&q=80&fm=webp&fit=crop&dm=1727124550&s=1624acd2fcc75b2ce18c92fb973bd287"
                    alt="Kelani Fuels Signs MOU with JetBlue"
                    height={580}
                    width={750}
                  />
                </a>
                <time>September 23, 2024</time>
              </div>
              <div className="grid-col-width-3 column-border-sm">
                <h3 className="line-clamp-4">
                  <a href="https://aetherfuels.com/news-and-press/aether-fuels-secures-34-million-in-series-a-financing">
                    Kelani Fuels Secures $34 Million in Series A Financing
                  </a>
                </h3>
                <a
                  href="https://aetherfuels.com/news-and-press/aether-fuels-secures-34-million-in-series-a-financing"
                  className="news__img"
                  tabIndex={-1}
                >
                  <img
                    sizes="(max-width: 59.9375rem) 100vw, 18vw"
                    srcSet="https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-fuels-secures-34-million.webp?w=750&q=80&fm=webp&fit=crop&dm=1721090377&s=9bffe8b84c1610bb51eda26e919daafc 750w,
                              https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-fuels-secures-34-million.webp?w=1065&q=80&fm=webp&fit=crop&dm=1721090377&s=1335eb2dd77b9679a423ba4ef6ddb168 1065w,
                              https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-fuels-secures-34-million.webp?w=1335&q=80&fm=webp&fit=crop&dm=1721090377&s=2b0a3a893ed42ea36658459581635039 1335w,
                              https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-fuels-secures-34-million.webp?w=1572&q=80&fm=webp&fit=crop&dm=1721090377&s=f98d5383f1468fbfc9f18161043aa179 1572w"
                    src="https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-fuels-secures-34-million.webp?w=750&q=80&fm=webp&fit=crop&dm=1721090377&s=9bffe8b84c1610bb51eda26e919daafc"
                    alt="Kelani Fuels Secures $34 Million in Series A Financing"
                    height={416}
                    width={750}
                  />
                </a>
                <time>June 27, 2024</time>
              </div>
              <div className="grid-col-width-3 column-border-sm">
                <h3 className="line-clamp-4">
                  <a href="https://aetherfuels.com/news-and-press/aether-expands-research-and-development-organization-appoints-technology-experts-to-key-leadership-roles">
                    Kelani Expands Research and Development Organization;
                    Appoints Technology Experts to Key Leadership Roles
                  </a>
                </h3>
                <a
                  href="https://aetherfuels.com/news-and-press/aether-expands-research-and-development-organization-appoints-technology-experts-to-key-leadership-roles"
                  className="news__img"
                  tabIndex={-1}
                >
                  <img
                    sizes="(max-width: 59.9375rem) 100vw, 18vw"
                    srcSet="https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-expands-research.webp?w=750&q=80&fm=webp&fit=crop&dm=1721078765&s=a4d9c4f129702b6aad3881c69ce6d014 750w,
                              https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-expands-research.webp?w=1065&q=80&fm=webp&fit=crop&dm=1721078765&s=ecedd3d67e4c043324c91605dc33c583 1065w,
                              https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-expands-research.webp?w=1335&q=80&fm=webp&fit=crop&dm=1721078765&s=a15728b17bcee9fae0abaf1ce6bc30c3 1335w,
                              https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-expands-research.webp?w=1572&q=80&fm=webp&fit=crop&dm=1721078765&s=da21d3fdbdcf020df14f7b77a3dea1e2 1572w"
                    src="https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-expands-research.webp?w=750&q=80&fm=webp&fit=crop&dm=1721078765&s=a4d9c4f129702b6aad3881c69ce6d014"
                    alt="Kelani Expands Research and Development Organization; Appoints Technology Experts to Key Leadership Roles"
                    height={416}
                    width={750}
                  />
                </a>
                <time>March 11, 2024</time>
              </div>
              <div className="grid-col-width-3 column-border-sm">
                <h3 className="line-clamp-4">
                  <a href="https://aetherfuels.com/news-and-press/aether-fuels-and-gti-energy-announce-partnership-and-exclusive-licensing-deal">
                    Kelani Fuels and GTI Energy Announce Partnership and
                    Exclusive Licensing Deal to Accelerate Commercialization of
                    Sustainable Fuels for Aviation and Ocean Shipping
                  </a>
                </h3>
                <a
                  href="https://aetherfuels.com/news-and-press/aether-fuels-and-gti-energy-announce-partnership-and-exclusive-licensing-deal"
                  className="news__img"
                  tabIndex={-1}
                >
                  <img
                    sizes="(max-width: 59.9375rem) 100vw, 18vw"
                    srcSet="https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-fuels-and-gti-energy.webp?w=750&q=80&fm=webp&fit=crop&dm=1721078990&s=6f80d881df6492a1d120c2dd4c9984f3 750w,
                              https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-fuels-and-gti-energy.webp?w=1065&q=80&fm=webp&fit=crop&dm=1721078990&s=9dcd3f9fa1e544bcfa2f90bc35e1cd3d 1065w,
                              https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-fuels-and-gti-energy.webp?w=1335&q=80&fm=webp&fit=crop&dm=1721078990&s=5caaca3aa2c89ec9a820fb351acd1c40 1335w,
                              https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-fuels-and-gti-energy.webp?w=1572&q=80&fm=webp&fit=crop&dm=1721078990&s=ea91e533acaa96f462bc3f638154c20a 1572w"
                    src="https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-fuels-and-gti-energy.webp?w=750&q=80&fm=webp&fit=crop&dm=1721078990&s=6f80d881df6492a1d120c2dd4c9984f3"
                    alt="Kelani Fuels and GTI Energy Announce Partnership and Exclusive Licensing Deal to Accelerate Commercialization of Sustainable Fuels for Aviation and Ocean Shipping"
                    height={416}
                    width={750}
                  />
                </a>
                <time>February 5, 2024</time>
              </div>
            </div>
            <a href="/news" className="module-cta">
              See all news
            </a>
          </div>
        </section>
        <section className="h-screen full-width-media">
          <div className="pt-md pb-md bg-alt">
          <img
              className="h-screen object-cover"
              sizes="(max-width: 108.9375rem) 100vw, 103rem"
              srcSet="/assets/images/balebreaker-PET-recycling.jpg"
              src="/assets/images/balebreaker-PET-recycling.jpg"
              height={904}
              width={1648}
              alt="kelani plant"
            />
          </div>
        </section>
      </motion.main>
      <Footer
        contactUsUrl={
          "https://app.nocodb.com/api/v2/tables/mjgtqh17rbqo28w/records"
        }
      />
      
    </>
  );
};

export default Home;
