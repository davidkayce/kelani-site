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
const BlogItem = ({ lenis }: { lenis: Lenis }) => {
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
          <main>
            <section className="module news-detail-header">
              <div className="module-wrapper pt-sm pb-sm">
                <div className="grid-row">
                  <div className="grid-col-width-2 column-border-lg">
                    <time>February 3, 2025</time>
                  </div>
                  <div className="grid-col-width-8">
                    <h2>
                      Singapore Airlines Group and Aether Fuels Sign Memorandum
                      of Understanding for Sustainable Aviation Fuel
                    </h2>
                  </div>
                </div>
              </div>
            </section>
            <section className="module news-detail-image">
              <div className="module-wrapper pt-xs">
                <div className="grid-row">
                  <div className="grid-col-width-8 grid-col-start-3">
                    <img
                      sizes="(max-width: 108.9375rem) 100vw, 103rem"
                      srcSet="https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/hero/SIA-Image.jpg?w=750&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1738256120&amp;s=e6c9ba1171893dc80802f49859cd2a2a 750w,
                                                https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/hero/SIA-Image.jpg?w=2039&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1738256120&amp;s=4ad4911dc8177e83dd7af949d38c89e5 2039w,
                                                https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/hero/SIA-Image.jpg?w=2347&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1738256120&amp;s=7bc32f8fc7a669d14e13804d54993a29 2347w,
                                                https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/hero/SIA-Image.jpg?w=2620&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1738256120&amp;s=ce57554f92384e85b33a1a8814c82649 2620w,
                                                https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/hero/SIA-Image.jpg?w=3067&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1738256120&amp;s=dfdbc5f321db0fbae45fc2208db8a920 3067w"
                      src="https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/hero/SIA-Image.jpg?w=750&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1738256120&amp;s=e6c9ba1171893dc80802f49859cd2a2a"
                      height="436"
                      width="750"
                      alt="Singapore Airlines aircraft"
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="module news-detail">
              <div className="module-wrapper pt-sm pb-sm">
                <div className="grid-row">
                  <div className="grid-col-width-6 grid-col-start-3">
                    <p>
                      The Singapore Airlines (SIA) Group has signed a Memorandum
                      of Understanding (MoU) to potentially source neat
                      sustainable aviation fuel (SAF) from&nbsp;
                      <a href="http://www.aetherfuels.com">Aether Fuels</a>{" "}
                      (Aether), a climate technology firm that plans to set up
                      SAF production plants in the United States of America and
                      South East Asia.
                    </p>
                    <p>
                      The agreement outlines the SIA Group’s intention to
                      procure neat SAF for five years when Aether plants begin
                      commercial production, with an option for a five-year
                      extension. The neat SAF will be blended with regular jet
                      fuel before being supplied to selected airports served by
                      Singapore Airlines and Scoot.
                    </p>
                    <p>
                      Aether will use waste carbon feedstock to produce the
                      fuel, employing its innovative and proprietary&nbsp;
                      <a href="https://aetherfuels.com/technology">
                        Aether AuroraTM
                      </a>{" "}
                      technology. This method reduces plant capital cost,
                      increases production efficiency and achieves higher SAF
                      yields compared to existing techniques. &nbsp;
                    </p>
                    <p>
                      Ms Lee Wen Fen, Chief Sustainability Officer, Singapore
                      Airlines, said: “This partnership marks another
                      step&nbsp;in the SIA Group’s journey towards our long-term
                      decarbonisation goal of net zero carbon emissions by 2050.
                      By collaborating with like-minded ecosystem partners such
                      as Aether, we aim to accelerate and scale up the adoption
                      of SAF in our flight operations, laying the groundwork for
                      more sustainable air travel.”&nbsp;&nbsp;
                    </p>
                    <p>
                      Aether was incubated and funded in 2022 by Xora, a deep
                      tech venture firm backed by Temasek. Since then, it has
                      grown its South East Asia team while expanding its
                      operations in Chicago, where its research and development
                      hub is located. Aether’s upcoming commercial-scale
                      production projects in the United States of America and
                      South East Asia will produce Carbon Offsetting and
                      Reduction Scheme for International Aviation
                      (CORSIA)-certified SAF. These projects are set to achieve
                      a minimum greenhouse gas reduction of 75%, significantly
                      contributing to the aviation industry’s sustainability
                      efforts.
                    </p>
                    <p>
                      Mr Conor Madigan, Chief Executive Officer, Aether Fuels,
                      said: “We are proud to join the SIA Group’s ecosystem of
                      SAF technology innovators. Their decarbonisation goals are
                      catalysing ingenuity throughout the supply chain and
                      galvanising companies like Aether to develop production
                      solutions that pair breakthrough technologies with
                      next-generation feedstock strategies. The collaboration
                      will deepen our understanding of the end-user customer
                      priorities and of the SAF market, particularly in South
                      East Asia. These advantages will further inform our
                      project development programmes and accelerate our path to
                      commercialisation”.
                    </p>
                    <p>
                      Mr Phil Inagaki, Managing Partner and Chief Investment
                      Officer, Xora; Board Chair, Aether Fuels, said: “It is
                      encouraging to see the SIA Group committing to meaningful
                      sustainability goals and taking concrete steps to advance
                      the adoption of SAF. Singapore has built a supportive
                      environment for deep tech innovation, empowering companies
                      like Aether to amplify the impact of transformative
                      solutions to global challenges. Its Aurora™ breakthrough
                      technology enables the production of SAF with the lowest
                      green premium and most flexible, scalable feedstock. This
                      collaboration with the SIA Group reflects a shared focus
                      and commitment, making it a natural fit that will
                      undoubtedly accelerate SAF innovation and adoption.”
                    </p>
                    <p>
                      <strong>* * *</strong>
                    </p>
                    <p>
                      <strong>For further information, please contact:</strong>
                    </p>
                    <p>Singapore Airlines Public Affairs</p>
                    <p>
                      Tel: (65) 6541-5880 (office
                      hours)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </p>
                    <p>
                      Tel: (65) 9753-2126 (after office
                      hours)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </p>
                    <p>
                      E-mail:&nbsp;
                      <a href="mailto:public_affairs@singaporeair.com.sg">
                        public_affairs@singaporeair.com.sg
                      </a>
                    </p>
                    <p>&nbsp;</p>
                    <p>Scoot Media Relations&nbsp;</p>
                    <p>Tel: (65) 9729-8802</p>
                    <p>E-mail: mediarelations@flyscoot.com</p>
                    <p>&nbsp;</p>
                    <p>Aether Fuels Communications&nbsp;</p>
                    <p>Kelsey Duke; Diffusion PR for Aether Fuels;&nbsp;</p>
                    <p>
                      E-mail:&nbsp;
                      <a href="mailto:AetherFuels@Diffusionpr.com">
                        AetherFuels@Diffusionpr.com
                      </a>
                      &nbsp;
                    </p>
                    <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </p>
                    <p>
                      <strong>About Aether Fuels</strong>
                    </p>
                    <p>
                      Aether Fuls envisions a net-zero world enabled by its
                      breakthrough&nbsp;
                      <a href="https://aetherfuels.com/technology">
                        Aether Aurora
                      </a>{" "}
                      sustainable liquid fuel production technology. We are
                      developing highly scalable solutions that improve the unit
                      economics of producing sustainable fuels for aviation and
                      ocean shipping. Established in 2022 as a spin-out of Xora,
                      a deep-tech early-stage investment platform of Temasek, we
                      maintain principal operations in the U.S. and
                      Singapore.&nbsp;
                    </p>
                    <p>
                      For more information, visit
                      <a href="https://aetherfuels.com/">www.aetherfuels.com</a>
                      or follow us on
                      <a href="https://www.linkedin.com/company/aether-fuels/posts/?feedView=all">
                        LinkedIn
                      </a>
                      .&nbsp;
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      <strong>About Singapore Airlines</strong>
                    </p>
                    <p>
                      The Singapore Airlines (SIA) Group’s history dates to 1947
                      with the maiden flight of Malayan Airways. The airline was
                      later renamed Malaysian Airways and then
                      Malaysia-Singapore Airlines (MSA). In 1972, MSA split into
                      Singapore Airlines and Malaysian Airline System. Initially
                      operating a modest fleet of 10 aircraft to 22 destinations
                      in 18 countries, SIA has since grown to be a world-class
                      international airline group that is committed to the
                      constant enhancement of the three main pillars of its
                      brand promise: Service Excellence, Product Leadership, and
                      Network Connectivity. Singapore Airlines is the world’s
                      most awarded airline.&nbsp;
                    </p>
                    <p>
                      For more information, please visit&nbsp;
                      <a href="http://www.singaporeair.com">
                        http://www.singaporeair.com
                      </a>
                    </p>
                    <p>&nbsp;</p>
                    <p>
                      <strong>About Scoot</strong>
                    </p>
                    <p>
                      Scoot is the low-cost subsidiary of Singapore Airlines.
                      Scoot painted the skies yellow in June 2012 and merged
                      with Tigerair Singapore in July 2017, retaining the Scoot
                      brand for a new chapter of growth. To date, Scoot has
                      carried over 92 million passengers, and operates a modern
                      and efficient fleet of over 50 aircraft, comprising
                      widebody Boeing 787 Dreamliners, single-aisle Airbus A320
                      family aircraft, and the Embraer E190-E2 aircraft. Scoot
                      currently flies to over 70 destinations across 18
                      countries and territories in Asia-Pacific, the Middle East
                      and Europe.&nbsp; &nbsp;
                    </p>
                    <p>
                      Scoot is more than your typical low-cost carrier (LCC).
                      Scoot is passionate about travel, connecting people and
                      cultures, and pushing boundaries. It does so by
                      continually innovating and seeking new opportunities for
                      growth. As a leading and award-winning LCC, Scoot strives
                      to provide its customers with reliable and quality
                      services, customisable and differentiated product
                      offerings, as well as comfortable and seamless travel
                      experiences at great value.
                    </p>
                    <p>For more information, visit FlyScoot.com.&nbsp;</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="module share-email-tools">
              <div className="module-wrapper pt-md pb-lg">
                <div className="grid-row">
                  <div className="grid-col-width-3 grid-col-start-3">
                    <p>Share:</p>
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/sharer/sharer.php?u=https://aetherfuels.com/news-and-press/singapore-airlines-group-and-aether-fuels-sign-memorandum-of-understanding-for-sustainable-aviation-fuel
            "
                        >
                          <span className="visuallyhidden">
                            Share on Facebook
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <g clip-path="url(#facebook-1)">
                              <path
                                fill="#000"
                                d="M22.68 0H1.32A1.32 1.32 0 0 0 0 1.32v21.36A1.32 1.32 0 0 0 1.32 24h11.496v-9.3h-3.12v-3.6h3.12V8.4a4.368 4.368 0 0 1 4.656-4.8c.934-.006 1.868.042 2.796.144v3.24H18.36c-1.512 0-1.8.72-1.8 1.764v2.316h3.6l-.468 3.6H16.56V24h6.12A1.323 1.323 0 0 0 24 22.68V1.32A1.322 1.322 0 0 0 22.68 0Z"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="facebook-1">
                                <path fill="#fff" d="M0 0h24v24H0z"></path>
                              </clipPath>
                            </defs>
                          </svg>{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/sharing/share-offsite/?url=https://aetherfuels.com/news-and-press/singapore-airlines-group-and-aether-fuels-sign-memorandum-of-understanding-for-sustainable-aviation-fuel
            "
                        >
                          <span className="visuallyhidden">
                            Share on LinkedIn
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <g clip-path="url(#linkedin-1)">
                              <path
                                fill="#000"
                                d="M22.225 0H1.775A1.76 1.76 0 0 0 .53.493 1.74 1.74 0 0 0 0 1.716v20.568a1.73 1.73 0 0 0 .53 1.223A1.752 1.752 0 0 0 1.775 24h20.45a1.758 1.758 0 0 0 1.245-.493 1.738 1.738 0 0 0 .53-1.223V1.716a1.728 1.728 0 0 0-.53-1.223A1.753 1.753 0 0 0 22.225 0ZM7.28 20.088H3.658v-10.8H7.28v10.8ZM5.469 7.776c-.5 0-.979-.197-1.332-.548a1.866 1.866 0 0 1 0-2.648 1.89 1.89 0 0 1 1.332-.548 1.906 1.906 0 0 1 1.476.467 1.885 1.885 0 0 1 .633 1.405 1.874 1.874 0 0 1-.633 1.405 1.898 1.898 0 0 1-1.476.467Zm14.873 12.312H16.72v-5.796c0-1.452-.519-2.4-1.835-2.4a2 2 0 0 0-1.136.364 1.98 1.98 0 0 0-.723.944c-.094.282-.135.58-.12.876v6H9.284v-10.8h3.621V10.8a3.611 3.611 0 0 1 1.384-1.352A3.64 3.64 0 0 1 16.177 9c2.415 0 4.165 1.548 4.165 4.872v6.216Z"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="linkedin-1">
                                <path fill="#fff" d="M0 0h24v24H0z"></path>
                              </clipPath>
                            </defs>
                          </svg>{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://x.com/intent/tweet?url=https://aetherfuels.com/news-and-press/singapore-airlines-group-and-aether-fuels-sign-memorandum-of-understanding-for-sustainable-aviation-fuel
            "
                        >
                          <span className="visuallyhidden">Share on X</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="27"
                            height="24"
                            fill="none"
                            viewBox="0 0 27 24"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path
                              fill="#000"
                              d="m.57.039 9.9 13.213L.492 24h2.235l8.706-9.438L18.483 24h7.627L15.67 10.016 24.956 0H22.72l-8.012 8.668L8.236 0H.608L.57.039Zm3.313 1.656h3.505l15.487 20.687h-3.506L3.883 1.695Z"
                            ></path>
                          </svg>{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="grid-col-width-3">
                    <p>
                      <a href="mailto:media@aetherfuels.com">
                        media@aetherfuels.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>
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

export default BlogItem;
