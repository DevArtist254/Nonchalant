import {createSelector} from "reselect"

const selectCart = (state) => state.cart

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
)

export const selectCartItemCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((acculatedQuantity, cartItem) => {
      return acculatedQuantity + cartItem.quantity
    }, 0)
)

export const selectCartTotals = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acculatedQuantity, cartItem) => {
    return acculatedQuantity + cartItem.quantity * cartItem.price
  }, 0)
)
