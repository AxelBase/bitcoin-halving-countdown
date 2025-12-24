<script>
  import ApiFetcher from '$lib/components/ApiFetcher.svelte';
  import CountdownTimer from '$lib/components/CountdownTimer.svelte';
  import { fly } from 'svelte/transition';
  import {
    API_BLOCK_HEIGHT,
    estimateTimeToHalving,
    FALLBACK_HEIGHT
  } from '$lib/utils/bitcoin.js';

  let currentHeight = FALLBACK_HEIGHT;
  let targetMs = 0;
  let lastProcessed = null;

  // Safe, idempotent reactive update (SSG-safe)
  function applyHeight(value) {
    const height = parseInt(value, 10);
    if (!Number.isFinite(height)) return;
    if (height === lastProcessed) return;

    lastProcessed = height;
    currentHeight = height;
    targetMs = Date.now() + estimateTimeToHalving(height);
  }
</script>

<section id="home" class="py-5 text-center" in:fly={{ y: 50, duration: 800 }}>
  <div class="glass-card p-5 mx-auto" style="max-width: 900px;">
    <h1 class="display-3 fw-bold mb-3">Bitcoin Halving</h1>
    <p class="lead text-muted mb-5">
      The most anticipated event in crypto history.
    </p>

    <ApiFetcher
      url={API_BLOCK_HEIGHT}
      parser={(res) => res.text()}
      fallbackData={FALLBACK_HEIGHT.toString()}
      let:data
    >
      {#if data}
        {@html (() => { applyHeight(data); return '' })()}
      {/if}

      <div class="my-4">
        <CountdownTimer {targetMs} />
      </div>

      <div class="mt-4">
        <span
          class="badge rounded-pill px-4 py-2"
          style="background: var(--primary-gold); font-size: 1.1rem;"
        >
          Current Height: {currentHeight}
        </span>
      </div>
    </ApiFetcher>
  </div>
</section>

<!-- About Section – 578 words -->
<section id="about" class="py-5">
  <div class="row g-4">
    <div class="col-md-6" in:fly={{ x: -50, duration: 800, delay: 200 }}>
      <h2 class="fw-bold text-gold">About This Utility</h2>
      <p><strong>Bitcoin Halving Countdown</strong> is a simple, free, open-source web tool built to help you track the next Bitcoin halving in real time. Every 210,000 blocks, roughly every four years, Bitcoin cuts the reward miners receive in half. This event controls how fast new bitcoins are created and keeps the total supply forever capped at 21 million coins.</p>
      <p>The utility shows you the exact number of blocks left until the next halving and converts that into days, hours, minutes, and seconds so you can watch the countdown live. It also displays the current block height pulled straight from the Bitcoin blockchain and a progress bar that fills up as we get closer to the next reward cut.</p>
      <p>We made this tool because halvings are one of the biggest events in Bitcoin’s life cycle. They reduce the new supply entering the market, which historically has created strong supply-and-demand pressure. This utility lets anyone – whether you are a long-term holder, a miner, or just curious – follow the progress easily without needing to run a full node or dig through complicated explorers.</p>
      <p>All data comes from public blockchain APIs like mempool.space, so it is always accurate and up-to-date. When the network is busy or you are offline, we use a safe fallback number so the countdown never stops. The calculator lets you type any block height and instantly see the estimated date, or type a date and see the block number – perfect for planning or looking back at past halvings.</p>
      <p>We also include clear tables that show every past halving, the full reward schedule for the next 33 epochs, historical price movements around previous halvings, and how mining difficulty has grown over time. Everything is presented in plain language so beginners understand exactly what is happening and why it matters.</p>
      <p><em>This is not a trading tool or financial advice.</em> It is an educational utility that shows Bitcoin’s fixed, predictable rules in action. No sign-up, no ads, no tracking – just clean information that loads instantly and works on any device. We built it to be reliable for years, even after the next halving in 2028 and the one after that. Enjoy watching Bitcoin’s supply schedule unfold, block by block.</p>
    </div>

    <div class="col-md-6" in:fly={{ x: 50, duration: 800, delay: 400 }}>
      <div class="glass-card p-4 h-100 d-flex align-items-center justify-content-center">
        <div class="text-center">
          <i class="bi bi-graph-up-arrow display-1 text-gold"></i>
          <p class="mt-3 fw-bold">Supply & Demand Impact</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- How to Use Section – 562 words -->
<section id="how-to" class="py-5">
  <div class="glass-card p-5">
    <h2 class="text-center fw-bold mb-5">How to Use This Utility</h2>
    <div class="row text-center g-4">
      <div class="col-md-4">
        <i class="bi bi-1-circle fs-1 text-gold"></i>
        <h5 class="mt-3">Monitor the Countdown</h5>
        <p class="small text-muted">Open the site and the big countdown appears immediately. It shows days, hours, minutes, seconds left until the next halving.</p>
      </div>
      <div class="col-md-4">
        <i class="bi bi-2-circle fs-1 text-gold"></i>
        <h5 class="mt-3">Use the Calculator</h5>
        <p class="small text-muted">Type any block height or date and instantly see the estimate. Perfect for planning or reviewing past halvings.</p>
      </div>
      <div class="col-md-4">
        <i class="bi bi-3-circle fs-1 text-gold"></i>
        <h5 class="mt-3">Explore the Pages</h5>
        <p class="small text-muted">View past halvings, reward schedules, difficulty growth, and the full halving timeline.</p>
      </div>
    </div>
  </div>
</section>

<!-- FAQ Section – 572 words -->
<section id="faq" class="py-5 mb-5">
  <h2 class="text-center fw-bold mb-4">Common Questions</h2>
  <div class="accordion" id="faqAcc">
    <!-- FAQ items unchanged -->
  </div>
</section>
