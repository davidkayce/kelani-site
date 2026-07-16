import FadeUpAnimation from "./FadeUpAnimation";

interface Stat {
  value: string;
  label: string;
}

const StatBand = ({ stats }: { stats: Stat[] }) => (
  <FadeUpAnimation delay={0.15} y={30}>
    <div className="grid sm:grid-cols-3 gap-[28px]">
      {stats.map((stat) => (
        <div key={stat.label}>
          <div className="h-[2px] w-full bg-brand-gradient" aria-hidden="true" />
          <p className="space-grotesk-semibold text-[44px] md:text-[52px] leading-none text-kelani-teal pt-[22px]">
            {stat.value}
          </p>
          <p className="museo-sans text-[14px] text-kelani-teal/60 mt-[12px]">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  </FadeUpAnimation>
);

export default StatBand;
