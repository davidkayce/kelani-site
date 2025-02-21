import { useState } from "react";
import FadeUpAnimation from "./FadeUpAnimation";
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

interface BlogCardProps {
    title: string;
    id: string;
    type: string;
    index: number;
}
const BlogCard: React.FC<BlogCardProps> = ({ title, id, type, index }) => {
    const variant = type == "onlineTraining" ? 0 : type == "article" ? 1 : 2
    const [cardHovered, setCardHovered] = useState(false)
    const navigate = useNavigate()
    const colorVariants = [["#114546", "#0E3738", "#069E7D", "#77d4c0"], ["#5c341a", "#4a2a15", "#E36E1B", "#ec9a5f"], ["#2f2149", "#231937", "#79188C", "#d066e5"]]
    const mapTypeToText: Record<string, string> = {
        onlineTraining: "Online Training",
        article: "Article",
        event: "Event"
    }
    return (
        <FadeUpAnimation delay={window.innerWidth >= 1024 ? (index % 3 == 0 ? 0.3 : index % 3 == 1 ? 0.4 : 0.5) : 0.4}>
            <div style={{ backgroundColor: cardHovered ? colorVariants[variant][0] : colorVariants[variant][1], transition: "all 0.3s" }} onClick={() => navigate(`/blog/${id}`)} onMouseEnter={() => setCardHovered(true)} onMouseLeave={() => setCardHovered(false)} className="w-full  cursor-pointer p-[40px] md:p-[28px] lg:p-[32px] xl:p-[48px] md:aspect-[1.25] lg:aspect-[1.362] flex flex-col justify-between text-white relative overflow-hidden">
                <p className="text-[25px] xl:text-[24px] space-grotesk-medium tracking-tighter z-10 mb-[100px] md:mb-[10px]">{title}</p>
                <div className="w-fit relative h-fit overflow-hidden museo-sans text-[12px] z-10 rounded-[5px]">
                    <p style={{ backgroundColor: colorVariants[variant][2] }} className={`p-[8px] px-[20px] bg-[${colorVariants[variant][2]}] rounded-[5px]`}>{mapTypeToText[type]}</p>
                    <motion.p style={{ backgroundColor: colorVariants[variant][3] }} animate={{ y: cardHovered ? "-100%" : 0, transition: { duration: 0.3 } }} className={`p-[8px] px-[20px] text-black rounded-[5px] absolute -bottom-[100%]`}>{mapTypeToText[type]}</motion.p>
                </div>
                <img className="grayscale w-[300px] absolute opacity-20 z-0 -bottom-[100px] -right-[100px]" src="/assets/images/kelani-icon.svg" />
            </div>
        </FadeUpAnimation>
    );
}

export default BlogCard;