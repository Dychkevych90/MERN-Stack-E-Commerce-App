import styled from 'styled-components';

import {NavLink} from "react-router-dom";

const ButtonWrap = styled.button`
  padding: 15px;
  font-size: ${ props => props.fontSize ? props.fontSize : '14px' };
  background-color: transparent;
  cursor: pointer;
  text-transform: uppercase;
  color: ${ props => props.color ? props.color : '#000' };
  background-color: ${ props => props.backgroundColor ? props.backgroundColor : 'transparent' };
  border: ${ props => props.border ? props.border : 'none' };
  width: ${ props => props.width ? props.width : 'fit-content' };
  border-radius: 8px;
`

const LinkWrap = styled(NavLink)`
  padding: 10px;
  font-size: ${ props => props.fontSize ? props.fontSize : '14px' };
  background-color: transparent;
  cursor: pointer;
  text-transform: uppercase;
  color: ${ props => props.color ? props.color : '#000' };
  background-color: ${ props => props.backgroundColor ? props.backgroundColor : 'transparent' };
  border: ${ props => props.border ? props.border : 'none' };
  width: ${ props => props.width ? props.width : 'fit-content' };
  text-decoration: none;
`

export {
  ButtonWrap,
  LinkWrap
}