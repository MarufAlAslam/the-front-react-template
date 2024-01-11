import React from "react";
import Header from "../../components/header";
// import Hero from "../../views/DesktopApp/components/Hero/Hero";
// import VerticalStepper from "../../blocks/progressSteps/VerticalStepper/VerticalStepper";
// import VerticalMinimalDesignedBlogCards from "../../blocks/blog/VerticalMinimalDesignedBlogCards/VerticalMinimalDesignedBlogCards";
// import WithBorderedCardsAndBrandColor from "../../blocks/stats/WithBorderedCardsAndBrandColor/WithBorderedCardsAndBrandColor";
// import CtaWithInputField from "../../blocks/cta/CtaWithInputField/CtaWithInputField";
import Footer from "../../components/footer";
import { Newsletter } from "../../demos/ecommerce/views/Listing/components";
// import SimpleHeroWithBottomVideo from "../../blocks/heroes/SimpleHeroWithBottomVideo/SimpleHeroWithBottomVideo";
// import FeatureListWithDesktopAppScreenshot from "../../blocks/features/FeatureListWithDesktopAppScreenshot/FeatureListWithDesktopAppScreenshot";

const Homepage = () => {
  return (
    <>
      <Header />
      {/* <div className="py-0">
        <SimpleHeroWithBottomVideo />
      </div>
      <Hero />
      <VerticalStepper /> */}
      {/* <VerticalMinimalDesignedBlogCards items={30} /> */}
      {/* <FeatureListWithDesktopAppScreenshot />
      <WithBorderedCardsAndBrandColor /> */}
      {/* <CtaWithInputField /> */}
      <div className="bg-[#1876D1] py-10">
        <Newsletter />
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
