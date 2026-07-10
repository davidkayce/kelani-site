import Lenis from "@studio-freight/lenis/types";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import InfiniteCarousel from "../components/InfiniteCarousel";
import NavBar from "../components/NavBar";
import useNavStore from "../store/nav";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useScreenSize from "../hooks/useScreenSize";
import FadeUpAnimation from "../components/FadeUpAnimation";

const Hero = ({ lenis }: { lenis: Lenis }) => {
  // const [navShowing, setNavShowing] = useState(false);
  const { navShowing, setNavShowing } = useNavStore();
  // const { width } = useScreenSize();
  // const getValueFromScreenSize = (mobile: any, tablet: any, desktop: any) => {
  //   if (width < 768) {
  //     return mobile;
  //   } else if (width < 1024) {
  //     return tablet;
  //   } else {
  //     return desktop;
  //   }
  // };
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const { width } = useScreenSize();
  return (
    <div className="bg-[#FEFEFE] z-30" ref={containerRef}>
      <AnimatePresence>
        {navShowing && (
          <NavBar lenis={lenis} closeNav={() => setNavShowing(false)} />
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.8 } }}
        className="pt-[30px] px-[12px] md:px-[24px] lg:px-[32px] max-w-[1672px] mx-auto "
      >
        <div
          style={{ borderRadius: 28, zIndex: 10, transform: "translateZ(0)" }}
          className="h-[50vh] md:h-[82vh] relative  rounded-[28px] overflow-hidden"
        >
          <div className="w-full absolute top-0 p-[24px] flex justify-between z-20">
            <div className=" lg:px-[20px] h-[35px] rounded-full flex items-center justify-center">
              <img
                className=" h-[50px] lg:h-[55px]"
                src="/assets/images/kelani-logo-white.png"
              />
            </div>
            <motion.div
              onClick={() => setNavShowing(true)}
              whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.3 } }}
              className="w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center cursor-pointer shadow-md"
            >
              <img src="/assets/images/icon-nav.svg" />
            </motion.div>
          </div>
          <figure
            style={{ borderRadius: 28, transform: "translateZ(0)" }}
            className="overflow-hidden absolute top-0 right-0 left-0 bottom-0 rounded-[20px]"
          >
            <motion.div
              className="h-full w-full rounded-[20px] overflow-hidden"
              style={width < 500 ? {} : { scale }}
            >
              <LazyLoadImage
                width={"100%"}
                height={"100%"}
                effect="blur"
                wrapperClassName="lazyLoadImageContainer home-section-image"
                src={"/assets/images/home-image.png"}
              />
            </motion.div>
          </figure>
          <div className="flex-col absolute -bottom-[3px] -left-[1px] hidden md:flex">
            <h1 className="space-grotesk-semibold bg-[#FEFEFE] text-[36px] md:text-[45px] lg:text-[50px] xl:text-[55px] leading-[39px] md:leading-[52px] lg:leading-[55px] xl:leading-[64px] px-[14px] md:px-[24px] pt-[10px] md:pt-[10px] pb-[10px] lg:pb-[4px] relative rounded-br-[20px] sm:rounded-br-none rounded-tr-[20px] md:rounded-br-[20px] lg:rounded-br-none lg:rounded-tr-[28px] w-fit overflow">
              <FadeUpAnimation delay={0.4}>
                Building Africa’s Future With
              </FadeUpAnimation>
              <img
                src="/assets/images/curved-fill-tl.svg"
                className="w-[20px] h-[20px] lg:w-[36px] lg:h-[36px] absolute lg:top-[-35px] top-[-19px] left-[1px]"
              />
              <img
                src="/assets/images/curved-fill-tl.svg"
                className="w-[26px] h-[26px] md:w-[36px] md:h-[36px] absolute right-[-26px] md:right-[-36px] -bottom-[1px] hidden lg:block"
              />
            </h1>
            <h1 className="space-grotesk-semibold bg-[#FEFEFE] text-[36px] md:text-[45px] lg:text-[50px] xl:text-[55px] leading-[39px] md:leading-[59px] xl:leading-[64px] px-[14px] pb-[10px] md:px-[24px] pt-[10px] md:pb-[14px] lg:pt-[10px] lg:pb-[12px] top-[-1px] relative lg:rounded-tr-[28px] rounded-br-[20px] md:rounded-br-[20px] sm:rounded-br-[0] w-fit flex md:flex- lg:space-x-[18px] lg:overflow-hidden">
              {/* <TextAnimation
                lineHeight={getValueFromScreenSize(44, 57, 83)}
                text="With Engineering Excellence"
              /> */}
              <FadeUpAnimation delay={0.4}>Engineering Excellence</FadeUpAnimation>
              <img
                src="/assets/images/curved-fill-tl.svg"
                className="w-[26px] h-[26px] md:w-[36px] md:h-[36px] hidden sm:block absolute right-[-26px] md:right-[-36px] -top-[1px] rotate-90 lg:hidden"
              />
              <span className="hidden lg:block pl-[8px]">
                {/* <TextAnimation
                  lineHeight={getValueFromScreenSize(44, 57, 83)}
                  text="For Growth"
                /> */}
                <FadeUpAnimation delay={0.4}>For Growth</FadeUpAnimation>
              </span>
              <img
                src="/assets/images/curved-fill-tl.svg"
                className="w-[20px] h-[20px] md:w-[36px] md:h-[36px] absolute top-0 lg:top-[-36px] lg:left-0 -right-[20px] rotate-90 block sm:hidden"
              />
            </h1>
            <h1 className="space-grotesk-semibold bg-[#FEFEFE] text-[36px] md:text-[45px] lg:text-[50px] xl:text-[55px] leading-[39px] md:leading-[52px] lg:leading-[55px] xl:leading-[64px] px-[14px] md:px-[24px] pt-[10px] pb-[10px] md:pb-[14px] lg:pt-[20px] lg:pb-[24px] top-[-1px] relative  w-fit block lg:hidden">
              <FadeUpAnimation>For Growth</FadeUpAnimation>
              <img
                src="/assets/images/curved-fill-tl.svg"
                className="w-[28px] h-[28px] absolute rotate-90  top-0  -right-[27px] "
              />
              <img
                src="/assets/images/curved-fill-tl.svg"
                className="w-[28px] h-[28px] absolute rotate-0  bottom-0 -right-[27px]"
              />
            </h1>
            <div className="bg-[#FEFEFE] px-[24px] pt-[8px] pb-[16px] relative  w-fit bottom-[2px] rounded-tr-[36px] lg:rounded-tr-[0] hidden md:block">
              <FadeUpAnimation delay={0.5}>
                <p className="max-w-[400px] md:max-w-[600px] lg:max-w-[700px] text-[17.28px] leading-[26px] w-fit museo-sans font-light">
                  At Kelani, industrial expertise, talent development, and a
                  commitment to sustainable energy converge. Join us on a
                  transformative journey shaping an extraordinary future across
                  Africa.
                </p>
              </FadeUpAnimation>
              <img
                src="/assets/images/curved-fill-tl.svg"
                className="w-[36px] h-[36px] absolute top-0 -right-[36px] rotate-90 hidden lg:block"
              />
              <img
                src="/assets/images/curved-fill-tl.svg"
                className="w-[36px] h-[36px] absolute bottom-0 -right-[36px] "
              />
            </div>
          </div>
          {/* <div className="md:hidden flex-col absolute -bottom-[3px] -left-[1px]">
            <h1 className="space-grotesk-semibold bg-[#FEFEFE] text-[26px] md:text-[45px] lg:text-[50px] xl:text-[55px] leading-[1.125] md:leading-[52px] lg:leading-[55px] xl:leading-[64px] px-[14px] pb-[5px] md:px-[24px] pt-[10px] md:pb-[14px] lg:pt-[10px] lg:pb-[12px] top-[-1px] relative rounded-tr-[20px] md:rounded-br-[20px] sm:rounded-br-[0] w-fit flex md:flex- lg:space-x-[18px]">
              Building Africa's
              <img
                src="/assets/images/curved-fill-tl.svg"
                className="w-[20px] h-[20px] absolute bottom-0 -right-[20px] "
              />
              <img
                src="/assets/images/curved-fill-tl.svg"
                className="w-[20px] h-[20px] absolute -top-[20px] -left-[0px] "
              />
            </h1>
          </div> */}
        </div>
        <FadeUpAnimation y={40}>
          <h1 className="space-grotesk-semibold font-semibold bg-[#FEFEFE] md:hidden text-[26px] md:text-[45px] lg:text-[50px] xl:text-[55px] leading-[36px] md:leading-[52px] lg:leading-[55px] xl:leading-[64px] px-[0px] pb-[5px] md:px-[24px] pt-[15px] md:pb-[14px] lg:pt-[10px] lg:pb-[12px] top-[-1px] relative sm:rounded-tr-[28px] rounded-br-[20px] md:rounded-br-[20px] sm:rounded-br-[0] w-fit flex lg:space-x-[18px] space-y-[18px]">
            Building Africa's Future With Engineering Excellence For Growth
          </h1>
        </FadeUpAnimation>
        {/* <Container className="md:hidden"> */}
        <FadeUpAnimation y={40} delay={0.45}>
          <p className=" md:pl-[14px] text-[16px] leading-[20px] w-full pt-[5px] md:hidden museo-sans font-normal">
            At Kelani, industrial expertise, talent development, and a commitment
            to sustainable energy converge. Join us on a transformative journey
            shaping an extraordinary future across Africa.
          </p>
        </FadeUpAnimation>

        {/* </Container> */}
        <InfiniteCarousel />
      </motion.div>
    </div>
  );
};

export default Hero;
