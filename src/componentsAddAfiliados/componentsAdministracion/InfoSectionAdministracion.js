import React from "react";
import styled from "styled-components";
import { Button } from "../Button";
import Icon from '@material-ui/icons/ArrowForward';

const InfoSectionAdministracion = ({
  heading,
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
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <Button to="/AdministracionAfiliados" primary="true">
            {buttonLabel}
            <Icon/>
          </Button>
        </ColumnLeft>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 6rem 0;
  background: #31ce83;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: none;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1rem 2rem;
  flex-flow: column;
  width: 90%;
  height: 96%;
  margin: 15px;
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

/* const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "0" : "2")};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: 2;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 100%;
      height: 100%;
    }
  }
`; */

export default InfoSectionAdministracion;
