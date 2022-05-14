import styled, { keyframes } from "styled-components";

const SmallDialogWrapper = styled.div`
  background-color: #fff;
  height: 50px;
  width: 300px;
  position: fixed;
  right: -150%;
  top: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 0px 5px 19px -2px rgba(0,0,0,0.78);
  //animation: transform 5s ease;

  /* @keyframes transform {
    0% {
      right: -150%;
    }
    25%{
      right: -100%;
    }
    50% {
      right: 0;
    }
    75%{
      right: 0;
    }
    100% {
      right: -150%;
    }
  } */
`;

export { SmallDialogWrapper };
