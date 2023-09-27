import Offer from "./components/offer section/Offer";
import { useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Product from "./pages/product";
import Router from "./Router";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {show && <Offer handelShow={() => setShow((prev) => !prev)} />}
      <Header />
       <Router />
      <Footer />
      {/* <Products/> */}
      {/* <Product/> */}
    </div>
  );
}

export default App;
