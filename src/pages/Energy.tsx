import Lenis from "@studio-freight/lenis/types";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Helmet } from "react-helmet";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Footer from "../sections/Footer";
import NavBar from "../components/NavBar";
import useNavStore from "../store/nav";

import "./home2.css";
const Energy = ({ lenis }: { lenis: Lenis }) => {
  const { navShowing, setNavShowing } = useNavStore();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Kelani | Energy</title>
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
          className="bg-[#FEFEFE] shadow-lg z-[2] relative pt-20"
        >
          <section className="module sub-page-hero">
            <div className="module-wrapper pt-sm pb-sm ">
              <div className="grid-row">
                <div className="grid-col-width-7">
                  <h2 className="bg-gradient-to-r from-[#440572e6] to-[#ff9a53] bg-clip-text text-transparent">
                    Energy
                  </h2>
                  <h3 className="mt-12">
                    Kelani represents a significant advancement in
                    waste-to-energy technology.
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
          <section className="module full-width-media full-width-media--border">
            <div className=" mt-[5rem] mb-lg relative">
              <img
                srcSet="/assets/images/kelani-power.jpeg"
                src="/assets/images/kelani-power.jpeg"
                className="w-full lg:h-[727.5px]"
                alt="Electrical transformer with connected appliances"
              />
              <div className="absolute inset-0 bg-[#440572e6] opacity-60"></div>
            </div>
          </section>

          {/* A deeper dive into our processes */}
          <section className="module headline" id="a-deeper-dive">
            <div className="module-wrapper pt-lg pb-sm ">
              <div className="grid-row">
                <div className="grid-col-width-7">
                  <h2>A deeper dive into our processes</h2>
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
          <section className="module how-it-works">
            <div className="module-wrapper  pb-lg">
              <div className="grid-row how-it-works__1">
                <div className="grid-col-width-7">
                  <img src="https://aether-fuel.files.svdcdn.com/production/assets/images/how-it-works/svg/hiw-1.svg?dm=1722285578" />
                </div>
                <div className="grid-col-width-5">
                  <h3>
                    <span>Step 1</span>
                    <span className="visuallyhidden">:</span>
                    Waste Processing and Recycling
                  </h3>
                  <p>
                    The Kelani process works with almost any sustainable carbon
                    source, converting recycled carbon into liquid fuels with
                    significantly lower—potentially zero or negative—carbon
                    emissions compared to fossil fuels. Our targeted feedstocks
                    don’t compete with food production and have minimal to no
                    land use impact.
                  </p>
                </div>
              </div>
              <div className="grid-row how-it-works__2">
                <div className="grid-col-width-7">
                  <img src="https://aether-fuel.files.svdcdn.com/production/assets/images/how-it-works/svg/hiw-2.svg?dm=1721226140" />
                </div>
                <div className="grid-col-width-5">
                  <h3>
                    <span>Step 2</span>
                    <span className="visuallyhidden">:</span>
                    Conversion of Waste to Renewable Fuels
                  </h3>
                  <p>
                    Each raw feedstock is first converted into a gaseous stream
                    containing CO, CO2, light hydrocarbons, and/or H2, which is
                    then processed through the Kelani system.
                  </p>

                  <p className="mt-4">
                    The Kelani process converts gas streams of CO, CO2, light
                    hydrocarbons (including methane), and/or H2 into
                    high-quality liquid fuels through three primary stages: 1.
                    Syngas Generation, 2. FT Conversion, and 3. Upgrading. A
                    recycle loop redirects unconverted reactants and byproduct
                    gases from the Upgrading stage back to the Syngas Generation
                    stage for maximum efficiency.
                  </p>
                  <ul className="accordion">
                    <li>
                      <button
                        className="accordion__trigger"
                        aria-expanded={openIndex === 0}
                        onClick={() => toggleAccordion(0)}
                      >
                        <h4>
                          Liquified Petroleum Gas (LPG)
                          <svg
                            width={27}
                            height={26}
                            viewBox="0 0 27 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                            className="toggle-button"
                          >
                            <circle
                              cx="13.4104"
                              cy="13.1458"
                              r="12.1418"
                              stroke="black"
                              className="toggle-button__circle"
                            />
                            <path
                              d="M6.34766 13.1455H20.4727"
                              stroke="black"
                              className="toggle-button__horizontal"
                            />
                            <path
                              d="M13.4102 6.08301L13.4102 20.208"
                              stroke="black"
                              className="toggle-button__vertical"
                            />
                          </svg>
                        </h4>
                      </button>
                      <div
                        className={`accordion__target ${
                          openIndex === 0 ? "open" : ""
                        } inert=""`}
                      >
                        <div>
                          <p>
                            Today these raw waste gas streams are cleaned to
                            remove the major contaminants, like ammonia and
                            sulfur, so that the gases are suitable for
                            combustion (in flares or as fuel for power or heat
                            generation.)
                          </p>
                          <p>
                            These streams are then passed through a commercial
                            fine sulfur removal step, and to finally get the
                            right ratio of individual components for Aether
                            Aurora, a portion of the CO2 may be removed, or
                            supplemental clean H2 added.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <button
                        className="accordion__trigger"
                        aria-expanded={openIndex === 1}
                        onClick={() => toggleAccordion(1)}
                      >
                        <h4>
                          Charcoal Briquettes
                          <svg
                            width={27}
                            height={26}
                            viewBox="0 0 27 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                            className="toggle-button"
                          >
                            <circle
                              cx="13.4104"
                              cy="13.1458"
                              r="12.1418"
                              stroke="black"
                              className="toggle-button__circle"
                            />
                            <path
                              d="M6.34766 13.1455H20.4727"
                              stroke="black"
                              className="toggle-button__horizontal"
                            />
                            <path
                              d="M13.4102 6.08301L13.4102 20.208"
                              stroke="black"
                              className="toggle-button__vertical"
                            />
                          </svg>
                        </h4>
                      </button>
                      <div
                        className={`accordion__target ${
                          openIndex === 1 ? "open" : ""
                        } inert=""`}
                      >
                        <div>
                          <p>
                            Commercial gasifiers convert sized and dried
                            biomass/MSW into a raw stream of CO, H2, CO2, and
                            CH4, which is then subjected to a clean-up process
                            to remove both solid and chemical contaminants.
                          </p>
                          <p>
                            To achieve the right ratio of individual components
                            for Kelani, two approaches may be used, depending on
                            the availability of supplemental H2. In the first
                            approach, supplemental clean H2 is added. In the
                            second approach, a “water gas shift” process is used
                            to convert some of the CO (and added H2O) into CO2
                            and H2. Additionally, a portion of the CO2 may be
                            removed.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <button
                        className="accordion__trigger"
                        aria-expanded={openIndex === 2}
                        onClick={() => toggleAccordion(2)}
                      >
                        <h4>
                          Biogas
                          <svg
                            width={27}
                            height={26}
                            viewBox="0 0 27 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                            className="toggle-button"
                          >
                            <circle
                              cx="13.4104"
                              cy="13.1458"
                              r="12.1418"
                              stroke="black"
                              className="toggle-button__circle"
                            />
                            <path
                              d="M6.34766 13.1455H20.4727"
                              stroke="black"
                              className="toggle-button__horizontal"
                            />
                            <path
                              d="M13.4102 6.08301L13.4102 20.208"
                              stroke="black"
                              className="toggle-button__vertical"
                            />
                          </svg>
                        </h4>
                      </button>
                      <div
                        className={`accordion__target ${
                          openIndex === 2 ? "open" : ""
                        } inert=""`}
                      >
                        <div>
                          <p>
                            Commercial anerobic digesters convert organic waste
                            into biogas, a mixture of biogenic CH4 and CO2. This
                            raw biogas is first cleaned to remove contaminants,
                            including sulfur.
                          </p>
                          <p>
                            To achieve the right ratio of individual components
                            for Kelani, a portion of the CO2 may be removed, or
                            some supplemental H2 added. Alternatively, all of
                            the CO2 may be removed to make renewable natural gas
                            that can then be transported in natural gas
                            pipelines and then used on its own or combined with
                            supplemental CO2.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <button
                        className="accordion__trigger"
                        aria-expanded={openIndex === 3}
                        onClick={() => toggleAccordion(3)}
                      >
                        <h4>
                          Renewable Natural Gas (RNG)
                          <svg
                            width={27}
                            height={26}
                            viewBox="0 0 27 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                            className="toggle-button"
                          >
                            <circle
                              cx="13.4104"
                              cy="13.1458"
                              r="12.1418"
                              stroke="black"
                              className="toggle-button__circle"
                            />
                            <path
                              d="M6.34766 13.1455H20.4727"
                              stroke="black"
                              className="toggle-button__horizontal"
                            />
                            <path
                              d="M13.4102 6.08301L13.4102 20.208"
                              stroke="black"
                              className="toggle-button__vertical"
                            />
                          </svg>
                        </h4>
                      </button>
                      <div
                        className={`accordion__target ${
                          openIndex === 3 ? "open" : ""
                        } inert=""`}
                      >
                        <div>
                          <p>
                            When CO2 is captured from flue exhaust, following
                            concentration the stream is further cleaned to
                            remove contaminants like sulfur. When the CO2 is
                            captured from the air, this further cleaning step
                            can be omitted.
                          </p>
                          <p>
                            This CO2 stream is then combined with clean H2, such
                            as green hydrogen, to achieve the right ratio of
                            individual components for Kelani. A noted above in
                            the biogas route, alternatively this CO2 stream can
                            be combined with renewable natural gas instead of
                            clean H2.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid-row how-it-works__3">
                <div className="grid-col-width-7">
                  <img src="https://aether-fuel.files.svdcdn.com/production/assets/images/how-it-works/svg/hiw-3.svg?dm=1721228813" />
                </div>
                <div className="grid-col-width-5">
                  <h3>
                    <span style={{ color: "#ff9a53" }}>Upcoming</span>
                    <span className="visuallyhidden">:</span>
                    Waste-driven Fuel Cells
                  </h3>
                  <p>
                    The Kelani process converts gas streams of CO, CO2, light
                    hydrocarbons (including methane), and/or H2 into
                    high-quality liquid fuels through three primary stages: 1.
                    Syngas Generation, 2. FT Conversion, and 3. Upgrading. A
                    recycle loop redirects unconverted reactants and byproduct
                    gases from the Upgrading stage back to the Syngas Generation
                    stage for maximum efficiency.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Customers & Partners */}
          <section className="module section-label mt-[5rem]">
            <div className="module-wrapper pt-sm pb-md bg-alt lg:w-[90%] mx-auto">
              <h2>Customers & Partners</h2>
            </div>
          </section>

          <section className="module circular-image-grid">
            <div className="module-wrapper pb-md bg-alt lg:w-[90%] mx-auto">
              <ul>
                <li>
                  <figure>
                    <img
                      className="rounded-[20px] object-cover mb-[30px]"
                      style={{ height: "14rem", width: "14rem" }}
                      src="/assets/images/landfill.jpeg"
                      alt="A man shoveling dirt near a line of cows feeding"
                    />
                    <figcaption>Municipalities and Governments</figcaption>
                  </figure>
                  <p className="w-80% mx-auto md:text-center mt-4">
                    Governments get a scalable and efficient waste-to-energy
                    solution that reduce landfill dependency and cuts costs
                    sustainably.
                  </p>
                </li>
                <li>
                  <figure>
                    <img
                      className="rounded-[20px] object-cover mb-[30px]"
                      style={{ height: "14rem", width: "14rem" }}
                      src="/assets/images/pwo.jpg"
                      alt="A man shoveling dirt near a line of cows feeding"
                    />
                    <figcaption>Private Waste Operators</figcaption>
                  </figure>
                  <p className="w-80% mx-auto md:text-center mt-4">
                    Waste operators lower disposal costs, avoid landfill levies,
                    and extend landfill life with our solutions. Its flexible
                    processing of diverse wastes minimizes pre-treatment needs,
                    while the generated power reduces onsite electricity bills.
                  </p>
                </li>
                <li>
                  <figure>
                    <img
                      className="rounded-[20px] object-cover mb-[30px]"
                      style={{ height: "14rem", width: "14rem" }}
                      src="/assets/images/industry.jpeg"
                      alt="A man shoveling dirt near a line of cows feeding"
                    />
                    <figcaption>General Industry</figcaption>
                  </figure>
                  <p className="w-50% mx-auto text-center mt-4">
                    We source waste from diverse industrial activities—from
                    agriculture to large-scale manufacturing. Our solutions also
                    help reduce energy costs by offsetting retail power and fuel
                    expenses.
                  </p>
                </li>
              </ul>
            </div>
          </section>

          <section className="module full-width-media full-width-media--border">
            <div className="relative">
              <img
                srcSet="/assets/images/plastic-waste.jpg"
                src="/assets/images/plastic-waste.jpg"
                className="w-full lg:h-[727.5px]"
                alt="Waste PET pellets to be used for energy production"
              />
              <div className="absolute inset-0 bg-[#440572e6] opacity-60"></div>
            </div>
          </section>

          {/* Spotlight */}
          <section className="module section-label mt-[9rem]">
            <div className="module-wrapper pt-sm pb-sm ">
              <h2>Spotlight</h2>
            </div>
          </section>

          <section className="module headline">
            <div className="module-wrapper pt-sm pb-md ">
              <div className="grid-row">
                <div className="grid-col-width-7">
                  <h2>Sewage and Fecal Sludge to Renewable LPG</h2>
                </div>
                <div className="headline__body grid-col-width-4 grid-col-start-9 column-border-md">
                  <p className="text-[16px]">
                    Kelani is developing a commercial plant to convert sewage
                    sludge, fecal sludge and septic waste into renewable
                    liquefied petroleum gas (BioLPG) through microwave-assisted
                    gasification and catalytic upgrading of the resultant
                    syngas. The project will focus on utilizing BioLPG as a
                    cleaner energy solution in Nigeria and Sub-Saharan Africa
                    for domestic cooking and heating.
                  </p>
                  <p className="text-[16px]">
                    The project is being carried out in phases. To follow along
                    with our progress, please email us at{" "}
                    <a href="mailto:projects@kelani.com" className="underline ">
                      projects@kelani.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="module pb-24 mb-20">
            <div className="module-wrapper pb-sm bg-alt pt-sm">
              <div className="grid-row">
                <div className="grid col-span-6">
                  <div className="column-border-lg">
                    <h3 className="text-2xl mb-4">Phase 1</h3>
                    <p>
                      Phase One will be a pilot demonstration project, designed
                      to:
                      <ul className="list-disc pl-5 mt-5">
                        <li>
                          verify the performance of our gasification process at
                          scale
                        </li>
                        <li> demonstrate the production of viable BioLPG</li>
                        <li>
                          produce Renewable Natural Gas (RNG) for onsite
                          electricity needs
                        </li>
                      </ul>
                      <br /> The Phase One plant is sized at a capacity of
                      500kg/h of waste processd; determined based on customer
                      demand. It is expected that the project will process
                      between 1,500 and 2,000 tonnes per annum of wastes into
                      up to 400 tpa of BioLPG with additional heat being used
                      to replace fossil fuels.
                    </p>
                  </div>
                </div>
                <div className="grid col-span-6 lg:ml-10">
                  <div className="column-border-lg">
                    <h3 className="text-2xl mb-4">Phase 2</h3>
                    <p>
                      The facility would be expanded into a fully commercial
                      plant processing at least 30,000 tpa of waste into a
                      combination of electricity, heat and hydrogen.
                    </p>
                  </div>
                </div>
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

export default Energy;
