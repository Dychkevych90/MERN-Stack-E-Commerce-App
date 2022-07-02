import React from 'react'

import { FavoriteItemWrap } from './styled';

import icons from "../../../constants/icons";

const {
  ClearIcon,
} = icons;

const FavoriteItem = ({data, onDeleteItem}) => {
  return (
    <FavoriteItemWrap>
      <img className='image' src={data.img} alt='image'/>
      <div className='title'>{data.title}</div>
      <button
        className='rm-item'
        onClick={() => onDeleteItem(data._id)}  
      >
        <ClearIcon/>
      </button>
    </FavoriteItemWrap>
  )
}

export default FavoriteItem;