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
        className={`flex flex-col gap-[16px] p-[24px] rounded-[14px] border h-full ${
          isDark
            ? "border-white/15 text-white"
            : "border-kelani-teal/10 text-kelani-teal"
        }`}
      >
        <LineIcon
          name={icon}
          className={`w-9 h-9 ${isDark ? "text-kelani-mint" : "text-kelani-teal"}`}
        />
        <h4
          className={`space-grotesk-semibold text-[17px] leading-[1.3] ${
            isDark ? "text-white" : "text-kelani-teal"
          }`}
        >
          {title}
        </h4>
        <p
          className={`museo-sans text-[14px] leading-[1.6] ${
            isDark ? "text-white/70" : "text-kelani-teal/70"
          }`}
        >
          {description}
        </p>
      </div>
    </FadeUpAnimation>
  );
};

export default IconFeature;
