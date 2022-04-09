import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import * as DefaultUserAction from '../../redux-store/action';

import ServerSettings from '../../services/serverSettings';

import * as Style from './styled';
import MainInput from "../../components/layout/mainInput/mainInput";

const Login = () => {
  const [disabled, setDisabled] = useState( true )
  const [validation, setValidation] = useState( false )

  const dispatch = useDispatch();

  const onLogin = async ( e ) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password =  e.target.password.value;

    const server = new ServerSettings();

    try {
      const res = await axios.post(`${server.getApi()}auth/login`, { username, password } );
      if ( res.data ) {
        dispatch( DefaultUserAction.setUser( res.data) );
        dispatch( DefaultUserAction.isLoadingSuccessful( true ) );
        window.localStorage.setItem('token', JSON.stringify( { accessToken: res.data.accessToken } ) );
      }
    } catch (error) {
      console.log(error, 'wrong credentials!')
      setValidation( true )
    }
  };

  return (
    <Style.Container>
      <Style.Wrapper>
        <Style.Title>SIGN IN</Style.Title>
        <Style.Form onSubmit={ ( e ) => onLogin( e ) }>
  
          <MainInput
            label={'username'}
            name={'username'}
            validation={ validation }
          />

          <MainInput
            label={'password'}
            name={'password'}
            errorText={'wrong credentials!'}
            validation={ validation }
          />

          <Style.Button
            type={'submit'}
          >
            LOGIN
          </Style.Button>

          <Style.Link to={'/'}>DO NOT YOU REMEMBER THE PASSWORD?</Style.Link>
          <Style.Link to={ "/registration" }>CREATE A NEW ACCOUNT</Style.Link>
        </Style.Form>
      </Style.Wrapper>
    </Style.Container>
  );
};

export default Login;