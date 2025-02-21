import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface SpotlightCardProps {
  image: string;
  description: string;
  link?: string;
  themeColor: string;
  accentColor: string;
  index: string;
  subtext: string;
}

const SpotlightCard = ({
  description,
  link,
  accentColor,
  index,
  subtext,
}: SpotlightCardProps) => {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef(null);
  return (
    <a
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      href={link}
      target="_blank"
      className="w-full overflow-hidden border-[#D2DADF] flex flex-col cursor-pointer relative h-[65dvh] min-h-[300px] xl:max-h-[600px] 2xl:max-h-[700px] lg:min-h-[600px]"
    >
      <video
        ref={videoRef}
        loop
        autoPlay
        muted
        className="-z-10 absolute top-0 right-0 left-0 bottom-0 w-full h-full object-cover"
        src="/assets/videos/subsidiary-card-bg.mp4"
      ></video>
      {/* <img src={image} className="absolute top-0 right-0 left-0 bottom-0 w-full h-full object-cover"/> */}
      <motion.div
        animate={{ opacity: hovered ? 0.8 : 1, transition: { duration: 0.4 } }}
        style={{ backgroundColor: accentColor }}
        className="w-full h-full top-0 bottom-0 left-0 z-[1] absolute"
      ></motion.div>
      <motion.div
        animate={{
          opacity: hovered ? 1 : 0,
          transition: { duration: hovered ? 0.4 : 0.2 },
        }}
        className="w-full h-full inset-0 absolute flex flex-col justify-end py-[40px] md:py-[48px] px-[27px] md:px-[40px] z-10"
      >
        <p className="text-white museo-sans text-[13px] md:text-[16px] h-[95px]">
          {subtext}
        </p>
      </motion.div>
      <div className="w-full h-full absolute top-0 right-0 left-0 bottom-0 text-white bg-opacity-[0.4] py-[40px] md:py-[48px] px-[27px] md:px-[40px] flex flex-col justify-between  ">
        <p className="text-white text-[32px] md:text-[44px] lg:text-[54px] z-10">
          {index}
        </p>
        <motion.h4
          animate={{
            y: hovered ? -100 : 0,
            transition: { duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] },
          }}
          className="space-grotesk-medium text-[26px] md:text-[28px] lg:text-[36px] z-10 leading-[1.1] !text-white"
        >
          {description}
        </motion.h4>
      </div>
    </a>
  );
};

export default SpotlightCard;
