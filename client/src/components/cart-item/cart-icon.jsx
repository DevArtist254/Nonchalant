//Dependances
//1. React
import {connect} from "react-redux"

//2.Redux
import {toggleHiddenCart} from "../../redux/cart/cart.actions"
import {selectCartItemCount} from "../../redux/cart/cart.selector"
//styles
import "./cart-icon.styles.scss"
import {ReactComponent as ShoppingLogo} from "../../assets/11.2 shopping-bag.svg"

const CartIcon = ({toggleHiddenCart, itemCount}) => (
  <div className="cart-icon" onClick={toggleHiddenCart}>
    <ShoppingLogo className="shopping-icon " />
    <span className="item-count ">{itemCount}</span>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  toggleHiddenCart: () => dispatch(toggleHiddenCart()),
})

const mapStateToProps = (state) => ({
  itemCount: selectCartItemCount(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
