<!-- src/lib/components/CountdownTimer.svelte -->
<script>
  import { onMount, onDestroy } from 'svelte';

  export let targetMs; // number | Date | undefined

  let now = Date.now();
  let interval;

  // Normalize safely (no gating)
  $: normalizedTarget =
    targetMs instanceof Date
      ? targetMs.getTime()
      : Number.isFinite(targetMs)
        ? targetMs
        : null;

  onMount(() => {
    now = Date.now();
    interval = setInterval(() => {
      now = Date.now();
    }, 1000);
  });

  onDestroy(() => {
    if (interval) clearInterval(interval);
  });

  // NEVER block rendering
  $: timeLeft =
    normalizedTarget
      ? Math.max(normalizedTarget - now, 0)
      : 0;

  $: days = Math.floor(timeLeft / 86400000);
  $: hours = Math.floor((timeLeft % 86400000) / 3600000);
  $: minutes = Math.floor((timeLeft % 3600000) / 60000);
  $: seconds = Math.floor((timeLeft % 60000) / 1000);
</script>

<div class="card text-center">
  <div class="card-header">Time to Next Halving</div>
  <div class="card-body">
    <h5 class="card-title">
      {days} days {hours} hours {minutes} minutes {seconds} seconds
    </h5>
  </div>
</div>
