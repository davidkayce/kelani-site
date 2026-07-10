// import { IoIosArrowRoundForward } from "react-icons/io";
// import { AnimatePresence, motion } from "framer-motion"
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import PowerCtaForm from "../../../components/PowerCtaForm";
// import Lenis from "@studio-freight/lenis";



export const One: React.FC = () => {

  // const [buttonHovered, setButtonHovered] = useState(false);
  // const [ctaFormShowing, setCtaFormShowing] = useState(false);

  // const ctaButtonVariant = {
  //   whileHover: {
  //     scale: 1.05,
  //     transition: { duration: 0.3 },
  //   },
  //   whileTap: {
  //     scale: 0.98,
  //     transition: { duration: 0.15 },
  //   },
  // };

  // const lenis = new Lenis();

  return (

    <>
      {/* <AnimatePresence>
        {ctaFormShowing && (
          <section className=" bg-black p-3 h-full w-full fixed overflow-y-scroll " >
            <PowerCtaForm
              lenis={lenis}
              close={() => setCtaFormShowing(false)}
            />
          </section>
        )}
      </AnimatePresence>

      <motion.div
        onClick={() => setCtaFormShowing(true)}
        variants={ctaButtonVariant}
        onMouseEnter={() => {
          setButtonHovered(true);
        }}
        onMouseLeave={() => {
          setButtonHovered(false);
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.7, delay: 1.4 },
        }}
        whileHover="whileHover"
        whileTap={"whileTap"}
        className=" cursor-pointer py-2 w-fit border flex justify-center items-center rounded-full px-4 lg:px-5 bg-white inter text-[14px] md:text-[16px]"
      >
        <Link to={"#"} className="text-black">
          GET CONNECTED{" "}
        </Link>
        <motion.span
          className="sm:block hidden"
          animate={
            buttonHovered ? { x: 10, transition: { duration: 0.3 } } : {}
          }
          whileHover={"whileHover"}
        >
          <IoIosArrowRoundForward className={"text-black"} size={30} />
        </motion.span>
      </motion.div>


      <h2 className="p-3 m-10" >
        very long text
      </h2>
      <h2 className="p-3 m-10" >
        very long text
      </h2>
      <h2 className="p-3 m-10" >
        very long text
      </h2>
      <h2 className="p-3 m-10" >
        very long text
      </h2>
      <h2 className="p-3 m-10" >
        very long text
      </h2>
      <h2 className="p-3 m-10" >
        very long text
      </h2>

      <h2 className="p-3 m-10" >
        very long text
      </h2>
      <h2 className="p-3 m-10" >
        very long text
      </h2>
      <h2 className="p-3 m-10" >
        very long text
      </h2>
      <h2 className="p-3 m-10" >
        very long text
      </h2>
      <h2 className="p-3 m-10" >
        very long text
      </h2><h2 className="p-3 m-10" >
        very long text
      </h2>
      <h2 className="p-3 m-10" >
        very long text
      </h2>

      <h2 className="p-3 m-10" >
        very long text
      </h2>
      <h2 className="p-3 m-10" >
        very long text
      </h2>
      <h2 className="p-3 m-10" >
        very long text
      </h2>
      <h2 className="p-3 m-10" >
        very long text
      </h2>
      <h2 className="p-3 m-10" >
        very long text
      </h2><h2 className="p-3 m-10" >
        very long text
      </h2>
      <h2 className="p-3 m-10" >
        very long text
      </h2>
      <h2 className="p-3 m-10" >
        very long text
      </h2>
      <h2 className="p-3 m-10" >
        very long text
      </h2> */}
    </>

  )
}
