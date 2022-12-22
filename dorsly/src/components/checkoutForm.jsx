import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import React, { useState } from "react"

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Lexend, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
}

export default function CheckoutForm() {
  const [success, setSuccess] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (event) => {
    event.preventDefault()

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    })

    if (!error) {
      try {
        const id = paymentMethod

        const response = await fetch("https://api.dorsly.com/api/payment", {
          method: "POST",
          body: JSON.stringify({
            amount: 1000,
            id,
          }),
        })

        if (response.ok) {
          console.log("Payment successful!")
          setSuccess(true)
        }
      } catch (error) {
        console.log("Error:", error)
      }
    } else {
      console.log(error.message)
    }
  }

  return (
    <>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <div>
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button>Pay now</button>
        </form>
      ) : (
        <div>
          <h1>Payment successful!</h1>
        </div>
      )}
    </>
  )
}
