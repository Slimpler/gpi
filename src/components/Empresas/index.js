import React from "react";
import Icon1 from "../../images/svg-2.png";
import Icon2 from "../../images/svg-1.png";
import Icon3 from "../../images/svg-3.svg";
import {
  EmpresasContainer,
  EmpresasCard,
  EmpresasH1,
  EmpresasH2,
  EmpresasIcon,
  EmpresasP,
  EmpresasWrapper,
} from "./EmpresasElements";

const Empresas = ({ id }) => {
  return (
    <EmpresasContainer id={id}>
      <EmpresasH1>Requisitos para ser parte de la corporación</EmpresasH1>
      <EmpresasWrapper>
        <EmpresasCard>
          <EmpresasIcon src={Icon1} />
          <EmpresasH2>Familia Quinterana</EmpresasH2>
          <EmpresasP>
            Ayudemos a los nuestros y crezcamos
          </EmpresasP>
        </EmpresasCard>
        <EmpresasCard>
          <EmpresasIcon src={Icon2} />
          <EmpresasH2>Lo que necesitas</EmpresasH2>
          <EmpresasP>Accede a beneficios y deja de preocuparte</EmpresasP>
        </EmpresasCard>
        <EmpresasCard>
          <EmpresasIcon src={Icon3} />
          <EmpresasH2>Tramites a traves del municipio</EmpresasH2>
          <EmpresasP>
            Nosotros llevamos a cabo los tramites necesarios para tu tranquilidad
          </EmpresasP>
        </EmpresasCard>
      </EmpresasWrapper>
    </EmpresasContainer>
  );
};

export default Empresas;
