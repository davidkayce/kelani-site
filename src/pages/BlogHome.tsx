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
const BlogHome = ({ lenis }: { lenis: Lenis }) => {
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
                  <h2>News</h2>
                  <h3>
                    The latest on our advancements in sustainable fuel
                    technology
                  </h3>
                </div>
                <div className="sub-page-hero__body grid-col-width-4 grid-col-start-9 column-border-md">
                  <p>
                    <strong>For media inquiries</strong> or further information,
                    please contact our dedicated Public Relations team at:
                  </p>
                  <p>
                    <a href="mailto:media@aetherfuels.com">
                      media@aetherfuels.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="module news">
            <div className="module-wrapper pt-sm pb-xs">
              <div className="grid-row">
                <div className="grid-col-width-3 column-border-sm">
                  <h3 className="line-clamp-4">
                    <a href="https://aetherfuels.com/news-and-press/singapore-airlines-group-and-aether-fuels-sign-memorandum-of-understanding-for-sustainable-aviation-fuel">
                      Singapore Airlines Group and Aether Fuels Sign Memorandum
                      of Understanding for Sustainable Aviation Fuel
                    </a>
                  </h3>
                  <a
                    href="https://aetherfuels.com/news-and-press/singapore-airlines-group-and-aether-fuels-sign-memorandum-of-understanding-for-sustainable-aviation-fuel"
                    className="news__img"
                    tabIndex={-1}
                  >
                    <img
                      sizes="(max-width: 59.9375rem) 100vw, 18vw"
                      srcSet="https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/SIA-Image.jpg?w=750&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1738256116&amp;s=aff6597ebc07bb12b4a64ee84ee32241 750w,
                                            https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/SIA-Image.jpg?w=1065&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1738256116&amp;s=d15953efafbd6a8271f03de591cb5ae4 1065w,
                                            https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/SIA-Image.jpg?w=1335&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1738256116&amp;s=e0459b98103cf2176187991804b20150 1335w,
                                            https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/SIA-Image.jpg?w=1572&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1738256116&amp;s=b00f2a000ff96058b76039f67dff3c31 1572w"
                      src="https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/SIA-Image.jpg?w=750&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1738256116&amp;s=aff6597ebc07bb12b4a64ee84ee32241"
                      alt="Singapore Airlines Group and Aether Fuels Sign Memorandum of Understanding for Sustainable Aviation Fuel"
                      height="436"
                      width="750"
                    />
                  </a>
                  <time>February 3, 2025</time>
                </div>
                <div className="grid-col-width-3 column-border-sm">
                  <h3 className="line-clamp-4">
                    <a href="https://aetherfuels.com/news-and-press/capping-a-year-of-steady-team-growth-with-new-appointments">
                      Capping a Year of Steady Team Growth with New Appointments
                    </a>
                  </h3>
                  <a
                    href="https://aetherfuels.com/news-and-press/capping-a-year-of-steady-team-growth-with-new-appointments"
                    className="news__img"
                    tabIndex={-1}
                  >
                    <img
                      sizes="(max-width: 59.9375rem) 100vw, 18vw"
                      srcSet="https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/Screenshot-2024-12-30-115925.png?w=750&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1735582125&amp;s=d16e26006c0621e933e80c9d6b17d135 750w,
                                            https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/Screenshot-2024-12-30-115925.png?w=1065&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1735582125&amp;s=ea1c1d342588ba75cba1e7c1f071c869 1065w,
                                            https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/Screenshot-2024-12-30-115925.png?w=1335&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1735582125&amp;s=3b7408a16ff2337d7c587176bcbb3402 1335w,
                                            https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/Screenshot-2024-12-30-115925.png?w=1572&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1735582125&amp;s=2c2c1a7ed6a80a843e49806177f8e6db 1572w"
                      src="https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/Screenshot-2024-12-30-115925.png?w=750&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1735582125&amp;s=d16e26006c0621e933e80c9d6b17d135"
                      alt="Capping a Year of Steady Team Growth with New Appointments"
                      height="383"
                      width="750"
                    />
                  </a>
                  <time>December 30, 2024</time>
                </div>
                <div className="grid-col-width-3 column-border-sm">
                  <h3 className="line-clamp-4">
                    <a href="https://aetherfuels.com/news-and-press/aether-fuels-welcomes-additional-investors-to-series-a-syndicate">
                      Aether Fuels Welcomes Eni Next to Series A Syndicate
                    </a>
                  </h3>
                  <a
                    href="https://aetherfuels.com/news-and-press/aether-fuels-welcomes-additional-investors-to-series-a-syndicate"
                    className="news__img"
                    tabIndex={-1}
                  >
                    <img
                      sizes="(max-width: 59.9375rem) 100vw, 18vw"
                      srcSet="https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/eni-high-res-logo-1572.jpg?w=750&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1728518146&amp;s=9ddc6902364f58ba309c1df3ee6ee233 750w,
                                            https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/eni-high-res-logo-1572.jpg?w=1065&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1728518146&amp;s=91e92a7b9e0c65d724e831c00c5cc782 1065w,
                                            https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/eni-high-res-logo-1572.jpg?w=1335&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1728518146&amp;s=f1ec631f2978767d11e88250b1a4d19b 1335w,
                                            https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/eni-high-res-logo-1572.jpg?w=1572&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1728518146&amp;s=143aa8b0d548cc44f27b8488b677861d 1572w"
                      src="https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/eni-high-res-logo-1572.jpg?w=750&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1728518146&amp;s=9ddc6902364f58ba309c1df3ee6ee233"
                      alt="Aether Fuels Welcomes Eni Next to Series A Syndicate"
                      height="591"
                      width="750"
                    />
                  </a>
                  <time>September 26, 2024</time>
                </div>
                <div className="grid-col-width-3 column-border-sm">
                  <h3 className="line-clamp-4">
                    <a href="https://aetherfuels.com/news-and-press/aether-fuels-signs-mou-with-jetblue">
                      Aether Fuels Signs MOU with JetBlue
                    </a>
                  </h3>
                  <a
                    href="https://aetherfuels.com/news-and-press/aether-fuels-signs-mou-with-jetblue"
                    className="news__img"
                    tabIndex={-1}
                  >
                    <img
                      sizes="(max-width: 59.9375rem) 100vw, 18vw"
                      srcSet="https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/JetBlue-A321-Balloon-Livery-FINAL-2-News-Card.jpg?w=750&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1727124550&amp;s=1624acd2fcc75b2ce18c92fb973bd287 750w,
                                            https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/JetBlue-A321-Balloon-Livery-FINAL-2-News-Card.jpg?w=1065&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1727124550&amp;s=72b0147ec221db4653c78af02afb4dff 1065w,
                                            https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/JetBlue-A321-Balloon-Livery-FINAL-2-News-Card.jpg?w=1335&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1727124550&amp;s=141be60dc50fed48b77907a7e0138c7f 1335w,
                                            https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/JetBlue-A321-Balloon-Livery-FINAL-2-News-Card.jpg?w=1572&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1727124550&amp;s=56d85439bb736830b6e729bc7013adf6 1572w"
                      src="https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/JetBlue-A321-Balloon-Livery-FINAL-2-News-Card.jpg?w=750&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1727124550&amp;s=1624acd2fcc75b2ce18c92fb973bd287"
                      alt="Aether Fuels Signs MOU with JetBlue"
                      height="580"
                      width="750"
                    />
                  </a>
                  <time>September 23, 2024</time>
                </div>
              </div>
            </div>
          </section>
          <section className="module news">
            <div className="module-wrapper pt-xs pb-xs">
              <div className="grid-row">
                <div className="grid-col-width-3 column-border-sm">
                  <h3 className="line-clamp-4">
                    <a href="https://aetherfuels.com/news-and-press/aether-fuels-secures-34-million-in-series-a-financing">
                      Aether Fuels Secures $34 Million in Series A Financing
                    </a>
                  </h3>
                  <a
                    href="https://aetherfuels.com/news-and-press/aether-fuels-secures-34-million-in-series-a-financing"
                    className="news__img"
                    tabIndex={-1}
                  >
                    <img
                      sizes="(max-width: 59.9375rem) 100vw, 18vw"
                      srcSet="https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-fuels-secures-34-million.webp?w=750&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1721090377&amp;s=9bffe8b84c1610bb51eda26e919daafc 750w,
                                            https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-fuels-secures-34-million.webp?w=1065&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1721090377&amp;s=1335eb2dd77b9679a423ba4ef6ddb168 1065w,
                                            https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-fuels-secures-34-million.webp?w=1335&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1721090377&amp;s=2b0a3a893ed42ea36658459581635039 1335w,
                                            https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-fuels-secures-34-million.webp?w=1572&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1721090377&amp;s=f98d5383f1468fbfc9f18161043aa179 1572w"
                      src="https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-fuels-secures-34-million.webp?w=750&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1721090377&amp;s=9bffe8b84c1610bb51eda26e919daafc"
                      alt="Aether Fuels Secures $34 Million in Series A Financing"
                      height="416"
                      width="750"
                    />
                  </a>
                  <time>June 27, 2024</time>
                </div>
                <div className="grid-col-width-3 column-border-sm">
                  <h3 className="line-clamp-4">
                    <a href="https://aetherfuels.com/news-and-press/aether-expands-research-and-development-organization-appoints-technology-experts-to-key-leadership-roles">
                      Aether Expands Research and Development Organization;
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
                      srcSet="https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-expands-research.webp?w=750&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1721078765&amp;s=a4d9c4f129702b6aad3881c69ce6d014 750w,
                                            https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-expands-research.webp?w=1065&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1721078765&amp;s=ecedd3d67e4c043324c91605dc33c583 1065w,
                                            https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-expands-research.webp?w=1335&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1721078765&amp;s=a15728b17bcee9fae0abaf1ce6bc30c3 1335w,
                                            https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-expands-research.webp?w=1572&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1721078765&amp;s=da21d3fdbdcf020df14f7b77a3dea1e2 1572w"
                      src="https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-expands-research.webp?w=750&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1721078765&amp;s=a4d9c4f129702b6aad3881c69ce6d014"
                      alt="Aether Expands Research and Development Organization; Appoints Technology Experts to Key Leadership Roles"
                      height="416"
                      width="750"
                    />
                  </a>
                  <time>March 11, 2024</time>
                </div>
                <div className="grid-col-width-3 column-border-sm">
                  <h3 className="line-clamp-4">
                    <a href="https://aetherfuels.com/news-and-press/aether-fuels-and-gti-energy-announce-partnership-and-exclusive-licensing-deal">
                      Aether Fuels and GTI Energy Announce Partnership and
                      Exclusive Licensing Deal to Accelerate Commercialization
                      of Sustainable Fuels for Aviation and Ocean Shipping
                    </a>
                  </h3>
                  <a
                    href="https://aetherfuels.com/news-and-press/aether-fuels-and-gti-energy-announce-partnership-and-exclusive-licensing-deal"
                    className="news__img"
                    tabIndex={-1}
                  >
                    <img
                      sizes="(max-width: 59.9375rem) 100vw, 18vw"
                      srcSet="https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-fuels-and-gti-energy.webp?w=750&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1721078990&amp;s=6f80d881df6492a1d120c2dd4c9984f3 750w,
                                            https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-fuels-and-gti-energy.webp?w=1065&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1721078990&amp;s=9dcd3f9fa1e544bcfa2f90bc35e1cd3d 1065w,
                                            https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-fuels-and-gti-energy.webp?w=1335&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1721078990&amp;s=5caaca3aa2c89ec9a820fb351acd1c40 1335w,
                                            https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-fuels-and-gti-energy.webp?w=1572&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1721078990&amp;s=ea91e533acaa96f462bc3f638154c20a 1572w"
                      src="https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-fuels-and-gti-energy.webp?w=750&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1721078990&amp;s=6f80d881df6492a1d120c2dd4c9984f3"
                      alt="Aether Fuels and GTI Energy Announce Partnership and Exclusive Licensing Deal to Accelerate Commercialization of Sustainable Fuels for Aviation and Ocean Shipping"
                      height="416"
                      width="750"
                    />
                  </a>
                  <time>February 5, 2024</time>
                </div>
                <div className="grid-col-width-3 column-border-sm">
                  <h3 className="line-clamp-4">
                    <a href="https://aetherfuels.com/news-and-press/aether-fuels-raises-us-8-5-million-to-develop-sustainable-fuels-for-aviation-and-ocean-shipping">
                      Aether Fuels Raises US$8.5 Million to Develop Sustainable
                      Fuels for Aviation and Ocean Shipping
                    </a>
                  </h3>
                  <a
                    href="https://aetherfuels.com/news-and-press/aether-fuels-raises-us-8-5-million-to-develop-sustainable-fuels-for-aviation-and-ocean-shipping"
                    className="news__img"
                    tabIndex={-1}
                  >
                    <img
                      sizes="(max-width: 59.9375rem) 100vw, 18vw"
                      srcSet="https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-fuels-raises.webp?w=750&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1721090234&amp;s=611610dac3ed53d75e13cbcc8d957df7 750w,
                                            https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-fuels-raises.webp?w=1065&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1721090234&amp;s=e4e314eecbfba0043f1f12792d439d60 1065w,
                                            https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-fuels-raises.webp?w=1335&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1721090234&amp;s=3b55976eed942ffdf635f34c95124b2c 1335w,
                                            https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-fuels-raises.webp?w=1572&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1721090234&amp;s=595d321004801d12bb815f92494c327d 1572w"
                      src="https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-fuels-raises.webp?w=750&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1721090234&amp;s=611610dac3ed53d75e13cbcc8d957df7"
                      alt="Aether Fuels Raises US$8.5 Million to Develop Sustainable Fuels for Aviation and Ocean Shipping"
                      height="416"
                      width="750"
                    />
                  </a>
                  <time>December 14, 2023</time>
                </div>
              </div>
            </div>
          </section>
          <section className="module news">
            <div className="module-wrapper pt-xs pb-lg">
              <div className="grid-row">
                <div className="grid-col-width-3 column-border-sm">
                  <h3 className="line-clamp-4">
                    <a href="https://aetherfuels.com/news-and-press/aether-names-claudio-bertelli-as-vp-of-business-development">
                      Aether Names Claudio Bertelli as VP of Business
                      Development
                    </a>
                  </h3>
                  <a
                    href="https://aetherfuels.com/news-and-press/aether-names-claudio-bertelli-as-vp-of-business-development"
                    className="news__img"
                    tabIndex={-1}
                  >
                    <img
                      sizes="(max-width: 59.9375rem) 100vw, 18vw"
                      srcSet="https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-names-claudio-bertelli.webp?w=750&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1721091503&amp;s=d02f26650cee341966c1c6647b8961eb 750w,
                                            https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-names-claudio-bertelli.webp?w=1065&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1721091503&amp;s=a44f2c98a4dbd86653ab1084c7449ac5 1065w,
                                            https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-names-claudio-bertelli.webp?w=1335&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1721091503&amp;s=4c93b7e019cf98e431ff41dbad27f24d 1335w,
                                            https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-names-claudio-bertelli.webp?w=1572&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1721091503&amp;s=f883a13817f77623a4ae6852c0b1c352 1572w"
                      src="https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-names-claudio-bertelli.webp?w=750&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1721091503&amp;s=d02f26650cee341966c1c6647b8961eb"
                      alt="Aether Names Claudio Bertelli as VP of Business Development"
                      height="416"
                      width="750"
                    />
                  </a>
                  <time>April 27, 2023</time>
                </div>
                <div className="grid-col-width-3 column-border-sm">
                  <h3 className="line-clamp-4">
                    <a href="https://aetherfuels.com/news-and-press/aether-appoints-commercial-fuel-technology-production-experts">
                      Aether Appoints Commercial Fuel Technology Production
                      Experts
                    </a>
                  </h3>
                  <a
                    href="https://aetherfuels.com/news-and-press/aether-appoints-commercial-fuel-technology-production-experts"
                    className="news__img"
                    tabIndex={-1}
                  >
                    <img
                      sizes="(max-width: 59.9375rem) 100vw, 18vw"
                      srcSet="https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-appoints-commercial-fuel.webp?w=750&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1721078609&amp;s=9daa5ad6f798913a00d20c66f4d8af98 750w,
                                            https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-appoints-commercial-fuel.webp?w=1065&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1721078609&amp;s=6b67d4e326eb9f29d3dcb6b1fb5cb070 1065w,
                                            https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-appoints-commercial-fuel.webp?w=1335&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1721078609&amp;s=b4de46992968cadd59f327c69ea17447 1335w,
                                            https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-appoints-commercial-fuel.webp?w=1572&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1721078609&amp;s=9c7582e43ed6dc40ae0c5ee7560fcec6 1572w"
                      src="https://aether-fuel.transforms.svdcdn.com/production/assets/images/news/card/aether-appoints-commercial-fuel.webp?w=750&amp;q=80&amp;fm=webp&amp;fit=crop&amp;dm=1721078609&amp;s=9daa5ad6f798913a00d20c66f4d8af98"
                      alt="Aether Appoints Commercial Fuel Technology Production Experts"
                      height="416"
                      width="750"
                    />
                  </a>
                  <time>March 6, 2023</time>
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

export default BlogHome;
