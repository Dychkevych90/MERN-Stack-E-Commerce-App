import React from "react";

import MainButton from '../../components/layout/button/button';
import MainInput from '../../components/layout/mainInput/mainInput';

import * as Style from './styled';

const Register = () => {
  return (
    <Style.Container>
      <Style.Wrapper>
        <Style.Title>CREATE AN ACCOUNT</Style.Title>
        <Style.Form>
        
          <MainInput
            label={'username'}
            name={'username'}
          />

          <MainInput
            label={'password'}
            name={'password'}
            type={'password'}
          />

          <MainInput
            label={'email'}
            name={'email'}
          />

          <MainInput
            label={'confirm password'}
            name={'confirm password'}
          />
          
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