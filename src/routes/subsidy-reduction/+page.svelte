<!-- src/routes/subsidy-reduction/+page.svelte -->
<script>
  import { HALVING_INTERVAL, INITIAL_REWARD } from '$lib/utils/bitcoin.js';

  // Calculate total supply: geometric series sum = INITIAL_REWARD * HALVING_INTERVAL * (1 - (1/2)^33) / (1 - 1/2) ≈ 21 million
  // But exactly: sum over infinite, but practically up to 33 epochs
  let totalSupply = 0;
  let subsidyReductions = [];

  for (let epoch = 0; epoch < 33; epoch++) {
    const reward = INITIAL_REWARD / Math.pow(2, epoch);
    const subsidy = reward * HALVING_INTERVAL;
    totalSupply += subsidy;
    subsidyReductions.push({
      epoch,
      reward,
      subsidyThisEpoch: subsidy,
      cumulativeSupply: totalSupply
    });
  }
</script>

<div class="container my-5">
  <h1 class="mb-4">Subsidy Reduction Mechanics</h1>
  <p>Bitcoin's block subsidy (reward) halves every 210,000 blocks, reducing the rate of new BTC creation. This leads to a capped total supply of approximately 21 million BTC.</p>
  <p><strong>Total Supply:</strong> {totalSupply.toLocaleString()} BTC</p>
  
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Epoch</th>
        <th>Reward (BTC)</th>
        <th>Subsidy This Epoch (BTC)</th>
        <th>Cumulative Supply (BTC)</th>
      </tr>
    </thead>
    <tbody>
      {#each subsidyReductions as item}
        <tr>
          <td>{item.epoch}</td>
          <td>{item.reward}</td>
          <td>{item.subsidyThisEpoch.toLocaleString()}</td>
          <td>{item.cumulativeSupply.toLocaleString()}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>