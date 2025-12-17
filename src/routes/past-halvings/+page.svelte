<!-- src/routes/past-halvings/+page.svelte -->
<script>
  import HalvingCard from '$lib/components/HalvingCard.svelte';
  import { PAST_HALVINGS } from '$lib/utils/bitcoin.js';
</script>

<div class="container my-5">
  <h1 class="mb-4">Past Bitcoin Halvings</h1>
  <p>Below is a list of all historical Bitcoin halvings, including dates, block heights, and reward changes.</p>
  
  {#each PAST_HALVINGS.slice(1) as halving} <!-- Skip genesis (epoch 0) as it's not a halving event -->
    <HalvingCard {halving} />
  {/each}
</div>