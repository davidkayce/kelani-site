import Lenis from "@studio-freight/lenis/types";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import FadeUpAnimation from "../components/FadeUpAnimation";
import SubsidiaryCard from "../components/SubsidiaryCard";
import TopNav from "../components/TopNav";
import ValueCard from "../components/ValueCard";
import WhyKelaniCard from "../components/WhyKelaniCard";
import useScreenSize from "../hooks/useScreenSize";
import Footer from "../sections/Footer";
import NavBar from "../components/NavBar";
import useNavStore from "../store/nav";

interface AboutProps {
  lenis: Lenis;
}

const SlidePrevButton = () => {
  const swiper = useSwiper();
  return (
    <motion.div
      onClick={() => {
        swiper.slidePrev();
      }}
      className="bg-[rgb(239,239,239)] hover:bg-[#d2d2d2] transition duration-500 w-[30px] h-[30px] sm:w-[40px] md:h-[40px] rounded-full flex items-center justify-center cursor-pointer"
    >
      <svg
        // width="24"
        // height="20"
        className="md:w-[24px] md:h-[20px] w-[18px] h-[14.4px] scale-50"
        viewBox="0 0 24 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.2925 10.7076L9.2925 19.7076C9.48014 19.8952 9.73464 20.0006 10 20.0006C10.2654 20.0006 10.5199 19.8952 10.7075 19.7076C10.8951 19.5199 11.0006 19.2654 11.0006 19.0001C11.0006 18.7347 10.8951 18.4802 10.7075 18.2926L3.41375 11.0001H23C23.2652 11.0001 23.5196 10.8947 23.7071 10.7072C23.8946 10.5196 24 10.2653 24 10.0001C24 9.73485 23.8946 9.4805 23.7071 9.29296C23.5196 9.10542 23.2652 9.00007 23 9.00007H3.41375L10.7075 1.70757C10.8951 1.51993 11.0006 1.26543 11.0006 1.00007C11.0006 0.734704 10.8951 0.480208 10.7075 0.292568C10.5199 0.104927 10.2654 -0.000488281 10 -0.000488281C9.73464 -0.000488281 9.48014 0.104927 9.2925 0.292568L0.2925 9.29257C0.199524 9.38544 0.125763 9.49573 0.0754395 9.61713C0.025116 9.73853 -0.000785828 9.86865 -0.000785828 10.0001C-0.000785828 10.1315 0.025116 10.2616 0.0754395 10.383C0.125763 10.5044 0.199524 10.6147 0.2925 10.7076Z"
          fill="black"
        />
      </svg>
    </motion.div>
  );
};
const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <motion.div
      onClick={() => {
        swiper.slideNext();
      }}
      initial={{ rotateZ: 180 }}
      className="bg-[rgb(239,239,239)] hover:bg-[#d2d2d2] transition duration-[500ms] w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full flex items-center justify-center cursor-pointer"
    >
      <svg
        className="md:w-[24px] md:h-[20px] w-[18px] h-[14.4px] scale-50"
        viewBox="0 0 24 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.2925 10.7076L9.2925 19.7076C9.48014 19.8952 9.73464 20.0006 10 20.0006C10.2654 20.0006 10.5199 19.8952 10.7075 19.7076C10.8951 19.5199 11.0006 19.2654 11.0006 19.0001C11.0006 18.7347 10.8951 18.4802 10.7075 18.2926L3.41375 11.0001H23C23.2652 11.0001 23.5196 10.8947 23.7071 10.7072C23.8946 10.5196 24 10.2653 24 10.0001C24 9.73485 23.8946 9.4805 23.7071 9.29296C23.5196 9.10542 23.2652 9.00007 23 9.00007H3.41375L10.7075 1.70757C10.8951 1.51993 11.0006 1.26543 11.0006 1.00007C11.0006 0.734704 10.8951 0.480208 10.7075 0.292568C10.5199 0.104927 10.2654 -0.000488281 10 -0.000488281C9.73464 -0.000488281 9.48014 0.104927 9.2925 0.292568L0.2925 9.29257C0.199524 9.38544 0.125763 9.49573 0.0754395 9.61713C0.025116 9.73853 -0.000785828 9.86865 -0.000785828 10.0001C-0.000785828 10.1315 0.025116 10.2616 0.0754395 10.383C0.125763 10.5044 0.199524 10.6147 0.2925 10.7076Z"
          fill="black"
        />
      </svg>
    </motion.div>
  );
};

