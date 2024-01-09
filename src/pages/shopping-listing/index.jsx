import React from "react";
import Listing from "../../demos/ecommerce/views/Listing/Listing";
import Header from "../../components/header";
import Footer from "../../components/footer";

const ShoppingListing = () => {
  return (
    <div>
      <Header />
      <div className="pt-10">
        <Listing />
      </div>
      <Footer />
    </div>
  );
};

export default ShoppingListing;
