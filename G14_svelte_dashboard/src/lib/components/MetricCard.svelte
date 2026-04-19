<script>
  export let label = '';
  export let value = '';
  export let trend = '';
  export let color = 'blue';

  const colors = {
    green: 'bg-green-900 border-green-700',
    blue: 'bg-blue-900 border-blue-700',
    yellow: 'bg-yellow-900 border-yellow-700',
    purple: 'bg-purple-900 border-purple-700',
  };
</script>

<div class="rounded-xl p-5 border {colors[color] || colors.blue}">
  <p class="text-sm text-gray-400 mb-1">{label}</p>
  <p class="text-2xl font-bold">{value}</p>
  <p class="text-sm mt-1 {trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}">{trend} vs last month</p>
</div>
