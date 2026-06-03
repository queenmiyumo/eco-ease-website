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

    <!-- Active Packaging Teaser -->
    <section class="ap-teaser">
      <div class="ap-teaser-inner">
        <div class="ap-teaser-text">
          <div class="ap-teaser-badge">🧪 New Technology</div>
          <h2>Introducing Active Packaging</h2>
          <p>
            Our packaging doesn't just hold food — it protects it. Using natural chitosan derived
            from shrimp shells, our active packaging extends food freshness by up to
            <strong>40%</strong>, reducing waste and improving your takeaway quality.
          </p>
          <ul class="ap-teaser-list">
            <li>✅ Antimicrobial coating — inhibits bacterial growth</li>
            <li>✅ Leak &amp; moisture resistant</li>
            <li>✅ 100% natural &amp; biodegradable</li>
            <li>✅ Available with custom branding</li>
          </ul>
          <router-link to="/active-packaging" class="ap-teaser-btn">
            Learn About Active Packaging →
          </router-link>
        </div>
        <div class="ap-teaser-visual">
          <div class="ap-teaser-card">
            <div class="ap-teaser-emoji">🌿</div>
            <div class="ap-teaser-stat">
              <span class="ap-stat-big">40%</span>
              <span class="ap-stat-desc">Longer freshness</span>
            </div>
            <div class="ap-teaser-divider"></div>
            <div class="ap-teaser-stat">
              <span class="ap-stat-big">0</span>
              <span class="ap-stat-desc">Synthetic chemicals</span>
            </div>
            <div class="ap-teaser-divider"></div>
            <div class="ap-teaser-stat">
              <span class="ap-stat-big">100%</span>
              <span class="ap-stat-desc">Natural coating</span>
            </div>
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

/* ACTIVE PACKAGING TEASER */
.ap-teaser {
  background: linear-gradient(135deg, #eaf2e8 0%, #f0f7ee 100%);
  padding: 90px;
  border-top: 1px solid #dce8d6;
}

.ap-teaser-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 80px;
}

.ap-teaser-text {
  flex: 1;
}

.ap-teaser-badge {
  display: inline-block;
  background: #d4edcc;
  color: #2f5e3a;
  font-size: 0.82rem;
  font-weight: 600;
  padding: 5px 14px;
  border-radius: 20px;
  margin-bottom: 16px;
}

.ap-teaser-text h2 {
  font-size: 2.4rem;
  color: #2f5e3a;
  line-height: 1.2;
  margin-bottom: 18px;
}

.ap-teaser-text p {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #425441;
  margin-bottom: 24px;
}

.ap-teaser-list {
  list-style: none;
  padding: 0;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.ap-teaser-list li {
  font-size: 0.95rem;
  color: #2f5e3a;
  font-weight: 500;
}

.ap-teaser-btn {
  display: inline-block;
  background: #2f5e3a;
  color: white;
  text-decoration: none;
  padding: 15px 28px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.95rem;
  transition:
    background 0.3s,
    transform 0.2s;
}

.ap-teaser-btn:hover {
  background: #1f4028;
  transform: translateX(4px);
}

/* TEASER CARD */
.ap-teaser-visual {
  flex-shrink: 0;
}

.ap-teaser-card {
  background: white;
  border-radius: 24px;
  padding: 40px 50px;
  box-shadow: 0 10px 40px rgba(47, 94, 58, 0.12);
  text-align: center;
  border: 1px solid #dce8d6;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  min-width: 220px;
}

.ap-teaser-emoji {
  font-size: 3rem;
}

.ap-teaser-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.ap-stat-big {
  font-size: 2rem;
  font-weight: 900;
  color: #2f5e3a;
}

.ap-stat-desc {
  font-size: 0.8rem;
  color: #6f7d69;
  font-weight: 500;
}

.ap-teaser-divider {
  width: 40px;
  height: 1px;
  background: #dce8d6;
}
</style>
