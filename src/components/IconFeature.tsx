import FadeUpAnimation from "./FadeUpAnimation";
import LineIcon, { LineIconName } from "./LineIcon";

interface IconFeatureProps {
  icon: LineIconName;
  title: string;
  description: string;
  tone?: "light" | "dark";
  delay?: number;
}

const IconFeature = ({
  icon,
  title,
  description,
  tone = "light",
  delay = 0.2,
}: IconFeatureProps) => {
  const isDark = tone === "dark";
  return (
    <FadeUpAnimation delay={delay} y={30}>
      <div
        className={`flex flex-col gap-[14px] pt-[22px] pb-[8px] pr-[16px] border-t h-full ${
          isDark
            ? "border-kelani-mint text-white"
            : "border-kelani-teal text-kelani-teal"
        }`}
      >
        <LineIcon
          name={icon}
          className={`w-10 h-10 ${isDark ? "text-kelani-mint" : "text-kelani-teal"}`}
        />
        <h4
          className={`space-grotesk-semibold text-[16px] md:text-[17px] leading-[1.3] ${
            isDark ? "text-white" : "text-kelani-teal"
          }`}
        >
          {title}
        </h4>
        <p
          className={`museo-sans text-[13.5px] md:text-[14px] leading-[1.65] ${
            isDark ? "text-white/70" : "text-kelani-teal/65"
          }`}
        >
          {description}
        </p>
      </div>
    </FadeUpAnimation>
  );
};

export default IconFeature;
