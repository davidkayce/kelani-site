import Lenis from "@studio-freight/lenis/types";
import { Helmet } from "react-helmet";
import PageShell from "../components/PageShell";
import PillarBlock from "../components/PillarBlock";
import IconFeature from "../components/IconFeature";
import FadeUpAnimation from "../components/FadeUpAnimation";
import SectionHeader from "../components/SectionHeader";
import Eyebrow from "../components/Eyebrow";
import LifecycleSteps from "../components/LifecycleSteps";
import SpecTable from "../components/SpecTable";

const lifecycle = [
  {
    title: "Originate",
    body: "Sites surface through engineering audits and trade relationships — anchored by feedstock, offtake, permitting and land tests.",
  },
  {
    title: "Structure",
    body: "Each plant is ring-fenced in its own vehicle, with a blended capital stack and bankable offtake assembled before a single bolt is turned.",
  },
  {
    title: "Build",
    body: "Modular, proven technology is procured and installed under EPC — tropicalised for heat, dust and an unstable grid.",
  },
  {
    title: "Operate",
    body: "The plant runs under a long-term O&M contract against strict availability, quality, compliance and performance covenants.",
  },
  {
    title: "Transfer",
    body: "At maturity the asset is transferred, retained, or repurposed under pre-agreed terms — the leg that aligns every counterparty.",
  },
];

const roadmap = [
  {
    label: "Phase 1",
    title: "Cash & first plant",
    body: "Refocus trade, launch engineering services, sign OEM partnerships, and commission the first carbonisation BOOT plant.",
  },
  {
    label: "Phase 2",
    title: "Network scale",
    body: "Plants two and three — plastics upcycling and anaerobic digestion — plus an equipment-leasing vehicle and third-party offtake.",
  },
  {
    label: "Phase 3",
    title: "Platform as product",
    body: "The operating playbook is licensed to third-party owners and franchisees; management mandates become a fee-earning line.",
  },
  {
    label: "Phase 4",
    title: "Regional",
    body: "A network of plants across Nigeria, then West Africa — with refinancing and capital recycling at portfolio scale.",
  },
];

