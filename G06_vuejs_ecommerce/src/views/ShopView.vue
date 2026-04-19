<template>
  <h1 style="margin-bottom:1.5rem">Products</h1>
  <div v-if="loading">Loading products...</div>
  <div v-else style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:1.5rem">
    <div v-for="p in products" :key="p._id"
         style="border:1px solid #e5e7eb;border-radius:8px;padding:1rem;background:white">
      <h3 style="font-size:1rem;margin-bottom:.5rem">{{ p.name }}</h3>
      <p style="color:#666;font-size:.85rem;margin-bottom:.8rem">{{ p.description }}</p>
      <div style="display:flex;justify-content:space-between;align-items:center">
        <strong style="color:#7c3aed">${{ p.price.toFixed(2) }}</strong>
        <button @click="addToCart(p)" style="background:#7c3aed;color:white;border:none;padding:.4rem .8rem;border-radius:4px;cursor:pointer">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const products = ref([]);
const loading  = ref(true);

onMounted(async () => {
  try { products.value = (await axios.get('/api/products')).data; }
  catch { products.value = []; }
  loading.value = false;
});

function addToCart(product) {
  const sessionId = localStorage.getItem('sessionId') || Date.now().toString();
  localStorage.setItem('sessionId', sessionId);
  axios.post(`/api/cart/${sessionId}`, { product, qty: 1 });
  alert(`${product.name} added to cart!`);
}
</script>
