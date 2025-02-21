import Lenis from "@studio-freight/lenis/types";
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

import { Helmet } from "react-helmet";

import SubsidiaryShowcase from "../sections/SubsidiaryShowcase";
import Footer from "../sections/Footer";

import NavBar from "../components/NavBar";

import useScreenSize from "../hooks/useScreenSize";

import "./home2.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import useNavStore from "../store/nav";
import { toSentenceCase } from "../utils";

const Home = ({ lenis }: { lenis: Lenis }) => {
  const engineeringSpotlightRef = useRef<HTMLDivElement>(null);
  const powerSpotlightRef = useRef<HTMLDivElement>(null);
  const consultingSpotlightRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef(null);

  const [hovered, setHovered] = useState<number | null>(null);
  const [spotlightData, setSpotLightData] = useState<Record<string, string>[]>(
    []
  );
  const [spotlightLoading, setSpotlightLoading] = useState(false);
  const [scrollTops, setScrollTops] = useState({
    engineering: 0,
    power: 0,
    consulting: 0,
  });

  const fetchAllSpotlights = async () => {
    console.log("fetching all spotlights", spotlightData.length);
    if (spotlightData.length > 0) setSpotLightData([]);
    setSpotlightLoading(true);

    const endpoints = [
      {
        url: "https://app.nocodb.com/api/v2/tables/m9jiu7o232gnc51/records?offset=0&limit=25",
        type: "engineering",
      },
      {
        url: "https://app.nocodb.com/api/v2/tables/mv9ppgghnkn9gzl/records?offset=0&limit=25",
        type: "power",
      },
      {
        url: "https://app.nocodb.com/api/v2/tables/mkrhguss1gvum5r/records?offset=0&limit=25",
        type: "consulting",
      },
    ];

    try {
      const responses = await Promise.allSettled(
        endpoints.map((endpoint) =>
          fetch(endpoint.url, {
            method: "GET",
            headers: {
              "xc-token": "gbtt4j9PadEtKXdYLUJrtc1vvdJz7LptQqOE1z9T",
            },
          }).then(async (response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return {
              type: endpoint.type,
              data: data.list,
            };
          })
        )
      );

      // Process results, handling both successful and failed requests
      responses.forEach((result, index) => {
        if (result.status === "fulfilled") {
          setSpotLightData((prevData) => [...prevData, ...result.value.data]);
        } else {
          console.error(
            `Failed to fetch ${endpoints[index].type} data:`,
            result.reason
          );
        }
      });
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setSpotlightLoading(false);
    }
  };

  useEffect(() => {
    fetchAllSpotlights();
  }, []);

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
  const metricsData = [
    {
      title: "20+",
      description:
        "Over a two decades of flawless delivery, empowering businesses across Nigeria and West Africa",
    },
    {
      title: "$200m+",
      description:
        "million dollars in machinery procured or fabricated and installed",
    },
    {
      title: "250+",
      description: "thrilled businesses who have benefited from our services",
    },
  ];

  const engineeringImageScale = useTransform(
    engineeringScrollYProgress,
    [0, 1],
    [1, 1.7]
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

  const { navShowing, setNavShowing } = useNavStore();

  const { width } = useScreenSize();
  const themeColor = "#E36E1B";

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
        <title>Home: Kelani Technologies</title>
      </Helmet>

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
        className="bg-[#FEFEFE] shadow-lg z-[2] relative pt-20"
      >
        {/* Hero */}
        <section className="module sub-page-hero pb-20">
          <div className="module-wrapper pt-sm pb-sm ">
            <div className="grid-row">
              <div className="grid-col-width-7">
                <h2 className="bg-gradient-to-r from-[#440572e6] to-[#ff9a53] bg-clip-text text-transparent">
                  Kelani
                </h2>
                <h3 className="mt-12">
                  Building Africa's Future With Engineering Excellence For
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

        {/* SubsidiaryShowcase */}
        <section className="module full-width-media">
          <div className="pt-sm  ">
            <motion.div
              className="engineering"
              ref={engineeringSpotlightRef}
              style={{ y: window.innerWidth <= 768 ? 0 : engineeringY }}
            >
              <SubsidiaryShowcase
                setScrollTops={setScrollTops}
                type="engineering"
                leftImageScale={engineeringImageScale}
                title="Engineering"
                link="/engineering"
                description="Kelani Engineering procures, facilitates and installs
            state-of-the-art machinery solutions for optimal
            performance to propel your productivity to new heights.
            Let's engineer your path to success."
                sectionImage="/assets/images/engineering-section-image.png"
                services={[
                  {
                    title: "Cutting-Edge Machinery & Expert Advisory Services",
                    paragraphs: [
                      "Specializing in high-end machinery design and installations, we deliver not just products but an unparalleled advisory experience. Our accessibility matches our efficiency, and your orders are merely a click away, bringing innovation to your fingertips.",
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
                type="power"
                leftImageScale={powerImageScale}
                title="Energy"
                link="/energy"
                description="Kelani enables industries and businesses with access to efficient energy solutions, advanced technology, and groundbreaking research"
                sectionImage="/assets/images/power-plant.png"
                services={[
                  {
                    title:
                      "Enabling a net zero world through sustainable waste-derived fuels.",
                    paragraphs: [
                      "Our projects and technology economically convert waste carbon into electricity and renewable fuels for applications in clean cooking, electrification and transportation",
                    ],
                  },
                ]}
              />
            </motion.div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="module large-text-columns mt-[16rem]">
          <div className="module-wrapper pt-sm bg-alt w-[90%] mx-auto pb-md">
            <div className="space-grotesk-medium text-[#0f1930] font-semibold text-[2rem] pb-sm">
              Our Approach
            </div>

            <section>
              <div className="pt-sm pb-md ">
                <div className="grid-row">
                  <div className="grid-col-width-7 column-border-lg">
                    <h2 className="text-[2.5rem]">
                      Elevating African Prosperity Through Indigenous
                      Innovation.
                    </h2>
                  </div>
                  <div className="headline__body grid-col-width-4 grid-col-start-9 column-border-md">
                    <p>
                      Relentlessly pursuing excellence for over 20 years, we
                      strive to develop and enhance African well-being through
                      nurturing and growing indigenous production and providing
                      cutting-edge technological solutions.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className="flex overflow-hidden">
              {metricsData.map((item, index: number) => (
                <div
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  className="xl:w-[33%] mr-10 rounded-t-[10px] flex flex-col relative min-h-[250px] xl:max-h-[500px] 2xl:max-h-[700px] lg:min-h-[400px]"
                >
                  <video
                    ref={videoRef}
                    loop
                    autoPlay
                    muted
                    className="w-full h-full object-cover rounded-t-[10px]"
                    src="/assets/videos/subsidiary-card-bg.mp4"
                  ></video>

                  <motion.div
                    animate={{
                      opacity: hovered === index ? 0.8 : 1,
                      transition: { duration: 0.4 },
                    }}
                    style={{
                      background:
                        "linear-gradient(0deg, #440572e6, #ff9a53 97.78%)",
                    }}
                    className="w-full h-full top-0 bottom-0 left-0 z-[1] absolute rounded-t-[10px]"
                  ></motion.div>

                  <motion.div
                    animate={{
                      opacity: hovered === index ? 1 : 0,
                      transition: { duration: hovered === index ? 0.4 : 0.2 },
                    }}
                    className="w-full inset-0 absolute flex flex-col justify-end py-[20px] md:py-[28px] px-[27px] md:px-[40px] z-10"
                  >
                    <p className="text-white museo-sans text-[13px] md:text-[16px] h-[95px] text-right">
                      {item.description}
                    </p>
                  </motion.div>

                  <div className="w-full absolute bottom-0 text-white bg-opacity-[0.4] py-[40px] md:py-[48px] px-[27px] md:px-[40px] flex flex-col justify-end">
                    <motion.h4
                      animate={{
                        y: hovered === index ? -75 : 0,
                        transition: {
                          duration: 0.3,
                          ease: [0.43, 0.13, 0.23, 0.96],
                        },
                      }}
                      className="space-grotesk-medium text-[30px] md:text-[50px] lg:text-[50px] z-10 leading-[1.1] !text-white font-bold xl:ml-auto !text-right"
                    >
                      {item.title}
                    </motion.h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="module full-width-media">
          <div>
            <div className="relative">
              <img
                sizes="(max-width: 108.9375rem) 100vw, 103rem"
                src="/assets/images/engineer.png"
                className="w-full lg:h-[854px] object-cover"
                alt="Kelani engineer inspecting a section of the 100 gpd scale demo plant."
              />
              <div className="absolute inset-0 bg-[#440572e6] opacity-60"></div>
            </div>
            <p className="full-width-media__caption text-center">
              Kelani engineer inspecting a section of the 100 gpd scale demo
              plant.
            </p>
          </div>
        </section>

        <section className="module large-text-full mt-[12rem]">
          <div className="module-wrapper pb-sm ">
            <div className="grid-row">
              <div className="grid-col-width-9 column-border-lg">
                <p>
                  <b>An urgent need for African industrial solutions</b>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="module text-image">
          <div className="module-wrapper pt-md pb-sm bg-alt">
            <div className="grid-row">
              <div className="grid-col-width-5 column-border-lg">
                <h3>An exploding gap in supply and demand</h3>
                <p>
                  The African manufacturing industry has experienced notable
                  continuous growth, with new entrants joining every year
                  especially in areas like the circular economy, food and
                  beverages, pharmaceuticals and cement production. Why? Rising
                  interest in local production and manufacturing due to FX
                  volatility
                </p>
                <div className="text-image__footnote">
                  <p>
                    Chart Note:
                    <br />
                    Kelani calculations based on public pledges; feedstock
                    availability estimate from 2020 World Economic Forum report
                    "Clean Skies for Tomorrow" prepared by McKinsey
                  </p>
                </div>
              </div>
              <div className="grid-col-width-6 grid-col-start-7">
                <img
                  src="https://aether-fuel.files.svdcdn.com/production/assets/images/text-image/svg/scalability.svg?dm=1721143973"
                  alt="A bar graph labeled Scalability of hydrotreated waste fats/oils versus aviation and ocean shipping demand. Along the x-axis: 2025, 2030, 2035, and 2040. Along the y-axis: 0, 50, 100, 150, 200, 250, and 300 where each is in millions of metric tons. The 2025 x-axis column has Market Demand and Waste Oil Capacity at about 15. The 2030 x-axis column has Market Demand at 100 and Waste Oil Capacity at about 40. The 2035 x-axis column has Market Demand at about 180 and Waste Oil Capacity at about 40. The 2040 x-axis column has Market Demand at about 280 and Waste Oil Capacity at about 40."
                />
              </div>
            </div>
          </div>
        </section>
        <section className="module image-text">
          <div className="module-wrapper pt-sm pb-lg bg-alt">
            <div className="grid-row">
              <div className="grid-col-width-6">
                <img
                  src="https://aether-fuel.files.svdcdn.com/production/assets/images/text-image/svg/existing-technologies.svg?dm=1721144033"
                  alt="A bar graph labeled The smaller size of sustainable fuel plants demands a more CapEx efficient solution — which Aurora provides. Along the x-axis there are two columns without any labels. Along the y-axis: 0 – 140 in increments of 20 where each is barrels per day. The first x-axis column has a bar that goes to about 10 and is labeled 1–10k BPD Sustainable Fuel Plants. The second x-axis column has a bar that goes to 100k and is labeled 100k+ BPD Oil and Gas Refineries."
                />
              </div>
              <div className="grid-col-width-4 grid-col-start-8 column-border-lg">
                <h3>
                  The local technical knowledge and expertise needed have not
                  kept the pace.
                </h3>
                <p>
                  There's a strong demand for qualified personnel in modern
                  manufacturing, quality control, and equipment operation. As a
                  result, companies increasingly import expensive expatriate
                  professionals, underscoring the need for enhanced local
                  training.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="module section-label mt-20">
          <div className="module-wrapper pt-md pb-sm">
            <h2>How We Solve It</h2>
          </div>
        </section>

        <section className="module headline headline--alt">
          <div className="module-wrapper pt-sm pb-sm">
            <div className="grid-row">
              <div className="grid-col-width-7 column-border-lg">
                <h2>
                  Turn-key Engineering <br />
                  Designs and Management
                </h2>
              </div>
              <div
                className="headline__number grid-col-width-1 grid-col-start-8"
                aria-hidden="true"
              >
                1
              </div>
              <div className="headline__body grid-col-width-4 grid-col-start-9 column-border-md">
                <p>
                  We deliver high-end industrial machinery design and
                  installations with turnkey projects in water treatment, food
                  processing and plastics recycling backed by a robust two-year
                  guarantee and expert consulting.
                </p>
                <p>
                  Our operations management services, including tailored HRMS
                  and strategic outsourcing, empower companies to achieve peak
                  efficiency.
                </p>
                <a href="/engineering">Learn more</a>
              </div>
            </div>
          </div>
        </section>

        <section className="module headline headline--alt">
          <div className="module-wrapper pt-lg pb-sm">
            <div className="grid-row">
              <div className="grid-col-width-7 column-border-lg">
                <h2>Power Solutions</h2>
              </div>
              <div
                className="headline__number grid-col-width-1 grid-col-start-8"
                aria-hidden="true"
              >
                2
              </div>
              <div className="headline__body grid-col-width-4 grid-col-start-9 column-border-md">
                <p>
                  Leveraging our extensive experience in the manufacturing
                  industry, we procure and install the most efficient power
                  solutions for your business needs. With our partnershipd with
                  OEMs, we can get you the best offers for your solar plants,
                  wind farms or battery banks.
                </p>
                <a href="/engineering">Learn more</a>
              </div>
            </div>
          </div>
        </section>

        <section className="module headline headline--alt">
          <div className="module-wrapper pt-lg pb-sm">
            <div className="grid-row">
              <div className="grid-col-width-7 column-border-lg">
                <h2>
                  Waste Upcycling to <br />
                  Energy and Renewable Fuels
                </h2>
              </div>
              <div
                className="headline__number grid-col-width-1 grid-col-start-8"
                aria-hidden="true"
              >
                3
              </div>
              <div className="headline__body grid-col-width-4 grid-col-start-9 column-border-md">
                <p>
                  Kelani transforms waste streams into clean, renewable energy
                  and fuels through advanced upcycling technologies. Our
                  innovative processes convert waste into sustainable power
                  sources, reducing environmental impact while driving growth.
                </p>
                <p>
                  Partner with Kelani to turn waste into a valuable resource for
                  a greener, energy-efficient future.
                </p>
                <a href="/energy">Learn more</a>
              </div>
            </div>
          </div>
        </section>

        <section className="module circular-image-grid mt-20">
          <div className="module-wrapper pb-md">
            <ul>
              <li>
                <figure>
                  <img
                    className="rounded-full object-cover"
                    style={{ height: "10rem", width: "10rem" }}
                    src="/assets/images/sewage-sludge.jpg"
                    alt="A man shoveling dirt near a line of cows feeding"
                  />
                  <figcaption>Sewage and Fecal Sludge</figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img
                    className="rounded-full object-cover"
                    style={{ height: "10rem", width: "10rem" }}
                    src="/assets/images/plastic2.jpg"
                    alt="A man shoveling dirt near a line of cows feeding"
                  />
                  <figcaption>Mixed Plastics</figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img
                    className="rounded-full object-cover"
                    style={{ height: "10rem", width: "10rem" }}
                    src="/assets/images/msw.jpg"
                    alt="A man shoveling dirt near a line of cows feeding"
                  />
                  <figcaption>Municipal Solid Waste</figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <img
                    className="rounded-full object-cover"
                    style={{ height: "10rem", width: "10rem" }}
                    src="/assets/images/biomass.jpg"
                    alt="A man shoveling dirt near a line of cows feeding"
                  />
                  <figcaption>Agricultural and Urban Biomass</figcaption>
                </figure>
              </li>
            </ul>
          </div>
        </section>

        <section className="module headline mt-[10rem]">
          <div className="module-wrapper pb-sm bg-alt pt-md">
            <div className="grid-row">
              <div className="grid-col-width-7 column-border-lg">
                <h2>
                  Maximizing Cost, Efficiency, and Flexibility at the Right
                  Scale
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section className="module three-column">
          <div className="module-wrapper pb-lg bg-alt">
            <div className="grid-row">
              <div className="grid-col-width-4">
                <img
                  src="https://aether-fuel.files.svdcdn.com/production/assets/images/three-column/low-plant-capital-cost.svg?dm=1721143747"
                  height={326}
                  width={478}
                  className="three-column__img-title"
                  alt="A bar graph labeled cost per MT/Day of capacity. There are three columns, no labels on either axis. The first column is the tallest and is labeled Existing High Yield Commercial FT. The second bar is a little shorter and is labeled Existing Low Yield Commercial FT. The third bar is the shortest and is labeled Kelani."
                />
                <div className="column-border-lg">
                  <h3>Customized for African Markets</h3>
                  <p>
                    Kelani's design is tailored to meet local conditions and
                    market needs; from fragmented markets and poor
                    infrastructure to large operations ensuring optimal
                    performance and cost-effectiveness.
                  </p>
                </div>
              </div>

              <div className="grid-col-width-4">
                <img
                  src="https://aether-fuel.files.svdcdn.com/production/assets/images/three-column/low-operating-expense.svg?dm=1721143733"
                  height={327}
                  width={478}
                  className="three-column__img-title"
                  alt="A bar graph labeled cost per MT. There are three columns, no labeles on either axis. The first column is very tall and is labeled Existing High Yield Commercial FT. The second column is exactly the same height and is labeled Existing Low Yield Commercial FT. The third column is much shorter and is labeled Kelani."
                />
                <div className="column-border-lg">
                  <h3>All-in-one solution</h3>
                  <p>
                    Our comprehensive approach, blending cutting-edge technology
                    with expert consulting, ensures seamless operations and
                    sustainable growth.
                  </p>
                </div>
              </div>
              <div className="grid-col-width-4">
                <img
                  src="https://aether-fuel.files.svdcdn.com/production/assets/images/three-column/low-plant-capital-cost.svg?dm=1721143747"
                  height={326}
                  width={478}
                  className="three-column__img-title"
                  alt="A bar graph labeled cost per MT/Day of capacity. There are three columns, no labels on either axis. The first column is the tallest and is labeled Existing High Yield Commercial FT. The second bar is a little shorter and is labeled Existing Low Yield Commercial FT. The third bar is the shortest and is labeled Kelani."
                />
                <div className="column-border-lg">
                  <h3>Low plant capital cost</h3>
                  <p>
                    Enabled by the dramatic cost reductions made possible by
                    Kelani's designs and process intensification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {(spotlightData?.length as number) > 0 && (
          <>
            <section className="module section-label">
              <div className="module-wrapper pt-lg  ">
                <h2>Spotlight</h2>
              </div>
            </section>

            <section className="module news">
              <div className="module-wrapper pt-sm pb-lg">
                <div className="grid-row gap-y-[20px]">
                  {spotlightData?.map((item: any, index: number) => (
                    <div className="grid col-span-3 column-border-sm">
                      <h3 className="mb-2">
                        {toSentenceCase(item["Spotlight Description"])}
                      </h3>
                      <p>{item["Spotlight Subtext"]}</p>

                      <div className="news__img max-h-[220px] overflow-hidden lg:max-h-[220px] my-[15px]">
                        <img
                          src={item["Image Url / Video Thumbnail Url"]}
                          alt={toSentenceCase(item["Spotlight Description"])}
                          className="w-full h-full object-cover"
                        />
                      </div>

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

                      <a
                        href={item["Spotlight Link"]}
                        tabIndex={-1}
                        target="_blank"
                      >
                        See More
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        <section className="h-screen full-width-media">
          <div className="pt-md pb-md bg-alt relative">
            <img
              className="h-screen object-cover"
              srcSet="/assets/images/balebreaker-PET-recycling.jpg"
              src="/assets/images/balebreaker-PET-recycling.jpg"
              height={804}
              width="100%"
              alt="kelani plant"
            />
            <div className="absolute inset-0 bg-[#440572e6] opacity-60"></div>
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
