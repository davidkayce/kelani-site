import Lenis from "@studio-freight/lenis/types";
import useScreenSize from "../hooks/useScreenSize";
import NavSubsidiarySection from "./NavSubsidiarySection";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface NavBarProps {
  closeNav: () => void;
  lenis: Lenis;
}

const NavBar = ({ closeNav, lenis }: NavBarProps) => {
  const { width } = useScreenSize();
  const [contactHovered, setContactHovered] = useState(false);
  const [blogHovered, setBlogHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] },
        }}
        exit={{ opacity: 0, transition: { duration: 0.4 } }}
        onClick={closeNav}
        className="fixed top-0 right-0 bottom-0 left-0 bg-[rgba(25,25,24,.6)] z-30 cursor-pointer"
      ></motion.div>
      <motion.div
        initial={{ y: -50 }}
        animate={{
          y: 0,
          transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
        }}
        className="flex flex-col w-full gap-[6.4px] fixed p-[10px] z-40 top-0 right-0  left-0"
      >
        <motion.div
          initial={{ height: 0 }}
          animate={{
            height: width >= 1024 ? 360 : 240,
            transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
          }}
          exit={{
            height: 0,
            y: -100,
            opacity: 0.3,
            transition: { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] },
          }}
          className="overflow-hidden"
        >
          <motion.div className="w-full h-[240px] lg:h-[360px] bg-[linear-gradient(135deg,rgba(0,0,0,.9),rgba(0,0,0.2,0.8))] flex flex-col lg:flex-row overflow-hidden">
            <div
              className={`h-full lg:hidden border-[#FEFEFE] lg:border-t-0 flex-grow flex items-center justify-center relative`}
            >
              <p
                onClick={() => navigate("/")}
                className="lg:absolute bottom-[32px] left-[20px] text-white text-[16px] lg:text-[21.2px] flex justify-between items-center w-[calc(100%-40px)]"
              >
                <a href="/">
                  <img
                    src="/assets/images/kelani-icon.png"
                    className="h-16 w-18"
                  />
                </a>
              </p>
            </div>
            <NavSubsidiarySection
              icon="/assets/images/icon-contact.svg"
              hasRightBorder
              text="Company"
              link="/about"
              index={1}
            />
            <NavSubsidiarySection
              icon="/assets/images/icon-industrials.svg"
              hasRightBorder
              text="Energy"
              link="/energy"
              index={2}
            />
            <NavSubsidiarySection
              icon="/assets/images/icon-consulting.svg"
              hasRightBorder
              text="Engineering"
              link="/approach"
              index={3}
            />
            <NavSubsidiarySection
              icon="/assets/images/icon-power-and-energy.svg"
              text="Our Blog"
              link="/blog"
              index={4}
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 1 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              opacity: { duration: 0.3 },
              duration: 0.7,
              ease: [0.43, 0.13, 0.23, 0.96],
            },
          }}
          exit={{
            y: -100,
            opacity: 0.3,
            transition: { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] },
          }}
          className="w-full h-[142px] lg:h-[69px] bg-[linear-gradient(135deg,rgba(0,0,0,.9),rgba(0,0,0.2,0.8))] backdrop-blur-[18px] overflow-hidden flex flex-col lg:flex-row"
        >
          <motion.div
            onMouseEnter={() => setContactHovered(true)}
            onMouseLeave={() => setContactHovered(false)}
            onClick={() => {
              lenis.scrollTo(".footer", {
                offset: window.innerHeight,
                lerp: 0.1,
                duration: 2,
              });
              closeNav();
            }}
            initial={{ y: width >= 1024 ? 148 : 276 }}
            animate={{
              y: 0,
              transition: {
                duration: 0.6,
                delay: 0.35,
                ease: [0.43, 0.13, 0.23, 0.96],
              },
            }}
            className="lg:w-[calc(100%/2)] w-full  flex-shrink h-full border-b lg:border-b-0 lg:border-r border-[#FEFEFE]  flex items-center justify-between px-[20px] md:px-[40px] cursor-pointer"
          >
            <p className="text-white text-[14px] lg:text-[17.28px]">
              Contact Us
            </p>
            <motion.img
              animate={{
                x: contactHovered ? 3 : 0,
                y: contactHovered ? -3 : 0,
                scale: 1.1,
                // transition: { duration: 0.3 },
              }}
              className="w-[14px] lg:w-[16px]"
              src="/assets/images/icon-link.svg"
            />
          </motion.div>
          <div className="lg:w-[calc(50%)] w-full h-full flex">
            <motion.a
              target="_blank"
              whileTap={{ scale: 0.95, transition: { duration: 0.6 } }}
              whileHover={{ scale: 1.15 }}
              href="https://www.youtube.com/channel/UC5UQ-v-As3beWcqk4j97CrQ"
              initial={{ y: width >= 1024 ? 69 : 138 }}
              animate={{
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.43, 0.13, 0.23, 0.96],
                },
              }}
              className="flex items-center justify-center flex-grow h-full cursor-pointer"
            >
              <motion.img
                src="/assets/images/icon-social-youtube.svg"
                className="w-[24px] h-[24px]"
              />
            </motion.a>
            <motion.a
              target="_blank"
              whileTap={{ scale: 0.95, transition: { duration: 0.6 } }}
              whileHover={{ scale: 1.15 }}
              href="https://web.facebook.com/kelaniengr/"
              initial={{ y: width >= 1024 ? 69 : 138 }}
              animate={{
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.45,
                  ease: [0.43, 0.13, 0.23, 0.96],
                },
              }}
              className="flex items-center justify-center flex-grow h-full cursor-pointer"
            >
              <motion.img
                src="/assets/images/icon-social-facebook.svg"
                className="w-[24px] h-[24px]"
              />
            </motion.a>
            <motion.a
              target="_blank"
              whileTap={{ scale: 0.95, transition: { duration: 0.6 } }}
              whileHover={{ scale: 1.15 }}
              href="https://www.instagram.com/kelaniengineering/"
              initial={{ y: width >= 1024 ? 69 : 138 }}
              animate={{
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.5,
                  ease: [0.43, 0.13, 0.23, 0.96],
                },
              }}
              className="flex items-center justify-center flex-grow h-full cursor-pointer"
            >
              <motion.img
                src="/assets/images/icon-social-instagram.svg"
                className="w-[24px] h-[24px]"
              />
            </motion.a>
            <motion.a
              target="_blank"
              whileTap={{ scale: 0.95, transition: { duration: 0.6 } }}
              whileHover={{ scale: 1.15 }}
              href="https://www.linkedin.com/company/kelaniengineering/"
              initial={{ y: width >= 1024 ? 69 : 138 }}
              animate={{
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.55,
                  ease: [0.43, 0.13, 0.23, 0.96],
                },
              }}
              className="flex items-center justify-center flex-grow h-full cursor-pointer"
            >
              <motion.img
                src="/assets/images/icon-social-linkedin.svg"
                className="w-[24px] h-[24px]"
              />
            </motion.a>
            <div
              onClick={closeNav}
              className="flex items-center justify-center flex-grow h-full cursor-pointer bg-[#000000] z-10"
            >
              <motion.img
                initial={{ y: width >= 1024 ? 69 : 138 }}
                animate={{
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: 0.6,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  },
                }}
                src="/assets/images/icon-close.svg"
                className="w-[24px] h-[24px]"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default NavBar;
