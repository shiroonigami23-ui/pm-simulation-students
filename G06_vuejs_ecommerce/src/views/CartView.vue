<template>
  <h1 style="margin-bottom:1.5rem">Your Cart</h1>
  <p v-if="items.length===0" style="color:#888">Cart is empty.</p>
  <div v-for="item in items" :key="item.product._id" style="border-bottom:1px solid #eee;padding:.8rem 0">
    <span>{{ item.product.name }}</span>
    <span style="float:right">${{ item.product.price.toFixed(2) }}</span>
  </div>
  <div v-if="items.length>0" style="margin-top:1rem">
    <strong>Total: ${{ total.toFixed(2) }}</strong>
    <br><br>
    <button style="background:#7c3aed;color:white;border:none;padding:.6rem 1.5rem;border-radius:6px;cursor:pointer">
      Checkout (Stripe)
    </button>
    <p style="color:#888;font-size:.85rem;margin-top:.5rem">Checkout integration in progress.</p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
const items = ref([]);
const total = computed(() => items.value.reduce((s,i)=>s+i.product.price,0));
onMounted(async () => {
  const sid = localStorage.getItem('sessionId');
  if (sid) { try { items.value=(await axios.get(`/api/cart/${sid}`)).data; } catch {} }
});
</script>
