<!-- src/routes/terms/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms and Conditions | Bitcoin Halving Countdown</title>
  <meta name="description" content="Terms of use for the Bitcoin Halving Countdown utility—an open-source tool provided as-is with no warranties." />
  <meta property="og:title" content="Terms and Conditions | Bitcoin Halving Countdown" />
  <meta property="og:description" content="Terms of use for the Bitcoin Halving Countdown utility—an open-source tool provided as-is with no warranties." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Terms and Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms and Conditions</h1>

    <p class="post-meta">Effective Date: December 17, 2025</p>

    <h2>1. Acceptance of Terms</h2>
    <p>By accessing or using the <strong>Bitcoin Halving Countdown</strong> web utility ("the Utility"), you agree to these Terms and Conditions. If you do not agree, please do not use the Utility. We reserve the right to update these terms at any time.</p>

    <h2>2. Description of Service</h2>
    <p>The Utility is a free, open-source, client-side web application that provides real-time Bitcoin halving countdowns, block height tracking, progress indicators, calculators, and educational information about Bitcoin's reward schedule, historical impacts, and mining difficulty.</p>

    <h2>3. Use of the Utility</h2>
    <p>You may use the Utility for personal, non-commercial purposes. Permitted uses include viewing countdowns, using the calculator, and reading educational content. Prohibited uses include:</p>
    <ul>
      <li>Attempting to reverse-engineer or modify the code beyond open-source contributions.</li>
      <li>Using automated tools to scrape or overload the hosted instance.</li>
      <li>Commercial redistribution without attribution.</li>
    </ul>

    <h2>4. No Warranties</h2>
    <p>The Utility is provided <strong>"as-is"</strong> and <strong>"as-available"</strong> without warranties of any kind, express or implied. We do not guarantee:</p>
    <ul>
      <li>Accuracy of live data (dependent on public APIs).</li>
      <li>Uninterrupted access or error-free operation.</li>
      <li>Suitability for any purpose, including financial decisions.</li>
    </ul>
    <p>Blockchain data and estimates may vary slightly from other sources.</p>

    <h2>5. Limitation of Liability</h2>
    <p>We are not liable for any damages arising from use of the Utility, including loss of data, profits, or indirect damages. The Utility is educational only—not financial advice.</p>

    <h2>6. Intellectual Property</h2>
    <p>The Utility is open-source under the MIT license. Code may be forked or modified with attribution. Content (text, designs) is copyrighted but freely viewable.</p>

    <h2>7. External Links and APIs</h2>
    <p>The Utility links to or queries public sources (e.g., mempool.space). We are not responsible for their availability, accuracy, or policies.</p>

    <h2>8. Governing Law</h2>
    <p>These terms are governed by general open-source principles. Disputes, if any, resolved amicably via GitHub issues.</p>

    <h2>9. Changes to Terms</h2>
    <p>We may revise these terms. Continued use constitutes acceptance.</p>

    <h2>10. Contact</h2>
    <p>For questions, open a GitHub issue on the repository.</p>

    <p class="italic-note">Thank you for using the Bitcoin Halving Countdown—enjoy tracking the next halving responsibly.</p>
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

  .prose h1, .prose h2 {
    color: var(--accent-secondary);
  }

  .prose h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .prose h2 {
    margin-top: 2.5rem;
    border-bottom: 1px solid var(--secondary-bg);
    padding-bottom: 0.5rem;
  }

  .prose p {
    color: var(--text-primary);
  }

  .prose ul {
    list-style-type: '→ ';
    padding-left: 1.5rem;
    color: var(--text-primary);
  }
  .prose ul li::marker {
    color: var(--accent-primary);
  }
  .prose ul li {
    padding-left: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .prose .italic-note {
    font-style: italic;
    color: var(--text-secondary);
    text-align: center;
    margin-top: 3rem;
  }
</style>