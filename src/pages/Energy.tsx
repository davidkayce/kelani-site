import Lenis from "@studio-freight/lenis/types";
import { AnimatePresence, motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Footer from "../sections/Footer";
import { Helmet } from "react-helmet";
import "./home2.css";
import NavBar from "../components/NavBar";
import useNavStore from "../store/nav";

const Energy = ({ lenis }: { lenis: Lenis }) => {
  const { navShowing, setNavShowing } = useNavStore();
  return (
    <>
      <Helmet>
        <title>Kelani</title>
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
        className="bg-[#FEFEFE] shadow-lg z-[2] relative pt-20">
          <section className="module sub-page-hero">
            <div className="module-wrapper pt-sm pb-sm ">
              <div className="grid-row">
                <div className="grid-col-width-7">
                  <h2 className="bg-gradient-to-r from-[#440572e6] to-[#ff9a53] bg-clip-text text-transparent">
                    Energy
                  </h2>
                  <h3>
                    Kelani represents a significant advancement in
                    waste-to-energy technology.
                  </h3>
                </div>
                <div className="sub-page-hero__body grid-col-width-4 grid-col-start-9 column-border-md">
                  <p>
                    It enhances yield, capital expenditure (CapEx) efficiency,
                    and feedstock flexibility, making the conversion of waste
                    into energy more accessible and cost-effective. Built on a
                    proven industrial gas-to-liquid process, Kelani simplifies
                    the operation while supporting a wide range of feedstocks,
                    enabling the conversion of various waste materials into
                    energy sources.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="module full-width-media full-width-media--border">
            <div className=" pt-sm pb-lg bg-alt">
              <img
                sizes="(max-width: 108.9375rem) 100vw, 103rem"
                
              srcSet="/assets/images/energy1.jpg"
              src="/assets/images/energy1.jpg"
                height="927.5"
                width={1648}
                className="w-full"
                alt="Rendering of a section of the 100 gallon per day scale demo plant under construction by Kelani and strategic partner GTI Energy"
              />
            </div>
          </section>

          <section className="module section-label">
            <div className="module-wrapper pt-md pb-sm bg-alt">
              <h2>Our steps</h2>
            </div>
          </section>
          <section className="module headline headline--alt">
            <div className="module-wrapper pt-sm pb-sm bg-alt">
              <div className="grid-row">
                <div className="grid-col-width-7 column-border-lg">
                  <h2>Gasification Technology</h2>
                </div>
                <div
                  className="headline__number grid-col-width-1 grid-col-start-8 bg-gradient-to-r from-[#440572e6] to-[#ff9a53] bg-clip-text text-transparent"
                  aria-hidden="true"
                >
                  1
                </div>
                <div className="headline__body grid-col-width-4 grid-col-start-9 column-border-md">
                  <p>
                    In the gasification process the feedstock is broken down
                    into synthesis gas (syngas) composed of simple molecules,
                    predominately CO and H2 inside a sealed reactor vessel.
                    Controlled quantities of an oxidant are injected into the
                    reactor to generate high temperatures, typically above 800
                    degC, necessary for gasification.
                  </p>
                  <a href="#a-deeper-dive">Learn more</a>
                </div>
              </div>
            </div>
          </section>
          <section className="module circular-image-grid">
            <div className="module-wrapper  pb-lg bg-alt">
              <ul>
                <li>
                  <figure>
                  <img
                      className="rounded-full object-cover"
                      style={{ height: "12rem", width: "12rem" }}
                      src="/assets/images/carbon.jpg"
                      alt="A man shoveling dirt near a line of cows feeding"
                    />
                    <figcaption>Carbon Negative</figcaption>
                  </figure>
                </li>
                <li>
                  <figure>
                  <img
                      className="rounded-full object-cover"
                      style={{ height: "12rem", width: "12rem" }}
                      src="/assets/images/plastic2.jpg"
                      alt="A man shoveling dirt near a line of cows feeding"
                    />
                    <figcaption>Reduced landfilling</figcaption>
                  </figure>
                </li>
                <li>
                  <figure>
                    <img
                      className="rounded-full object-cover"
                      style={{ height: "12rem", width: "12rem" }}
                      src="/assets/images/renewableenergy.jpg"
                      alt="A man shoveling dirt near a line of cows feeding"
                    />
                    <figcaption>Renewable energy </figcaption>
                  </figure>
                </li>
                <li>
                  <figure>
                  <img
                      className="rounded-full object-cover"
                      style={{ height: "12rem", width: "12rem" }}
                      src="/assets/images/circular.jpg"
                      alt="A man shoveling dirt near a line of cows feeding"
                    />
                    <figcaption>Circular economy</figcaption>
                  </figure>
                </li>
              </ul>
            </div>
          </section>
          <section className="module headline headline--alt">
            <div className="module-wrapper pt-lg pb-sm bg-alt">
              <div className="grid-row">
                <div className="grid-col-width-7 column-border-lg">
                  <h2>Syngas cleanup</h2>
                </div>
                <div
                  className="headline__number grid-col-width-1 grid-col-start-8 bg-gradient-to-r from-[#440572e6] to-[#ff9a53] bg-clip-text text-transparent"
                  aria-hidden="true"
                >
                  2
                </div>
                <div className="headline__body grid-col-width-4 grid-col-start-9 column-border-md">
                  <p>
                    Synthetic gas cleanup tackles the challenge of contaminated
                    plastics, which are often unrecyclable due to impurities
                    like glass fines. By converting non-recyclable plastic waste
                    into energy, it provides a sustainable solution to plastic
                    pollution while reducing landfill impact.
                  </p>
                  <a href="#a-deeper-dive">Learn more</a>
                </div>
              </div>
            </div>
          </section>
          <section className="module full-width-media full-width-media--border">
            <div className="module-wrapper pt-sm pb-lg bg-alt">
              <img
                sizes="(max-width: 108.9375rem) 100vw, 103rem"
                srcSet="https://aether-fuel.transforms.svdcdn.com/production/assets/images/media-full-width/demo-plant-3294.webp?w=750&q=80&fm=webp&fit=crop&dm=1721229542&s=7b885583bc6f5c84427bbf11db845047 750w,
                  https://aether-fuel.transforms.svdcdn.com/production/assets/images/media-full-width/demo-plant-3294.webp?w=2039&q=80&fm=webp&fit=crop&dm=1721229542&s=f3f434801c323a7d8d2b684314aaab0c 2039w,
                  https://aether-fuel.transforms.svdcdn.com/production/assets/images/media-full-width/demo-plant-3294.webp?w=2347&q=80&fm=webp&fit=crop&dm=1721229542&s=8c66bb0d1931803d0b7f09509463db25 2347w,
                  https://aether-fuel.transforms.svdcdn.com/production/assets/images/media-full-width/demo-plant-3294.webp?w=2620&q=80&fm=webp&fit=crop&dm=1721229542&s=c04c2d40a0ab0a9f0a3119b2745ac11b 2620w,
                  https://aether-fuel.transforms.svdcdn.com/production/assets/images/media-full-width/demo-plant-3294.webp?w=3067&q=80&fm=webp&fit=crop&dm=1721229542&s=d800f3f1a49fb342f009def24c0671ed 3067w,
                  https://aether-fuel.transforms.svdcdn.com/production/assets/images/media-full-width/demo-plant-3294.webp?w=3296&q=80&fm=webp&fit=crop&dm=1721229542&s=8bdd4398d71f61ea76ccf1663a1c6678 3296w"
                src="https://aether-fuel.transforms.svdcdn.com/production/assets/images/media-full-width/demo-plant-3294.webp?w=750&q=80&fm=webp&fit=crop&dm=1721229542&s=7b885583bc6f5c84427bbf11db845047"
                height="927.5"
                width={1648}
                alt="Rendering of a section of the 100 gallon per day scale demo plant under construction by Kelani and strategic partner GTI Energy"
              />
            </div>
          </section>
          <section className="module headline headline--alt">
            <div className="module-wrapper pt-lg pb-sm bg-alt">
              <div className="grid-row">
                <div className="grid-col-width-7 column-border-lg">
                  <h2>Products</h2>
                </div>
                <div
                  className="headline__number grid-col-width-1 grid-col-start-8 bg-gradient-to-r from-[#440572e6] to-[#ff9a53] bg-clip-text text-transparent"
                  aria-hidden="true"
                >
                  3
                </div>
                <div className="headline__body grid-col-width-4 grid-col-start-9 column-border-md">
                  <p>
                    The clean syngas produced from the Kelani process can be
                    transformed into a range of energy products. Kelani is
                    initially focusing on the production of electricity,
                    renewable syngas and hydrogen.
                  </p>
                  <a href="#a-deeper-dive">Learn more</a>
                </div>
              </div>
            </div>
          </section>
          <section className="module section-label">
            <div className="module-wrapper pt-lg pb-sm ">
              <h2>Development</h2>
            </div>
          </section>
          <section className="module headline">
            <div className="module-wrapper pt-sm pb-sm ">
              <div className="grid-row">
                <div className="grid-col-width-7 column-border-lg">
                  <h2>Our 250kg per hour sewage sludge gasification pilot</h2>
                </div>
                <div className="headline__body grid-col-width-4 grid-col-start-9 column-border-md">
                  <p>
                  Our 250kg per hour sewage sludge gasification pilot transforms waste into clean energy, showcasing Kelani's commitment to sustainable solutions. By converting sewage sludge into syngas, we address waste challenges and contribute to Africa's energy transition with innovative, scalable technology.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="module two-col-media">
            <div className="pt-sm pb-sm">
              <div className="grid-row">
                <div className="grid-col-width-6 bg-[#33413a50]">
                  <img
                    sizes="(max-width: 59.9375rem) 100vw, 50vw"
                    src="/assets/images/tech2.webp"
                    srcSet="/assets/images/tech2.webp"
                    height={905}
                    width={905}
                  />
                </div>
                <div className="grid-col-width-6 my-auto bg-[#33413a50]">
                  <img
                    className="object-cover"
                    src="/assets/images/tech1.webp"
                    srcSet="/assets/images/tech1.webp"
                    height={906}
                    width={905}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="module section-label">
            <div className="module-wrapper pt-sm pb-sm ">
              <h2>How It Works</h2>
            </div>
          </section>
          <section className="module headline">
            <div className="module-wrapper pt-sm pb-md ">
              <div className="grid-row">
                <div className="grid-col-width-7 column-border-lg">
                  <h2>Feedstock versatility enables scalability.</h2>
                </div>
                <div className="headline__body grid-col-width-4 grid-col-start-9 column-border-md">
                  <p>
                  The ability to produce sustainable fuels from any feedstock convertible to CO, CO2, or CH4 enhances scalability and ensures adaptability to evolving regulations.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="module full-width-media">
            <div className="module-wrapper  pb-lg ">
              <div className="overflow-shadows-horizontal">
                <img
                  src="https://aether-fuel.files.svdcdn.com/production/assets/images/media-full-width/how-it-works-overview.svg?dm=1721164978"
                  height={557}
                  width={1473}
                  style={{ minWidth: 1000 }}
                  alt="An overview of how it works"
                />
              </div>
            </div>
          </section>
          <section className="module headline" id="a-deeper-dive">
            <div className="module-wrapper pt-lg pb-md ">
              <div className="grid-row">
                <div className="grid-col-width-7 column-border-lg">
                  <h2>A deeper dive</h2>
                </div>
                <div className="headline__body grid-col-width-4 grid-col-start-9 column-border-md">
                  <p>
                  Kelani's ability to produce sustainable fuels from any feedstock convertible to CO, CO2, or CH4 boosts scalability and ensures adaptability to changing regulations.
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
                    Upstream Sources
                  </h3>
                  <p>
                    
The Kelani process works with almost any sustainable carbon source, converting recycled carbon into liquid fuels with significantly lower—potentially zero or negative—carbon emissions compared to fossil fuels. Our targeted feedstocks don’t compete with food production and have minimal to no land use impact.
                  </p>
                  <ul className="accordion">
                    <li>
                      <button
                        className="accordion__trigger"
                        aria-expanded="false"
                      >
                        <h4>
                          Industrial Off Gases
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
                      <div className="accordion__target" {...{ inert: "" }}>
                        <div>
                          <p>
                            Many industrial processes produce off-gases rich in
                            CO, CO2, H2, and CH4. Today these gases are usually
                            combusted on site, either in a flare or in a plant
                            to produce heat or electricity.
                          </p>
                          <p>
                            After pre-processing to remove unwanted contaminants
                            and adjust the stream composition, Kelani can
                            transform these gas streams into high value liquid
                            fuels.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <button
                        className="accordion__trigger"
                        aria-expanded="false"
                      >
                        <h4>
                          Waste Biomass &amp;amp; MSW
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
                      <div className="accordion__target" {...{ inert: "" }}>
                        <div>
                          <p>
                            Municipal solid waste (MSW) and agricultural and
                            forestry waste and residues are abundant globally.
                            Most are left to decompose into greenhouse gases.
                          </p>
                          <p>
                            After converting these feedstocks using commercial
                            gasification equipment into CO, CO2, H2, and CH4,
                            Kelani can transform the resulting gas stream into
                            high value liquid fuels.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <button
                        className="accordion__trigger"
                        aria-expanded="false"
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
                      <div className="accordion__target" {...{ inert: "" }}>
                        <div>
                          <p>
                            Methane emissions from the decomposition of organic
                            wastes like MSW, sewage, and livestock are major
                            contributors to climate change.
                          </p>
                          <p>
                            This process can be harness in controlled digestors
                            to produce a stream of CH4 and CO2, called biogas.
                            After some simple clean-up to remove contaminants
                            and adjust the composition, Kelani can transform the
                            this gas stream into high value liquid fuels.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <button
                        className="accordion__trigger"
                        aria-expanded="false"
                      >
                        <h4>
                          Captured CO2
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
                      <div className="accordion__target" {...{ inert: "" }}>
                        <div>
                          <p>
                            CO2 is present in the atmosphere and in the exhausts
                            of most industrial facilities, including, for
                            example, power plants, cement plants, pulp and paper
                            mills, and breweries.
                          </p>
                          <p>
                            This CO2 can be captured and concentrated into a
                            high purity stream using various commercial
                            technologies, which Kelani can transform into high
                            value liquid fuels when combined with clean H2.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
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
                    Feedstock Processing
                  </h3>
                  <p>
                    
Each raw feedstock is first converted into a gaseous stream containing CO, CO2, light hydrocarbons, and/or H2, which is then processed through the Kelani system.
                  </p>
                  <ul className="accordion">
                    <li>
                      <button
                        className="accordion__trigger"
                        aria-expanded="false"
                      >
                        <h4>
                          Industrial Off Gases
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
                      <div className="accordion__target" {...{ inert: "" }}>
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
                        aria-expanded="false"
                      >
                        <h4>
                          Waste Biomass &amp;amp; MSW
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
                      <div className="accordion__target" {...{ inert: "" }}>
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
                        aria-expanded="false"
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
                      <div className="accordion__target" {...{ inert: "" }}>
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
                        aria-expanded="false"
                      >
                        <h4>
                          Captured CO2
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
                      <div className="accordion__target" {...{ inert: "" }}>
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
                    <span>Step 3</span>
                    <span className="visuallyhidden">:</span>
                    Kelani
                  </h3>
                  <p>
                  The Kelani process converts gas streams of CO, CO2, light hydrocarbons (including methane), and/or H2 into high-quality liquid fuels through three primary stages: 1. Syngas Generation, 2. FT Conversion, and 3. Upgrading. A recycle loop redirects unconverted reactants and byproduct gases from the Upgrading stage back to the Syngas Generation stage for maximum efficiency.
                  </p>
                  <ul className="accordion">
                    <li>
                      <button
                        className="accordion__trigger"
                        aria-expanded="false"
                      >
                        <h4>
                          Electrified &amp;Intensified Syngas Generation
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
                      <div className="accordion__target" {...{ inert: "" }}>
                        <div>
                          <p>
                            In the syngas generation step, the gas feed into the
                            plant and the recycled off-gas from the downstream
                            upgrading step are converted into syngas (i.e. CO
                            and H2.) Thanks to a proprietary catalyst, the
                            Aurora Tri-Converter can do this stably in just one
                            reactor, whereas conventionally this requires two or
                            three reactors (i.e. one for CO2 conversion and one
                            or two for light hydrocarbon conversion.)
                          </p>
                          <p>
                            In addition, the Aurora Tri-Converter utilizes
                            electric heaters to generate the required heat of
                            reaction, instead of conventional “fired” heaters
                            that combust hydrocarbon fuels (e.g. methane) to do
                            this. As a result, the Aurora Tri-Converter is much
                            smaller (and cheaper) than a conventional reactor
                            and has higher yield because it does not waste any
                            of carbon to generate process heat.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <button
                        className="accordion__trigger"
                        aria-expanded="false"
                      >
                        <h4>
                          3rd Party FT Conversion
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
                      <div className="accordion__target" {...{ inert: "" }}>
                        <div>
                          <p>
                            In the FT conversion step, syngas from the
                            Tri-Converter is converted into raw hydrocarbons
                            utilizing the commercially proven FT synthesis
                            process. High-performing commercial FT technology
                            and catalysts are available from severalthird-party
                            technology companies, and the Kelani process has
                            been designed to be compatible with any 3rd party FT
                            technology.
                          </p>
                          <p>
                            The raw hydrocarbon FT product contains a mix of
                            gas, liquid, and wax (solid) fractions (referring to
                            their physical state at ambient condition.)
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <button
                        className="accordion__trigger"
                        aria-expanded="false"
                      >
                        <h4>
                          Intensified Upgrading
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
                      <div className="accordion__target" {...{ inert: "" }}>
                        <div>
                          <p>
                            In the upgrading step, the raw FT hydrocarbons are
                            converted into high quality liquid hydrocarbons, and
                            an off-gas stream that is recycled back to the
                            Tri-Converted to increase overall yield. Thanks to
                            two proprietary catalysts, the Aurora Upgrader can
                            do this stably in an FT “tail reactor” configuration
                            where the raw FT product is fed into the Aurora
                            Upgrader without costly separations, and without the
                            associated temperature cycling and compression duty.
                            This both reduces capital cost and boosts energy
                            efficiency.
                          </p>
                          <p>
                            In the standard configuration, the main product is
                            SAF, with smaller portions of Naphtha and Diesel.
                            Alternatively, the plant can be configured to
                            produce just SAF, just SAF and Diesel, or just SAF
                            and Naphtha.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid-row how-it-works__4">
                <div className="grid-col-width-7">
                  <img src="https://aether-fuel.files.svdcdn.com/production/assets/images/how-it-works/svg/hiw-4.svg?dm=1721228901" />
                </div>
                <div className="grid-col-width-5">
                  <h3>
                    <span>Step 4</span>
                    <span className="visuallyhidden">:</span>
                    Fuels
                  </h3>
                  <p>
                    The Kelani process produces high-quality, fully upgraded
                    products that are critical for enabling a net-zero world.
                  </p>
                  <ul className="accordion">
                    <li>
                      <button
                        className="accordion__trigger"
                        aria-expanded="false"
                      >
                        <h4>
                          SAF
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
                      <div className="accordion__target" {...{ inert: "" }}>
                        <div>
                          <p>
                            Sustainable aviation fuel is designed for use as a
                            fuel in planes; SAF is made up of a mix of
                            medium-sized liquid hydrocarbons, typically having
                            between 8 and 16 carbon atoms, and must meet the
                            stringent ASTM D7566 specification.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <button
                        className="accordion__trigger"
                        aria-expanded="false"
                      >
                        <h4>
                          Sustainable Diesel
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
                      <div className="accordion__target" {...{ inert: "" }}>
                        <div>
                          <p>
                            Sustainable diesel is designed for use as a fuel in
                            ships, heavy machinery, and certain cars, trucks,
                            and generators; sustainable diesel is made up of a
                            mix of longer chain liquid hydrocarbons, typically
                            having more than 12 carbon atoms.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <button
                        className="accordion__trigger"
                        aria-expanded="false"
                      >
                        <h4>
                          Sustainable Naphtha
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
                      <div className="accordion__target" {...{ inert: "" }}>
                        <div>
                          <p>
                            Sustainable naphtha is designed for use as a fuel in
                            passenger cars and as a feedstock for chemical
                            synthesis such as plastics, synthetic fibers and
                            solvents; sustainable naphtha is made up of a mix of
                            shorter chain liquid hydrocarbons, typically having
                            less than 12 carbon atoms.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
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
