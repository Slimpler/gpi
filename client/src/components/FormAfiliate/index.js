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
    const url = "http://localhost:3001/createFormAfiliacion"
    const [values, setValues] = useState({
        rut_func: "",
        nombre_func: "",
        telefono: "",
        celular: "",
        sueldo_func: "",
        antiguedad_func: "",
        error: false,
     });
    
     function submit(e){
      //  e.preventDefault();
       Axios.post(url, {
          rut_func: values.rut_func,
          nombre_func: values.nombre_func,
          telefono: values.telefono,
          celular: values.celular,
          sueldo_func: values.sueldo_func,
          antiguedad_func: values.antiguedad_func,
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
              <InputStyled onChange={(e)=>handle(e)} id="nombre_func" value={values.nombre_func} type="text" required size="35"/>
             
              <LabelStyled>RUT: </LabelStyled>
              <InputStyled
                onChange={(e)=>handle(e)}
                value={values.rut_func}
                type="text"
                id="rut_func"
                minLength="9"
                maxLength="10"
                placeholder="Ejemplo: 11111111-1"
                required
              />

              <LabelStyled>Telefono: </LabelStyled>
              <InputStyled onChange={(e)=>handle(e)} id="telefono" value={values.telefono} maxLength="12" type="tel"/>
             
              <LabelStyled>Celular:</LabelStyled>
              <InputStyled onChange={(e)=>handle(e)} id="celular" 
              placeholder="Ejemplo: 994589528" value={values.celular} type="tel" minLength="9" maxLength="9" required /> 

              <LabelStyled>Sueldo:</LabelStyled>
              <InputStyled onChange={(e)=>handle(e)} id="sueldo_func" value={values.sueldo_func} type="number" min="600000" placeholder="600000" required />
             
              <LabelStyled>Antiguedad:</LabelStyled>
              <InputStyled onChange={(e)=>handle(e)} id="antiguedad_func" value={values.antiguedad_func} type="date" max="2021-04-19" required  />
          
          
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
