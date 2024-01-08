import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import CtaWithInputField from "../../blocks/cta/CtaWithInputField/CtaWithInputField";
import Cart from "../../demos/ecommerce/views/Cart/Cart";

const CartPage = () => {
  return (
    <>
      <Header />
      <div className="py-14">
        <Cart />
      </div>
      <div className="bg-blue-100">
        <CtaWithInputField />
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
