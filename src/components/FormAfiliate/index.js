import React from "react";
import {
  ButtonStyled,
  ContainerAll,
  Content,
  H1styled,
  InputStyled,
  LabelStyled,
  Wrap,
  Redir,
  FormStyled,
  IconStyled,
} from "./FormAfiliateElements";

const FormAfiliate = () => {
  return (
    <ContainerAll>
      <Wrap>
        <IconStyled to="/">Quintero</IconStyled>
        <Content>
          <FormStyled>
            <H1styled>Formulario para Afiliación</H1styled>
            <LabelStyled>Ingrese Nombres:</LabelStyled>
            <InputStyled />
            <LabelStyled>Ingrese apellidos:</LabelStyled>
            <InputStyled />
            <LabelStyled>Rut: </LabelStyled>
            <InputStyled
              id="rut"
              placeholder="Ejemplo: 123456789"
              type="number"
            />

            <LabelStyled>Cargo en la municipalidad:</LabelStyled>
            <InputStyled />
            <ButtonStyled>Enviar</ButtonStyled>
            <Redir to="../">cancelar</Redir>
          </FormStyled>
        </Content>
      </Wrap>
    </ContainerAll>
  );
};
export default FormAfiliate;
