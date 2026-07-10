import Lenis from "@studio-freight/lenis/types";
import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";
import { Helmet } from "react-helmet";
import BlogCard from "../components/BlogCard";
import FadeUpAnimation from "../components/FadeUpAnimation";
import TopNav from "../components/TopNav";
import Footer from "../sections/Footer";

interface BlogProps {
  lenis: Lenis;
}

interface BlogPost {
  title: string;
  featuredImage: string;
  Id: string;
  datePublished: string;
  type: string;
}

const Blog: React.FC<BlogProps> = ({ lenis }) => {
  const [loading, setLoading] = useState(true);
  const [blogPosts, setBlogPosts] = useState([]);
  const url = "https://app.nocodb.com/api/v2/tables/mhmtgilh33ggz63/records";
  const options = {
    headers: {
      "xc-token": import.meta.env.VITE_APP_NOCODB_AUTH_TOKEN,
    },
  };
  const fetchBlogPosts = async () => {
    const result = await axios.get(url, options);
    setBlogPosts(result.data.list);
    console.log(result);
  };
  useEffect(() => {
    setLoading(true);
    try {
      fetchBlogPosts();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <TopNav lenis={lenis} />

      <main className="z-20 bg-white pt-[60px] p-[20px] md:pt-[70px] md:p-[30px] md:px-[20px] lg:px-[50px] pb-[100px] md:pb-[100px] relative max-w-[1600px] shadow-md mx-auto min-h-screen">
        <FadeUpAnimation>
          <h1 className="text-[60px] mb-[10px] md:mb-[20px] md:text-[120px] lg:text-[160px] space-grotesk-medium text-left tracking-tighter leading-[1.08] bg-gradient-to-r from-[#440572e6] to-[#ff9a53] bg-clip-text text-transparent">
            Our Blog
          </h1>
          
          <p className="text-[13px] md:text-[15px] museo-sans text-left max-w-[276px] opacity-60 leading-[1.375]">
            Stay in the Loop. Discover Our Latest Events, News, Online
            Trainings, Workshops, and Products.
          </p>
        </FadeUpAnimation>

        {!loading && (
          <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-y-[20px] gap-x-[20px] mt-[60px]">
            {blogPosts?.map((blogPost: BlogPost, index: number) => (
              <BlogCard
                title={blogPost.title}
                type={blogPost.type}
                id={blogPost.Id}
                index={index}
              />
            ))}
          </div>
        )}
        {loading && (
          <div className="h-[200px] flex items-center justify-center">
            <img className="w-[30px]" src="/assets/images/loader.gif" />
          </div>
        )}
      </main>
      <Footer
        contactUsUrl={
          "https://app.nocodb.com/api/v2/tables/mjgtqh17rbqo28w/records"
        }
      />
    </>
  );
};

export default Blog;
