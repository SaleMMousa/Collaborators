import React from "react";
import Categories from "./component/Categories";
// import ShopBrands from "./component/ShopBrands";
import Collection from "./component/Collection";
import ShopBrands from "./component/Shopbrands";
import Latest from "./component/Lastest";
import Join from "../../components/join/Join";
import Instagram from "../../components/instagram/Instagram";
import Hero from "../../components/hero/Hero";
import Header from "../../components/header";

function HomePage(props) {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <Collection />
      <Latest />
      <ShopBrands />
      <Join />
      <Instagram />

    </>
  );
}

export default HomePage;
