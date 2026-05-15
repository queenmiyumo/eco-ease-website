<template>
  <div id="app">
    <nav class="navbar">
      <div class="nav-left">
        <img src="/logo.png" alt="Eco Ease Logo" class="logo" />

        <div class="brand">
          <h1>Eco Ease</h1>
          <p>Sustainable Packaging • Better Future</p>
        </div>
      </div>

      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/products">Products</router-link>
        <router-link to="/cart">Cart</router-link>

        <router-link to="/checkout" class="checkout-btn"> Checkout </router-link>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  background: #f6f9f4;
  color: #2f4f3a;
}

/* NAVBAR */

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  background: #fdfbf7;
  border-bottom: 1px solid #dfe7d8;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

.brand h1 {
  font-size: 2rem;
  color: #2f5e3a;
}

.brand p {
  color: #6f7d69;
  font-size: 0.9rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav-links a {
  text-decoration: none;
  color: #2f4f3a;
  font-weight: 500;
  transition: 0.3s;
}

.nav-links a:hover {
  color: #7ba67b;
}

.checkout-btn {
  background: #8eb78c;
  color: white !important;
  padding: 12px 24px;
  border-radius: 12px;
}

.checkout-btn:hover {
  background: #6d946c;
}
</style>
