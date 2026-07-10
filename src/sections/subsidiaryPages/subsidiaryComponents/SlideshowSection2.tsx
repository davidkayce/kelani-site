import { AnimatePresence, Variants, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaRegCircle } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface Contents {
  img: string;
  point1: string;
  point2: string;
  point3: string;
  point4: string;
  point5?: string;
  point6?: string;
  classname: string;
}

interface color {
  c700: string;
  c500: string;
  c400: string;
  c300: string;
}

interface SlideshowProps {
  dash: string;
  btnColour: string;
  content: Contents[];
  header: Header[];
  text: {
    head: string;
    sub: string;
  };
}

interface Header {
  text: string;
  className: string;
}

// function useHover(
//   styleOnHover: CSSProperties,
//   styleOnNotHover: CSSProperties = {}
// ) {
//   const [style, setStyle] = useState(styleOnNotHover);

//   const onMouseEnter = () => setStyle(styleOnHover);
//   const onMouseLeave = () => setStyle(styleOnNotHover);

//   return { style, onMouseEnter, onMouseLeave };
// }

const SlideshowSection2: React.FC<{ data: SlideshowProps; colours: color }> = ({
  data,
  colours,
}) => {
  const containerRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //     target: containerRef,
  //     offset: ["start end", "end start"],
  //   });

  // const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

  // const gradientStyle = {
  //   background: `linear-gradient(45deg, black, ${colours.c400})`,
  // };

  const [display, setDisplay] = useState(0);

  // const [hover, setHover] = useState(false);
  // const [hover2, setHover2] = useState(false);

  const handleHeaderClick = (index: number) => {
    setDisplay(index);
  };

  const handleNext = () => {
    setDisplay((prevDisplay) => (prevDisplay + 1) % data.content.length);
  };

  const handlePrevious = () => {
    setDisplay(
      (prevDisplay) =>
        (prevDisplay - 1 + data.content.length) % data.content.length
    );
  };

  const containerVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  // const prevRef = useRef(null);
  const prevRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (prevRef.current) {
      const prevElement = prevRef.current;
      const afterStyle = document.createElement("style");
      afterStyle.textContent = `
        .prev:after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: ${data.btnColour}
        }
      `;
      prevElement.appendChild(afterStyle);
    }
  }, []);

  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.01, delayChildren: i * 0 },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 200,
      },
    },
  };
  const text = data.text.sub;
  const splitText = text.split(" ");
  const { ref, inView } = useInView({ triggerOnce: true });
  const { ref: topTextRef, inView: topTextInView } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="lg:h-[1300px] h-fit w-full z-30 text-white ">
      <div className="w-full mb-6 flex flex-col lg:px-4 justify-center pt-24 items-center ">
        <div className="w-[80%] flex justify-center items-center lg:mt-[150px]">
          <div className="flex  w-full lg:flex-row flex-col items-center mb-10 justify-center lg:justify-between ">
            <div className=" text-center lg:text-left ">
              <motion.p
                ref={topTextRef}
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: topTextInView ? 1 : 0,
                  y: topTextInView ? 0 : 30,
                  transition: { duration: 1, ease: "easeOut" },
                }}
                className="font-semibold uppercase lg:text-base text-xs opacity-60 tracking-wide museo-sans lg:max-w-[540px]"
              >
                {data.text.head}
              </motion.p>
              <motion.h1
                style={{ display: "flex", overflow: "hidden" }}
                variants={container}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                ref={containerRef}
                className=" flex-wrap  items-center justify-start text-3xl lg:text-5xl my-5 opacity-90 font-semibold space-grotesk-medium"
              >
                <div
                  className="w-full flex flex-wrap justify-center lg:justify-start"
                  ref={ref}
                >
                  {splitText.map((word, index) => (
                    <motion.span
                      className="flex"
                      key={index}
                      style={{ marginRight: "0.5rem" }}
                    >
                      {word.split("").map((letter, index) => (
                        <motion.span className=" " key={index} variants={child}>
                          {letter}
                        </motion.span>
                      ))}
                      {index !== splitText.length - 1 && <span>&nbsp;</span>}
                    </motion.span>
                  ))}
                </div>
              </motion.h1>
            </div>

            <div className="flex mt-3 lg:mt-0 relative items-center justify-center lg:justify-between lg:w-[15%] md:w-[20%] w-full ">
              <motion.div
                animate={{
                  opacity: topTextInView ? 1 : 0,
                  transition: { duration: 1 },
                }}
                className="lg:col-start-1 col-start-9 lg:col-span-full col-span-2  flex  items-center lg:items-end lg:justify-center justify-end "
                style={{ opacity: 1, visibility: "inherit" }}
              >
                <button
                  ref={prevRef}
                  onClick={handlePrevious}
                  className="prev btn-sliderr btn-sliderr-left mr-0 lg:mr-[30px] h-[56px] w-[56px] overflow-hidden"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full "
                    fill="none"
                    viewBox="0 0 55 55"
                  >
                    <circle
                      cx="27.058"
                      cy="27.059"
                      r="26.809"
                      stroke="url(#paint0_linear_1621_3648)"
                      stroke-width="0.5"
                      transform="rotate(90 27.058 27.059)"
                    ></circle>
                    <g className="btn-sliderr-left__arrow-1 relative">
                      <path
                        stroke="#F4F4F4"
                        stroke-miterlimit="10"
                        stroke-width="0.5"
                        d="M37.117 27h-20M21.117 23l-4 4 4 4"
                      ></path>
                    </g>
                    <g className="btn-sliderr-left__arrow-2 absolute top-0 left-0">
                      <path
                        stroke="#F4F4F4"
                        stroke-miterlimit="10"
                        stroke-width="0.5"
                        d="M37.117 27h-20M21.117 23l-4 4 4 4"
                      ></path>
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_1621_3648"
                        x1="27.248"
                        x2="27.248"
                        y1="53.912"
                        y2="0.15"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#fff"></stop>
                        <stop
                          offset="1"
                          stop-color="#fff"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </button>

                <div className="lg:hidden px-3 flex">
                  <h1>
                    {display + 1}/{data.content.length}
                  </h1>
                </div>

                <button
                  ref={prevRef}
                  type="button"
                  onClick={handleNext}
                  className="prev  h-[56px] w-[56px] btn-sliderr btn-sliderr-right overflow-hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-55 h-auto"
                    fill="none"
                    viewBox="0 0 55 55"
                  >
                    <circle
                      cx="27.177"
                      cy="27.059"
                      r="26.809"
                      stroke="url(#paint0_linear_1621_3653)"
                      stroke-width="0.5"
                      transform="rotate(90 27.177 27.059)"
                    ></circle>
                    <g className="btn-sliderr-right__arrow-1 relative">
                      <path
                        stroke="#F4F4F4"
                        stroke-miterlimit="10"
                        stroke-width="0.5"
                        d="M17.118 27h20M33.118 23l4 4-4 4"
                      ></path>
                    </g>
                    <g className="btn-sliderr-right__arrow-2 absolute top-0 left-0">
                      <path
                        stroke="#F4F4F4"
                        stroke-miterlimit="10"
                        stroke-width="0.5"
                        d="M17.118 27h20M33.118 23l4 4-4 4"
                      ></path>
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_1621_3653"
                        x1="27.367"
                        x2="27.367"
                        y1="53.912"
                        y2="0.15"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#fff"></stop>
                        <stop
                          offset="1"
                          stop-color="#fff"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          animate={{
            opacity: topTextInView ? 1 : 0,
            transition: { duration: 1 },
          }}
          className="w-full lg:mb-6 flex justify-center items-center "
        >
          <div className="w-[80%] flex justify-center lg:justify-between items-center">
            {data.header.map((item, index) => (
              <div
                className={`${
                  display === index
                    ? "h-[90px] font-semibold lg:text-left text-center cursor-pointer opacity-60 tracking-wide w-full ml-3"
                    : "h-[90px] cursor-pointer hidden lg:flex font-semibold opacity-60 tracking-wide w-full ml-3"
                }`}
                key={index}
                onClick={() => handleHeaderClick(index)}
              >
                <div className=" h-[90%]  w-full ">
                  <h1 className="p-2 h-full lg:text-xs xl:text-[16px] flex justify-center items-center uppercase lg:w-full ">
                    {item.text}
                  </h1>
                </div>
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: display === index ? "0%" : "-100%" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={`${
                    display === index
                      ? "w-full relative flex items-center justify-center h-[10%] "
                      : "w-full h-[10%] hidden"
                  }`}
                >
                  <img
                    className=" lg:block hidden  w-full -left-8 absolute "
                    src={data.dash}
                    alt=""
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{
          opacity: topTextInView ? 1 : 0,
          transition: { duration: 1 },
        }}
        ref={containerRef}
        className=" flex pt-[1rem] px-3 lg:px-0 items-center justify-center w-full "
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={display}
            className="w-full lg:w-[80%] items-center lg:items-start z-30 h-full flex lg:flex-row flex-col"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            <div
              className="rounded-3xl flex  overflow-hidden"
              style={{
                background: `linear-gradient(0deg, ${colours.c700}, transparent)`,
              }}
            >
              <LazyLoadImage
                src={data.content[display].img}
                alt={`Slide ${display + 1}`}
                effect="blur"
                style={{ opacity: 0.8 }}
                className="rounded-3xl xl:h-[400px] 2xl:h-full 2xl:rounded-3xl 2xl:w-[900px] lg:h-[300px]  object-cover xl:w-[650px] lg:w-[550px] border"
              />
              {/* <img
                src={data.content[display].img}
                className="rounded-3xl xl:h-[400px] opacity-80 lg:h-[300px]  object-cover xl:w-[650px] lg:w-[550px] border"
                alt={`Slide ${display + 1}`}
              /> */}
            </div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="xl:w-[42%] h-full lg:w-[60%] lg:ml-6 ml-0 "
            >
              <ul className="grid h-full text-sm lg:text-sm w-full xl:gap-y-5 lg:gap-y-[10px] gap-y-5 gap-6 px-1 xl:pt-10 lg:pt-[10px] pt-10 xl:p-4 lg:grid-rows-3 md:grid-cols-2 grid-cols-1 lg:grid-cols-2">
                {[
                  data.content[display].point1,
                  data.content[display].point2,
                  data.content[display].point3,
                  data.content[display].point4,
                  data.content[display].point5,
                  data.content[display].point6,
                ]
                  .filter((point) => point)
                  .map((point, index) => (
                    <motion.li
                      key={index}
                      className="w-full flex museo-sans font-normal"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <FaRegCircle className="mr-2 lg:text-[20px] mt-2" />{" "}
                      {point}
                    </motion.li>
                  ))}
              </ul>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SlideshowSection2;
