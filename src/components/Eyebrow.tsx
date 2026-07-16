import { ReactNode } from "react";

const Eyebrow = ({
  children,
  className = "text-kelani-teal/60",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <span className={`eyebrow-label inline-flex items-center gap-[10px] ${className}`}>
    <span
      className="inline-block w-[22px] h-[2px] bg-brand-gradient"
      aria-hidden="true"
    />
    {children}
  </span>
);

export default Eyebrow;
