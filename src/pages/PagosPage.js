import React, { useState } from "react";
import DropDown from "../componentsPagos/DropDown";
import Hero from "../componentsPagos/Hero";
import InfoSection from "../componentsPagos/InfoSection";
import Navbar from "../componentsPagos/Navbar";
import { InfoData, InfoDataTwo, InfoDataThree, InfoDataFour } from "../componentsPagos/dataPagos/InfoData";
import { SliderData } from "../componentsPagos/dataPagos/SliderData";
import GlobalStyle from "../globalStyles";

function PagosPage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      
      <InfoSection {...InfoData} />
      <InfoSection {...InfoDataTwo} />
      <InfoSection {...InfoDataThree} />
      <InfoSection {...InfoDataFour} />

    </>
  );
}

export default PagosPage;