import { Variants, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Contents {
  img: string;
  img2: string;
  head: string;
  desc: string;
  colour: string;
}

const FeatureItem = ({ index, item }: { index: number; item: Contents }) => {
  const image: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
    hidden: {
      opacity: 0,
      //   y: 60,
      scale: 0.5,
    },
  };
  const text: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
  };
  const { ref: imageRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: headTextRef } = useInView({
    triggerOnce: true,
  });
  return (
    <div
      key={index}
      className="w-full xl:w-fit flex-col flex justify-center items-center "
    >
      <div
        // key={index}
        className="flex py-4 w-full md:w-[270px] mb-10 flex-col justify-center items-center"
      >
        <motion.img
          ref={imageRef}
          variants={image}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          src={item.img}
          className="pb-4 md:p-0 w-[100px] sm:w-[10rem] object-cover md:w-[120px] opacity-90 "
          alt={item.head}
        />
        <img src={item.img2} className="w-[100vw] lg:hidden" alt="" />
        <motion.h1
          ref={headTextRef}
          variants={text}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className={`${item.colour} px-4 text-xl_2 font-semibold opacity-90 md:text-2xl mt-3 mb-3 lg:mb-6 museo-sans lg:min-h-[60px] flex items-center`}
        >
          {item.head}
        </motion.h1>
        <motion.p
          ref={headTextRef}
          variants={text}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-sm opacity-80 px-4 font-medium museo-sans"
        >
          {item.desc}
        </motion.p>
      </div>
    </div>
  );
};

export default FeatureItem;
