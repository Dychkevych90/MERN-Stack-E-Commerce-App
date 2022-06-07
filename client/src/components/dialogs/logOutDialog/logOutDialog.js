import React from 'react'

import {
  LogOutDialogWrapper
} from './styled';

const LogOutDialog = () => {
  return (
    <LogOutDialogWrapper>
      <div>Are you sure?</div>
      <button>No</button>
      <button>Yes</button>
    </LogOutDialogWrapper>
  )
}

export default LogOutDialog;