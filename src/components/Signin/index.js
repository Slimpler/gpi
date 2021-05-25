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
} from "./SigninElements";

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Quintero</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput type="email" id="email" required />
              <FormLabel htmlFor="password">Contraseña</FormLabel>
              <FormInput type="password" id="password" required />
              <FormBtnWrap>
                <FormRoute to="../Convenios">Afiliados</FormRoute>
              </FormBtnWrap>
              <FormBtnWrap>
                <FormRoute to="../funcionarios">Funcionarios</FormRoute>
              </FormBtnWrap>
               {/* <FormButton type="submit">Continue</FormButton>  */}
              <Text>Forgot password?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
