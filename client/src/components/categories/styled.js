import styled from 'styled-components';

const CategoryWrap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 0 20px;
    background-color: #fbf0f4;

    @media (max-width: 650px) {
      flex-direction: column;
    }
`

export {
    CategoryWrap
}