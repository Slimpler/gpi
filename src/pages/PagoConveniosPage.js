import React, { useState } from "react";
import DropDown from "../componentsPerfil/DropDown";
import Hero from "../componentsPerfil/Hero";
import InfoSection from "../componentsAdmin/InfoSection";
import Navbar from "../componentsAdmin/Navbar";
import { InfoData, InfoDataTwo, InfoDataThree, InfoDataFour } from "../componentsAdmin/dataAdmin/InfoData";
import { SliderData } from "../componentsAdmin/dataAdmin/SliderData";
import GlobalStyle from "../globalStyles";
import { PagosAdmin } from "../componentsAdmin/dataAdmin/PagosAdmin";

function PagoConveniosPage() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <GlobalStyle />
            <DropDown isOpen={isOpen} toggle={toggle} />
            < DataTable PagosAdmin />
        </>
    );
}

export default PagoConveniosPage;