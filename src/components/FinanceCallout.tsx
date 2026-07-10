import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FadeUpAnimation from "./FadeUpAnimation";

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
    const subject = `Finance recovery interest — ${data.company}`;
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
    <section id="finance" className="grid md:grid-cols-2 scroll-mt-[100px]">
      <FadeUpAnimation delay={0.1}>
        <div className="bg-kelani-cream text-kelani-teal h-full p-[32px] md:p-[56px] flex flex-col justify-center">
          <span className="eyebrow-label text-kelani-teal/60">
            Finance &mdash; coming soon
          </span>
          <h3 className="display-heading mt-[16px] text-kelani-teal" style={{ fontSize: "clamp(1.75rem, 1.4rem + 1.4vw, 2.75rem)" }}>
            Recovering fees you're already owed
          </h3>
          <p className="museo-sans text-[15px] leading-[1.7] mt-[20px] max-w-[440px] text-kelani-teal/75">
            We're building a service to help manufacturers and industrial
            clients recover excess shipping and bank fees that are too high
            or can be contested &mdash; we work with you to recover the money
            and only take a fee from what's recovered. If that's useful for
            your {industry} business, tell us a bit about you and we'll be
            in touch.
          </p>
        </div>
      </FadeUpAnimation>
      <FadeUpAnimation delay={0.25}>
        <div className="bg-kelani-teal text-white h-full p-[32px] md:p-[56px]">
          {sent ? (
            <div className="h-full flex flex-col justify-center">
              <p className="space-grotesk-semibold text-[22px]">
                Thanks &mdash; your email app should be open.
              </p>
              <p className="museo-sans text-white/70 mt-[12px] text-[14px]">
                If it didn't open, email us directly at{" "}
                <a className="text-kelani-mint underline" href={`mailto:${SUPPORT_EMAIL}`}>
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
                  className="bg-transparent border border-white/25 focus:border-kelani-mint outline-none rounded-[8px] p-[12px] museo-sans text-[14px] placeholder:text-white/40"
                />
                {errors.name && (
                  <span className="text-[12px] text-[#ff8a7a] museo-sans">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-[6px]">
                <input
                  {...register("company")}
                  placeholder="Company name"
                  className="bg-transparent border border-white/25 focus:border-kelani-mint outline-none rounded-[8px] p-[12px] museo-sans text-[14px] placeholder:text-white/40"
                />
                {errors.company && (
                  <span className="text-[12px] text-[#ff8a7a] museo-sans">
                    {errors.company.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-[6px]">
                <input
                  {...register("email")}
                  placeholder="Email address"
                  className="bg-transparent border border-white/25 focus:border-kelani-mint outline-none rounded-[8px] p-[12px] museo-sans text-[14px] placeholder:text-white/40"
                />
                {errors.email && (
                  <span className="text-[12px] text-[#ff8a7a] museo-sans">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <textarea
                {...register("message")}
                placeholder="Tell us a bit about the fees you're looking to recover (optional)"
                rows={3}
                className="bg-transparent border border-white/25 focus:border-kelani-mint outline-none rounded-[8px] p-[12px] museo-sans text-[14px] placeholder:text-white/40 resize-none"
              />
              <button
                type="submit"
                className="bg-kelani-mint text-kelani-teal rounded-full py-[12px] px-[28px] w-fit museo-sans font-semibold text-[14px] mt-[4px] hover:opacity-90 transition-opacity"
              >
                Send
              </button>
              <p className="museo-sans text-[13px] text-white/50 mt-[4px]">
                Prefer email? Write to{" "}
                <a className="text-kelani-mint underline" href={`mailto:${SUPPORT_EMAIL}`}>
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
