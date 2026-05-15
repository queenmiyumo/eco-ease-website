<script setup>
import { addToCart } from '../stores/cart'

const products = [
  {
    id: 1,
    name: 'Eco Coffee Cups(30 pack)',
    description: 'Biodegradable takeaway cups perfect for cafés and hot beverages.',
    price: 20.0,
    image:
      'https://static.wixstatic.com/media/1a431b_7d2e605f68db472db91168905f38e2bd~mv2.jpg/v1/fill/w_996,h_662,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1a431b_7d2e605f68db472db91168905f38e2bd~mv2.jpg',
  },
  {
    id: 2,
    name: 'Takeaway Containers(50 pack)',
    description: 'Leak-proof eco takeaway boxes suitable for restaurants and meal prep.',
    price: 50.0,
    image:
      'https://cdn11.bigcommerce.com/s-21ntmrkfhf/images/stencil/1280x1280/products/15727/9593/NeverLeak_Large_1500ml_Container_Filled_1__81783.1647035773.png?c=2?imbypass=on',
  },
  {
    id: 3,
    name: 'Eco-Friendly Straws(100 pack)',
    description: 'Compostable paper and bamboo straws designed to reduce plastic waste.',
    price: 9.0,
    image: 'https://m.media-amazon.com/images/I/71SPwpVKNIL._AC_SY300_SX300_QL70_ML2_.jpg',
  },
  {
    id: 4,
    name: 'Wooden Cutlery(50 sets)',
    description: 'Sustainable forks, spoons and knives made from biodegradable wood.',
    price: 30.0,
    image: 'https://i.etsystatic.com/9192809/r/il/61f876/766198259/il_1588xN.766198259_9xfv.jpg',
  },
  {
    id: 5,
    name: 'Eco Doggy Bags(50 pack)',
    description: 'Recyclable takeaway bags for leftovers and customer takeaway orders.',
    price: 40.0,
    image:
      'https://www.challenges.fr/_ipx/f_webp&enlarge_true&fit_cover&s_1360x840/cha/static/s3fs-public/2018-05/photos-box-takeaway-copie.jpg%3FVersionId=R.nPchEpWPMBg5kj1cTcrSbjXg3NDADs',
  },
  {
    id: 6,
    name: 'Recycled Plastic Options(50 pack)',
    description: 'Packaging products created using recycled and reusable materials.',
    price: 14.0,
    image:
      'https://civileats.com/wp-content/uploads/2024/05/240604-deep-dish-public-plastic-2-restaurants-3-recirculate-tubs.jpg',
  },
  {
    id: 7,
    name: 'Mini Set Business Bundle',
    description: 'A starter bundle for small businesses wanting to test eco packaging.',
    price: 84.0,
    image: '/bundle.png',
  },
  {
    id: 8,
    name: 'Custom Packaging',
    description: 'Personalised packaging with logo, brand colours and design support.',
    price: 20.0,
    image:
      'https://www.inboxgroup.com.au/cdn/shop/files/Custom-Packaging-Solutions.png?v=1775465945&width=2000',
  },
  {
    id: 9,
    name: 'Small Sauce Packages(50 pack)',
    description: 'Eco-friendly sauce cups for dips, dressings and takeaway meals.',
    price: 39.0,
    image:
      'https://www.centaurpackaging.com.au/cdn/shop/files/2oz-bio-degradable-bamboo-pulp-portion-cup-pack-of-50-centaur-packaging-1-34900834844961.jpg?v=1736393918',
  },
]
</script>

<template>
  <main class="products-page">
    <section class="products-hero">
      <h2>Eco Packaging Products</h2>

      <p>
        Our niche is providing eco-friendly packaging solutions that are both sustainable and
        practical for businesses of all sizes.
      </p>
    </section>

    <section class="products-grid">
      <div class="product-card" v-for="product in products" :key="product.id">
        <img :src="product.image" :alt="product.name" />

        <h3>{{ product.name }}</h3>

        <p>{{ product.description }}</p>

        <span>${{ product.price.toFixed(2) }}</span>

        <button @click="addToCart(product)">Add to Cart</button>
      </div>
    </section>
  </main>
</template>
<style scoped>
.products-page {
  background: #f6f9f4;
  min-height: 100vh;
  padding: 70px 90px;
}

.products-hero {
  text-align: center;
  margin-bottom: 60px;
}

.products-hero h2 {
  font-size: 3rem;
  color: #2f5e3a;
  margin-bottom: 20px;
}

.products-hero p {
  color: #60715c;
  max-width: 700px;
  margin: auto;
  line-height: 1.8;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
}

.product-card {
  background: #fffdf8;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
  transition: 0.3s;
}

.product-card:hover {
  transform: translateY(-8px);
}

.product-card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.product-card h3 {
  font-size: 1.5rem;
  color: #2f5e3a;
  margin: 25px 25px 15px;
}

.product-card p {
  color: #60715c;
  line-height: 1.7;
  margin: 0 25px 20px;
}

.product-card span {
  display: block;
  margin: 0 25px 20px;
  font-weight: bold;
  color: #8b6f47;
  font-size: 1.1rem;
}

.product-card button {
  margin: 0 25px 30px;
  background: #8eb78c;
  color: white;
  border: none;
  padding: 14px 22px;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.product-card button:hover {
  background: #6f946d;
}
</style>
