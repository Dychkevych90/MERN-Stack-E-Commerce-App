import React from 'react'

import { SmallDialogWrapper } from './styled';

const SmallDialog = ( { text } ) => {
  return (
    <SmallDialogWrapper>{ text }</SmallDialogWrapper>
  )
}

export default SmallDialog;