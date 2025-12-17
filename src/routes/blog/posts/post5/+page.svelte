<!-- blog/posts/post5/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Visualizing the Reward Schedule | Bitcoin Halving Countdown</title>
  <meta name="description" content="Explore Bitcoin's fixed block reward schedule and how halvings progressively reduce new coin issuance over time." />
  <meta property="og:title" content="Visualizing the Reward Schedule | Bitcoin Halving Countdown" />
  <meta property="og:description" content="Explore Bitcoin's fixed block reward schedule and how halvings progressively reduce new coin issuance over time." />
  <meta property="og:url" content="{base}/blog/posts/post5" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Visualizing the Reward Schedule</p>
  </div>

  <article class="prose">
    <h1>Visualizing the Reward Schedule</h1>
   
    <p class="post-meta">Published: December 17, 2025</p>
   
    <p>The reward schedule page provides a clear tabular view of Bitcoin's predetermined block reward reduction over time. It lists every halving epoch from the beginning through the point where rewards become effectively negligible, illustrating one of Bitcoin's most elegant design features.</p>
   
    <p>Starting with an initial reward of 50 BTC per block, the schedule halves this amount exactly every 210,000 blocks. The table displays each epoch, its block range, and the corresponding reward, showing the geometric progression that leads to Bitcoin's capped supply.</p>
   
    <p>The first epoch runs from block 0 to 209,999 with 50 BTC reward. The second from 210,000 to 419,999 with 25 BTC, and so on. By epoch 32, the reward is an extremely small fraction of a bitcoin, demonstrating how issuance tapers off asymptotically.</p>
   
    <p>This fixed schedule ensures that approximately 99 percent of all bitcoins are mined within the first two decades of the network's existence. The remaining fraction trickles out over subsequent epochs, extending far into the future.</p>
   
    <p>The visualization extends to 33 epochs to show the complete progression until rewards drop below practical significance. Each row clearly marks the start and end block for that reward level, making it easy to see the precise boundaries of each era.</p>
   
    <p>Understanding this schedule is crucial for grasping Bitcoin's scarcity model. Unlike traditional currencies with discretionary issuance, Bitcoin follows an immutable mathematical curve that was defined at launch and cannot be altered.</p>
   
    <p>The table format allows users to quickly reference any epoch, see how many blocks each reward level spans, and observe the rapid decline in new supply growth rate. This transparency is a cornerstone of Bitcoin's credibility as digital sound money.</p>
   
    <p>As miners transition from block rewards to transaction fees for revenue, the diminishing subsidy reinforces network security through economic incentives aligned with long-term sustainability.</p>
   
    <p>The reward schedule page serves as an educational reference that complements the live countdown features elsewhere in the utility. Together, they provide both the big-picture supply model and real-time progress tracking.</p>
   
    <p>By presenting this information in a straightforward table, the utility makes Bitcoin's complex issuance mechanics accessible to newcomers while offering precise data for experienced users analyzing long-term trends.</p>
  </article>
</div>

<style>
  .post-layout {
    max-width: 800px;
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }
  .breadcrumbs a {
    color: var(--accent-secondary);
  }
  .breadcrumbs a:hover {
    text-decoration: underline;
  }
  .breadcrumbs p {
    margin: 0;
  }

  .prose {
    line-height: 1.8;
  }

  .prose .post-meta {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1rem;
  }

  .prose h1 {
    color: var(--accent-secondary);
  }

  .prose h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .prose p {
    color: var(--text-primary);
  }

</style>