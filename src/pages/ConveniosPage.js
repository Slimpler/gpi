import React, { useState } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  ConveniosObjFour,
  ConveniosObjOne,
  ConveniosObjThree,
  ConveniosObjTwo,
} from "../components/InfoSection/DataConvenios";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/Sidebar";

const ConveniosPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...ConveniosObjOne} />
    {/*   <InfoSection {...ConveniosObjTwo} />
      <Services {...ConveniosObjFour} />
      <InfoSection {...ConveniosObjThree} /> */}
      <Footer />
    </>
  );
};

export default ConveniosPage;