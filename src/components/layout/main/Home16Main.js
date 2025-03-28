import CallToAction3 from "@/components/sections/call-to-action/CallToAction3";

import Categories2 from "@/components/sections/categories/Categories2";
import Features4 from "@/components/sections/features/Features4";
import Features5 from "@/components/sections/features/Features5";
import Hero15 from "@/components/sections/hero-banners/Hero15";
import Hero16 from "@/components/sections/hero-banners/Hero16";
import HotDeal2 from "@/components/sections/hot-deals/HotDeal2";
import HotDeals from "@/components/sections/hot-deals/HotDeals";
import Offer2 from "@/components/sections/offers/Offer2";
import ProductLists from "@/components/sections/products/ProductLists";
import Products3 from "@/components/sections/products/Products3";
import Products5 from "@/components/sections/products/Products5";
import React from "react";

const Home16Main = () => {
  return (
    <main>
      <Hero16 />
      <Features5 />
      <HotDeal2 type={2} />
      <Products3 type={2} title={"Our Products"} />
      <Categories2 />
      <Products5 />
      <CallToAction3 />
      <Offer2 type={2} />
      <ProductLists />
      <Features4 />
    </main>
  );
};

export default Home16Main;
