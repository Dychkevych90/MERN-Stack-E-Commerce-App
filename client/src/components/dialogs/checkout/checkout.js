import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import MainButton from '../../layout/button/button';
import PaymentCard from './payment_card';

import {setOrder, setCart} from '../../../redux-store/action';
import ServerSettings from '../../../services/serverSettings';

import { CheckoutWrapper } from './styled';

const CheckoutDialog = ({setShowCheckoutModal, totalSum}) => {
  const [step, setStep] = useState(true);
  const [checkout, setCheckout] = useState({});
  const [form, setForm] = useState({
    email : '',
    city: '',
    country: '',
    firstName: '',
    lastName: '',
    creditCardNum: 0,
    cardHolder: '',
    expireMonth: '',
    expireYear: '',
    cvv: '',
  });

  const dispatch = useDispatch();
  const cart = useSelector( ( state ) => state.cart );
  const order = useSelector( ( state ) => state.order );
  const currentUser = useSelector( ( state ) => state.user );
  //console.log('Your order', order)
  const onChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const onCheckout = async (e) => {
    e.preventDefault();
    

    setCheckout({
      ...checkout,
      payment: form,
      products: cart,
      total: totalSum,
      userId: currentUser._id
    });

    setTimeout( () => {
      setShowCheckoutModal(false)
    })
  }

  useEffect(() => {
    const pushOrderToServer = async() => {
      const server = new ServerSettings();
      try {
        const res = await axios.post(`${server.getApi()}orders`, checkout );
        if(res.data){
          dispatch( setOrder(res.data))
          dispatch( setCart([]) );
        }
      } catch (error) {
        console.log(error)
      }
    }
    pushOrderToServer();
  }, [checkout])
  

  return (
    <CheckoutWrapper>
      {
        step && (
          <div className='caption'>
            <div className='title'><b>DEVELOPER.</b></div>
            <div className='total-price'>Total price $</div>
            <button onClick={() => setShowCheckoutModal(false)} className='close'>X</button>
        </div>
        )
      }

      <form onSubmit={(e) => onCheckout(e)}>
        {
          step ? (
            <>
              <input type={'text'} name='email' onChange={onChange} autoComplete={'off'} placeholder='Email' required/>
              <input type={'text'} name='city' onChange={onChange} autoComplete={'off'} placeholder='City' />
              <input type={'text'} name='country' onChange={onChange} autoComplete={'off'} placeholder='Country' />
              <input type={'text'} name='firstName' onChange={onChange} autoComplete={'off'} placeholder='First Name' required/>
              <input type={'text'} name='lastName' onChange={onChange} autoComplete={'off'} placeholder='Last Name'  required/>
    
              <MainButton 
                text={'next step'}
                fontSize={ '14px' }
                border={ 'none' }
                backgroundColor={'#060a24'}
                width={'100%'}
                color={'#fff'}
                onClick={() => setStep(false)}
              />
            </>
          ) : (
            <PaymentCard
              onChange={onChange}
              form={form}
            />
          )
        }
      </form>
    </CheckoutWrapper>
  )
}

export default CheckoutDialog;