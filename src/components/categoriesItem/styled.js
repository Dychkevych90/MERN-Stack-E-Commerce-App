import styled from "styled-components";

const CategoryWrapItem = styled.div`
  flex: 1;
  margin: 3px;
  position: relative;
  height: 70vh;

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
        color: #fff;
        margin-bottom: 20px;
    }
  }
`;

export { CategoryWrapItem };
