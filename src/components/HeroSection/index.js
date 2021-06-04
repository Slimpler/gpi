import React, { useState } from "react";
import { Button } from "../ButtonElement";
import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>LO MEJOR PARA NUESTROS TRABAJADORES</HeroH1>
        <HeroP>
          Afiliate ahora para estar al tanto de todos los beneficios
          que tenemos para entregarte.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="empresas"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary={true}
            dark={true}
            smooth={true}
            duration={1500}
            spy={true}
            exact="true"
          >
            Informáte {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
