import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import CtaWithInputField from "../../blocks/cta/CtaWithInputField/CtaWithInputField";
import OrderComplete from "../../demos/ecommerce/views/OrderComplete/OrderComplete";

const OrderCompletePage = () => {
  return (
    <>
      <Header />
      <div className="py-32">
        <OrderComplete />
      </div>
      <div className="bg-blue-100">
        <CtaWithInputField />
      </div>
      <Footer />
    </>
  );
};

export default OrderCompletePage;
