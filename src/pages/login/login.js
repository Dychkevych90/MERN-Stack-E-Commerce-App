import React from "react";

import * as Style from './styled';

const Login = () => {
  return (
    <Style.Container>
      <Style.Wrapper>
        <Style.Title>SIGN IN</Style.Title>
        <Style.Form>
          <Style.Input placeholder="username" />
          <Style.Input placeholder="password" type={ "number" } />
          <Style.Button>LOGIN</Style.Button>
          <Style.Link>DO NOT YOU REMEMBER THE PASSWORD?</Style.Link>
          <Style.Link>CREATE A NEW ACCOUNT</Style.Link>
        </Style.Form>
      </Style.Wrapper>
    </Style.Container>
  );
};

export default Login;