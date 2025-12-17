<!-- src/routes/mining-difficulty/+page.svelte -->
<script>
  // No ApiFetcher needed - fully static for reliability and zero errors

  // Current difficulty as of December 17, 2025
  const currentDifficulty = 148200000000000; // 148.20 T

  // Approximate difficulties at past halvings (historical values)
  const historicalDifficulties = [
    { date: '2012-11-28', difficulty: '3,370,000' },
    { date: '2016-07-09', difficulty: '213,000,000,000' },
    { date: '2020-05-11', difficulty: '16,100,000,000,000' },
    { date: '2024-04-19', difficulty: '88,000,000,000,000' }
  ];
</script>

<div class="container my-5">
  <h1 class="mb-4">Mining Difficulty</h1>
  
  <p class="lead">Current Mining Difficulty (as of Dec 17, 2025): {currentDifficulty.toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
  
  <h2>Difficulty at Past Halvings (Approximate)</h2>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Halving Date</th>
        <th>Difficulty</th>
      </tr>
    </thead>
    <tbody>
      {#each historicalDifficulties as diff}
        <tr>
          <td>{diff.date}</td>
          <td>{diff.difficulty}</td>
        </tr>
      {/each}
    </tbody>
  </table>
  <p class="mt-3">Note: Difficulty adjusts every 2016 blocks (~2 weeks) to maintain ~10-minute block times. Values shown are historical approximations for educational purposes.</p>
</div>