import About2 from "@/components/sections/about/About2";
import Blogs3 from "@/components/sections/blogs/Blogs3";
import Brands from "@/components/sections/brands/Brands";
import CallToAction3 from "@/components/sections/call-to-action/CallToAction3";
import CallToActionForm from "@/components/sections/call-to-action/CallToActionForm";
import Features3 from "@/components/sections/features/Features3";
import Hero5 from "@/components/sections/hero-banners/Hero5";
import Portfolio3 from "@/components/sections/portfolio/Portfolio3";
import PricingPlans from "@/components/sections/pricing-plans/PricingPlans";
import Products2 from "@/components/sections/products/Products2";
import Services2 from "@/components/sections/services/Services2";
import Services3 from "@/components/sections/services/Services3";
import Testimonials2 from "@/components/sections/testimonils/Testimonials2";
import React from "react";

const Home5Main = () => {
  return (
    <main>
      <Hero5 />
      <About2 />
      <Features3 />
      <PricingPlans />
      <Services2 />
      <Products2 />
      <CallToAction3 />
      <Services3 />
      <Portfolio3 />
      <CallToActionForm />
      <Testimonials2 type={7} />
      <Blogs3 />
      <Brands type={2} />
    </main>
  );
};

export default Home5Main;
