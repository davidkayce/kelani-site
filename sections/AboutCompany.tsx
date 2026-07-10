import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../styles/about-company.css";
import "../styles/blog.css";
import { useNavigate } from "react-router-dom";

const AboutCompany = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const [titleHovered, setTitleHovered] = useState(false);

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.6]);

  const navigate = useNavigate();

  return (
    <motion.section
      ref={container}
      // initial={{ opacity: 0.5, scale: 0.8 }}
      // animate={{
      //   opacity: sectionDecimalScroll.get() > 0 ? 1 : 0,
      //   scale: sectionDecimalScroll.get() > 0 ? 1 : 0.9,
      //   y: sectionDecimalScroll.get() > 0 ? 0 : 50,
      //   transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
      // }}
      className="relative -z-10 min-h-[100vh] py-[60px] md:py-[170px] items-center px-[16px] md:px-[24px] lg:px-[40px] mx-auto"
    >
      <div className="w-full h-[100px] absolute -top-[10px] left-0 z-30 bg-gradient-to-b from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0)] rounded-[10px]"></div>
      <figure className="w-full overflow-hidden absolute top-0 right-0 left-0 bottom-0 z-10">
        <motion.div className="h-full w-full z-10" style={{ scale }}>
          <LazyLoadImage
            width={"100%"}
            height={"100%"}
            effect="blur"
            wrapperClassName="lazyLoadImageContainer "
            src={"/assets/images/about-us-img.jpg"}
          />
        </motion.div>
      </figure>
      <div className="w-full overflow-hidden absolute top-0 right-0 left-0 bottom-0 z-10 bg-white opacity-90"></div>
      {/* <div className="w-full overflow-hidden absolute top-0 right-0 left-0 bottom-0 bg-gray-500"></div> */}
      <div className="grid lg:grid-cols-2 gap-[60px] lg:gap-[80px] xl:gap-[100px]  w-full mx-auto max-w-[1672px] text-[black]">
        <a onClick={() => navigate("/about")} className=" " href={`/about`}>
          <div onMouseEnter={() => setTitleHovered(true)}
            onMouseLeave={() => setTitleHovered(false)} className="relative z-20 cursor-pointer overflow-hidden h-full rounded-[10px]">
            <div className="absolute top-0 flex flex-col justify-end pb-[45px] pl-[30px] right-0 left-0 bottom-0 md:max-w-[500px] lg:max-w-none mx-auto rounded-[10px] overflow-hidden bg-gradient-to-b to-[rgba(0,0,0,0.8)] from-[50%] from-[rgba(0,0,0,0)]  z-20">
              <h2
                className="text-[28px] md:text-[40px] text-white space-grotesk-semibold relative w-fit"
              >
                <span>About Us</span>
                <motion.svg
                  className="absolute -right-[40px] -top-[5px] rotate-45"
                  initial={{ rotate: "-45deg" }}
                  animate={{
                    x: titleHovered ? 8 : 0,
                    y: titleHovered ? -8 : 0,
                    transition: {
                      duration: 0.3,
                      ease: [0.43, 0.13, 0.23, 0.96],
                    },
                  }}
                  width="33"
                  height="36"
                  viewBox="0 0 11 12"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                >
                  <path
                    d="M9.64605 6.36485L6.5523 9.4586C6.45544 9.55547 6.32406 9.60989 6.18707 9.60989C6.05008 9.60989 5.9187 9.55547 5.82184 9.4586C5.72497 9.36173 5.67055 9.23036 5.67055 9.09337C5.67055 8.95638 5.72497 8.825 5.82184 8.72813L8.03516 6.51567H1.71875C1.582 6.51567 1.45085 6.46135 1.35415 6.36465C1.25745 6.26795 1.20312 6.1368 1.20312 6.00005C1.20312 5.86329 1.25745 5.73214 1.35415 5.63544C1.45085 5.53874 1.582 5.48442 1.71875 5.48442H8.03516L5.82269 3.27067C5.72583 3.1738 5.67141 3.04242 5.67141 2.90544C5.67141 2.76845 5.72583 2.63707 5.82269 2.5402C5.91956 2.44333 6.05094 2.38892 6.18793 2.38892C6.32492 2.38892 6.4563 2.44333 6.55316 2.5402L9.64691 5.63395C9.69499 5.68192 9.73312 5.73891 9.75911 5.80166C9.7851 5.8644 9.79844 5.93166 9.79836 5.99958C9.79828 6.06749 9.78478 6.13472 9.75864 6.19741C9.73251 6.26009 9.69425 6.317 9.64605 6.36485Z"
                    fill={"white"}
                  />
                </motion.svg>
              </h2>
            </div>
            <div className="w-full h-full z-10 mt-[50px] md:mt-0 md:max-w-[500px] min-h-[400px] md:min-h-[400px] lg:max-w-none mx-auto rounded-[10px] overflow-hidden"><motion.img animate={titleHovered ? { scale: 1.5, transition: { duration: 10 } } : { scale: 1, transition: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] } }} className="w-full h-full object-cover z-10 md:max-w-[500px] min-h-[400px] md:min-h-[400px] lg:max-w-none mx-auto rounded-[10px]" src="/assets/images/about-us.jpeg" /></div></div>
        </a>
        <div className="w-full py-0 md:py-[50px]">
          <div className="w-full xl:mx-[39px] md:mx-auto md:max-w-[500px] relative text-black z-20">
            <h1 className="text-[28px] md:text-[40px] leading-[1.1] md:leading-[1.08] space-grotesk-semibold">
              Elevating African Prosperity Through Indigenous Innovation
            </h1>
            <p className="museo-sans  mt-[18px] text-[16px] md:text-[16px] leading-[1.1]">
              Relentlessly pursuing excellence for over 20 years, we strive to
              develop and enhance African well-being through nurturing and growing
              indigenous production and providing cutting-edge technological
              solutions.{" "}
            </p>
            <p className="mt-[30px] md:mt-[30px] py-[14px] md:py-[16px] space-grotesk-semibold text-[16px] md:text-[21px] border-t border-b border-[black]">
              Kelani at a glance
            </p>
            <div>
              <div className="flex flex-col space-y-[20px] md:space-y-0 md:flex-row  justify-between mt-[20px] md:mt-[26px] w-full">
                <div className="">
                  <p className="text-[24px] md:text-[36px] space-grotesk-semibold">
                    20+
                  </p>
                  <p className=" museo-sans text-[14px] leading-[1.1]">
                    Years of flawless <br className="hidden lg:block" /> delivery
                  </p>
                </div>
                <div className="">
                  <p className="text-[24px] md:text-[36px] space-grotesk-semibold">
                    $500+
                  </p>
                  <p className=" museo-sans text-[14px] leading-[1.1]">
                    Million dollars in <br className="hidden lg:block" /> machinery
                  </p>
                </div>
                <div className="">
                  <p className="text-[24px] md:text-[36px] space-grotesk-semibold">
                    250+
                  </p>
                  <p className=" museo-sans text-[14px] leading-[1.1]">
                    Thrilled client <br className="hidden lg:block" /> businesses
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <figure className="overflow-hidden rounded-[10px]">
        <motion.img
          style={{ scale }}
          src="/assets/images/about-us.jpeg"
          loading="lazy"
          id="w-node-_5d22fc73-eda1-0598-2d4b-c941630b3825-3378c76e"
          alt=""
          className=" statistics-image object-cover"
        />
      </figure>
      <div
        id="w-node-_6779c508-7cdc-c836-8a25-982507e523f5-3378c76e"
        className="statistics-text-and-figures"
      >
        <div className="statistics-text">
          <p
            id="w-node-_03c4cf8f-14b2-c4b7-c070-5ac51836c5fd-3378c76e"
            className="text-[14px] text-[#272928] leading-[1.3] text-left mb-[16px] lg:mb-[16px] museo-sans font-bold"
          >
            WE EMPOWER YOUR WORLD!
          </p>
          <p className="paragraph-6 text-left space-grotesk-medium">
            Relentlessly pursuing{" "}
            <span className="statistics-colored-text">excellence</span> for over
            20 years, we strive to{" "}
            <span className="statistics-colored-text">develop</span> and enhance
            African well-being through the nurturing and growth of indigenous
            production and the provision of cutting-edge technological
            solutions.
          </p>
        </div>
        <div className="flex flex-col space-y-[23px]">
          <StatisticCard
            index={1}
            icon="clock"
            text="20+ Years of infallible service delivery"
          />
          <StatisticCard
            index={2}
            icon="cash"
            text="$500+ Million dollars in machinery and parts"
          />
          <StatisticCard
            index={3}
            icon="people"
            text="250+ Thrilled client businesses"
          />
        </div>
      </div> */}
    </motion.section>
  );
};

export default AboutCompany;
