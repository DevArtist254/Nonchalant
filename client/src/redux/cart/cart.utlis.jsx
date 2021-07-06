export const addItemToCart = (cartItems, addedCartItem) => {
  const similarCartItem = cartItems.find(
    (cartItem) => cartItem.id === addedCartItem.id
  )

  if (similarCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === addedCartItem.id
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
    )
  }

  return [...cartItems, {...addedCartItem, quantity: 1}]
}

export const reduceItemFromCart = (cartItems, reducedItem) => {
  const similarCartItem = cartItems.find(
    (cartItem) => cartItem.id === reducedItem.id
  )

  if (similarCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== reducedItem.id)
  }

  return cartItems.map((cartItem) =>
    cartItem.id === reducedItem.id
      ? {...cartItem, quantity: cartItem.quantity - 1}
      : cartItem
  )
}
