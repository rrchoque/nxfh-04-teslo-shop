'use client';


import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';

interface Props {
  orderId: string;
  amount: number;
}

export const PayPalButton = ({ orderId, amount }: Props) => {

  const [{ isPending }] = usePayPalScriptReducer();

  return (
    <>
        {isPending ? <div className="animate-pulse" >
            <div className='h-11 bg-gray-200 rounded' />
            <div className='h-11 bg-gray-200 rounded mt-4' />
          </ div> : null}
        <PayPalButtons />
    </>
  )
}