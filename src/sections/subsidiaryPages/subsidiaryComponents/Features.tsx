import React from "react";
import FeatureItem from "../../../components/FeatureItem";
import WavyText2 from "./WavyText2";

interface Contents {
  img: string;
  img2: string;
  head: string;
  desc: string;
  colour: string;
}

interface FeaturesProps {
  header: string;
  contents: Contents[];
}

const Features: React.FC<{ data: FeaturesProps }> = ({ data }) => {
  return (
    <div className="z-10 lg:h-fit text-white">
      <div className="flex flex-col text-center justify-center items-center h-full ">
        <div className="flex justify-center  w-full lg:mt-auto mt-20 items-center mb-10">
          {/* <h1 className="text-2_5xl font-semibold opacity-85 lg:text-4xl w-[90%] lg:w-[55%] space-grotesk-medium">
            {data.header}
          </h1> */}
          <WavyText2 text={data.header} />
        </div>

        <div className="flex lg:p-4 w-full lg:w-[80%] flex-col xl:flex-row justify-between items-start">
          {data.contents.map((item, index) => (
            // <div className="w-full flex-col flex justify-center items-center ">
            //   <div
            //     key={index}
            //     className="flex py-4 w-full md:w-[270px] mb-10 flex-col justify-center items-center"
            //   >
            //     <img
            //       src={item.img}
            //       className="pb-4 md:p-0 w-[10rem] md:w-[120px] opacity-90 "
            //       alt={item.head}
            //     />
            //     <img src={item.img2} className="w-[100vw] lg:hidden" alt="" />
            //     <h1
            //       className={`${item.colour} px-4 text-xl_2 font-semibold opacity-90 md:text-2xl mt-3 mb-3 lg:mb-6 museo-sans lg:min-h-[60px] flex items-center`}
            //     >
            //       {item.head}
            //     </h1>
            //     <p className="text-sm opacity-80 px-4 font-medium museo-sans">
            //       {item.desc}
            //     </p>
            //   </div>
            // </div>
            <FeatureItem index={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
