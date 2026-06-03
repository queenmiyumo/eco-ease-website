<template>
  <main class="active-packaging">
    <!-- HERO with Lab Animation -->
    <section class="ap-hero">
      <div class="ap-hero-content">
        <div class="ap-badge">Eco Ease Exclusive Technology</div>
        <h1>Smart Packaging.<br /><em>Active</em> Protection.</h1>
        <p class="ap-subtitle">
          Packaging that doesn't just hold food — it actively protects it. Using
          <strong>chitosan</strong>, a natural antimicrobial compound from shrimp shells, our
          coating extends food freshness by <strong>20–40%</strong> with zero synthetic chemicals.
        </p>
        <div class="ap-hero-btns">
          <router-link to="/products" class="ap-cta-btn">Shop Active Packs</router-link>
          <a href="#how-it-works" class="ap-ghost-btn">See How It Works</a>
        </div>
      </div>

      <!-- CSS Lab Animation + Tags wrapper -->
      <div class="lab-scene">
        <!-- Bench -->
        <div class="lab-bench"></div>

        <!-- Beaker with bubbles -->
        <div class="lab-beaker">
          <div class="beaker-liquid"></div>
          <div class="beaker-bubble b1"></div>
          <div class="beaker-bubble b2"></div>
          <div class="beaker-bubble b3"></div>
          <div class="beaker-shine"></div>
        </div>

        <!-- Flask -->
        <div class="lab-flask">
          <div class="flask-neck"></div>
          <div class="flask-body">
            <div class="flask-liquid"></div>
            <div class="flask-bubble fb1"></div>
            <div class="flask-bubble fb2"></div>
          </div>
        </div>

        <!-- Packaging box floating and glowing -->
        <div class="lab-package">
          <div class="package-lid"></div>
          <div class="package-body">
            <div class="package-shine"></div>
            <div class="package-label">ACTIVE</div>
          </div>
          <div class="particle p1"></div>
          <div class="particle p2"></div>
          <div class="particle p3"></div>
          <div class="particle p4"></div>
          <div class="particle p5"></div>
          <div class="particle p6"></div>
        </div>

        <!-- Microscope -->
        <div class="lab-microscope">
          <div class="micro-head"></div>
          <div class="micro-arm"></div>
          <div class="micro-base"></div>
          <div class="micro-stage"></div>
          <div class="micro-glow"></div>
        </div>

        <!-- Floating tags -->
        <div class="lab-tag lt1">Anti-bacterial</div>
        <div class="lab-tag lt2">Biodegradable</div>
        <div class="lab-tag lt3">Food-safe</div>
        <div class="lab-tag lt4">Compostable</div>
        <div class="lab-tag lt5">Sustainability</div>
        <div class="lab-tag lt6">Affordability</div>
        <div class="lab-tag lt7">Eco-friendly</div>
        <div class="lab-tag lt8">Recyclable</div>
      </div>
    </section>

    <!-- Standard vs Active Comparison -->
    <section class="ap-compare">
      <div class="ap-section-inner">
        <h2>Standard packaging vs. <em>Active</em> packaging</h2>
        <p class="ap-section-sub">Most eco-packaging stops at material choice. We go further.</p>
        <div class="compare-grid">
          <div class="compare-card compare-standard">
            <div class="compare-icon-wrap standard-wrap">
              <img
                src="https://cdn.shopify.com/s/files/1/0760/0652/3181/products/Cornstarch-Clamshell-Take-Out-Boxes-Group-1_480x480.jpg?v=1686156948"
                alt="Standard eco packaging"
                class="compare-img"
              />
            </div>
            <h3>Standard Eco Packaging</h3>
            <ul class="compare-list negative">
              <li>Passive — just holds food</li>
              <li>No antimicrobial properties</li>
              <li>More susceptible to faster spoilage</li>
              <li>Moisture and leakage risk</li>
              <li>No freshness extension</li>
            </ul>
          </div>
          <div class="compare-vs">VS</div>
          <div class="compare-card compare-active">
            <div class="compare-icon-wrap active-wrap">
              <img
                src="/active-box.png"
                alt="Active packaging with chitosan coating"
                class="compare-img"
              />
            </div>
            <h3>Eco Ease Active Packaging</h3>
            <ul class="compare-list positive">
              <li>Active chitosan antimicrobial coating</li>
              <li>Inhibits bacterial cell membranes</li>
              <li>Extends freshness 20–40%</li>
              <li>Leak & moisture resistant barrier</li>
              <li>100% natural — zero synthetics</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="ap-how" id="how-it-works">
      <div class="ap-section-inner">
        <h2>How the technology works</h2>
        <p class="ap-section-sub">
          From shrimp shells to your café's packaging — a fully natural process.
        </p>
        <div class="ap-steps">
          <div class="ap-step">
            <div class="step-img-wrap">
              <img
                src="https://d1v1e13ebw3o15.cloudfront.net/data/50779/pool_and_spa_master/..jpg"
                alt="Shrimp shells — natural chitosan source"
                class="step-img"
              />
            </div>
            <div class="ap-step-num">01</div>
            <h3>Natural Chitosan Source</h3>
            <p>
              Chitosan is extracted from crustacean shells — an abundant byproduct of the seafood
              industry. It is deacetylated chitin, a naturally occurring biopolymer.
            </p>
          </div>
          <div class="ap-step-arrow">→</div>
          <div class="ap-step">
            <div class="step-img-wrap">
              <img
                src="https://cdn.britannica.com/96/72196-050-2661CC97/structure-methods-molecule-element-symbols-structures-atoms.jpg"
                alt="Molecular structure — chitosan coating"
                class="step-img"
              />
            </div>
            <div class="ap-step-num">02</div>
            <h3>Antimicrobial Coating Applied</h3>
            <p>
              Chitosan is dissolved and applied as a thin coating layer to the inside surface of
              packaging. It bonds to the material and creates an active protective barrier.
            </p>
          </div>
          <div class="ap-step-arrow">→</div>
          <div class="ap-step">
            <div class="step-img-wrap">
              <img
                src="https://elements-resized.envatousercontent.com/elements-video-cover-images/files/f16a565c-b27b-4757-807b-2da5b232f169/inline_image_preview.jpg?w=1600&cf_fit=cover&q=85&format=auto&s=113e7c395414bb3721aeefb3d2560032c85d0f50a8eba255eb1a241702b23d42"
                alt="Bacteria cell disruption"
                class="step-img"
              />
            </div>
            <div class="ap-step-num">03</div>
            <h3>Bacteria Cell Disruption</h3>
            <p>
              Chitosan's positive charge interacts with negatively charged bacterial cell membranes,
              causing disruption and inhibiting bacterial growth around packaged food.
            </p>
          </div>
          <div class="ap-step-arrow">→</div>
          <div class="ap-step">
            <div class="step-img-wrap">
              <img
                src="https://media.istockphoto.com/id/1463498047/photo/vegetable-salads-displayed-in-a-commercial-refriger.jpg?s=612x612&w=0&k=20&c=86kUMq8ozHkBGZz0Dd1R05uJdd2U1D0UD6WWIOffyzM="
                alt="Fresh food in packaging"
                class="step-img"
              />
            </div>
            <div class="ap-step-num">04</div>
            <h3>Food Stays Fresh Longer</h3>
            <p>
              With bacterial growth slowed, food maintains quality for 20–40% longer. Less soggy
              food, fewer complaints, and better customer experiences at every delivery.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- The USP Stats -->
    <section class="ap-stats">
      <div class="ap-stat">
        <span class="ap-stat-num">20–40%</span>
        <span class="ap-stat-label">Longer food freshness</span>
      </div>
      <div class="ap-stat-divider"></div>
      <div class="ap-stat">
        <span class="ap-stat-num">100%</span>
        <span class="ap-stat-label">Natural chitosan coating</span>
      </div>
      <div class="ap-stat-divider"></div>
      <div class="ap-stat">
        <span class="ap-stat-num">0</span>
        <span class="ap-stat-label">Synthetic chemicals</span>
      </div>
      <div class="ap-stat-divider"></div>
      <div class="ap-stat">
        <span class="ap-stat-num">AS 4736</span>
        <span class="ap-stat-label">Compostability certified</span>
      </div>
      <div class="ap-stat-divider"></div>
      <div class="ap-stat">
        <span class="ap-stat-num">43.3%</span>
        <span class="ap-stat-label">Of industry revenue is food packaging</span>
      </div>
      <div class="ap-stat-divider"></div>
      <div class="ap-stat">
        <span class="ap-stat-num">1M+</span>
        <span class="ap-stat-label">Tonne landfill reduction target by 2030</span>
      </div>
    </section>

    <!-- Data Statistics Section -->
    <section class="ap-data">
      <div class="ap-section-inner">
        <h2>The numbers behind the problem</h2>
        <p class="ap-section-sub">
          Australia's packaging waste crisis is why active sustainable packaging matters more than
          ever.
        </p>
        <div class="ap-data-grid">
          <div class="ap-data-card ap-data-large">
            <div class="ap-data-num">10%</div>
            <div class="ap-data-label">
              of all plastic consumed in Australia since 2000 has been recovered or recycled
            </div>
            <div class="ap-data-source">
              Australian Department of Agriculture, Water and the Environment, 2021
            </div>
          </div>

          <div class="ap-data-card">
            <div class="ap-data-num">$15.6B</div>
            <div class="ap-data-label">Projected café industry revenue by 2025/26</div>
            <div class="ap-data-source">IBISWorld, 2025</div>
          </div>

          <div class="ap-data-card">
            <div class="ap-data-num">97.3%</div>
            <div class="ap-data-label">Of all Australian businesses are small businesses</div>
            <div class="ap-data-source">ASBFEO, 2024</div>
          </div>

          <div class="ap-data-card">
            <div class="ap-data-num">56%</div>
            <div class="ap-data-label">
              Of Australians willing to pay more for sustainable businesses
            </div>
            <div class="ap-data-source">Nielsen via Chan, 2025</div>
          </div>

          <div class="ap-data-card">
            <div class="ap-data-num">4.6%</div>
            <div class="ap-data-label">
              CPI rise in Australia to March 2026, pressuring café operating costs
            </div>
            <div class="ap-data-source">Australian Bureau of Statistics, 2025</div>
          </div>

          <div class="ap-data-card ap-data-highlight">
            <div class="ap-data-num">1M+</div>
            <div class="ap-data-label">
              Tonnes targeted for landfill reduction by APCO's 2030 packaging goal
            </div>
            <div class="ap-data-source">APCO, 2024</div>
          </div>

          <div class="ap-data-card">
            <div class="ap-data-num">47%</div>
            <div class="ap-data-label">
              Of Australian industrial businesses experienced supply chain disruptions in 2025
            </div>
            <div class="ap-data-source">Australian Industry Group, 2025</div>
          </div>

          <div class="ap-data-card">
            <div class="ap-data-num">5.4%</div>
            <div class="ap-data-label">
              Annual café industry revenue growth forecast through 2026
            </div>
            <div class="ap-data-source">Jeswanth, 2025</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Practical Results for Cafés -->
    <section class="ap-results">
      <div class="ap-section-inner">
        <h2>The practical result for your café</h2>
        <p class="ap-section-sub">
          Active packaging directly solves the real problems cafés face with takeaway.
        </p>
        <div class="ap-results-grid">
          <div class="ap-result-card">
            <div class="result-img-wrap">
              <img
                src="https://i0.wp.com/www.theimpulsivebuy.com/wordpress/wp-content/uploads/2023/09/wendysloadnachcb1.jpeg?w=1200&ssl=1"
                alt="Soggy food problem"
                class="result-img"
              />
            </div>
            <h3>No More Soggy Food</h3>
            <p>
              Moisture barrier prevents steam buildup and liquid absorption in packaging walls,
              keeping hot food crispy and cold food fresh.
            </p>
          </div>
          <div class="ap-result-card">
            <div class="result-img-wrap">
              <img
                src="https://images.stockcake.com/public/2/e/d/2ed46bde-eb32-4189-9cac-8e914dadbfcd_large/exploding-ketchup-bottle-stockcake.jpg"
                alt="Sauce leaking from packaging"
                class="result-img"
              />
            </div>
            <h3>Stops Sauce Leaks</h3>
            <p>
              The active barrier layer seals packaging walls against liquid penetration. Sauces,
              dressings and soups stay where they should.
            </p>
          </div>
          <div class="ap-result-card">
            <div class="result-img-wrap">
              <img
                src="https://www.muirfieldfs.com.au/wp-content/uploads/2021/11/Reviews.png"
                alt="Customer reviews"
                class="result-img result-img-contain"
              />
            </div>
            <h3>Better Reviews</h3>
            <p>
              Food arrives looking and tasting as intended. Fewer complaints, more 5-star reviews,
              and stronger customer loyalty for your business.
            </p>
          </div>
          <div class="ap-result-card">
            <div class="result-img-wrap">
              <img
                src="https://biouva.com/wp-content/uploads/2023/12/Totally-Compostable-scaled.jpg"
                alt="Fully compostable packaging"
                class="result-img"
              />
            </div>
            <h3>Fully Compostable</h3>
            <p>
              Chitosan is 100% biodegradable. The active coating breaks down completely in
              commercial composting conditions — no microplastics.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Materials Section -->
    <section class="ap-materials">
      <div class="ap-section-inner">
        <h2>What it's made from</h2>
        <p class="ap-section-sub">Three materials. One complete sustainable packaging solution.</p>
        <div class="ap-materials-grid">
          <div class="ap-material-card">
            <div class="material-img-wrap">
              <img
                src="https://images.stockcake.com/public/b/a/d/badda379-839e-4f36-bfd2-6c6bc54b69d9_large/sugarcane-to-tableware-stockcake.jpg"
                alt="Sugarcane bagasse"
                class="material-img"
              />
            </div>
            <div class="material-tag">Base Material</div>
            <h3>Sugarcane Bagasse</h3>
            <p>
              The fibrous pulp left after sugarcane juice extraction. Used for takeaway containers,
              bowls and cups. Certified compostable under AS 4736 (commercial) and AS 5810 (home).
            </p>
            <div class="material-specs">
              <span>AS 4736 certified</span>
              <span>Commercially compostable</span>
            </div>
          </div>
          <div class="ap-material-card">
            <div class="material-img-wrap">
              <img
                src="https://cupsdirect.co.uk/cdn/shop/products/kraft-paper-grab-bag-roll-top-range_720x.jpg?v=1768477629"
                alt="Recycled kraft paper bags"
                class="material-img"
              />
            </div>
            <div class="material-tag">Wrap & Bags</div>
            <h3>Recycled Kraft Paper</h3>
            <p>
              The most scalable and affordable eco material for paper bags, wraps and lightweight
              packaging. Sourced from Australian supplier Opal Packaging. Widely recyclable in
              kerbside bins.
            </p>
            <div class="material-specs">
              <span>Kerbside recyclable</span>
              <span>Australian sourced</span>
            </div>
          </div>
          <div class="ap-material-card material-highlight">
            <div class="material-img-wrap">
              <img
                src="https://www.biosynth.com/storage/StructureImages/YC/15/YC158301_structure.png"
                alt="Chitosan molecular structure"
                class="material-img material-img-contain"
              />
            </div>
            <div class="material-tag tag-usp">Eco Ease USP</div>
            <h3>Chitosan Antimicrobial Coating</h3>
            <p>
              Medium molecular weight chitosan (Sigma-Aldrich, Merck) applied as a bio-based
              protective layer. Derived from deacetylated crustacean chitin. Zero synthetic
              additives — just nature's own antibacterial chemistry.
            </p>
            <div class="material-specs">
              <span>100% biodegradable</span>
              <span>Zero synthetics</span>
              <span>Food-contact safe</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- R&D Roadmap -->
    <section class="ap-rdstages">
      <div class="ap-section-inner">
        <h2>Our R&D approach</h2>
        <p class="ap-section-sub">Validated, staged development. Demand first, scale second.</p>
        <div class="rd-stages">
          <div class="rd-stage">
            <div class="rd-stage-num">Stage 1</div>
            <h3>Market Validation</h3>
            <p>
              20 to 30 Melbourne café interviews. Identify pain points around cost, MOQ and design.
              Confirm willingness to pay before spending on materials.
            </p>
            <div class="rd-cost">AUD $30</div>
          </div>
          <div class="rd-connector"></div>
          <div class="rd-stage">
            <div class="rd-stage-num">Stage 2</div>
            <h3>Material & Product Dev</h3>
            <p>
              Source Kraft paper via Opal, Bagasse from Asia export market, and Chitosan from
              Merck/Sigma-Aldrich. Small-batch prototype production.
            </p>
            <div class="rd-cost">AUD $1,242 to $2,702</div>
          </div>
          <div class="rd-connector"></div>
          <div class="rd-stage">
            <div class="rd-stage-num">Stage 3</div>
            <h3>Lab Testing</h3>
            <p>
              50-sample lab validation via CSIRO and Swinburne University. Tests cover antimicrobial
              performance, durability, compostability and food-contact safety.
            </p>
            <div class="rd-cost">AUD $500</div>
          </div>
          <div class="rd-connector"></div>
          <div class="rd-stage">
            <div class="rd-stage-num">Stage 4</div>
            <h3>Certification</h3>
            <p>
              Apply for AS 4736 commercial compostable and AS 5810 home compostable certification
              through the Australasian Bioplastics Association.
            </p>
            <div class="rd-cost">AUD $2,000 to $5,000</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="ap-cta-section">
      <div class="ap-cta-inner">
        <h2>Try active packaging for your café</h2>
        <p>Low minimum orders. Starter bundles from $80 to $150. No commitment needed to test.</p>
        <div class="ap-cta-buttons">
          <router-link to="/products" class="ap-cta-btn">Shop Products</router-link>
          <router-link to="/about" class="ap-cta-btn-outline">About Eco Ease</router-link>
        </div>
      </div>
    </section>

    <!-- Page Directory -->
    <section class="page-directory">
      <div class="ap-section-inner">
        <h2 class="dir-heading">Explore Eco Ease</h2>
        <p class="dir-sub">Everything you need to make the switch to sustainable packaging.</p>
        <div class="dir-grid">
          <router-link to="/" class="dir-card">
            <div class="dir-card-label">Home</div>
            <h3>Welcome to Eco Ease</h3>
            <p>
              Learn what we do, who we serve and why Melbourne cafés are choosing smarter,
              sustainable packaging solutions.
            </p>
            <span class="dir-link">Visit page</span>
          </router-link>
          <router-link to="/products" class="dir-card">
            <div class="dir-card-label">Products</div>
            <h3>Our Packaging Range</h3>
            <p>
              Browse our full range of eco-friendly packaging products, including starter bundles
              and custom branding options for food businesses.
            </p>
            <span class="dir-link">View products</span>
          </router-link>
          <router-link to="/about" class="dir-card">
            <div class="dir-card-label">About</div>
            <h3>Our Story and Mission</h3>
            <p>
              Meet the team behind Eco Ease and understand our commitment to reducing Australia's
              packaging waste one café at a time.
            </p>
            <span class="dir-link">Meet the team</span>
          </router-link>
          <router-link to="/active-packaging" class="dir-card dir-card-active">
            <div class="dir-card-label">Active Packaging</div>
            <h3>You Are Here</h3>
            <p>
              Our exclusive chitosan antimicrobial coating technology that extends food freshness by
              up to 40% with zero synthetic chemicals.
            </p>
            <span class="dir-link">Current page</span>
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* ===== BASE ===== */
.active-packaging {
  background: #f6f9f4;
  font-family: 'Poppins', sans-serif;
}

