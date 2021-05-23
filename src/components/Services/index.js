import React from "react";
import Icon1 from "../../images/svg-2.png";
import Icon2 from "../../images/svg-1.png";
import Icon3 from "../../images/svg-3.svg";
import {
  ServicesContainer,
  ServicesCard,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElements";

const Services = ({ id }) => {
  return (
    <ServicesContainer id={id}>
      <ServicesH1>Convenios</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Familia Quinerana</ServicesH2>
          <ServicesP>
            Ayudemos a los nuestros y crezcamos
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Lo que necesitas</ServicesH2>
          <ServicesP>
            Accede a beneficios y deja de preocuparte
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Tramites a traves del municipio</ServicesH2>
          <ServicesP>
            Nosotros llevamos a cabo los tramites necesarios para tu tranquilidad
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
