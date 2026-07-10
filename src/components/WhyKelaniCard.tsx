import useScreenSize from "../hooks/useScreenSize";
import FadeUpAnimation from "./FadeUpAnimation";

interface WhyKelaniCardProps {
    icon: string;
    title: string;
    text: string;
    index: number;
}

const WhyKelaniCard = ({ icon, title, text, index }: WhyKelaniCardProps) => {
    const { width } = useScreenSize()
    return (
        <FadeUpAnimation style={{ borderRight: index == 1 ? "1px solid rgba(255,255,255,0.5)" : "", borderBottom: width < 768 && index == 1 ? "1px solid rgba(255,255,255,0.5)" : "" }} className="w-full flex flex-col px-[20px] lg:px-[48px] pt-[30px] lg:pt-[48px] pb-[30px] lg:pb-[60px]"
        >
            <img className="w-[140px] md:w-[200px] lg:w-[240px] opacity-80" src={icon} />
            <div className="text-[white] xl:max-w-[80%] mt-[16px] lg:mt-[30px]">
                <h3 className="space-grotesk-medium tracking-tighter text-[30px] lg:text-[38px]">{title}</h3>
                <p className="museo-sans text-[12.8px] lg:text-[16px] mt-[5px] lg:mt-[10px]">{text}</p>
            </div>
        </FadeUpAnimation>
    )
}

export default WhyKelaniCard;