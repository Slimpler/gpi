import React from "react";

import Navbar from "../componentsAfiliados/Navbar/Navbar";
import PerfilAfiliado from "../componentsAfiliados/PerfilAfiliado/PerfilAfiliado";


const PerfilPage = () => {
  
  return (
    <div style={{background:"#23BB77", paddingBlockEnd: "200px"}}>
      <div>

        <Navbar />
      </div>
      <div>
        <PerfilAfiliado />
      </div>
    </div>
  );
}

export default PerfilPage;