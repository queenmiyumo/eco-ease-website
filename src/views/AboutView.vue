<template>
  <main class="about-page">
    <section class="about-hero">
      <div class="about-image">
        <img src="/aboutpage.png" alt="Eco Ease sustainable packaging" />
      </div>

      <div class="about-text">
        <h2>About Eco Ease</h2>

        <p>
          Founded in 2026, Eco Ease was created to support Melbourne cafés, takeaway restaurants and
          catering businesses that want to move towards sustainable packaging but face high costs,
          too many material choices and large minimum order requirements.
        </p>

        <p>
          Our mission is to make eco-friendly packaging simple, affordable and brand-friendly.
          Instead of overwhelming businesses with endless options, Eco Ease provides guided support,
          curated product packs and low order quantities so businesses can start small and choose
          what works best.
        </p>

        <div class="commitment-box">
          <h3>Our Commitments</h3>

          <ul>
            <li>🌿 Help businesses reduce reliance on traditional plastic packaging</li>
            <li>📦 Offer ready-made packs such as Café Essentials, Takeaway and Catering packs</li>
            <li>🤝 Provide personalised packaging and branding support</li>
            <li>💰 Keep ordering flexible with low minimum order requirements</li>
            <li>🛡️ Support food quality through smart and active packaging options</li>
            <li>🌏 Make sustainable packaging easier for Melbourne’s food and beverage sector</li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.about-page {
  background: #f6f9f4;
  min-height: 100vh;
  padding: 80px;
}

.about-hero {
  display: flex;
  align-items: center;
  gap: 60px;
}

.about-image img {
  width: 500px;
  border-radius: 25px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
}

.about-text {
  max-width: 650px;
}

.about-text h2 {
  font-size: 3rem;
  color: #2f5e3a;
  margin-bottom: 25px;
}

.about-text p {
  line-height: 1.9;
  color: #60715c;
  margin-bottom: 25px;
  font-size: 1.05rem;
}

.commitment-box {
  background: #fffdf8;
  padding: 30px;
  border-radius: 20px;
  border: 1px solid #dfe7d8;
}

.commitment-box h3 {
  color: #2f5e3a;
  margin-bottom: 20px;
}

.commitment-box ul {
  list-style: none;
}

.commitment-box li {
  margin-bottom: 15px;
  color: #52624f;
}
</style>
