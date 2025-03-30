import About2 from "@/components/sections/about/About2";
import Blogs3 from "@/components/sections/blogs/Blogs3";
import Brands from "@/components/sections/brands/Brands";
import CallToAction3 from "@/components/sections/call-to-action/CallToAction3";
import CallToActionForm from "@/components/sections/call-to-action/CallToActionForm";
import Features3 from "@/components/sections/features/Features3";
import Hero13 from "@/components/sections/hero-banners/Hero13";
import Portfolio3 from "@/components/sections/portfolio/Portfolio3";
import Products3 from "@/components/sections/products/Products3";
import Services2 from "@/components/sections/services/Services2";
import Services3 from "@/components/sections/services/Services3";
import Testimonials2 from "@/components/sections/testimonils/Testimonials2";

const Home13Main = () => {
  return (
    <main>
      <Hero13 />
      <About2 />
      <Features3 />
      <Services2 />
      <Products3 />
      <CallToAction3 />
      <Services3 />
      <Portfolio3 />
      <CallToActionForm />
      <Testimonials2 type={9} />
      <Blogs3 />
      <Brands type={2} />
    </main>
  );
};

export default Home13Main;
