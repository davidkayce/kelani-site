import { motion } from "framer-motion";
import { useRef } from "react";

const StatisticCard = ({
  text,
  icon,
}: // number,
{
  index: number;
  text: string;
  icon: string;
  // number: string;
}) => {
  const container = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["start end", "end start"],
  // });

  // const sectionDecimalScroll = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={container}
      // initial={{ opacity: 0, scale: 0.8 }}
      // animate={{
      //   opacity: sectionDecimalScroll.get() > 0 ? 1 : 0,
      //   scale: sectionDecimalScroll.get() > 0 ? 1 : 0.75,
      //   transition: {
      //     duration: 0.5,
      //     delay: index * 0.15,
      //     ease: [0.43, 0.13, 0.23, 0.96],
      //   },
      // }}
      className="statistic-card py-[24px] md:py-[20px] space-x-[32px] space-y-[32px] lg:space-y-0 h-full space-grotesk-medium"
    >
      <div className="div-block-6 flex justify-between items-center space-x-[10px] gap-[10px]">
        <div className="div-block-7 flex items-center justify-center">
          <img className="" src={`/assets/images/icon-${icon}.svg`} />
        </div>
        <div className="text-left md:hidden block">
          {/* <p className="text-[43px] tracking-[-0.43px] text-center">{number}</p> */}
          <p className="paragraph-10 text-left text-[20px] leading-[1.2] text-[#272928]">
            {text}
          </p>
        </div>

        {/* <p className="paragraph-8 flex md:block items-center justify-center text-[17.28px]">
          0{index}
        </p> */}
      </div>
      <div className="text-left hidden md:block">
        {/* <p className="paragraph-9">{number}</p> */}
        <p className="paragraph-10 lg:text-[30px] leading-[1.2] text-[#272928]">
          {text}
        </p>
      </div>
    </motion.div>
  );
};
export default StatisticCard;
