import { motion } from "framer-motion"
import { useRef, useState } from "react";

interface SubsidiaryCardProps {
    themeColor: string;
    subsidiaryName: string;
    index: string;
}

const SubsidiaryCard: React.FC<SubsidiaryCardProps> = ({ themeColor, subsidiaryName, index }) => {
    const [cardHovered, setCardHovered] = useState(false);
    const videoRef = useRef(null)
    return (
        // @ts-expect-error
        <div onClick={() => window.location = `/${subsidiaryName.toLowerCase()}`} onMouseEnter={() => { setCardHovered(true); videoRef.current?.play() }}
            // @ts-expect-error
            onMouseLeave={() => { setCardHovered(false); videoRef.current?.pause() }} className="w-full max-w-[45vw] h-[400px] md:h-[550px]  relativ cursor-pointer">
            <video ref={videoRef} loop autoPlay muted className="absolute top-0 right-0 left-0 bottom-0 w-full h-full object-cover" src="/assets/videos/subsidiary-card-bg.mp4"></video>
            <motion.div className="py-[40px] md:py-[48px] px-[27px] md:px-[40px] w-full h-full flex flex-col  justify-between relative z-[20]">
                <p className="text-white text-[32px] md:text-[44px] lg:text-[54px] space-grotesk-medium relative">{index}</p>
                <motion.h2
                    animate={{ y: cardHovered ? -20 : 0, transition: { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] } }}
                    className="text-[28px] md:text-[40px] text-white space-grotesk-semibold relative w-fit"
                >
                    <span>{subsidiaryName}</span>
                    <motion.svg
                        className="absolute -right-[40px] -top-[5px] rotate-45"
                        initial={{ rotate: "-45deg" }}
                        animate={{
                            x: cardHovered ? 8 : 0,
                            y: cardHovered ? -8 : 0,
                            transition: {
                                duration: 0.3,
                                ease: [0.43, 0.13, 0.23, 0.96],
                            },
                        }}
                        width="33"
                        height="36"
                        viewBox="0 0 11 12"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                    >
                        <path
                            d="M9.64605 6.36485L6.5523 9.4586C6.45544 9.55547 6.32406 9.60989 6.18707 9.60989C6.05008 9.60989 5.9187 9.55547 5.82184 9.4586C5.72497 9.36173 5.67055 9.23036 5.67055 9.09337C5.67055 8.95638 5.72497 8.825 5.82184 8.72813L8.03516 6.51567H1.71875C1.582 6.51567 1.45085 6.46135 1.35415 6.36465C1.25745 6.26795 1.20312 6.1368 1.20312 6.00005C1.20312 5.86329 1.25745 5.73214 1.35415 5.63544C1.45085 5.53874 1.582 5.48442 1.71875 5.48442H8.03516L5.82269 3.27067C5.72583 3.1738 5.67141 3.04242 5.67141 2.90544C5.67141 2.76845 5.72583 2.63707 5.82269 2.5402C5.91956 2.44333 6.05094 2.38892 6.18793 2.38892C6.32492 2.38892 6.4563 2.44333 6.55316 2.5402L9.64691 5.63395C9.69499 5.68192 9.73312 5.73891 9.75911 5.80166C9.7851 5.8644 9.79844 5.93166 9.79836 5.99958C9.79828 6.06749 9.78478 6.13472 9.75864 6.19741C9.73251 6.26009 9.69425 6.317 9.64605 6.36485Z"
                            fill={"white"}
                        />
                    </motion.svg>
                </motion.h2>

            </motion.div>
            <motion.div animate={{ opacity: cardHovered ? 0.8 : 1 }} className="w-full h-full absolute top-0 right-0 left-0 bottom-0 z-[2]" style={{ backgroundColor: themeColor }}></motion.div>

        </div>
    );
}

export default SubsidiaryCard;