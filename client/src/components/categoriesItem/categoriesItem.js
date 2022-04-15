import React from 'react'

import MainButton from '../layout/button/button';

import * as Style from "./styled";

const CategoriesItem = ( {data, banners = false} ) => {
  return (
    <Style.CategoryWrapItem bannerStyles={ banners } >
      <img className={ 'image' } src={ data.img } alt={ 'categories' } />
      <div className={ 'info' }>
        <h2 className={ 'title' }>{ data.title }</h2>
        {
          !banners && (
            <MainButton 
              text={ 'shop now' }
              backgroundColor={ '#fff' }
              color={ 'gray' }
            />
          )
        }
      </div>
    </Style.CategoryWrapItem>
  )
}

export default CategoriesItem;
