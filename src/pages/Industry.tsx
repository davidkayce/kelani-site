import Lenis from "@studio-freight/lenis/types";
import { Helmet } from "react-helmet";
import PageShell from "../components/PageShell";
import PillarBlock from "../components/PillarBlock";
import FadeUpAnimation from "../components/FadeUpAnimation";
import Eyebrow from "../components/Eyebrow";
import StatBand from "../components/StatBand";

const Industry = ({ lenis }: { lenis: Lenis }) => {
  return (
    <PageShell lenis={lenis}>
      <Helmet>
        <title>Industry — Kelani</title>
      </Helmet>

      <section className="px-clamp-inline pt-[48px] pb-[72px] md:pt-[64px] md:pb-[96px] grid lg:grid-cols-2 gap-[48px] items-center">
        <FadeUpAnimation delay={0.1}>
          <Eyebrow>Industry</Eyebrow>
          <h1 className="display-heading mt-[18px] text-kelani-teal">
            Where Kelani builds, sources, and installs.
          </h1>
          <p className="museo-sans text-[16px] md:text-[18px] leading-[1.7] text-kelani-teal/70 mt-[26px] max-w-[540px]">
            Kelani's industrial arm covers two hands-on lines of business:
            equipping food and water production, and working the full plastics
            value chain — from pellet sourcing to turnkey recycling plants.
            This is the trade and engineering foundation of our{" "}
            <a href="/model" className="underline underline-offset-[4px] hover:opacity-70">
              platform model
            </a>{" "}
            — the machinery, relationships, and site intelligence that feed
            everything we build.
          </p>
        </FadeUpAnimation>
        <FadeUpAnimation delay={0.25}>
          <figure>
            <img
              src="/assets/images/engineering-section-image.png"
              alt="Robotic arms on an automated production line"
              className="w-full h-[320px] md:h-[440px] object-cover img-editorial"
            />
            <figcaption className="museo-sans text-[12px] text-kelani-teal/50 mt-[10px]">
              Automated production line — sourced, installed, and commissioned by Kelani.
            </figcaption>
          </figure>
        </FadeUpAnimation>
      </section>

      <section className="px-clamp-inline pb-[96px] md:pb-[120px] grid md:grid-cols-2 gap-[24px]">
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

export default Industry;
