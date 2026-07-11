import { useState } from "react";

interface AccordionItem {
  title: string;
  body: string;
}

const ToggleIcon = ({ expanded }: { expanded: boolean }) => (
  <svg
    width={27}
    height={26}
    viewBox="0 0 27 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    className="toggle-button"
  >
    <circle
      cx="13.4104"
      cy="13.1458"
      r="12.1418"
      stroke="currentColor"
      className="toggle-button__circle"
    />
    <path
      d="M6.34766 13.1455H20.4727"
      stroke="currentColor"
      className="toggle-button__horizontal"
    />
    <path
      d="M13.4102 6.08301L13.4102 20.208"
      stroke="currentColor"
      className="toggle-button__vertical"
      style={{ opacity: expanded ? 0 : 1, transition: "opacity 0.2s" }}
    />
  </svg>
);

const TechAccordion = ({ items }: { items: AccordionItem[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <ul className="accordion">
      {items.map((item, i) => {
        const expanded = openIndex === i;
        return (
          <li key={item.title} className="border-b border-kelani-teal/15">
            <button
              type="button"
              className="accordion__trigger w-full text-left py-[22px] flex items-center justify-between gap-[16px]"
              aria-expanded={expanded}
              onClick={() => setOpenIndex(expanded ? null : i)}
            >
              <h4 className="space-grotesk-semibold text-[17px] md:text-[20px] flex items-center justify-between w-full gap-[16px] text-kelani-teal">
                <span className="flex items-baseline gap-[18px]">
                  <span className="eyebrow-label text-kelani-teal/40 w-[26px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.title}
                </span>
                <ToggleIcon expanded={expanded} />
              </h4>
            </button>
            <div className="accordion__target" {...(expanded ? {} : { inert: "" })}>
              <div>
                <p className="museo-sans text-kelani-teal/70 text-[15px] leading-[1.7] pb-[24px] pl-[44px] max-w-[560px]">
                  {item.body}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TechAccordion;
