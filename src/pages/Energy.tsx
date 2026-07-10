import Lenis from "@studio-freight/lenis/types";
import { Helmet } from "react-helmet";
import PageShell from "../components/PageShell";
import PillarBlock from "../components/PillarBlock";
import TechAccordion from "../components/TechAccordion";
import FadeUpAnimation from "../components/FadeUpAnimation";

const systems = [
  {
    title: "Biochar",
    body: "Biomass and agricultural waste are pyrolyzed at high temperature in a low-oxygen environment, producing a stable, carbon-rich char used for soil enrichment, carbon sequestration, and industrial filtration — while the process byproducts feed back in as energy.",
  },
  {
    title: "Bioethanol",
    body: "Fermentation of sugar and starch feedstocks (cassava, sugarcane, corn) followed by distillation produces bioethanol for fuel blending and industrial solvent use — a scalable path to cleaner liquid fuel from local agricultural inputs.",
  },
  {
    title: "Biodiesel",
    body: "Vegetable oils and waste cooking oil are converted through transesterification into biodiesel suitable for blending with conventional diesel, cutting emissions without requiring new engine infrastructure.",
  },
  {
    title: "Biogas",
    body: "Organic waste — agricultural residue, food waste, animal manure — is broken down anaerobically to produce biogas for power generation or direct use, with digestate recovered as fertilizer.",
  },
];

const steps = [
  {
    n: "01",
    title: "Design",
    body: "We size and design systems around your feedstock, output needs, and site — not a one-size-fits-all package.",
  },
  {
    n: "02",
    title: "Production",
    body: "Equipment is sourced and, where needed, fabricated to spec, with quality checks before it ever reaches site.",
  },
  {
    n: "03",
    title: "Installation",
    body: "Our team handles commissioning and start-up, so the system is running — not just delivered — when we're done.",
  },
];

const Energy = ({ lenis }: { lenis: Lenis }) => {
  return (
    <PageShell lenis={lenis}>
      <Helmet>
        <title>Energy — Kelani</title>
      </Helmet>

      <section className="px-clamp-inline pt-[32px] pb-[56px] grid lg:grid-cols-2 gap-[40px] items-center">
        <FadeUpAnimation delay={0.1}>
          <span className="eyebrow-label text-kelani-teal/60">Energy</span>
          <h1 className="display-heading mt-[16px] text-kelani-teal">
            Biomass into power, fuel, and fertility.
          </h1>
          <p className="museo-sans text-[16px] md:text-[18px] leading-[1.7] text-kelani-teal/70 mt-[24px] max-w-[560px]">
            Kelani designs, produces, and installs integrated systems across
            biochar, bioethanol, biodiesel, and biogas — turning
            agricultural and organic waste into usable energy and materials.
            It's also a line we intend to build in ourselves, not just supply.
          </p>
        </FadeUpAnimation>
        <FadeUpAnimation delay={0.25}>
          <img
            src="/assets/images/power-image.png"
            alt="Solar energy infrastructure"
            className="w-full h-[320px] md:h-[420px] object-cover"
          />
        </FadeUpAnimation>
      </section>

      <section className="px-clamp-inline pb-[80px] grid sm:grid-cols-2 lg:grid-cols-4 gap-[16px]">
        {systems.map((system, i) => (
          <FadeUpAnimation key={system.title} delay={0.15 + i * 0.08}>
            <PillarBlock
              index={i + 1}
              tone={i === 1 ? "mint" : "white"}
              title={system.title}
              description={system.body}
            />
          </FadeUpAnimation>
        ))}
      </section>

      <section className="bg-kelani-cream px-clamp-inline py-[64px] grid md:grid-cols-2 gap-[32px] items-center">
        <FadeUpAnimation delay={0.1}>
          <img
            src="/assets/images/carbon.jpg"
            alt="Refuelling with liquid fuel"
            className="w-full h-[300px] object-cover"
          />
        </FadeUpAnimation>
        <FadeUpAnimation delay={0.2}>
          <span className="eyebrow-label text-kelani-teal/60">
            How it works
          </span>
          <h2 className="space-grotesk-semibold text-[26px] md:text-[32px] mt-[12px] max-w-[480px] text-kelani-teal">
            Integrated design, production, and installation.
          </h2>
          <div className="grid gap-[20px] mt-[24px]">
            {steps.map((step) => (
              <div key={step.n} className="flex gap-[16px]">
                <p className="space-grotesk-semibold text-[24px] text-kelani-teal/30 w-[36px] shrink-0">
                  {step.n}
                </p>
                <div>
                  <h3 className="space-grotesk-semibold text-[17px] text-kelani-teal">
                    {step.title}
                  </h3>
                  <p className="museo-sans text-[14px] leading-[1.7] mt-[4px] text-kelani-teal/70">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeUpAnimation>
      </section>

      <section className="px-clamp-inline py-[64px] border-t border-[#e4e0d6]">
        <FadeUpAnimation delay={0.1}>
          <span className="eyebrow-label text-kelani-teal/60">
            The technology
          </span>
          <h2 className="space-grotesk-semibold text-[26px] md:text-[32px] mt-[12px] max-w-[560px] text-kelani-teal">
            A closer look at each system.
          </h2>
        </FadeUpAnimation>
        <div className="mt-[32px] max-w-[720px]">
          <TechAccordion items={systems.map((s) => ({ title: s.title, body: s.body }))} />
        </div>
      </section>

      <section className="px-clamp-inline py-[72px] bg-kelani-cream grid md:grid-cols-2 gap-[32px] items-center">
        <FadeUpAnimation delay={0.1}>
          <span className="eyebrow-label text-kelani-teal/60">
            Building the future
          </span>
          <h2 className="space-grotesk-semibold text-[26px] md:text-[32px] mt-[12px] max-w-[480px] text-kelani-teal">
            We're not just equipping this industry — we intend to build in it.
          </h2>
          <p className="museo-sans text-[15px] leading-[1.7] mt-[16px] max-w-[480px] text-kelani-teal/70">
            Beyond sourcing and installing systems for clients, Kelani is
            working toward operating our own biochar and bioenergy production
            — putting the same integrated design-production-installation
            model to work on our own site. It's early, but it's where we're
            headed.
          </p>
        </FadeUpAnimation>
        <FadeUpAnimation delay={0.25}>
          <img
            src="/assets/images/renewableenergy.jpg"
            alt="Sustainable growth from renewable energy"
            className="w-full h-[300px] object-cover"
          />
        </FadeUpAnimation>
      </section>

      <section className="px-clamp-inline py-[56px] border-t border-[#e4e0d6]">
        <div className="grid sm:grid-cols-3 gap-[32px] max-w-[900px]">
          <div>
            <p className="space-grotesk-semibold text-[40px] text-kelani-teal">20+</p>
            <p className="museo-sans text-[14px] text-kelani-teal/60">
              Years of flawless delivery
            </p>
          </div>
          <div>
            <p className="space-grotesk-semibold text-[40px] text-kelani-teal">$500M+</p>
            <p className="museo-sans text-[14px] text-kelani-teal/60">
              In machinery sourced and installed
            </p>
          </div>
          <div>
            <p className="space-grotesk-semibold text-[40px] text-kelani-teal">250+</p>
            <p className="museo-sans text-[14px] text-kelani-teal/60">
              Client businesses served
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Energy;
