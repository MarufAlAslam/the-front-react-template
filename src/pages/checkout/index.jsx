import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Checkout from "../../demos/ecommerce/views/Checkout/Checkout";

const CheckoutPage = () => {
  return (
    <>
      <Header />
      <div className="py-14">
        <Checkout />
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;
