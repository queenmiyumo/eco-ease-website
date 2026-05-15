<template>
  <main class="home">
    <section class="hero">
      <div class="overlay">
        <div class="hero-content">
          <h1>Eco-friendly packaging for a better tomorrow.</h1>

          <p>
            Eco Ease provides sustainable packaging solutions for Melbourne cafés, restaurants and
            catering businesses. Our mission is to make eco-friendly packaging affordable, simple
            and accessible through personalised support and low minimum orders.
          </p>

          <div class="buttons">
            <router-link to="/products" class="shop-btn"> Shop Products </router-link>

            <router-link to="/about" class="learn-btn"> Learn More </router-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.hero {
  min-height: 100vh;

  background-image: url('/homepage.png');

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
}

.overlay {
  width: 100%;
  min-height: 100vh;

  background: rgba(248, 246, 240, 0.45);

  display: flex;
  align-items: center;

  padding: 0 90px;
}

.hero-content {
  max-width: 600px;
}

.hero-content h1 {
  font-size: 4rem;
  line-height: 1.2;
  color: #2f5e3a;

  margin-bottom: 25px;
}

.hero-content p {
  font-size: 1.2rem;
  line-height: 1.8;

  color: #425441;

  margin-bottom: 35px;
}

.buttons {
  display: flex;
  gap: 20px;
}

.shop-btn,
.learn-btn {
  text-decoration: none;

  padding: 16px 30px;

  border-radius: 14px;

  font-weight: bold;

  transition: 0.3s;
}

.shop-btn {
  background: #7ea57a;
  color: white;
}

.shop-btn:hover {
  background: #648a61;
}

.learn-btn {
  background: white;
  border: 1px solid #7ea57a;
  color: #2f5e3a;
}

.learn-btn:hover {
  background: #f3f7f0;
}
</style>
