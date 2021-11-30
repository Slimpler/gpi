import React, {useState} from "react";
import Axios from 'axios';
import emailjs from 'emailjs-com';
import { validateRUT, getCheckDigit } from 'validar-rut';

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
        nombre_func: "",
        telefono: "",
        celular: "",
        sueldo_func: "",
        antiguedad_func: "",
     });
     const[rut_func, setRutIngresado] = React.useState("");
     const[digito, setDVIngresado] = React.useState("");

    

  function changeDV(e){
    setDVIngresado(e.target.value);
  }

  function change(e){
    setRutIngresado(e.target.value);
  }
  

   function handle(e){
    const newvalues={...values}
    newvalues[e.target.id] = e.target.value
    setValues(newvalues)
    console.log(newvalues)
 }

 function enviarBackend(e){
  //  e.preventDefault();
   Axios.post(url, {
      rut_func: rut_func,
      digito: digito.toUpperCase(),
      nombre_func: values.nombre_func,
      telefono: values.telefono,
      celular: values.celular,
      sueldo_func: values.sueldo_func,
      antiguedad_func: values.antiguedad_func,
    }).then(res=> {
      console.log("Envio exitoso");
  })
}
 
 function verificarRut(){
  // e.preventDefault();
  // digito.toUpperCase();
  let result = getCheckDigit(rut_func);
  if(digito.toUpperCase() === result){
    return true
  }else{
    alert('EL RUT ' + rut_func + '-'+ digito + ' ES INVALIDO');
    return false
  }
};

  function enviarEmail(e){
  emailjs.sendForm('gmailMessage', 'template_246wjmb', e.target, 'user_GaIPXs4FUkl829Cj8QN7G')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          alert(error.text)
          alert('Formulario no pudo ser enviado :( \n Intentelo más tarde')
      });
      e.target.reset()
      alert('Formulario enviado exito! Muchas gracias');
    
};
 
 return(
    <ContainerAll>
      <Wrap>
        <IconStyled to="/">Quintero</IconStyled>
        <Content>
          <FormStyled onSubmit={(e)=> {enviarBackend(e);
          // verificarRut(e);
          if (verificarRut(e) == true){
            enviarEmail(e);
          }}}>
          <center>
            <H1styled>Formulario para Afiliación {'\n'}</H1styled>
            <H1styled> </H1styled>
            </center>
            <Grid>
              <Grid2>

              {/* Pedir Nombres y Apellidos del funcionario */}
              <LabelStyled>Nombres y Apellidos: </LabelStyled>

              <InputStyled 
              onChange={(e)=>handle(e)} 
              id="nombre_func" 
              name="nombre_func"
              value={values.nombre_func} 
              type="text" 
              required 
              size="35"/>            

              {/* Pedir el correo electronico del funcionario
              <LabelStyled>Nombres y Apellidos: </LabelStyled>

              <InputStyled 
              // onChange={(e)=>handle(e)} 
              id="nombre_func" 
              name="nombre_func"
              // value={values.nombre_func} 
              type="text" 
              required 
              size="35"/>    */}

              {/* Pedir RUT sin punto ni DV del funcionario */}             
              <LabelStyled>RUT (sin puntos ni DV): </LabelStyled>

              <InputStyled
                onChange={(e)=>change(e)}
                value={rut_func}
                type="text"
                id="rut_func"
                name="rut_func"
                minLength="7"
                maxLength="8"
                placeholder="Ejemplo: XXXXXXXX"
                required/>
            
               {/* Pedir DV del funcionario */}
               <LabelStyled>Digito verificador:</LabelStyled>
                       
                <InputStyled 
                onChange={(e)=>changeDV(e)}
                value={digito.toUpperCase()} 
                type="text"
                id="digito"
                name="digito" 
                // placeholder="0..9, k" 
                maxLength="1" 
                required />


              {/* Pedir telefono del funcionario no obligatorio */}
              <LabelStyled>Teléfono: </LabelStyled>

              <InputStyled 
              onChange={(e)=>handle(e)} 
              id="telefono" 
              name="telefono"
              value={values.telefono} 
              minLength="9" 
              maxLength="9"
              type="tel"/>
             
             {/* Pedir celular del funcionario */}
              <LabelStyled>Celular:</LabelStyled>

              <InputStyled 
              onChange={(e)=>handle(e)} 
              id="celular"
              name="celular" 
              placeholder="Ejemplo: 994589528" 
              value={values.celular} 
              type="tel"
              minLength="9"
              maxLength="9" 
              required /> 

              {/* Pedir sueldo funcionario */}
              {/* <LabelStyled>Sueldo:</LabelStyled>

              <InputStyled 
              onChange={(e)=>handle(e)} 
              id="sueldo_func" 
              name="sueldo_func"
              value={values.sueldo_func} 
              type="number" 
              min="600000" 
              placeholder="600000" 
              required /> */}
             
             {/* Pedir la antiguedad del funcionario */}
              <LabelStyled>Antiguedad:</LabelStyled>
              <InputStyled 
              onChange={(e)=>handle(e)}
              id="antiguedad_func" 
              name="antiguedad_func"
              value={values.antiguedad_func} 
              type="date" 
              max="2021-04-23" required  />

              {/* Pedir un motivo de afiliación */}
              <LabelStyled>Motivo afiliación:</LabelStyled>
              <InputStyled 
              // onChange={(e)=>emailjs(e)}
              id="motivo"
              name="motivo"
              // aria-setsize="3"
              // cols="30"
              // rows="8"
              // value={values.motivo} 
              type="text" />
          
              {/* Enviar formulario */}
              <ButtonStyled >Enviar</ButtonStyled>
              {/* Cancelar y volver atras */}
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
