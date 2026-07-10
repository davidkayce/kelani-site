import Lenis from "@studio-freight/lenis/types";
import { Helmet } from "react-helmet";
import PageShell from "../components/PageShell";
import IconFeature from "../components/IconFeature";
import FinanceCallout from "../components/FinanceCallout";
import FadeUpAnimation from "../components/FadeUpAnimation";

const FoodWater = ({ lenis }: { lenis: Lenis }) => {
  return (
    <PageShell lenis={lenis}>
      <Helmet>
        <title>Food & Water Production — Kelani</title>
      </Helmet>

      <section className="px-clamp-inline pt-[32px] pb-[56px] grid lg:grid-cols-2 gap-[40px] items-center">
        <FadeUpAnimation delay={0.1}>
          <a href="/industry" className="eyebrow-label text-kelani-teal/60">
            &larr; Industry
          </a>
          <h1 className="display-heading mt-[16px] text-kelani-teal">
            Food & Water Production
          </h1>
          <p className="museo-sans text-[16px] md:text-[18px] leading-[1.7] text-kelani-teal/70 mt-[24px] max-w-[560px]">
            We provide the machinery, expertise, and tools for setting up
            water treatment plants, food processing lines, and food
            packaging operations — sourced, installed, and supported end to
            end.
          </p>
        </FadeUpAnimation>
        <FadeUpAnimation delay={0.25}>
          <img
            src="/assets/images/plastic2.jpg"
            alt="Bottled water production"
            className="w-full h-[320px] md:h-[420px] object-cover"
          />
        </FadeUpAnimation>
      </section>

      <section className="px-clamp-inline py-[64px] border-t border-[#e4e0d6]">
        <FadeUpAnimation delay={0.1}>
          <span className="eyebrow-label text-kelani-teal/60">
            Water treatment
          </span>
          <h2 className="space-grotesk-semibold text-[26px] md:text-[32px] mt-[12px] max-w-[560px] text-kelani-teal">
            Clean water infrastructure, from borehole to bottle.
          </h2>
        </FadeUpAnimation>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[16px] mt-[36px]">
          <IconFeature
            icon="filter"
            title="Reverse Osmosis (RO) Systems"
            description="High-capacity RO plants for potable and process water, sized for industrial and municipal demand."
            delay={0.15}
          />
          <IconFeature
            icon="borehole"
            title="Borehole & Water Treatment Plants"
            description="End-to-end borehole drilling and treatment setups for reliable, independent water supply."
            delay={0.2}
          />
          <IconFeature
            icon="package"
            title="Packaged & Sachet Water Lines"
            description="Full production lines for bottled and sachet water, from filling to sealing to packing."
            delay={0.25}
          />
          <IconFeature
            icon="droplet"
            title="Purification & Filtration Skids"
            description="Modular filtration systems for removing contaminants at municipal or facility scale."
            delay={0.3}
          />
        </div>
      </section>

      <section className="px-clamp-inline py-[64px] bg-kelani-cream">
        <FadeUpAnimation delay={0.1}>
          <span className="eyebrow-label text-kelani-teal/60">
            Food processing & packaging
          </span>
          <h2 className="space-grotesk-semibold text-[26px] md:text-[32px] mt-[12px] max-w-[560px] text-kelani-teal">
            From raw input to shelf-ready product.
          </h2>
        </FadeUpAnimation>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[16px] mt-[36px]">
          <IconFeature
            icon="mill"
            title="Industrial Processing Lines"
            description="Processing equipment sized to your throughput, from small-batch to full industrial scale."
            delay={0.15}
          />
          <IconFeature
            icon="mill"
            title="Grain Milling Equipment"
            description="Milling and grinding machinery for grains, cereals, and flour production."
            delay={0.2}
          />
          <IconFeature
            icon="snowflake"
            title="Cold Storage & Refrigeration"
            description="Cold rooms and refrigeration systems to preserve product quality across the supply chain."
            delay={0.25}
          />
          <IconFeature
            icon="flame"
            title="Pasteurization Units"
            description="Heat-treatment systems for dairy, juice, and liquid food products."
            delay={0.3}
          />
          <IconFeature
            icon="package"
            title="Filling & Sealing Lines"
            description="Automated filling and sealing for bottles, pouches, and containers."
            delay={0.35}
          />
          <IconFeature
            icon="clipboard"
            title="Labeling Machinery"
            description="Labeling and coding equipment for compliance-ready, retail-ready packaging."
            delay={0.4}
          />
          <IconFeature
            icon="package"
            title="Shrink-Wrap & Blister Packaging"
            description="Secondary packaging systems for shelf presentation and transport protection."
            delay={0.45}
          />
          <IconFeature
            icon="truck"
            title="Procurement & Logistics"
            description="Sourcing and shipping handled for you, from factory floor to your facility."
            delay={0.5}
          />
        </div>
      </section>

      <section className="px-clamp-inline py-[56px] border-t border-[#e4e0d6]">
        <FadeUpAnimation delay={0.1}>
          <h2 className="space-grotesk-semibold text-[22px] md:text-[26px] max-w-[560px] text-kelani-teal">
            What we offer, beyond the machinery
          </h2>
        </FadeUpAnimation>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[16px] mt-[28px]">
          <IconFeature
            icon="truck"
            title="Procurement"
            description="We source the right equipment for your scale and budget."
            delay={0.15}
          />
          <IconFeature
            icon="wrench"
            title="Installation"
            description="Full setup and commissioning, done by people who've done it before."
            delay={0.2}
          />
          <IconFeature
            icon="clipboard"
            title="Advisory & Training"
            description="Guidance on plant design, plus training for your operating team."
            delay={0.25}
          />
          <IconFeature
            icon="shield"
            title="Maintenance & Spare Parts"
            description="Ongoing support so your lines keep running long after installation."
            delay={0.3}
          />
        </div>
      </section>

      <FinanceCallout industry="food and water production" />
    </PageShell>
  );
};

export default FoodWater;
