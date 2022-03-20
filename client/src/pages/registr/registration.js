import React from "react";

import MainButton from '../../components/layout/button/button';

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
          <Style.Input placeholder="password" type={ "number" } />
          <Style.Input placeholder="confirm password" type={ "number" } />
          
          <MainButton
            text={ "CREATE" }
            width={ "100%" }
            backgroundColor={ "teal" }
            color={ "#fff" } 
          />

          <div className={ "bottom-section" }>
            <span>Do you have an account?</span>
            <Style.Button to={ "/login" }>Sign in</Style.Button>
          </div>
        </Style.Form>
      </Style.Wrapper>
    </Style.Container>
  );
};

export default Register;