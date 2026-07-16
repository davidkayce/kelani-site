import FadeUpAnimation from "./FadeUpAnimation";

interface Step {
  title: string;
  body: string;
  label?: string;
}

const LifecycleSteps = ({
  steps,
  cols = 5,
}: {
  steps: Step[];
  cols?: 3 | 4 | 5;
}) => (
  <ol
    className={`grid gap-y-[32px] md:gap-x-[24px] ${
      cols === 5 ? "md:grid-cols-5" : cols === 4 ? "md:grid-cols-4" : "md:grid-cols-3"
    }`}
  >
    {steps.map((step, i) => (
      <FadeUpAnimation key={step.title} delay={0.15 + i * 0.08} y={30}>
        <li className="border-t border-kelani-teal pt-[18px] h-full">
          <span className="space-grotesk-semibold text-[15px] text-kelani-mint">
            {step.label ?? String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="space-grotesk-semibold text-[18px] md:text-[19px] text-kelani-teal mt-[10px]">
            {step.title}
          </h3>
          <p className="museo-sans text-[13.5px] md:text-[14px] leading-[1.65] text-kelani-teal/65 mt-[10px]">
            {step.body}
          </p>
        </li>
      </FadeUpAnimation>
    ))}
  </ol>
);

export default LifecycleSteps;
