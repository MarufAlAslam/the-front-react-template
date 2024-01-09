import React from "react";
import Listing from "../../demos/ecommerce/views/Listing/Listing";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Newsletter } from "../../demos/ecommerce/views/Listing/components";

const ShoppingListing = () => {
  return (
    <div>
      <Header />
      <div className="pt-10">
        <Listing />
      </div>
      <div className="bg-[#1976d2] py-10">
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
};

export default ShoppingListing;
