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

    <!-- Meet the Team -->
    <section class="team-section">
      <div class="team-inner">
        <h2>Meet the team</h2>
        <p class="team-sub">
          Six specialists across leadership, research, operations, marketing and finance working
          together to make sustainable packaging accessible for Melbourne's hospitality sector.
        </p>
        <div class="team-grid">
          <div class="team-card">
            <div class="team-role-tag">Chief Executive Officer</div>
            <h3>Alisha</h3>
            <p class="team-about">
              Alisha leads Eco Ease's strategic direction, connects the business with key
              stakeholders and allocates resources across the team. Her strengths lie in stakeholder
              leadership, strategic decision-making and crisis communication, making her the driving
              force behind Eco Ease's growth vision.
            </p>
            <div class="team-skills">
              <span>Stakeholder leadership</span><span>Strategic planning</span
              ><span>Crisis communication</span>
            </div>
          </div>
          <div class="team-card">
            <div class="team-role-tag">Research &amp; Product Development</div>
            <h3>Rosie Van</h3>
            <p class="team-about">
              Rosie leads all research and product development at Eco Ease, with a background in
              sustainable agriculture and production systems. She oversees consumer research,
              material sourcing, compostability compliance and the development of Eco Ease's active
              chitosan antimicrobial packaging technology.
            </p>
            <div class="team-skills">
              <span>Sustainable sourcing</span><span>Consumer research</span
              ><span>Product testing</span>
            </div>
          </div>
          <div class="team-card">
            <div class="team-role-tag">Operations &amp; Systems Officer</div>
            <h3>Jessica Miyumo</h3>
            <p class="team-about">
              Jessica built and manages Eco Ease's website, personalised order system and fulfilment
              workflow. Her expertise in web development, AI efficiency tools and workflow
              coordination ensures that every cafe order is tracked, packed and delivered reliably
              while keeping operational costs low.
            </p>
            <div class="team-skills">
              <span>Web development</span><span>AI tools</span><span>Workflow coordination</span>
            </div>
          </div>
          <div class="team-card">
            <div class="team-role-tag">Marketing &amp; Sales Officer</div>
            <h3>Maria Christofellis</h3>
            <p class="team-about">
              Maria drives Eco Ease's cafe outreach, branding and starter-pack conversions. With
              strengths in visual communication, audience insight and campaign planning, she leads
              Melbourne cafe lead generation through Instagram, TikTok and direct outreach, turning
              first-time buyers into repeat customers.
            </p>
            <div class="team-skills">
              <span>Visual branding</span><span>Campaign planning</span
              ><span>Audience insight</span>
            </div>
          </div>
          <div class="team-card">
            <div class="team-role-tag">Internal Finance Officer</div>
            <h3>Tien Vu</h3>
            <p class="team-about">
              Tien manages Eco Ease's internal budgeting, pricing strategy and cash-flow discipline.
              She sets starter bundle pricing, tracks gross margin on every order and controls the
              burn rate across all three launch stages. Her lean financial approach ensures the
              business only scales after demand is proven.
            </p>
            <div class="team-skills">
              <span>Budget planning</span><span>Cost control</span><span>Margin analysis</span>
            </div>
          </div>
          <div class="team-card">
            <div class="team-role-tag">External Funding Officer</div>
            <h3>Bao Ngoc Tran</h3>
            <p class="team-about">
              Bao Ngoc secures Eco Ease's external funding pathway, from government grants and
              R&amp;D incentives in the early stage through to angel investment and corporate
              venture capital as the business scales. Her work in funding research, partnership
              communication and grant scanning reduces upfront financial pressure on the team.
            </p>
            <div class="team-skills">
              <span>Funding research</span><span>Grant scanning</span
              ><span>Partnership communication</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Page Directory -->
    <section class="page-directory">
      <div class="dir-inner">
        <h2 class="dir-heading">Explore Eco Ease</h2>
        <p class="dir-sub">Everything you need to make the switch to sustainable packaging.</p>
        <div class="dir-grid">
          <router-link to="/" class="dir-card">
            <div class="dir-card-label">Home</div>
            <h3>Welcome to Eco Ease</h3>
            <p>
              Learn what we do, who we serve and why Melbourne cafes are choosing smarter,
              sustainable packaging solutions.
            </p>
            <span class="dir-link">Visit page</span>
          </router-link>
          <router-link to="/products" class="dir-card">
            <div class="dir-card-label">Products</div>
            <h3>Our Packaging Range</h3>
            <p>
              Browse our full range of eco-friendly packaging products, including starter bundles
              and custom branding options.
            </p>
            <span class="dir-link">View products</span>
          </router-link>
          <router-link to="/about" class="dir-card dir-card-active">
            <div class="dir-card-label">About</div>
            <h3>You Are Here</h3>
            <p>
              Meet the team behind Eco Ease and understand our commitment to reducing packaging
              waste one cafe at a time.
            </p>
            <span class="dir-link">Current page</span>
          </router-link>
          <router-link to="/active-packaging" class="dir-card">
            <div class="dir-card-label">Active Packaging</div>
            <h3>Our Exclusive Technology</h3>
            <p>
              Our chitosan antimicrobial coating that extends food freshness by up to 40% with zero
              synthetic chemicals.
            </p>
            <span class="dir-link">Learn more</span>
          </router-link>
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

/* TEAM SECTION */
.team-section {
  background: #f6f9f4;
  padding: 80px 90px;
  border-top: 1px solid #e0eadb;
}

.team-inner {
  max-width: 1080px;
  margin: 0 auto;
}

.team-section h2 {
  font-size: 2rem;
  color: #2f5e3a;
  margin-bottom: 10px;
}

.team-sub {
  font-size: 0.95rem;
  color: #6b7d68;
  margin-bottom: 48px;
  line-height: 1.7;
  max-width: 700px;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.team-card {
  background: white;
  border-radius: 16px;
  padding: 28px 26px;
  border: 1px solid #dfe7d8;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.team-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.08);
}

.team-role-tag {
  display: inline-block;
  background: #e8f4e5;
  color: #2f5e3a;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 4px;
  width: fit-content;
}

.team-card h3 {
  font-size: 1.3rem;
  color: #1a3d24;
  font-weight: 800;
  margin: 0;
}

.team-about {
  font-size: 0.86rem;
  color: #5a6b58;
  line-height: 1.7;
  flex: 1;
}

.team-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
}

.team-skills span {
  background: #f0f7ee;
  color: #2f5e3a;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
  border: 1px solid #c8ddc2;
}

.page-directory {
  background: white;
  padding: 80px 90px;
  border-top: 1px solid #e0eadb;
}
.dir-inner {
  max-width: 1080px;
  margin: 0 auto;
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
}
.dir-link {
  font-size: 0.8rem;
  font-weight: 700;
  color: #2f5e3a;
}
.dir-card:not(.dir-card-active):hover .dir-link::after {
  content: ' →';
}
</style>
