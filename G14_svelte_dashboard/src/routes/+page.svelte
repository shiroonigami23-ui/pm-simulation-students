<script>
  import { onMount } from 'svelte';
  import SalesChart from '$lib/components/SalesChart.svelte';
  import MetricCard from '$lib/components/MetricCard.svelte';
  import UsersChart from '$lib/components/UsersChart.svelte';

  let metrics = { revenue: 0, users: 0, orders: 0, conversion: 0 };
  let loading = true;

  onMount(async () => {
    try {
      const res = await fetch('/api/metrics');
      const data = await res.json();
      metrics = data.summary;
    } catch {
      metrics = { revenue: 142350, users: 3841, orders: 892, conversion: 3.2 };
    }
    loading = false;
  });
</script>

<div class="min-h-screen bg-gray-900 text-white p-6">
  <h1 class="text-2xl font-bold mb-6">Analytics Dashboard</h1>

  {#if loading}
    <p class="text-gray-400">Loading metrics...</p>
  {:else}
    <div class="grid grid-cols-4 gap-4 mb-8">
      <MetricCard label="Revenue" value="${metrics.revenue.toLocaleString()}" trend="+12%" color="green" />
      <MetricCard label="Users"   value={metrics.users.toLocaleString()}      trend="+8%"  color="blue" />
      <MetricCard label="Orders"  value={metrics.orders.toLocaleString()}     trend="-2%"  color="yellow"/>
      <MetricCard label="Conversion" value="{metrics.conversion}%"            trend="+0.4%" color="purple"/>
    </div>
    <div class="grid grid-cols-2 gap-6">
      <SalesChart />
      <UsersChart />
    </div>
  {/if}
</div>
