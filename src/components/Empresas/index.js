import React from "react";
import Icon1 from "../../images/descargar.svg";
import Icon2 from "../../images/rellenar.svg";
import Icon3 from "../../images/enviar.svg";
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
} from "./EmpresasElements";

const Empresas = ({ id }) => {
  return (
    <EmpresasContainer id={id}>
      <EmpresasH1>Requisitos para Empresas</EmpresasH1>
      <EmpresasWrapper>
        <EmpresasCard>
          <EmpresasIcon src={Icon1} />
          <EmpresasH2>Paso 1</EmpresasH2>
          <EmpresasP>
            Descargar el formulario a continuación.
          </EmpresasP>
        </EmpresasCard>
        <EmpresasCard>
          <EmpresasIcon src={Icon2} />
          <EmpresasH2>Paso 2</EmpresasH2>
          <EmpresasP>Rellenar dicho formulario y firmarlo.</EmpresasP>
        </EmpresasCard>
        <EmpresasCard>
          <EmpresasIcon src={Icon3} />
          <EmpresasH2>Paso 3</EmpresasH2>
          <EmpresasP>
            Presentar formulario en oficina "nombre de la oficina", de la municipalidad de Quintero.
          </EmpresasP>
        </EmpresasCard>
        <EmpresasBtn>
          <EmpresasBtnLink href= '../../documentos/formulario-empresa.docx' download>Descargar Formulario</EmpresasBtnLink> {/*Aquí dirigir a los requisitos para la empresa */}
        </EmpresasBtn>
      </EmpresasWrapper>
    </EmpresasContainer>
  );
};

export default Empresas;
