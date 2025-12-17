<!-- src/routes/impact-on-price/+page.svelte -->
<script>
  import ApiFetcher from '$lib/components/ApiFetcher.svelte';
  import { PAST_HALVINGS } from '$lib/utils/bitcoin.js';

  // Hardcoded approximate historical price impacts (as of Dec 2025)
  // Prices are rough averages at halving and ~1 year later
  const hardcodedImpacts = [
    { date: '2012-11-28', priceAtHalving: '12.35', priceAfter: '964', percentChange: '7700' },
    { date: '2016-07-09', priceAtHalving: '663', priceAfter: '2525', percentChange: '281' },
    { date: '2020-05-11', priceAtHalving: '8750', priceAfter: '28900', percentChange: '230' },
    { date: '2024-04-19', priceAtHalving: '63800', priceAfter: '108000', percentChange: '69' } // Approximate current
  ];
</script>

<div class="container my-5">
  <h1 class="mb-4">Impact on Price</h1>
  <p>Historical price impacts from past halvings (approximate price at halving vs. ~1 year later). Note: Live API unavailable; using static data.</p>
  
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Halving Date</th>
        <th>Price at Halving (USD)</th>
        <th>Price ~1 Year Later (USD)</th>
        <th>Percent Change</th>
      </tr>
    </thead>
    <tbody>
      {#each hardcodedImpacts as impact}
        <tr>
          <td>{impact.date}</td>
          <td>${impact.priceAtHalving}</td>
          <td>${impact.priceAfter}</td>
          <td>{impact.percentChange}%</td>
        </tr>
      {/each}
    </tbody>
  </table>
  <div class="alert alert-info mt-4">
    Live price history fetch requires an API key (CoinGecko now mandates keys). This page uses static historical approximations for reliability.
  </div>
</div>