import React, { useState } from "react";
import InfoSectionAfiliado from "../componentsPagos/componentsAfiliado/InfoSectionAfiliado";
import InfoSectionAsociacion from "../componentsPagos/componentsAsociacion/InfoSectionAsociacion";
import Navbar from "../componentsAdministrador/Navbar/Navbar";
import {
  InfoData,
  InfoDataTwo,
  InfoDataThree,
} from "../componentsPagos/dataPagos/InfoData";

import GlobalStyle from "../globalStyles";
import InfoSectionDeudas from "../componentsPagos/componentsDeudas/InfoSectionDeuda";

function PagosPage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <InfoSectionAfiliado {...InfoData} />
      <InfoSectionAsociacion {...InfoDataTwo} />
      <InfoSectionDeudas {...InfoDataThree} />
    </>
  );
}

export default PagosPage;
