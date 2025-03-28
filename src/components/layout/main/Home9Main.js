import Blogs2 from "@/components/sections/blogs/Blogs2";
import Blogs3 from "@/components/sections/blogs/Blogs3";
import CallToAction3 from "@/components/sections/call-to-action/CallToAction3";
import Features4 from "@/components/sections/features/Features4";
import Hero1 from "@/components/sections/hero-banners/Hero1";
import HotDeal2 from "@/components/sections/hot-deals/HotDeal2";
import NewProducts from "@/components/sections/products/NewProducts";
import Products3 from "@/components/sections/products/Products3";
import Products4 from "@/components/sections/products/Products4";
import React from "react";

const Home9Main = () => {
  return (
    <main>
      <Hero1 />
      <NewProducts type={2} />
      <HotDeal2 />
      <Products3 title={"Our Products"} subtitle={"// Parts"} />
      <CallToAction3 />
      <Products4
        type={2}
        title={"Top Rated Products"}
        subtitle={"// Top Rated products"}
        pt={"pt-115"}
      />
      <Blogs2 type={2} pb="pb-70" pt="pt-0" />
      <Features4 type={2} mb={"mb-120"} />
    </main>
  );
};

export default Home9Main;
