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
import Navbar from "../Navbar";



const FormAfiliate = () => {
  return (
   
    <ContainerAll>
      <Wrap>
        <Content>
          <FormStyled>
            <H1styled>Formulario para ingresar convenio al sistema</H1styled>
            <ScrollContainer>
              <LabelStyled>Nombre del convenio:</LabelStyled>
            <div >
              <InputStyled />
            </div>

            <LabelStyled>Nombre de la empresa: </LabelStyled>
            <div >
              <InputStyled />
            </div>

            <LabelStyled>Descripción: </LabelStyled>
            <div>
              <InputStyled/>
            </div>

            <LabelStyled>Tipo: </LabelStyled>
            <div>
              <InputStyled
                id="tipo"
                placeholder="Ej: Salud, estética, deporte"
                />
            </div>

            <LabelStyled>Teléfono: </LabelStyled>
            <div>
              <InputStyled
              />
            </div>

            <LabelStyled>Dirección: </LabelStyled>
            <div>
            <InputStyled />
            </div>
            <LabelStyled>Correo Electrónico: </LabelStyled>
            <div>
              <InputStyled />
            </div>
            <LabelStyled>Ingrese la fecha de creación: </LabelStyled>
            <div>
              <InputStyled
                id="fecha"
                placeholder="Formato: Día-Mes-Año  "
                type="date"
              />
            </div>     
            <div>
            <LabelStyled>Ingrese una imagen o logo del convenio: </LabelStyled>
            <LabelStyled> </LabelStyled>
              <InputFile type="file"/>
            </div>
            <LabelStyled>Ingrese documentación: {'\n'} </LabelStyled>
            {'\n'} 
            <div>
              <InputFile type="file"/>
            </div> 
            </ScrollContainer>
            <div>
              <center>
            <ButtonStyled >Crear convenio</ButtonStyled>
            </center>
            </div>
            <div>
              <center>
            <Redir to="../convenios1">cancelar</Redir>
            </center>
            </div>
          </FormStyled>
        </Content>
      </Wrap>
    </ContainerAll>
    
  );
};
export default FormAfiliate;