.step-img,
.result-img,
.material-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.material-img-contain,
.result-img-contain {
  object-fit: contain;
  background: #f0f7ee;
  padding: 20px;
}

.ap-section-inner {
  max-width: 1080px;
  margin: 0 auto;
}

section {
  padding: 90px;
}

section h2 {
  font-size: 2.3rem;
  color: #2f5e3a;
  margin-bottom: 12px;
  line-height: 1.2;
}

section h2 em {
  font-style: italic;
  color: #7ea57a;
}

.ap-section-sub {
  font-size: 1.05rem;
  color: #6b7d68;
  margin-bottom: 50px;
  line-height: 1.7;
}

/* ===== HERO ===== */
.ap-hero {
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 90px;
  background: linear-gradient(140deg, #e8f4e5 0%, #f0f7ee 50%, #dcebd7 100%);
  gap: 60px;
  overflow: hidden;
}

.ap-hero-content {
  max-width: 520px;
  z-index: 2;
}

.ap-badge {
  display: inline-block;
  background: #2f5e3a;
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 6px 16px;
  border-radius: 4px;
  margin-bottom: 20px;
}

.ap-hero-content h1 {
  font-size: 3.6rem;
  color: #1a3d24;
  line-height: 1.1;
  margin-bottom: 20px;
  font-weight: 800;
}

.ap-subtitle {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #3d5c40;
  margin-bottom: 36px;
}

.ap-hero-btns {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.ap-cta-btn {
  display: inline-block;
  background: #2f5e3a;
  color: white;
  text-decoration: none;
  padding: 15px 30px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.95rem;
  transition:
    background 0.3s,
    transform 0.2s;
}

.ap-cta-btn:hover {
  background: #1a3d24;
  transform: translateY(-2px);
}

.ap-ghost-btn {
  display: inline-block;
  background: transparent;
  color: #2f5e3a;
  text-decoration: none;
  padding: 15px 30px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.95rem;
  border: 2px solid #7ea57a;
  transition: all 0.3s;
}

.ap-ghost-btn:hover {
  background: #2f5e3a;
  color: white;
}

/* ===== LAB ANIMATION SCENE ===== */
.lab-scene {
  position: relative;
  width: 320px;
  height: 420px;
  flex-shrink: 0;
}

/* Bench */
.lab-bench {
  position: absolute;
  bottom: 40px;
  left: 0;
  right: 0;
  height: 18px;
  background: linear-gradient(180deg, #c8b99a, #a8966e);
  border-radius: 4px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

/* Beaker */
.lab-beaker {
  position: absolute;
  bottom: 56px;
  left: 40px;
  width: 60px;
  height: 80px;
  background: rgba(180, 220, 200, 0.25);
  border: 2px solid rgba(126, 165, 122, 0.6);
  border-radius: 0 0 14px 14px;
  overflow: hidden;
}

.beaker-liquid {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 55%;
  background: linear-gradient(180deg, rgba(126, 200, 140, 0.5), rgba(80, 160, 100, 0.7));
  animation: beaker-wave 3s ease-in-out infinite;
}

@keyframes beaker-wave {
  0%,
  100% {
    height: 55%;
  }
  50% {
    height: 58%;
  }
}

.beaker-bubble {
  position: absolute;
  width: 6px;
  height: 6px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  animation: bubble-rise 2.5s ease-in infinite;
}
.b1 {
  left: 12px;
  bottom: 10px;
  animation-delay: 0s;
}
.b2 {
  left: 28px;
  bottom: 5px;
  animation-delay: 0.8s;
  width: 4px;
  height: 4px;
}
.b3 {
  left: 42px;
  bottom: 15px;
  animation-delay: 1.5s;
}

@keyframes bubble-rise {
  0% {
    transform: translateY(0);
    opacity: 0.8;
  }
  100% {
    transform: translateY(-60px);
    opacity: 0;
  }
}

.beaker-shine {
  position: absolute;
  top: 8px;
  left: 8px;
  width: 8px;
  height: 30px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  transform: rotate(-15deg);
}

/* Flask */
.lab-flask {
  position: absolute;
  bottom: 54px;
  left: 130px;
}

.flask-neck {
  width: 20px;
  height: 30px;
  background: rgba(180, 220, 200, 0.3);
  border: 2px solid rgba(126, 165, 122, 0.6);
  border-bottom: none;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.flask-body {
  width: 70px;
  height: 70px;
  background: rgba(180, 220, 200, 0.2);
  border: 2px solid rgba(126, 165, 122, 0.6);
  border-radius: 50%;
  margin-left: -25px;
  overflow: hidden;
  position: relative;
}

.flask-liquid {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 45%;
  background: linear-gradient(180deg, rgba(160, 210, 180, 0.5), rgba(90, 170, 120, 0.8));
  animation: flask-slosh 4s ease-in-out infinite;
}

@keyframes flask-slosh {
  0%,
  100% {
    transform: rotate(0deg);
    height: 45%;
  }
  25% {
    transform: rotate(2deg);
    height: 48%;
  }
  75% {
    transform: rotate(-2deg);
    height: 43%;
  }
}

.flask-bubble {
  position: absolute;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  animation: bubble-rise 3s ease-in infinite;
}
.fb1 {
  width: 5px;
  height: 5px;
  left: 20px;
  bottom: 8px;
  animation-delay: 1s;
}
.fb2 {
  width: 4px;
  height: 4px;
  left: 40px;
  bottom: 5px;
  animation-delay: 2.2s;
}

/* Floating Package */
.lab-package {
  position: absolute;
  bottom: 120px;
  right: 60px;
  animation: package-float 3.5s ease-in-out infinite;
  filter: drop-shadow(0 20px 30px rgba(47, 94, 58, 0.35));
}

@keyframes package-float {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  33% {
    transform: translateY(-14px) rotate(1.5deg);
  }
  66% {
    transform: translateY(-8px) rotate(-1deg);
  }
}

.package-lid {
  width: 110px;
  height: 20px;
  background: linear-gradient(135deg, #4a8a58, #2f5e3a);
  border-radius: 6px 6px 0 0;
  margin: 0 auto;
  position: relative;
}

.package-lid::after {
  content: '';
  position: absolute;
  top: 4px;
  left: 10px;
  right: 10px;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
}

.package-body {
  width: 120px;
  height: 80px;
  background: linear-gradient(145deg, #5a9e6a, #3d7a50);
  border-radius: 0 0 10px 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.package-shine {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
  animation: shine-sweep 3s ease-in-out infinite;
}

@keyframes shine-sweep {
  0% {
    transform: translateX(-40px);
  }
  100% {
    transform: translateX(160px);
  }
}

.package-label {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 3px;
  z-index: 1;
}

/* Particles from package */
.particle {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #7ed490;
  opacity: 0;
}

.p1 {
  top: 20px;
  left: -10px;
  animation: particle-fly 2.5s ease-out infinite 0s;
}
.p2 {
  top: 10px;
  right: -5px;
  animation: particle-fly 2.5s ease-out infinite 0.4s;
  width: 5px;
  height: 5px;
  background: #a8e4b0;
}
.p3 {
  top: 50px;
  right: -15px;
  animation: particle-fly 2.5s ease-out infinite 0.8s;
}
.p4 {
  top: 0px;
  left: 30px;
  animation: particle-fly 2.5s ease-out infinite 1.2s;
  width: 6px;
  height: 6px;
}
.p5 {
  top: 70px;
  left: -5px;
  animation: particle-fly 2.5s ease-out infinite 1.6s;
  width: 5px;
  height: 5px;
  background: #c4f0cc;
}
.p6 {
  top: 30px;
  left: 60px;
  animation: particle-fly 2.5s ease-out infinite 2s;
  width: 7px;
  height: 7px;
}

@keyframes particle-fly {
  0% {
    transform: translate(0, 0) scale(0);
    opacity: 0;
  }
  20% {
    opacity: 0.9;
    transform: scale(1);
  }
  100% {
    transform: translate(var(--dx, 20px), var(--dy, -30px)) scale(0);
    opacity: 0;
  }
}

.p1 {
  --dx: -25px;
  --dy: -20px;
}
.p2 {
  --dx: 20px;
  --dy: -30px;
}
.p3 {
  --dx: 25px;
  --dy: -10px;
}
.p4 {
  --dx: 5px;
  --dy: -35px;
}
.p5 {
  --dx: -20px;
  --dy: -15px;
}
.p6 {
  --dx: 15px;
  --dy: -25px;
}

/* Microscope */
.lab-microscope {
  position: absolute;
  bottom: 56px;
  right: 20px;
}

.micro-base {
  width: 60px;
  height: 10px;
  background: linear-gradient(180deg, #888, #555);
  border-radius: 4px;
}

.micro-stage {
  width: 40px;
  height: 6px;
  background: #777;
  margin: 0 auto;
  margin-top: 2px;
}

.micro-arm {
  width: 8px;
  height: 55px;
  background: linear-gradient(180deg, #999, #666);
  margin: 0 auto;
  border-radius: 4px;
}

.micro-head {
  width: 30px;
  height: 30px;
  background: linear-gradient(135deg, #aaa, #777);
  border-radius: 50% 50% 20% 20%;
  margin: 0 auto;
  position: relative;
}

.micro-head::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 12px;
  background: #888;
  border-radius: 3px;
}

.micro-glow {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 16px;
  background: rgba(200, 240, 210, 0.8);
  border-radius: 50%;
  animation: micro-pulse 2s ease-in-out infinite;
}

@keyframes micro-pulse {
  0%,
  100% {
    transform: translateX(-50%) scale(1);
    opacity: 0.7;
  }
  50% {
    transform: translateX(-50%) scale(1.5);
    opacity: 1;
    box-shadow: 0 0 12px rgba(126, 200, 140, 0.8);
  }
}

/* Lab wrapper — holds tag columns + scene side by side */
.lab-wrapper {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}

/* Tag columns */
.tag-col {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.lab-tag {
  position: absolute;
  background: white;
  color: #2f5e3a;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 7px 14px;
  border-radius: 20px;
  border: 1.5px solid #b8d8b2;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.08);
  white-space: nowrap;
}

.lt1 {
  top: 15px;
  left: 5px;
  animation: float-a 4s ease-in-out infinite 0s;
}
.lt2 {
  top: 15px;
  right: 5px;
  animation: float-b 4.5s ease-in-out infinite 0.3s;
}
.lt3 {
  top: 110px;
  left: 0px;
  animation: float-a 3.8s ease-in-out infinite 0.6s;
}
.lt4 {
  top: 110px;
  right: 0px;
  animation: float-b 4.2s ease-in-out infinite 0.9s;
}
.lt5 {
  top: 210px;
  left: 5px;
  animation: float-a 4.6s ease-in-out infinite 0.2s;
}
.lt6 {
  top: 210px;
  right: 5px;
  animation: float-b 3.9s ease-in-out infinite 1.1s;
}
.lt7 {
  bottom: 140px;
  left: 5px;
  animation: float-a 4.3s ease-in-out infinite 0.5s;
}
.lt8 {
  bottom: 140px;
  right: 5px;
  animation: float-b 4.1s ease-in-out infinite 0.8s;
}

@keyframes float-a {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-9px);
  }
}
@keyframes float-b {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-7px);
  }
}

/* ===== COMPARE ===== */
.ap-compare {
  background: white;
}

.compare-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 30px;
  align-items: center;
}

.compare-vs {
  font-size: 1.4rem;
  font-weight: 900;
  color: #b0c4ac;
  text-align: center;
}

.compare-card {
  border-radius: 18px;
  padding: 32px;
  border: 2px solid #e0eadb;
}

.compare-standard {
  background: #f9f9f9;
  border-color: #ddd;
}

.compare-active {
  background: #f0f7ee;
  border-color: #7ea57a;
}

.compare-icon-wrap {
  width: 100%;
  height: 140px;
  border-radius: 12px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.standard-wrap {
  background: #eeeeee;
}

.active-wrap {
  background: linear-gradient(135deg, #d4edcc, #b8ddb0);
}

.compare-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 10px;
}

.icon-placeholder {
  text-align: center;
  color: #888;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 20px;
  border: 2px dashed #ccc;
  border-radius: 8px;
  width: 80%;
}

.active-icon {
  color: #2f5e3a;
  border-color: #7ea57a;
}

.icon-text {
  display: block;
  font-size: 0.75rem;
  opacity: 0.7;
}

.compare-card h3 {
  font-size: 1.1rem;
  color: #2f5e3a;
  margin-bottom: 16px;
}

.compare-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.compare-list li {
  font-size: 0.9rem;
  line-height: 1.5;
  padding-left: 22px;
  position: relative;
  color: #445543;
}

.compare-list.negative li::before {
  content: '✗';
  position: absolute;
  left: 0;
  color: #cc5555;
  font-weight: 700;
}

.compare-list.positive li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #3d8a4f;
  font-weight: 700;
}

/* ===== HOW IT WORKS ===== */
.ap-how {
  background: #f6f9f4;
}

.ap-steps {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.ap-step {
  flex: 1;
  background: white;
  border-radius: 16px;
  padding: 24px;
  border: 1px solid #dfe7d8;
}

.step-img-wrap {
  width: 100%;
  height: 110px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 16px;
  background: #e8f0e5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-img-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 0.72rem;
  color: #7ea57a;
  font-weight: 600;
  border: 2px dashed #b8d4b0;
  border-radius: 8px;
  padding: 10px;
}

.ap-step-num {
  font-size: 2rem;
  font-weight: 900;
  color: #c8e0c2;
  margin-bottom: 8px;
  line-height: 1;
}

.ap-step h3 {
  font-size: 0.95rem;
  color: #2f5e3a;
  margin-bottom: 8px;
  font-weight: 700;
}

.ap-step p {
  font-size: 0.85rem;
  color: #5a6b58;
  line-height: 1.6;
}

.ap-step-arrow {
  font-size: 1.8rem;
  color: #7ea57a;
  margin-top: 80px;
  flex-shrink: 0;
}

/* ===== STATS BAR ===== */
.ap-stats {
  background: #1a3d24;
  padding: 50px 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  flex-wrap: wrap;
}

.ap-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 32px;
}

.ap-stat-num {
  font-size: 1.8rem;
  font-weight: 900;
  color: #7ed490;
}

.ap-stat-label {
  font-size: 0.78rem;
  color: #b0cdb4;
  text-align: center;
  max-width: 120px;
}

.ap-stat-divider {
  width: 1px;
  height: 50px;
  background: rgba(255, 255, 255, 0.15);
}

/* ===== PRACTICAL RESULTS ===== */
.ap-results {
  background: white;
}

.ap-results-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
  margin-top: 10px;
}

.ap-result-card {
  border-radius: 16px;
  border: 1px solid #e0eadb;
  overflow: hidden;
  background: #f6f9f4;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.ap-result-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.09);
}

.result-img-wrap {
  width: 100%;
  height: 120px;
  background: #dce8d6;
  overflow: hidden;
}

.result-img-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #dce8d6, #c8ddc2);
}

.ap-result-card h3 {
  font-size: 0.95rem;
  color: #2f5e3a;
  padding: 16px 18px 8px;
  font-weight: 700;
}

.ap-result-card p {
  font-size: 0.83rem;
  color: #5a6b58;
  padding: 0 18px 18px;
  line-height: 1.6;
}

/* ===== MATERIALS ===== */
.ap-materials {
  background: #f6f9f4;
}

.ap-materials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.ap-material-card {
  background: white;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid #dfe7d8;
}

.material-highlight {
  border: 2px solid #4a8a58;
}

.material-img-wrap {
  width: 100%;
  height: 150px;
  overflow: hidden;
}

.material-img-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #dce8d6, #c4d9bc);
}

.highlight-img {
  background: linear-gradient(135deg, #b8d8b2, #7ea57a);
}

.material-tag {
  display: inline-block;
  background: #e8f0e5;
  color: #2f5e3a;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 4px;
  margin: 18px 20px 0;
}

.tag-usp {
  background: #2f5e3a;
  color: white;
}

.ap-material-card h3 {
  font-size: 1rem;
  color: #2f5e3a;
  padding: 10px 20px 8px;
  font-weight: 700;
}

.ap-material-card p {
  font-size: 0.84rem;
  color: #5a6b58;
  padding: 0 20px 16px;
  line-height: 1.65;
}

.material-specs {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 0 20px 20px;
}

.material-specs span {
  background: #f0f7ee;
  color: #2f5e3a;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 20px;
  border: 1px solid #c8ddc2;
}

/* ===== DATA STATISTICS ===== */
.ap-data {
  background: #f6f9f4;
}

.ap-data-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 10px;
}

.ap-data-card {
  background: white;
  border-radius: 16px;
  padding: 28px 24px;
  border: 1px solid #dfe7d8;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.ap-data-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
}

.ap-data-large {
  grid-column: span 2;
  background: #1a3d24;
  border-color: #1a3d24;
}

.ap-data-large .ap-data-num {
  font-size: 3.5rem;
  color: #7ed490;
}

.ap-data-large .ap-data-label {
  color: #c8e0c2;
  font-size: 1rem;
}

.ap-data-large .ap-data-source {
  color: #6a9e74;
}

.ap-data-highlight {
  background: #f0f7ee;
  border: 2px solid #7ea57a;
  user-select: none;
  cursor: default;
}

.ap-data-num {
  font-size: 2.4rem;
  font-weight: 900;
  color: #2f5e3a;
  line-height: 1;
}

.ap-data-label {
  font-size: 0.88rem;
  color: #3d5c40;
  line-height: 1.5;
  font-weight: 500;
  flex: 1;
}

.ap-data-source {
  font-size: 0.72rem;
  color: #8fa88c;
  font-style: italic;
}

/* ===== R&D STAGES ===== */
.ap-rdstages {
  background: white;
}

.rd-stages {
  display: flex;
  align-items: flex-start;
  gap: 0;
  margin-top: 10px;
}

.rd-stage {
  flex: 1;
  background: #f6f9f4;
  border-radius: 14px;
  padding: 28px 24px;
  border: 1px solid #dfe7d8;
}

.rd-stage-num {
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #7ea57a;
  margin-bottom: 8px;
}

.rd-stage h3 {
  font-size: 0.95rem;
  color: #2f5e3a;
  margin-bottom: 10px;
  font-weight: 700;
}

.rd-stage p {
  font-size: 0.82rem;
  color: #5a6b58;
  line-height: 1.6;
  margin-bottom: 14px;
}

.rd-cost {
  display: inline-block;
  background: #2f5e3a;
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 20px;
}

.rd-connector {
  width: 30px;
  height: 2px;
  background: #b8d4b0;
  margin-top: 50px;
  flex-shrink: 0;
  position: relative;
}

.rd-connector::after {
  content: '';
  position: absolute;
  right: -5px;
  top: -4px;
  border: 5px solid transparent;
  border-left-color: #b8d4b0;
}

.rd-total {
  margin-top: 28px;
  background: #e8f4e5;
  border: 1.5px solid #7ea57a;
  color: #2f5e3a;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 12px 24px;
  border-radius: 10px;
  display: inline-block;
}

/* ===== PAGE DIRECTORY ===== */
.page-directory {
  background: white;
  border-top: 1px solid #e0eadb;
}

.dir-heading {
  font-size: 1.8rem;
  color: #2f5e3a;
  margin-bottom: 8px;
}

.dir-sub {
  font-size: 0.95rem;
  color: #6b7d68;
  margin-bottom: 40px;
}

.dir-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.dir-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 28px 24px;
  border-radius: 14px;
  border: 1px solid #dfe7d8;
  text-decoration: none;
  background: #f6f9f4;
  transition:
    transform 0.2s,
    box-shadow 0.2s,
    border-color 0.2s;
}

.dir-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  border-color: #7ea57a;
}

.dir-card-active {
  background: #f0f7ee;
  border-color: #b8d4b0;
  opacity: 0.7;
  pointer-events: none;
}

.dir-card-label {
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #7ea57a;
}

.dir-card h3 {
  font-size: 1rem;
  color: #2f5e3a;
  font-weight: 700;
  line-height: 1.3;
}

.dir-card p {
  font-size: 0.83rem;
  color: #5a6b58;
  line-height: 1.65;
  flex: 1;
  margin: 0;
  max-width: none;
}

.dir-link {
  font-size: 0.8rem;
  font-weight: 700;
  color: #2f5e3a;
  display: inline-block;
  margin-top: 4px;
}

.dir-card:not(.dir-card-active):hover .dir-link::after {
  content: ' →';
}

.ap-cta-section {
  background: linear-gradient(135deg, #1a3d24, #2f5e3a, #3d7a50);
  text-align: center;
  padding: 100px 90px;
}

.ap-cta-section h2 {
  color: white;
  font-size: 2.4rem;
  margin-bottom: 14px;
}

.ap-cta-section p {
  color: #a0c8a8;
  font-size: 1rem;
  margin-bottom: 40px;
  line-height: 1.7;
}

.ap-cta-buttons {
  display: flex;
  gap: 18px;
  justify-content: center;
}

.ap-cta-btn-outline {
  display: inline-block;
  background: transparent;
  color: white;
  text-decoration: none;
  padding: 15px 30px;
  border-radius: 10px;
  font-weight: 700;
  border: 2px solid rgba(255, 255, 255, 0.4);
  transition: all 0.3s;
  font-size: 0.95rem;
}

.ap-cta-btn-outline:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: white;
}
</style>
