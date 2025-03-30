import Blogs2 from "@/components/sections/blogs/Blogs2";
import CounterUp from "@/components/sections/counters/CounterUp";
import FaqPrimary from "@/components/sections/faq/FaqPrimary";
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import React from "react";

const FaqMain = () => {
  return (
    <main>
      <HeroPrimary title={"Frequently asked questions"} text={"FAQ"} />
      <FaqPrimary />
      <CounterUp />
      <Blogs2 />
    </main>
  );
};

export default FaqMain;
