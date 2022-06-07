import React from 'react'

const FavoriteItem = ({data, onDeleteItem}) => {
  return (
    <FavoriteItemWrap>
      <div className='image'>{data.img}</div>
      <div className='title'>{data.title}</div>
      <button
        className='rm-item'
        onClick={onDeleteItem(data._id)}  
      >X</button>
    </FavoriteItemWrap>
  )
}

export default FavoriteItem;