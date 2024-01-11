import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import SearchBox from "../../views/BlogReachView/components/SearchBox/SearchBox";
import CtaWithInputField from "../../blocks/cta/CtaWithInputField/CtaWithInputField";
// import VerticallyAlignedBlogCardsWithShapedImage from "../../blocks/blog/VerticallyAlignedBlogCardsWithShapedImage/VerticallyAlignedBlogCardsWithShapedImage";
// import { Newsletter } from "../../demos/ecommerce/views/Listing/components";

const Search = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="pt-20 pb-10">
          <SearchBox />
          {/* <VerticallyAlignedBlogCardsWithShapedImage /> */}
        </div>
      </div>
      <div className="bg-[#1876D1] py-10">
        {/* <Newsletter /> */}
        <CtaWithInputField />
      </div>
      <Footer />
    </div>
  );
};

export default Search;
