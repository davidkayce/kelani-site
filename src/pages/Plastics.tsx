import Lenis from "@studio-freight/lenis/types";
import { Helmet } from "react-helmet";
import PageShell from "../components/PageShell";
import IconFeature from "../components/IconFeature";
import FinanceCallout from "../components/FinanceCallout";
import FadeUpAnimation from "../components/FadeUpAnimation";

const Plastics = ({ lenis }: { lenis: Lenis }) => {
  return (
    <PageShell lenis={lenis} mainClassName="bg-kelani-teal">
      <Helmet>
        <title>Plastics — Kelani</title>
      </Helmet>

      <section className="px-clamp-inline pt-[40px] pb-[56px] text-white max-w-[900px]">
        <FadeUpAnimation delay={0.1}>
          <a href="/industry" className="eyebrow-label text-kelani-mint">
            &larr; Industry
          </a>
          <h1 className="display-heading mt-[16px] text-white">Plastics</h1>
          <p className="museo-sans text-[16px] md:text-[18px] leading-[1.7] text-white/70 mt-[24px] max-w-[640px]">
            We're involved in the full plastics value chain — from sourcing
            pellets, to the machinery that shapes them, to turnkey recycling
            projects and the advisory that ties it all together.
          </p>
        </FadeUpAnimation>
      </section>

      <section className="bg-kelani-cream text-kelani-teal px-clamp-inline py-[64px]">
        <FadeUpAnimation delay={0.1}>
          <span className="eyebrow-label text-kelani-teal/60">Sourcing</span>
          <h2 className="space-grotesk-semibold text-[26px] md:text-[32px] mt-[12px] max-w-[560px] text-kelani-teal">
            Virgin and recycled pellets, sourced reliably.
          </h2>
        </FadeUpAnimation>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[16px] mt-[36px]">
          <IconFeature
            icon="pellet"
            title="PET"
            description="Virgin and recycled PET pellets for bottling, packaging, and fiber applications."
            delay={0.15}
          />
          <IconFeature
            icon="pellet"
            title="HDPE"
            description="High-density polyethylene pellets for rigid containers and industrial parts."
            delay={0.2}
          />
          <IconFeature
            icon="pellet"
            title="PP"
            description="Polypropylene pellets for packaging, textiles, and automotive components."
            delay={0.25}
          />
          <IconFeature
            icon="pellet"
            title="PVC"
            description="PVC pellets and compounds for construction and industrial use."
            delay={0.3}
          />
        </div>
      </section>

      <section className="px-clamp-inline py-[64px] text-white">
        <FadeUpAnimation delay={0.1}>
          <span className="eyebrow-label text-kelani-mint">Machinery</span>
          <h2 className="space-grotesk-semibold text-[26px] md:text-[32px] mt-[12px] max-w-[560px] text-white">
            From pellet to finished part.
          </h2>
        </FadeUpAnimation>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[16px] mt-[36px]">
          <IconFeature
            tone="dark"
            icon="extrude"
            title="Extrusion Lines"
            description="Extrusion machinery for pipes, sheets, films, and profiles."
            delay={0.15}
          />
          <IconFeature
            tone="dark"
            icon="mould"
            title="Injection Moulding Machines"
            description="Precision injection moulding equipment for high-volume part production."
            delay={0.2}
          />
          <IconFeature
            tone="dark"
            icon="mould"
            title="Blow Moulding Equipment"
            description="Blow moulding lines for bottles, containers, and hollow parts."
            delay={0.25}
          />
        </div>
      </section>

      <section className="px-clamp-inline py-[64px] bg-kelani-cream text-kelani-teal grid md:grid-cols-2 gap-[32px] items-center">
        <FadeUpAnimation delay={0.1}>
          <span className="eyebrow-label text-kelani-teal/60">Recycling</span>
          <h2 className="space-grotesk-semibold text-[26px] md:text-[32px] mt-[12px] text-kelani-teal">
            Turnkey plastic recycling plants.
          </h2>
          <p className="museo-sans text-[15px] leading-[1.7] mt-[16px] text-kelani-teal/75 max-w-[440px]">
            We design, source, and install complete recycling lines — from
            sorting and washing to shredding, pelletizing, and baling —
            turning plastic waste back into usable material.
          </p>
        </FadeUpAnimation>
        <FadeUpAnimation delay={0.25}>
          <img
            src="/assets/images/balebreaker-PET-recycling.jpg"
            alt="PET plastic recycling baling machinery"
            className="w-full h-[320px] object-cover rounded-[16px]"
          />
        </FadeUpAnimation>
      </section>

      <section className="px-clamp-inline py-[64px] text-white">
        <FadeUpAnimation delay={0.1}>
          <span className="eyebrow-label text-kelani-mint">Advisory</span>
          <h2 className="space-grotesk-semibold text-[26px] md:text-[32px] mt-[12px] max-w-[560px] text-white">
            Guidance across the whole project.
          </h2>
        </FadeUpAnimation>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[16px] mt-[36px]">
          <IconFeature
            tone="dark"
            icon="clipboard"
            title="Feasibility Studies"
            description="Assessing viability, costs, and returns before you commit capital."
            delay={0.15}
          />
          <IconFeature
            tone="dark"
            icon="wrench"
            title="Plant Setup Consulting"
            description="Layout, equipment selection, and commissioning support for new lines."
            delay={0.2}
          />
          <IconFeature
            tone="dark"
            icon="shield"
            title="Operations Support"
            description="Ongoing operational and maintenance guidance to keep plants running."
            delay={0.25}
          />
        </div>
      </section>

      <FinanceCallout industry="plastics" />
    </PageShell>
  );
};

export default Plastics;
