<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';
  import { fade, fly } from 'svelte/transition';

  // Theme Toggle
  let isDarkMode = false;
  function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.dataset.bsTheme = isDarkMode ? 'dark' : 'light';
  }

  // Support Dropdown
  let isDropdownOpen = false;

  const toggleDropdown = () => (isDropdownOpen = !isDropdownOpen);
  const closeDropdown = () => (isDropdownOpen = false);

  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return { destroy() { document.removeEventListener('click', handleClick, true); } };
  }

  const currentYear = new Date().getFullYear();
</script>

<header class="fixed-top p-3">
  <nav
    class="container glass rounded-pill px-4 py-2 d-flex justify-content-between align-items-center shadow-sm"
    style="max-width: 1200px;"
  >
    <div class="d-flex align-items-center gap-3">
      <a href="{base}/" class="d-flex align-items-center gap-2 text-decoration-none logo-group">
        <img src="{base}/AxelLab-Logo.ico" alt="Logo" class="nav-logo" />
        <span class="fw-bold fs-5 brand-name">AxelBase</span>
      </a>

      <!-- Buy Me a Coffee + Bitcoin Dropdown -->
      <div class="position-relative" use:clickOutside on:click_outside={closeDropdown}>
        <button
          class="bmac-button d-flex align-items-center gap-2 px-4 py-2 rounded-pill shadow-sm"
          on:click={toggleDropdown}
          aria-label="Support options"
        >
          <i class="bi bi-cup-hot-fill steam-anim"></i>
          <span class="d-none d-md-inline fw-semibold">Buy me a Coffee</span>
        </button>

        {#if isDropdownOpen}
          <div
            class="bmac-dropdown glass mt-2 p-2"
            transition:fly={{ y: -10, duration: 250 }}
          >
            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener noreferrer"
              on:click={closeDropdown}
              class="donation-item"
            >
              <span class="amount">$3</span> One Coffee
            </a>

            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener noreferrer"
              on:click={closeDropdown}
              class="donation-item"
            >
              <span class="amount">$5</span> Two Coffees
            </a>

            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener noreferrer"
              on:click={closeDropdown}
              class="donation-item"
            >
              <span class="amount">$10</span> Three Coffees
            </a>

            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener noreferrer"
              on:click={closeDropdown}
              class="donation-item custom-amount"
            >
              Custom Amount
            </a>

            <a
              href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
              target="_blank"
              rel="noopener noreferrer"
              on:click={closeDropdown}
              class="donation-item custom-amount bitcoin-item"
            >
              Buy via Crypto (Bitcoin)
            </a>
          </div>
        {/if}
      </div>
    </div>

    <div class="d-flex align-items-center gap-2">
      <ul class="nav d-none d-lg-flex gap-1 me-3 align-items-center">
        <li><a class="nav-link-custom" href="{base}/">Home</a></li>
        <li><a class="nav-link-custom" href="{base}/#about">About</a></li>
        <li><a class="nav-link-custom" href="{base}/#how-to">How to use</a></li>
        <li><a class="nav-link-custom" href="{base}/#faq">FAQ</a></li>

        <li class="tools-parent">
          <span class="nav-link-custom">Tools <i class="bi bi-chevron-down small"></i></span>
          <ul class="tools-menu glass">
            <li><a href="{base}/next-halving">Next Halving</a></li>
            <li><a href="{base}/past-halvings">Past Halvings</a></li>
            <li><a href="{base}/halving-calculator">Calculator</a></li>
            <li><a href="{base}/block-height">Block Height</a></li>
            <li><a href="{base}/reward-schedule">Reward Schedule</a></li>
            <li><a href="{base}/impact-on-price">Price Impact</a></li>
            <li><a href="{base}/mining-difficulty">Difficulty</a></li>
            <li><a href="{base}/halving-timeline">Timeline</a></li>
            <li><a href="{base}/subsidy-reduction">Subsidy</a></li>
          </ul>
        </li>

        <li><a class="btn-gold ms-2" href="{base}/blog">Blog</a></li>
      </ul>

      <button class="theme-toggle" on:click={toggleTheme} aria-label="Toggle Theme">
        <i class="bi {isDarkMode ? 'bi-sun-fill' : 'bi-moon-stars-fill'}"></i>
      </button>
    </div>
  </nav>
</header>

<main class="container" style="padding-top: 100px; padding-bottom: 80px;" in:fade={{ duration: 600 }}>
  <slot />
</main>

<footer class="fixed-bottom glass py-2 text-center">
  <div class="container d-flex flex-column flex-sm-row justify-content-between align-items-center small text-muted">
    <span>© {currentYear} AxelBase Bitcoin Halving Countdown</span>
    <div class="d-flex gap-3">
      <a href="{base}/privacy" class="footer-link">Privacy</a>
      <a href="{base}/terms" class="footer-link">Terms</a>
    </div>
  </div>
</footer>

<style>
  /* ── Buy Me a Coffee Button & Dropdown ── */
  .bmac-button {
    background: var(--primary-gold);
    color: white;
    font-weight: 600;
    font-size: 0.92rem;
    border: none;
    transition: all 0.3s ease;
    white-space: nowrap;
  }

  .bmac-button:hover {
    background: var(--primary-gold-hover);
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(112, 83, 53, 0.25);
  }

  .bmac-dropdown {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 240px;
    border-radius: 16px;
    overflow: hidden;
    z-index: 1000;
    border: 1px solid var(--glass-border);
  }

  .donation-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 18px;
    color: var(--text-main);
    text-decoration: none;
    font-size: 0.96rem;
    transition: all 0.2s ease;
  }

  .donation-item:hover {
    background: rgba(112, 83, 53, 0.12);
    color: var(--primary-gold);
    padding-left: 24px;
  }

  .amount {
    font-weight: 700;
    color: var(--primary-gold);
    font-size: 1.08rem;
    min-width: 48px;
  }

  .custom-amount {
    font-weight: 600;
    color: var(--primary-gold);
    justify-content: center !important;
    border-top: 1px solid var(--glass-border);
    margin-top: 4px;
    padding-top: 12px !important;
  }

  .bitcoin-item {
    color: #f7931a !important;
    font-weight: 600;
  }

  .bitcoin-item:hover {
    background: rgba(247, 147, 26, 0.12) !important;
    color: #f7931a !important;
  }

  /* Steam animation for coffee icon */
  .steam-anim {
    display: inline-block;
    animation: steam 2s infinite ease-in-out;
  }

  @keyframes steam {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(-4px); opacity: 0; }
  }

  /* ── Your existing styles (kept unchanged) ── */
  .nav-logo {
    height: 32px;
    transition: transform 0.3s;
  }

  .logo-group:hover .nav-logo {
    transform: rotate(15deg) scale(1.1);
  }

  .brand-name {
    color: var(--primary-gold);
  }

  .nav-link-custom {
    padding: 0.5rem 0.8rem;
    color: var(--text-muted);
    font-weight: 600;
    text-decoration: none;
    transition: color 0.3s;
  }

  .nav-link-custom:hover {
    color: var(--primary-gold);
  }

  .tools-parent {
    position: relative;
  }

  .tools-menu {
    position: absolute;
    top: 100%;
    right: 0;
    min-width: 200px;
    padding: 1rem;
    border-radius: 20px;
    list-style: none;
    opacity: 0;
    visibility: hidden;
    transform: translateY(15px);
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    z-index: 1100;
  }

  .tools-parent:hover .tools-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .tools-menu li {
    margin-bottom: 0.5rem;
  }

  .tools-menu a {
    text-decoration: none;
    color: var(--text-main);
    display: block;
    padding: 6px 12px;
    border-radius: 10px;
    font-size: 0.9rem;
    transition: background 0.2s;
  }

  .tools-menu a:hover {
    background: var(--primary-gold);
    color: white !important;
  }

  .btn-gold {
    background: var(--primary-gold);
    color: white !important;
    border-radius: 50px;
    padding: 0.5rem 1.2rem;
    font-weight: 600;
    border: none;
    text-decoration: none;
  }

  .theme-toggle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background: var(--glass-border);
    color: var(--primary-gold);
    transition: all 0.3s;
  }
</style>