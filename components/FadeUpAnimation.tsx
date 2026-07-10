import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";

interface FadeUpAnimationProps {
    className?: string;
    delay?: number;
    children?: JSX.Element[] | JSX.Element | string;
    y?: number;
    style?: any;
}

const FadeUpAnimation: React.FC<FadeUpAnimationProps> = ({ className, delay = 0.3, children, y = 70, style }) => {
    const { ref: containerRef, inView } = useInView({ triggerOnce: true });
    return (
        <motion.div style={style} ref={containerRef} initial={{ y, opacity: 0 }} animate={inView ? { y: 0, opacity: 1, transition: { duration: 1, delay, ease: [0.43, 0.13, 0.23, 0.96] } } : {}} className={className}>
            {children}
        </motion.div>
    );
}

export default FadeUpAnimation