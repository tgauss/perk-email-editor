/**
 * Custom Loyalty Blocks Index
 * Exports all 7 custom loyalty blocks
 */

export { pointsBalanceBlock, pointsBalanceComponent } from './points-balance';
export { tierStatusBlock, tierStatusComponent } from './tier-status';
export { rewardRailBlock, rewardRailComponent } from './reward-rail';
export { receiptSummaryBlock, receiptSummaryComponent } from './receipt-summary';
export { referralLinkBlock, referralLinkComponent } from './referral-link';
export { commerceStatsBlock, commerceStatsComponent } from './commerce-stats';
export { challengeProgressBlock, challengeProgressComponent } from './challenge-progress';

// Array of all blocks for easy iteration
export const allLoyaltyBlocks = [
  'pointsBalanceBlock',
  'tierStatusBlock',
  'rewardRailBlock',
  'receiptSummaryBlock',
  'referralLinkBlock',
  'commerceStatsBlock',
  'challengeProgressBlock'
];
