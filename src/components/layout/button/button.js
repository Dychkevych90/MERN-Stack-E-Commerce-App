import React from 'react'

import { ButtonWrap } from './styled';

const MainButton = ( { text, color, width, fontSize, backgroundColor, border, } ) => {
  return (
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

export default MainButton;
