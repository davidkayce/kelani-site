/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { Dispatch, SetStateAction, useRef } from "react";
import useScreenSize from "../../../hooks/useScreenSize";

interface ParallexProps {
  header: string;
  subHead: string;
  data: {
    img: string;
    img2: string;
    img3: string;
    content: {
      head: string;
      text: string;
    };
    colors: {
      one: string;
      two: string;
    };
  }[];
}

const ParallaxCards: React.FC<{ data: ParallexProps;  setCtaFormShowing: Dispatch<SetStateAction<boolean>>; }> = ({ data, setCtaFormShowing }) => {
  const { width } = useScreenSize();
  const getValueFromScreenSize = (
    smallDesktop: string | number,
    largeDesktop: string | number
  ) => {
    if (width < 1280) {
      return smallDesktop;
    } else {
      return largeDesktop;
    }
  };
  // const [isHovered, setIsHovered] = useState(false);
  gsap.registerPlugin(ScrollTrigger);
  // const animated = useRef(null);
  const card1leftSide = useRef(null);
  const card2leftSide = useRef(null);
  const card1title = useRef(null);
  const card2title = useRef(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".card-animation-container",
        scrub: 1,
        start: "center 270%",
        end: `+=${window.innerHeight * 4}`,
        markers: false,
      },
    });
    timeline.to(".card-1", { x: "-100vw", duration: 800, delay: 1000 });
    timeline.to(".card-2", { x: "-100vw", duration: 800, delay: 800 });
    timeline.to(".card-3", { x: "-100vw", duration: 800, delay: 800 });

    timeline.to(
      ".card-1 .title",
      {
        scale: 0.35,
        // @ts-ignore
        x: getValueFromScreenSize(-100 - ((card1leftSide?.current?.offsetWidth - (card1title?.current?.offsetHeight* 0.35 )) / 2), -135 - ((card1leftSide?.current?.offsetWidth - (card1title?.current?.offsetHeight* 0.35 )) / 2)),
        rotate: -90,
        duration: 600,
        opacity: 0.8,
        y: getValueFromScreenSize(
          // @ts-ignore
          card1leftSide?.current?.offsetHeight - 150,
          // @ts-ignore
          card1leftSide?.current?.offsetHeight - 200
        ),
      },
      2800
    );
    timeline.to(
      ".card-1 .subtext",
      {
        duration: 400,
        opacity: 0,
      },
      3000
    );
    timeline.to(".card-1 .line-extend", { y: "-100%", duration: 1000 }, 3000);
    timeline.to(
      ".card-1 .top-left-image",
      { y: -100, x: -100, opacity: 1, scale: 1, duration: 400, delay: 5 },
      3800
    );

    timeline.to(
      ".card-2 .title",
      {
        scale: 0.35,
        //@ts-expect-error
        x: getValueFromScreenSize(-100 - ((card1leftSide?.current?.offsetWidth - (card1title?.current?.offsetHeight* 0.35 )) / 2), -135 - ((card2leftSide?.current?.offsetWidth - (card2title?.current?.offsetHeight* 0.35 )) / 2)),
        rotate: -90,
        duration: 600,
        y: getValueFromScreenSize(
          // @ts-ignore
          card2leftSide.current?.offsetHeight - 150,
          // @ts-ignore
          card2leftSide.current?.offsetHeight - 200
        ),
        opacity: 0.8,
        delay: 280,
      },
      4200
    );
    timeline.to(
      ".card-2 .subtext",
      {
        duration: 400,
        opacity: 0,
      },
      4400
    );
    timeline.to(".card-2 .line-extend", { y: "-100%", duration: 1000 }, 4600);
    timeline.to(
      ".card-2 .top-left-image",
      { y: -100, x: -100, opacity: 1, duration: 400 },
      5400
    );
  });

  return (
    <>
    <div className="relative h-[400vh] z-30  flex-col text-white w-full flex lg:pt-[100px]">
      <div className="main sticky  top-0 h-[100vh]  items-center  pt-10 pb-[15px] flex-col text-white w-full flex lg:space-y-[60px] xl:space-y-[75px]">
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex flex-col   justify-center items-center">
            <div className="  w-[90%] text-center relative  ">
              <h3 className=" uppercase opacity-80 tracking-[2.4px] museo-sans lg:font-semibold mb-2 lg:mb-6  ">
                {data.subHead}
              </h3>
              <h1 className="lg:text-[45px] xl:text-5xl text-4xl text-center space-grotesk-medium">
                {data.header}
              </h1>
            </div>
          </div>
        </div>

        <div className="flex h-full max-h-[600px] relative overflow-x-hidden   w-full museo-sans">
          <div className="lg:w-[11%] xl:w-[15%] justify-center items-center hidden lg:flex flex-col ">
            <div className="w-[50%]  flex flex-col items-center justify-center text-center ">
              <span className="text-[18px] xl:text-xl opacity-70 font-semibold ">
                Keep Scrolling{" "}
              </span>

              <motion.div className="relative py-6 flex justify-center ">
                <motion.img
                  className=" absolute h-[55px] xl:h-[70px] opacity-80 "
                  src="assets/images/subsidiaryPagesImages/props/Vector.png"
                  alt=""
                  animate={{
                    y: [-10, 10, -10],
                    transition: { duration: 2, repeat: Infinity },
                  }}
                />
                <motion.img
                  className="mt-[40px] xl:my-3 h-[60px] xl:h-[90px] "
                  src="assets/images/subsidiaryPagesImages/props/Vector (1).png"
                  alt=""
                  animate={{
                    scale: [1.2, 1, 1.2],
                    transition: { duration: 3, repeat: Infinity },
                  }}
                />
              </motion.div>

              <span className="opacity-80 ">To Discover</span>
            </div>
          </div>

          <div className="absolute bottom-0 z-50 lg:bottom-[0%] left-[13%] xl:left-[18%] h-full lg:max-h-[550px] w-full">
            <div className=" z-50 relative h-full">
              <div
                style={{
                  background: `url(${data.data[0].img2})`,
                  transform: "rotate(180deg)",
                  backgroundSize: "cover",
                }}
                className="w-full lg:max-w-[calc(80vw-200px)] xl:max-w-[calc(72vw-200px)] border-white border-[2px] rounded-[20px] h-full lg:max-h-[550px] absolute top-0 pl-[100px] overflow-hidden card-1 left-[calc(100vw)]"
              >
                <div
                  style={{ transform: "rotate(-180deg)" }}
                  className="h-full flex items-center w-full"
                >
                  <div
                    ref={card1leftSide}
                    className="h-[100%] pt-[0px] left-0 min-w-[75px] w-[75px] xl:min-w-[100px] xl:w-[100px]  flex flex-col items-center"
                  >
                    <div className="w-full h-[75px] xl:h-[91px] flex items-center justify-center">
                      <img
                        className="lg:w-[30px] xl:w-[40px] rotate-90 relative opacity-0 top-[100px] left-[100px] top-left-image scale-75"
                        src={data.data[0].img}
                      />
                    </div>
                    <div className="h-[calc(100%-180px)] xl:h-[calc(100%-230px)]  w-full flex justify-center overflow-hidden">
                      <div className="w-[1.5px] bg-[#F4F4F4] h-full relative top-[100%] line-extend"></div>
                    </div>
                  </div>

                  <div className="w-[85%] h-full flex py-[65px] ">
                    <div className=" min-w-[50%] ">
                      <h2 ref={card1title} className="text-[26px] xl:text-[32px] mdxlxl:text-[40px] 2xl  pl-[5%] text-white leading-[1.136] title museo-sans font-medium w-[80%]">
                        {data.data[0].content.head}
                      </h2>
                      <p className="mt-[16px]  pl-[5%] museo-sans text-[12px] xl:text-[13px] mdxl:text-[14.8px] font-normal subtext">
                        {data.data[0].content.text}
                      </p>
                      <div className="pl-[5%] mt-[15px] subtext">
                        <a
                          className="btn-seconday cursor-pointer relative overflow-hidden"
                          onClick={() => setCtaFormShowing(true)}
                        >
                          <span className="relative flex items-center  overflow-hidden">
                            <span className="relative inline-flex museo-sans font-semibold">
                              <span className="btn-seconday--text-1 relative">
                                Learn More
                              </span>
                              <span className="btn-seconday--text-2 absolute top-0 left-0">
                                Learn More
                              </span>
                            </span>
                            <span className="relative inline-flex ml-2 items-center overflow-hidden">
                              <span className="btn-seconday--arrow-1 relative">
                                <img
                                  className="ml-2"
                                  src="/assets/images/right-arrow.svg"
                                  alt="Right Arrow"
                                />
                              </span>
                              <span className="btn-seconday--arrow-2 absolute top-0 left-0">
                                <img
                                  className="ml-2"
                                  src="/assets/images/right-arrow.svg"
                                  alt="Right Arrow"
                                />
                              </span>
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <img
                      className="w-[5-%] ml-10 object-contain"
                      src={data.data[0].img3}
                    />
                  </div>
                </div>
              </div>

              <div
                style={{
                  background: `url(${data.data[0].img2})`,
                  transform: "rotate(180deg)",
                  backgroundSize: "cover",
                }}
                className="w-full lg:max-w-[calc(80vw-200px)] xl:max-w-[calc(72vw-200px)] border-white border-[2px] rounded-[20px] h-full lg:max-h-[550px] absolute top-0 pl-[100px] overflow-hidden card-2 left-[calc(100vw+75px)] xl:left-[calc(100vw+100px)]"
              >
                <div
                  style={{ transform: "rotate(-180deg)" }}
                  className="h-full flex items-center w-full"
                >
                  <div
                    ref={card2leftSide}
                    className="h-[100%] pt-[0px] left-0 min-w-[75px] w-[75px] xl:min-w-[100px] xl:w-[100px] flex flex-col items-center"
                  >
                    <div className="w-full h-[75px] xl:h-[91px] flex items-center justify-center">
                      <img
                        className="lg:w-[30px] xl:w-[40px] rotate-90 relative opacity-0 top-[100px] left-[100px] top-left-image"
                        src={data.data[1].img}
                      />
                    </div>
                    <div className="h-[calc(100%-180px)] xl:h-[calc(100%-230px)]  w-full flex justify-center overflow-hidden">
                      <div className="w-[1.5px] bg-[#F4F4F4] h-full relative top-[100%] line-extend"></div>
                    </div>
                  </div>

                  <div className="w-[85%] h-full flex py-[65px]">
                    <div className="min-w-[50%]">
                      <h2 ref={card2title} className="text-[26px] xl:text-[32px] mdxlxl:text-[40px] 2xl pl-[5%]  text-white leading-[1.136] title museo-sans font-medium">
                        {data.data[1].content.head}
                      </h2>
                      <p className="mt-[16px] pl-[5%] museo-sans text-[12px] xl:text-[13px] mdxl:text-[14.8px] font-normal subtext">
                        {data.data[1].content.text}
                      </p>
                      <div className="pl-[5%] mt-[15px] subtext">
                        <a
                          className="btn-seconday cursor-pointer relative overflow-hidden"
                          onClick={() => setCtaFormShowing(true)}
                        >
                          <span className="relative flex items-center  overflow-hidden">
                            <span className="relative inline-flex museo-sans font-semibold">
                              <span className="btn-seconday--text-1 relative">
                                Learn More
                              </span>
                              <span className="btn-seconday--text-2 absolute top-0 left-0">
                                Learn More
                              </span>
                            </span>
                            <span className="relative inline-flex ml-2 items-center overflow-hidden">
                              <span className="btn-seconday--arrow-1 relative">
                                <img
                                  className="ml-2"
                                  src="/assets/images/right-arrow.svg"
                                  alt="Right Arrow"
                                />
                              </span>
                              <span className="btn-seconday--arrow-2 absolute top-0 left-0">
                                <img
                                  className="ml-2"
                                  src="/assets/images/right-arrow.svg"
                                  alt="Right Arrow"
                                />
                              </span>
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <img
                      className="w-[50%] ml-10 transform scale-x-[-1] object-contain"
                      src={data.data[1].img3}
                    />
                  </div>
                </div>
              </div>

              <div
                style={{
                  background: `url(${data.data[2].img2})`,
                  transform: "rotate(180deg)",
                  backgroundSize: "cover",
                }}
                className="w-full lg:max-w-[calc(80vw-200px)] border-[2px] xl:max-w-[calc(72vw-200px)] border-white rounded-[20px] h-full lg:max-h-[550px] absolute top-0 pl-[100px] py-[65px]  overflow-hidden card-3 left-[calc(100vw+150px)] xl:left-[calc(100vw+200px)]"
              >
                <div
                  style={{ transform: "rotate(-180deg)" }}
                  className="h-full flex pl-9 "
                >
                  <div className="pl-[5%] min-w-[50%] ">
                    <h2 className="text-[26px] xl:text-[32px] mdxlxl:text-[40px] 2xl text-white leading-[1.136]  font-medium">
                      {data.data[2].content.head}
                    </h2>
                    <p className="mt-[16px] text-[12px] xl:text-[13px] mdxl:text-[14.8px]">{data.data[2].content.text}</p>
                    <div className=" mt-[15px]">
                      <a
                        className="btn-seconday cursor-pointer relative overflow-hidden mt-[15px]"
                        onClick={() => setCtaFormShowing(true)}
                      >
                        <span className="relative flex items-center  overflow-hidden">
                          <span className="relative inline-flex museo-sans font-semibold">
                            <span className="btn-seconday--text-1 relative">
                              Learn More
                            </span>
                            <span className="btn-seconday--text-2 absolute top-0 left-0">
                              Learn More
                            </span>
                          </span>
                          <span className="relative inline-flex ml-2 items-center overflow-hidden">
                            <span className="btn-seconday--arrow-1 relative">
                              <img
                                className="ml-2"
                                src="/assets/images/right-arrow.svg"
                                alt="Right Arrow"
                              />
                            </span>
                            <span className="btn-seconday--arrow-2 absolute top-0 left-0">
                              <img
                                className="ml-2"
                                src="/assets/images/right-arrow.svg"
                                alt="Right Arrow"
                              />
                            </span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>

                  <img
                    className="w-full lg:w-[50%] ml-14 object-cover"
                    src={data.data[2].img3}
                  />
                  {/* </figure> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="h-[600px] w-full bg-blue-300 "></div> */}
      {/* </div> */}
    </div>
    <div></div>
  </>
  );
};

export default ParallaxCards;
