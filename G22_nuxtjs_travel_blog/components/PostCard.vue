<template>
  <article class="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
    <div v-if="post.coverImage" class="h-48 bg-gradient-to-br from-blue-400 to-teal-500 flex items-center justify-center">
      <span class="text-white text-6xl">{{ post.emoji || '✈️' }}</span>
    </div>
    <div class="p-5">
      <div class="flex gap-2 mb-2">
        <span v-for="tag in post.tags" :key="tag"
          class="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">{{ tag }}</span>
      </div>
      <h2 class="text-lg font-bold text-gray-900 mb-2 leading-tight">{{ post.title }}</h2>
      <p class="text-gray-500 text-sm mb-4 line-clamp-3">{{ post.excerpt }}</p>
      <div class="flex justify-between items-center">
        <span class="text-xs text-gray-400">{{ post.date }} · {{ post.readTime }}</span>
        <NuxtLink :to="`/post/${post.slug}`"
          class="text-sm font-semibold text-blue-600 hover:text-blue-800">Read →</NuxtLink>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({ post: { type: Object, required: true } })
</script>
