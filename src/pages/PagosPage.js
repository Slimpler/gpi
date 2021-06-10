import React, { useState } from "react";
import DropDown from "../componentsPagos/DropDown";
import Hero from "../componentsPagos/Hero";
import InfoSectionAfiliado from "../componentsPagos/componentsAfiliado/InfoSectionAfiliado";
import InfoSectionAsociacion from "../componentsPagos/componentsAsociacion/InfoSectionAsociacion";
import InfoSectionBono from "../componentsPagos/componentsBono/InfoSectionBono";
import InfoSectionPrestamo from "../componentsPagos/componentsPrestamo/InfoSectionPrestamo";
import Navbar from "../componentsPagos/Navbar";
import { InfoData, InfoDataTwo, InfoDataThree, InfoDataFour } from "../componentsPagos/dataPagos/InfoData";
import { SliderData } from "../componentsPagos/dataPagos/SliderData";
import GlobalStyle from "../globalStyles";

function PagosPage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

const style = {
  background: 'black',

}  
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} /> 
      <InfoSectionAfiliado {...InfoData} style={style}/>
      <InfoSectionAsociacion {...InfoDataTwo} />
      <InfoSectionBono {...InfoDataThree} />
      <InfoSectionPrestamo {...InfoDataFour} />
    </>
  );
}

export default PagosPage;