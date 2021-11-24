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
import axios from "axios";
const url = "http://localhost:3001/loginAfiliado";

const Entrar = () => {
  const { push } = useHistory()
  const [rut_afiliado, setRut_afiliado] = useState("");
  const [pass_afi, setPass_afi] = useState("");

const login = () => {
  axios.post(url, {
    rut_afiliado: rut_afiliado,
    pass_afi: pass_afi,
  }).then((response) => {

    if(response.data.message) {
      console.log(response.data.message);
    }else{
      push('/perfil')
    }
    
  });
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
              onChange={(e) => {setRut_afiliado(e.target.value);}}
              type="text"  
              id='rut_afiliado'
              name='rut_afiliado'
              // minLength="7"
              // maxLength="8"
              placeholder= "11242111-1" 
              required/>

              <FormLabel htmlFor="password">Contraseña</FormLabel>
              <FormInput 
              onChange={(e) => {setPass_afi(e.target.value);}}
              name='pass_afi' 
              type="password" 
              id="pass_afi" 
              placeholder ="minimo 4 digitos y maximo 8" 
              required/>
              <FormLabel style={{ textAlign:"center"}}>
                ¿Has olvidado tu Contraseña?  
                <SimpleModal />
              </FormLabel>
              <button onClick={login}>Iniciar Sesión</button>
              <FormLabel ></FormLabel>
              <FormLabel ></FormLabel>
              <FormLabel ></FormLabel>
              
              <FormBtnWrap>
                <FormRoute to="../perfil">Afiliados</FormRoute>
              </FormBtnWrap>
              <FormLabel ></FormLabel>
              <FormLabel ></FormLabel>
              <FormLabel ></FormLabel>
              <FormBtnWrap>
                <FormRoute to="../admin">Directiva</FormRoute>
              </FormBtnWrap>
              
               {/* <FormButton type="submit">Continue</FormButton>  */}
              {/*<Text>Forgot password?</Text>}*/}
            </Form>
        </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Entrar;
