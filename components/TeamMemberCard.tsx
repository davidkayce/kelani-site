import FadeUpAnimation from "./FadeUpAnimation";

interface TeamMemberCardProps {
    imageUrl: string;
    name: string;
    position: string;
}

const TeamMemberCard = ({ name, position, imageUrl }: TeamMemberCardProps) => {
    return (<FadeUpAnimation delay={0} y={100} className="w-full  flex flex-col pb-[30px]">
        <img src={imageUrl} className="w-full object-cover aspect-[7/11] md:aspect-[0.7]" />
        <div className="pt-[12px] leading-[1.1] text-[14px] md:text-[16px] lg:text-[20px] museo-sans ">
            <p className="font-medium">{name}</p>
            <p className="text-[#7d7d7d] mt-[3px]">{position}</p>
        </div>
    </FadeUpAnimation>)
}

export default TeamMemberCard;