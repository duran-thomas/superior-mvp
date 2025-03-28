import CallToAction3 from "@/components/sections/call-to-action/CallToAction3";
import Categories from "@/components/sections/categories/Categories";
import Features4 from "@/components/sections/features/Features4";
import Features5 from "@/components/sections/features/Features5";
import Hero15 from "@/components/sections/hero-banners/Hero15";
import Offer2 from "@/components/sections/offers/Offer2";
import ProductLists from "@/components/sections/products/ProductLists";
import Products3 from "@/components/sections/products/Products3";
import Products5 from "@/components/sections/products/Products5";
import React from "react";

const Home15Main = () => {
  return (
    <main>
      <Hero15 />
      <Features5 />
      <Products3 type={2} title={"Our Products"} />
      <Categories />
      <Products5 />
      <CallToAction3 />
      <Offer2 type={2} />
      <ProductLists />
      <Features4 />
    </main>
  );
};

export default Home15Main;
