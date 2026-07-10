import Lenis from "@studio-freight/lenis/types";
import { Helmet } from "react-helmet";
import PageShell from "../components/PageShell";
import PillarBlock from "../components/PillarBlock";
import FadeUpAnimation from "../components/FadeUpAnimation";

const Industry = ({ lenis }: { lenis: Lenis }) => {
  return (
    <PageShell lenis={lenis} mainClassName="bg-kelani-teal">
      <Helmet>
        <title>Industry — Kelani</title>
      </Helmet>

      <section className="px-clamp-inline pt-[40px] pb-[64px] text-white max-w-[900px]">
        <FadeUpAnimation delay={0.1}>
          <span className="eyebrow-label text-kelani-mint">Industry</span>
          <h1 className="display-heading mt-[16px] text-white">
            Where Kelani builds, sources, and installs.
          </h1>
          <p className="museo-sans text-[16px] md:text-[18px] leading-[1.7] text-white/70 mt-[24px] max-w-[640px]">
            Kelani's industrial arm covers two hands-on lines of business:
            equipping food and water production, and working the full plastics
            value chain — from pellet sourcing to turnkey recycling plants.
            Both are built on the same foundation: real machinery, real
            installation, and advisory that doesn't stop at the sale.
          </p>
        </FadeUpAnimation>
      </section>

      <section className="px-clamp-inline pb-[100px] grid md:grid-cols-2 gap-[24px]">
        <FadeUpAnimation delay={0.2}>
          <PillarBlock
            index={1}
            tone="cream"
            title="Food & Water Production"
            description="Machinery, expertise, and tools for water treatment plants, food processing lines, and food packaging."
            href="/industry/food-water"
            cta="Explore Food & Water"
          />
        </FadeUpAnimation>
        <FadeUpAnimation delay={0.35}>
          <PillarBlock
            index={2}
            tone="mint"
            title="Plastics"
            description="Full value chain — pellet sourcing, extrusion and injection moulding machinery, recycling turnkey projects, and advisory."
            href="/industry/plastics"
            cta="Explore Plastics"
          />
        </FadeUpAnimation>
      </section>

      <section className="bg-kelani-cream text-kelani-teal px-clamp-inline py-[64px]">
        <div className="grid sm:grid-cols-3 gap-[32px] max-w-[900px]">
          <div>
            <p className="space-grotesk-semibold text-[40px]">20+</p>
            <p className="museo-sans text-[14px] text-kelani-teal/70">
              Years of flawless delivery
            </p>
          </div>
          <div>
            <p className="space-grotesk-semibold text-[40px]">$500M+</p>
            <p className="museo-sans text-[14px] text-kelani-teal/70">
              In machinery sourced and installed
            </p>
          </div>
          <div>
            <p className="space-grotesk-semibold text-[40px]">250+</p>
            <p className="museo-sans text-[14px] text-kelani-teal/70">
              Client businesses served
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Industry;
