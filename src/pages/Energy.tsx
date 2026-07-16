import Lenis from "@studio-freight/lenis/types";
import { Helmet } from "react-helmet";
import PageShell from "../components/PageShell";
import PillarBlock from "../components/PillarBlock";
import TechAccordion from "../components/TechAccordion";
import FadeUpAnimation from "../components/FadeUpAnimation";
import SectionHeader from "../components/SectionHeader";
import Eyebrow from "../components/Eyebrow";
import StatBand from "../components/StatBand";

const systems = [
  {
    title: "Biochar carbonisation",
    body: "Biomass and agricultural residues are pyrolyzed in a low-oxygen environment, producing a stable, carbon-rich char for soil enrichment, carbon removal, and industrial filtration — while syngas byproducts feed back in as energy. This is the archetype behind our first BOOT plant.",
  },
  {
    title: "Anaerobic digestion",
    body: "Organic waste — agricultural residue, food waste, animal manure — is broken down anaerobically into biomethane for power generation or direct use, with digestate recovered as organic fertiliser.",
  },
  {
    title: "Biofuels",
    body: "Fermentation and distillation of local feedstocks produces bioethanol, while vegetable and waste cooking oils convert to biodiesel — cleaner liquid fuels that blend into existing engines and supply chains.",
  },
  {
    title: "Waste-to-energy",
    body: "Sorted municipal waste is processed into refuse-derived fuel and gasified into power and heat — industrial energy at cluster scale, from a waste stream someone else pays to remove.",
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

      <section className="px-clamp-inline pt-[48px] pb-[72px] md:pt-[64px] md:pb-[96px] grid lg:grid-cols-2 gap-[48px] items-center">
        <FadeUpAnimation delay={0.1}>
          <Eyebrow>Energy</Eyebrow>
          <h1 className="display-heading mt-[18px] text-kelani-teal">
            Biomass into power, fuel, and fertility.
          </h1>
          <p className="museo-sans text-[16px] md:text-[18px] leading-[1.7] text-kelani-teal/70 mt-[26px] max-w-[540px]">
            Kelani designs, builds, and operates integrated systems across
            biochar, biogas, biofuels, and waste-to-energy — turning
            agricultural, organic, and municipal waste into usable energy and
            materials. These are the plant archetypes at the heart of our{" "}
            <a href="/model" className="underline underline-offset-[4px] hover:opacity-70">
              Build-Own-Operate-Transfer model
            </a>
            .
          </p>
        </FadeUpAnimation>
        <FadeUpAnimation delay={0.25}>
          <figure>
            <img
              src="/assets/images/power-image.png"
              alt="Solar energy infrastructure"
              className="w-full h-[320px] md:h-[440px] object-cover img-editorial"
            />
            <figcaption className="museo-sans text-[12px] text-kelani-teal/50 mt-[10px]">
              Clean generation — one part of an integrated energy mix.
            </figcaption>
          </figure>
        </FadeUpAnimation>
      </section>

      <section className="px-clamp-inline pb-[96px] md:pb-[120px] grid sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
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

      <section className="bg-kelani-cream px-clamp-inline py-[72px] md:py-[96px] grid md:grid-cols-2 gap-[48px] items-center">
        <FadeUpAnimation delay={0.1}>
          <figure>
            <img
              src="/assets/images/carbon.jpg"
              alt="Refuelling with liquid fuel"
              className="w-full h-[340px] object-cover img-editorial"
            />
            <figcaption className="museo-sans text-[12px] text-kelani-teal/50 mt-[10px]">
              Drop-in fuels, made from local feedstocks.
            </figcaption>
          </figure>
        </FadeUpAnimation>
        <FadeUpAnimation delay={0.2}>
          <Eyebrow>How it works</Eyebrow>
          <h2 className="space-grotesk-semibold text-[28px] md:text-[38px] leading-[1.08] tracking-[-0.01em] mt-[14px] max-w-[480px] text-kelani-teal">
            Integrated design, production, and installation.
          </h2>
          <div className="grid gap-[24px] mt-[32px]">
            {steps.map((step) => (
              <div key={step.n} className="flex gap-[18px] border-t border-kelani-teal/15 pt-[18px]">
                <p className="eyebrow-label text-kelani-teal/40 w-[30px] shrink-0 pt-[4px]">
                  {step.n}
                </p>
                <div>
                  <h3 className="space-grotesk-semibold text-[17px] text-kelani-teal">
                    {step.title}
                  </h3>
                  <p className="museo-sans text-[14px] leading-[1.7] mt-[6px] text-kelani-teal/70">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeUpAnimation>
      </section>

      <section className="px-clamp-inline py-[72px] md:py-[96px] border-t border-[#e4e0d6]">
        <SectionHeader
          eyebrow="The technology"
          title="A closer look at each system."
        />
        <div className="mt-[36px] max-w-[760px]">
          <TechAccordion items={systems.map((s) => ({ title: s.title, body: s.body }))} />
        </div>
      </section>

      <section className="px-clamp-inline py-[72px] md:py-[96px] bg-kelani-cream grid md:grid-cols-2 gap-[48px] items-center">
        <FadeUpAnimation delay={0.1}>
          <Eyebrow>Building the future</Eyebrow>
          <h2 className="space-grotesk-semibold text-[28px] md:text-[38px] leading-[1.08] tracking-[-0.01em] mt-[14px] max-w-[500px] text-kelani-teal">
            We don't just equip this industry — we build, own, and operate in it.
          </h2>
          <p className="museo-sans text-[15px] leading-[1.7] mt-[18px] max-w-[480px] text-kelani-teal/70">
            Our first Build-Own-Operate-Transfer plant — a biomass
            carbonisation facility in an Eastern Nigeria feedstock cluster —
            anchors a growing network of owned and managed plants. Every one
            follows the same five-step lifecycle and the same operating
            playbook.
          </p>
          <a
            href="/model"
            className="inline-block mt-[24px] museo-sans font-semibold text-[13px] uppercase tracking-wider text-kelani-teal underline underline-offset-[6px] hover:opacity-60 transition-opacity"
          >
            Explore the BOOT engine &rarr;
          </a>
        </FadeUpAnimation>
        <FadeUpAnimation delay={0.25}>
          <figure>
            <img
              src="/assets/images/renewableenergy.jpg"
              alt="Sustainable growth from renewable energy"
              className="w-full h-[340px] object-cover img-editorial"
            />
            <figcaption className="museo-sans text-[12px] text-kelani-teal/50 mt-[10px]">
              Energy that gives back — power, fuel, and soil fertility.
            </figcaption>
          </figure>
        </FadeUpAnimation>
      </section>

      <section className="px-clamp-inline py-[72px] md:py-[96px] border-t border-[#e4e0d6]">
        <StatBand
          stats={[
            { value: "20+", label: "Years of flawless delivery" },
            { value: "$500M+", label: "In machinery sourced and installed" },
            { value: "250+", label: "Client businesses served" },
          ]}
        />
      </section>
    </PageShell>
  );
};

export default Energy;
