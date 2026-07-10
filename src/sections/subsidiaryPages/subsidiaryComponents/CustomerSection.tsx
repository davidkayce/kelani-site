import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { useInView } from "react-intersection-observer";
import useScreenSize from "../../../hooks/useScreenSize";

interface Card {
  img: string;
  height: number;
}

const CustomerSection = ({ cards }: { cards: Card[] }) => {
  const { width } = useScreenSize();
  const getValueFromScreenHeight = (value: number) => {
    if (width < 768) {
      return value * 0.7;
    } else return value;
  };
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <motion.div
      animate={{ opacity: inView ? 1 : 0, transition: { duration: 1 } }}
      ref={ref}
      className="w-full h-[250px] lg:h-fit "
    >
      <div className="lg:h-[600px] z-50 relative h-[200px]">
        <h1 className="text-white opacity-60 mb-6 text-center font-semibold text-xs lg:text-base lg:mb-10 tracking-[2.4px]">
          Customers
        </h1>

        <div className="flex w-full relative justify-center items-center">
          <img
            src="assets/images/subsidiaryPagesImages/props/marquee-line-left.png"
            alt=""
            className=" invisible lg:visible left-[8.3rem] top-[14.2rem]"
          />

          <div className=" w-[500px]  lg:w-[80%] 3xl:w-[55%] flex-col relative flex justify-center items-center ">
            <Marquee
              pauseOnHover={true}
              className="border  border-opacity-40 border-white rounded-xl "
            >
              {cards.map((item, index) => (
                <div
                  key={index}
                  className="m-0 bg-black p-2 w-[150px] h-[100px] md:w-[250px] md:h-[170px] lg:h-[190px] lg:w-[260px] 3xl:h-[200px] 3xl:w-[270px] flex justify-center items-center border-white text-white border border-y-0 border-opacity-30 "
                >
                  <div className=" flex justify-center items-center">
                    <img
                      src={item.img}
                      style={{ height: getValueFromScreenHeight(item.height) }}
                      className="h-[80px] lg:h-[120px] md:w-full greyed-out"
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </Marquee>
          </div>

          <img
            src="assets/images/subsidiaryPagesImages/props/marquee-line-right.png"
            alt=""
            className="invisible lg:visible right-[8.3rem] top-[14.2rem]"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default CustomerSection;
