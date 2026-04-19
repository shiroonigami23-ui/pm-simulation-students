<template>
  <div>
    <div ref="mapContainer" style="height: 400px; width: 100%; border-radius: 12px;"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Leaflet map initialisation.
// Note: this component is used with SSR enabled. Check browser console
// for any Vue hydration warnings during development.

import L from 'leaflet'

const props = defineProps({
  center:  { type: Array,  default: () => [20.5937, 78.9629] },
  zoom:    { type: Number, default: 5 },
  markers: { type: Array,  default: () => [] }
})

const mapContainer = ref(null)
let map = null

onMounted(() => {
  // Fix default icon paths broken by bundlers
  delete L.Icon.Default.prototype._getIconUrl
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl:       'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl:     'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  })

  map = L.map(mapContainer.value).setView(props.center, props.zoom)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map)

  props.markers.forEach(m => {
    L.marker(m.coords).addTo(map).bindPopup(m.label || '')
  })
})

onUnmounted(() => { if (map) { map.remove(); map = null } })
</script>
