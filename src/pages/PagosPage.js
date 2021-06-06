import React, { useState } from "react";
import DropDown from "../componentsPerfil/DropDown";
import Hero from "../componentsPerfil/Hero";
import InfoSection from "../componentsPerfil/InfoSection";
import Navbar from "../componentsPagos/Navbar";
import { InfoData, InfoDataTwo } from "../componentsPagos/dataPagos/InfoData";
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
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <InfoSection {...InfoDataTwo} />
    </>
  );
}

export default PagosPage;