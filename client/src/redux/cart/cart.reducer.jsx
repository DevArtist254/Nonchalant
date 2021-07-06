import CartActionTypes from "./cart.types"
import {addItemToCart, reduceItemFromCart} from "./cart.utlis"
const INIT_STATE = {
  hidden: true,
  cartItems: [],
}

const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_HIDDEN_CART:
      return {
        //old update
        ...state,
        //new update
        hidden: !state.hidden,
      }
    case CartActionTypes.ADD_ITEM:
      return {
        //old update
        ...state,
        //new update
        cartItems: addItemToCart(state.cartItems, action.payload),
      }
    case CartActionTypes.REMOVE_ITEM:
      return {
        //old update
        ...state,
        //new update
        cartItems: reduceItemFromCart(state.cartItems, action.payload),
      }
    case CartActionTypes.CLEAR_CART_ITEM:
      return {
        //old update
        ...state,
        //new update
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      }
    default:
      return state
  }
}
export default cartReducer
