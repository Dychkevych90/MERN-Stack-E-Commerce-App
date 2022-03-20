import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;

  button {
    margin-top: 20px;
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
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
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
