import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
// import CtaWithInputField from "../../blocks/cta/CtaWithInputField/CtaWithInputField";
import Cart from "../../demos/ecommerce/views/Cart/Cart";
import { Newsletter } from "../../demos/ecommerce/views/Listing/components";

const CartPage = () => {
  return (
    <>
      <Header />
      <div className="py-14">
        <Cart />
      </div>
      <div className="bg-[#1976d2] py-10">
        <Newsletter />
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
