import Lenis from "@studio-freight/lenis/types";
import { Helmet } from "react-helmet";
import PageShell from "../components/PageShell";
import PillarBlock from "../components/PillarBlock";
import FadeUpAnimation from "../components/FadeUpAnimation";
import Eyebrow from "../components/Eyebrow";
import SectionHeader from "../components/SectionHeader";
import StatBand from "../components/StatBand";

const Home = ({ lenis }: { lenis: Lenis }) => {
  return (
    <PageShell lenis={lenis}>
      <Helmet>
        <title>Kelani — The Industrial Circular-Economy Platform</title>
      </Helmet>

      <section className="px-clamp-inline pt-[56px] pb-[64px] md:pt-[80px] md:pb-[88px]">
        <FadeUpAnimation delay={0.1}>
          <p className="space-grotesk-semibold text-[22px] md:text-[26px] bg-gradient-to-r from-[#440572e6] to-[#ff9a53] bg-clip-text text-transparent w-fit">
            Kelani
          </p>
          <h1 className="display-heading mt-[16px] text-kelani-teal max-w-[1000px]">
            We build, own, operate &amp; manage industrial companies.
          </h1>
          <p className="museo-sans text-[16px] md:text-[18px] leading-[1.7] text-kelani-teal/70 mt-[26px] max-w-[620px]">
            Kelani is West Africa's industrial circular-economy platform —
            converting industrial and municipal waste streams into clean
            energy, recovered materials, biochar and recovered chemicals,
            through a repeatable model applied plant after plant.
          </p>
          <div className="flex flex-wrap items-center gap-[24px] mt-[36px]">
            <a
              href="/model"
              className="inline-block bg-kelani-teal text-white rounded-[2px] py-[15px] px-[32px] museo-sans font-semibold text-[13px] uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Explore the model
            </a>
            <a
              href="mailto:support@kelani.ng?subject=Partnership%20—%20Kelani%20platform"
              className="museo-sans font-semibold text-[13px] uppercase tracking-wider text-kelani-teal underline underline-offset-[6px] hover:opacity-60 transition-opacity"
            >
              Partner with us
            </a>
          </div>
        </FadeUpAnimation>
      </section>

      <section className="px-clamp-inline pb-[72px] md:pb-[96px]">
        <FadeUpAnimation delay={0.2}>
          <figure>
            <img
              src="/assets/images/balebreaker-PET-recycling.jpg"
              alt="Kelani plastics recycling plant"
              className="w-full h-[380px] md:h-[560px] object-cover img-editorial"
            />
            <figcaption className="museo-sans text-[12px] text-kelani-teal/50 mt-[10px]">
              Waste in, value out — a recycling line delivered under the Kelani model.
            </figcaption>
          </figure>
        </FadeUpAnimation>
      </section>

      <section className="px-clamp-inline py-[72px] md:py-[96px] border-t border-[#e4e0d6]">
        <div className="flex flex-wrap items-end justify-between gap-[24px]">
          <SectionHeader
            eyebrow="The model"
            title="Three layers, one platform."
            lead="Trade funds the pipeline. Engineering finds the plants. The plants build the owned industrial base — and the operating discipline that runs them becomes a product of its own."
          />
          <FadeUpAnimation delay={0.25}>
            <a
              href="/model"
              className="museo-sans font-semibold text-[13px] uppercase tracking-wider text-kelani-teal underline underline-offset-[6px] hover:opacity-60 transition-opacity whitespace-nowrap"
            >
              How it works &rarr;
            </a>
          </FadeUpAnimation>
        </div>
        <div className="grid md:grid-cols-3 gap-[20px] mt-[44px]">
          <FadeUpAnimation delay={0.15}>
            <PillarBlock
              index={1}
              tone="white"
              title="Trade & Procure"
              description="Waste-to-value equipment, OEM partnerships and procurement — the cash engine and the pipeline."
              href="/model"
              cta="The model"
            />
          </FadeUpAnimation>
          <FadeUpAnimation delay={0.23}>
            <PillarBlock
              index={2}
              tone="white"
              title="Engineer & Serve"
              description="Audits, EPC delivery, commissioning and O&M — the annuity and the credibility."
              href="/model"
              cta="The model"
            />
          </FadeUpAnimation>
          <FadeUpAnimation delay={0.31}>
            <PillarBlock
              index={3}
              tone="mint"
              title="Build · Own · Operate"
              description="Modular BOOT plants selling product, energy and carbon — the owned industrial base."
              href="/model"
              cta="The BOOT engine"
            />
          </FadeUpAnimation>
        </div>
      </section>

      <section className="px-clamp-inline py-[72px] md:py-[96px] bg-kelani-cream">
        <SectionHeader
          eyebrow="Where we work"
          title="Four lines of business, one commitment to Africa's industry."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[20px] mt-[44px]">
          <FadeUpAnimation delay={0.15}>
            <PillarBlock
              index={1}
              tone="white"
              title="Food & Water"
              description="Machinery and expertise for water treatment, food processing, and packaging."
              href="/industry/food-water"
            />
          </FadeUpAnimation>
          <FadeUpAnimation delay={0.22}>
            <PillarBlock
              index={2}
              tone="white"
              title="Plastics"
              description="Full value chain — pellet sourcing, machinery, recycling, and advisory."
              href="/industry/plastics"
            />
          </FadeUpAnimation>
          <FadeUpAnimation delay={0.29}>
            <PillarBlock
              index={3}
              tone="white"
              title="Energy"
              description="Biochar, biogas, biofuels and waste-to-energy systems — designed, built, and operated."
              href="/energy"
            />
          </FadeUpAnimation>
          <FadeUpAnimation delay={0.36}>
            <PillarBlock
              index={4}
              tone="white"
              title="Finance"
              description="Helping manufacturers recover excess shipping and bank fees — a new line we're building."
              href="/industry/plastics#finance"
              cta="Learn more"
            />
          </FadeUpAnimation>
        </div>
      </section>

      <section className="px-clamp-inline py-[80px] md:py-[112px]">
        <FadeUpAnimation delay={0.15} y={30}>
          <p className="space-grotesk-semibold text-[26px] md:text-[38px] leading-[1.18] tracking-[-0.01em] max-w-[900px] text-kelani-teal">
            Elevating African prosperity through indigenous innovation.{" "}
            <span className="text-kelani-teal/40">
              For over 20 years we've grown local production with cutting-edge
              technology — now we're building the plants that turn West
              Africa's waste into its power, materials and soil.
            </span>
          </p>
        </FadeUpAnimation>
        <div className="mt-[64px] md:mt-[80px]">
          <StatBand
            stats={[
              { value: "20+", label: "Years of flawless delivery" },
              { value: "$500M+", label: "In machinery sourced and installed" },
              { value: "250+", label: "Thrilled client businesses" },
            ]}
          />
        </div>
      </section>

      <section className="bg-kelani-teal px-clamp-inline py-[72px] md:py-[88px]">
        <div className="grid md:grid-cols-[1fr_auto] gap-[32px] items-center">
          <FadeUpAnimation delay={0.1}>
            <Eyebrow className="text-kelani-mint">Partner with Kelani</Eyebrow>
            <h2 className="space-grotesk-semibold text-[26px] md:text-[36px] leading-[1.1] tracking-[-0.01em] mt-[14px] max-w-[640px] text-white">
              Waste streams, sites, or capital — bring one, we bring the rest.
            </h2>
          </FadeUpAnimation>
          <FadeUpAnimation delay={0.25}>
            <a
              href="/model"
              className="inline-block bg-kelani-mint text-kelani-teal rounded-[2px] py-[16px] px-[36px] museo-sans font-semibold text-[14px] uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              See the model
            </a>
          </FadeUpAnimation>
        </div>
      </section>
    </PageShell>
  );
};

export default Home;
