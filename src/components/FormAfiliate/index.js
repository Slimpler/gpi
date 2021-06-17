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
  InputFile,
  ScrollContainer
} from "./FormAfiliateElements";

import SelectContract from "./Select/index";


const FormAfiliate = () => {
  return (
    
    <ContainerAll>
      <Wrap>
        <IconStyled to="/">Quintero</IconStyled>
        <Content>
          <FormStyled>
            <H1styled>Formulario para Afiliación</H1styled>
            <ScrollContainer>
              <LabelStyled>Ingrese Nombres: </LabelStyled>
            <div >
              <InputStyled required/>
            </div>
            <LabelStyled>Ingrese apellidos: </LabelStyled>
            <div >
              <InputStyled required/>
            </div>  
            <LabelStyled>Rut: </LabelStyled>
            <div>
              <InputStyled
                id="rut"
                placeholder="Ejemplo: 123456789"
                type="number"
                required
              />
            </div>
            <LabelStyled>Telefono: </LabelStyled>
            <div>
              <InputStyled type="tel" required/>
            </div>
            <LabelStyled>Direccion: </LabelStyled>
            <div>
            <InputStyled />
            </div>
            <LabelStyled>Correo Electronico: </LabelStyled>
            <div>
              <InputStyled id="email" placeholder="email@gmail.com" type="email" />
            </div>
            <LabelStyled>Departamento en la municipalidad: </LabelStyled>
            <div>
              <InputStyled />
            </div>
            <div>
              <SelectContract />
            </div>
            <LabelStyled>Motivos de afiliación: </LabelStyled>
            <div>
              <InputStyled />
            </div>
            <div>
              <InputFile type="file" required/>
            </div> 
            </ScrollContainer>
            <ButtonStyled >Enviar</ButtonStyled>
            <Redir to="../">cancelar</Redir>
          </FormStyled>
        </Content>
      </Wrap>
    </ContainerAll>
    
  );
};
export default FormAfiliate;
