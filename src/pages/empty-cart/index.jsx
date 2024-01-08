import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import EmptyCart from "../../demos/ecommerce/views/EmptyCart/EmptyCart";
import CtaWithInputField from "../../blocks/cta/CtaWithInputField/CtaWithInputField";

const EmptyCartPage = () => {
  return (
    <>
      <Header />
      <div className="py-32">
        <EmptyCart />
      </div>
      <div className="bg-blue-100">
        <CtaWithInputField />
      </div>
      <Footer />
    </>
  );
};

export default EmptyCartPage;
