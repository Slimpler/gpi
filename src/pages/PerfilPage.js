import React, { useState } from "react";
import DropDown from "../componentsPerfil/DropDown";
import Hero from "../componentsPerfil/Hero";
import InfoSection from "../componentsPerfil/InfoSection";
import Navbar from "../componentsPerfil/Navbar";
import { InfoData, InfoDataTwo } from "../componentsPerfil/dataPerfil/InfoData";
import { SliderData } from "../componentsPerfil/dataPerfil/SliderData";
import GlobalStyle from "../globalStyles";

function PerfilPage() {
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

export default PerfilPage;