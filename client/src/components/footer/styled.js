import styled from "styled-components";
import { mobile } from '../../responsive';

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  transition: .5s;

  &:hover {
    transition: .5s;
    transform: scale(1.2);
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Bottom = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  ${mobile({ backgroundColor: "#fff8f8" })}

  .footer-item {
    margin-right: 40px;
    min-width: 400px;
  }
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;


export {
  Payment,
  Center,
  ContactItem,
  Bottom,
  Left,
  List,
  ListItem,
  Title,
  Desc,
  SocialContainer,
  SocialIcon,
  Logo
}