import Blogs2 from "@/components/sections/blogs/Blogs2";
import Brands from "@/components/sections/brands/Brands";
import Features3 from "@/components/sections/features/Features3";
import Hero4 from "@/components/sections/hero-banners/Hero4";
import Products4 from "@/components/sections/products/Products4";
import Services2 from "@/components/sections/services/Services2";
import Testimonials2 from "@/components/sections/testimonils/Testimonials2";
import TimelineFloat from "@/components/sections/Timelines/TimelineFloat";
import React from "react";

const Home4Main = () => {
  return (
    <main>
      <Hero4 />
      <TimelineFloat />
      <Products4 />
      <Features3 />
      <Services2 />
      <Testimonials2 type={6} />
      <Brands type={2} bg="gray" />
      <Blogs2 />
    </main>
  );
};

export default Home4Main;
