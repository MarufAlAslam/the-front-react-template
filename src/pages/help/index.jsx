import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Hero from "../../views/HelpCenter/components/Hero/Hero";
import HelpCenterArticle from "../../views/HelpCenterArticle/HelpCenterArticle";
// import Contact from "../../views/HelpCenter/components/Contact/Contact";
// import { Newsletter } from "../../demos/ecommerce/views/Listing/components";
import Contact from "../../blocks/formLayouts/Contact/Contact";
import CtaWithInputField from "../../blocks/cta/CtaWithInputField/CtaWithInputField";

const Help = () => {
  return (
    <div>
      <Header />
      <div className="pt-28"></div>
      <div className="container">
        <Hero />
      </div>
      <HelpCenterArticle />
      <div className="container">
        {/* <Contact /> */}
        <Contact />
      </div>
      <div className="bg-[#1876D1] py-10 mt-10">
        {/* <Newsletter /> */}
        <CtaWithInputField />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Help;
