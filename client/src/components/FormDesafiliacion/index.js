import React, {useState, useEffect} from "react";
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


const FormDesafiliacion = () => {

  const [datos, setDatos] = useState([]);
  useEffect(() => {
    Axios({
      url: "http://localhost:3001/datosAfiliadoForm",
    })
    .then((response) => {
      setDatos(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [setDatos]);

//-----------------------------------------------------------------//

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
            <H1styled>Formulario para Desafiliación {'\n'}</H1styled>
            
            </center>
            <Grid>
              <Grid2>
              {datos.map((item) => (
                <div >

                  {/* Cargar Nombre del afiliado*/}
                <div>
                  <LabelStyled>Nombres y Apellidos: </LabelStyled>
                  <InputStyled onChange={(e)=>handle(e)}
                   id="nombre" 
                   value={item.nombre}
                   type="text" 
                   required size="35" required/>
                </div>

                   {/* ///////////////////////////////////// */}

                   {/* Cargar Rut del afiliado*/}
                <div> 
                  <LabelStyled>RUT: </LabelStyled>
                  <InputStyled
                   onChange={(e)=>handle(e)}
                   id="rut"
                   value={item.rut_afiliado}
                   type="text"
                  required/>
                </div>

                   {/* ///////////////////////////////////// */}

                   {/* Cargar telefono del afiliado*/}
                <div> 
                  <LabelStyled>Teléfono: </LabelStyled>
                  <InputStyled onChange={(e)=>handle(e)}
                  id="telefono"
                  value={item.telefono}
                  type="tel" />
                </div>

                  {/* ///////////////////////////////////// */}

                   {/* Cargar celular del afiliado*/}
                <div> 
                  <LabelStyled>Celular:</LabelStyled>
                  <InputStyled onChange={(e)=>handle(e)}
                  id="celular" 
                  value= {item.celular}
                  type="tel" required /> 
                </div>

                 {/* ///////////////////////////////////// */}

                   {/* Cargar fecha de afiliacion*/}
                <div>
                   <LabelStyled>Fecha afiliación:</LabelStyled>
                   <InputStyled onChange={(e)=>handle(e)}
                   id="antiguedad_afiliado"
                   value={item.antiguedad_afiliado.substring(0,10).toString()}
                   
                  required/>
                </div>
                </div>
              ))}
            
              {/* Pedir el motivo de la desafiliación */}
              <LabelStyled>Motivo desafiliación:</LabelStyled>
              <InputStyled onChange={(e)=>handle(e)}
              id="motivo" 
              value={values.motivo} 
              type="text" />
          
          {/* Enviar formulario de desafiliación */}
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
