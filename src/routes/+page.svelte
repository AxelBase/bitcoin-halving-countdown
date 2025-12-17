<!-- src/routes/+page.svelte -->
<script>
  import ApiFetcher from '$lib/components/ApiFetcher.svelte';
  import CountdownTimer from '$lib/components/CountdownTimer.svelte';
  import { fly, fade } from 'svelte/transition';
  import {
    API_BLOCK_HEIGHT,
    estimateTimeToHalving,
    FALLBACK_HEIGHT
  } from '$lib/utils/bitcoin.js';

  let currentHeight = 0;
  let targetMs = 0;

  function handleData(data) {
    currentHeight = parseInt(data, 10);
    targetMs = Date.now() + estimateTimeToHalving(currentHeight);
  }
</script>

<section id="home" class="py-5 text-center" in:fly={{ y: 50, duration: 800 }}>
  <div class="glass-card p-5 mx-auto" style="max-width: 900px;">
    <h1 class="display-3 fw-bold mb-3">Bitcoin Halving</h1>
    <p class="lead text-muted mb-5">The most anticipated event in crypto history.</p>

    <ApiFetcher url={API_BLOCK_HEIGHT} parser={(res) => res.text()} fallbackData={FALLBACK_HEIGHT.toString()} let:data>
      {@const _ = handleData(data)}
      <div class="my-4">
        <CountdownTimer {targetMs} />
      </div>
      <div class="mt-4">
        <span class="badge rounded-pill px-4 py-2" style="background: var(--primary-gold); font-size: 1.1rem;">
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
        <div class="p-3">
          <i class="bi bi-1-circle fs-1 text-gold"></i>
          <h5 class="mt-3">Monitor the Countdown</h5>
          <p class="small text-muted">Open the site and the big countdown appears immediately. It shows days, hours, minutes, seconds left until the next halving. Below it you see the current block height and a progress bar that fills up as blocks are mined. Refresh the page anytime for the latest number – it pulls live data every time.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-3">
          <i class="bi bi-2-circle fs-1 text-gold"></i>
          <h5 class="mt-3">Use the Calculator</h5>
          <p class="small text-muted">Click “Halving Calculator” in the menu. Type any block height and instantly see the estimated date. Or pick a date and see what block height it matches. This is perfect for checking past halvings or guessing when future ones will arrive. The tool uses the average 10-minute block time so the estimate is very close.</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-3">
          <i class="bi bi-3-circle fs-1 text-gold"></i>
          <h5 class="mt-3">Explore the Pages</h5>
          <p class="small text-muted">Click through the menu: see past halvings with dates and rewards, study the full reward schedule table, read about price movements after previous halvings, check mining difficulty growth, or view the timeline of past and future events. Every page loads instantly and works offline once opened.</p>
        </div>
      </div>
    </div>
    <p class="text-center mt-5 lead">Five easy steps to get the most out of it:</p>
    <ol class="list-group list-group-numbered w-75 mx-auto">
      <li class="list-group-item">Open the site on your phone or computer – no download needed.</li>
      <li class="list-group-item">Watch the countdown and block height update every second.</li>
      <li class="list-group-item">Go to the calculator and play with numbers – try block 1050000 or a date in 2028.</li>
      <li class="list-group-item">Read the blog posts for deeper explanations of how everything works.</li>
      <li class="list-group-item">Bookmark the site and check back every few weeks to see progress.</li>
    </ol>
    <p class="text-center mt-4">That is it. No account, no email, no complicated steps. The utility is designed so anyone can understand Bitcoin’s halving schedule in under 30 seconds. Use it daily, weekly, or just before the next halving – it is always ready and always free.</p>
  </div>
</section>

<!-- FAQ Section – 572 words -->
<section id="faq" class="py-5 mb-5">
  <h2 class="text-center fw-bold mb-4">Common Questions</h2>
  <div class="accordion" id="faqAcc">
    <div class="glass-card mb-3 overflow-hidden">
      <button class="w-100 p-4 text-start border-0 bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#f1">
        Is the countdown accurate?
      </button>
      <div id="f1" class="collapse px-4 pb-4 text-muted">
        Yes. It uses live block height from mempool.space and multiplies remaining blocks by 10 minutes. This gives a very close estimate. Actual block times vary a little but average out perfectly over 210,000 blocks. You are seeing the same number serious Bitcoin users track.
      </div>
    </div>
    <div class="glass-card mb-3 overflow-hidden">
      <button class="w-100 p-4 text-start border-0 bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#f2">
        When is the next halving exactly?
      </button>
      <div id="f2" class="collapse px-4 pb-4 text-muted">
        The next halving happens at block 1,050,000. We expect it around March or April 2028. The timer shows the exact days and hours left based on today’s block height. It updates automatically so you always know the latest estimate.
      </div>
    </div>
    <div class="glass-card mb-3 overflow-hidden">
      <button class="w-100 p-4 text-start border-0 bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#f3">
        Why does the calculator give an approximate date?
      </button>
      <div id="f3" class="collapse px-4 pb-4 text-muted">
        Bitcoin aims for 10-minute blocks, but real times can be 9 or 11 minutes. Over 210,000 blocks this difference is only a few days. The calculator uses the 10-minute average so it is accurate enough for planning – within one or two weeks of the actual date.
      </div>
    </div>
    <div class="glass-card mb-3 overflow-hidden">
      <button class="w-100 p-4 text-start border-0 bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#f4">
        Does it work if I have no internet?
      </button>
      <div id="f4" class="collapse px-4 pb-4 text-muted">
        Yes. Once a page loads, all static pages (past halvings, reward schedule, blog) work offline forever. Live pages (countdown, block height) show the last known number and keep the timer running. It is designed to never break.
      </div>
    </div>
    <div class="glass-card mb-3 overflow-hidden">
      <button class="w-100 p-4 text-start border-0 bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#f5">
        Is this financial advice?
      </button>
      <div id="f5" class="collapse px-4 pb-4 text-muted">
        No. This is an educational tool only. It shows facts about Bitcoin’s rules and live progress. It does not predict prices or tell you what to buy or sell. Use it to learn, not to make investment decisions.
      </div>
    </div>
    <div class="glass-card mb-3 overflow-hidden">
      <button class="w-100 p-4 text-start border-0 bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#f6">
        How often is the data updated?
      </button>
      <div id="f6" class="collapse px-4 pb-4 text-muted">
        Every time you load or refresh a page, it fetches the latest block height. The countdown updates every second on screen. You always see the freshest data possible.
      </div>
    </div>
    <div class="glass-card mb-3 overflow-hidden">
      <button class="w-100 p-4 text-start border-0 bg-transparent fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#f7">
        Can I share the site with friends?
      </button>
      <div id="f7" class="collapse px-4 pb-4 text-muted">
        Yes, please do! Just send the link. Everyone sees the same live countdown and can use every feature for free. No sign-up needed. Sharing helps more people understand Bitcoin’s halving schedule.
      </div>
    </div>
  </div>
</section>