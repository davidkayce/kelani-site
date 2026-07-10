import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { useInView } from "react-intersection-observer";
import useScreenSize from "../hooks/useScreenSize";

const InfiniteCarousel = () => {
  const { ref: containerRef, inView } = useInView({ triggerOnce: true });
  const { width } = useScreenSize()
  return (
    <motion.div ref={containerRef} initial={width >= 1024 ? {} : { y: 70, opacity: 0 }} animate={width >= 1024 ? {} : (inView ? { y: 0, opacity: 1, transition: { duration: 1, delay: 1, ease: [0.43, 0.13, 0.23, 0.96] } } : {})} className="flex overflow-hidden relative py-[20px] md:py-[30px] lg:py-[30px] border-t border-b mb-[30px] border-[#272928] mt-[35px] md:mt-[54px]">
      <Marquee gradient gradientColor="#FEFEFE">
        <p className="text-[24px] md:text-[36.5px] text-[#272928] space-grotesk-medium">
          Innovative Industrial Solutions · Strategic Consulting Expertise ·
          Efficient Machinery Procurement · Sustainable Plastics Recycling ·
          Cutting-Edge Talent Management · Empowering Energy Financing ·
          Innovative Industrial Solutions · Strategic Consulting Expertise ·
          Efficient Machinery Procurement · Sustainable Plastics Recycling ·
          Cutting-Edge Talent Management · Empowering Energy Financing -
        </p>
      </Marquee>
    </motion.div>
  );
};

export default InfiniteCarousel;
