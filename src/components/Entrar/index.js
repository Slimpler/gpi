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
          <Icon to="/">Quintero </Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Ingreso al sistema de la corporación</FormH1>
              <FormLabel htmlFor="email">Rut</FormLabel>
              <FormInput type="email" id="email" required />
              <FormLabel htmlFor="password">Contraseña</FormLabel>
                <FormInput type="password" id="password" required />
              <FormBtnWrap>
                <FormRoute to="../perfil">Afiliados</FormRoute>
              </FormBtnWrap>
              <FormLabel ></FormLabel>
              <FormLabel ></FormLabel>
              <FormLabel ></FormLabel>
              <FormBtnWrap>
                <FormRoute to="../funcionarios">Funcionarios</FormRoute>
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
