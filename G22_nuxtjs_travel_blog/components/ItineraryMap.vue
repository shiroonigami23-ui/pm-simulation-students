<template>
  <div>
    <ClientOnly>
      <!-- ClientOnly wrapper helps but doesn't fully resolve the hydration
           mismatch because MapComponent still imports Leaflet at the top level -->
      <MapComponent :center="mapCenter" :zoom="10" :markers="mapMarkers" />
      <template #fallback>
        <div style="height:400px;background:#f1f5f9;border-radius:12px;display:flex;align-items:center;justify-content:center">
          <span style="color:#94a3b8">Loading map...</span>
        </div>
      </template>
    </ClientOnly>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  destinations: { type: Array, default: () => [] }
})

const mapCenter = computed(() => {
  if (props.destinations.length === 0) return [20.5937, 78.9629]
  const first = props.destinations[0]
  return first.coords || [20.5937, 78.9629]
})

const mapMarkers = computed(() =>
  props.destinations.map(d => ({ coords: d.coords, label: d.name }))
)
</script>
