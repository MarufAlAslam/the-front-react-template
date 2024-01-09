import React from "react";
import Header from "../../components/header";
import Hero from "../../views/DesktopApp/components/Hero/Hero";
import VerticalStepper from "../../blocks/progressSteps/VerticalStepper/VerticalStepper";
// import VerticalMinimalDesignedBlogCards from "../../blocks/blog/VerticalMinimalDesignedBlogCards/VerticalMinimalDesignedBlogCards";
import WithBorderedCardsAndBrandColor from "../../blocks/stats/WithBorderedCardsAndBrandColor/WithBorderedCardsAndBrandColor";
// import CtaWithInputField from "../../blocks/cta/CtaWithInputField/CtaWithInputField";
import Footer from "../../components/footer";
import { Newsletter } from "../../demos/ecommerce/views/Listing/components";

const Homepage = () => {
  return (
    <>
      <Header />
      <Hero />
      <VerticalStepper />
      {/* <VerticalMinimalDesignedBlogCards items={30} /> */}
      <WithBorderedCardsAndBrandColor />
      {/* <CtaWithInputField /> */}
      <div className="bg-[#1876D1] py-10">
        <Newsletter />
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
