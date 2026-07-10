import Lenis from "@studio-freight/lenis/types";
import { motion } from "framer-motion";
import useNavStore from "../store/nav";
import useScrollPosition from "../hooks/useScrollPosition";

const FloatingNavItem = ({
  text,
  active,
  setActiveNav,
}: {
  text: "Consulting" | "Engineering" | "Power";
  active?: boolean;
  setActiveNav: () => void;
}) => {
  const textToColorMapping = {
    Consulting: "#CAB6F4",
    Power: "#89E2A7",
    Engineering: "#FFBC8C",
  };
  return (
    <motion.button
      onClick={setActiveNav}
      animate={{ opacity: active ? 1 : 0.4, scale: active ? 1 : 0.9 }}
      whileHover={{ opacity: 1, scale: 0.92 }}
      whileTap={{ scale: 0.95 }}
      style={{
        color: active ? textToColorMapping[text] : "#222222c0",
        borderColor: active ? textToColorMapping[text] : "#D2DADF",
      }}
      className="px-[16px] py-[7px] border rounded-full"
    >
      {text}
    </motion.button>
  );
};

const FloatingNav = ({
  activeNav,
  lenis,
  scrollTops,
}: {
  activeNav: string;
  scrollTops?: Record<string, number>;
  lenis: Lenis;
}) => {
  const { navShowing, setNavShowing } = useNavStore();
  const { y: scrollY } = useScrollPosition();
  return (
    <motion.nav
      initial={{ opacity: 0, x: "-50%" }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 },
      }}
      exit={{ opacity: 0 }}
      className="z-40 px-[8px] py-[6px] rounded-full bg-[#22222218] transition fixed bottom-[40px] left-[50%] -translate-x-[50%] backdrop-blur-[18px]"
    >
      <div className="flex space-x-[6px]">
        <div
          onClick={() => lenis.scrollTo("#home")}
          className="rounded-full bg-white h-[52px] w-[52px] flex items-center justify-center text-[17.28px] leading-[26px] cursor-pointer"
        >
          <img src="/assets/images/kelani-icon.png" className="w-[30px]" />
        </div>
        <div className="h-[52px] bg-white px-[16px] rounded-full items-center space-x-[10px] hidden md:flex">
          <FloatingNavItem
            setActiveNav={() => {
                lenis.scrollTo("#engineering", {
                  offset: scrollY > scrollTops?.consulting! ? -window.innerHeight -500 : 0,
                  lerp: 0.1,
                  duration: 1,
                });
              // window.scrollTo({
              //   top: scrollTops["industrials"] + window.innerHeight - 40,
              //   behavior: "smooth",
              // });
            }}
            text="Engineering"
            active={activeNav == "engineering"}
          />
          <FloatingNavItem
            setActiveNav={() => {
              lenis.scrollTo("#power", { offset: scrollY > scrollTops?.consulting! + window.innerHeight * 1.5 ? -window.innerHeight -500 : 0, lerp: 0.1, duration: 1.4 });
              // window.scrollTo({
              //   top: scrollTops["power"] + window.innerHeight - 40,
              //   behavior: "smooth",
              // });
            }}
            text="Power"
            active={activeNav == "power"}
          />
          <FloatingNavItem
            setActiveNav={() => {
              lenis.scrollTo("#consulting", {
                offset: 0,
                lerp: 0.1,
                duration: 1,
              });
              // window.scrollTo({
              //   top: scrollTops["consulting"] + window.innerHeight - 40,
              //   behavior: "smooth",
              // });
            }}
            text="Consulting"
            active={activeNav == "consulting"}
          />
        </div>
        <motion.div
          onClick={() => setNavShowing(!navShowing)}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
          className="w-[50px] h-[50px] bg-white rounded-full border-[2px] border-[#DADADA] flex items-center justify-center cursor-pointer"
        >
          {!navShowing && (
            <motion.img
              animate={{ scale: 0.85 }}
              initial={{ scale: 1 }}
              src="/assets/images/icon-floating-nav.svg"
              className="w-[30px]"
            />
          )}
          {navShowing && (
            <motion.img
              animate={{ scale: 0.85 }}
              initial={{ scale: 1 }}
              className="w-[30px]"
              src="/assets/images/icon-close-nav.svg"
            />
          )}
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default FloatingNav;
