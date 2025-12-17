<!-- src/lib/components/CountdownTimer.svelte -->
<script>
  import { onMount, onDestroy } from 'svelte';

  export let targetMs; // Target timestamp in milliseconds (future)

  let now = Date.now();
  let interval;

  onMount(() => {
    interval = setInterval(() => {
      now = Date.now();
    }, 1000);
  });

  onDestroy(() => {
    if (interval) clearInterval(interval);
  });

  $: timeLeft = Math.max(targetMs - now, 0);
  $: days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  $: hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  $: minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  $: seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
</script>

<div class="card text-center">
  <div class="card-header">Time to Next Halving</div>
  <div class="card-body">
    <h5 class="card-title">{days} days {hours} hours {minutes} minutes {seconds} seconds</h5>
  </div>
</div>