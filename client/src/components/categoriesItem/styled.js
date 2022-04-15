import styled from "styled-components";
import { mobile } from "../../responsive";

const CategoryWrapItem = styled.div`
  flex: 1;
  margin: 3px;
  position: relative;
  height: 50vh;

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "20vh" })}
  }

  .info {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
        color: ${props => props.bannerStyles ? '#000' : '#fff'};
        margin-bottom: 20px;
        white-space: nowrap;

        @media (max-width: 800px) {
          font-size: 20px;
        }
    }
  }
`;

export { CategoryWrapItem };
