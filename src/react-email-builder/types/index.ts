/**
 * Perk Email Builder - TypeScript Definitions
 * GrapeJS-based email builder for loyalty platform
 */

export type UserRole = 'perk-admin' | 'client-admin' | 'client-marketer';

export interface ProgramTheme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background?: string;
    text?: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  logo?: {
    url: string;
    width: number;
    height?: number;
  };
  enabledBlocks: string[]; // Which custom tools are available for this program
}

export interface GlobalSettings {
  header: {
    logoUrl: string;
    logoWidth: number;
    logoHeight?: number;
    backgroundColor?: string;
    linkUrl?: string;
  };
  footer: {
    html: string; // Pre-rendered footer with legal/unsubscribe
    locked: boolean;
    backgroundColor?: string;
  };
}

export interface EmailTemplate {
  id?: string;
  name: string;
  programId: string;
  clientId: string;
  design: any; // GrapeJS design JSON
  html: string; // Final HTML output
  createdBy: UserRole;
  createdAt?: string;
  updatedAt?: string;
  metadata?: {
    customBlocksUsed: string[];
    mergeTagsUsed: string[];
    category?: string;
    description?: string;
  };
}

export interface MergeTagData {
  program: {
    id: number;
    name: string;
    points_term: string;
    support_email: string;
    support_url: string;
  };
  user: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    display_name: string;
    status: number;
    enrollment_date: string;
    days_since_enrollment: number;
    city?: string;
    state?: string;
    postal_code?: string;
    birthday?: string;
    phone?: string;
  };
  user_points: {
    lifetime: number;
    balance: number;
    points_to_next_tier?: number;
    next_tier_name?: string;
    next_reward_name?: string;
    points_to_next_reward?: number;
  };
  user_engagement: {
    sign_in_count: number;
    completed_challenges: number;
    last_activity_at: string;
    days_since_last_action: number;
  };
  user_commerce: {
    receipts: {
      total_eligible: number;
    };
    items: {
      total_eligible_lines: number;
      total_eligible_units: number;
    };
    spend: {
      total_eligible: number;
      avg_eligible_per_receipt: number;
    };
    favorite_merchant?: string;
    retailers_count: number;
  };
  user_rewards: {
    redeemed_count: number;
    last_redeemed_at?: string;
  };
  user_actions?: {
    receipts_submitted?: number;
    quizzes_completed?: number;
    surveys_completed?: number;
    games_played?: number;
    referrals_made?: number;
  };
  links: {
    account_url: string;
    rewards_catalog_url: string;
    support_url: string;
    unsubscribe_url: string;
  };
  // Context-specific data (for receipt emails, reward emails, etc.)
  receipt?: {
    id: number;
    submitted_at: string;
    status: string;
    merchant_name: string;
    eligible_lines: number;
    eligible_units: number;
    eligible_spend: number;
    basket_total: number;
  };
  reward?: {
    id: number;
    name: string;
    cost_points: number;
    redeemed_at: string;
  };
  points_awarded?: number;
}

export interface EmailBuilderProps {
  // Authentication & Context
  userRole: UserRole;
  programId: string;
  clientId: string;
  authToken?: string;

  // Layer 1: Program Theme (set by Perk Admin)
  programTheme: ProgramTheme;

  // Layer 2: Global Settings (set by Client Admin)
  globalSettings: GlobalSettings;

  // Template Management
  templateId?: string;
  initialDesign?: any; // GrapeJS design JSON
  initialHtml?: string;

  // Callbacks
  onSave: (template: EmailTemplate) => Promise<void>;
  onExport?: (html: string, design: any) => void;
  onLoad?: () => void;

  // Options
  readonly?: boolean;
  minHeight?: string;
  showToolbar?: boolean;
}

export interface CustomBlockConfig {
  id: string;
  label: string;
  category: string;
  icon?: string;
  content: string | (() => string);
  attributes?: Record<string, any>;
}

export interface MergeTagConfig {
  namespace: string;
  label: string;
  tags: {
    key: string;
    label: string;
    value: string;
    example?: string;
  }[];
}

export interface RewardRailConfig {
  count: number;
  layout: '1-column' | '2-column' | '3-column';
  filter: 'newest' | 'cheapest' | 'featured';
  showCost: boolean;
  showImage: boolean;
  showDescription: boolean;
}