const About: React.FC<AboutProps> = ({ lenis }) => {
  const imageRef = useRef(null);
  const { scrollYProgress: imageScrollYProgress } = useScroll({
    target: imageRef,
    offset: ["0.3 end", "end end"],
  });
  const valuesRef = useRef(null);
  const { scrollYProgress: valuesScrollYProgress } = useScroll({
    target: valuesRef,
    offset: ["start end", "end end"],
  });

  const valuesSectionWidth = useTransform(
    valuesScrollYProgress,
    [0, 0.25],
    ["90%", "100%"]
  );

  const { width } = useScreenSize();

  const imageScale = useTransform(
    imageScrollYProgress,
    [0, 1],
    [
      window.innerWidth > 1560
        ? window.innerWidth / 1560
        : window.innerWidth > 768
        ? (window.innerWidth - 160) / window.innerWidth
        : 0.85,
      1,
    ]
  );

  const { navShowing, setNavShowing } = useNavStore();

  return (
    <>
    <main className="relative z-10 pt-20">
        <section className="grid grid-cols-[1fr_2fr] max-w-[1560px] px-[20px] md:px-[48px] lg:px-[80px]">
          <FadeUpAnimation
            delay={1}
            className="flex flex-col items-center border-r border-[rgba(166,166,166,0.5)] pr-[20px] md:pr-[70px] lg:pr-[80px]"
          >
            <img
              className="w-[100px] md:w-[80%] lg:w-[90%] h-[80%]"
              src="/assets/images/kelani-icon.svg"
            />
          </FadeUpAnimation>
          <div className="py-[80px] xl:py-[100px] pb-[150px] pl-[20px] md:pl-[70px] lg:pl-[80px]">
            <FadeUpAnimation className="museo-sans font-[500] text-[18px] md:text-[26px] lg:text-[32px] xl:text-[36px] leading-[1.1] ">
              For more than two decades, our unwavering commitment has been to
              uplift Africa by fostering local industries and offering state of
              the art technological advancements. We're dedicated to fostering
              African prosperity by promoting local production and innovative
              solutions.
            </FadeUpAnimation>
            <FadeUpAnimation delay={1} className="mt-[60px] md:mt-[100px]">
              <img
                src="/assets/images/mouse.svg"
                className="h-[30px] md:h-[40px]"
              />
            </FadeUpAnimation>
          </div>
        </section>
        <FadeUpAnimation
          delay={1}
          className="w-full relative top-[-100px] mt-[30px]"
        >
          <motion.img
            style={{ scale: imageScale }}
            ref={imageRef}
            className="w-full md:h-[80%] object-cover"
            src="/assets/images/kelani-home-image.png"
          />
        </FadeUpAnimation>
        <section className="lg:ml-[41.6%] w-full sm:w-[70%] md:w-[60%] lg:w-[38%] text-[28px] md:text-[28px] lg:text-[36px] leading-[1.1] px-[20px] lg:px-0 museo-sans font-medium">
          Kelani has built a business with three main subsidiaries.
        </section>
        <section className="pt-[100px] md:pt-[150px]">
          <div className="relative py-[70ox]">
            <Swiper
              className="static overflow-y-visible flex flex-col-reverse px-[20px] lg:pl-[48px] pr-0"
              slidesPerView={width > 1024 ? 2.5 : 1 + 50 / width}
              spaceBetween={23}
            >
              {/* @ts-ignore */}
              <div className="flex mb-[20px] md:mb-[52px] pt-[12px]">
                <div className="flex items-center space-x-[12px]">
                  <SlidePrevButton />
                  <SlideNextButton />
                </div>
                <div className="museo-sans font-light text-[12px] text-[#7c7c7c] space-x-[16px] md:space-x-[32px] flex items-center">
                  <div
                    style={{ backgroundColor: "" }}
                    className="ml-[16px] py-[12px] md:py-[6px] px-[20px] font-light text-[12px]  border border-[#d2d2d2] rounded-[8px] md:rounded-[12px] leading-[0.8] md:leading-[1] flex items-center justify-center"
                  >
                    Drag
                  </div>
                </div>
              </div>
              <div className="cursor-grabbing">
                <SwiperSlide>
                  <SubsidiaryCard
                    index={"01"}
                    subsidiaryName="Engineering"
                    themeColor="#E36E1B"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SubsidiaryCard
                    index="02"
                    subsidiaryName="Power"
                    themeColor="#069E7D"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <SubsidiaryCard
                    index={"03"}
                    subsidiaryName="Consulting"
                    themeColor="#9446A3"
                  />
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </section>
        {/* <section className="w-full mt-[55px] md:mt-[100px] lg:mt-[200px] px-[20px] lg:px-[48px]">
                    <FadeUpAnimation className="space-grotesk-medium text-[30px] md:text-[42px] lg:text-[46px] mb-[32px] md:mb-[32px]">Meet The Team</FadeUpAnimation>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[18px] sm:gap-[20px] "
                    >
                        <TeamMemberCard name="David Ojimba" position="Director" imageUrl="https://media.licdn.com/dms/image/C4D03AQHLKPrCvMWsBg/profile-displayphoto-shrink_800_800/0/1643831454208?e=1717027200&v=beta&t=fqX7h8wrmo5HMzdtt_B2qPrvzeCaoEnOYwUYfz-wbfs" />
                        <TeamMemberCard name="David Ojimba" position="Director" imageUrl="https://media.licdn.com/dms/image/C4D03AQHLKPrCvMWsBg/profile-displayphoto-shrink_800_800/0/1643831454208?e=1717027200&v=beta&t=fqX7h8wrmo5HMzdtt_B2qPrvzeCaoEnOYwUYfz-wbfs" />
                        <TeamMemberCard name="David Ojimba" position="Director" imageUrl="https://media.licdn.com/dms/image/C4D03AQHLKPrCvMWsBg/profile-displayphoto-shrink_800_800/0/1643831454208?e=1717027200&v=beta&t=fqX7h8wrmo5HMzdtt_B2qPrvzeCaoEnOYwUYfz-wbfs" />
                        <TeamMemberCard name="David Ojimba" position="Director" imageUrl="https://media.licdn.com/dms/image/C4D03AQHLKPrCvMWsBg/profile-displayphoto-shrink_800_800/0/1643831454208?e=1717027200&v=beta&t=fqX7h8wrmo5HMzdtt_B2qPrvzeCaoEnOYwUYfz-wbfs" />
                        <TeamMemberCard name="David Ojimba" position="Director" imageUrl="https://media.licdn.com/dms/image/C4D03AQHLKPrCvMWsBg/profile-displayphoto-shrink_800_800/0/1643831454208?e=1717027200&v=beta&t=fqX7h8wrmo5HMzdtt_B2qPrvzeCaoEnOYwUYfz-wbfs" />
                        <TeamMemberCard name="David Ojimba" position="Director" imageUrl="https://media.licdn.com/dms/image/C4D03AQHLKPrCvMWsBg/profile-displayphoto-shrink_800_800/0/1643831454208?e=1717027200&v=beta&t=fqX7h8wrmo5HMzdtt_B2qPrvzeCaoEnOYwUYfz-wbfs" />
                        <TeamMemberCard name="David Ojimba" position="Director" imageUrl="https://media.licdn.com/dms/image/C4D03AQHLKPrCvMWsBg/profile-displayphoto-shrink_800_800/0/1643831454208?e=1717027200&v=beta&t=fqX7h8wrmo5HMzdtt_B2qPrvzeCaoEnOYwUYfz-wbfs" />
                        <TeamMemberCard name="David Ojimba" position="Director" imageUrl="https://media.licdn.com/dms/image/C4D03AQHLKPrCvMWsBg/profile-displayphoto-shrink_800_800/0/1643831454208?e=1717027200&v=beta&t=fqX7h8wrmo5HMzdtt_B2qPrvzeCaoEnOYwUYfz-wbfs" />
                    </div>
                </section> */}
        <section className="mt-[90px] md:mt-[150px] ">
          <FadeUpAnimation
            y={40}
            className="text-[50px] sm:text-[95px] md:text-[110px] lg:text-[150px] xl:text-[165px] px-[20px] lg:px-[48px] space-grotesk-medium leading-[1] tracking-tighter"
          >
            Why Kelani?
          </FadeUpAnimation>
          <div className="mt-[34px] md:mt-[50px] bg-[#069E7D] grid grid-cols-1 md:grid-cols-2 border-b border-b-[rgba(255,255,255,0.4)]">
            <WhyKelaniCard
              index={1}
              icon="/assets/images/enhanced-productivity.svg"
              title="Enhanced Productivity"
              text="With unparalleled expertise and infallible experience, our platform is meticulously tailored towards propelling your productivity to unprecedented heights and unlocking your full potential.
"
            />
            <WhyKelaniCard
              index={2}
              icon="/assets/images/talent-development.svg"
              title="Cultivating Talent"
              text="Experience the epitome of perfection, fueled by your boundless potential and the inspiration drawn from the skill and talent we cultivate.

"
            />
          </div>
          <div className="bg-[#069E7D] py-[40px] px-[4px] md:px-[20px] lg:px-[48px] border-b border-b-[rgba(255,255,255,0.4)]">
            <motion.div
              ref={valuesRef}
              style={{ width: valuesSectionWidth }}
              className="bg-white mx-auto  md:w-full pt-[56px] md:pt-[80px] lg:pt-[112px] rounded-[10px] md:px-[30px] pb-[48px] md:pb-[80px] lg:pb-[120px]"
            >
              <h2 className="md:text-[60px] text-[36px] lg:text-[80px] space-grotesk-medium text-center">
                Company Values
              </h2>
              <p className="text-center text-[12.8px] md:text-[16px] space-grotesk-medium font-normal text-[#7d7d7d] mt-[5px] md:mt-[10px]">
                Why are these our values?
              </p>
              <div className="pt-[42px] md:pt-[60px] lg:pt-[72px] flex flex-col space-y-[18px] md:px-[6%]">
                <ValueCard
                  image="/assets/images/empowerment.png"
                  backgroundColor="#ffd559"
                  header="Empowerment"
                  paragraph=" We foster an environment for individuals and enterprises to take ownership, make decisions, and contribute unique perspectives.
"
                />
                <ValueCard
                  image="/assets/images/growth.png"
                  backgroundColor="#97b991"
                  header="Growth"
                  paragraph="Committed to growth, we foster an environment where potential thrives. Through continuous improvement, we drive progress and embrace change for a brighter future.
"
                />
                <ValueCard
                  image="/assets/images/robot.png"
                  backgroundColor="#dee7e1"
                  header="Innovation"
                  paragraph=" At our core, we are innovators. We push boundaries, challenge the status quo, and seek creative solutions to meet evolving needs and positively influence the world.
"
                />
                <ValueCard
                  image="/assets/images/inspiration.png"
                  backgroundColor="#fab578"
                  header="Inspiration"
                  paragraph=" Inspiration fuels us beyond the ordinary. We challenge conventions, leaving a mark that inspires others. Our commitment to excellence lights the way to a brighter tomorrow.
"
                />
                <ValueCard
                  image="/assets/images/handshake.png"
                  backgroundColor="#99c8df"
                  header="Integrity"
                  paragraph="Upholding the highest standards of integrity helps us build credibility and establish ourselves as the reliable and respected organization you expect.
"
                />
                <ValueCard
                  image="/assets/images/people.png"
                  backgroundColor="rgb(185 172 225)"
                  header="People"
                  paragraph="People are our greatest strength. We champion diversity and human connection, valuing each individual's perspective, driving a united community for positive impact.
"
                />
              </div>
            </motion.div>
          </div>
          <div className="pt-[48px] md:pt-[80px] lg:pt-[120px] bg-[#069E7D] pb-[60px]">
            <FadeUpAnimation>
              <h2 className="text-[44px] sm:text-[95px] md:text-[110px] lg:text-[150px] xl:text-[165px] px-[20px] lg:px-[48px] space-grotesk-medium leading-[1] text-white tracking-tighter">
                Empowerment
              </h2>
            </FadeUpAnimation>
            <div className="w-full md:grid md:grid-cols-[35%_65%] museo-sans text-white mt-[30px] md:mt-[80px] px-[20px] lg:px-[48px]">
              <div className="hidden w-full h-full sm:flex   items-center">
                <img
                  className="grayscale sm:w-[180px] lg:w-[300px] opacity-45"
                  src="/assets/images/kelani-icon.svg"
                />
              </div>
              <div className="text-[13px] sm:text-[15px] lg:text-[16px] xl:text-[19px] leading-[1.25]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[15px] lg:gap-[10%] md:w-[85%]">
                  <FadeUpAnimation>
                    <p className="">
                      Kelani envisions empowering 500 million Africans for
                      improved well-being and productivity through technology
                      and education. We are dedicated to fostering a resilient
                      African landscape by establishing sustainable systems for
                      enduring success.
                    </p>
                  </FadeUpAnimation>
                </div>
                <div className="mt-[15px] lg:mt-[40px] grid grid-cols-1 lg:grid-cols-2 gap-[15px] lg:gap-[10%] md:w-[85%]">
                  <FadeUpAnimation>
                    <p className="">
                      Our mission at Kelani is to drive African well-being and
                      indigenous production through innovative technology. We
                      provide tools to optimize efficiency and guide users
                      toward sustainable practices, ensuring positive impacts
                      for years to come.
                    </p>
                  </FadeUpAnimation>
                  <FadeUpAnimation>
                    <p className="">
                      Kelani is committed to uplifting the entire African
                      community by instilling responsibility and providing
                      actionable tools. We champion a collective movement
                      towards a brighter future, fostering sustainability and
                      prosperity for generations.
                    </p>
                  </FadeUpAnimation>
                </div>
                <FadeUpAnimation
                  y={20}
                  className="w-full md:pr-[48px] mt-[40px]"
                >
                  <img
                    className="w-full max-h-[400px] object-cover"
                    src="/assets/images/empowerment-section.png"
                  />
                </FadeUpAnimation>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer
        contactUsUrl={
          "https://app.nocodb.com/api/v2/tables/mjgtqh17rbqo28w/records"
        }
      />
    </>
  );
};

export default About;
