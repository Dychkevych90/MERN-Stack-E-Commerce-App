import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;

  @media (max-width: 700px) {
    padding: 0;
  }
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  @media (max-width: 700px) {
    padding: 20px 0;
  }
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};

  @media (max-width: 550px) {
    margin-bottom: 20px;
  }
`;

const TopTexts = styled.div``

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`;

const Info = styled.div`
  flex: 3;
  margin-right: 10px;

  @media (max-width: 1200px) {
    margin-right: 0;
  }
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  margin-bottom: 10px;

  .delete-btn {
    min-width: 50px;
    background-color: unset;
    border: none;
    border-left: 0.5px solid lightgray;
    cursor: pointer;

    @media (max-width: 400px) {
    min-width: unset;
    padding: 0 2px;
  }
  }
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 200px;
  height: 200px;

  @media (max-width: 400px) {
    display: none;
  }
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 700px) {
    padding: 10px;
    span {
      font-size: 14px;
      padding-bottom: 5px;
    }
  }
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  display: flex;
  align-items: center;

  button {
    background-color: unset;
    border: none;
    cursor: pointer;
  }

  span {
    margin: 0 10px;
  }
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;

  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: fit-content;

  @media (max-width: 1200px) {
    margin-bottom: 20px;
  }
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

export {
    Bottom,
    Button,
    Summary,
    SummaryItem,
    SummaryItemPrice,
    SummaryItemText,
    SummaryTitle,
    Hr,
    PriceDetail,
    ProductAmount,
    Product,
    ProductPrice,
    ProductSize,
    ProductAmountContainer,
    Image,
    ProductColor,
    ProductDetail,
    ProductId,
    ProductName,
    Details,
    Info,
    Title,
    Wrapper,
    Top,
    TopButton,
    TopText,
    TopTexts
}