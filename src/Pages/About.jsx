import React from "react";
import img from "../images/image4.png";
import Common from "../Common";
function About() {
  return (
    <>
      <Common name="WelCome to About page " imgsrc={img} visit='/contact' btname="Contact Now" />
    </>
  );
}

export default About;
