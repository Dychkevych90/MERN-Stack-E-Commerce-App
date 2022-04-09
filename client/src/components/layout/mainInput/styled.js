import styled from "styled-components";

const Wrapper = styled.div`
  width: ${props => props.width ? props.width + 'px' : '100%'};
  border-radius: 8px;
  height: 50px;
  min-height: 50px;
  position: relative;
  margin-bottom: 20px;
  cursor: pointer;
  border: 2px solid #DDE1E6;

  .label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;
    background-color: transparent;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: ${props => props.ValiddationBg ? 'red' : '#697077'};
    opacity: 0.8;
    transition: .3s;
    z-index: 1;
    &.active {
      top: 15px;
      font-size: 13px;
      font-weight: 600;
      line-height: 18px;
      color: ${props => props.grey ? '#697077' : '#217417b5'};
      opacity: 0.8;
    }
  }

  input {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    padding: 10px 16px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.01em;
    color: #111111;
    opacity: 0.8;
    padding-top: ${props => props.label && '20px'};
    outline: none;
  }
  
  &.valid {
    background: linear-gradient(0deg, rgba(218, 30, 40, 0.1), rgba(218, 30, 40, 0.1)), #FFFFFF;
    border: 1px solid rgba(218, 30, 40, 0.1);
    .label {
      color: red;
    }
  }
  .errorText {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -0.01em;
    color: #DA1E28;
    opacity: 0.8;
    margin-top: 3px;
  }
`

export {
  Wrapper
}