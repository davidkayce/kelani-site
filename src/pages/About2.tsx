import Lenis from "@studio-freight/lenis/types";
import { motion } from "framer-motion";
import PageShell from "../components/PageShell";
import "./home2.css";

interface AboutProps {
  lenis: Lenis;
}

const About: React.FC<AboutProps> = ({ lenis }) => {
  return (
    <PageShell lenis={lenis}>
      <section className="module sub-page-hero">
        <div className="module-wrapper pt-sm pb-sm ">
          <div className="grid-row">
            <div className="grid-col-width-7">
              <h2 className="bg-gradient-to-r from-[#440572e6] to-[#ff9a53] bg-clip-text text-transparent">
                About Us
              </h2>

              <h3>
                Dedicated to uplifting Africa through local industries and
                innovative technology
              </h3>
            </div>
            <div className="sub-page-hero__body grid-col-width-4 grid-col-start-9 column-border-md">
              <p>
                For more than two decades, our unwavering commitment has been
                to uplift Africa by fostering local industries and offering
                state of the art technological advancements. We're dedicated
                to fostering African prosperity by promoting local production
                and innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="module section-label mt-20">
        <div className="module-wrapper pt-md bg-transparent pb-sm ">
          <h2 className="!text-3xl">Our Values</h2>
        </div>
      </section>

      <section className="module three-column pb-24">
        <div className="module-wrapper pb-sm ">
          <div className="grid-row">
            <div className="grid-col-width-3">
              <div className="column-border-lg">
                <h3>Inspiration</h3>
                <p>
                  Inspiration pushes us to break norms and leave a lasting
                  impact, while our pursuit of excellence shapes a brighter
                  future.
                </p>
              </div>
            </div>
            <div className="grid-col-width-3">
              <div className="column-border-lg">
                <h3>Creativity</h3>
                <p>
                  Creativity thrives in authenticity, exploring new ideas and
                  embracing challenges to spark innovation.{" "}
                </p>
              </div>
            </div>
            <div className="grid-col-width-3">
              <div className="column-border-lg">
                <h3>Empowerment</h3>
                <p>
                  We empower individuals and businesses to take ownership,
                  make decisions, and share unique perspectives.{" "}
                </p>
              </div>
            </div>
            <div className="grid-col-width-3">
              <div className="column-border-lg">
                <h3>Integrity</h3>
                <p>
                  Upholding high integrity standards builds our credibility
                  and establishes us as a reliable, respected organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="module section-label">
        <div className="module-wrapper pt-md pb-sm bg-alt">
          <h2>Our Team</h2>
        </div>
      </section>
      <section className="module headline">
        <div className="module-wrapper pt-sm pb-sm bg-alt">
          <div className="grid-row">
            <div className="grid-col-width-7 column-border-lg">
              <h2>
                A passionate group of world-class technologists, and project
                developers.
              </h2>
            </div>
            <div className="headline__body grid-col-width-4 grid-col-start-9 column-border-md">
              <p>
                At Kelani, we're industry veterans with unmatched expertise in
                syngas generation, energy projects, and carbon supply chains.
                With over $60B in projects delivered, we're shaping Africa's
                energy future through innovation and sustainable solutions.
              </p>
            </div>
          </div>
        </div>
        <motion.img
          exit={{ opacity: 0 }}
          className="w-full md:h-[80%] object-cover"
          src="/assets/images/kelani-home-image.png"
        />
      </section>
      <section className="module section-label">
        <div className="module-wrapper pt-lg pb-sm ">
          <h2>Partners</h2>
        </div>
      </section>
      <section className="module logo-grid">
        <div className="module-wrapper  pb-sm ">
          <div className="grid-row">
            <div className="grid-col-width-3 column-border-lg">
              <h3>Our Trusted Partners</h3>
            </div>
            <div className="grid-col-width-2 h-full flex flex-row items-center">
              <span className="logo-grid__logo p-0 m-0">
                <img
                  src="/assets/images/brands/dingli.jpg"
                  srcSet="/assets/images/brands/dingli.jpg"
                  className="object-cover"
                  alt="Dingli"
                />
              </span>
            </div>
            <div className="grid-col-width-2 h-full flex flex-row items-center">
              <span className="logo-grid__logo">
                <img
                  src="/assets/images/brands/dingye.jpg"
                  srcSet="/assets/images/brands/dingye.jpg"
                  height={49}
                  width={149}
                  alt="Dingye"
                />
              </span>
            </div>
            <div className="grid-col-width-2 h-full flex flex-row items-center">
              <span className="logo-grid__logo">
                <img
                  src="/assets/images/brands/gelgoog.png"
                  srcSet="/assets/images/brands/gelgoog.png"
                  height={41}
                  width={138}
                  alt="Gelgoog"
                />
              </span>
            </div>
            <div className="grid-col-width-2 h-full flex flex-row items-center">
              <span className="logo-grid__logo">
                <img
                  src="/assets/images/brands/lisheng.png"
                  srcSet="/assets/images/brands/lisheng.png"
                  height={47}
                  width={155}
                  alt="Lisheng"
                />
              </span>
            </div>
            <div className="grid-col-width-2 h-full flex flex-row items-center">
              <span className="logo-grid__logo">
                <img
                  src="/assets/images/brands/technoshell.png"
                  srcSet="/assets/images/brands/technoshell.png"
                  height={101}
                  width={171}
                  alt="Technoshell"
                />
              </span>
            </div>
            <div className="grid-col-width-2 h-full flex flex-row items-center justify-center">
              <span className="logo-grid__logo">
                <img
                  className="h-24 w-24"
                  src="/assets/images/brands/tentoo.jpg"
                  srcSet="/assets/images/brands/tentoo.jpg"
                  height={59}
                  width={53}
                  alt="Chevron"
                />
              </span>
            </div>
            <div className="grid-col-width-2 h-full flex flex-row items-center">
              <span className="logo-grid__logo">
                <img
                  src="/assets/images/brands/tongjia.jpg"
                  srcSet="/assets/images/brands/tongjia.jpg"
                  height={71}
                  width={123}
                  alt="CDP Venture Capital Sgr"
                />
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="module headline">
        <div className="module-wrapper pt-sm pb-sm ">
          <div className="grid-row">
            <div className="grid-col-width-7 column-border-lg">
              <h2>Partnerships for research and public development</h2>
            </div>

            <div className="headline__body grid-col-width-4 grid-col-start-9 column-border-md">
              <p>
                At Kelani, we prioritize collaboration to drive innovation in
                sustainable energy. Our partnerships with leading
                organizations and research institutions enable us to leverage
                diverse insights and cutting-edge technology. By fostering a
                culture of research and development, we enhance syngas
                generation and energy project development, ensuring a
                transformative impact on Africa's energy landscape.
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
            srcSet="/assets/images/aboutback.jpg"
            src="/assets/images/aboutback.jpg"
            height={706}
            width={1648}
            alt="Kelani"
          />
        </div>
      </section>
    </PageShell>
  );
};

export default About;
