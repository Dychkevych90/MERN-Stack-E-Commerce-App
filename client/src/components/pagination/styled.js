import styled from 'styled-components';

const PaginationWrap = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  justify-content: center;

  li.item_number {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;

    .page_link {
      font-family: 'TTInterfaces-Regular', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      color: #9E9E9E;
      opacity: 0.64;
      background-color: transparent;
      width: 40px;
      height: 40px;
      border: 1px solid #9E9E9E;
      cursor: pointer;
      &.active {
        background: rgba(54, 179, 126, 0.1);
        border: 1px solid #36B37E;
        color: rgb(54, 179, 126);
      }
    }
  }

  & .item_number:first-child {
    .page_link {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
  }
  
  & .item_number:last-child {
    .page_link {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
`

export {
  PaginationWrap
}