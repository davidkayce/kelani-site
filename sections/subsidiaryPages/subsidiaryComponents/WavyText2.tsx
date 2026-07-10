import { FC, useRef } from "react";
import { motion, Variants, HTMLMotionProps } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props extends HTMLMotionProps<"div"> {
  text: string;
  delay?: number;
  duration?: number;
}

const WavyText2: FC<Props> = ({
  text,
  delay = 0,
  duration = 0.01,
  ...props
}: Props) => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const { ref, inView } = useInView({ triggerOnce: true });

  const splitText = text.split(" ");

  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.h1
      className="text-2_5xl flex-wrap items-center justify-center font-semibold opacity-85 lg:text-4xl w-[90%] lg:w-[55%] space-grotesk-medium"
      style={{ display: "flex", overflow: "hidden" }}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={containerRef}
      {...props}
    >
      <div className="w-full flex flex-wrap justify-center" ref={ref}>
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
      </div>
    </motion.h1>
  );
};

export default WavyText2;
