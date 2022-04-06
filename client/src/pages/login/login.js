import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { setUser } from '../../redux-store/action/index';

import ServerSettings from '../../services/serverSettings';

import * as Style from './styled';

const Login = () => {
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();

    const username = e.target.username.value
    const password =  e.target.password.value

    const server = new ServerSettings();

    try {
      const res = await axios.post(`${server.getApi()}auth/login`, { username, password });
      dispatch( setUser(res.data) )
      window.localStorage.setItem('token', res.data.accessToken)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <Style.Container>
      <Style.Wrapper>
        <Style.Title>SIGN IN</Style.Title>
        <Style.Form onSubmit={ ( e ) => onLogin( e ) }>
          <Style.Input
            name="username"
            placeholder="username"
          />
          <Style.Input
            placeholder="password"
            name="password"
            type="password"
          />
          <Style.Button
            type={'submit'}
          >
            LOGIN
          </Style.Button>

          <Style.Link to={ "/" }>DO NOT YOU REMEMBER THE PASSWORD?</Style.Link>
          <Style.Link to={ "/registration" }>CREATE A NEW ACCOUNT</Style.Link>
        </Style.Form>
      </Style.Wrapper>
    </Style.Container>
  );
};

export default Login;