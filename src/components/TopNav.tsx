import { AnimatePresence, motion } from "framer-motion"
import NavBar from "./NavBar"
import Lenis from "@studio-freight/lenis/types"
import useNavStore from "../store/nav";

interface TopNavProps {
    lenis: Lenis;
}

const TopNav: React.FC<TopNavProps> = ({ lenis }) => {
    const { navShowing, setNavShowing } = useNavStore();
    return (
        <>
            <AnimatePresence >
                {navShowing && (
                    <NavBar lenis={lenis} closeNav={() => setNavShowing(false)} />
                )}
            </AnimatePresence>
            <nav className="border-b bg-white border-[rgba(166,166,166,0.5)] w-full">          <div className="w-full p-[20px] md:p-[30px] md:px-[48px] flex justify-between z-20 max-w-[1660px] mx-auto">
                <div className=" lg:px-[20px] h-[35px] rounded-full flex items-center justify-center">
                    <a href="/">
                        <img
                            className="h-[40px] md:h-[50px] lg:h-[55px]"
                            src="/assets/images/kelani-logo.png"
                        />
                    </a>
                </div>
                <motion.div
                    onClick={() => setNavShowing(true)}
                    whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
                    whileTap={{ scale: 0.95, transition: { duration: 0.3 } }}
                    className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] bg-white rounded-full flex justify-center items-center cursor-pointer shadow-md"
                >
                    <img className="scale-90 sm:scale-100" src="/assets/images/icon-nav.svg" />
                </motion.div>
            </div></nav>
        </>
    );
}

export default TopNav;