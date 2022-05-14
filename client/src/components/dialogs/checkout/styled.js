import styled from "styled-components";

const CheckoutWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  max-width: 500px;
  width: 100%;
  max-height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 1rem;
  border-radius: 10px;
  box-shadow: 3px 3px 40px #545454e8;
  z-index: 201;

  & .background {
    content: '';
    position: fixed;
    width: 100%;
    min-height: 100vh;
    background-color: rgba(0,0,0,.4);
    z-index: 200;
  }

  /* .logo {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    min-width: 100px;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    background: teal;
    z-index: 222222222;
    border: 3px solid #eeee73;
    display: flex;
    align-items: center;
    justify-content: center;
  } */

  .caption {
    padding: 60px 5px 20px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    //border-bottom: 1px solid #333;
    background-color: #060a24;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-image: url(https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
    background-size: cover;
    background-position: center;

    .title {
      color: #fff;
      font-size: 30px;
    }

    .close {
      position: absolute;
      top: 10px;
      right: 10px;
      border: none;
      background-color: unset;
      font-size: 15px;
      font-weight: bold;
      color: #fff;
      cursor: pointer;
    }

    .total-price {
      color: #fff;
    }
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 15px 0;
    justify-content: space-between;

    input {
      /* width: 100%;
      padding: 5px 15px;
      margin-bottom: 5px;
      border-radius: 5px;
      border: 1px solid #ccc;
      height: 40px;
      font-size: 15px;
      text-transform: uppercase; */
      margin: 1rem 0;
      padding: 0.75rem 0.5rem;
      outline: none;
      border: 1px solid #ccc;
      border-radius: 5px;
      position: relative;
      width: 100%;
    }

    /* & input:last-child {
      margin-bottom: 0;
    } */
  }

  .back  {
    width: 20px;
    height: 20px;
    margin: 0;
    display: flex;
    align-items: center;
    max-height: 20px;
    justify-content: center;
    border-radius: 2px;
    padding: 7px;
  }
`;

const CardWrapper = styled.div`
  /* background: #fff;
  max-width: 500px;
  max-height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 3px 3px 40px #545454e8; */
  position: relative;

  & input,
  & select {
    margin: 1rem 0;
    padding: 0.75rem 0.25rem;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 5px;
    position: relative;
    width: 100%;
  }

  #card {
    height: 200px;
    width: 100%;
    max-width: 385px;
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 15px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url("https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
    background-size: cover;
    background-position: center;
    color: #eee;
    filter: drop-shadow(1px 3px 10px #222);

    animation: fadeIn 0.2s linear 1;

    & .sticker {
      width: 50px;
      height: 40px;
      background-image: url("https://images.pexels.com/photos/728471/pexels-photo-728471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
      background-position: center;
      background-size: cover;
      object-fit: contain;
      border-radius: 5px;
    }

    & .logo {
      max-width: 60px;
    }

    & .body {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height: 60%;
    }

    & .footer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 75px;
    }

    & .header {
      display: flex;
      justify-content: space-between;
      height: 70px;
      background-color: unset;
    }
  }

  @keyframes fadeIn {
    from {
      top: -150px;
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .input-container {
    position: relative;
    font-size: 1rem;
    color: #333;
  }

  .input-grp {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 0.5rem;
  }

  button {
    width: 100%;
    padding: 1rem 0.5rem;
    margin-top: 1.5rem;
    outline: none;
    border: none;
    border-radius: 7px;
    background-color: #060a24;
    color: #fff;
    letter-spacing: 1px;
    font-size: 1.25rem;
    cursor: pointer;
    position: relative;
    z-index: 9;
  }

  h4 {
    color: #555;
    font-size: 0.9rem;
  }

  .mt {
    margin-top: 8rem;
  }
`;

export { CheckoutWrapper, CardWrapper };
