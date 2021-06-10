import React, { useState } from "react";
import DropDown from "../componentsPagos/DropDown";
import Hero from "../componentsPagos/Hero";
import InfoSectionAfiliado from "../componentsPagos/componentsAfiliado/InfoSectionAfiliado";
import InfoSectionAsociacion from "../componentsPagos/componentsAsociacion/InfoSectionAsociacion";
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
      
      <InfoSectionAfiliado {...InfoData} />
      <InfoSectionAsociacion {...InfoDataTwo} />
      <InfoSectionAfiliado {...InfoDataThree} />
      <InfoSectionAfiliado {...InfoDataFour} />

    </>
  );
}

export default PagosPage;