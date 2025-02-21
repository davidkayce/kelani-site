import Lenis from "@studio-freight/lenis/types";
import axios from "axios";
import dayjs from "dayjs";
import { default as LocalizedFormat, default as localizedFormat } from "dayjs/plugin/localizedFormat";
import { AnimatePresence, motion } from "framer-motion";
import Markdown from 'markdown-to-jsx';
import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useParams } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import FadeUpAnimation from "../components/FadeUpAnimation";
import NavBar from "../components/NavBar";
import Footer from "../sections/Footer";
import useNavStore from "../store/nav";
import { BlogPost } from "../types/blog";
dayjs.extend(LocalizedFormat);
dayjs.extend(localizedFormat)

interface BlogItemProps {
    lenis: Lenis;
}

const BlogItem: React.FC<BlogItemProps> = ({ lenis }) => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true)
    const [blogPost, setBlogPost] = useState<BlogPost>({
        content: "",
        title: "",
        featuredImage: "",
        Id: "",
        datePublished: "",
        type: ""
    })
    const url = `https://app.nocodb.com/api/v2/tables/mhmtgilh33ggz63/records/${id}`;
    const options = {
        headers: {
            "xc-token": import.meta.env.VITE_APP_NOCODB_AUTH_TOKEN,
        },
    };
    const fetchBlogPost = async () => {
        const result = await axios.get(url, options);
        setBlogPost(result.data)
        console.log(result)
    }

    const [blogPosts, setBlogPosts] = useState([])
    const allPostsUrl = "https://app.nocodb.com/api/v2/tables/mhmtgilh33ggz63/records";
    const allPostoptions = {
        headers: {
            "xc-token": import.meta.env.VITE_APP_NOCODB_AUTH_TOKEN,
        },
    };
    const fetchBlogPosts = async () => {
        const result = await axios.get(allPostsUrl, allPostoptions);
        setBlogPosts(result.data.list)
        console.log(result)
    }
    const { navShowing, setNavShowing } = useNavStore();
    const colorVariants = [["#114546", "#0E3738", "#069E7D", "#77d4c0"], ["#5c341a", "#4a2a15", "#E36E1B", "#ec9a5f"], ["#2f2149", "#231937", "#79188C", "#d066e5"]]
    const mapTypeToText: Record<string, string> = {
        onlineTraining: "Online Training",
        article: "Article",
        event: "Event"
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        try {
            setLoading(true)
            fetchBlogPost()
            fetchBlogPosts()
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false)
        }
    }, [])
    const variant = blogPost?.type == "onlineTraining" ? 0 : blogPost?.type == "article" ? 1 : 2
    return (
        <>
            <>
                <AnimatePresence>
                    {navShowing && (
                        <NavBar lenis={lenis} closeNav={() => setNavShowing(false)} />
                    )}
                </AnimatePresence>
                <nav className="">          <div className="w-full p-[20px] md:p-[30px] md:px-[48px] flex justify-between z-20 max-w-[1660px] mx-auto">
                    <div className=" lg:px-[20px] h-[35px] rounded-full flex items-center justify-center">
                        <a href="/">
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
                        className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] bg-transparent rounded-full flex justify-center items-center cursor-pointer bg-white"
                    >
                        <img className="scale-90 sm:scale-100" src="/assets/images/icon-nav.svg" />
                    </motion.div>
                </div></nav>
            </>
            {<main className="w-full relative z-[10] bg-white shadow-md">
                <section className="w-full min-h-[60dvh] lg:h-[100vh] bg-[#0E3738] relative overflow-hidden pt-[22%] flex justify-between flex-col">
                    {loading && <div className="w-full h-full flex items-center justify-center absolute z-10 top-0">
                        <img className="w-[30px]" src="/assets/images/loader-white.gif" />
                    </div>}
                    {!loading && blogPost?.title && <>
                        <header className="w-full md:w-[70%] lg:w-[80%] xl:w-[75%] z-10 p-[20px] md:p-[30px] lg:px-[60px] lg:pl-[164px] ">
                            <FadeUpAnimation delay={0.9}>
                                <div className="flex items-center text-[14px]"><p style={{ backgroundColor: colorVariants[variant][2] }} className={`mr-[20px] p-[8px] px-[20px] w-fit text-white text-[12px] museo-sans bg-[${colorVariants[variant][2]}] rounded-[5px]`}>{mapTypeToText[blogPost?.type]}</p>
                                    <p className="text-white museo-sans">{dayjs(blogPost?.datePublished).format('LL')}</p>
                                </div>

                            </FadeUpAnimation>
                            <FadeUpAnimation delay={0.3}>
                                <h1 className="mt-[24px] text-[30px] md:text-[36.8px] lg:text-[56px] leading-[1.1] text-white space-grotesk-medium">{blogPost?.title}</h1>
                            </FadeUpAnimation>
                        </header>
                        <FadeUpAnimation delay={0.9}>
                            <div className="p-[20px] md:p-[30px] md:px-[60px] lg:pl-[164px]">
                                <img src="/assets/images/mouse-white.svg" className="h-[30px] md:h-[40px] mb-[44px]" />
                            </div>
                        </FadeUpAnimation>
                        <motion.img initial={{ opacity: 0 }} animate={{ opacity: 0.1, transition: { duration: 0.3 } }} className="grayscale w-[100%] absolute opacity-10 z-0 -bottom-[70%]" src="/assets/images/kelani-icon.svg" />
                    </>}
                </section>
                <FadeUpAnimation delay={0.5}>
                    <div className="markdown-container pt-[80px] pb-[80px] lg:pb-[120px] lg:pt-[160px] museo-sans px-[20px] mt-[50px] max-w-[720px] mx-auto">
                        {blogPost?.content ? <Markdown>
                            {blogPost?.content}
                        </Markdown> : <Skeleton count={10} />}
                    </div>
                </FadeUpAnimation>

                {!loading && <FadeUpAnimation delay={0.5}>
                    <section className="relative text-[64px] p-[20px] md:p-[30px] md:px-[48px] md:pb-[80px]">
                        <h2 className="text-[36px] md:text-[48px] text-black space-grotesk-medium tracking-tighter">Recommended from Kelani</h2>
                        <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-y-[20px] gap-x-[20px] mt-[60px]">
                            {blogPosts?.filter((item: BlogPost) => item.Id !== id).slice(0, 3)?.map((blogPost: BlogPost, index: number) => (<BlogCard
                                title={blogPost.title}
                                type={blogPost.type}
                                id={blogPost.Id}
                                index={index}
                            />))}
                        </div>

                    </section>
                </FadeUpAnimation>}
            </main>}
            <Footer contactUsUrl={
                "https://app.nocodb.com/api/v2/tables/mjgtqh17rbqo28w/records"
            } />
        </>
    );
}

export default BlogItem;