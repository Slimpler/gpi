import React, { useState } from "react";
import DropDown from "../componentsMisConvenios/DropDown";
import Hero from "../componentsMisConvenios/Hero";
import InfoSection from "../componentsMisConvenios/InfoSection";
import Navbar from "../componentsMisConvenios/Navbar";
import { InfoData, InfoDataTwo } from "../dataMisConvenios/InfoData";
import { SliderData } from "../dataMisConvenios/SliderData";
import GlobalStyle from "../globalStyles";

function MisConveniosPage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <InfoSection {...InfoDataTwo} />
    </>
  );
}

export default MisConveniosPage;