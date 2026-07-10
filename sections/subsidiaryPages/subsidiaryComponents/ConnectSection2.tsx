import React, { Dispatch, SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Variants, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ConnectSection2: React.FC<{
  text: string;
  setCtaFormShowing: Dispatch<SetStateAction<boolean>>;
}> = ({ text, setCtaFormShowing }) => {
  const ctaButtonVariant = {
    whileHover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
    whileTap: {
      scale: 0.98,
      transition: { duration: 0.15 },
    },
  };
  const [buttonHovered, setButtonHovered] = useState(false);

  const textToAnimate = "Connect With Us Today"
  const splitText = textToAnimate.split(" ");

  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.02, delayChildren: i * 0 },
    }),
  };


  const { ref: headerRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };
  return (
    <div className="h-screen bg-black  w-full lg:h-screen relative flex flex-col justify-center items-center ">
      <div className=" mt-0 w-full  h-full relative flex justify-center items-center text-white ">
        <div className="flex relative z-50 items-center justify-center flex-col h-full w-[90%] lg:w-[35%] text-center ">
          {/* <h1 className=" text-4xl lg:text-5xl uppercase  space-grotesk-medium">
            Connect with Us Today
          </h1> */}
          <motion.h1
            ref={headerRef}
            className="text-white text-center w-full justify-center flex-wrap font-semibold text-[32px] md:text-4xl lg:text-5xl space-grotesk-medium"
            style={{ display: "flex", overflow: "hidden" }}
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
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
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.45 } } : {}} className="text-[14px] md:text-xl opacity-85 my-[15px] md:my-10 museo-sans">{text}</motion.p>
          <motion.div
            onClick={() => setCtaFormShowing(true)}
            variants={ctaButtonVariant}
            onMouseEnter={() => {
              setButtonHovered(true);
            }}
            onMouseLeave={() => {
              setButtonHovered(false);
            }}
            initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.8 } } : {}}
            whileHover="whileHover"
            whileTap={"whileTap"}
            className=" cursor-pointer py-2 w-fit flex justify-center items-center rounded-full px-4 lg:px-5 bg-white inter text-[14px] md:text-[16px]"
          >
            <Link to={"#"} className="text-black">
            GET CONNECTED
            </Link>
            <motion.span
              className="sm:block hidden"
              animate={
                buttonHovered ? { x: 10, transition: { duration: 0.3 } } : {}
              }
              whileHover={"whileHover"}
            >
              <IoIosArrowRoundForward className={"text-black"} size={30} />
            </motion.span>
          </motion.div>
        </div>
      </div>

      {/* <div className=" relative w-full z-[60] h-[30px]  ">
        <img className="absolute w-full  object-cover" src="/assets/images/subsidiaryPagesImages/Rectangle 1.svg" alt="" />
      </div> */}
    </div>
  );
};

export default ConnectSection2;
