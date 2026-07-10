/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { Dispatch, SetStateAction, useRef } from "react";

interface ParallexMobileProps {
  header: string;
  subHead: string;
  data: {
    img: string;
    img2: string;
    img3: string;
    content: {
      head: string;
      text: string;
    };
    colors: {
      one: string;
      two: string;
    };
  }[];
}

const ParallexCardsMobile: React.FC<{ data: ParallexMobileProps; setCtaFormShowing: Dispatch<SetStateAction<boolean>> }> = ({
  data,
  setCtaFormShowing
}) => {
  // const animated = useRef(null);

  // const animateCardsIn = () => {
  //     const timeline = gsap.timeline({
  //         scrollTrigger: {
  //             trigger: ".card-animation-container",
  //             scrub: 1,
  //             start: "top 70%",
  //             end: "+=1000",
  //             markers: false,
  //         },
  //     });
  //     timeline.to(".card-1", { y: 0,x: "-200vw", duration: 150 });
  //     timeline.to(".card-2", { y: "-200vh", x: "-200vw", duration: 150, delay: 30 });
  //     timeline.to(".card-3", { y: "-200vh",x: "-200vw", duration: 150, delay: 30 });
  //     timeline.to(".card-1 .line-extend", { x: "-100px", duration: 3 }, 6);
  //     timeline.to(
  //         ".card-1 .top-left-image",
  //         { y: -100, x: -100, opacity: 1, duration: 100 },
  //         6
  //     );
  //     timeline.to(".card-2 .line-extend", { x: "100vw", duration: 3, delay: 3 }, 15);
  //     timeline.to(
  //         ".card-2 .top-left-image",
  //         { y: -100, x: -100, opacity: 1,delay: 10, duration: 30 },
  //         15
  //     );

  // };
  gsap.registerPlugin(ScrollTrigger);

  const card1leftSide = useRef(null);
  const card2leftSide = useRef(null);
  const card1textContainer = useRef(null);
  const card2textContainer = useRef(null);

  const card1Container = useRef(null);
  const card2Container = useRef(null);
  const card3Container = useRef(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".card-animation-container",
        scrub: 1,
        start: "center 60%",
        end: "+=1000",
        markers: false,
      },
    });

    timeline.to(".card-1", { x: "-200vw", duration: 150 });
    timeline.to(".card-2", {
      x: "-200vw",
      duration: 150,
      delay: 300,
    });
    timeline.to(".card-3", {
      x: "-200vw",
      duration: 150,
      delay: 500,
    });

    timeline.to(".card-1 .line-extend", { x: "-200vw", duration: 350 }, 300);
    timeline.to(
      ".card-1 .top-left-image",
      { y: -100, x: -100, opacity: 1, duration: 100 },
      300
    );
    timeline.to(".card-2 .line-extend", { x: "-200vw", duration: 350 }, 600);
    timeline.to(
      ".card-2 .top-left-image",
      { y: -100, x: -100, opacity: 1, delay: 20, duration: 300 },
      500
    );
  });

  return (
    <>
      {/* <div className="relative h-[210vh] bg-black  ">
        <div className=" pb-3 h-[100vh] card-animation-container items-center  pt-10 flex-col text-white w-full flex">
          <div className=" w-[70%] text-center mb-16">
            <h3 className=" opacity-80 tracking-widest  mb-2 uppercase">
              {data.subHead}
            </h3>
            <h1 className=" uppercase text-center font-semibold ">
              {data.header}
            </h1>
          </div>

          <div className="w-[90%] relative top-0 card-animation-container">
            <div
              style={{
                background: `url(${data.data[0].img2})`,
                transform: "rotate(180deg)",
                backgroundSize: "cover",
              }}
              className="w-full overflow-hidden z-20 left-[200vw] top-[200vh] absolute  h-[calc(100vh-140px)] border-white border rounded-[20px] card-1 "
            >
              <div
                ref={card1leftSide}
                style={{ transform: "rotate(-180deg)" }}
                className="h-full w-full"
              >
                <div className="h-[15%] w-full relative flex  items-center">
                  <div className="w-[90px] p-2 h-full flex items-center justify-center">
                    <img
                      className="h-full opacity-0 top-[100px] left-[100px] relative top-left-image"
                      src={data.data[0].img}
                    />
                  </div>
                  <div className="h-[2px] w-full relative flex justify-center overflow-hidden ">
                    <div className="w-[95%] pr-3 bg-[#F4F4F4] h-full  absolute left-[200vw] line-extend"></div>
                  </div>
                </div>
                <div className="text-left h-[85%] p-3 flex flex-col justify-between items-center ">
                  <div className=" max-h-[15%] flex relative mb-20 flex-col px-2 items-start">
                    <h2 className=" md:text-4xl top-10 text-white title space-grotesk-medium text-[26px] md:text-[32px]">
                      {data.data[0].content.head}
                    </h2>
                    <p className=" text-[14px] mt-[12px] museo-sans">{data.data[0].content.text}</p>
                    <button className="text-white items-center flex gap-[13px] mt-[25px] md:mt-[44px] ">
                      Learn More
                      <img src="/assets/images/right-arrow.svg" />
                    </button>
                  </div>
                  <img
                    className=" w-[80%] md:w-[60%]   object-cover"
                    src={data.data[0].img3}
                  />
                </div>
              </div>
            </div>

            <div
              style={{
                background: `url(${data.data[1].img2})`,
                transform: "rotate(180deg)",
                backgroundSize: "cover",
              }}
              className="w-full  overflow-hidden z-30 absolute left-[200vw] top-[calc(200vh+300px)]  h-[calc(100vh-140px)] border-white border card-2 rounded-[20px]  "
            >
              <div
                ref={card2leftSide}
                style={{ transform: "rotate(-180deg)" }}
                className="h-full w-full"
              >
                <div className="h-[15%] w-full flex  items-center">
                  <div className="w-[90px] p-2 h-full flex items-center justify-center">
                    <img
                      className="h-full opacity-0 relative top-[100px] left-[100px] top-left-image "
                      src={data.data[1].img}
                    />
                  </div>
                  <div className=" w-full h-[2px]  pr-3 flex relative justify-center overflow-hidden ">
                    <div className="w-[95%] pr-3 bg-[#F4F4F4] absolute left-[200vw] right-[100%] h-full  line-extend"></div>
                  </div>
                </div>
                <div className="text-left h-[85%] p-3 flex flex-col justify-between items-center ">
                  <div className="  max-h-[15%] flex flex-col px-2 mb-20 items-start">
                    <h2 className="  md:text-4xl text-white title space-grotesk-medium text-[26px] md:text-[32px]">
                      {data.data[1].content.head}
                    </h2>
                    <p className="text-[14px] mt-[12px] museo-sans">{data.data[1].content.text}</p>
                    <button className="text-white items-center flex gap-[13px] mt-[25px] md:mt-[44px] ">
                      Learn More
                      <img src="/assets/images/right-arrow.svg" />
                    </button>
                  </div>
                  <img
                    className="  w-[80%] md:w-[60%]   object-cover"
                    src={data.data[0].img3}
                  />
                </div>
              </div>
            </div>

            <div
              style={{
                background: `url(${data.data[2].img2})`,
                transform: "rotate(180deg)",
                backgroundSize: "cover",
              }}
              className="w-full overflow-hidden z-40 absolute left-[200vw] top-[calc(200vh+600px)]  h-[calc(100vh-140px)] border-white border card-3 rounded-[20px]  "
            >
              <div
                style={{ transform: "rotate(-180deg)" }}
                className="h-full w-full"
              >
                <div className="text-left h-full pt-[75px] p-3 flex flex-col justify-between items-center ">
                  <div className=" max-h-[15%] flex flex-col mb-20 px-2 items-start">
                    <h2 className=" md:text-4xl text-white title space-grotesk-medium text-[26px] md:text-[32px]">
                      {data.data[1].content.head}
                    </h2>
                    <p className="text-[14px] mt-[12px] museo-sans  ">{data.data[1].content.text}</p>
                    <button className="text-white items-center flex gap-[13px] mt-[25px] md:mt-[44px]  ">
                      Learn More
                      <img src="/assets/images/right-arrow.svg" />
                    </button>
                  </div>
                  <img
                    className="  w-[85%] md:w-[65%] mb-5 object-cover"
                    src={data.data[0].img3}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div style={{
        //@ts-expect-error
        minHeight: card1textContainer?.current?.offsetHeight + card2textContainer?.current?.offsetHeight + card3Container?.current?.offsetHeight + 580
      }} className="relative pt-[120px] ">
        <div className=" pb-3 items-center card-animation-container flex-col text-white w-full flex">
          <div className=" w-[70%] text-white  text-center mb-16">
            <h3 className=" opacity-80 tracking-widest  mb-2 uppercase text-[15px]">
              {data.subHead}
            </h3>
            <h1 className=" text-center capitalize space-grotesk-medium text-[26px] md:text-[32px] md:w-[60%] md:mx-auto">
              {data.header}
            </h1>
          </div>

          <div className="relative  w-[90%] mx-auto">

            <div
              ref={card1Container}
              style={{
                background: `url(${data.data[0].img2})`,
                transform: "rotate(180deg)",
                backgroundSize: "cover",
              }}
              className="w-full overflow-hidden z-20 left-[200vw]  absolute   border-white border rounded-[20px] card-1 "
            >
              <div
                ref={card1leftSide}
                style={{ transform: "rotate(-180deg)" }}
                className="h-full w-full"
              >
                <div>
                  <div ref={card1textContainer} className="h-[100px] w-full relative flex  items-center">
                    <div className="w-[90px] p-2 h-full flex items-center justify-center">
                      <img
                        className="h-full opacity-0 top-[100px] left-[100px] relative top-left-image"
                        src={data.data[0].img}
                      />
                    </div>
                    <div className="h-[2px] w-full relative flex justify-center overflow-hidden ">
                      <div className="w-[95%] pr-3 bg-[#F4F4F4] h-full  absolute left-[200vw] line-extend"></div>
                    </div>
                  </div>

                </div>
                <div className="text-left p-3 pb-[30px] flex flex-col justify-between items-center ">
                  <div ref={card1textContainer} className="flex relative mb-[40px] flex-col px-2 items-start">
                    <h2 className=" md:text-4xl top-10 text-white title space-grotesk-medium text-[26px] md:text-[36px]">
                      {data.data[0].content.head}
                    </h2>
                    <p className=" text-[14px] md:text-[18px] mt-[12px] museo-sans">{data.data[0].content.text}</p>
                    <button onClick={() => setCtaFormShowing(true)} className="text-white md:text-[20px] items-center flex gap-[13px] mt-[25px] md:mt-[44px] museo-sans font-medium">
                      Learn More
                      <img src="/assets/images/right-arrow.svg" />
                    </button>
                  </div>
                  <img
                    className=" w-[80%] max-h-[200px] md:max-h-[280px] object-contain"
                    src={data.data[0].img3}
                  />
                </div>
              </div>
            </div>



            <div
              ref={card2Container}
              style={{
                background: `url(${data.data[0].img2})`,
                transform: "rotate(180deg)",
                backgroundSize: "cover",
                //@ts-expect-error
                top: card1textContainer?.current?.offsetHeight + 80
              }}
              className="w-full overflow-hidden z-20 left-[200vw]  absolute   border-white border rounded-[20px] card-2 "
            >
              <div
                ref={card2leftSide}
                style={{ transform: "rotate(-180deg)" }}
                className="h-full w-full"
              >
                <div>
                  <div ref={card2textContainer} className="h-[100px] w-full relative flex  items-center">
                    <div className="w-[90px] p-2 h-full flex items-center justify-center">
                      <img
                        className="h-full opacity-0 top-[100px] left-[100px] relative top-left-image"
                        src={data.data[1].img}
                      />
                    </div>
                    <div className="h-[2px] w-full relative flex justify-center overflow-hidden ">
                      <div className="w-[95%] pr-3 bg-[#F4F4F4] h-full  absolute left-[200vw] line-extend"></div>
                    </div>
                  </div>

                </div>
                <div className="text-left p-3 pb-[30px] flex flex-col justify-between items-center ">
                  <div className="flex relative mb-[40px] flex-col px-2 items-start">
                    <h2 className=" md:text-4xl top-10 text-white title space-grotesk-medium text-[26px] md:text-[36px]">
                      {data.data[1].content.head}
                    </h2>
                    <p className=" text-[14px] md:text-[18px] mt-[12px] museo-sans">{data.data[1].content.text}</p>
                    <button onClick={() => setCtaFormShowing(true)} className="text-white md:text-[20px] items-center flex gap-[13px] mt-[25px] md:mt-[44px] museo-sans font-medium">
                      Learn More
                      <img src="/assets/images/right-arrow.svg" />
                    </button>
                  </div>
                  <img
                    className=" w-[80%] max-h-[200px] md:max-h-[280px] object-contain"
                    src={data.data[1].img3}
                  />
                </div>
              </div>
            </div>


            <div
              ref={card3Container}
              style={{
                background: `url(${data.data[2].img2})`,
                transform: "rotate(180deg)",
                backgroundSize: "cover",
                // @ts-expect-error
                top: card1textContainer?.current?.offsetHeight + card1textContainer?.current?.offsetHeight + 125
              }}
              className="w-full overflow-hidden z-40 absolute left-[200vw] border-white border card-3 rounded-[20px]  "
            >
              <div
                style={{ transform: "rotate(-180deg)" }}
                className="h-full w-full"
              >
                <div className="text-left h-full pt-[75px] p-3 pb-[30px] flex flex-col justify-between items-center ">
                  <div className="flex flex-col mb-[40px] px-2 items-start">
                    <h2 className=" md:text-4xl text-white title space-grotesk-medium text-[26px] md:text-[32px]">
                      {data.data[2].content.head}
                    </h2>
                    <p className="text-[14px] md:text-[16px] mt-[12px] museo-sans  ">{data.data[2].content.text}</p>
                    <button onClick={() => setCtaFormShowing(true)} className="text-white items-center flex gap-[13px] mt-[25px] md:mt-[44px]  ">
                      Learn More
                      <img src="/assets/images/right-arrow.svg" />
                    </button>
                  </div>
                  <img
                    className="  -[80%] max-h-[200px] md:max-h-[280px] object-contain"
                    src={data.data[2].img3}
                  />
                </div>
              </div>
            </div>


          </div>
        </div>



      </div>



    </>
  );
};

export default ParallexCardsMobile;
