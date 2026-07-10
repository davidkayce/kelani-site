import { MotionValue, motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import useScrollPosition from "../hooks/useScrollPosition";
import FadeUpAnimation from "../components/FadeUpAnimation";

const SubsidiaryShowcase2 = ({
  type,
  setScrollTops,
  leftImageScale,
  title,
  services,
  sectionImage,
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
  const { y } = useScrollPosition();

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
                 <button
                      onMouseEnter={() => setSectionReadMoreHovered(true)}
                      onMouseLeave={() => setSectionReadMoreHovered(false)}
                      className="flex py-[8px] pr-[12px]  mt-6 items-center space-x-[10px] border-white relative z-10">
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
    </div>
  );
};
export default SubsidiaryShowcase2;
