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
} from "./ConveniosElements";

const Convenios = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">zaaa!</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput type="email" id="email" required />
              <FormLabel htmlFor="password">Contraseña</FormLabel>
              <FormInput type="password" id="password" required />
              <FormBtnWrap>
                <FormRoute to="../">Continuar</FormRoute>
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

export default Convenios;
