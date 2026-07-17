import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FadeUpAnimation from "./FadeUpAnimation";
import Eyebrow from "./Eyebrow";

const schema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  company: z.string().nonempty({ message: "Company name is required" }),
  email: z.string().email({ message: "A valid email is required" }),
  message: z.string().optional(),
});

type FormSchema = z.infer<typeof schema>;

const SUPPORT_EMAIL = "support@kelani.ng";

const FinanceCallout = ({ industry }: { industry: string }) => {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });

  const onSubmit = (data: FormSchema) => {
    const subject = `LC & trade-fee recovery — ${data.company}`;
    const bodyLines = [
      `Name: ${data.name}`,
      `Company: ${data.company}`,
      `Email: ${data.email}`,
      "",
      data.message || "(no additional message)",
    ];
    const mailto = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <section id="finance" className="grid md:grid-cols-2 border-t border-[#e4e0d6] scroll-mt-[100px]">
      <FadeUpAnimation delay={0.1}>
        <div className="bg-kelani-cream text-kelani-teal h-full p-[32px] md:p-[56px] flex flex-col justify-center">
          <Eyebrow>Finance &mdash; coming soon</Eyebrow>
          <h3 className="display-heading mt-[16px] text-kelani-teal" style={{ fontSize: "clamp(1.75rem, 1.4rem + 1.4vw, 2.75rem)" }}>
            Importing on letters of credit? You're probably overpaying.
          </h3>
          <p className="museo-sans text-[15px] leading-[1.7] mt-[20px] max-w-[440px] text-kelani-teal/75">
            LC issuance, confirmation and amendment charges, discrepancy
            fees, FX spreads, demurrage and shipping-line surcharges &mdash;
            trade finance is full of costs that are miscalculated,
            duplicated, or simply contestable. We're building a service that
            audits your LCs and shipping files, contests the excess, and
            recovers the money &mdash; our fee comes only out of what we
            recover. If you run LCs for your {industry} business, tell us a
            bit about you and we'll be in touch.
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
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[16px]">
              <div className="flex flex-col gap-[6px]">
                <input
                  {...register("name")}
                  placeholder="Your name"
                  className="bg-transparent border border-[#d8d4c8] focus:border-kelani-teal outline-none rounded-[2px] p-[12px] museo-sans text-[14px] placeholder:text-kelani-teal/40"
                />
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
                  className="bg-transparent border border-[#d8d4c8] focus:border-kelani-teal outline-none rounded-[2px] p-[12px] museo-sans text-[14px] placeholder:text-kelani-teal/40"
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
                  className="bg-transparent border border-[#d8d4c8] focus:border-kelani-teal outline-none rounded-[2px] p-[12px] museo-sans text-[14px] placeholder:text-kelani-teal/40"
                />
                {errors.email && (
                  <span className="text-[12px] text-[#c0392b] museo-sans">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <textarea
                {...register("message")}
                placeholder="Tell us about your LC volumes, banks, or the charges you'd like reviewed (optional)"
                rows={3}
                className="bg-transparent border border-[#d8d4c8] focus:border-kelani-teal outline-none rounded-[2px] p-[12px] museo-sans text-[14px] placeholder:text-kelani-teal/40 resize-none"
              />
              <button
                type="submit"
                className="btn-brand rounded-[2px] py-[12px] px-[28px] w-fit museo-sans font-semibold text-[14px] mt-[4px]"
              >
                Send
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
  );
};

export default FinanceCallout;
