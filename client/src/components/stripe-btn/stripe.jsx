import React from "react"
import StripeCheckout from "react-stripe-checkout"

const StripeBtnCheckout = ({price}) => {
  //Conversion into cents
  const StripePayment = price * 100
  const apiKey = ""
  const onToken = (token) => {
    console.log(token)
    alert("Payement successfull")
  }
  return (
    <StripeCheckout
      name="Nonchalant"
      label="Pay Now"
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`Your total payment is $ ${price}`}
      amount={StripePayment}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={apiKey}
    />
  )
}

export default StripeBtnCheckout
