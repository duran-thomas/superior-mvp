import BlogsGridPrimary from "@/components/sections/blogs/BlogsGridPrimary";
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";

const BlogGridMain = () => {
  return (
    <main>
      <HeroPrimary title={"Blog Grid"} text={"Blogs"} />
      <BlogsGridPrimary />
    </main>
  );
};

export default BlogGridMain;
