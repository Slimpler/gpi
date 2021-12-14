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
  const [body, setBody] = useState ({rut_dir: '', pass_dir: ''})
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
    axios.post("http://localhost:3001/loginDirectiva", body)
  
    .then(({data}) => {
     console.log(data)
     cookies.set("nombre_dir",data.nombre_dir, {path:"/"})
     cookies.set("rut_dir",data.rut_dir, {path:"/"})
     cookies.set("tipo_directiva",data.tipo_directiva, {path:"/"})
      push('/admin')
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
              id='rut_dir'
              minLength="9"
              maxLength="10"
              placeholder= "11242111-1" 
              value = {body.rut_dir}
              onChange={inputChange}
              name='rut_dir' 
              required/>
              <FormLabel htmlFor="password">Contraseña</FormLabel>
              <FormInput
               minLength="4"
               maxLength="8"
              
              type="password" 
              id="pass_dir" 
              placeholder ="minimo 4 digitos y maximo 8"
              
              value = {body.pass_dir}
              name='pass_dir'
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
                Sesión Directiva
                </Button>
              <FormLabel ></FormLabel>
              <FormLabel ></FormLabel>
              <FormLabel ></FormLabel>
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