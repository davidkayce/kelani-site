import Lenis from "@studio-freight/lenis/types";
import { Helmet } from "react-helmet";
import PageShell from "../components/PageShell";
import PillarBlock from "../components/PillarBlock";
import FadeUpAnimation from "../components/FadeUpAnimation";

const Industry = ({ lenis }: { lenis: Lenis }) => {
  return (
    <PageShell lenis={lenis}>
      <Helmet>
        <title>Industry — Kelani</title>
      </Helmet>

      <section className="px-clamp-inline pt-[32px] pb-[64px] grid lg:grid-cols-2 gap-[40px] items-center">
        <FadeUpAnimation delay={0.1}>
          <span className="eyebrow-label text-kelani-teal/60">Industry</span>
          <h1 className="display-heading mt-[16px] text-kelani-teal">
            Where Kelani builds, sources, and installs.
          </h1>
          <p className="museo-sans text-[16px] md:text-[18px] leading-[1.7] text-kelani-teal/70 mt-[24px] max-w-[560px]">
            Kelani's industrial arm covers two hands-on lines of business:
            equipping food and water production, and working the full plastics
            value chain — from pellet sourcing to turnkey recycling plants.
            Both are built on the same foundation: real machinery, real
            installation, and advisory that doesn't stop at the sale.
          </p>
        </FadeUpAnimation>
        <FadeUpAnimation delay={0.25}>
          <img
            src="/assets/images/engineering-section-image.png"
            alt="Industrial machinery on a production line"
            className="w-full h-[320px] md:h-[420px] object-cover"
          />
        </FadeUpAnimation>
      </section>

      <section className="px-clamp-inline pb-[100px] grid md:grid-cols-2 gap-[24px]">
        <FadeUpAnimation delay={0.15}>
          <PillarBlock
            index={1}
            tone="white"
            title="Food & Water Production"
            description="Machinery, expertise, and tools for water treatment plants, food processing lines, and food packaging."
            href="/industry/food-water"
            cta="Explore Food & Water"
          />
        </FadeUpAnimation>
        <FadeUpAnimation delay={0.25}>
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

      <section className="border-t border-[#e4e0d6] px-clamp-inline py-[56px]">
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

export default Industry;
