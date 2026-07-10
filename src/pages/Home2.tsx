import Lenis from "@studio-freight/lenis/types";
import PageShell from "../components/PageShell";
import PillarBlock from "../components/PillarBlock";
import FadeUpAnimation from "../components/FadeUpAnimation";
import "./home2.css";

const Home = ({ lenis }: { lenis: Lenis }) => {
  return (
    <PageShell lenis={lenis}>
      <section className="module sub-page-hero pb-20">
        <div className="module-wrapper pt-sm pb-sm ">
          <div className="grid-row">
            <div className="grid-col-width-7">
              <h2 className="bg-gradient-to-r from-[#440572e6] to-[#ff9a53] bg-clip-text text-transparent">
                Kelani
              </h2>
              <h3>Building Africa's Future Across Industry & Energy</h3>
            </div>
            <div className="sub-page-hero__body grid-col-width-4 grid-col-start-9 column-border-md">
              <p>
                At Kelani, industrial expertise, hands-on manufacturing, and a
                commitment to sustainable energy converge. Join us on a
                transformative journey shaping an extraordinary future across
                Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-clamp-inline pb-[100px]">
        <FadeUpAnimation delay={0.1}>
          <span className="eyebrow-label text-[#0f1930]/50">What we do</span>
          <h2 className="space-grotesk-semibold text-[28px] md:text-[36px] mt-[12px] max-w-[600px] text-[#0f1930]">
            Four lines of business, one commitment to Africa's industry.
          </h2>
        </FadeUpAnimation>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[16px] mt-[36px]">
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
              tone="mint"
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
              description="Integrated design, production, and installation of biochar, bioethanol, biodiesel, and biogas systems."
              href="/energy"
            />
          </FadeUpAnimation>
          <FadeUpAnimation delay={0.36}>
            <PillarBlock
              index={4}
              tone="cream"
              title="Finance"
              description="Helping manufacturers recover excess shipping and bank fees — a new line we're building."
              href="/industry/plastics#finance"
              cta="Learn more"
            />
          </FadeUpAnimation>
        </div>
      </section>

      <section className="module large-text-full pt-[1.6rem] pb-[13rem]">
        <div className="module-wrapper pt-xl">
          <div className="grid-row">
            <div className="grid-col-width-9 column-border-lg">
              <p>
                <strong>
                  Elevating African Prosperity Through Indigenous Innovation
                </strong>
                <span>
                  {" "}
                  Relentlessly pursuing excellence for over 20 years, we
                  strive to develop and enhance African well-being through
                  nurturing and growing indigenous production and providing
                  cutting-edge technological solutions.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="px-clamp-inline flex flex-col space-y-[20px] md:space-y-0 md:flex-row justify-between mt-[26px] md:mt-[36px] w-full text-black">
          <div className="px-20 md:px-[3rem] md:w-[90%] flex flex-col md:flex-row justify-between w-full space-y-[20px] md:space-y-0 mt-16">
            <div>
              <p className="text-[#0f1930] font-semibold text-[3.5rem]">
                20+
              </p>
              <p className="text-[1rem] leading-[1.1] text-[#00000060]">
                Years of flawless <br className="hidden lg:block" /> delivery
              </p>
            </div>
            <div>
              <p className="text-[#0f1930] font-semibold text-[3.5rem]">
                $500+
              </p>
              <p className="text-[1rem] leading-[1.1] text-[#00000060]">
                Million dollars in <br className="hidden lg:block" />{" "}
                machinery
              </p>
            </div>
            <div>
              <p className="text-[#0f1930] font-semibold text-[3.5rem]">
                250+
              </p>
              <p className="text-[1rem] leading-[1.1] text-[#00000060]">
                Thrilled client <br className="hidden lg:block" /> businesses
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="h-screen full-width-media">
        <div className="pt-md pb-md bg-alt">
          <img
            className="h-screen object-cover"
            sizes="(max-width: 108.9375rem) 100vw, 103rem"
            srcSet="/assets/images/balebreaker-PET-recycling.jpg"
            src="/assets/images/balebreaker-PET-recycling.jpg"
            height={904}
            width={1648}
            alt="Kelani plant"
          />
        </div>
      </section>
    </PageShell>
  );
};

export default Home;
