import styled from "styled-components";

const LogOutDialogWrapper = styled.div`
  width: 450px;
  padding: 10px;
  min-height: 100xp;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  min-height: 200px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 18px -4px #000000;

  .caption {
    font-size: 22px;
    margin-top: 20px;
  }

  .button_section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    button {
      margin-right: 10px;
      width: 50%;
      min-height: 40px;
      cursor: pointer;
    }

    button:last-child {
      margin-right: 0;
    }
  }
`;

export { LogOutDialogWrapper };
