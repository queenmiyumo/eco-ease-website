import { reactive } from 'vue'

export const cart = reactive({
  items: JSON.parse(localStorage.getItem('cartItems')) || [],
})

export function saveCart() {
  localStorage.setItem('cartItems', JSON.stringify(cart.items))
}

export function addToCart(product) {
  const existingItem = cart.items.find((item) => item.id === product.id)

  if (existingItem) {
    existingItem.quantity++
  } else {
    cart.items.push({
      ...product,
      quantity: 1,
    })
  }

  saveCart()
}

export function removeFromCart(id) {
  cart.items = cart.items.filter((item) => item.id !== id)
  saveCart()
}

export function increaseQuantity(id) {
  const item = cart.items.find((item) => item.id === id)

  if (item) {
    item.quantity++
    saveCart()
  }
}

export function decreaseQuantity(id) {
  const item = cart.items.find((item) => item.id === id)

  if (item && item.quantity > 1) {
    item.quantity--
  } else {
    removeFromCart(id)
  }

  saveCart()
}

export function cartTotal() {
  return cart.items.reduce((total, item) => total + item.price * item.quantity, 0)
}
