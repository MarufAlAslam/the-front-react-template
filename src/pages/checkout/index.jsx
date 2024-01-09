import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Checkout from "../../demos/ecommerce/views/Checkout/Checkout";
import { Newsletter } from "../../demos/ecommerce/views/Listing/components";

const CheckoutPage = () => {
  return (
    <>
      <Header />
      <div className="py-14">
        <Checkout />
      </div>
      <div className="bg-blue-100 py-10">
        <Newsletter />
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;
