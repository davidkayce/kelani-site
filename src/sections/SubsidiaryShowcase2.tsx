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
const SubsidiaryShowcase2 = ({
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
    <div ref={containerRef} style={{ backgroundColor: themeColor }}>
      <div
        style={{ backgroundColor: themeColor }}
        className="w-full grid grid-cols-1 lg:grid-cols-2 relative"
      >
        <div
          className="lg:border-r-[0.5px] border-[rgba(255,255,255,0.3)]"
          id={type}
        >
          <div className="sticky top-0 overflow-hidden border-b-white border-b lg:border-b-0">
            <div className="relative w-full min-h-[50dvh] lg:h-[50dvh]">
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
              <FadeUpAnimation className="h-full">
                <div className="relative px-[20px] pb-25 lg:px-[48px] py-[54px] text-white flex flex-col items-end justify-end h-full">
                 <a href={`/${type}`}>
                    <h2 className="text-[24px] md:text-[32px] lg:text-[40px] space-grotesk-semibold relative w-fit !text-white">
                      <span>{title}</span>
                    </h2>
                  </a>
                  {/* <p className="mt-[12px] text-[18px] museo-sans leading-[1.5]">
                    {description}
                  </p> */}
                </div>
              </FadeUpAnimation>
            </div>
          </div>
        </div>
        <div className=" text-white flex flex-col justify-end">
          {services?.map((service, index) => (
            <div
              key={index}
              className="w-full relative px-[20px] pt-[55px] xl:px-[40px] h-[280px]  max-lg:h-[420px]"
            >
              <FadeUpAnimation key={index}>
                {/* <h3 className="text-[24px] md:text-[28px] lg:text-[32px] leading-[1.1] space-grotesk-medium md:max-w-[85%] text-white">
                  {service?.title}
                </h3> */}
                <p className="museo-sans mt-[8px] md:max-w-[85%] leading-[1.7] text-[14px] lg:text-[15px]">
                  {service?.paragraphs && service?.paragraphs[0]}
                </p>
                 <button className="flex py-[8px] pr-[12px]  mt-6 items-center space-x-[10px] border-white relative z-10">
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
              </FadeUpAnimation>
            </div>
          ))}
        </div>
      </div>
      {/* {!spotlightLoading &&
        ((spotlightData?.length as number) > 0 || type == "power") && (
          <div
            style={{ backgroundColor: themeColor }}
            className="relative py-[70px]"
          >
            <FadeUpAnimation y={0}>
              <Swiper
                className="md:min-w-[25rem] lg:min-w-[35rem]  static overflow-y-visible flex flex-col-reverse px-[20px] lg:px-[48px]"
                slidesPerView={width > 1024 ? 2.1 : 1}
                spaceBetween={23}
              >
                <div className="flex mb-[20px] md:mb-[31px] pt-[12px] space-x-[12px] md:space-x-[16px] ">
                  <div className="text-[26px] lg:text-[28px] text-white space-grotesk-medium">
                    Spotlight
                  </div>
                  <div className="flex items-center space-x-[12px]">
                    <SlidePrevButton themeColor={accentColor} />
                    <SlideNextButton themeColor={accentColor} />
                  </div>
                  <div className="museo-sans font-light text-[12px] text-[#7c7c7c] space-x-[16px] md:space-x-[32px] flex items-center">
                    <div
                      style={{ backgroundColor: accentColor }}
                      className="text-[12px] md:text-[14px] py-[3px] md:py-[6px] px-[10px] md:px-[20px]  font-normal rounded-[8px] leading-[0.8] md:leading-[1] flex items-center justify-center museo-sans text-white h-[80%] uppercase "
                    >
                      Drag
                    </div>
                  </div>
                </div>
                <div className="cursor-grabbing">
                  {type == "power" && (
                    <SwiperSlide>
                      <a
                        onMouseEnter={() => setPowerCtaHovered(true)}
                        onMouseLeave={() => setPowerCtaHovered(false)}
                        href={"/power?cta_form_open=true"}
                        target="_blank"
                        className="w-full overflow-hidden border-[#D2DADF] flex flex-col cursor-pointer relative h-[60dvh] min-h-[300px] max-h-[600px] lg:min-h-[600px]"
                      >
                        <img
                          src="assets/images/power-plant.png"
                          className="absolu top-0 right-0 left-0 bottom-0 w-full h-full object-cover"
                        />
                        <motion.div
                          animate={{
                            opacity: powerCtaHovered ? 0.8 : 1,
                            transition: { duration: 0.4 },
                          }}
                          style={{
                            backgroundColor: spotlightColor,
                            opacity: 0.4,
                          }}
                          className="w-full h-full top-0 bottom-0 left-0 z-[1] absolute"
                        ></motion.div>
                        <motion.div
                          animate={{
                            opacity: powerCtaHovered ? 1 : 0,
                            transition: {
                              duration: powerCtaHovered ? 0.4 : 0.2,
                            },
                          }}
                          className="w-full h-full inset-0 absolute flex flex-col justify-end py-[40px] md:py-[48px] px-[27px] md:px-[40px] z-10"
                        >
                          <p className="text-white museo-sans text-[13px] md:text-[16px] h-[95px]">
                            Empower your Business with Kelani Power Today.
                            Scalability, Efficiency, and Success at it's peak.
                            Take the next step towards unlocking your full
                            potential today.
                          </p>
                        </motion.div>
                        <div className="w-full h-full absolute top-0 right-0 left-0 bottom-0 text-white bg-opacity-[0.4] py-[40px] md:py-[48px] px-[27px] md:px-[40px] flex flex-col justify-between  ">
                          <p className="text-white text-[32px] md:text-[44px] lg:text-[54px] z-10">
                            {"01"}
                          </p>
                          <motion.h4
                            animate={{
                              y: powerCtaHovered ? -100 : 0,
                              transition: {
                                duration: 0.3,
                                ease: [0.43, 0.13, 0.23, 0.96],
                              },
                            }}
                            className="!text-white space-grotesk-medium text-[26px] md:text-[28px] lg:text-[36px] z-10 leading-[1.1]"
                          >
                            Buy Power Now
                          </motion.h4>
                        </div>
                      </a>
                    </SwiperSlide>
                  )}
                  {spotlightData?.map((item: any, index: number) => (
                    <SwiperSlide key={index}>
                      <SpotlightCard
                        subtext={item["Spotlight Subtext"]}
                        index={`0${type == "power" ? index + 2 : index + 1}`}
                        accentColor={spotlightColor}
                        description={item["Spotlight Description"]}
                        link={item["Spotlight Link"]}
                        image={item["Image Url / Video Thumbnail Url"]}
                        key={index}
                        themeColor={themeColor}
                      />
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
            </FadeUpAnimation>
          </div>
        )}
      {spotlightLoading && (
        <div className="border-t border-[#D2DADF] h-[250px] flex items-center justify-center lg:pr-[56px]">
          <img src="/assets/images/loader.gif" className="w-[25px]" />
        </div>
      )} */}
    </div>
  );
};
export default SubsidiaryShowcase2;
