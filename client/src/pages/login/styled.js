import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {mobile} from "../../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: teal;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  min-width: 350px;
  border-radius: 10px;
  box-shadow: 0px 5px 19px -2px rgba(0,0,0,0.78);
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
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: #217417b5;
  border-radius: 4px;
  font-size: 16px;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled(NavLink)`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
  color: #000;
`;

export {
    Link,
    Button,
    Title,
    Form,
    Wrapper,
    Container
}