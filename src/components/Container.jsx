import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Card from "./Card";
import Stats from "./Stats";
import About from "./About";

const Container = () => {
  return (
    <div className="Container bg-black w-full h-full">
      <Header />
      <Banner />
      <Card />
      <Stats />
      <About />
    </div>
  );
};

export default Container;
