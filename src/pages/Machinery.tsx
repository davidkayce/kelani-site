import Lenis from "@studio-freight/lenis/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Helmet } from "react-helmet";
import PageShell from "../components/PageShell";
import FadeUpAnimation from "../components/FadeUpAnimation";
import Eyebrow from "../components/Eyebrow";
import LineIcon from "../components/LineIcon";
import { machines, machineCategories, Machine } from "../data/machinery";

const SUPPORT_EMAIL = "support@kelani.ng";

const quoteSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  company: z.string().nonempty({ message: "Company is required" }),
  email: z.string().email({ message: "A valid email is required" }),
  machine: z.string().nonempty({ message: "Select a machine" }),
  message: z.string().optional(),
});
type QuoteSchema = z.infer<typeof quoteSchema>;

const MachineCard = ({
  machine,
  onQuote,
}: {
  machine: Machine;
  onQuote: (m: Machine) => void;
}) => (
  <div className="bg-white border border-[#e4e0d6] rounded-[2px] p-[24px] md:p-[28px] flex flex-col h-full">
    <div className="flex items-start justify-between gap-[12px]">
      <LineIcon name={machine.icon} className="w-11 h-11 text-kelani-teal" />
      <span
        className={`eyebrow-label text-[10.5px] px-[10px] py-[5px] rounded-[2px] ${
          machine.condition === "New"
            ? "bg-kelani-mint/15 text-kelani-teal"
            : "bg-kelani-cream text-kelani-teal/70"
        }`}
      >
        {machine.condition}
      </span>
    </div>
    <p className="eyebrow-label text-kelani-teal/50 mt-[20px]">{machine.category}</p>
    <h3 className="space-grotesk-semibold text-[18px] leading-[1.25] text-kelani-teal mt-[8px]">
      {machine.name}
    </h3>
    <ul className="mt-[14px] flex flex-col gap-[6px] flex-grow">
      {machine.specs.map((spec) => (
        <li
          key={spec}
          className="museo-sans text-[13px] leading-[1.5] text-kelani-teal/65 flex gap-[8px]"
        >
          <span className="text-kelani-mint mt-[1px]">&mdash;</span>
          {spec}
        </li>
      ))}
    </ul>
    <div className="border-t border-[#e4e0d6] mt-[20px] pt-[16px] flex items-center justify-between gap-[12px]">
      <p className="space-grotesk-semibold text-[16px] text-brand-gradient">
        {machine.price}
      </p>
      <button
        type="button"
        onClick={() => onQuote(machine)}
        className="museo-sans text-[12px] font-semibold uppercase tracking-wider text-kelani-teal underline underline-offset-[5px] hover:opacity-60 transition-opacity"
      >
        Request quote
      </button>
    </div>
  </div>
);

