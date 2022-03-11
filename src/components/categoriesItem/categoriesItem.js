import React from 'react'

import MainButton from '../layout/button/button';

import * as Style from "./styled";

const CategoriesItem = ({data}) => {
  return (
    <Style.CategoryWrapItem>
      <img className={'image'} src={data.img} alt={'categories'} />
      <div className={'info'}>
        <h2 className={'title'}>{data.title}</h2>
        <MainButton 
          text={ 'shop now' }
          backgroundColor={ '#fff' }
          color={ 'gray' }
        />
      </div>
    </Style.CategoryWrapItem>
  )
}

export default CategoriesItem;
