import Lenis from "@studio-freight/lenis/types";
import { Helmet } from "react-helmet";
import PageShell from "../components/PageShell";
import IconFeature from "../components/IconFeature";
import FinanceCallout from "../components/FinanceCallout";
import FadeUpAnimation from "../components/FadeUpAnimation";
import SectionHeader from "../components/SectionHeader";
import Eyebrow from "../components/Eyebrow";

const Plastics = ({ lenis }: { lenis: Lenis }) => {
  return (
    <PageShell lenis={lenis}>
      <Helmet>
        <title>Plastics — Kelani</title>
      </Helmet>

      <section className="px-clamp-inline pt-[48px] pb-[72px] md:pt-[64px] md:pb-[96px] grid lg:grid-cols-2 gap-[48px] items-center">
        <FadeUpAnimation delay={0.1}>
          <a
            href="/industry"
            className="eyebrow-label text-kelani-teal/60 hover:text-kelani-teal transition-colors"
          >
            &larr; Industry
          </a>
          <h1 className="display-heading mt-[18px] text-kelani-teal">Plastics</h1>
          <p className="museo-sans text-[16px] md:text-[18px] leading-[1.7] text-kelani-teal/70 mt-[26px] max-w-[540px]">
            We're involved in the full plastics value chain — from sourcing
            pellets, to the machinery that shapes them, to turnkey recycling
            projects and the advisory that ties it all together.
          </p>
        </FadeUpAnimation>
        <FadeUpAnimation delay={0.25}>
          <figure>
            <img
              src="/assets/images/energy1.jpg"
              alt="Plastic recycling and sorting machinery"
              className="w-full h-[320px] md:h-[440px] object-cover img-editorial"
            />
            <figcaption className="museo-sans text-[12px] text-kelani-teal/50 mt-[10px]">
              Plastics recovery line with inline metal detection.
            </figcaption>
          </figure>
        </FadeUpAnimation>
      </section>

      <section className="px-clamp-inline py-[72px] md:py-[96px] border-t border-[#e4e0d6]">
        <SectionHeader
          eyebrow="Sourcing"
          title="Virgin and recycled pellets, sourced reliably."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-[28px] gap-y-[24px] mt-[44px]">
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

      <section className="px-clamp-inline py-[72px] md:py-[96px] bg-kelani-cream">
        <SectionHeader
          eyebrow="Machinery"
          title="From pellet to finished part."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-[28px] gap-y-[24px] mt-[44px]">
          <IconFeature
            icon="extrude"
            title="Extrusion Lines"
            description="Extrusion machinery for pipes, sheets, films, and profiles."
            delay={0.15}
          />
          <IconFeature
            icon="mould"
            title="Injection Moulding Machines"
            description="Precision injection moulding equipment for high-volume part production."
            delay={0.2}
          />
          <IconFeature
            icon="mould"
            title="Blow Moulding Equipment"
            description="Blow moulding lines for bottles, containers, and hollow parts."
            delay={0.25}
          />
        </div>
      </section>

      <section className="px-clamp-inline py-[72px] md:py-[96px] border-t border-[#e4e0d6] grid md:grid-cols-2 gap-[48px] items-center">
        <FadeUpAnimation delay={0.1}>
          <Eyebrow>Recycling</Eyebrow>
          <h2 className="space-grotesk-semibold text-[28px] md:text-[38px] leading-[1.08] tracking-[-0.01em] mt-[14px] text-kelani-teal">
            Turnkey plastic recycling plants.
          </h2>
          <p className="museo-sans text-[15px] leading-[1.7] mt-[18px] text-kelani-teal/70 max-w-[440px]">
            We design, source, and install complete recycling lines — from
            sorting and washing to shredding, pelletizing, and baling —
            turning plastic waste back into usable material.
          </p>
        </FadeUpAnimation>
        <FadeUpAnimation delay={0.25}>
          <figure>
            <img
              src="/assets/images/balebreaker-PET-recycling.jpg"
              alt="PET plastic recycling baling machinery"
              className="w-full h-[340px] object-cover img-editorial"
            />
            <figcaption className="museo-sans text-[12px] text-kelani-teal/50 mt-[10px]">
              Bale breaker feeding a PET recycling line.
            </figcaption>
          </figure>
        </FadeUpAnimation>
      </section>

      <section className="px-clamp-inline py-[72px] md:py-[96px] bg-kelani-cream grid md:grid-cols-2 gap-[48px] items-center">
        <FadeUpAnimation delay={0.2} y={30}>
          <img
            src="/assets/images/research-image.png"
            alt="Engineer assessing plastics equipment"
            className="w-full h-[340px] object-cover img-editorial"
          />
        </FadeUpAnimation>
        <FadeUpAnimation delay={0.1}>
          <Eyebrow>Advisory</Eyebrow>
          <h2 className="space-grotesk-semibold text-[28px] md:text-[38px] leading-[1.08] tracking-[-0.01em] mt-[14px] max-w-[480px] text-kelani-teal">
            Guidance across the whole project.
          </h2>
          <div className="grid gap-[24px] mt-[28px]">
            <IconFeature
              icon="clipboard"
              title="Feasibility Studies"
              description="Assessing viability, costs, and returns before you commit capital."
              delay={0.2}
            />
            <IconFeature
              icon="wrench"
              title="Plant Setup Consulting"
              description="Layout, equipment selection, and commissioning support for new lines."
              delay={0.25}
            />
            <IconFeature
              icon="shield"
              title="Operations Support"
              description="Ongoing operational and maintenance guidance to keep plants running."
              delay={0.3}
            />
          </div>
        </FadeUpAnimation>
      </section>

      <FinanceCallout industry="plastics" />
    </PageShell>
  );
};

export default Plastics;
