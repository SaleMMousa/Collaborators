import Offer from "./components/offer-section/Offer";
import { useState } from "react";
import Header from "./components/header";
import Router from "./Router";
import { Footer } from "./components";

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
