import Blogs2 from "@/components/sections/blogs/Blogs2";
import Brands2 from "@/components/sections/brands/Brands2";
import CallToAction2 from "@/components/sections/call-to-action/CallToAction2";
import Hero11 from "@/components/sections/hero-banners/Hero11";
import Offer from "@/components/sections/offers/Offer";
import Portfolio2 from "@/components/sections/portfolio/Portfolio2";
import Products2 from "@/components/sections/products/Products2";
import Testimonials1 from "@/components/sections/testimonils/Testimonials1";
import Video from "@/components/sections/videos/Video";
import React from "react";

const Home11Main = () => {
  return (
    <main>
      <Hero11 />
      <Products2 type={2} />
      <CallToAction2 />
      <Offer mt="mt-120" />
      <Video />
      <Brands2 />
      <Testimonials1 />
      <Portfolio2 />
      <Blogs2 pt={"pt-85"} />
    </main>
  );
};

export default Home11Main;
