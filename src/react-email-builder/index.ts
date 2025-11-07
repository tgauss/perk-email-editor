/**
 * Perk Email Builder - Main Export
 * GrapeJS-based email builder for loyalty platforms
 */

// Main Component
export { default as EmailBuilder } from './components/EmailBuilder';

// Types
export type {
  UserRole,
  ProgramTheme,
  GlobalSettings,
  EmailTemplate,
  MergeTagData,
  EmailBuilderProps,
  CustomBlockConfig,
  MergeTagConfig,
  RewardRailConfig
} from './types';

// Plugins
export { default as loyaltyBlocksPlugin } from './plugins/loyalty-blocks-plugin';
export { default as mergeTagsPlugin } from './plugins/merge-tags-plugin';

// Utilities
export {
  injectGlobalSettings,
  inlineStyles,
  wrapEmailTemplate,
  sanitizeEmailHtml,
  htmlToPlainText,
  validateEmailHtml
} from './utils/html-export';

// Config
export {
  mergeTagGroups,
  allMergeTags,
  replaceMergeTags,
  extractMergeTags
} from './config/merge-tags';

export {
  mockMergeTagData,
  mockReceiptData,
  mockRewardData,
  mockRewards,
  defaultProgramTheme
} from './config/mock-data';

// Blocks
export * from './blocks';

// Demo
export { default as EmailBuilderDemo } from './demo/EmailBuilderDemo';
