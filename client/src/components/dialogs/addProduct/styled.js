import styled from 'styled-components';

const AddProductModal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,.8);
  z-index: 100;
  flex-direction: column;

  form {
    max-width: 600px;
    width: 100%;
    background-color: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;

    input {
      margin-bottom: 20px;
      height: 40px;
    }
    button {
      height: 40px;
    }
  }
`

export {
  AddProductModal
}