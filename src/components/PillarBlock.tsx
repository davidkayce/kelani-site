import { motion } from "framer-motion";

export type PillarTone = "teal" | "mint" | "cream" | "dark";

const toneStyles: Record<PillarTone, { bg: string; text: string; sub: string; border: string }> = {
  teal: {
    bg: "bg-kelani-teal",
    text: "text-white",
    sub: "text-white/70",
    border: "border-white/15",
  },
  mint: {
    bg: "bg-kelani-mint",
    text: "text-kelani-teal",
    sub: "text-kelani-teal/70",
    border: "border-kelani-teal/15",
  },
  cream: {
    bg: "bg-kelani-cream",
    text: "text-kelani-teal",
    sub: "text-kelani-teal/70",
    border: "border-kelani-teal/10",
  },
  dark: {
    bg: "bg-[#0f1930]",
    text: "text-white",
    sub: "text-white/70",
    border: "border-white/15",
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
  tone = "teal",
  cta = "Explore",
}: PillarBlockProps) => {
  const styles = toneStyles[tone];
  const Wrapper = href ? motion.a : motion.div;

  return (
    <Wrapper
      {...(href ? { href } : {})}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={`flex flex-col justify-between h-full min-h-[280px] p-[28px] md:p-[36px] rounded-[16px] border ${styles.bg} ${styles.border} ${
        href ? "cursor-pointer" : ""
      }`}
    >
      <span className={`eyebrow-label opacity-60 ${styles.text}`}>
        {String(index).padStart(2, "0")}
      </span>
      <div className="mt-[40px]">
        <h3
          className={`space-grotesk-semibold text-[24px] md:text-[28px] leading-[1.15] ${styles.text}`}
        >
          {title}
        </h3>
        <p className={`museo-sans text-[14px] md:text-[15px] mt-[12px] leading-[1.6] ${styles.sub}`}>
          {description}
        </p>
      </div>
      {href && (
        <span
          className={`museo-sans text-[13px] font-semibold uppercase tracking-wider mt-[24px] inline-flex items-center gap-[8px] ${styles.text}`}
        >
          {cta}
          <span aria-hidden="true">&rarr;</span>
        </span>
      )}
    </Wrapper>
  );
};

export default PillarBlock;
