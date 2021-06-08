import React, { useState } from "react";
import DropDown from "../componentsAdmin/DropDown";
import Hero from "../componentsAdmin/Hero";
import InfoSection from "../componentsAdmin/InfoSection";
import Navbar from "../componentsAdmin/Navbar";
import { InfoData, InfoDataTwo, InfoDataThree, InfoDataFour } from "../componentsAdmin/dataAdmin/InfoData";
import { SliderData } from "../componentsAdmin/dataAdmin/SliderData";
import GlobalStyle from "../globalStyles";

function AdminPage() {
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

export default AdminPage;