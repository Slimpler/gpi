import React, { useState } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import InfoSectionAfiliate from "../components/InfoSectionAfiliate";

import {
  homeObjFour,
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Empresas from "../components/Empresas";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSectionAfiliate {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Empresas {...homeObjFour} />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
