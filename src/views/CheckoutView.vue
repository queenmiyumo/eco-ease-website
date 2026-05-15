<script setup>
import { computed } from 'vue'
import { cart, cartTotal } from '../stores/cart'

const subtotal = computed(() => cartTotal())
const tax = computed(() => subtotal.value * 0.1)
const deliveryFee = computed(() => (subtotal.value > 20 ? 0 : 8.95))
const finalTotal = computed(() => subtotal.value + tax.value + deliveryFee.value)

const latestDeliveryDate = computed(() => {
  const date = new Date()
  date.setDate(date.getDate() + 3)

  return date.toLocaleDateString('en-AU', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
})
</script>

<template>
  <main class="checkout-page">
    <h2>Checkout</h2>

    <div v-if="cart.items.length === 0" class="empty-box">
      <p>Your cart is empty.</p>
      <router-link to="/products">Return to Products</router-link>
    </div>

    <div v-else class="checkout-layout">
      <section class="order-summary">
        <h3>Order Summary</h3>

        <div class="order-item" v-for="item in cart.items" :key="item.id">
          <div>
            <p>{{ item.name }}</p>
            <small>Quantity: {{ item.quantity }}</small>
          </div>

          <span>${{ (item.price * item.quantity).toFixed(2) }}</span>
        </div>

        <div class="summary-line">
          <span>Subtotal</span>
          <strong>${{ subtotal.toFixed(2) }}</strong>
        </div>

        <div class="summary-line">
          <span>GST Tax 10%</span>
          <strong>${{ tax.toFixed(2) }}</strong>
        </div>

        <div class="summary-line">
          <span>Estimated Delivery Fee</span>
          <strong>${{ deliveryFee.toFixed(2) }}</strong>
        </div>

        <div class="summary-total">
          <span>Total</span>
          <strong>${{ finalTotal.toFixed(2) }}</strong>
        </div>

        <p class="delivery-date">
          Estimated latest arrival: <strong>{{ latestDeliveryDate }}</strong>
        </p>
      </section>

      <section class="payment-box">
        <h3>Payment Options</h3>

        <form>
          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" />

          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" />

          <label>Delivery Address</label>
          <input type="text" placeholder="Enter delivery address" />

          <label>Payment Method</label>
          <select>
            <option>Credit / Debit Card</option>
            <option>PayPal</option>
            <option>Apple Pay</option>
            <option>Bank Transfer</option>
          </select>

          <label>Card Number</label>
          <input type="text" placeholder="1234 5678 9012 3456" />

          <div class="row">
            <div>
              <label>Expiry Date</label>
              <input type="text" placeholder="MM/YY" />
            </div>

            <div>
              <label>CVV</label>
              <input type="text" placeholder="123" />
            </div>
          </div>

          <button type="submit">Process Payment</button>
        </form>
      </section>
    </div>
  </main>
</template>

<style scoped>
.checkout-page {
  min-height: 100vh;
  background: #f6f9f4;
  padding: 70px 90px;
}

h2 {
  font-size: 3rem;
  color: #2f5e3a;
  margin-bottom: 40px;
}

.checkout-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.order-summary,
.payment-box,
.empty-box {
  background: #fffdf8;
  padding: 35px;
  border-radius: 25px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
}

h3 {
  color: #2f5e3a;
  font-size: 1.7rem;
  margin-bottom: 25px;
}

.order-item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e2ddcf;
  padding: 15px 0;
}

.order-item p {
  color: #2f5e3a;
  font-weight: bold;
}

.order-item small {
  color: #60715c;
}

.summary-line,
.summary-total {
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
  color: #52624f;
}

.summary-total {
  font-size: 1.4rem;
  color: #2f5e3a;
  border-top: 2px solid #dfe7d8;
  padding-top: 20px;
}

.delivery-date {
  margin-top: 25px;
  background: #e8f3e2;
  padding: 18px;
  border-radius: 15px;
  color: #2f5e3a;
}

form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

label {
  color: #2f5e3a;
  font-weight: bold;
}

input,
select {
  padding: 15px;
  border-radius: 12px;
  border: 1px solid #d8dfd3;
  background: white;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

button {
  margin-top: 15px;
  background: #8eb78c;
  color: white;
  border: none;
  padding: 16px;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background: #6f946d;
}

.empty-box a {
  display: inline-block;
  margin-top: 20px;
  background: #8eb78c;
  color: white;
  padding: 14px 24px;
  border-radius: 12px;
  text-decoration: none;
}
</style>
