import { motion } from "framer-motion";

interface TextAnimationProps {
  text: string;
  lineHeight: number;
  delay?: number;
}

const TextAnimation: React.FC<TextAnimationProps> = ({
  text,
  lineHeight,
//   delay,
}) => {
  return (
    <div className="flex flex-wrap space-x-[18px]">
      {text?.split(" ").map((word, index) => {
        return (
          <div key={index} className="overflow-hidden flex">
            {word.split("").map((letter: string, index: number) => {
              return (
                <motion.div
                  initial={{ y: lineHeight, scale: 0.9 }}
                  animate={
                     {
                          y: -3,
                          transition: {
                            duration: 0.7,
                            ease: [0.43, 0.13, 0.23, 0.96],
                            delay: 0.2 + 0.05 * index,
                          },
                          scale: 1,
                        }
                  }
                >
                  {letter}
                </motion.div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default TextAnimation;
