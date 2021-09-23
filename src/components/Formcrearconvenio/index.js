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
} from "./FormCrearConvenioElements";
import Navbar from "../Navbar";



const FormAfiliate = () => {
  return (
    
    <ContainerAll>
      <Wrap>
        <Content>
          <FormStyled> 
            <center>
            <H1styled>Formulario para ingresar convenio al sistema {'\n'}{'\n'} </H1styled>
            <H1styled> </H1styled>
            </center>
            <Grid>
              <Grid2>
              <LabelStyled>Nombre del convenio:</LabelStyled>
            <div >
              <InputStyled type="text" minlength="0" maxlength="0" size="35" required/>
            </div>

            <LabelStyled>Nombre de la empresa: </LabelStyled>
            <div >
              <InputStyled type="text" minlength="0" maxlength="0" size="35"/>
            </div>

            <LabelStyled>Descripción: </LabelStyled>
            <div>
            <InputStyled type="text" minlength="0" maxlength="0" size="35"/>
            </div>  
           
            
            <LabelStyled>Tipo: </LabelStyled>
            <div>

            <select name="select"> 
              <option value="value1"selected>Elige una opción</option>
              <option value="value1">Salud</option>
              <option value="value2">Estética</option>
              <option value="value3">Deporte</option>
              
            </select>
              
              {/* <InputStyled
                id="tipo"
                placeholder="Ej: Salud, estética, deporte"
                /> */}

            </div>

            <LabelStyled>Teléfono: </LabelStyled>
            <div>
              <InputStyled type="text" minlength="0" maxlength="0" size="35"/>
            </div>
             </Grid2>

            <Grid2>
              <LabelStyled>Dirección: </LabelStyled>
            <div>
              <InputStyled type="text" minlength="0" maxlength="0" size="35"/>
            </div>
            <LabelStyled>Correo Electrónico: </LabelStyled>
            <div>
              <InputStyled type="text" minlength="0" maxlength="0" size="35"/>
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
              {'\n'} 
            </div>
            <LabelStyled>Ingrese documentación: {'\n'} </LabelStyled>
            {'\n'} 
            <div>
              <InputFile type="file"/>
            </div> 
           
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
            </Grid2>
            </Grid>
          </FormStyled>
        </Content>
      </Wrap>
    </ContainerAll>
    
  );
};
export default FormAfiliate;
