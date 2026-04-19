<template>
  <nav style="background:#7c3aed;padding:1rem 2rem;color:white;display:flex;justify-content:space-between;align-items:center">
    <router-link to="/" style="color:white;text-decoration:none;font-weight:700;font-size:1.2rem">VueShop</router-link>
    <div style="display:flex;gap:1.5rem">
      <router-link to="/" style="color:white;text-decoration:none">Shop</router-link>
      <router-link to="/cart" style="color:white;text-decoration:none">Cart</router-link>
    </div>
  </nav>
  <main style="max-width:1100px;margin:2rem auto;padding:0 1rem">
    <router-view/>
  </main>
</template>
