<!-- src/routes/reward-schedule/+page.svelte -->
<script>
  import { HALVING_INTERVAL, getBlockReward } from '$lib/utils/bitcoin.js';

  let rewardSchedule = [];

  // Generate schedule for first 33 epochs (until reward is effectively 0)
  for (let epoch = 0; epoch < 33; epoch++) {
    rewardSchedule.push({
      epoch,
      startBlock: epoch * HALVING_INTERVAL,
      endBlock: (epoch + 1) * HALVING_INTERVAL - 1,
      reward: getBlockReward(epoch)
    });
  }
</script>

<div class="container my-5">
  <h1 class="mb-4">Bitcoin Reward Schedule</h1>
  <p>This table shows the block reward for each halving epoch, along with the block range.</p>
  
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Epoch</th>
        <th>Start Block</th>
        <th>End Block</th>
        <th>Block Reward (BTC)</th>
      </tr>
    </thead>
    <tbody>
      {#each rewardSchedule as item}
        <tr>
          <td>{item.epoch}</td>
          <td>{item.startBlock.toLocaleString()}</td>
          <td>{item.endBlock.toLocaleString()}</td>
          <td>{item.reward}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>