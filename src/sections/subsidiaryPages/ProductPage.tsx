/* eslint-disable @typescript-eslint/no-explicit-any */
import Lenis from '@studio-freight/lenis/types';
import React, { useEffect, useState } from 'react';
// import { IoIosArrowRoundForward } from 'react-icons/io';
import { motion, useAnimation } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Navbarr from "./subsidiaryComponents/Navbarr";
// import WavyText from "./subsidiaryComponents/WavyText";
import { Helmet } from 'react-helmet';
import FadeUpAnimation from '../../components/FadeUpAnimation';
import ProductView from '../../components/ProductPage/ProductView';
import Footer from '../Footer';
import ConnectSection2 from './subsidiaryComponents/ConnectSection2';
import CustomScrollbar from './subsidiaryComponents/CustomScrollbar';
import "./subsidiaryPages.css";


interface Contents {
    img: string;
    img2: string;
    head: string;
    desc: string;
    colour: string;
}

interface Contents_Slideshow {
    img: string;
    point1: string;
    point2: string;
    point3: string;
    point4: string;
    point5?: string;
    point6?: string;
    classname: string;
}

interface Header {
    text: string;
    className: string;
}

interface SubProps {
    customerCards: { height: number; img: string }[];
    cta_form: string;
    contactUsUrl: string;
    hero_section: {
        sub_text: string;
        main_text: string;
        home_img: string;
        color: {
            c700: string;
            c500: string;
            c400: string;
            c300: string;
        };
    };
    home_section: {
        mobile: string;
    };
    features_data: {
        header: string;
        contents: Contents[];
    };

    slideshow_section: {
        dash: string;
        btnColour: string;
        content: Contents_Slideshow[];
        header: Header[];
        text: {
            head: string;
            sub: string;
        };
    };
    parallex_section: {
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
    };
    parallex_section_mobile: {
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
    };
    // connect_text: string;
}

