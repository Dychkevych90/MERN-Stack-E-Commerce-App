import styled from 'styled-components';

const ButtonWrap = styled.button`
  padding: 10px;
  font-size: ${ props => props.fontSize ? props.fontSize : '14px' };
  background-color: transparent;
  cursor: pointer;
  text-transform: uppercase;
  color: ${ props => props.color ? props.color : '#000' };
  background-color: ${ props => props.backgroundColor ? props.backgroundColor : 'transparent' };
  border: ${ props => props.border ? props.border : 'none' }
`

export {
  ButtonWrap
}