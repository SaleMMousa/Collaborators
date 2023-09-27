import React from "react";
import Categories from "./component/Categories";
// import ShopBrands from "./component/ShopBrands";
import Collection from "./component/Collection";
import ShopBrands from "./component/Shopbrands";
import Latest from "./component/Lastest";
import Trending from "./component/Trending";
import Join from "../../components/join/Join";
import Hero from "../../components/hero/Hero";
import Header from "../../components/header";
import { Instagram } from "../../components";

function HomePage(props) {
  return (
    <>
     
      <Hero />
      <Categories />
      <Collection />
      <Latest />
      <ShopBrands />
      <Trending/>
      <Join />
      <Instagram />

    </>
  );
}

export default HomePage;
