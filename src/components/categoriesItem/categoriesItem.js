import React from 'react'

import * as Style from "./styled";

const CategoriesItem = ({data}) => {
  return (
    <Style.CategoryWrapItem>
      <img className={'image'} src={data.img} alt={'categories'} />
      <div className={'info'}>
        <h2 className={'title'}>{data.title}</h2>
        <button className={'buyNow'}>shop now</button>
      </div>
    </Style.CategoryWrapItem>
  )
}

export default CategoriesItem;
