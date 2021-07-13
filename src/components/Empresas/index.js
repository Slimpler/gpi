import React from "react";
import Icon1 from "../../images/descargar.svg";
import Icon2 from "../../images/rellenar.svg";
import Icon3 from "../../images/enviar.svg";
import Icon4 from "../../images/buscar.svg";
import Formulario1 from "../../documentos/formulario-empresa.docx";
import {
  EmpresasContainer,
  EmpresasCard,
  EmpresasCardd,
  EmpresasH1,
  EmpresasH2,
  EmpresasIcon,
  EmpresasP,
  EmpresasWrapper,
  EmpresasBtn,
  EmpresasBtnLink,
  NavLinkR,
  NavBtn,
  EmpresasIconn,
  EmpresasH22,
  EmpresasWrapperr,
} from "./EmpresasElements";
import { Spa } from "@material-ui/icons";

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

      <EmpresasWrapperr>
      <EmpresasCardd>
          <EmpresasIconn src={Icon4} />
          <EmpresasH22></EmpresasH22>
          <NavBtn>
          <NavLinkR to="/Solicitud">Estado de solicitud</NavLinkR>
        </NavBtn>
        </EmpresasCardd>
      </EmpresasWrapperr>
        <EmpresasBtn>
          <EmpresasBtnLink href= {Formulario1} download="formulario"><span></span><span></span>Descargar Formulario<span></span><span></span><span></span></EmpresasBtnLink> {/*Aquí descargar a los requisitos para la empresa */}
        </EmpresasBtn>

       
      </EmpresasWrapper>
      
     
      
      
    </EmpresasContainer>
  );
};

export default Empresas;
