import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Lenis from "@studio-freight/lenis/types";
import axios from "axios";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

import useScreenSize from "../hooks/useScreenSize";
import useScrollPosition from "../hooks/useScrollPosition";

import Footer from "../sections/Footer";

import { Helmet } from "react-helmet";
import NavBar from "../components/NavBar";
import useNavStore from "../store/nav";

import EngineeringCtaForm from "../components/EngineeringCtaForm";

import "./home2.css";
import { toSentenceCase } from "../utils";

const Engineering = ({ lenis }: { lenis: Lenis }) => {
  const { navShowing, setNavShowing } = useNavStore();

  const [hovered, setHovered] = useState<number | null>(null);
  const [powerLoading, setPowerLoading] = useState(false);
  const [powerData, setPowerData] = useState([]);

  const fetchPowerSpotlight = async () => {
    const options = {
      method: "GET",
      url: "https://app.nocodb.com/api/v2/tables/m9jiu7o232gnc51/records?offset=0&limit=25",
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

  useEffect(() => {
    fetchPowerSpotlight();
  }, []);

  return (
    <>
      <Helmet>
        <title>Kelani | Engineering</title>
      </Helmet>
      <>
        <div>
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
        </div>

        <motion.main
          exit={{ opacity: 0 }}
          id="home"
          className="bg-[#FEFEFE] shadow-lg z-[2] relative pt-20 pb-[10rem]"
        >
          {/* hero */}
          <section className="module sub-page-hero pt-20">
            <div className="module-wrapper pt-sm pb-sm ">
              <div className="grid-row">
                <div className="grid-col-width-7">
                  <h2 className="bg-gradient-to-r from-[#440572e6] to-[#ff9a53] bg-clip-text text-transparent">
                    Engineering
                  </h2>
                  <h3 className="mt-12">
                    A breakthrough in yield, CapEx efficiency, and feedstock
                    flexibility
                  </h3>
                </div>

                <div className="sub-page-hero__body grid-col-width-4 grid-col-start-9 column-border-md">
                  <p>
                    Leveraging proven industrial processes, Kelani streamlines
                    operations and supports a diverse range of feedstocks,
                    transforming various waste materials into valuable energy
                    sources; enhancing yield and capital expenditure (CapEx)
                    efficiency.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <motion.img
            exit={{ opacity: 0 }}
            className="w-full min-h-[300px] md:h-[80%] object-cover w-[98%] mx-auto mt-[6rem]"
            src="/assets/images/kelani-home-image.png"
          />

          {/* engineering overview */}
          <section className="module headline">
            <div className="module-wrapper pt-sm w-[95%] mx-auto mt-[7rem]">
              <div className="grid-row">
                <div className="grid-col-width-7">
                  <h2>
                    Turn-key Engineering Designs and <br />
                    Management
                  </h2>
                  <p className="mt-10">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam debitis praesentium rem reiciendis voluptate error
                    optio sint officiis temporibus. Laudantium, cupiditate
                    mollitia voluptate laborum quo deserunt optio eius, ipsum
                    earum architecto dignissimos, qui debitis fuga autem eum
                    rerum sit dolorum accusantium esse at amet commodi! Quisquam
                    repudiandae animi iste sapiente?
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="module section-label">
            <div className="module-wrapper pt-[5rem] pb-sm w-[95%] mx-auto">
              <h2 className="!text-2xl">
                Quality machinery for all industrial uses cases
              </h2>
            </div>
          </section>

          {/* divisions of engineering - plastics */}
          <section
            onMouseEnter={() => setHovered(0)}
            onMouseLeave={() => setHovered(null)}
            className="w-[85%] mx-auto mt-[1.5rem] flex flex-col relative min-h-[250px] xl:max-h-[400px]"
          >
            <motion.img
              className="w-full lg:h-[300px] object-cover"
              src="/assets/images/gears.jpeg"
              alt="Picture of a solar panel"
              initial={{ opacity: 0 }}
              animate={{ opacity: hovered === 0 ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            />

            <motion.div
              animate={{
                opacity: hovered === 0 ? 0.3 : 0,
                transition: { duration: 0.4 },
              }}
              style={{
                background: "#4f2003",
              }}
              className="w-full top-0 bottom-0 left-0 z-[1] absolute"
            ></motion.div>

            <div className="w-full absolute bottom-0 text-white bg-opacity-[0.4] py-[40px] md:py-[48px] px-[27px] md:px-[40px] flex flex-col justify-end">
              <div className="grid-row absolute">
                <div className="grid-col-width-7">
                  {hovered !== 0 && (
                    <div className="headline__number text-black mb-[50px] z-10">
                      01
                    </div>
                  )}
                  <motion.h2
                    className={`${
                      hovered === 0 ? "text-white" : "text-black"
                    } text-[32px] md:text-[44px] lg:text-[54px] z-10`}
                    transition={{
                      duration: 0.5,
                      ease: [0.43, 0.13, 0.23, 0.96],
                    }}
                  >
                    Power Solutions
                  </motion.h2>
                </div>
                {hovered === 0 && (
                  <motion.div
                    className="headline__number grid-col-width-1 grid-col-start-8 text-white"
                    aria-hidden="true"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 1 }}
                  >
                    01
                  </motion.div>
                )}
                {hovered === 0 && (
                  <motion.div
                    className="headline__body grid-col-width-4 grid-col-start-9 column-border-md pr-[40px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 1 }}
                  >
                    <p className="text-[13px] md:text-[16px]">
                      We deliver high-end industrial machinery design and
                      installations with turnkey projects in water treatment,
                      food processing and plastics recycling backed by a robust
                      two-year guarantee and expert consulting.
                    </p>
                    <p className="text-[13px] md:text-[16px]">
                      Our operations management services, including tailored
                      HRMS and strategic outsourcing, empower companies to
                      achieve peak efficiency.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </section>

          <section
            className={`module three-column pb-md mb-[3rem] pt-[6rem] transition-background duration-1000 w-[85%] mx-auto ${
              hovered === 0 ? "bg-[#f1823288]" : ""
            }`}
          >
            <div className=" pb-sm ">
              <div className="grid-row">
                <div className="grid-col-width-4">
                  <div>
                    <h4 className="text-[16px] md:text-[20px]">Inspiration</h4>
                    <p className="text-[13px] md:text-[16px] !text-black">
                      Inspiration pushes us to break norms and leave a lasting
                      impact, while our pursuit of excellence shapes a brighter
                      future.
                    </p>
                  </div>
                </div>
                <div className="grid-col-width-4">
                  <div className="column-border-lg border-[#4f2003]">
                    <h4 className="text-[16px] md:text-[20px]">Inspiration</h4>
                    <p className="text-[13px] md:text-[16px] !text-black">
                      Inspiration pushes us to break norms and leave a lasting
                      impact, while our pursuit of excellence shapes a brighter
                      future.
                    </p>
                  </div>
                </div>
                <div className="grid-col-width-4">
                  <div className="column-border-lg border-[#4f2003]">
                    <h4 className="text-[16px] md:text-[20px]">Inspiration</h4>
                    <p className="text-[13px] md:text-[16px] !text-black">
                      Inspiration pushes us to break norms and leave a lasting
                      impact, while our pursuit of excellence shapes a brighter
                      future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* divisions of engineering - power solutions */}
          <section
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(null)}
            className="w-[85%] mx-auto mt-[1.5rem] flex flex-col relative min-h-[250px] xl:max-h-[400px]"
          >
            <motion.img
              className="w-full lg:h-[300px] object-cover"
              src="/assets/images/power-image.png"
              alt="Picture of a solar panel"
              initial={{ opacity: 0 }}
              animate={{ opacity: hovered === 1 ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            />

            <motion.div
              animate={{
                opacity: hovered === 1 ? 0.3 : 0,
                transition: { duration: 0.4 },
              }}
              style={{
                background: "#027058de",
              }}
              className="w-full top-0 bottom-0 left-0 z-[1] absolute"
            ></motion.div>

            <div className="w-full absolute bottom-0 text-white bg-opacity-[0.4] py-[40px] md:py-[48px] px-[27px] md:px-[40px] flex flex-col justify-end">
              <div className="grid-row absolute">
                <div className="grid-col-width-7">
                  {hovered !== 1 && (
                    <div className="headline__number text-black mb-[50px] z-10">
                      02
                    </div>
                  )}
                  <motion.h2
                    className={`${
                      hovered === 1 ? "text-white" : "text-black"
                    } text-[32px] md:text-[44px] lg:text-[54px] z-10`}
                    transition={{
                      duration: 0.5,
                      ease: [0.43, 0.13, 0.23, 0.96],
                    }}
                  >
                    Power Solutions
                  </motion.h2>
                </div>
                {hovered === 1 && (
                  <motion.div
                    className="headline__number grid-col-width-1 grid-col-start-8 text-white"
                    aria-hidden="true"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 1 }}
                  >
                    02
                  </motion.div>
                )}
                {hovered === 1 && (
                  <motion.div
                    className="headline__body grid-col-width-4 grid-col-start-9 column-border-md pr-[40px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 1 }}
                  >
                    <p className="text-[13px] md:text-[16px]">
                      We deliver high-end industrial machinery design and
                      installations with turnkey projects in water treatment,
                      food processing and plastics recycling backed by a robust
                      two-year guarantee and expert consulting.
                    </p>
                    <p className="text-[13px] md:text-[16px]">
                      Our operations management services, including tailored
                      HRMS and strategic outsourcing, empower companies to
                      achieve peak efficiency.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </section>

          {/* power solutions spotlight */}
          {(powerData?.length as number) > 0 && (
            <>
              <section
                className={`module section-label w-[85%] transition-background duration-1000 ${
                  hovered === 1 ? "bg-[#04b38d8c]" : ""
                } mx-auto`}
              >
                <div className="module-wrapper pt-md !px-[25px]">
                  <h2>Spotlight</h2>
                </div>

                <section className="module news !p-0">
                  <div
                    className={`module-wrapper !px-[25px] pt-sm pb-[30px] mb-[10rem] transition-background duration-1000 ${
                      hovered === 1 ? "bg-[#04b38d8c]" : ""
                    }`}
                  >
                    <div className="grid-row gap-y-[20px]">
                      {powerData?.map((item: any, index: number) => (
                        <div className="grid col-span-3 column-border-sm border-[green]">
                          <p className="text-[dark-green] font-bold text-[12px]">
                            ONGOING
                          </p>
                          <h3 className="my-2">
                            {toSentenceCase(item["Spotlight Description"])}
                          </h3>
                          <p>{item["Spotlight Subtext"]}</p>

                          <time>
                            {new Date(item.CreatedAt)
                              .toLocaleDateString("en-US", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })
                              .replace(/(\d+)/, (match) => {
                                const day = parseInt(match);
                                const suffix =
                                  ["th", "st", "nd", "rd"][
                                    day % 10 > 3 ? 0 : day % 10
                                  ] || "th";
                                return `${day}${suffix}`;
                              })}
                          </time>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </section>
            </>
          )}

          <section className="module headline">
            <div className="module-wrapper pt-lg pb-[3rem] bg-alt">
              <div className="grid-row">
                <div className="grid-col-width-7 column-border-lg">
                  <h2>A steady development program</h2>
                </div>
                <div className="headline__body grid-col-width-4 grid-col-start-9 column-border-md">
                  <p>
                    <span className="font-bold">
                      Over 8 years and $12M of R&amp;D investment to date
                    </span>{" "}
                    by GTI Energy and Aether. In March 2024 installation of our
                    forthcoming 100 gallons per day pilot plant with GTI Energy
                    started. This plant will be fully operational next year.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="module">
            <div className="module-wrapper pt-xs pb-md bg-alt ">
              <div className="overflow-shadows-horizontal">
                <img
                  src="https://aether-fuel.files.svdcdn.com/production/assets/images/media-full-width/development-timeline.svg?dm=1721144529"
                  height={405}
                  width={1524}
                  style={{ marginBlockEnd: "32px", maxWidth: "1472px" }}
                  alt="An overview of how it works"
                />
              </div>
            </div>
          </section>
        </motion.main>
        <Footer
          contactUsUrl={
            "https://app.nocodb.com/api/v2/tables/mjgtqh17rbqo28w/records"
          }
        />
      </>
    </>
  );
};

export default Engineering;
