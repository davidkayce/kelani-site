import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import useScreenSize from "../hooks/useScreenSize";

interface NavSubsidiarySection {
  icon: string;
  text: string;
  link?: string;
  hasRightBorder?: boolean;
  index: number;
}

const NavSubsidiarySection = ({
  icon,
  text,
  link,
  hasRightBorder,
  index,
}: NavSubsidiarySection) => {
  const { width } = useScreenSize();
  const [hoverShowing, setHoverShowing] = useState(false);
  return (
    <motion.a
      onMouseEnter={() => setHoverShowing(true)}
      onMouseLeave={() => setHoverShowing(false)}
      initial={{ opacity: 1 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: [0.43, 0.13, 0.23, 0.96],
          y:
            width < 1024
              ? {
                  delay: index * 0.2,
                  duration: 0.6,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }
              : undefined,
        },
      }}
      href={link}
      className={`h-full border-[#FEFEFE]  cursor-pointer backdrop-blur-[6px] border-t z-10 lg:border-t-0 ${
        hasRightBorder ? "lg:border-r" : ""
      }  flex-grow flex items-center justify-center relative`}
    >
      <AnimatePresence>
        {hoverShowing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.6, ease: [0.37, 0.16, 0.12, 1] },
            }}
            exit={{ opacity: 0 }}
            className="absolute top-0 right-0 bottom-0 left-0 z-0 bg-[rgb(0,0,0)]"
          ></motion.div>
        )}
      </AnimatePresence>
      <motion.img
        initial={{ opacity: 0.4, y: -20 }}
        animate={{
          opacity: 0.8,
          y: 0,
          transition: {
            duration: 0.6,
            y: { duration: 0.4, delay: 0.2 },
            ease: [0.43, 0.13, 0.23, 0.96],
          },
        }}
        src={icon}
        className="w-[130px] h-[130px] xl:w-[160px] xl:h-[160px] hidden lg:block"
      />
      <motion.p
        animate={{
          y: 0,
          transition:
            width < 1024
              ? {
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }
              : undefined,
        }}
        initial={{ y: width < 1024 ? 15 : 0 }}
        className="lg:absolute bottom-[32px] left-[20px] md:left-[40px] text-white text-[16px] lg:text-[21.2px] flex justify-between items-center w-[calc(100%-40px)] md:w-[calc(100%-80px)] z-10"
      >
        {text}
        <img
          className="w-[14px] lg:w-[16px]"
          src="/assets/images/icon-link.svg"
        />
      </motion.p>
    </motion.a>
  );
};
export default NavSubsidiarySection;
