import Lenis from "@studio-freight/lenis/types";
import { AnimatePresence, motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Footer from "../sections/Footer";
import { Helmet } from "react-helmet";
import useNavStore from "../store/nav";
import NavBar from "../components/NavBar";

const Approach = ({ lenis }: { lenis: Lenis }) => {
  const { navShowing, setNavShowing } = useNavStore();
  return (
    <>
      <Helmet>
        <title>Kelani</title>
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
        <section className="module sub-page-hero">
          <div className="module-wrapper pt-sm pb-sm ">
            <div className="grid-row">
              <div className="grid-col-width-7">
                <h2 className="bg-gradient-to-r from-[#440572e6] to-[#ff9a53] bg-clip-text text-transparent">
                  Our Approach
                </h2>
                <h3>
                  Achieving true sustainability requires innovative economic
                  solutions
                </h3>
              </div>
              <div className="sub-page-hero__body grid-col-width-4 grid-col-start-9 column-border-md">
                <p>
                  To achieve true sustainability, a solution must be
                  economically viable at smaller scales, offering high yield and
                  flexibility to use diverse, readily available feedstocks,
                  reducing costs and environmental impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="module full-width-media full-width-media--border">
          <div className=" pt-sm pb-lg bg-alt">
            <img
              sizes="(max-width: 108.9375rem) 100vw, 103rem"
              srcSet="/assets/images/energy2.jpg"
              src="/assets/images/energy2.jpg"
              height="927.5"
              width={1648}
              className="w-full"
              alt="Rendering of a section of the 100 gallon per day scale demo plant under construction by Kelani and strategic partner GTI Energy"
            />
          </div>
        </section>
        <section className="module large-text-full">
          <div className="module-wrapper pb-sm ">
            <div className="grid-row">
              <div className="grid-col-width-9 column-border-lg">
                <p>
                  <b>An urgent need for new solutions</b>
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
                  Between now and 2040, demand for sustainable fuels will soar
                  while supply from the existing approaches will be severely
                  constrained. Today’s sustainable fuels are primarily made by
                  hydrotreating waste fats and oils where supply is limited.
                  This impasse can’t be breached without a shift to the more
                  abundant feedstocks like the Kelani technology uses.
                </p>
                <div className="text-image__footnote">
                  <p>
                    Chart Note:
                    <br />
                    Kelani calculations based on public pledges; feedstock
                    availability estimate from 2020 World Economic Forum report
                    “Clean Skies for Tomorrow” prepared by McKinsey
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
                <h3>Existing approaches fall short</h3>
                <p>
                  While the ideal approach to produce sustainable fuels is to
                  use cheap and abundant feedstocks like CO2, solid waste, and
                  industrial off-gases, this requires complex facilities with
                  limited scale. This drives up fuel costs, making the end
                  product unaffordable.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="module section-label">
          <div className="module-wrapper pt-lg pb-xs ">
            <h2>How We Solve It</h2>
          </div>
        </section>
        <section className="module headline">
          <div className="module-wrapper  pb-sm ">
            <div className="grid-row">
              <div className="grid-col-width-7 column-border-lg">
                <h2>
                  Total focus on yield, efficiency, and flexibility at the right
                  scale
                </h2>
              </div>
              <div className="headline__body grid-col-width-4 grid-col-start-9 column-border-md">
                <p>
                  <b>Kelani</b>
                  is a radically simplified evolution of a common industrial
                  gas-to-liquid process. Robust, flexible, and efficient, it
                  slashes CapEx while simultaneously delivering high yield and
                  broad feedstock support.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="module three-column">
          <div className="module-wrapper  pb-lg ">
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
                  <h3>Low plant capital cost</h3>
                  <p>
                    Enabled by the dramatic cost reductions made possible by
                    Aether Aurora’s process intensification.
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
                  <h3>Low operating expense</h3>
                  <p>
                    Enabled by the combination of Kelani’s process simplicity
                    and high yield.
                  </p>
                </div>
              </div>
              <div className="grid-col-width-4">
                <img
                  src="https://aether-fuel.files.svdcdn.com/production/assets/images/three-column/maximum-carbon-flexibility.svg?dm=1721143720"
                  height={326}
                  width={477}
                  className="three-column__img-title"
                  alt="An illustration of carbon, CO2, and hydrocarbon."
                />
                <div className="column-border-lg">
                  <h3>Maximum carbon flexibility</h3>
                  <p>
                    Enabled by Kelani’s capability to convert carbon from CO2,
                    CO and hydrocarbons (CH4 and others) with no extra steps or
                    equipment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="module headline">
          <div className="module-wrapper pt-lg  bg-alt">
            <div className="grid-row">
              <div className="grid-col-width-7 column-border-lg">
                <h2>A steady development program</h2>
              </div>
              <div className="headline__body grid-col-width-4 grid-col-start-9 column-border-md">
                <p>
                  <strong>
                    Over 8 years and $12M of R &amp;D investment to date
                  </strong>
                  by GTI Energy and Aether. In March 2024 installation of our
                  forthcoming 100 gallons per day pilot plant with GTI Energy
                  started. This plant will be fully operational next year.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="module full-width-media">
          <div className="module-wrapper pt-xs pb-lg bg-alt">
            <div className="overflow-shadows-horizontal">
              <img
                src="https://aether-fuel.files.svdcdn.com/production/assets/images/media-full-width/development-timeline.svg?dm=1721144529"
                height={405}
                width={1524}
                style={{ marginBlockEnd: 32, maxWidth: 1472 }}
                alt="An overview of how it works"
              />
            </div>
          </div>
        </section>
        <section className="module comparison-chart">
          <div className="module-wrapper pt-lg pb-lg">
            <div className="grid-row">
              <div className="grid-col-width-4 column-border-lg">
                <h2>A clear difference with Kelani</h2>
              </div>
            </div>
            <div className="grid-row">
              <div className="grid-col-width-12">
                <div className="overflow-shadows-horizontal">
                  <table>
                    <thead>
                      <tr>
                        <th scope="col">
                          <span className="visuallyhidden">Feature</span>
                        </th>
                        <th scope="col">Kelani</th>
                        <th scope="col">State of the Art Fischer-Tropsch</th>
                        <th scope="col">Simplified Fischer-Tropsch</th>
                        <th scope="col">Alcohol to Fuel</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <span>
                            Relative yield to fully upgraded liquid hydrocarbons
                          </span>
                        </th>
                        <td>
                          <span className="table-dot table-dot--green" />
                          <span className="visuallyhidden">Excellent</span>
                        </td>
                        <td>
                          <span className="table-dot table-dot--yellow" />
                          <span className="visuallyhidden">Good</span>
                        </td>
                        <td>
                          <span className="table-dot table-dot--yellow" />
                          <span className="visuallyhidden">Good</span>
                        </td>
                        <td>
                          <span className="table-dot table-dot--yellow" />
                          <span className="visuallyhidden">Good</span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <span>Relative CapEx efficiency</span>
                        </th>
                        <td>
                          <span className="table-dot table-dot--green" />
                          <span className="visuallyhidden">Excellent</span>
                        </td>
                        <td>
                          <span className="table-dot table-dot--red" />
                          <span className="visuallyhidden">Average</span>
                        </td>
                        <td>
                          <span className="table-dot table-dot--yellow" />
                          <span className="visuallyhidden">Good</span>
                        </td>
                        <td>
                          <span className="table-dot table-dot--red" />
                          <span className="visuallyhidden">Average</span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <span>
                            Intrinsic flexibility to convert CO2, CO, and
                            hydrocarbons
                          </span>
                        </th>
                        <td>
                          <span className="table-dot table-dot--green" />
                          <span className="visuallyhidden">Excellent</span>
                        </td>
                        <td>
                          <span className="table-dot table-dot--green" />
                          <span className="visuallyhidden">Excellent</span>
                        </td>
                        <td>
                          <span className="table-dot table-dot--yellow" />
                          <span className="visuallyhidden">Good</span>
                          <span className="table-cell-note">
                            ( CO, CO2 only )
                          </span>
                        </td>
                        <td>
                          <span className="table-dot table-dot--yellow" />
                          <span className="visuallyhidden">Good</span>
                          <span className="table-cell-note">
                            ( CO, CO2 only )
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div aria-hidden="true" className="comparison-chart__legend">
                  <h3 className="visuallyhidden">Legend:</h3>
                  <ul>
                    <li>
                      <span className="table-dot table-dot--green" />
                      Excellent
                    </li>
                    <li>
                      <span className="table-dot table-dot--yellow" />
                      Good
                    </li>
                    <li>
                      <span className="table-dot table-dot--red" />
                      Average
                    </li>
                  </ul>
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
  );
};

export default Approach;
