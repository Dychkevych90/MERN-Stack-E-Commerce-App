import styled from "styled-components";
import { mobile } from "../../responsive";

const CategoryWrapItem = styled.div`
  flex: 1;
  margin: 3px;
  position: relative;
  height: ${props => props.bannerStyles ? '300px' : '70vh'};
  margin-right: ${props => props.bannerStyles ? '50px' : '3px'};
  

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${props => props.bannerStyles ? '8px' : 'none'};
    ${mobile({ height: "20vh" })}
  }

  .info {
    position: absolute;
    left: ${props => props.bannerStyles ? '20px' : '50%'};
    top: ${props => props.bannerStyles ? 'none' : '50%'};
    bottom: ${props => props.bannerStyles ? '20px' : 'none'};
    transform: ${props => props.bannerStyles ? 'unset' : 'translate(-50%, -50%)'};
    display: flex;
    flex-direction: column;
    align-items: ${props => props.bannerStyles ? 'flex-start' : 'center'};

    .title {
        color: ${props => props.bannerStyles ? '#000' : '#fff'};
        margin-bottom:  ${props => props.bannerStyles ? '0' : '20px'};
        padding-left: ${props => props.bannerStyles ? '10px' : 'none'};
        white-space: nowrap;

        @media (max-width: 800px) {
          font-size: 20px;
        }
    }
  }
`;

export { CategoryWrapItem };
