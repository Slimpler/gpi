import React from "react";
import {
  Container,
  FormContent,
  FormWrap,
  Icon,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  FormBtnWrap,
  FormRoute
  ,
  Text,
} from "./EntrarElements";

const Entrar = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Quintero</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Ingreso al sistema de la corporación</FormH1>
              <FormLabel htmlFor="email">Rut</FormLabel>
              <FormInput type="email" id="email" placeholder="Ej: 13.450.233-2" required />
              <FormLabel htmlFor="password">Contraseña</FormLabel>
              <FormInput type="password" id="password" placeholder ="minimo 4 digitos y maximo 8" required />
              <FormBtnWrap>
                <FormRoute to="../perfil">Afiliados</FormRoute>
              </FormBtnWrap>
              <FormLabel ></FormLabel>
              <FormLabel ></FormLabel>
              <FormLabel ></FormLabel>
              <FormBtnWrap>
<<<<<<< HEAD
                <FormRoute to="../admin">admin</FormRoute>
=======
                <FormRoute to="../admin">Directiva</FormRoute>
>>>>>>> 096f7ca2fffd7b18b80654e65af02048580e5d2d
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
