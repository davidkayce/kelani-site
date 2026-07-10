import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import Input from "react-phone-number-input/input";
import "react-phone-number-input/style.css";
import { z } from "zod";

const schema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  message: z.string().nonempty({ message: "Message is required" }),
  industry: z.string().nonempty({ message: "Industry is required" }),
  email: z.string().email({ message: "Invalid email" }),
  phoneNumber: z.string().nonempty({ message: "Phone number is required" }),
  need: z.string().nonempty({ message: "Business need is required" }),
  address: z.string().nonempty({ message: "Address is required" }),
  city: z.string().nonempty({ message: "City is required" }),
  state: z.string().nonempty({ message: "State is required" }),
  companyName: z.string().nonempty({ message: "Company name is required" }),
  productOfInterest: z.string().optional(),
});

type FormSchema = z.infer<typeof schema>;

const EngineeringCtaForm = ({ close }: { close: () => void }) => {
  const ref = useRef(null);
  useEffect(() => { }, [ref]);

  const [formLoading, setFormLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [thankYouMessageShowing, setThankYouMessageShowing] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(schema),
    mode: "all",
  });

  const handleFormSubmit = async (data: FormSchema) => {
    const url = "https://app.nocodb.com/api/v2/tables/mlapokwcfsbekej/records";
    const options = {
      headers: {
        "xc-token": import.meta.env.VITE_APP_NOCODB_AUTH_TOKEN,
      },
    };
    const requestData = {
      ...data,
    };
    try {
      setFormLoading(true);
      const response = await axios.post(url, requestData, options);
      if (response.status == 200) setFormSubmitted(true);
      setFormSubmitted(true);
      setTimeout(() => setThankYouMessageShowing(true), 420);
    } catch (err) {
      console.log(err);
    } finally {
      setFormLoading(false);
    }
  };

  return createPortal(
    <>
      <motion.div
        // data-lenis-prevent
        ref={ref}
        onClick={close}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        transition={{ duration: 0.35 }}
        className="fixed top-0 right-0 left-0 bottom-0 bg-black z-[80] cursor-pointer"
      ></motion.div>
      <motion.div
        data-lenis-prevent
        initial={{ opacity: 0.7, x: "80dvw" }}
        transition={{ duration: 0.35 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "80dvw", transition: { duration: 0.2 } }}
        className="lg:w-[80dvw] w-screen max-h-screen bg-white z-[90] fixed top-0 right-0 bottom-0 p-[10px] overflow-y-scroll"
      >
        <AnimatePresence>
          {thankYouMessageShowing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.4 },
              }}
              onAnimationComplete={() => setTimeout(() => close(), 2000)}
              className="w-full h-full flex items-center justify-center museo-sans flex-col max-w-[60%] text-center mx-auto"
            >
              <p className="text-[32px] font-medium">Thank You!</p>
              <p className="text-[24px]">
                Your response has been recorded, a member of our team will reach
                out to you shortly.
              </p>
            </motion.div>
          )}
          {!formSubmitted && (
            <motion.form
              onSubmit={handleSubmit(handleFormSubmit)}
              exit={{
                opacity: 0,
                transition: { duration: 0.4 },
              }}
              className=" pl-[25px] py-[45px] pr-[20px] lg:p-[56px] "
            >
              <header className="text-[24px] lg:text-[32px] space-grotesk-semibold pb-[56px] sm:flex items-center justify-between border-b-zinc-500 border-b border-opacity-50">
                <span className="inline-block sm:mr-[20px]">Transform Your Industrial Vision With Kelani Engineering</span>
                <motion.svg
                  className={"cursor-pointer lg:w-10 w-32 lg:h-10 focus:outline-none"}
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => close()}
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#050505"
                  viewBox="0 0 256 256"
                >
                  <path d="M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
                </motion.svg>
              </header>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] lg:gap-[40px]  mt-[56px]">
                <section className="space-y-[56px]">
                  <div>
                    <p className="text-[18px] space-grotesk-semibold mb-[32px]">
                      Personal Information
                    </p>
                    <div className="flex flex-col space-y-[20px]">
                      <div className="flex flex-col">
                        <label className="museo-sans text-[#888A8B]">
                          Name
                        </label>
                        <div
                          className={
                            errors.name ? "error relative" : "relative"
                          }
                        >
                          <input
                            {...register("name")}
                            className="bg-[#FFBC8C] bg-opacity-5 border-[#FFBC8C] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none w-full museo-sans"
                          />
                          <motion.p
                            animate={{
                              transition: { duration: 0.3 },
                              opacity: errors.name?.message ? 1 : 0,
                            }}
                            className="text-right text-[12px] text-[#fe3514] museo-sans absolute -bottom-20px right-0"
                          >
                            {errors.name?.message}
                          </motion.p>
                        </div>
                      </div>
                      <div className="flex flex-col engineering">
                        <label className="museo-sans text-[#888A8B]">
                          Phone Number
                        </label>
                        {/* <input className="bg-[#FFBC8C] bg-opacity-5 border-[#FFBC8C] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none w-full museo-sans" /> */}
                        <div
                          className={
                            errors.phoneNumber ? "error relative" : "relative"
                          }
                        >
                          <Input
                            onBlur={() => trigger("phoneNumber")}
                            value={watch("phoneNumber")}
                            onChange={(value: string) => {
                              setValue("phoneNumber", value);
                              // trigger("phoneNumber");
                            }}
                          />
                          <motion.p
                            animate={{
                              transition: { duration: 0.3 },
                              opacity: errors.phoneNumber?.message ? 1 : 0,
                            }}
                            className="text-right text-[12px] text-[#fe3514] museo-sans absolute -bottom-20px right-0"
                          >
                            {errors.phoneNumber?.message}
                          </motion.p>
                        </div>
                      </div>
                      <div className="flex flex-col ">
                        <label className="museo-sans text-[#888A8B]">
                          Email Address
                        </label>
                        <div
                          className={
                            errors.email ? "error relative" : "relative"
                          }
                        >
                          <input
                            {...register("email")}
                            className="bg-[#FFBC8C] bg-opacity-5 border-[#FFBC8C] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none w-full museo-sans"
                          />
                          <motion.p
                            animate={{
                              transition: { duration: 0.3 },
                              opacity: errors.email?.message ? 1 : 0,
                            }}
                            className="text-right text-[12px] text-[#fe3514] museo-sans absolute -bottom-20px right-0"
                          >
                            {errors.email?.message}
                          </motion.p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <div>
                    <p className="text-[18px] space-grotesk-semibold mb-[32px]">
                      Company Information
                    </p>
                    <div className="flex flex-col space-y-[20px]">
                      <div className="flex flex-col">
                        <label className="museo-sans text-[#888A8B]">
                          Company Name
                        </label>
                        <div
                          className={
                            errors.companyName ? "error relative" : "relative"
                          }
                        >
                          <input
                            {...register("companyName")}
                            style={{
                              borderColor: errors.companyName
                                ? "#fe3514"
                                : "#FFBC8C",
                            }}
                            className="bg-[#FFBC8C] bg-opacity-5 border-[#FFBC8C] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none w-full museo-sans"
                          />
                          <motion.p
                            animate={{
                              transition: { duration: 0.3 },
                              opacity: errors.companyName?.message ? 1 : 0,
                            }}
                            className="text-right text-[12px] text-[#fe3514] museo-sans absolute -bottom-20px right-0"
                          >
                            {errors.companyName?.message}
                          </motion.p>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-[20px]">
                        <div className="flex flex-col">
                          <label className="museo-sans text-[#888A8B]">
                            Industry
                          </label>
                          <div
                            className={
                              errors.industry ? "error relative" : "relative"
                            }
                          >
                            <input
                              {...register("industry")}
                              style={{
                                borderColor: errors.industry
                                  ? "#fe3514"
                                  : "#FFBC8C",
                              }}
                              className="bg-[#FFBC8C] bg-opacity-5 border-[#FFBC8C] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none w-full museo-sans"
                            />
                            <motion.p
                              animate={{
                                transition: { duration: 0.3 },
                                opacity: errors.industry?.message ? 1 : 0,
                              }}
                              className="text-right text-[12px] text-[#fe3514] museo-sans absolute -bottom-20px right-0"
                            >
                              {errors.industry?.message}
                            </motion.p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col ">
                        <label className="museo-sans text-[#888A8B]">
                          Need
                        </label>
                        <div
                          className={
                            errors.need ? "error relative" : "relative"
                          }
                        >
                          <select
                            {...register("need")}
                            className="bg-[#FFBC8C] bg-opacity-5 border-[#FFBC8C] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none w-full museo-sans"
                          >
                            <option disabled selected value="">
                              Choose Need
                            </option>
                            <option value="Industrial Procurement">
                              Industrial Procurement
                            </option>
                            <option value="Buying Machinery">
                              Buying Machinery
                            </option>
                            <option value="Engineering Design and Fabrication">
                              Engineering Design and Fabrication
                            </option>
                            <option value="Installation and Maintenance">
                              Installation and Maintenance
                            </option>
                            <option value="Other engineering services">
                              Other engineering services
                            </option>
                          </select>
                          <motion.p
                            animate={{
                              transition: { duration: 0.3 },
                              opacity: errors.need?.message ? 1 : 0,
                            }}
                            className="text-right text-[12px] text-[#fe3514] museo-sans absolute -bottom-20px right-0"
                          >
                            {errors.need?.message}
                          </motion.p>
                        </div>
                      </div>
                      {[
                        "Industrial Procurement",
                        "Engineering Design and Fabrication",
                        "Buying Machinery",
                      ].includes(watch("need") as string) && (
                          <div className="flex flex-col ">
                            <label className="museo-sans text-[#888A8B]">
                              Machine / Product Of Interest
                            </label>
                            <div
                              className={errors.productOfInterest ? "error" : ""}
                            >
                              <select
                                {...register("productOfInterest")}
                                className="bg-[#FFBC8C] bg-opacity-5 border-[#FFBC8C] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none w-full museo-sans"
                              >
                                <option disabled selected value="">
                                  Select machine/product of interest
                                </option>
                                <option value="Packaging machines">
                                  Packaging machines
                                </option>
                                <option value="Water Treatment and Processing Machines">
                                  Water Treatment and Processing Machines
                                </option>
                                <option value="Film Blowing Machines">
                                  Film Blowing Machines
                                </option>
                                <option value="Grinders and Juicer">
                                  Grinders and Juicer
                                </option>
                                <option value="Spare Parts">Spare Parts</option>
                                <option value="Flexo and Gravure Printers">
                                  Flexo and Gravure Printers
                                </option>
                                <option value="Bag Making and Sealing Machines">
                                  Bag Making and Sealing Machines
                                </option>
                                <option value="Coding Machines">
                                  Coding Machines
                                </option>
                                <option value="BOPP">BOPP</option>
                                <option value="Oil and Gas Valves and Machinery">
                                  Oil and Gas Valves and Machinery
                                </option>
                              </select>
                              <motion.p
                                animate={{
                                  transition: { duration: 0.3 },
                                  opacity: errors.productOfInterest?.message
                                    ? 1
                                    : 0,
                                }}
                                className="text-right text-[12px] text-[#fe3514] museo-sans absolute -bottom-20px right-0"
                              >
                                {errors.productOfInterest?.message}
                              </motion.p>
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                </section>
                <div>
                  <p className="text-[18px] space-grotesk-semibold mb-[32px]">
                    Location
                  </p>
                  <div className="flex flex-col space-y-[20px]">
                    <div className="flex flex-col">
                      <label className="museo-sans text-[#888A8B]">
                        Address
                      </label>
                      <div
                        className={
                          errors.address ? "error relative" : "relative"
                        }
                      >
                        <input
                          {...register("address")}
                          className="bg-[#FFBC8C] bg-opacity-5 border-[#FFBC8C] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none w-full museo-sans"
                        />
                        <motion.p
                          animate={{
                            opacity: errors.address?.message ? 1 : 0,
                          }}
                          className="text-right text-[12px] text-[#fe3514] museo-sans absolute -bottom-20px right-0"
                        >
                          {errors.address?.message}
                        </motion.p>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="museo-sans text-[#888A8B]">City</label>
                      <div
                        className={errors.city ? "error relative" : "relative"}
                      >
                        <input
                          {...register("city")}
                          className="bg-[#FFBC8C] bg-opacity-5 border-[#FFBC8C] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none w-full museo-sans"
                        />
                        <motion.p
                          animate={{ opacity: errors.city?.message ? 1 : 0 }}
                          className="text-right text-[12px] text-[#fe3514] museo-sans absolute -bottom-20px right-0"
                        >
                          {errors.city?.message}
                        </motion.p>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="museo-sans text-[#888A8B]">State</label>
                      <div
                        className={errors.state ? "error relative" : "relative"}
                      >
                        <input
                          {...register("state")}
                          className="bg-[#FFBC8C] bg-opacity-5 border-[#FFBC8C] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none w-full museo-sans"
                        />
                        <motion.p
                          animate={{ opacity: errors.state?.message ? 1 : 0 }}
                          className="text-right text-[12px] text-[#fe3514] museo-sans absolute -bottom-20px right-0"
                        >
                          {errors.state?.message}
                        </motion.p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[18px] space-grotesk-semibold mb-[32px]">
                    Message
                  </p>
                  <div
                    className={
                      errors.message
                        ? "error h-full relative"
                        : "h-full relative"
                    }
                  >
                    <textarea
                      {...register("message")}
                      className="bg-[#FFBC8C] bg-opacity-5 border-[#FFBC8C] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none w-full museo-sans h-full resize-none"
                    />
                    <motion.p
                      animate={{ opacity: errors.message?.message ? 1 : 0 }}
                      className="text-right text-[12px] text-[#fe3514] museo-sans absolute -bottom-20px right-0"
                    >
                      {errors.message?.message}
                    </motion.p>
                  </div>
                </div>
              </div>
              <motion.button
                disabled={false}
                whileTap={{ scale: 0.95 }}
                className="py-[12px] px-[32px] w-fit text-[#222] border border-[#222] rounded-full disabled:opacity-50 mt-[80px] lg:mt-[40px] cursor-pointer"
                type="submit"
              >
                {formLoading ? "Please Wait..." : "Send"}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </>,
    document.getElementById("modal") as HTMLElement
  );
};

export default EngineeringCtaForm;