const ProductPage: React.FC<{
    sub: SubProps | any;
    lenis: Lenis;
    title: string;
    cta_form: string;
}> = ({ sub, lenis, title, cta_form }) => {


    const [lightPosition, setLightPosition] = useState({ top: 0, left: 50 });
    const [lightPositionx, setLightPositionx] = useState({ top: 0, left: 50 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const rect = document.getElementById("hex-grid")?.getBoundingClientRect();

            if (rect) {
                const offsetX = e.clientX - rect.left;
                const offsetY = e.clientY - rect.top;

                setLightPosition({
                    top: (offsetY / rect.height) * 100,
                    left: (offsetX / rect.width) * 100,
                });
            }
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const rect = document
                .getElementById("hex-gridd")
                ?.getBoundingClientRect();

            if (rect) {
                const offsetX = e.clientX - rect.left;
                const offsetY = e.clientY - rect.top;

                setLightPosition({
                    top: (offsetY / rect.height) * 100,
                    left: (offsetX / rect.width) * 100,
                });
            }
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const rect = document
                .getElementById("hex-gridx")
                ?.getBoundingClientRect();

            if (rect) {
                const offsetX = e.clientX - rect.left;
                const offsetY = e.clientY - rect.top;

                setLightPositionx({
                    top: (offsetY / rect.height) * 100,
                    left: (offsetX / rect.width) * 100,
                });
            }
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    const [ctaFormShowing, setCtaFormShowing] = useState(false);

    const [scrollPosition, setScrollPosition] = useState(0);
    const [isTopNear, setIsTopNear] = useState(false);
    const controls = useAnimation();

    const lightControls = useAnimation();
    const lightControlss = useAnimation();
    const lightControlsx = useAnimation();


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.scrollY;
            setScrollPosition(currentScrollPosition);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleScrollReset = () => {
            setIsTopNear(scrollPosition > 5180);
        };

        window.addEventListener("scroll", handleScrollReset);

        return () => {
            window.removeEventListener("scroll", handleScrollReset);
        };
    }, [scrollPosition]);

    useEffect(() => {
        controls.start({ backgroundColor: isTopNear ? "black" : "white" });
    }, [isTopNear, controls]);

    useEffect(() => {
        lightControls.start({
            top: `${lightPosition.top}%`,
            left: `${lightPosition.left}%`,
            opacity: [0.6],
        });
    }, [lightPosition, lightControls]);

    useEffect(() => {
        lightControlss.start({
            top: `${lightPosition.top}%`,
            left: `${lightPosition.left}%`,
            opacity: [0.6],
        });
    }, [lightPosition, lightControlss]);

    useEffect(() => {
        lightControlsx.start({
            top: `${lightPositionx.top}%`,
            left: `${lightPositionx.left}%`,
            opacity: [0.6],
        });
    }, [lightPositionx, lightControlsx]);


    // const ctaButtonVariant = {
    //     whileHover: {
    //         scale: 1.05,
    //         transition: { duration: 0.3 },
    //     },
    //     whileTap: {
    //         scale: 0.98,
    //         transition: { duration: 0.15 },
    //     },
    // };


//     const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('https://app.nocodb.com/api/v2/tables/m8b3fl84ik1zrb1/records', {
//         params: {
//           offset: '0',
//           limit: '25',
//           where: '',
//           viewId: 'vwhokgceoueuuiss'
//         },
//         headers: {
//           'xc-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbGFuaWVuZ2luZWVyaW5nc2VydmljZXNAZ21haWwuY29tIiwiZGlzcGxheV9uYW1lIjpudWxsLCJhdmF0YXIiOm51bGwsInVzZXJfbmFtZSI6bnVsbCwiaWQiOiJ1c3lwdG1lcWk5eHcwa2dhIiwicm9sZXMiOiJvcmctbGV2ZWwtdmlld2VyIiwidG9rZW5fdmVyc2lvbiI6Ijg5NjJhZDI0YWUwZTYzNmJiYjY1ZGE4NjhlNzZmOGVjZjI3M2VkNjhiY2MyMjFjOTY1NTFmNDkxMGM2ZGRmNjBiNzY2ZjIxODhhMmU5MmM5IiwicHJvdmlkZXIiOiJjb2duaXRvIiwiaWF0IjoxNzExNjQ5NTI3LCJleHAiOjE3MTE2ODU1Mjd9.j01VjlYy5R3RgEUoxQjxQLg-Nvr5Jni_X_XkTCfBsbU'
//         },
//         method: 'GET'
//       });
//       setData(response.data.list);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };



    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>

            <motion.div
                style={{ overflowY: "clip" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.5 } }}
                exit={{ opacity: 0 }}
                className=" md:overflow-x-clip overflow-hidden "
            >
                <div
                    id="hex-grid"
                    className=" relative w-[100vw] overflow-x-hidden "
                >
                    <motion.div
                        animate={lightControls}
                        className="light  hidden lg:block z-10 top-[50%] left-[50%] rounded-full bg-white w-[40rem] h-[40rem]"
                    ></motion.div>

                    <div className="griddy lg:block hidden z-20 bg-transparent "> </div>
                    <div className="relative overflow-x-hidden bg-black ">
                        <div className="  md:h-screen h-[600px] relative">

                            <div className="absolute inset-0 bg-cover bg-center">
                                <motion.div initial={{ scale: 1.3 }} animate={{ scale: 1, transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] } }} className=" absolute w-full  z-50">
                                    <LazyLoadImage
                                        width={"100%"}
                                        height={"100%"}
                                        effect="blur"
                                        wrapperClassName="lazyLoadImageContainer opacity-50"
                                        src={sub.hero_section.home_img}
                                    />
                                </motion.div>
                            </div>

                            <div className="relative z-50 h-full flex flex-col">
                                <img
                                    className="absolute top-4 -right-10 lg:right-24 "
                                    src="/assets/images/subsidiaryPagesImages/props/image.png"
                                    alt=""
                                />

                                <Navbarr
                                    lenis={lenis}
                                    ctaFormShowing={ctaFormShowing}
                                    setCtaFormShowing={setCtaFormShowing}
                                    cta_form={cta_form}
                                    color={sub.hero_section.color}
                                />

                                <div className="flex h-full  flex-col justify-center ">
                                    <div className="md:w-[100%]  lg:h-[500px] h-[500px] z-50 w-full md:px-0 px-[0px]  text-center flex flex-col items-center justify-center">

                                        <div className=' h-[80%] w-[90%] lg:w-[83%] flex-col text-left flex justify-center items-start  ' >
                                            <motion.p
                                                initial={{ opacity: 0, y: 30 }}
                                                animate={{
                                                    opacity: 0.5,
                                                    y: 0,
                                                    transition: { duration: 1, ease: "easeOut" },
                                                }}
                                                className="text-white py-3 opacity-75 text-xs uppercase font-semibold"
                                            >
                                                Solving the procurement dilemma
                                            </motion.p>
                                            <FadeUpAnimation>

                                            <h2 className=" lg:w-[50%] text-white font-semibold space-grotesk-semibold text-xl lg:text-6xl mb-3 lg:mb-[3.7rem] " >
                                            Explore Various Solutions Available for Immediate Deployment
                                            </h2>
                                            <p className='text-white text-sm space-grotesk-medium ' >
                                            Enhance Renewable Energy Integration <br /> to Improve Grid Reliability
                                            </p>

                                            </FadeUpAnimation>

                                        </div>

                                        {/* <div className="h-[20%]  w-full lg:w-[83%] items-center flex justify-center  ">
                                            
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div id="hex-gridd" className="  relative bg-black">
                    <motion.div
                        animate={lightControls}
                        className="light hidden lg:block z-10 top-[50%] left-[50%] rounded-full bg-white w-[40rem] h-[40rem]"
                    ></motion.div>
                    <div className="griddy lg:block hidden z-20 bg-transparent"></div>

                    <div className="w-full relative z-40">
                        <div
                            style={{
                                backgroundImage: `linear-gradient(to bottom, black, ${sub.hero_section.color.c700}, black)`,
                            }}
                            className=" absolute top-[10rem]  w-full  opacity-15 h-[800px] "
                        >
                            {" "}
                        </div>
                    </div>

                    <div className=' relative w-full h-fit flex flex-col z-40 text-white ' >
                       
                        <ProductView 
                        setCtaFormShowing={setCtaFormShowing} 
                        />
                    </div>

                </div>





                <div className="  overflow-hidden relative mb-0 ">
                    <div id="hex-gridx" className=" flex flex-col relative h-full   ">
                        <div className=" bg-black relative z-[50] ">
                            <motion.div
                                animate={lightControlsx}
                                className="light hidden lg:block z-10 top-[50%] left-[50%] rounded-full bg-white w-[40rem] h-[40rem]"
                            ></motion.div>
                            <div className="griddy lg:block p-3 hidden z-20 bg-transparent "></div>

                            <div className="z-20 h-full  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center">
                                <div className="border border-white rounded-full min-w-[680px] w-[680px] min-h-[680px] h-[680px] border-opacity-20  lg:h-[750px] lg:w-[750px] flex items-center justify-center">
                                    <div className="border border-white rounded-full min-w-[480px] w-[480px] min-h-[480px] h-[480px] border-opacity-20  lg:h-[520px] lg:w-[520px] flex items-center justify-center">
                                        <div className="border border-white rounded-full min-w-[280px]  w-[280px] h-[280px] border-opacity-20 lg:h-[309px] lg:w-[309px] flex items-center justify-center"></div>
                                    </div>
                                </div>
                            </div>

                            <ConnectSection2
                                setCtaFormShowing={setCtaFormShowing}
                                text={sub.connect_text}
                            />
                        </div>

                        <div className=" h-[14px] md:h-[100px] relative ">
                            <img
                                className=" object-cover absolute w-full  z-[60] "
                                src="/assets/images/subsidiaryPagesImages/Rectangle 1.svg"
                                alt=""
                            />
                        </div>

                    </div>
                </div>

                {/* </div> */}

                <div className=" z-[49]   relative ">
                    <Footer contactUsUrl={sub.contactUsUrl} />
                </div>

                <div className="bg-white hidden md:block z-50 fixed">
                    <CustomScrollbar
                        barColor="#333"
                        ellipseColor={sub.hero_section.color.c700}
                        ellipseColor2={sub.hero_section.color.c500}
                        ellipseColor3={sub.hero_section.color.c400}
                    />
                </div>
            </motion.div>
        </>
    )
}

export default ProductPage