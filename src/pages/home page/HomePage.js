import React from "react";
import Categories from "./component/Categories";
// import ShopBrands from "./component/ShopBrands";
import Collection from "./component/Collection";
import ShopBrands from "./component/Shopbrands";
import Latest from "./component/Lastest";
import Trending from "./component/Trending";

function HomePage(props) {
  return (
    <>
      <Categories />
      <Collection />
      <Latest/>
      <ShopBrands />
      <Trending/>
    </>
  );
}

export default HomePage;
