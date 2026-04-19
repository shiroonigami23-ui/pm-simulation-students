<script>
  import { onMount } from 'svelte';
  import Chart from 'chart.js';  // v2 import style

  let canvas;
  onMount(() => {
    new Chart(canvas, {
      type: 'bar',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
        datasets: [{
          label: 'New Users',
          data: [420, 580, 390, 720, 840, 680, 950],
          backgroundColor: 'rgba(167,139,250,0.7)',
          borderColor: '#a78bfa',
          borderWidth: 1,
        }]
      },
      options: {
        scales: {
          yAxes: [{ ticks: { beginAtZero: true } }],  // v2 syntax
        },
        legend: { display: false },  // v2 syntax
        responsive: true,
        maintainAspectRatio: false,
      }
    });
  });
</script>

<div class="bg-gray-800 rounded-xl p-4">
  <h3 class="text-sm font-medium text-gray-400 mb-3">New Users</h3>
  <div style="height:280px; position:relative">
    <canvas bind:this={canvas}></canvas>
  </div>
</div>
