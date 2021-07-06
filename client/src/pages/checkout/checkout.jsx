import {connect} from "react-redux"

import {selectCartTotals} from "../../redux/cart/cart.selector"
import {selectCartItems} from "../../redux/cart/cart.selector"
import {createStructuredSelector} from "reselect"
import "./checkout.styles.scss"
import CheckoutItem from "../../components/checkout-item/checkout-item"
import StripeBtnCheckout from "../../components/stripe-btn/stripe"

const CheckoutPage = ({totals, cartItems}) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <div className="total">Total price: ${totals}</div>

    <div className="test-warning">
      *Please use the following test credit card for payments
      <br />
      4242 4242 4242 4242 - exp : 01/20 - CVV: 123
    </div>
    <StripeBtnCheckout price={totals} />
  </div>
)

const mapStateToProps = createStructuredSelector({
  totals: selectCartTotals,
  cartItems: selectCartItems,
})

export default connect(mapStateToProps)(CheckoutPage)
