// src/lib/utils/bitcoin.js

export const HALVING_INTERVAL = 210000;
export const INITIAL_REWARD = 50;
export const AVG_BLOCK_TIME_MS = 10 * 60 * 1000; // 10 minutes

export const API_BLOCK_HEIGHT =
  'https://mempool.space/api/blocks/tip/height';

export const FALLBACK_HEIGHT = 928317;

// ---------- Historical data ----------
// Dates are historically accurate; rewards are exact.
export const PAST_HALVINGS = [
  {
    epoch: 0,
    block: 0,
    date: '2009-01-03',
    rewardBefore: null,
    rewardAfter: 50
  },
  {
    epoch: 1,
    block: 210000,
    date: '2012-11-28',
    rewardBefore: 50,
    rewardAfter: 25
  },
  {
    epoch: 2,
    block: 420000,
    date: '2016-07-09',
    rewardBefore: 25,
    rewardAfter: 12.5
  },
  {
    epoch: 3,
    block: 630000,
    date: '2020-05-11',
    rewardBefore: 12.5,
    rewardAfter: 6.25
  },
  {
    epoch: 4,
    block: 840000,
    date: '2024-04-19',
    rewardBefore: 6.25,
    rewardAfter: 3.125
  }
];

// ---------- Core helpers ----------

export function getHalvingEpoch(height) {
  if (!Number.isFinite(height) || height <= 0) return 0;
  return Math.floor(height / HALVING_INTERVAL);
}

export function getBlockReward(epoch) {
  return INITIAL_REWARD / Math.pow(2, epoch);
}

export function getCurrentReward(height) {
  const epoch = getHalvingEpoch(height);
  return getBlockReward(epoch);
}

export function getNextHalvingBlock(height) {
  const epoch = getHalvingEpoch(height);
  return (epoch + 1) * HALVING_INTERVAL;
}

// ---------- Countdown helpers ----------

export function estimateTimeToHalving(height) {
  if (!Number.isFinite(height) || height <= 0) return 0;

  const nextBlock = getNextHalvingBlock(height);
  const blocksLeft = Math.max(nextBlock - height, 0);

  return blocksLeft * AVG_BLOCK_TIME_MS;
}

export function getEstimatedNextHalvingDate(height) {
  const ms = estimateTimeToHalving(height);
  if (!ms) return null;
  return new Date(Date.now() + ms);
}

export function getProgressToHalving(height) {
  if (!Number.isFinite(height) || height <= 0) return '0.00';

  const epoch = getHalvingEpoch(height);
  const lastHalvingBlock = epoch * HALVING_INTERVAL;

  const progress =
    ((height - lastHalvingBlock) / HALVING_INTERVAL) * 100;

  return Math.min(Math.max(progress, 0), 100).toFixed(2);
}

// ---------- API ----------

export async function fetchBlockHeight() {
  try {
    const res = await fetch(API_BLOCK_HEIGHT);
    if (!res.ok) throw new Error('Bad response');
    return parseInt(await res.text(), 10);
  } catch (err) {
    console.error('Block height fetch failed:', err);
    return FALLBACK_HEIGHT;
  }
}
