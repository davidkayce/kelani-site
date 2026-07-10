// /* eslint-disable @typescript-eslint/no-unused-vars */
// import React, { ReactNode } from "react";
// // import { Card, CardContent } from "@/components/ui/card"
// import { Card, CardContent } from "../../../../@/components/ui/card";
// import { FaRegCircle } from "react-icons/fa6";
// import { motion } from "framer-motion";
// // import { useInView } from 'react-intersection-observer';
// import { InView } from "react-intersection-observer";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
//   type CarouselApi,
// } from "../../../../@/components/ui/carousel";

// interface Contents {
//   img: string;
//   point1: string;
//   point2: string;
//   point3: string;
//   point4: string;
//   point5: string;
//   point6: string;
//   classname: string;
// }

// interface Header {
//   text: string;
//   className: string;
// }

// const SlideshowSection: React.FC = () => {
//   const [api, setApi] = React.useState<CarouselApi>();
//   const [current, setCurrent] = React.useState(0);
//   const [count, setCount] = React.useState(0);

//   React.useEffect(() => {
//     if (!api) {
//       return;
//     }

//     setCount(api.scrollSnapList().length);
//     setCurrent(api.selectedScrollSnap() + 1);

//     api.on("select", () => {
//       setCurrent(api.selectedScrollSnap() + 1);
//     });
//   }, [api]);

//   const content: Contents[] = [
//     {
//       img: "assets/images/subsidiaryPagesImages/Card.png",
//       point1:
//         "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
//       point2:
//         "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
//       point3:
//         "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
//       point4:
//         "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
//       point5:
//         "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
//       point6:
//         "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
//       classname: " ",
//     },
//     {
//       img: "assets/images/subsidiaryPagesImages/Card.png",
//       point1:
//         "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
//       point2:
//         "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
//       point3:
//         "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
//       point4:
//         "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
//       point5:
//         "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
//       point6:
//         "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
//       classname: " ",
//     },
//     {
//       img: "assets/images/subsidiaryPagesImages/Card.png",
//       point1:
//         "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
//       point2:
//         "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
//       point3:
//         "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
//       point4:
//         "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
//       point5:
//         "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
//       point6:
//         "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
//       classname: " ",
//     },
//     {
//       img: "assets/images/subsidiaryPagesImages/Card.png",
//       point1:
//         "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
//       point2:
//         "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
//       point3:
//         "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
//       point4:
//         "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
//       point5:
//         "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
//       point6:
//         "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
//       classname: " ",
//     },
//     {
//       img: "assets/images/subsidiaryPagesImages/Card.png",
//       point1:
//         "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
//       point2:
//         "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
//       point3:
//         "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
//       point4:
//         "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
//       point5:
//         "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
//       point6:
//         "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
//       classname: " ",
//     },
//     {
//       img: "assets/images/subsidiaryPagesImages/Card.png",
//       point1:
//         "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
//       point2:
//         "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
//       point3:
//         "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
//       point4:
//         "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
//       point5:
//         "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
//       point6:
//         "Forecast, detect, and resolve curtailment and congestion issues wi remote and process automation",
//       classname: " ",
//     },
//   ];

//   const header: Header[] = [
//     {
//       text: "Alignment Assessment",
//       className: "pr-2",
//     },
//     {
//       text: "Integration Planning",
//       className: "",
//     },
//     {
//       text: "Specialization Training",
//       className: "",
//     },
//     {
//       text: "Client-Centric Approach",
//       className: "",
//     },
//     {
//       text: "Outsourcing Strategy",
//       className: "",
//     },
//     {
//       text: "Continuous Monitoring",
//       className: "",
//     },
//   ];

//   return (
//     <>
//       <div className="lg:h-[1100px] h-[1350px]  w-full  lg:px-4 bg-black text-white ">
//         <div className="w-[100vw]  ">
//           <img
//             className="h-[10rem] lg:h-[13rem]  w-full object-fill "
//             src="assets/images/subsidiaryPagesImages/props/Section[Gradient] (1).png"
//             alt=""
//           />
//         </div>

