import React from "react";

import Navbar from "../componentsAdministrador/Navbar/Navbar";
import PerfilAdministrador from "../componentsAdministrador/perfilAdministrador/PerfilAdministrador";


const AdminPage = () => {
  
  return (
    <div style={{background:"#23BB77", paddingBlockEnd: "150px"}}>
      <div>

        <Navbar/>
      </div>
      <div>
        <PerfilAdministrador />
      </div>
    </div>
  );
}

export default AdminPage;