import Blogs3 from "@/components/sections/blogs/Blogs3";
import Brands from "@/components/sections/brands/Brands";
import CallToAction2 from "@/components/sections/call-to-action/CallToAction2";
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import PortfolioPrimary from "@/components/sections/portfolio/PortfolioPrimary";
import React from "react";

const PortfolioMain = ({ type }) => {
  return (
    <main>
      <HeroPrimary title={"Our Portfolio"} text="Portfolio" />
      <PortfolioPrimary type={type} />
      <CallToAction2 />
      <Blogs3 />
      <Brands type={2} />
    </main>
  );
};

export default PortfolioMain;
