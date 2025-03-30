import Blogs2 from "@/components/sections/blogs/Blogs2";
import Brands2 from "@/components/sections/brands/Brands2";
import CallToAction2 from "@/components/sections/call-to-action/CallToAction2";
import Features2 from "@/components/sections/features/Features2";
import FilterTab from "@/components/sections/filter-tab/FilterTab";
import Hero2 from "@/components/sections/hero-banners/Hero2";
import Offer from "@/components/sections/offers/Offer";
import Portfolio2 from "@/components/sections/portfolio/Portfolio2";
import Products2 from "@/components/sections/products/Products2";
import Testimonials1 from "@/components/sections/testimonils/Testimonials1";
import Video from "@/components/sections/videos/Video";
import NewsletterModal from "@/components/shared/modals/NewsletterModal";
import React from "react";

const Home2Main = () => {
  return (
    <main>
      <Hero2 />
      <FilterTab />
      <Features2 />
      <CallToAction2 />
      <Products2 />
      <Offer />
      <Video />
      <Brands2 />
      <Testimonials1 />
      <Portfolio2 />
      <Blogs2 />
      <NewsletterModal />
    </main>
  );
};

export default Home2Main;
