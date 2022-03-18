import React from "react";

import * as Style from './styled';

const Register = () => {
  return (
    <Style.Container>
      <Style.Wrapper>
        <Style.Title>CREATE AN ACCOUNT</Style.Title>
        <Style.Form>
          <Style.Input placeholder="name" />
          <Style.Input placeholder="last name" />
          <Style.Input placeholder="username" />
          <Style.Input placeholder="email" />
          <Style.Input placeholder="password" />
          <Style.Input placeholder="confirm password" />
          <Style.Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Style.Agreement>
          <Style.Button>CREATE</Style.Button>
          <Style.Button>Sign in</Style.Button>
        </Style.Form>
      </Style.Wrapper>
    </Style.Container>
  );
};

export default Register;