import Blogs2 from "@/components/sections/blogs/Blogs2";
import Brands2 from "@/components/sections/brands/Brands2";
import CallToAction2 from "@/components/sections/call-to-action/CallToAction2";
import Hero10 from "@/components/sections/hero-banners/Hero10";
import HotDeal2 from "@/components/sections/hot-deals/HotDeal2";
import Offer from "@/components/sections/offers/Offer";
import Portfolio2 from "@/components/sections/portfolio/Portfolio2";
import Products2 from "@/components/sections/products/Products2";
import Products3 from "@/components/sections/products/Products3";
import Skills from "@/components/sections/skills/Skills";
import Testimonials1 from "@/components/sections/testimonils/Testimonials1";

import Video from "@/components/sections/videos/Video";
import React from "react";

const Home10Main = () => {
  return (
    <main>
      <Hero10 />
      <Products3 title={"Our Products"} subtitle={"// Parts"} />
      <HotDeal2 />
      <Skills />
      <CallToAction2 />
      <Products2 />
      <Offer />
      <Video />
      <Brands2 />
      <Testimonials1 />
      <Portfolio2 />
      <Blogs2 pt={"pt-85"} />
    </main>
  );
};

export default Home10Main;
