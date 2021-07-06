import {connect} from "react-redux"
import {withRouter} from "react-router-dom"

//Components
import {toggleHiddenCart} from "../../redux/cart/cart.actions"
import CustomButton from "../custom-button/custom-button"
import CartItems from "../cart-item/cart-item"
//Styles
import "./cart-dropdown.styles.scss"

const CartDropdown = ({cartItems, history, dispatch}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => <CartItems item={cartItem} />)
      ) : (
        <span>please select items</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout")
        dispatch(toggleHiddenCart())
      }}
    >
      CheckOut
    </CustomButton>
  </div>
)

const mapStateToProps = ({cart: {cartItems}}) => ({
  cartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