const Model = ({ lenis }: { lenis: Lenis }) => {
  return (
    <PageShell lenis={lenis}>
      <Helmet>
        <title>The Model — Kelani</title>
      </Helmet>

      <section className="px-clamp-inline pt-[48px] pb-[72px] md:pt-[64px] md:pb-[96px]">
        <FadeUpAnimation delay={0.1}>
          <Eyebrow>The Model</Eyebrow>
          <h1 className="display-heading mt-[18px] text-kelani-teal max-w-[900px]">
            Build. Own. Operate. Transfer.
          </h1>
          <p className="museo-sans text-[16px] md:text-[18px] leading-[1.7] text-kelani-teal/70 mt-[26px] max-w-[640px]">
            Kelani is an industrial circular-economy platform. We import and
            engineer the technology, build the plants, and then own, operate
            and manage the industrial companies that run them — converting
            waste streams into clean energy, recovered materials, biochar and
            recovered chemicals, plant after plant.
          </p>
        </FadeUpAnimation>
        <div className="grid sm:grid-cols-3 gap-[28px] max-w-[760px] mt-[56px]">
          {[
            { value: "3", label: "Revenue layers, one platform" },
            { value: "5", label: "Steps in every plant's lifecycle" },
            { value: "4", label: "Standardised plant archetypes" },
          ].map((stat, i) => (
            <FadeUpAnimation key={stat.label} delay={0.2 + i * 0.08} y={20}>
              <div className="border-t border-kelani-teal/25 pt-[18px]">
                <p className="space-grotesk-semibold text-[44px] leading-none text-kelani-teal">
                  {stat.value}
                </p>
                <p className="museo-sans text-[13.5px] text-kelani-teal/60 mt-[10px]">
                  {stat.label}
                </p>
              </div>
            </FadeUpAnimation>
          ))}
        </div>
      </section>

      <section className="px-clamp-inline py-[72px] md:py-[96px] border-t border-[#e4e0d6]">
        <SectionHeader
          eyebrow="Three layers, one platform"
          title="Each layer feeds the next."
          lead="Trade generates the relationships and site intelligence that feed the plant pipeline; engineering audits identify the waste streams that become plants; and the plants generate the long-term cash flows and operating track record that unlock the next plant."
        />
        <div className="grid md:grid-cols-3 gap-[20px] mt-[44px]">
          <FadeUpAnimation delay={0.15}>
            <PillarBlock
              index={1}
              tone="white"
              title="Trade & Procure"
              description="Imports and trades waste-to-value equipment; OEM partnerships, procurement and EPC contracting. The cash engine — and the pipeline."
            />
          </FadeUpAnimation>
          <FadeUpAnimation delay={0.23}>
            <PillarBlock
              index={2}
              tone="white"
              title="Engineer & Serve"
              description="Audits, feasibility studies, EPC delivery, commissioning, O&M, compliance and training. The annuity — and the credibility."
            />
          </FadeUpAnimation>
          <FadeUpAnimation delay={0.31}>
            <PillarBlock
              index={3}
              tone="mint"
              title="Build · Own · Operate"
              description="Deploys and runs modular BOOT plants; sells product, energy and carbon. The owned industrial base that compounds."
            />
          </FadeUpAnimation>
        </div>
      </section>

      <section className="px-clamp-inline py-[72px] md:py-[96px] bg-kelani-cream">
        <SectionHeader
          eyebrow="The BOOT engine"
          title="Every plant, the same five steps."
          lead="Discipline at the front end is deliberate: most candidate plants are designed to fail early — at structuring, not later at construction."
        />
        <div className="mt-[48px]">
          <LifecycleSteps steps={lifecycle} />
        </div>
      </section>

      <section className="px-clamp-inline py-[72px] md:py-[96px] border-t border-[#e4e0d6]">
        <SectionHeader
          eyebrow="Plant archetypes"
          title="Four standardised plants, applied many times."
          lead="Each archetype uses proven, modular technology matched to a local waste stream and a local buyer — so every new plant starts from a template, not a blank page."
        />
        <div className="mt-[44px]">
          <SpecTable
            columns={["Archetype", "Primary output", "Feedstock", "Where it fits"]}
            rows={[
              [
                "A · Biomass carbonisation",
                "Biochar + syngas",
                "Agro-processing residues",
                "Soil enrichment, carbon removal, industrial filtration",
              ],
              [
                "B · Plastics upcycling",
                "Recycled pellet",
                "Post-industrial & post-consumer plastics",
                "Packaging and manufacturing inputs",
              ],
              [
                "C · Anaerobic digestion",
                "Biomethane + fertiliser",
                "Organic and food-processing waste",
                "Captive power and clean fuel",
              ],
              [
                "D · RDF gasification",
                "Power + heat",
                "Sorted municipal waste",
                "Industrial energy at cluster scale",
              ],
            ]}
          />
        </div>
      </section>

      <section className="px-clamp-inline py-[72px] md:py-[96px] bg-kelani-cream grid md:grid-cols-2 gap-[48px] items-center">
        <FadeUpAnimation delay={0.1}>
          <Eyebrow>First plant</Eyebrow>
          <h2 className="space-grotesk-semibold text-[28px] md:text-[38px] leading-[1.08] tracking-[-0.01em] mt-[14px] max-w-[480px] text-kelani-teal">
            It starts with biochar in Eastern Nigeria.
          </h2>
          <p className="museo-sans text-[15px] leading-[1.7] mt-[18px] max-w-[480px] text-kelani-teal/70">
            The first BOOT plant is a biomass carbonisation facility sited in
            an Eastern Nigeria feedstock cluster. It anchors the network and
            proves the operating model before capital scales — turning
            agro-processing residues into biochar for soil, industry and
            carbon markets.
          </p>
        </FadeUpAnimation>
        <FadeUpAnimation delay={0.25}>
          <figure>
            <img
              src="/assets/images/renewableenergy.jpg"
              alt="Growth from clean energy"
              className="w-full h-[340px] object-cover img-editorial"
            />
            <figcaption className="museo-sans text-[12px] text-kelani-teal/50 mt-[10px]">
              Archetype A — carbon-rich char from agricultural residues.
            </figcaption>
          </figure>
        </FadeUpAnimation>
      </section>

      <section className="px-clamp-inline py-[72px] md:py-[96px] border-t border-[#e4e0d6]">
        <SectionHeader
          eyebrow="Bankable by design"
          title="No plant is built on hope."
          lead="Every plant reaches financial close with a four-layer offtake stack — so its cash flow stands on its own, independent of any single buyer."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-[28px] gap-y-[24px] mt-[44px]">
          <IconFeature
            icon="chart"
            title="Index-referenced pricing"
            description="Arm's-length prices tied to public benchmarks — never a private assumption."
            delay={0.15}
          />
          <IconFeature
            icon="handshake"
            title="Third-party anchor offtaker"
            description="An independent industrial buyer takes a meaningful share of output on parallel terms."
            delay={0.2}
          />
          <IconFeature
            icon="shield"
            title="Credit enhancement"
            description="Guarantees, performance bonds and trade-credit insurance wrap the revenue line."
            delay={0.25}
          />
          <IconFeature
            icon="clipboard"
            title="Step-in rights"
            description="Pre-agreed remedies on default keep every plant financeable through stress."
            delay={0.3}
          />
        </div>
      </section>

      <section className="px-clamp-inline py-[72px] md:py-[96px] bg-kelani-cream">
        <SectionHeader
          eyebrow="The platform"
          title="Setup. Operations. Management."
          lead="The same capability that builds and runs our own plants is organised as a repeatable industrial operating system — first for our portfolio, then as a managed service for third-party owners and partners who have capital and sites but lack the operating capability."
        />
        <div className="grid md:grid-cols-3 gap-x-[28px] gap-y-[24px] mt-[44px]">
          <IconFeature
            icon="clipboard"
            title="Setup"
            description="Origination and feasibility, structuring and financial close, then EPC build and commissioning to international quality, safety and energy standards."
            delay={0.15}
          />
          <IconFeature
            icon="factory"
            title="Operations"
            description="Dedicated plant managers running to a frozen operating manual, with continuous telemetry on availability, quality, emissions and performance."
            delay={0.22}
          />
          <IconFeature
            icon="layers"
            title="Management"
            description="A shared-services core — finance, procurement, HR, compliance, digital — run once across every plant, with portfolio-level governance and capital recycling."
            delay={0.29}
          />
        </div>
        <FadeUpAnimation delay={0.25} y={30}>
          <p className="space-grotesk-semibold text-[22px] md:text-[30px] leading-[1.25] tracking-[-0.01em] text-kelani-teal max-w-[820px] mt-[64px] border-l-2 border-kelani-mint pl-[24px]">
            Capital is available. Sites are available. Proven technology is
            available. The scarce ingredient is the institutional capability
            to set up, operate and manage industrial companies to a standard
            capital can trust — we build that capability once, and apply it
            many times.
          </p>
        </FadeUpAnimation>
      </section>

      <section className="px-clamp-inline py-[72px] md:py-[96px] border-t border-[#e4e0d6]">
        <SectionHeader
          eyebrow="The road ahead"
          title="From first plant to regional platform."
        />
        <div className="mt-[48px]">
          <LifecycleSteps steps={roadmap} cols={4} />
        </div>
      </section>

      <section className="bg-kelani-teal px-clamp-inline py-[72px] md:py-[88px]">
        <div className="grid md:grid-cols-[1fr_auto] gap-[32px] items-center">
          <FadeUpAnimation delay={0.1}>
            <Eyebrow className="text-kelani-mint">Partner with Kelani</Eyebrow>
            <h2 className="space-grotesk-semibold text-[26px] md:text-[36px] leading-[1.1] tracking-[-0.01em] mt-[14px] max-w-[640px] text-white">
              Have waste streams, sites, or capital looking for an operator?
            </h2>
            <p className="museo-sans text-[15px] leading-[1.7] mt-[16px] max-w-[540px] text-white/70">
              We work with manufacturers, landowners, franchise partners and
              development-finance institutions across the plant lifecycle.
            </p>
          </FadeUpAnimation>
          <FadeUpAnimation delay={0.25}>
            <a
              href="mailto:support@kelani.ng?subject=Partnership%20—%20Kelani%20platform"
              className="inline-block bg-kelani-mint text-kelani-teal rounded-[2px] py-[16px] px-[36px] museo-sans font-semibold text-[14px] uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Start a conversation
            </a>
          </FadeUpAnimation>
        </div>
      </section>
    </PageShell>
  );
};

export default Model;
