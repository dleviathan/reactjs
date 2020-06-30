export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
    )
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];

}

export const removeQuantityFromCart = (cartItems, cartItemToChange) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToChange.id
  );

  if (existingCartItem.quantity == 1) {
    return cartItems.filter(item => item.id !== cartItemToChange.id)
  }

  return cartItems.map(cartItem => 
    cartItem.id === cartItemToChange.id
      ? {...cartItem, quantity: cartItem.quantity - 1}
      : cartItem
    )

}