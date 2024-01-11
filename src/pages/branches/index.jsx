import React from "react";
import Header from "../../components/header";
// import VerticalMinimalDesignedBlogCards from "../../blocks/blog/VerticalMinimalDesignedBlogCards/VerticalMinimalDesignedBlogCards";
import Footer from "../../components/footer";
// import HeroReversed from "../../views/DesktopApp/components/Hero/HeroReversed";
import { Newsletter } from "../../demos/ecommerce/views/Listing/components";
import PortfolioGrid from "../../views/PortfolioGrid/PortfolioGrid";

const Branches = () => {
  return (
    <>
      <Header />
      {/* <HeroReversed /> */}
      {/* <VerticalMinimalDesignedBlogCards items={20} /> */}
      <PortfolioGrid />
      <div className="bg-[#1876D1] py-10 mt-10">
        <Newsletter />
      </div>
      <Footer />
    </>
  );
};

export default Branches;
