<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow-sm px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <NuxtLink to="/" class="text-xl font-bold text-blue-600">WanderLog ✈️</NuxtLink>
      <div class="flex gap-6">
        <NuxtLink to="/" class="text-gray-600 hover:text-blue-600 text-sm">Home</NuxtLink>
        <NuxtLink to="/itinerary" class="text-gray-600 hover:text-blue-600 text-sm">Itineraries</NuxtLink>
      </div>
    </nav>

    <header class="py-20 px-6 text-center bg-gradient-to-br from-blue-600 to-teal-500 text-white">
      <h1 class="text-4xl font-bold mb-3">Travel Stories & Guides</h1>
      <p class="text-xl text-blue-100 max-w-xl mx-auto">Discover destinations, plan trips, share adventures.</p>
    </header>

    <main class="max-w-6xl mx-auto px-6 py-12">
      <div v-if="pending" class="text-center text-gray-400 py-20">Loading posts...</div>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PostCard v-for="post in posts" :key="post.slug" :post="post" />
      </div>
    </main>
  </div>
</template>

<script setup>
const { data: posts, pending } = await useFetch('/api/posts')
</script>
