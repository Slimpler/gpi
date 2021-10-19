import React, {useState} from "react";
import Axios from 'axios';
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
} from "./FormDesafiliacionElement";

import SelectContract from "./Select/index";


const FormDesafiliacion = () => {
    const url = "http://localhost:3001/createFormDesafiliacion"
    const [values, setValues] = useState({
        rut_afiliado: "",
        nombre: "",
        telefono: "",
        celular: "",
        antiguedad_afiliado: "",
        motivo: "",
     });
    
     function submit(e){
      //  e.preventDefault();
       Axios.post(url, {
          rut_afiliado: values.rut_afiliado,
          nombre: values.nombre,
          telefono: values.telefono,
          celular: values.celular,
          antiguedad_afiliado: values.antiguedad_afiliado,
          motivo: values.motivo,
       }).then(res=> {
           console.log("Envio exitoso");
       })
   }

   function handle(e){
    const newvalues={...values}
    newvalues[e.target.id] = e.target.value
    setValues(newvalues)
    console.log(newvalues)
 }
 return(
    <ContainerAll>
      <Wrap>
        <IconStyled to="/">Quintero</IconStyled>
        <Content>
          <FormStyled onSubmit={(e)=> submit(e)}>
          <center>
            <H1styled>Formulario para Desafiliacion {'\n'}</H1styled>
            <H1styled> </H1styled>
            </center>
            <Grid>
              <Grid2>

              <LabelStyled>Nombres y Apellidos: </LabelStyled>
              <InputStyled onChange={(e)=>handle(e)} id="nombre" value={values.nombre} type="text" required size="35"/>
              
              <LabelStyled>RUT: </LabelStyled>
              <InputStyled
                onChange={(e)=>handle(e)}
                value={values.rut_afiliado}
                type="text"
                id="rut_afiliado"
                minLength="9"
                maxLength="10"
                placeholder="Ejemplo: 11111111-1"
                required
              />
              <LabelStyled>Telefono: </LabelStyled>
              <InputStyled onChange={(e)=>handle(e)} id="telefono" value={values.telefono} maxLength="12" type="tel" />
              
              <LabelStyled>Celular:</LabelStyled>
              <InputStyled onChange={(e)=>handle(e)} id="celular" placeholder="Ejemplo: 994589528" value={values.celular} minLength="9" maxLength="9" type="tel" required /> 

              <LabelStyled>Fecha ingreso en la afiliacion</LabelStyled>
              <InputStyled onChange={(e)=>handle(e)} id="antiguedad_afiliado" value={values.antiguedad_afiliado} type="date" max="2021-04-19" required/>
              
              <LabelStyled>Razon De Desafiliacion</LabelStyled>
              <InputStyled onChange={(e)=>handle(e)} id="motivo" value={values.motivo} type="text" />
          
          
            <ButtonStyled >Enviar</ButtonStyled>
            <Redir to="../" style={{ textDecoration: 'none' }}>Cancelar</Redir>
            </Grid2>
            </Grid>
          </FormStyled>
        </Content>
      </Wrap>
    </ContainerAll>
    
  );
};
export default FormDesafiliacion;
