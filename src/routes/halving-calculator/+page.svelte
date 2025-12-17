<!-- src/routes/halving-calculator/+page.svelte -->
<script>
  import ApiFetcher from '$lib/components/ApiFetcher.svelte';
  import { API_BLOCK_HEIGHT, AVG_BLOCK_TIME_MS, FALLBACK_HEIGHT } from '$lib/utils/bitcoin.js';

  let currentHeight = 0;

  let blockInput = '';
  let estimatedDate = '';

  let dateInput = '';
  let estimatedBlock = '';

  function handleData(data) {
    currentHeight = parseInt(data, 10);
  }

  $: if (blockInput && currentHeight) {
    const block = parseInt(blockInput);
    if (!isNaN(block) && block >= 0) { // Added edge case check
      const blocksDiff = block - currentHeight;
      const timeDiff = Math.abs(blocksDiff) * AVG_BLOCK_TIME_MS;
      const baseDate = new Date();
      if (blocksDiff > 0) {
        estimatedDate = new Date(baseDate.getTime() + timeDiff).toString();
      } else if (blocksDiff < 0) {
        estimatedDate = new Date(baseDate.getTime() - timeDiff).toString();
      } else {
        estimatedDate = baseDate.toString();
      }
    } else {
      estimatedDate = 'Invalid block height';
    }
  }

  $: if (dateInput && currentHeight) {
    const targetDate = new Date(dateInput);
    if (!isNaN(targetDate.getTime())) {
      const timeDiff = targetDate.getTime() - Date.now();
      const blocksDiff = Math.round(timeDiff / AVG_BLOCK_TIME_MS);
      estimatedBlock = (currentHeight + blocksDiff).toString();
    } else {
      estimatedBlock = 'Invalid date';
    }
  }
</script>

<div class="container my-5">
  <h1 class="mb-4">Halving Calculator</h1>
  
  <ApiFetcher url={API_BLOCK_HEIGHT} parser={(res) => res.text()} fallbackData={FALLBACK_HEIGHT.toString()} let:data>
    {@const _ = handleData(data)}

    <div class="card mb-4">
      <div class="card-header">Block Height to Estimated Date</div>
      <div class="card-body">
        <div class="mb-3">
          <label for="blockInput" class="form-label">Enter Block Height</label>
          <input type="number" class="form-control" id="blockInput" bind:value={blockInput} min="0" />
        </div>
        {#if estimatedDate}
          <p>Estimated Date: {estimatedDate}</p>
        {/if}
      </div>
    </div>

    <div class="card">
      <div class="card-header">Date to Estimated Block Height</div>
      <div class="card-body">
        <div class="mb-3">
          <label for="dateInput" class="form-label">Enter Date</label>
          <input type="date" class="form-control" id="dateInput" bind:value={dateInput} />
        </div>
        {#if estimatedBlock}
          <p>Estimated Block Height: {estimatedBlock}</p>
        {/if}
      </div>
    </div>
  </ApiFetcher>
</div>