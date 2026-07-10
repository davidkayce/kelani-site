import { MotionValue, motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SpotlightCard from "../components/SpotlightCard";
import useScreenSize from "../hooks/useScreenSize";
import useScrollPosition from "../hooks/useScrollPosition";
import FadeUpAnimation from "../components/FadeUpAnimation";

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
const SubsidiaryShowcase = ({
  type,
  setScrollTops,
  leftImageScale,
  title,
  description,
  services,
  sectionImage,
  spotlightLoading,
  spotlightData,
}: {
  type: string;
  setScrollTops?: Dispatch<
    SetStateAction<{ engineering: number; power: number; consulting: number }>
  >;
  title: string;
  leftImageScale: MotionValue<number>;
  description: string;
  services: { title: string; paragraphs?: string[] }[];
  spotlightLoading?: boolean;
  sectionImage: string;
  spotlightData?: Record<string, string>;
}) => {
  const containerRef = useRef(null);
  const themeColor =
    type == "engineering" ? "#E36E1B" : type == "power" ? "#069E7D" : "#79188C";
  const accentColor =
    type == "engineering" ? "#E98B49" : type == "power" ? "#38B197" : "#9446A3";
  const spotlightColor =
    type == "engineering" ? "#4a2a15" : type == "power" ? "#0E3738" : "#231937";
  const { y } = useScrollPosition();
  const [powerCtaHovered, setPowerCtaHovered] = useState(false);

  useEffect(() => {
    if (containerRef.current && setScrollTops) {
      switch (type) {
        case "engineering":
          setScrollTops((prev) => ({
            ...prev,
            engineering:
              (containerRef.current as any)?.offsetTop - window.innerHeight,
          }));
          break;
        case "power":
          setScrollTops((prev) => ({
            ...prev,
            power:
              (containerRef.current as any)?.offsetTop - window.innerHeight,
          }));
          break;
        case "consulting":
          setScrollTops((prev) => ({
            ...prev,
            consulting:
              (containerRef.current as any)?.offsetTop - window.innerHeight,
          }));
          break;
      }
    }
  }, [containerRef.current, y]);
  const { width } = useScreenSize();
  const [sectionReadMoreHovered, setSectionReadMoreHovered] = useState(false);
  return (
    <div ref={containerRef}>
      <div
        className="w-full grid grid-cols-1 lg:grid-cols-2 relative"
      >
        <div
          className="lg:border-r-[0.5px] border-[rgba(255,255,255,0.3)]"
          id={type}

        style={{ backgroundColor: themeColor }}
        >
          <div className="sticky top-0 overflow-hidden border-b-white border-b lg:border-b-0" 
        >
            <div className="relative w-full min-h-[60dvh] lg:h-[100dvh]">
              <figure className="overflow-hidden absolute top-0 right-0 left-0 bottom-0">
                <motion.div
                  className="h-full w-full"
                  style={{ scale: leftImageScale }}
                >
                  <LazyLoadImage
                    width={"100%"}
                    height={"100%"}
                    effect="blur"
                    wrapperClassName="lazyLoadImageContainer "
                    src={sectionImage}
                  />
                </motion.div>
              </figure>
              <FadeUpAnimation>
                <div className="relative px-[20px] lg:px-[48px] py-[54px] text-white">
                  <a href={`/${type}`}>
                    <h2 className="text-[45px] md:text-[56px] lg:text-[60px] space-grotesk-semibold relative w-fit text-white">
                      <span>{title}</span>
                    </h2>
                  </a>
                  <p className="mt-[12px] text-[18px] museo-sans leading-[1.5]">
                    {description}
                  </p>
                  <a
                    href={`/${type}`}
                    onMouseEnter={() => setSectionReadMoreHovered(true)}
                    onMouseLeave={() => setSectionReadMoreHovered(false)}
                    className="relative block w-fit overflow-hidden mt-[32px] cursor-pointer px-[5px]"
                  >
                    <button className="flex py-[8px] pr-[12px] items-center space-x-[10px] border-white relative z-10">
                      <motion.svg
                        animate={{
                          x: sectionReadMoreHovered ? 5 : 0,
                          transition: {
                            duration: 0.3,
                            ease: [0.43, 0.13, 0.23, 0.96],
                          },
                        }}
                        width="11"
                        height="12"
                        viewBox="0 0 11 12"
                        fill={sectionReadMoreHovered ? themeColor : "white"}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.64605 6.36485L6.5523 9.4586C6.45544 9.55547 6.32406 9.60989 6.18707 9.60989C6.05008 9.60989 5.9187 9.55547 5.82184 9.4586C5.72497 9.36173 5.67055 9.23036 5.67055 9.09337C5.67055 8.95638 5.72497 8.825 5.82184 8.72813L8.03516 6.51567H1.71875C1.582 6.51567 1.45085 6.46135 1.35415 6.36465C1.25745 6.26795 1.20312 6.1368 1.20312 6.00005C1.20312 5.86329 1.25745 5.73214 1.35415 5.63544C1.45085 5.53874 1.582 5.48442 1.71875 5.48442H8.03516L5.82269 3.27067C5.72583 3.1738 5.67141 3.04242 5.67141 2.90544C5.67141 2.76845 5.72583 2.63707 5.82269 2.5402C5.91956 2.44333 6.05094 2.38892 6.18793 2.38892C6.32492 2.38892 6.4563 2.44333 6.55316 2.5402L9.64691 5.63395C9.69499 5.68192 9.73312 5.73891 9.75911 5.80166C9.7851 5.8644 9.79844 5.93166 9.79836 5.99958C9.79828 6.06749 9.78478 6.13472 9.75864 6.19741C9.73251 6.26009 9.69425 6.317 9.64605 6.36485Z"
                          fill={sectionReadMoreHovered ? themeColor : "white"}
                        />
                      </motion.svg>
                      <p
                        style={{
                          color: sectionReadMoreHovered ? themeColor : "white",
                          transition: "color 0.3s",
                        }}
                        className="uppercase "
                      >
                        Read More
                      </p>
                    </button>
                    <motion.div
                      animate={{
                        y: sectionReadMoreHovered ? "-99%" : 0,
                        transition: sectionReadMoreHovered
                          ? {
                              duration: 0.3,
                              ease: [0.43, 0.13, 0.23, 0.96],
                            }
                          : {
                              duration: 0.1,
                              ease: [0.43, 0.13, 0.23, 0.96],
                            },
                      }}
                      className=" h-full bg-white absolute right-0 -bottom-[calc(100%-1px)] left-0"
                    ></motion.div>
                  </a>
                </div>
              </FadeUpAnimation>
            </div>
          </div>
        </div>
        <div
          className="lg:border-r-[0.5px] border-[rgba(255,255,255,0.3)]"
          id={'energy'}

        style={{ backgroundColor: "rgb(6, 158, 125)" }}
        >
          <div className="sticky top-0 overflow-hidden border-b-white border-b lg:border-b-0">
            <div className="relative w-full min-h-[60dvh] lg:h-[100dvh]">
              <figure className="overflow-hidden absolute top-0 right-0 left-0 bottom-0">
                <motion.div
                  className="h-full w-full"
                  style={{ scale: leftImageScale }}
                >
                  <LazyLoadImage
                    width={"100%"}
                    height={"100%"}
                    effect="blur"
                    wrapperClassName="lazyLoadImageContainer "
                    src={'/assets/images/energy.webp'}
                  />
                </motion.div>
              </figure>
              <FadeUpAnimation>
                <div className="relative px-[20px] lg:px-[48px] py-[54px] text-white">
                  <a href={`/energy`}>
                    <h2 className="text-[45px] md:text-[56px] lg:text-[60px] space-grotesk-semibold relative w-fit text-white">
                      <span>{"Energy"}</span>
                    </h2>
                  </a>
                  <p className="mt-[12px] text-[18px] museo-sans leading-[1.5]">
                    {"Kelani Energy delivers innovative energy solutions to optimize performance and boost productivity. Let us power your path to sustainable success."}
                  </p>
                  <a
                    href={`/energy`}
                    onMouseEnter={() => setSectionReadMoreHovered(true)}
                    onMouseLeave={() => setSectionReadMoreHovered(false)}
                    className="relative block w-fit overflow-hidden mt-[32px] cursor-pointer px-[5px]"
                  >
                    <button className="flex py-[8px] pr-[12px] items-center space-x-[10px] border-white relative z-10">
                      <motion.svg
                        animate={{
                          x: sectionReadMoreHovered ? 5 : 0,
                          transition: {
                            duration: 0.3,
                            ease: [0.43, 0.13, 0.23, 0.96],
                          },
                        }}
                        width="11"
                        height="12"
                        viewBox="0 0 11 12"
                        fill={sectionReadMoreHovered ? themeColor : "white"}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.64605 6.36485L6.5523 9.4586C6.45544 9.55547 6.32406 9.60989 6.18707 9.60989C6.05008 9.60989 5.9187 9.55547 5.82184 9.4586C5.72497 9.36173 5.67055 9.23036 5.67055 9.09337C5.67055 8.95638 5.72497 8.825 5.82184 8.72813L8.03516 6.51567H1.71875C1.582 6.51567 1.45085 6.46135 1.35415 6.36465C1.25745 6.26795 1.20312 6.1368 1.20312 6.00005C1.20312 5.86329 1.25745 5.73214 1.35415 5.63544C1.45085 5.53874 1.582 5.48442 1.71875 5.48442H8.03516L5.82269 3.27067C5.72583 3.1738 5.67141 3.04242 5.67141 2.90544C5.67141 2.76845 5.72583 2.63707 5.82269 2.5402C5.91956 2.44333 6.05094 2.38892 6.18793 2.38892C6.32492 2.38892 6.4563 2.44333 6.55316 2.5402L9.64691 5.63395C9.69499 5.68192 9.73312 5.73891 9.75911 5.80166C9.7851 5.8644 9.79844 5.93166 9.79836 5.99958C9.79828 6.06749 9.78478 6.13472 9.75864 6.19741C9.73251 6.26009 9.69425 6.317 9.64605 6.36485Z"
                          fill={sectionReadMoreHovered ? themeColor : "white"}
                        />
                      </motion.svg>
                      <p
                        style={{
                          color: sectionReadMoreHovered ? themeColor : "white",
                          transition: "color 0.3s",
                        }}
                        className="uppercase "
                      >
                        Read More
                      </p>
                    </button>
                    <motion.div
                      animate={{
                        y: sectionReadMoreHovered ? "-99%" : 0,
                        transition: sectionReadMoreHovered
                          ? {
                              duration: 0.3,
                              ease: [0.43, 0.13, 0.23, 0.96],
                            }
                          : {
                              duration: 0.1,
                              ease: [0.43, 0.13, 0.23, 0.96],
                            },
                      }}
                      className=" h-full bg-white absolute right-0 -bottom-[calc(100%-1px)] left-0"
                    ></motion.div>
                  </a>
                </div>
              </FadeUpAnimation>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <Container className="pb-[80px]  bg-[#FEFEFE]">
    //   <section className={type} ref={containerRef}>
    //     <motion.figure
    //       onMouseEnter={() => setSubsidiaryImageLinkHovered(true)}
    //       onMouseLeave={() => setSubsidiaryImageLinkHovered(false)}
    //       onClick={() => navigate(`/${type}`)}
    //       // animate={{
    //       //   opacity: sectionDecimalScroll.get() > 0 ? 1 : 0,
    //       //   scale: sectionDecimalScroll.get() > 0 ? 1 : 0.9,
    //       //   y: sectionDecimalScroll.get() > 0 ? 0 : 50,
    //       //   transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
    //       // }}
    //       className="w-full h-[268px] relative overflow-hidden rounded-tr-[24px] rounded-bl-[28px]  lg:rounded-tr-[32px] lg:rounded-bl-[32px] lg:rounded-br-[32px] cursor-pointer"
    //     >
    //       <div className="top-0 left-0 absolute z-20">
    //         <h1 className="bg-[#FEFEFE] text-[26px] leading-[38.9px] md:text-[45px] lg:text-[43.2px] md:leading-[50.5px] px-[20px] lg:px-[24px] pt-[4px] lg:pt-[8px] pb-[8px] lg:pb-[16px] relative rounded-br-[23px] lg:rounded-br-[32px] font-semibold w-fit">
    //           {title}
    //           <img
    //             src="/assets/images/curved-fill-tl.svg"
    //             className="w-[26px] h-[26px] md:w-[36px] md:h-[36px] absolute -right-[26px] md:-right-[36px] rotate-90 -top-[1px] md:top-0"
    //           />
    //           <img
    //             src="/assets/images/curved-fill-tl.svg"
    //             className="w-[26px] h-[26px] md:w-[36px] md:h-[36px] absolute left-0 rotate-90 -bottom-[26px] md:-bottom-[36px]"
    //           />
    //         </h1>
    //       </div>
    //       <motion.div
    //         animate={{ opacity: subsidiaryImageLinkHovered ? 1 : 0 }}
    //         className="top-0 right-0 left-0 bottom-0 absolute z-10"
    //       >
    //         <div className="relative w-full h-full">
    //           <div className="bg-black w-full h-full opacity-60  rounded-bl-[28px] flex items-center justify-center text-white text-[20px]"></div>
    //           <p className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center text-[20px] text-white">
    //             Know More
    //           </p>
    //         </div>
    //       </motion.div>
    //       <motion.img
    //         style={{ scale }}
    //         className="w-full object-cover h-full rounded-tr-[24px] rounded-bl-[28px]  lg:rounded-tr-[32px] lg:rounded-bl-[32px] "
    //         src={bgImage}
    //       />
    //       {/* <figure className="w-full object-cover h-full rounded-tr-[24px] rounded-bl-[28px]  lg:rounded-tr-[32px] lg:rounded-bl-[32px] overflow-hidden">
    //         <LazyLoadImage
    //           width={"100%"}
    //           height={"100vh"}
    //           effect="blur"
    //           wrapperClassName="lazyLoadImageContainer"
    //           src={bgImage}
    //         />
    //       </figure> */}
    //       <motion.div className="bottom-0 -right-[1px] md:right-0 absolute z-20">
    //         <div className="relative w-[48px] h-[48px] rounded-tl-[32px] bg-[#FEFEFE] flex items-center justify-center p-[8px]">
    //           <img
    //             src="/assets/images/curved-fill-tl.svg"
    //             className="w-[24px] h-[24px] absolute -right-0 -top-[23px] rotate-[270deg]"
    //           />
    //           <img
    //             src="/assets/images/curved-fill-tl.svg"
    //             className="w-[24px] h-[24px] absolute -left-[23px] rotate-[270deg] -bottom-[0px]"
    //           />
    //           <img src="/assets/images/icon-subsidiary-link.svg" className="" />
    //         </div>
    //       </motion.div>
    //     </motion.figure>
    //     <div className="mt-[20px] md:mt-[40px] flex flex-col lg:grid grid-cols-[55%_45%] border-[#D2DADF] border-t">
    //       <div className="pt-[20px] md:pt-[40px]  border-[#D2DADF] lg:border-r  pb-0">
    //         <div className="lg:pr-[56px] pb-[20px] lg:pb-[40px]">
    //           <p className="text-[21px] leading-[31.7px] tracking-[-0.432px] lg:text-[32px] lg:leading-[36.24px] tracking--[0.432px]">
    //             {description}
    //           </p>
    //           <div className="flex gap-[23px] mt-[23px] lg:mt-[40px] ">
    //             <motion.button
    //               whileHover={{ scale: 1.05 }}
    //               whileTap={{ scale: 0.95 }}
    //               style={{ backgroundColor: themeColor }}
    //               className="flex items-center py-[12px] px-[24px]  text-[17.28px] text-white rounded-full leading-[26px]"
    //             >
    //               Know More
    //             </motion.button>
    //             <motion.button
    //               whileHover={{ scale: 1.05 }}
    //               whileTap={{ scale: 0.95 }}
    //               className="py-[12px] px-[24px] text-[17.28px] text-[#222222] border border-[#D2DADF] rounded-full leading-[26px]"
    //             >
    //               Contact Us
    //             </motion.button>
    //           </div>
    //         </div>
    //         <div className="lg:hidden pb-[20px]">
    //           {services?.map((service, index) => (
    //             <TextGroup
    //               key={index}
    //               themeColor={themeColor}
    //               title={service.title}
    //               paragraphs={service.paragraphs}
    //             />
    //           ))}
    //         </div>
    //         {/* @ts-ignore */}
    //         {!spotlightLoading && spotlightData?.length > 0 && (
    //           <div className="border-t border-[#D2DADF] lg:pr-[56px] pt-[40px] font-semibold pb-[129px] relative">
    //             <h3 className="text-[14px] mb-[14px] lg:mb-[20px] font-semibold">
    //               SPOTLIGHT
    //             </h3>
    //             <Swiper
    //               className="static overflow-y-visible px-[2px]"
    //               slidesPerView={width > 768 ? 2 : 1}
    //               spaceBetween={23}
    //             >
    //               {/* @ts-ignore */}
    //               {spotlightData?.map((item: any, index: number) => (
    //                 <SwiperSlide>
    //                   <SpotlightCard
    //                     description={item["Spotlight Description"]}
    //                     link={item["Spotlight Link"]}
    //                     image={item["Image Url / Video Thumbnail Url"]}
    //                     key={index}
    //                   />
    //                 </SwiperSlide>
    //               ))}
    //               <div className="absolute bottom-[23px] flex items-center gap-[40px] z-10 w-full lg:pr-[46px]">
    //                 <p>01 - 0{spotlightData?.length}</p>
    //                 <div className="flex-grow h-[1px] bg-[#D2DADF]"></div>
    //                 <div className="gap-[9px] flex">
    //                   <SlidePrevButton themeColor={themeColor} />
    //                   <SlideNextButton themeColor={themeColor} />
    //                 </div>
    //               </div>
    //             </Swiper>
    //           </div>
    //         )}
    //         {spotlightLoading && (
    //           <div className="border-t border-[#D2DADF] h-[250px] flex items-center justify-center lg:pr-[56px]">
    //             <img src="/assets/images/loader.gif" className="w-[25px]" />
    //           </div>
    //         )}
    //       </div>
    //       <div className="hidden lg:block">

    //         {services?.map((service) => (
    //           <TextGroup
    //             themeColor={themeColor}
    //             title={service.title}
    //             paragraphs={service.paragraphs}
    //           />
    //         ))}

    //       </div>
    //     </div>
    //   </section>
    // </Container>
  );
};
export default SubsidiaryShowcase;
