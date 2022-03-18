import React from 'react'

import { ButtonWrap, LinkWrap } from './styled';

const MainButton = ( { text, color, width, fontSize, backgroundColor, border, link = false, } ) => {
  return (
    <>
      { link ? (
        <LinkWrap 
          to={ '/products' }
          color={ color } 
          width={ width }
          fontSize={ fontSize }
          backgroundColor={ backgroundColor }
          border={ border }
        >
          { text }
        </LinkWrap>  
      ) : (
          <ButtonWrap 
            color={ color } 
            width={ width }
            fontSize={ fontSize }
            backgroundColor={ backgroundColor }
            border={ border }
          >
            { text }
          </ButtonWrap>
        )
      }
    </>
  )
}

export default MainButton;
