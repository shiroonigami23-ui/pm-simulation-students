<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow-sm px-6 py-4">
      <NuxtLink to="/" class="text-xl font-bold text-blue-600">WanderLog ✈️</NuxtLink>
    </nav>
    <main class="max-w-4xl mx-auto px-6 py-12">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Multi-City Itinerary Planner</h1>
      <p class="text-gray-500 mb-6">Plan your trip across multiple destinations. Map updates as you add cities.</p>

      <div class="mb-4 flex gap-3">
        <input v-model="newCity" placeholder="Add city (e.g. Paris, France)"
          class="flex-1 border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <button @click="addCity"
          class="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700">Add</button>
      </div>

      <ul class="mb-8 space-y-2">
        <li v-for="(city, i) in cities" :key="i"
          class="flex justify-between items-center bg-white rounded-lg px-4 py-3 shadow-sm">
          <span>{{ i + 1 }}. {{ city.name }}</span>
          <button @click="cities.splice(i,1)" class="text-red-400 hover:text-red-600 text-sm">Remove</button>
        </li>
        <li v-if="cities.length===0" class="text-gray-400 text-sm">No cities added yet.</li>
      </ul>

      <ItineraryMap v-if="cities.length > 0" :destinations="cities" />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const cities  = ref([])
const newCity = ref('')

// Stub geocoding — in real app use Nominatim or Google Geocoding API
const cityCoords = {
  'Paris':    [48.8566, 2.3522],
  'London':   [51.5074, -0.1278],
  'Tokyo':    [35.6762, 139.6503],
  'New York': [40.7128, -74.0060],
  'Mumbai':   [19.0760, 72.8777],
  'Delhi':    [28.6139, 77.2090],
}

function addCity() {
  const name = newCity.value.trim()
  if (!name) return
  const coords = cityCoords[name] || [20 + Math.random()*10, 78 + Math.random()*10]
  cities.value.push({ name, coords })
  newCity.value = ''
}
</script>
