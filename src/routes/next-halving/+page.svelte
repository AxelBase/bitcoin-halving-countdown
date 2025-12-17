<!-- src/routes/next-halving/+page.svelte -->
<script>
  import ApiFetcher from '$lib/components/ApiFetcher.svelte';
  import CountdownTimer from '$lib/components/CountdownTimer.svelte';
  import HalvingCard from '$lib/components/HalvingCard.svelte';
  import {
    API_BLOCK_HEIGHT,
    getHalvingEpoch,
    getBlockReward,
    getNextHalvingBlock,
    estimateTimeToHalving,
    getEstimatedNextHalvingDate,
    FALLBACK_HEIGHT
  } from '$lib/utils/bitcoin.js';

  let currentHeight = 0;
  let nextHalving = {};
  let targetMs = 0;

  function handleData(data) {
    currentHeight = parseInt(data, 10);
    const currentEpoch = getHalvingEpoch(currentHeight);
    const nextEpoch = currentEpoch + 1;
    const nextBlock = getNextHalvingBlock(currentHeight);
    const currentReward = getBlockReward(currentEpoch);
    const nextReward = getBlockReward(nextEpoch);
    const estimatedDate = getEstimatedNextHalvingDate(currentHeight).toDateString();
    nextHalving = {
      epoch: nextEpoch,
      block: nextBlock,
      date: estimatedDate,
      rewardBefore: currentReward,
      rewardAfter: nextReward
    };
    targetMs = Date.now() + estimateTimeToHalving(currentHeight);
  }
</script>

<div class="container my-5">
  <h1 class="mb-4">Next Bitcoin Halving</h1>
  
  <ApiFetcher url={API_BLOCK_HEIGHT} parser={(res) => res.text()} fallbackData={FALLBACK_HEIGHT.toString()} let:data>
    {@const _ = handleData(data)}
    <HalvingCard halving={nextHalving} />
    <CountdownTimer {targetMs} />
  </ApiFetcher>
</div>