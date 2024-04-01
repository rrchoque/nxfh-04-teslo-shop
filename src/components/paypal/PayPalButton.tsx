'use client';


import { PayPalButtons } from '@paypal/react-paypal-js';

interface Props {
  orderId: string;
  amount: number;
}

export const PayPalButton = ({ orderId, amount }: Props) => {

  return (
    <PayPalButtons 
    />
  )
}