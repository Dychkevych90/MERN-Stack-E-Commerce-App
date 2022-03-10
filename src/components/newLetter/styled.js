import styled from "styled-components";

const NewsLetterWrap = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .title {
    font-size: 70px;
    margin-bottom: 20px;
  }
  .desc {
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
  }
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  border-radius: 4px;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  outline: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export { NewsLetterWrap, Input, InputContainer, Button };
