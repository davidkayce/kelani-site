import { motion } from "framer-motion";

export type PillarTone = "teal" | "mint" | "cream" | "dark" | "white";

const toneStyles: Record<PillarTone, { bg: string; text: string; sub: string; border: string }> = {
  teal: {
    bg: "bg-kelani-teal",
    text: "text-white",
    sub: "text-white/70",
    border: "border-kelani-teal",
  },
  mint: {
    bg: "bg-kelani-mint",
    text: "text-kelani-teal",
    sub: "text-kelani-teal/70",
    border: "border-kelani-mint",
  },
  cream: {
    bg: "bg-kelani-cream",
    text: "text-kelani-teal",
    sub: "text-kelani-teal/70",
    border: "border-kelani-cream",
  },
  dark: {
    bg: "bg-[#0f1930]",
    text: "text-white",
    sub: "text-white/70",
    border: "border-[#0f1930]",
  },
  white: {
    bg: "bg-white",
    text: "text-kelani-teal",
    sub: "text-kelani-teal/60",
    border: "border-[#e4e0d6]",
  },
};

interface PillarBlockProps {
  index: number;
  title: string;
  description: string;
  href?: string;
  tone?: PillarTone;
  cta?: string;
}

const PillarBlock = ({
  index,
  title,
  description,
  href,
  tone = "white",
  cta = "Explore",
}: PillarBlockProps) => {
  const styles = toneStyles[tone];
  const Wrapper = href ? motion.a : motion.div;
  const hover = href
    ? "group hover:bg-kelani-teal hover:border-kelani-teal transition-colors duration-300"
    : "";
  const hoverText = href ? "group-hover:text-white transition-colors duration-300" : "";
  const hoverSub = href ? "group-hover:text-white/70 transition-colors duration-300" : "";

  return (
    <Wrapper
      {...(href ? { href } : {})}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={`flex flex-col justify-between h-full min-h-[300px] p-[28px] md:p-[36px] rounded-[2px] border ${styles.bg} ${styles.border} ${hover} ${
        href ? "cursor-pointer" : ""
      }`}
    >
      <span className={`eyebrow-label opacity-60 ${styles.text} ${hoverText}`}>
        {String(index).padStart(2, "0")}
      </span>
      <div className="mt-[48px]">
        <h3
          className={`space-grotesk-semibold text-[24px] md:text-[27px] leading-[1.12] tracking-[-0.01em] ${styles.text} ${hoverText}`}
        >
          {title}
        </h3>
        <p
          className={`museo-sans text-[14px] md:text-[15px] mt-[14px] leading-[1.65] ${styles.sub} ${hoverSub}`}
        >
          {description}
        </p>
      </div>
      {href && (
        <span
          className={`museo-sans text-[13px] font-semibold uppercase tracking-wider mt-[28px] inline-flex items-center gap-[8px] ${styles.text} ${hoverText}`}
        >
          {cta}
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-300 group-hover:translate-x-[5px]"
          >
            &rarr;
          </span>
        </span>
      )}
    </Wrapper>
  );
};

export default PillarBlock;
