<!-- src/lib/components/HalvingCard.svelte -->
<script>
  export let halving = {
    epoch: 0,
    block: 0,
    date: 'Unknown',
    rewardBefore: 0,
    rewardAfter: 0
  };
</script>

<div class="card mb-3">
  <div class="card-header">Halving #{halving.epoch}</div>
  <div class="card-body">
    <p class="card-text"><strong>Block Height:</strong> {halving.block}</p>
    <p class="card-text"><strong>Approximate Date:</strong> {halving.date}</p>
    <p class="card-text"><strong>Reward Change:</strong> {halving.rewardBefore} BTC → {halving.rewardAfter} BTC</p>
  </div>
</div>