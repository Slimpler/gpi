import React from "react";
import Icon1 from "../../images/descargar.svg";
import Icon2 from "../../images/rellenar.svg";
import Icon3 from "../../images/enviar.svg";
import Formulario1 from "../../documentos/formulario-empresa.docx";
import {
  EmpresasContainer,
  EmpresasCard,
  EmpresasH1,
  EmpresasH2,
  EmpresasIcon,
  EmpresasP,
  EmpresasWrapper,
  EmpresasBtn,
  EmpresasBtnLink,
<<<<<<< HEAD
  Menu,
  Input,
=======
  NavLinkR,
  NavBtn
>>>>>>> 7f939d40c5f0626240adb8506130f17c180694d3
} from "./EmpresasElements";

const Empresas = ({ id }) => {
  return (
    <EmpresasContainer id={id}>

      

      <EmpresasH1>Requisitos para Empresas</EmpresasH1>
      <EmpresasWrapper>
        <EmpresasCard>
          <EmpresasIcon src={Icon1} />
          <EmpresasH2></EmpresasH2>
          <EmpresasP>
            Descargar el formulario a continuación.</EmpresasP>
        </EmpresasCard>
        <EmpresasCard>
          <EmpresasIcon src={Icon2} />
          <EmpresasH2></EmpresasH2>
          <EmpresasP>Rellenar dicho formulario y firmarlo.</EmpresasP>
        </EmpresasCard>
        <EmpresasCard>
          <EmpresasIcon src={Icon3} />
          <EmpresasH2></EmpresasH2>
          <EmpresasP>
            Presentar formulario en oficina "Convenios", de la municipalidad de Quintero.
          </EmpresasP>
        </EmpresasCard>
        <EmpresasBtn>
          <EmpresasBtnLink href= {Formulario1} download="formulario">Descargar Formulario</EmpresasBtnLink> {/*Aquí descargar a los requisitos para la empresa */}
        </EmpresasBtn>
<<<<<<< HEAD

        

=======
        <NavBtn>
          <NavLinkR to="/Solicitud">Estado de solicitud</NavLinkR>
        </NavBtn>
>>>>>>> 7f939d40c5f0626240adb8506130f17c180694d3
      </EmpresasWrapper>

      
      
    </EmpresasContainer>
  );
};

export default Empresas;
