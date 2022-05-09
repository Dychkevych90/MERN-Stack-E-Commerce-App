import React from 'react';
import CheckoutDialog from '../../components/dialogs/checkout/checkout';

import { CheckoutWrapper } from './styled';

const CheckoutPage = () => {
  return (
    <CheckoutWrapper>
      <CheckoutDialog />
    </CheckoutWrapper>
  )
}

export default CheckoutPage;