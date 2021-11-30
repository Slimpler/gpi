import React from "react";
import styled from "styled-components";
import { Button } from "../Button";
import Icon from "@material-ui/icons/ArrowForward";

const InfoSectionAsociacion = ({
  heading,
  heading2,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  image,
}) => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>{heading}</h1>
          <Button to="/pagoBonos" primary="true">
            {buttonLabel}
            <Icon />
          </Button>
        </ColumnLeft>
        <ColumnRight>
          <h1>{heading2}</h1>
          <Button to="/pagoDeudas" primary="true">
            {buttonLabel}
            <Icon />
          </Button>
        </ColumnRight>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0;
  background: #31ce83;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 200px;
  background: #31ce83;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: none;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  flex-flow: column;
  width: 90%;
  height: 115%;
  margin: -5em 1em;
  border: 2px solid #000;
  border-radius: 20px;
  background: #eee;

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
  }
`;

const ColumnRight = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  flex-flow: column;
  width: 90%;
  height: 115%;
  margin: -5em 1em;
  border: 2px solid #000;
  border-radius: 20px;
  background: #eee;

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
  }
`;

export default InfoSectionAsociacion;
