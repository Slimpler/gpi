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
  ScrollContainer,
  Grid,
  Grid2
} from "./FormAfiliateElements";

import SelectContract from "./Select/index";


const FormAfiliate = () => {
  return (
    
    <ContainerAll>
      <Wrap>
        <IconStyled to="/">Quintero</IconStyled>
        <Content>
          <FormStyled>
          <center>
            <H1styled>Formulario para Afiliación {'\n'}</H1styled>
            <H1styled> </H1styled>
            </center>
            <Grid>
              <Grid2>
              <LabelStyled>Ingrese Nombres: </LabelStyled>
            <div >
              <InputStyled size="35" required/>
            </div>
            <LabelStyled>Ingrese apellidos: </LabelStyled>
            <div >
              <InputStyled size="35" required/>
            </div>  
            <LabelStyled>Rut: </LabelStyled>
            <div>
              <InputStyled
                id="rut"
                placeholder="Ejemplo: 123456789"

                required
              />
            </div>
           
            <LabelStyled>Telefono: </LabelStyled>
            <div>
              <InputStyled type="tel" required/>
            </div>
            <LabelStyled>Direccion: </LabelStyled>
            <div>
            <InputStyled size="35"/>
            </div>
            </Grid2>

            <Grid2>
            <LabelStyled>Correo Electronico: </LabelStyled>
            <div>
              <InputStyled id="email" placeholder="email@gmail.com" type="email" size="35"/>
            </div> 
            
            <LabelStyled>Departamento en la municipalidad: </LabelStyled>
            <div>
              <InputStyled size="35" />
            </div>
            <div>
              <SelectContract />
            </div>
            <LabelStyled>Motivos de afiliación: </LabelStyled>
            <div>
              <InputStyled size="35"/>
            </div>
            <div>
              <InputFile type="file" required/>
            </div> 
          
            <ButtonStyled >Enviar</ButtonStyled>
            <Redir to="../">cancelar</Redir>
            </Grid2>
            </Grid>
          </FormStyled>
        </Content>
      </Wrap>
    </ContainerAll>
    
  );
};
export default FormAfiliate;
