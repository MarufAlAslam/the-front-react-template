import React from "react";
import Listing from "../../demos/ecommerce/views/Listing/Listing";
import Header from "../../components/header";
import Footer from "../../components/footer";
// import { Newsletter } from "../../demos/ecommerce/views/Listing/components";
import CtaWithInputField from "../../blocks/cta/CtaWithInputField/CtaWithInputField";

const ShoppingListing = () => {
  return (
    <div>
      <Header />
      <div className="pt-10">
        <Listing />
      </div>
      <div className="bg-[#1876D1] py-10">
        {/* <Newsletter /> */}
        <CtaWithInputField />
      </div>
      <Footer />
    </div>
  );
};

export default ShoppingListing;
