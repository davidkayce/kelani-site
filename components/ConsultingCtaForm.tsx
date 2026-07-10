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
  additionalInformation: z.string(),
  specificDetailsRelatedToHiringNeeds: z.string(),
  industry: z.string().nonempty({ message: "Industry is required" }),
  email: z.string().email({ message: "Invalid email" }),
  phoneNumber: z.string().nonempty({ message: "Phone number is required" }),
  urgencyOfHiring: z
    .string()
    .nonempty({ message: "Urgency Of Hiring is required" }),
  positionsToFill: z
    .string()
    .nonempty({ message: "Position(s) To Fill is required" }),
  typeOfHiringNeeds: z
    .string()
    .nonempty({ message: "Type Of Hiring Needs is required" }),
  companyName: z.string().nonempty({ message: "Company name is required" }),
  companySize: z.string().nonempty({ message: "Company Size is required" }),
});

type FormSchema = z.infer<typeof schema>;

const ConsultingCtaForm = ({ close }: { close: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {}, [ref]);

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
    const url = "https://app.nocodb.com/api/v2/tables/m1ecy3cl0ylezcx/records";
    const options = {
      headers: {
        "xc-token": import.meta.env.VITE_APP_NOCODB_AUTH_TOKEN,
      },
    };
    const requestData = {
      ...data,
    };
    console.log(requestData)
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
        //@ts-ignore
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
        className="lg:w-[80dvw] max-h-screen bg-white z-[90] fixed top-0 right-0 bottom-0 p-[10px] overflow-y-scroll"
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
              className="  p-[20px] pt-[56px]  md:p-[56px] relative"
            >
              <header className="text-[24px] lg:text-[32px] space-grotesk-semibold pb-[56px] border-b-zinc-500 border-b border-opacity-50 flex justify-between items-center">
              <span className="inline-block sm:mr-[20px]">Empower Your Team with Kelani Consulting</span>
                <motion.svg
                  className={"cursor-pointer lg:w-10 w-32 lg:h-10  focus:outline-none"}
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
              <div className="grid lg:grid-cols-2 gap-[40px]  mt-[56px]">
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
                            className="bg-[#CAB6F4] bg-opacity-5 border-[#CAB6F4] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none w-full museo-sans"
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
                      <div className="flex flex-col consulting">
                        <label className="museo-sans text-[#888A8B]">
                          Phone Number
                        </label>
                        {/* <input className="bg-[#CAB6F4] bg-opacity-5 border-[#CAB6F4] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none w-full museo-sans" /> */}
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
                            className="bg-[#CAB6F4] bg-opacity-5 border-[#CAB6F4] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none w-full museo-sans"
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
                <div>
                  <p className="text-[18px] space-grotesk-semibold mb-[32px]">
                    Hiring Needs
                  </p>
                  <div className="flex flex-col space-y-[20px]">
                    <div className="flex flex-col">
                      <label className="museo-sans text-[#888A8B]">
                        Position(s) to Fill
                      </label>
                      <div
                        className={
                          errors.positionsToFill ? "error relative" : "relative"
                        }
                      >
                        <input
                          {...register("positionsToFill")}
                          className="bg-[#CAB6F4] bg-opacity-5 border-[#CAB6F4] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none w-full museo-sans"
                        />
                        <motion.p
                          animate={{
                            opacity: errors.positionsToFill?.message ? 1 : 0,
                          }}
                          className="text-right text-[12px] text-[#fe3514] museo-sans absolute -bottom-20px right-0"
                        >
                          {errors.positionsToFill?.message}
                        </motion.p>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="museo-sans text-[#888A8B]">
                        Type Of Hiring Needs
                      </label>
                      <div
                        className={
                          errors.typeOfHiringNeeds
                            ? "error relative"
                            : "relative"
                        }
                      >
                        <select
                          {...register("typeOfHiringNeeds")}
                          className="bg-[#CAB6F4] bg-opacity-5 border-[#CAB6F4] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none w-full museo-sans"
                        >
                          <option disabled selected value="">
                            Select Type of Hiring Needs
                          </option>
                          <option value="Permanent">Permanent</option>
                          <option value="Temporary">Temporary</option>
                          <option value="Project-Based">Project-Based</option>
                          <option value="Other">Other</option>
                        </select>
                        <motion.p
                          animate={{
                            opacity: errors.typeOfHiringNeeds?.message ? 1 : 0,
                          }}
                          className="text-right text-[12px] text-[#fe3514] museo-sans absolute -bottom-20px right-0"
                        >
                          {errors.typeOfHiringNeeds?.message}
                        </motion.p>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="museo-sans text-[#888A8B]">
                        Urgency Of Hiring
                      </label>
                      <div
                        className={
                          errors.urgencyOfHiring ? "error relative" : "relative"
                        }
                      >
                        <select
                          {...register("urgencyOfHiring")}
                          className="bg-[#CAB6F4] bg-opacity-5 border-[#CAB6F4] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none w-full museo-sans"
                        >
                          <option disabled selected value="">
                            Select Hiring Needs
                          </option>
                          <option value="Immediate">Immediate</option>
                          <option value="3 Months">3 Months</option>
                          <option value="6 Months">6 Months</option>
                          <option value="Other">Other</option>
                        </select>
                        <motion.p
                          animate={{
                            opacity: errors.urgencyOfHiring?.message ? 1 : 0,
                          }}
                          className="text-right text-[12px] text-[#fe3514] museo-sans absolute -bottom-20px right-0"
                        >
                          {errors.urgencyOfHiring?.message}
                        </motion.p>
                      </div>
                    </div>
                  </div>
                </div>
                <section>
                  <div>
                    <p className="text-[18px] space-grotesk-semibold mb-[32px]">
                      Company Details
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
                                : "#CAB6F4",
                            }}
                            className="bg-[#CAB6F4] bg-opacity-5 border-[#CAB6F4] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none w-full museo-sans"
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
                                  : "#CAB6F4",
                              }}
                              className="bg-[#CAB6F4] bg-opacity-5 border-[#CAB6F4] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none w-full museo-sans"
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
                          Company Size
                        </label>
                        <div
                          className={
                            errors.companySize ? "error relative" : "relative"
                          }
                        >
                          <select
                            {...register("companySize")}
                            className="bg-[#CAB6F4] bg-opacity-5 border-[#CAB6F4] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none w-full museo-sans"
                          >
                            <option disabled selected value="">
                              Choose Company Size
                            </option>
                            <option value="1 - 9 employees">
                              1 - 9 employees
                            </option>
                            <option value="10 - 19 employees">
                              10 - 19 employees
                            </option>
                            <option value="20 - 49 employees">
                              20 - 49 employees
                            </option>
                            <option value="50 - 249 employees">50 - 249</option>
                            <option value="250+ employees">250+</option>
                          </select>
                          <motion.p
                            animate={{
                              transition: { duration: 0.3 },
                              opacity: errors.companySize?.message ? 1 : 0,
                            }}
                            className="text-right text-[12px] text-[#fe3514] museo-sans absolute -bottom-20px right-0"
                          >
                            {errors.companySize?.message}
                          </motion.p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div>
                  <p className="text-[18px] space-grotesk-semibold mb-[32px]">
                    Additional Information
                  </p>
                  <div className="flex flex-col space-y-[20px]">
                    <div className="flex flex-col">
                      <label className="museo-sans text-[#888A8B]">
                        Additional Information
                      </label>
                      <div
                        className={
                          errors.additionalInformation
                            ? "error relative"
                            : "relative"
                        }
                      >
                        <input
                          {...register("additionalInformation")}
                          className="bg-[#CAB6F4] bg-opacity-5 border-[#CAB6F4] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none w-full museo-sans"
                        />
                        <motion.p
                          animate={{
                            opacity: errors.additionalInformation?.message
                              ? 1
                              : 0,
                          }}
                          className="text-right text-[12px] text-[#fe3514] museo-sans absolute -bottom-20px right-0"
                        >
                          {errors.additionalInformation?.message}
                        </motion.p>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="museo-sans text-[#888A8B]">
                        Specific Details Related To Hiring Needs
                      </label>
                      <div
                        className={
                          errors.specificDetailsRelatedToHiringNeeds
                            ? "error relative"
                            : "relative"
                        }
                      >
                        <input
                          {...register("specificDetailsRelatedToHiringNeeds")}
                          className="bg-[#CAB6F4] bg-opacity-5 border-[#CAB6F4] border p-[10px] mt-[8px] rounded-[8px] focus:outline-none w-full museo-sans"
                        />
                        <motion.p
                          animate={{
                            opacity: errors.specificDetailsRelatedToHiringNeeds
                              ?.message
                              ? 1
                              : 0,
                          }}
                          className="text-right text-[12px] text-[#fe3514] museo-sans absolute -bottom-20px right-0"
                        >
                          {errors.specificDetailsRelatedToHiringNeeds?.message}
                        </motion.p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <motion.button
                disabled={false}
                whileTap={{ scale: 0.95 }}
                className="py-[12px] px-[32px] w-fit text-[#222] border border-[#222] rounded-full disabled:opacity-50 mt-[40px] cursor-pointer"
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

export default ConsultingCtaForm;
