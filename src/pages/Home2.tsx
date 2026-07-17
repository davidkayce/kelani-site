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
        <title>Kelani — Indigenous Technology & Industrial Productivity</title>
      </Helmet>

      <section className="px-clamp-inline pt-[56px] pb-[64px] md:pt-[80px] md:pb-[88px]">
        <FadeUpAnimation delay={0.1}>
          <Eyebrow>Kelani</Eyebrow>
          <h1 className="display-heading mt-[16px] text-kelani-teal max-w-[1000px]">
            Indigenous technology.{" "}
            <span className="text-brand-gradient">African productivity.</span>
          </h1>
          <p className="museo-sans text-[16px] md:text-[18px] leading-[1.7] text-kelani-teal/70 mt-[26px] max-w-[620px]">
            For over twenty years Kelani has equipped Africa's producers —
            selling the machines, designing the energy systems, and helping
            people build the right businesses on top of great indigenous
            production and technology.
          </p>
          <div className="flex flex-wrap items-center gap-[24px] mt-[36px]">
            <a
              href="/machinery"
              className="btn-brand inline-block rounded-[2px] py-[15px] px-[32px] museo-sans font-semibold text-[13px] uppercase tracking-wider"
            >
              Browse machinery
            </a>
            <a
              href="/model"
              className="museo-sans font-semibold text-[13px] uppercase tracking-wider text-kelani-teal underline underline-offset-[6px] hover:opacity-60 transition-opacity"
            >
              Where we're headed
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
              A recycling line sourced, installed and commissioned by Kelani.
            </figcaption>
          </figure>
        </FadeUpAnimation>
      </section>

      <section className="px-clamp-inline py-[72px] md:py-[96px] border-t border-[#e4e0d6]">
        <SectionHeader
          eyebrow="What we do today"
          title="Machines, energy systems, and the businesses built on them."
        />
        <div className="grid md:grid-cols-3 gap-[20px] mt-[44px]">
          <FadeUpAnimation delay={0.15}>
            <PillarBlock
              index={1}
              tone="white"
              title="We sell machinery"
              description="Factory-direct industrial machinery for food, water, plastics and packaging — in stock, priced, installed and supported."
              href="/machinery"
              cta="Browse the catalogue"
            />
          </FadeUpAnimation>
          <FadeUpAnimation delay={0.23}>
            <PillarBlock
              index={2}
              tone="white"
              title="We design energy systems"
              description="Biochar, biogas, biofuels and waste-to-energy — integrated systems designed, built and installed around your feedstock."
              href="/energy"
              cta="Energy systems"
            />
          </FadeUpAnimation>
          <FadeUpAnimation delay={0.31}>
            <PillarBlock
              index={3}
              tone="white"
              title="We help build businesses"
              description="Feasibility, plant setup, training and operations support — so the right business gets built on the right production line."
              href="/industry"
              cta="How we help"
            />
          </FadeUpAnimation>
        </div>
        <FadeUpAnimation delay={0.3}>
          <p className="museo-sans text-[14px] text-kelani-teal/60 mt-[28px]">
            Working across{" "}
            <a href="/industry/food-water" className="underline underline-offset-[4px] hover:opacity-70 text-kelani-teal">
              food &amp; water production
            </a>{" "}
            and the{" "}
            <a href="/industry/plastics" className="underline underline-offset-[4px] hover:opacity-70 text-kelani-teal">
              plastics value chain
            </a>
            .
          </p>
        </FadeUpAnimation>
      </section>

      <section className="px-clamp-inline py-[72px] md:py-[96px] bg-kelani-cream">
        <SectionHeader
          eyebrow="Where we're headed"
          title="Three engines of Kelani's future."
          lead="Today's trade funds tomorrow's platform. We're building toward owning and operating the plants we equip — with energy and industrial finance growing alongside."
        />
        <div className="grid md:grid-cols-3 gap-[20px] mt-[44px]">
          <FadeUpAnimation delay={0.15}>
            <PillarBlock
              index={1}
              tone="mint"
              title="The BOOT platform"
              description="Build-Own-Operate-Transfer plants converting waste into energy, materials and biochar — a repeatable model, applied plant after plant."
              href="/model"
              cta="The model"
            />
          </FadeUpAnimation>
          <FadeUpAnimation delay={0.23}>
            <PillarBlock
              index={2}
              tone="white"
              title="Energy ownership"
              description="From designing energy systems for clients to owning and operating our own — starting with biochar in Eastern Nigeria."
              href="/energy"
              cta="Energy"
            />
          </FadeUpAnimation>
          <FadeUpAnimation delay={0.31}>
            <PillarBlock
              index={3}
              tone="white"
              title="Industrial finance"
              description="Recovering excess LC, bank and shipping charges for importers — you keep the upside, we earn only from what we recover."
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
            <Eyebrow className="text-kelani-mint">Work with Kelani</Eyebrow>
            <h2 className="space-grotesk-semibold text-[26px] md:text-[36px] leading-[1.1] tracking-[-0.01em] mt-[14px] max-w-[640px] text-white">
              Setting up a line, a plant, or a whole business?
            </h2>
            <p className="museo-sans text-[15px] leading-[1.7] mt-[16px] max-w-[540px] text-white/70">
              Start with the machine you need today — or the plant you want
              to own tomorrow.
            </p>
          </FadeUpAnimation>
          <FadeUpAnimation delay={0.25}>
            <div className="flex flex-col gap-[14px]">
              <a
                href="/machinery"
                className="btn-brand inline-block text-center rounded-[2px] py-[16px] px-[36px] museo-sans font-semibold text-[14px] uppercase tracking-wider"
              >
                Browse machinery
              </a>
              <a
                href="/model"
                className="museo-sans text-center font-semibold text-[13px] uppercase tracking-wider text-kelani-mint underline underline-offset-[6px] hover:opacity-70 transition-opacity"
              >
                See the platform model
              </a>
            </div>
          </FadeUpAnimation>
        </div>
      </section>
    </PageShell>
  );
};

export default Home;
