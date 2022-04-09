import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../responsive";
import bg from '../../media/image/hu477.jpg'


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url( ${bg} );
  background-size: cover;
  background-position: center;
  background-color: #008080bf;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  min-width: 350px;
  max-width: 500px;
  border-radius: 10px;
  box-shadow: 0px 5px 19px -2px rgba(0, 0, 0, 0.78);
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  button {
    width: 100%;
    border: none;
    padding: 15px 20px;
    background-color: #217417b5;
    border-radius: 4px;
    font-size: 16px;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
  }

  .bottom-section {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding-top: 20px;
  }
`;

const Input = styled.input`
  flex: 1;
  width: 100%;
  padding: 10px;
  outline: none;
  padding: 15px;
  height: 50px;
  margin-bottom: 20px;
  border: 2px solid #DDE1E6;
  border-radius: 8px;
`;

const Button = styled(NavLink)`
  width: fit-content;
  border: none;
  color: #000;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  margin-left: 20px;
`;

export { Button, Input, Wrapper, Title, Form, Container };
