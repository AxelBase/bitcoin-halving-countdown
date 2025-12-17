<!-- src/routes/privacy/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | Bitcoin Halving Countdown</title>
  <meta name="description" content="The Bitcoin Halving Countdown utility collects no personal data and processes everything client-side for maximum privacy." />
  <meta property="og:title" content="Privacy Policy | Bitcoin Halving Countdown" />
  <meta property="og:description" content="The Bitcoin Halving Countdown utility collects no personal data and processes everything client-side for maximum privacy." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>

    <p class="post-meta">Effective Date: December 17, 2025</p>

    <h2>1. Introduction</h2>
    <p>Welcome to the <strong>Bitcoin Halving Countdown</strong>, a free, open-source web utility designed to track Bitcoin halvings in real time ("we," "us," or "our"). This Privacy Policy explains our data practices. We prioritize <strong>user privacy</strong> and operate on a <em>no-collection principle</em>. The utility runs entirely in your browser, fetching public blockchain data when needed, but <strong>we do not collect, store, or transmit any personal information</strong>.</p>

    <h2>2. Information We Do Not Collect</h2>
    <p>As a client-side application, we avoid gathering any user data:</p>
    <ul>
      <li><strong>Personal Information</strong>: No names, emails, IP addresses, or device details.</li>
      <li><strong>Usage Analytics</strong>: No tracking of visits, page views, or behavior—no cookies, pixels, or third-party tools like Google Analytics.</li>
      <li><strong>Input Data</strong>: Any interactions (e.g., halving calculator inputs) are processed locally and never sent to servers.</li>
      <li><strong>Blockchain Queries</strong>: Live data (block height, progress) is fetched from public APIs like mempool.space directly by your browser—we receive nothing.</li>
    </ul>
    <p>Your experience remains <strong>completely anonymous</strong>.</p>

    <h2>3. How Data Is Handled</h2>
    <p>The utility functions purely client-side:</p>
    <ul>
      <li><strong>Real-Time Features</strong>: Countdown, block height, and progress use JavaScript to query public endpoints in your browser.</li>
      <li><strong>Calculations</strong>: Halving estimates and schedules are computed locally using Bitcoin's fixed rules.</li>
      <li><strong>Static Content</strong>: Historical tables (price impacts, difficulty) are hardcoded for reliability—no external loads.</li>
    </ul>
    <p>No data leaves your device unless your browser requests public blockchain info, which is anonymous and standard for any Bitcoin explorer.</p>

    <h2>4. Third-Party Services</h2>
    <p>We use minimal external resources:</p>
    <ul>
      <li>Public APIs (e.g., mempool.space) for live block data—your browser contacts them directly.</li>
      <li>Bootstrap CDN for styling—no tracking.</li>
    </ul>
    <p>No advertising, analytics, or social integrations that could collect data.</p>

    <h2>5. Cookies and Tracking</h2>
    <p>We <strong>do not use cookies</strong>, local storage for tracking, or any persistent identifiers. Sessions are stateless.</p>

    <h2>6. Security</h2>
    <p>Since no data is collected, there is nothing to breach. We recommend using updated browsers and secure connections (HTTPS) for general web safety.</p>

    <h2>7. Children's Privacy</h2>
    <p>The utility is general audience; we do not target children under 13 and collect no data regardless.</p>

    <h2>8. International Compliance</h2>
    <p>By collecting nothing, we comply with GDPR, CCPA, and similar laws by design.</p>

    <h2>9. Changes</h2>
    <p>Updates to this policy will be posted here with new effective date.</p>

    <h2>10. Contact</h2>
    <p>Questions? Open an issue on our GitHub repository.</p>

    <p class="italic-note">We believe privacy is fundamental—enjoy the utility with complete peace of mind.</p>
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