<script>
  import { onMount } from 'svelte';
  import Chart from 'chart.js';  // v2 default import — breaks with v4

  let canvas;

  onMount(() => {
    // Chart.js v2 instantiation style
    // In v4: import { Chart } from 'chart.js/auto' OR register components explicitly
    // This code uses the v2 global Chart constructor — incompatible with v4
    new Chart(canvas, {
      type: 'line',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
        datasets: [{
          label: 'Revenue ($)',
          data: [18200, 22400, 19800, 28100, 31500, 29700, 35200],
          borderColor: '#60a5fa',
          backgroundColor: 'rgba(96,165,250,0.1)',
          fill: true,
          // v2-specific property — removed in v4:
          lineTension: 0.4,
        }]
      },
      options: {
        // v2 options structure — changed significantly in v4
        scales: {
          yAxes: [{ ticks: { beginAtZero: false } }],   // v2 syntax
          xAxes: [{ gridLines: { display: false } }],    // v2 syntax — renamed in v4
        },
        legend: { display: true, position: 'top' },     // v2 — renamed 'plugins.legend' in v4
        tooltips: { mode: 'index', intersect: false },  // v2 — renamed 'plugins.tooltip' in v4
        responsive: true,
        maintainAspectRatio: false,
      }
    });
  });
</script>

<div class="bg-gray-800 rounded-xl p-4">
  <h3 class="text-sm font-medium text-gray-400 mb-3">Monthly Revenue</h3>
  <div style="height:280px; position:relative">
    <canvas bind:this={canvas}></canvas>
  </div>
</div>
