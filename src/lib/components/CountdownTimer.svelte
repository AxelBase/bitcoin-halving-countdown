<!-- src/lib/components/CountdownTimer.svelte -->
<script>
  import { onMount, onDestroy } from 'svelte';

  export let targetMs; // number OR Date (do not change API)

  let now = Date.now();
  let interval;

  // Normalize target reactively (THIS is the missing piece)
  $: normalizedTarget =
    targetMs instanceof Date
      ? targetMs.getTime()
      : Number.isFinite(targetMs)
        ? targetMs
        : null;

  onMount(() => {
    now = Date.now(); // force hydration sync
    interval = setInterval(() => {
      now = Date.now();
    }, 1000);
  });

  onDestroy(() => {
    if (interval) clearInterval(interval);
  });

  // --- SAFE, REACTIVE COUNTDOWN ---
  $: timeLeft =
    normalizedTarget && normalizedTarget > now
      ? normalizedTarget - now
      : 0;

  $: days = Math.floor(timeLeft / 86400000);
  $: hours = Math.floor((timeLeft % 86400000) / 3600000);
  $: minutes = Math.floor((timeLeft % 3600000) / 60000);
  $: seconds = Math.floor((timeLeft % 60000) / 1000);
</script>

<div class="card text-center">
  <div class="card-header">Time to Next Halving</div>
  <div class="card-body">
    {#if normalizedTarget}
      <h5 class="card-title">
        {days} days {hours} hours {minutes} minutes {seconds} seconds
      </h5>
    {:else}
      <h5 class="card-title text-muted">Calculating…</h5>
    {/if}
  </div>
</div>
