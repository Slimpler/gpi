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
} from "./FormAfiliateElements";

import SelectContract from "./Select/index";


const FormAfiliate = () => {
    const url = "http://localhost:3001/createFormulario"
    const [values, setValues] = useState({
        rut_afiliado: "",
        nombre: "",
        telefono: "",
        celular: "",
        sueldo_afiliado: "",
        antiguedad_afiliado: "",
     });
    
     function submit(e){
      //  e.preventDefault();
       Axios.post(url, {
          rut_afiliado: values.rut_afiliado,
          nombre: values.nombre,
          telefono: values.telefono,
          celular: values.celular,
          sueldo_afiliado: values.sueldo_afiliado,
          antiguedad_afiliado: values.antiguedad_afiliado,
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
            <H1styled>Formulario para Afiliación {'\n'}</H1styled>
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
                type="tel"
                id="rut_afiliado"
                placeholder="Ejemplo: 123456789"

                required
              />
              <LabelStyled>Telefono: </LabelStyled>
              <InputStyled onChange={(e)=>handle(e)} id="telefono" value={values.telefono} type="tel" required/>
              <LabelStyled>Celular</LabelStyled>
              <InputStyled onChange={(e)=>handle(e)} id="celular" value={values.celular} type="tel" required /> 

            <LabelStyled>Sueldo Afiliado</LabelStyled>
            <InputStyled onChange={(e)=>handle(e)} id="sueldo_afiliado" value={values.sueldo_afiliado} type="text" required />
            <LabelStyled>Antiguedad Afiliado</LabelStyled>
            <InputStyled onChange={(e)=>handle(e)} id="antiguedad_afiliado" value={values.antiguedad_afiliado} type="date" required  />
          
          
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
export default FormAfiliate;
