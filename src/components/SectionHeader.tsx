import FadeUpAnimation from "./FadeUpAnimation";
import Eyebrow from "./Eyebrow";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  lead?: string;
}

const SectionHeader = ({ eyebrow, title, lead }: SectionHeaderProps) => (
  <FadeUpAnimation delay={0.1} y={30}>
    <div>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="space-grotesk-semibold text-[28px] md:text-[38px] leading-[1.08] tracking-[-0.01em] mt-[14px] max-w-[640px] text-kelani-teal">
        {title}
      </h2>
      {lead && (
        <p className="museo-sans text-[15px] md:text-[16px] leading-[1.7] text-kelani-teal/70 mt-[18px] max-w-[560px]">
          {lead}
        </p>
      )}
    </div>
  </FadeUpAnimation>
);

export default SectionHeader;
