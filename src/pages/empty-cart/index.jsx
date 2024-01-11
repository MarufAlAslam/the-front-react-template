import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import EmptyCart from "../../demos/ecommerce/views/EmptyCart/EmptyCart";
import CtaWithInputField from "../../blocks/cta/CtaWithInputField/CtaWithInputField";
// import CtaWithInputField from "../../blocks/cta/CtaWithInputField/CtaWithInputField";
// import { Newsletter } from "../../demos/ecommerce/views/Listing/components";

const EmptyCartPage = () => {
  return (
    <>
      <Header />
      <div className="py-32">
        <EmptyCart />
      </div>
      <div className="bg-[#1876D1] py-10">
        {/* <Newsletter /> */}
        <CtaWithInputField />
      </div>
      <Footer />
    </>
  );
};

export default EmptyCartPage;
