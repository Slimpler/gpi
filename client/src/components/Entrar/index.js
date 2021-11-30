import React, {useState} from "react";
import {
  Container,
  FormContent,
  FormWrap,
  Icon,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormBtnWrap,
  FormRoute,
  A,
} from "./EntrarElements";

import SimpleModal from "./modalPassword";
import { useHistory } from "react-router";
import Cookies from 'universal-cookie';
import axios from "axios";
import { Button } from "@material-ui/core";

const Entrar = () => {
  const [body, setBody] = useState ({rut_afiliado: '', pass_afi: ''})
  const cookies = new Cookies;
  const {push} = useHistory()

  const inputChange = ({target}) =>{
    const {name, value} = target
    setBody({
      ...body,
      [name]: value
    })
  }

 
  
  const login = () => {
    axios.post("http://localhost:3001/loginAfiliado", body)
  
    .then(({data}) => {
     console.log(data)
     cookies.set("nombre",data.nombre, {path:"/"})
     cookies.set("rut_afiliado",data.rut_afiliado, {path:"/"})
     cookies.set("sueldo",data.sueldo, {path:"/"})
     cookies.set("telefono",data.telefono, {path:"/"})
     cookies.set("celular",data.celular, {path:"/"})
     cookies.set("antiguedad_afiliado",data.antiguedad_afiliado, {path:"/"})
      push('/perfil')
    })
    
    .catch(({response}) =>{
      console.log(response)
      alert("Rut y/o contraseña Invalida")
    })

    
  
};

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Quintero</Icon>
          <FormContent >
            <Form>
              <FormH1>Ingreso al sistema de la corporación</FormH1>
              <FormLabel htmlFor="email">Rut</FormLabel>
              <FormInput 
              
              type="text"  
              id='rut_afiliado'
              minLength="9"
              maxLength="10"
              placeholder= "11242111-1" 
              value = {body.rut_afiliado}
              onChange={inputChange}
              name='rut_afiliado' 
              required/>
              <FormLabel htmlFor="password">Contraseña</FormLabel>
              <FormInput
               minLength="4"
               maxLength="8"
              name='pass_afi' 
              type="password" 
              id="pass_afi" 
              placeholder ="minimo 4 digitos y maximo 8"
              
              value = {body.pass_afi}
              name='pass_afi'
              onChange={inputChange}
              required/>
              <FormLabel style={{ textAlign:"center"}}>
                ¿Has olvidado tu Contraseña?  
                <SimpleModal />
              </FormLabel>
              <Button 
              fullWidth
              variant ='contained'
              color = 'primary'
              onClick = {login}>
                Sesión Afiliado
                </Button>
              <FormLabel ></FormLabel>
              <FormLabel ></FormLabel>
              <FormLabel ></FormLabel>
              <FormBtnWrap>
                <FormRoute to="../admin">Directiva</FormRoute>
              </FormBtnWrap>
              <FormLabel ></FormLabel>
              <FormLabel ></FormLabel>
              <FormLabel ></FormLabel>
             
              
               {/* <FormButton type="submit">Continue</FormButton>  */}
              {/*<Text>Forgot password?</Text>}*/}

              <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>

   
            </Form>
        </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Entrar;
