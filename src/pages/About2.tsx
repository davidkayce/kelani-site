import Lenis from "@studio-freight/lenis/types";
import { Helmet } from "react-helmet";
import PageShell from "../components/PageShell";
import FadeUpAnimation from "../components/FadeUpAnimation";
import Eyebrow from "../components/Eyebrow";
import SectionHeader from "../components/SectionHeader";
import IconFeature from "../components/IconFeature";

interface AboutProps {
  lenis: Lenis;
}

const partners = [
  { src: "/assets/images/brands/dingli.jpg", alt: "Dingli" },
  { src: "/assets/images/brands/dingye.jpg", alt: "Dingye" },
  { src: "/assets/images/brands/gelgoog.png", alt: "Gelgoog" },
  { src: "/assets/images/brands/lisheng.png", alt: "Lisheng" },
  { src: "/assets/images/brands/technoshell.png", alt: "Technoshell" },
  { src: "/assets/images/brands/tentoo.jpg", alt: "Tentoo" },
  { src: "/assets/images/brands/tongjia.jpg", alt: "Tongjia" },
];

const About: React.FC<AboutProps> = ({ lenis }) => {
  return (
    <PageShell lenis={lenis}>
      <Helmet>
        <title>About Us — Kelani</title>
      </Helmet>

      <section className="px-clamp-inline pt-[48px] pb-[72px] md:pt-[64px] md:pb-[96px]">
        <FadeUpAnimation delay={0.1}>
          <Eyebrow>About us</Eyebrow>
          <h1 className="display-heading mt-[18px] text-kelani-teal max-w-[900px]">
            Dedicated to uplifting Africa through local industry.
          </h1>
          <p className="museo-sans text-[16px] md:text-[18px] leading-[1.7] text-kelani-teal/70 mt-[26px] max-w-[620px]">
            For more than two decades, our commitment has been to uplift
            Africa by fostering local industries and offering state-of-the-art
            technology. Today that commitment has a shape: an industrial
            circular-economy platform that builds, owns, operates and manages
            the companies that turn West Africa's waste into its power,
            materials and soil.
          </p>
        </FadeUpAnimation>
      </section>

      <section className="px-clamp-inline py-[72px] md:py-[96px] border-t border-[#e4e0d6]">
        <SectionHeader eyebrow="Our values" title="What we hold ourselves to." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-[28px] gap-y-[24px] mt-[44px]">
          <IconFeature
            icon="spark"
            title="Inspiration"
            description="Inspiration pushes us to break norms and leave a lasting impact, while our pursuit of excellence shapes a brighter future."
            delay={0.15}
          />
          <IconFeature
            icon="loop"
            title="Creativity"
            description="Creativity thrives in authenticity — exploring new ideas and embracing challenges to spark innovation."
            delay={0.2}
          />
          <IconFeature
            icon="handshake"
            title="Empowerment"
            description="We empower individuals and businesses to take ownership, make decisions, and share unique perspectives."
            delay={0.25}
          />
          <IconFeature
            icon="shield"
            title="Integrity"
            description="High integrity standards build our credibility and establish us as a reliable, respected institution."
            delay={0.3}
          />
        </div>
      </section>

      <section className="px-clamp-inline py-[72px] md:py-[96px] bg-kelani-cream grid md:grid-cols-2 gap-[48px] items-center">
        <FadeUpAnimation delay={0.1}>
          <Eyebrow>Our team</Eyebrow>
          <h2 className="space-grotesk-semibold text-[28px] md:text-[38px] leading-[1.08] tracking-[-0.01em] mt-[14px] max-w-[480px] text-kelani-teal">
            Operators first, developers second.
          </h2>
          <p className="museo-sans text-[15px] leading-[1.7] mt-[18px] max-w-[480px] text-kelani-teal/70">
            Kelani is run by a lean senior team of engineers and industrial
            operators, with plant managers owning day-to-day operations and a
            shared-services core carrying finance, compliance and digital
            across the portfolio. Two decades of sourcing, installing and
            running machinery across Nigeria is the discipline every new
            plant inherits.
          </p>
        </FadeUpAnimation>
        <FadeUpAnimation delay={0.25}>
          <figure>
            <img
              src="/assets/images/kelani-home-image.png"
              alt="The Kelani team at work"
              className="w-full h-[360px] object-cover img-editorial"
            />
            <figcaption className="museo-sans text-[12px] text-kelani-teal/50 mt-[10px]">
              The Kelani engineering team, on site.
            </figcaption>
          </figure>
        </FadeUpAnimation>
      </section>

      <section className="px-clamp-inline py-[72px] md:py-[96px] border-t border-[#e4e0d6]">
        <SectionHeader
          eyebrow="Partners"
          title="Trusted by the OEMs we build with."
          lead="Long-standing partnerships with equipment manufacturers give us factory-direct pricing, engineering support, and warranties our clients can rely on."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-[1px] bg-[#e4e0d6] border border-[#e4e0d6] mt-[44px]">
          {partners.map((p, i) => (
            <div
              key={p.alt}
              className="bg-white flex items-center justify-center p-[24px] h-[110px]"
            >
              <FadeUpAnimation delay={0.1 + i * 0.05} y={12}>
                <img
                  src={p.src}
                  alt={p.alt}
                  className="max-h-[56px] max-w-[110px] object-contain greyed-out hover:filter-none transition-all"
                />
              </FadeUpAnimation>
            </div>
          ))}
        </div>
      </section>

      <section className="px-clamp-inline pb-[96px]">
        <FadeUpAnimation delay={0.15}>
          <figure>
            <img
              src="/assets/images/aboutback.jpg"
              alt="Kelani industrial facility"
              className="w-full h-[420px] md:h-[560px] object-cover img-editorial"
            />
            <figcaption className="museo-sans text-[12px] text-kelani-teal/50 mt-[10px]">
              Building the industrial base, one plant at a time.
            </figcaption>
          </figure>
        </FadeUpAnimation>
      </section>
    </PageShell>
  );
};

export default About;
