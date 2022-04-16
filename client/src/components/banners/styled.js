import styled from 'styled-components';

const CategoryWrap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 0 20px;
    margin: 20px 0;
    //background-color: #fbf0f4;

    & div:last-child {
      margin-right: 0;
    }

    & .category-item:nth-child(2) {
      .title {
        color: #fff;
      }
    }

    @media (max-width: 650px) {
      flex-direction: column;
    }
`

export {
    CategoryWrap
}