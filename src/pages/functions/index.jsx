import React from "react";
import Header from "../../components/header";
// import VerticalMinimalDesignedBlogCards from "../../blocks/blog/VerticalMinimalDesignedBlogCards/VerticalMinimalDesignedBlogCards";
import Footer from "../../components/footer";
// import HeroReversed from "../../views/DesktopApp/components/Hero/HeroReversed";
import { Newsletter } from "../../demos/ecommerce/views/Listing/components";

const Functions = () => {
  return (
    <>
      <Header />
      {/* <HeroReversed /> */}
      {/* <VerticalMinimalDesignedBlogCards items={20} /> */}
      <div className="bg-[#1876D1] py-10">
        <Newsletter />
      </div>
      <Footer />
    </>
  );
};

export default Functions;
