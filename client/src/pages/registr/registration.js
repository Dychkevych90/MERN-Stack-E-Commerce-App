import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import MainButton from '../../components/layout/button/button';
import MainInput from '../../components/layout/mainInput/mainInput';

import * as DefaultUserAction from '../../redux-store/action';

import ServerSettings from "../../services/serverSettings";

import * as Style from './styled';

const Register = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const dispatch = useDispatch();

  const changeHandler = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const registrationNewUser = async ( e ) => {
    e.preventDefault();

    const server = new ServerSettings();

    try {
      const res = await axios.post(`${server.getApi()}auth/register`, { ...form } );
      if(res.data) {
        dispatch( DefaultUserAction.setUser(res.data) )
        dispatch( DefaultUserAction.isLoadingSuccessful( true ) );
        window.localStorage.setItem('token', JSON.stringify( { accessToken: res.data.accessToken } ) );
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Style.Container>
      <Style.Wrapper>
        <Style.Title>CREATE AN ACCOUNT</Style.Title>
        <Style.Form onSubmit={ ( e ) => registrationNewUser( e ) }>
        
          <Style.Input
            label={'username'}
            placeholder={'username'}
            name={'username'}
            onChange={ changeHandler }
            autoComplete={'off'}
            required
          />

          <Style.Input
            label={'password'}
            placeholder={'password'}
            name={'password'}
            type={'e'}
            onChange={ changeHandler }
            autoComplete={'off'}
            required
          />

          <Style.Input
            label={'email'}
            placeholder={'email'}
            name={'email'}
            onChange={ changeHandler }
            autoComplete={'off'}
            required
          />

        <MainButton
            text={ "CREATE" }
            width={ "100%" }
            backgroundColor={ "teal" }
            color={ "#fff" }
            type={ 'submit' }
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