<!-- src/routes/block-height/+page.svelte -->
<script>
  import ApiFetcher from '$lib/components/ApiFetcher.svelte';
  import CountdownTimer from '$lib/components/CountdownTimer.svelte';
  import {
    API_BLOCK_HEIGHT,
    getProgressToHalving,
    getNextHalvingBlock,
    estimateTimeToHalving,
    FALLBACK_HEIGHT
  } from '$lib/utils/bitcoin.js';

  let currentHeight = 0;
  let nextHalvingBlock = 0;
  let progress = 0;
  let targetMs = 0;

  function handleData(data) {
    currentHeight = parseInt(data, 10);
    nextHalvingBlock = getNextHalvingBlock(currentHeight);
    progress = getProgressToHalving(currentHeight);
    targetMs = Date.now() + estimateTimeToHalving(currentHeight);
  }
</script>

<div class="container my-5">
  <h1 class="mb-4">Current Bitcoin Block Height</h1>
  
  <ApiFetcher url={API_BLOCK_HEIGHT} parser={(res) => res.text()} fallbackData={FALLBACK_HEIGHT.toString()} let:data>
    {@const _ = handleData(data)}
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">Block Height: {currentHeight}</h2>
        <p>Next Halving at Block: {nextHalvingBlock}</p>
        <div class="progress mb-3" style="height: 20px;">
          <div class="progress-bar" role="progressbar" style="width: {progress}%;" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
            {progress}%
          </div>
        </div>
        <p>Progress to Next Halving: {progress}%</p>
      </div>
    </div>
    <CountdownTimer {targetMs} />
  </ApiFetcher>
</div>