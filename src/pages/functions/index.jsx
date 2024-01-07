import React from "react";
import Header from "../../components/header";
import VerticalMinimalDesignedBlogCards from "../../blocks/blog/VerticalMinimalDesignedBlogCards/VerticalMinimalDesignedBlogCards";
import Footer from "../../components/footer";
import HeroReversed from "../../views/DesktopApp/components/Hero/HeroReversed";

const Functions = () => {
  return (
    <>
      <Header />
      <HeroReversed />
      <VerticalMinimalDesignedBlogCards items={20} />
      <Footer />
    </>
  );
};

export default Functions;
