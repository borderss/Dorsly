import React from "react"

import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

import CheckoutForm from "./checkoutForm"

const PUBLIC_KEY =
  "pk_test_51LlyraBXhiZdho9f8OApJp7XPRPQHoxY6zZOEXEMo4Fs09F1DmrBvNWBCRCy0T1TCQM0pOrPYUiCQT34JsxqvI4000FBKXlMvo"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function stripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  )
}
