import Lenis from "@studio-freight/lenis/types";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
import NavBar from "./NavBar";
import useNavStore from "../store/nav";
import Footer from "../sections/Footer";

interface PageShellProps {
  lenis: Lenis;
  children: ReactNode;
  mainClassName?: string;
  contactUsUrl?: string;
}

const DEFAULT_CONTACT_URL =
  "https://app.nocodb.com/api/v2/tables/mjgtqh17rbqo28w/records";

const PageShell = ({
  lenis,
  children,
  mainClassName = "bg-[#FEFEFE]",
  contactUsUrl = DEFAULT_CONTACT_URL,
}: PageShellProps) => {
  const { navShowing, setNavShowing } = useNavStore();

  return (
    <>
      <div>
        <AnimatePresence>
          {navShowing && (
            <NavBar lenis={lenis} closeNav={() => setNavShowing(false)} />
          )}
        </AnimatePresence>
        <nav>
          <div className="w-full p-[20px] md:p-[30px] md:px-[48px] flex justify-between z-20 max-w-[1660px] mx-auto">
            <div className="lg:px-[20px] h-[35px] rounded-full flex items-center justify-center">
              <a href="/" className="my-auto">
                <img
                  className="h-[40px] md:h-[50px] lg:h-[55px]"
                  src="/assets/images/kelani-logo-white.png"
                />
              </a>
            </div>
            <motion.div
              onClick={() => setNavShowing(true)}
              whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.3 } }}
              className="cursor-pointer flex items-center justify-center w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full bg-white md:w-auto md:h-auto md:rounded-none md:bg-transparent md:px-0"
            >
              <img
                className="scale-90 sm:scale-100 md:hidden"
                src="/assets/images/icon-nav.svg"
              />
              <span className="hidden md:inline museo-sans text-[15px] font-semibold uppercase tracking-wider text-[#0f1930]">
                Menu
              </span>
            </motion.div>
          </div>
        </nav>
      </div>

      <motion.main
        exit={{ opacity: 0 }}
        id="home"
        className={`shadow-lg z-[2] relative pt-20 ${mainClassName}`}
      >
        {children}
      </motion.main>
      <Footer contactUsUrl={contactUsUrl} />
    </>
  );
};

export default PageShell;
