import Blogs2 from "@/components/sections/blogs/Blogs2";
import Brands from "@/components/sections/brands/Brands";
import CallToAction2 from "@/components/sections/call-to-action/CallToAction2";
import CallToAction3 from "@/components/sections/call-to-action/CallToAction3";
import Features4 from "@/components/sections/features/Features4";
import Hero7 from "@/components/sections/hero-banners/Hero7";
import HotDeals from "@/components/sections/hot-deals/HotDeals";
import Offer2 from "@/components/sections/offers/Offer2";
import NewProducts from "@/components/sections/products/NewProducts";
import Products3 from "@/components/sections/products/Products3";
import Products4 from "@/components/sections/products/Products4";
import Subscribs from "@/components/sections/subscribs/Subscribs";
import Testimonials2 from "@/components/sections/testimonils/Testimonials2";
import React from "react";

const Home7Main = () => {
  return (
    <main>
      <Hero7 />
      <Offer2 />
      <Products3 title="Our Products" subtitle="// Parts" pt="pt-85" />
      <HotDeals />
      <NewProducts />
      <CallToAction3 />
      <Products4
        type={2}
        pt="pt-115"
        title={"Top Rated Products"}
        subtitle={"// Top Rated products"}
      />
      <Subscribs />
      <Testimonials2 type={8} />
      <Brands type={2} bg="gray" />
      <Blogs2 />
      <Features4 />
    </main>
  );
};

export default Home7Main;
