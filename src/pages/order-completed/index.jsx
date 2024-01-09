import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
// import CtaWithInputField from "../../blocks/cta/CtaWithInputField/CtaWithInputField";
import OrderComplete from "../../demos/ecommerce/views/OrderComplete/OrderComplete";
import { Newsletter } from "../../demos/ecommerce/views/Listing/components";

const OrderCompletePage = () => {
  return (
    <>
      <Header />
      <div className="py-32">
        <OrderComplete />
      </div>
      <div className="bg-[#1876D1] py-10">
        <Newsletter />
      </div>
      <Footer />
    </>
  );
};

export default OrderCompletePage;
