// src/lib/utils/bitcoin.js (integrated fixed version)

export const HALVING_INTERVAL = 210000;
export const INITIAL_REWARD = 50;
export const AVG_BLOCK_TIME_MS = 10 * 60 * 1000; // 10 minutes in milliseconds

export const API_BLOCK_HEIGHT = 'https://mempool.space/api/blocks/tip/height';
export const API_DIFFICULTY = 'https://mempool.space/api/v1/mining/hashrate/1d'; // Use chart for current as well

// Hardcoded past halvings for reference (dates approximate). Update manually after new halvings.
export const PAST_HALVINGS = [
  { epoch: 0, block: 0, date: '2009-01-03', rewardBefore: null, rewardAfter: 50 },
  { epoch: 1, block: 210000, date: '2012-11-28', rewardBefore: 50, rewardAfter: 25 },
  { epoch: 2, block: 420000, date: '2016-07-09', rewardBefore: 25, rewardAfter: 12.5 },
  { epoch: 3, block: 630000, date: '2020-05-11', rewardBefore: 12.5, rewardAfter: 6.25 },
  { epoch: 4, block: 840000, date: '2024-04-19', rewardBefore: 6.25, rewardAfter: 3.125 }
  // Future ones can be estimated. Next expected ~2028.
];

export const FALLBACK_HEIGHT = 928317; // Updated accurate as of Dec 17, 2025
export const FALLBACK_DIFFICULTY = 148000000000000; // 148 T, approximate

export function getHalvingEpoch(height) {
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

export function estimateTimeToHalving(currentHeight) {
  const nextBlock = getNextHalvingBlock(currentHeight);
  const blocksLeft = nextBlock - currentHeight;
  // Prevent negative time (future-proof and safe)
  return Math.max(blocksLeft, 0) * AVG_BLOCK_TIME_MS;
}

export function getEstimatedNextHalvingDate(currentHeight) {
  const timeToHalving = estimateTimeToHalving(currentHeight);
  return new Date(Date.now() + timeToHalving);
}

export function getProgressToHalving(currentHeight) {
  const epoch = getHalvingEpoch(currentHeight);
  const lastHalvingBlock = epoch * HALVING_INTERVAL;
  const progress = ((currentHeight - lastHalvingBlock) / HALVING_INTERVAL) * 100;
  return progress.toFixed(2);
}

export async function fetchBlockHeight() {
  try {
    const response = await fetch(API_BLOCK_HEIGHT);
    if (!response.ok) throw new Error('Network response was not ok');
    return parseInt(await response.text(), 10);
  } catch (error) {
    console.error('Error fetching block height:', error);
    return FALLBACK_HEIGHT;
  }
}

export async function fetchDifficulty() {
  try {
    const response = await fetch(API_DIFFICULTY);
    if (!response.ok) throw new Error('Network response was not ok');
    const json = await response.json();
    return json.currentDifficulty || parseFloat(await response.text());
  } catch (error) {
    console.error('Error fetching difficulty:', error);
    return FALLBACK_DIFFICULTY;
  }
}