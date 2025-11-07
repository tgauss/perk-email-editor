/**
 * Loyalty Blocks Plugin for GrapeJS
 * Registers all custom loyalty blocks and components
 */

import {
  pointsBalanceBlock,
  pointsBalanceComponent,
  tierStatusBlock,
  tierStatusComponent,
  rewardRailBlock,
  rewardRailComponent,
  receiptSummaryBlock,
  receiptSummaryComponent,
  referralLinkBlock,
  referralLinkComponent,
  commerceStatsBlock,
  commerceStatsComponent,
  challengeProgressBlock,
  challengeProgressComponent
} from '../blocks';

export interface LoyaltyBlocksPluginOptions {
  enabledBlocks?: string[];
}

export default function loyaltyBlocksPlugin(editor: any, options: LoyaltyBlocksPluginOptions = {}) {
  const { enabledBlocks = [] } = options;

  // Check if a block is enabled
  const isEnabled = (blockId: string) => {
    return enabledBlocks.length === 0 || enabledBlocks.includes(blockId);
  };

  // Register all custom components
  pointsBalanceComponent(editor);
  tierStatusComponent(editor);
  rewardRailComponent(editor);
  receiptSummaryComponent(editor);
  referralLinkComponent(editor);
  commerceStatsComponent(editor);
  challengeProgressComponent(editor);

  // Add blocks to Block Manager
  const blockManager = editor.BlockManager;

  if (isEnabled('loyalty_points_balance')) {
    blockManager.add(pointsBalanceBlock.id, {
      label: pointsBalanceBlock.label,
      category: pointsBalanceBlock.category,
      content: pointsBalanceBlock.content,
      attributes: pointsBalanceBlock.attributes,
      media: `
        <svg viewBox="0 0 24 24" style="width: 100%; height: 100%;">
          <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"/>
        </svg>
      `
    });
  }

  if (isEnabled('loyalty_tier_status')) {
    blockManager.add(tierStatusBlock.id, {
      label: tierStatusBlock.label,
      category: tierStatusBlock.category,
      content: tierStatusBlock.content,
      attributes: tierStatusBlock.attributes,
      media: `
        <svg viewBox="0 0 24 24" style="width: 100%; height: 100%;">
          <path fill="currentColor" d="M12,15L7.5,17.5L8.67,12.5L5.33,9.5L10.5,9.17L12,4L13.5,9.17L18.67,9.5L15.33,12.5L16.5,17.5L12,15Z"/>
        </svg>
      `
    });
  }

  if (isEnabled('loyalty_reward_rail')) {
    blockManager.add(rewardRailBlock.id, {
      label: rewardRailBlock.label,
      category: rewardRailBlock.category,
      content: rewardRailBlock.content,
      attributes: rewardRailBlock.attributes,
      media: `
        <svg viewBox="0 0 24 24" style="width: 100%; height: 100%;">
          <path fill="currentColor" d="M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z"/>
        </svg>
      `
    });
  }

  if (isEnabled('loyalty_receipt_summary')) {
    blockManager.add(receiptSummaryBlock.id, {
      label: receiptSummaryBlock.label,
      category: receiptSummaryBlock.category,
      content: receiptSummaryBlock.content,
      attributes: receiptSummaryBlock.attributes,
      media: `
        <svg viewBox="0 0 24 24" style="width: 100%; height: 100%;">
          <path fill="currentColor" d="M19.5,3.5L18,2L16.5,3.5L15,2L13.5,3.5L12,2L10.5,3.5L9,2L7.5,3.5L6,2V22L7.5,20.5L9,22L10.5,20.5L12,22L13.5,20.5L15,22L16.5,20.5L18,22L19.5,20.5L21,22V2L19.5,3.5M9,9V7H15V9H9M9,13V11H15V13H9M9,17V15H15V17H9Z"/>
        </svg>
      `
    });
  }

  if (isEnabled('loyalty_referral_link')) {
    blockManager.add(referralLinkBlock.id, {
      label: referralLinkBlock.label,
      category: referralLinkBlock.category,
      content: referralLinkBlock.content,
      attributes: referralLinkBlock.attributes,
      media: `
        <svg viewBox="0 0 24 24" style="width: 100%; height: 100%;">
          <path fill="currentColor" d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z"/>
        </svg>
      `
    });
  }

  if (isEnabled('loyalty_commerce_stats')) {
    blockManager.add(commerceStatsBlock.id, {
      label: commerceStatsBlock.label,
      category: commerceStatsBlock.category,
      content: commerceStatsBlock.content,
      attributes: commerceStatsBlock.attributes,
      media: `
        <svg viewBox="0 0 24 24" style="width: 100%; height: 100%;">
          <path fill="currentColor" d="M5,3H7V5H5V10A2,2 0 0,1 3,12A2,2 0 0,1 5,14V19H7V21H5C3.93,20.73 3,20.1 3,19V15A2,2 0 0,0 1,13H0V11H1A2,2 0 0,0 3,9V5A2,2 0 0,1 5,3M19,3A2,2 0 0,1 21,5V9A2,2 0 0,0 23,11H24V13H23A2,2 0 0,0 21,15V19A2,2 0 0,1 19,21H17V19H19V14A2,2 0 0,1 21,12A2,2 0 0,1 19,10V5H17V3H19M12,15A1.5,1.5 0 0,1 13.5,16.5A1.5,1.5 0 0,1 12,18A1.5,1.5 0 0,1 10.5,16.5A1.5,1.5 0 0,1 12,15M12,9A1.5,1.5 0 0,1 13.5,10.5A1.5,1.5 0 0,1 12,12A1.5,1.5 0 0,1 10.5,10.5A1.5,1.5 0 0,1 12,9Z"/>
        </svg>
      `
    });
  }

  if (isEnabled('loyalty_challenge_progress')) {
    blockManager.add(challengeProgressBlock.id, {
      label: challengeProgressBlock.label,
      category: challengeProgressBlock.category,
      content: challengeProgressBlock.content,
      attributes: challengeProgressBlock.attributes,
      media: `
        <svg viewBox="0 0 24 24" style="width: 100%; height: 100%;">
          <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9"/>
        </svg>
      `
    });
  }

  // Add category styling
  editor.on('load', () => {
    const categories = editor.BlockManager.getCategories();
    categories.each((category: any) => {
      if (category.id === 'Loyalty') {
        category.set('open', true);
      }
    });
  });
}
