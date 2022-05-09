import styled from 'styled-components';

const CheckoutWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: "";
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,.5);
    width: 100%;
    height: 100vh;
    z-index: 200;
  }
`

export {
  CheckoutWrapper
}