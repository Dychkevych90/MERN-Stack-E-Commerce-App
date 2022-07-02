import styled from 'styled-components';

const FavoriteProductsDialogsWrapper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0px 5px 19px -2px  rgba(0,0,0,0.78);
  position: absolute;
  right: 0;
  top: 30px;
  min-width: 300px;
  overflow: auto;
  max-height: 273px;
  
  &::-webkit-scrollbar {
    display: none;
  }
`

const FavoriteItemWrap = styled.div`
  display: flex;
  align-items: center;
  min-height: 20px;
  padding: 5px;
  width: 100%;
  min-height: 55px;
  justify-content: space-between;
  border: 1px solid lightgray;
  border-radius: 5px;
  margin-bottom: 10px;

  .image {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }

  .title {
    width: 100%;
    text-align: left;
  }

  .rm-item {
    background-color: transparent;
    border: none;
    cursor: pointer;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`

export {
  FavoriteProductsDialogsWrapper,
  FavoriteItemWrap
}