import React from 'react'

import { ButtonWrap, LinkWrap } from './styled';

const MainButton = ( { text, color, width, fontSize, backgroundColor, border, link = false, onClick = () => false, type = 'button', } ) => {
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
            type={type}
            color={ color } 
            width={ width }
            fontSize={ fontSize }
            backgroundColor={ backgroundColor }
            border={ border }
            onClick={ onClick }
          >
            { text }
          </ButtonWrap>
        )
      }
    </>
  )
}

export default MainButton;
