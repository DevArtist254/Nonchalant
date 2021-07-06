import CartActionTypes from "./cart.types"

export const toggleHiddenCart = () => ({
  type: CartActionTypes.TOGGLE_HIDDEN_CART,
})

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
})

export const reduceItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
})

export const clearItem = (item) => ({
  type: CartActionTypes.CLEAR_CART_ITEM,
  payload: item,
})