//         <Carousel
//           setApi={setApi}
//           className="w-full pt-20 h-full overflow-x-hidden"
//         >
//           <div className=" flex justify-center items-center ">
//             <div className="flex lg:w-[70%] w-full lg:flex-row flex-col items-center mb-10 justify-center lg:justify-around ">
//               <div className="uppercase text-center lg:text-left ">
//                 <p className="font-semibold lg:text-base text-xs opacity-60 tracking-wide ">
//                   INSTANT INSIGHTS FOR INFORMED ACTIONS:
//                   <br /> User SOLUTIONS FOR REAL-TIME DECISIONS
//                 </p>
//                 <h1 className="text-3xl lg:text-5xl my-5 opacity-90">
//                   Roadmap for Industry Advancement
//                 </h1>
//               </div>
//               <div className="flex mt-3 lg:mt-0 relative items-center justify-center lg:justify-between lg:w-[8%] md:w-[20%] w-[30%] ">
//                 <div className="">
//                   <CarouselPrevious className="right-5 lg:right-0 p-2 relative duration-150 hover:bg-purple-500 cursor-pointer" />
//                 </div>
//                 <span className="lg:hidden p-4 absolute  lg:bottom-3 flex">
//                   {current}/{count}
//                 </span>
//                 <div className="lg:ml-3">
//                   <CarouselNext className="left-5 lg:left-0 relative p-2 cursor-pointer  duration-150 hover:bg-purple-500 " />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="w-full mb-6 flex justify-center items-center ">
//             <div className="w-[70%] flex justify-center  lg:justify-around items-center">
//               {header.map((item, index) => (
//                 <div
//                   className={`${
//                     current === index + 1
//                       ? "h-[60px] font-semibold lg:text-left text-center opacity-60 tracking-wide lg:w-[150px] w-[200px]"
//                       : "h-[60px] hidden lg:flex font-semibold opacity-60 tracking-wide w-[150px]"
//                   }`}
//                   key={index}
//                 >
//                   <h1 className="p-2 lg:w-fit w-full ">{item.text}</h1>
//                   <motion.div
//                     initial={{ x: "-100%" }}
//                     animate={{ x: current === index + 1 ? "0%" : "-100%" }}
//                     transition={{ duration: 0.5, ease: "easeInOut" }}
//                     className={`${
//                       current === index + 1
//                         ? "w-full relative flex items-center justify-center "
//                         : "w-full hidden"
//                     }`}
//                   >
//                     <img
//                       className=" w-full -left-8 absolute "
//                       src="assets/images/subsidiaryPagesImages/props/Light dash.png"
//                       alt=""
//                     />
//                   </motion.div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <CarouselContent className=" ">
//             {content.map((item, index) => (
//               <InView key={index}>
//                 {({ ref, inView }): ReactNode => (
//                   <CarouselItem className=" " key={index} ref={ref}>
//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: inView ? 1 : 0 }}
//                       transition={{ duration: 1, staggerChildren: 0.3 }}
//                       className="lg:w-[98vw] w-[100vw] flex lg:flex-row flex-col justify-center items-center"
//                     >
//                       <Card className="lg:w-[75%] w-full border-0">
//                         <CardContent
//                           className={
//                             item.classname +
//                             "lg:flex-row p-4 px-6 flex-col flex w-full "
//                           }
//                         >
//                           <motion.div
//                             initial={{
//                               x: inView ? "50%" : 0,
//                               opacity: inView ? 0 : 0,
//                             }}
//                             animate={{
//                               x: inView ? 0 : "50%",
//                               opacity: inView ? 1 : 0,
//                             }}
//                           >
//                             <img src={item.img} alt="" />
//                           </motion.div>

//                           <motion.div
//                             initial={{ x: "-50%", opacity: 0 }}
//                             animate={{ x: inView ? 0 : "-50%", opacity: 1 }}
//                             className="lg:w-[40%] w-full flex "
//                           >
//                             <ul className="grid text-sm lg:text-sm  w-full gap-3 lg:gap-y-0 gap-y-5 px-1 pt-10 lg:p-4 lg:grid-rows-3 md:grid-cols-2 grid-cols-1 lg:grid-cols-2">
//                               <li className="w-full flex  ">
//                                 <FaRegCircle className="mr-2 lg:text-[15px] mt-2" />{" "}
//                                 {item.point1}
//                               </li>
//                               <li className="w-full flex ">
//                                 <FaRegCircle className="mr-2 lg:text-[20px] mt-2" />
//                                 {item.point2}
//                               </li>
//                               <li className="w-full flex ">
//                                 <FaRegCircle className="mr-2 lg:text-[20px] mt-2" />{" "}
//                                 {item.point3}
//                               </li>
//                               <li className="w-full flex ">
//                                 <FaRegCircle className="mr-2 lg:text-[20px] mt-2" />{" "}
//                                 {item.point4}
//                               </li>
//                               <li className="w-full flex ">
//                                 <FaRegCircle className="mr-2 lg:text-[20px] mt-2" />{" "}
//                                 {item.point5}
//                               </li>
//                               <li className="w-full flex ">
//                                 <FaRegCircle className="mr-2 lg:text-[20px] mt-2" />{" "}
//                                 {item.point6}
//                               </li>
//                             </ul>
//                           </motion.div>
//                         </CardContent>
//                       </Card>
//                     </motion.div>
//                   </CarouselItem>
//                 )}
//               </InView>
//             ))}
//           </CarouselContent>
//         </Carousel>
//       </div>
//     </>
//   );
// };

// export default SlideshowSection;
