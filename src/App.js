import Hero from "./components/hero/Hero";
import Header from "./components/header";
import Offer from "./components/offer section/Offer";
import { useState } from "react";
import HomePage from "./pages/home page/HomePage";
import Footer from "./components/footer";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {show && <Offer handelShow={() => setShow((prev) => !prev)} />}
      <Header />
      <Hero />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
