<!-- src/routes/halving-timeline/+page.svelte -->
<script>
  import ApiFetcher from '$lib/components/ApiFetcher.svelte';
  import HalvingCard from '$lib/components/HalvingCard.svelte';
  import {
    API_BLOCK_HEIGHT,
    PAST_HALVINGS,
    HALVING_INTERVAL,
    AVG_BLOCK_TIME_MS,
    getHalvingEpoch,
    getBlockReward,
    FALLBACK_HEIGHT
  } from '$lib/utils/bitcoin.js';

  let currentHeight = 0;
  let futureHalvings = [];

  function handleData(data) {
    currentHeight = parseInt(data, 10);
    const currentEpoch = getHalvingEpoch(currentHeight);
    futureHalvings = [];
    for (let i = 1; i <= 10; i++) { // Generate 10 future halvings
      const epoch = currentEpoch + i;
      const block = epoch * HALVING_INTERVAL;
      const timeAdd = i * HALVING_INTERVAL * AVG_BLOCK_TIME_MS;
      const estDate = new Date(Date.now() + timeAdd).toDateString();
      const rewardBefore = getBlockReward(epoch - 1);
      const rewardAfter = getBlockReward(epoch);
      futureHalvings.push({ epoch, block, date: estDate, rewardBefore, rewardAfter });
    }
  }
</script>

<div class="container my-5">
  <h1 class="mb-4">Halving Timeline</h1>
  
  <ApiFetcher url={API_BLOCK_HEIGHT} parser={(res) => res.text()} fallbackData={FALLBACK_HEIGHT.toString()} let:data>
    {@const _ = handleData(data)}

    <h2>Past Halvings</h2>
    {#each PAST_HALVINGS as halving}
      <HalvingCard {halving} />
    {/each}

    <h2>Future Halvings (Estimated)</h2>
    {#each futureHalvings as halving}
      <HalvingCard {halving} />
    {/each}
  </ApiFetcher>
</div>