const Machinery = ({ lenis }: { lenis: Lenis }) => {
  const [category, setCategory] = useState<(typeof machineCategories)[number]>("All");
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<QuoteSchema>({
    resolver: zodResolver(quoteSchema),
    mode: "onSubmit",
    defaultValues: { machine: "" },
  });

  const visible =
    category === "All" ? machines : machines.filter((m) => m.category === category);

  const startQuote = (machine: Machine) => {
    setValue("machine", machine.name);
    setSent(false);
    document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
  };

  const onSubmit = (data: QuoteSchema) => {
    const subject = `Quote request — ${data.machine}`;
    const body = [
      `Machine: ${data.machine}`,
      `Name: ${data.name}`,
      `Company: ${data.company}`,
      `Email: ${data.email}`,
      "",
      data.message || "(no additional message)",
    ].join("\n");
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const inputClass =
    "bg-transparent border border-[#d8d4c8] focus:border-kelani-teal outline-none rounded-[2px] p-[12px] museo-sans text-[14px] placeholder:text-kelani-teal/40 text-kelani-teal w-full";

  return (
    <PageShell lenis={lenis}>
      <Helmet>
        <title>Machinery — Kelani</title>
      </Helmet>

      <section className="px-clamp-inline pt-[48px] pb-[56px] md:pt-[64px] md:pb-[72px]">
        <FadeUpAnimation delay={0.1}>
          <Eyebrow>Machinery</Eyebrow>
          <h1 className="display-heading mt-[18px] text-kelani-teal max-w-[900px]">
            In stock. Priced. Ready to install.
          </h1>
          <p className="museo-sans text-[16px] md:text-[18px] leading-[1.7] text-kelani-teal/70 mt-[26px] max-w-[620px]">
            Factory-direct industrial machinery from our OEM partners —
            available now from Nigerian stock or on short lead times. Every
            machine comes with installation, commissioning, and our
            after-sales support.
          </p>
        </FadeUpAnimation>
      </section>

      <section className="px-clamp-inline pb-[96px]">
        <FadeUpAnimation delay={0.15} y={20}>
          <div className="flex flex-wrap gap-[10px] border-t border-[#e4e0d6] pt-[24px]">
            {machineCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`museo-sans text-[12.5px] font-semibold uppercase tracking-wider px-[16px] py-[9px] rounded-[2px] border transition-colors ${
                  category === cat
                    ? "bg-kelani-teal text-white border-kelani-teal"
                    : "bg-transparent text-kelani-teal/70 border-[#d8d4c8] hover:border-kelani-teal"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeUpAnimation>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[32px]">
          {visible.map((machine, i) => (
            <FadeUpAnimation key={machine.id} delay={0.1 + (i % 6) * 0.06} y={24}>
              <MachineCard machine={machine} onQuote={startQuote} />
            </FadeUpAnimation>
          ))}
        </div>
        <p className="museo-sans text-[13px] text-kelani-teal/50 mt-[24px] max-w-[560px]">
          Prices are indicative, ex-works, and exclude delivery and
          installation. Don't see what you need? We source to order through
          our OEM network — ask below.
        </p>
      </section>

      <section
        id="quote"
        className="grid md:grid-cols-2 border-t border-[#e4e0d6] scroll-mt-[100px]"
      >
        <FadeUpAnimation delay={0.1}>
          <div className="bg-kelani-cream text-kelani-teal h-full p-[32px] md:p-[56px] flex flex-col justify-center">
            <Eyebrow>Request a quote</Eyebrow>
            <h2
              className="display-heading mt-[16px] text-kelani-teal"
              style={{ fontSize: "clamp(1.75rem, 1.4rem + 1.4vw, 2.75rem)" }}
            >
              Tell us what you're building.
            </h2>
            <p className="museo-sans text-[15px] leading-[1.7] mt-[20px] max-w-[440px] text-kelani-teal/75">
              Pick a machine — or describe the line you're setting up — and
              we'll come back with a formal quote, delivery timeline, and
              installation plan. Volume and multi-machine discounts apply.
            </p>
          </div>
        </FadeUpAnimation>
        <FadeUpAnimation delay={0.25}>
          <div className="bg-white text-kelani-teal h-full p-[32px] md:p-[56px] border-l border-[#e4e0d6]">
            {sent ? (
              <div className="h-full flex flex-col justify-center">
                <p className="space-grotesk-semibold text-[22px]">
                  Thanks &mdash; your email app should be open.
                </p>
                <p className="museo-sans text-kelani-teal/70 mt-[12px] text-[14px]">
                  If it didn't open, email us directly at{" "}
                  <a className="underline" href={`mailto:${SUPPORT_EMAIL}`}>
                    {SUPPORT_EMAIL}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-[16px]"
              >
                <div className="flex flex-col gap-[6px]">
                  <select {...register("machine")} className={inputClass}>
                    <option value="">Select a machine…</option>
                    {machines.map((m) => (
                      <option key={m.id} value={m.name}>
                        {m.name} — {m.price}
                      </option>
                    ))}
                    <option value="Something else / custom order">
                      Something else / custom order
                    </option>
                  </select>
                  {errors.machine && (
                    <span className="text-[12px] text-[#c0392b] museo-sans">
                      {errors.machine.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-[6px]">
                  <input {...register("name")} placeholder="Your name" className={inputClass} />
                  {errors.name && (
                    <span className="text-[12px] text-[#c0392b] museo-sans">
                      {errors.name.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-[6px]">
                  <input
                    {...register("company")}
                    placeholder="Company name"
                    className={inputClass}
                  />
                  {errors.company && (
                    <span className="text-[12px] text-[#c0392b] museo-sans">
                      {errors.company.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-[6px]">
                  <input
                    {...register("email")}
                    placeholder="Email address"
                    className={inputClass}
                  />
                  {errors.email && (
                    <span className="text-[12px] text-[#c0392b] museo-sans">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <textarea
                  {...register("message")}
                  placeholder="Quantities, site location, timeline — anything that helps us quote accurately (optional)"
                  rows={3}
                  className={`${inputClass} resize-none`}
                />
                <button
                  type="submit"
                  className="btn-brand rounded-[2px] py-[13px] px-[32px] w-fit museo-sans font-semibold text-[13px] uppercase tracking-wider mt-[4px]"
                >
                  Request quote
                </button>
                <p className="museo-sans text-[13px] text-kelani-teal/50 mt-[4px]">
                  Prefer email? Write to{" "}
                  <a className="underline" href={`mailto:${SUPPORT_EMAIL}`}>
                    {SUPPORT_EMAIL}
                  </a>{" "}
                  directly.
                </p>
              </form>
            )}
          </div>
        </FadeUpAnimation>
      </section>
    </PageShell>
  );
};

export default Machinery;
