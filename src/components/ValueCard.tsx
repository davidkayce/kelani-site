import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion"

interface ValueCardProps {
    header: string;
    paragraph: string;
    image: string;
    backgroundColor: string;
}

const ValueCard = ({ header, paragraph, backgroundColor, image }: ValueCardProps) => {
    const valueCardRef = useRef(null);
    const { scrollYProgress: valuesScrollYProgress } = useScroll({
        target: valueCardRef,
        offset: ["start end", "1.4 end"],
    });

    const progress = useTransform(
        valuesScrollYProgress,
        [0, 0.6, 1],
        [0, 0, 1]
    );
    const valueCardWidth = useTransform(
        valuesScrollYProgress,
        [0, 1],
        ["10%", "100%"]
    );
    const imageRef = useRef(null);
    const valueCardImageRightPosition = useTransform(
        valuesScrollYProgress,
        [0, 1],
        // @ts-expect-error
        [1.5 * -imageRef.current?.offsetWidth, 0]
    );
    return (
        <motion.div ref={valueCardRef} className="w-full relative">
            <motion.div style={{ opacity: progress }} className="pt-[30px] md:pt-[64px] pb-[20px] md:pb-[40px] px-[8%] relative z-20">
                <h4 className="text-[20px] md:text-[28px] lg:text-[36px] space-grotesk-medium">{header}</h4>
                <p className="w-[85%] md:w-[50%] text-[12.8px] leading-[1.1] lg:text-[16px] museo-sans">{paragraph}</p>
                <img className="grayscale w-[40px] md:w-[60px] mt-[80px] md:mt-[40px]" src="/assets/images/kelani-icon.svg" />
            </motion.div>
            <motion.div style={{ width: valueCardWidth }} className="overflow-hidden w-full h-full absolute top-0 left-0">
                <motion.div className="w-full h-full absolute top-0 right-0 bottom-0 left-0" style={{ backgroundColor }}>
                </motion.div>
                <motion.img ref={imageRef} src={image} style={{ right: valueCardImageRightPosition }} className="h-[50%] md:min-h-full md:h-full w-auto md:min-w-fit absolute bottom-0 md:top-[13px] z-10 right-0" />
            </motion.div>
        </motion.div>
    );
}

export default ValueCard;