import React from "react";
import img from "../images/images2.png";
import { NavLink } from "react-router-dom";
import Common from "../Common";
function Home() {
  return (
    <>
     <Common name="Grow your business with " imgsrc={img} visit="/services" btname="Get Started"/>
    </>
  );
}

export default Home;
