import React from "react";
import Nav from "./nav";
import Description from "./description";
import Carousel from "./carousel";
import Clients from "./clients"
import Footer from "./footer";
import "../App.css";

function Home() {
  return (
    <div className="App">
      <Nav />

      <Carousel />
      <Description />
      <Clients/>

      <Footer />
    </div>
  );
}

export default Home;
