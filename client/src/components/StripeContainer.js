import React from 'react'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm.js'

const PUBLIC_KEY = 'pk_test_51LvjIpFgZXx78vxCrzUKYJYt5rJ3CCRLEfVbGs0QvNn4hWxgYAGGFbacVfXiPJqfNtVVKwwmMbmetuNoeV0JyENX00rEtgEku6'

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer(){
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}