/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import PowerCtaForm from "../../../components/PowerCtaForm";
import EngineeringCtaForm from "../../../components/EngineeringCtaForm";
import ConsultingCtaForm from "../../../components/ConsultingCtaForm";
import { IoIosArrowRoundForward } from "react-icons/io";
import Lenis from "@studio-freight/lenis/types";

interface NavbarProps {
  c700: string;
  c500: string;
  c400: string;
  c300: string;
}

const Navbar: React.FC<{
  color: NavbarProps;
  cta_form: string;
  ctaFormShowing: boolean;
  setCtaFormShowing: (value: boolean) => void;
  lenis: Lenis;
}> = ({ cta_form, ctaFormShowing, setCtaFormShowing }) => {
  const [isNavOpen] = useState(false);

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

  return (
    <>
      <AnimatePresence>
        {ctaFormShowing && (
          <>
            {cta_form == "power" && (
              <PowerCtaForm
                close={() => setCtaFormShowing(false)}
              />
            )}
            {cta_form == "engineering" && (
              <EngineeringCtaForm close={() => setCtaFormShowing(false)} />
            )}
            {cta_form == "consulting" && (
              <ConsultingCtaForm close={() => setCtaFormShowing(false)} />
            )}
          </>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="bg-transparent pt-5 lg:pt-10 p-4 z-30"
      >
        <div className="lg:container z-[60] opacity-100 relative lg:mx-auto flex justify-between items-center">
          <motion.a
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.7, delay: 1.4 },
            }}
            href="/"
            className="px-[14px] md:px-[18px] py-[10px] rounded-full bg-white"
          >
            {/* <img
              src="/assets/images/kelani-logo-white.png"
              className="h-[35px] lg:h-[55px]"
            /> */}
            {/* <img
              src={`/assets/images/subsidiary-logos/kelani-${cta_form}-desktop-logo.png`}
              className="h-[55px] hidden lg:block"
            /> */}
            <img
              src={`/assets/images/subsidiary-logos/kelani-${cta_form}-mobile-logo.png`}
              className="max-w-[120px] md:max-w-none md:h-[38px] lg:w-fit"
            />
          </motion.a>

          <div className="flex items-center">
            <motion.div
              onClick={() => setCtaFormShowing(true)}
              variants={ctaButtonVariant}
              onMouseEnter={() => {
                setButtonHovered(true);
              }}
              onMouseLeave={() => {
                setButtonHovered(false);
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.7, delay: 1.4 },
              }}
              whileHover="whileHover"
              whileTap={"whileTap"}
              className=" cursor-pointer py-2 w-fit flex justify-center items-center rounded-full px-4 lg:px-5 bg-white inter text-[12px] md:text-[16px]"
            >
              <Link to={"#"} className="">
                GET CONNECTED{" "}
              </Link>
              <motion.span
                className="sm:block hidden"
                animate={
                  buttonHovered ? { x: 10, transition: { duration: 0.3 } } : {}
                }
              >
                <IoIosArrowRoundForward size={30} />
              </motion.span>
            </motion.div>
            {/* <div className="border mx-2 h-10 opacity-50 "></div> */}
            {/* <motion.button
            onClick={toggleNav}
            style={{color: color.c700, backgroundColor: color.c300 }}
            className={` ml-4 bg-${color}-300 text-${color}-700 rounded-full p-2 flex items-center justify-center focus:outline-none `}
            whileTap={{ scale: 0.95 }}
          >
            <motion.svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ rotate: isNavOpen ? 90 : 0 }}
              className="flex text-center flex-col justify-center items-center h-6 w-6"
            >
              <motion.path
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16"}
                // d={isNavOpen ? "M4 12h16" : "M4 6h16M4 12h16"}
              />
            </motion.svg>
          </motion.button> */}
          </div>
        </div>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isNavOpen ? "auto" : 0,
            opacity: isNavOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <Link
            to="#"
            className=" py-2 text-white z-30 px-4 mx-2 block md:inline-block"
          >
            Home
          </Link>
          <Link
            to="#"
            className="py-2 text-white z-30 px-4 mx-2 block md:inline-block"
          >
            About
          </Link>
          <Link
            to="#"
            className=" py-2 text-white z-30 px-4 mx-2 block md:inline-block"
          >
            Services
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navbar;
