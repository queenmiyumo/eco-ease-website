<script setup>
import { computed } from 'vue'
import { cart, removeFromCart, increaseQuantity, decreaseQuantity, cartTotal } from '../stores/cart'

const total = computed(() => cartTotal())
</script>

<template>
  <main class="cart-page">
    <h2>Your Cart</h2>

    <div v-if="cart.items.length === 0" class="empty-cart">
      <p>Your cart is currently empty.</p>
      <router-link to="/products">Shop Products</router-link>
    </div>

    <div v-else>
      <div class="cart-item" v-for="item in cart.items" :key="item.id">
        <div>
          <h3>{{ item.name }}</h3>
          <p>${{ item.price.toFixed(2) }} each</p>
        </div>

        <div class="quantity-box">
          <button @click="decreaseQuantity(item.id)">-</button>
          <span>{{ item.quantity }}</span>
          <button @click="increaseQuantity(item.id)">+</button>
        </div>

        <p class="item-total">${{ (item.price * item.quantity).toFixed(2) }}</p>

        <button class="delete-btn" @click="removeFromCart(item.id)">Delete</button>
      </div>

      <div class="cart-summary">
        <h3>Total: ${{ total.toFixed(2) }}</h3>

        <router-link to="/checkout" class="checkout-btn"> Go to Checkout </router-link>
      </div>
    </div>
  </main>
</template>

<style scoped>
.cart-page {
  min-height: 100vh;
  padding: 70px 90px;
  background: #f6f9f4;
}

h2 {
  font-size: 3rem;
  color: #2f5e3a;
  margin-bottom: 40px;
}

.empty-cart {
  background: #fffdf8;
  padding: 40px;
  border-radius: 20px;
  text-align: center;
}

.empty-cart p {
  margin-bottom: 20px;
  color: #60715c;
}

.empty-cart a,
.checkout-btn {
  background: #8eb78c;
  color: white;
  padding: 14px 24px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: bold;
}

.cart-item {
  background: #fffdf8;
  padding: 25px;
  border-radius: 18px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  align-items: center;
  gap: 20px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.05);
}

.cart-item h3 {
  color: #2f5e3a;
}

.cart-item p {
  color: #60715c;
}

.quantity-box {
  display: flex;
  align-items: center;
  gap: 15px;
}

.quantity-box button {
  width: 35px;
  height: 35px;
  border: none;
  background: #dfead8;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

.item-total {
  font-weight: bold;
}

.delete-btn {
  background: #c96f5f;
  color: white;
  border: none;
  padding: 12px 18px;
  border-radius: 10px;
  cursor: pointer;
}

.cart-summary {
  margin-top: 40px;
  background: #fffdf8;
  padding: 30px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-summary h3 {
  font-size: 1.8rem;
  color: #2f5e3a;
}
</style>
