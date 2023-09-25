import React from "react";
import Categories from "./component/Categories";
// import ShopBrands from "./component/ShopBrands";
import Collection from "./component/Collection";
import ShopBrands from "./component/Shopbrands";
import Latest from "./component/Lastest";
import Join from "../../components/join/Join";

function HomePage(props) {
  return (
    <>
      <Categories />
      <Collection />
      <Latest/>
      <ShopBrands />
      <Join/>
      
    </>
  );
}

export default HomePage;
