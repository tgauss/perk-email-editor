# Perk Email Builder

A powerful, customizable email builder built with **GrapeJS** for loyalty platforms. Features 7 custom loyalty-specific blocks, comprehensive merge tag system, and role-based permissions.

## 🚀 Features

### ✅ **7 Custom Loyalty Blocks**
1. **Points Balance** - Display user's current points with customizable styling
2. **Tier Status** - Show tier progress with visual progress bars
3. **Reward Rail** - Showcase 1-3 rewards in a grid layout
4. **Receipt Summary** - Display receipt approval/rejection status
5. **Referral Link** - Promote referral program with CTA
6. **Commerce Stats** - Show user's purchase activity metrics
7. **Challenge Progress** - Display challenge completion status

### ✅ **Comprehensive Merge Tag System**
- **9 namespaces** covering all loyalty data
- **80+ merge tags** for personalization
- Program data (name, points_term, support info)
- User identity & profile (name, email, location, birthday)
- Points & tiers (balance, lifetime, progress)
- Engagement (sign-ins, challenges completed)
- Commerce (receipts, spend, favorite merchant)
- Rewards (redemptions, availability)
- Links (account, catalog, support, unsubscribe)
- Receipt-specific data
- Reward-specific data

### ✅ **Role-Based Architecture**
- **Perk Admin**: Configure program theme and enabled blocks
- **Client Admin**: Set global header/footer (Layer 2)
- **Client Marketer**: Build email templates with pre-configured blocks

### ✅ **Email-Optimized Output**
- Inline CSS for email client compatibility
- Responsive design (desktop + mobile preview)
- Outlook-compatible HTML tables
- Global header/footer injection
- Template wrapping with proper DOCTYPE

---

## 📦 Installation

```bash
npm install grapesjs grapesjs-preset-newsletter juice
```

**Dependencies:**
- `grapesjs` - Core drag-and-drop builder
- `grapesjs-preset-newsletter` - Email-specific blocks and features
- `juice` - CSS inlining for email compatibility

---

## 🏗️ Project Structure

```
src/react-email-builder/
├── components/
│   └── EmailBuilder.tsx          # Main component
├── blocks/
│   ├── points-balance.ts         # Points display block
│   ├── tier-status.ts            # Tier progress block
│   ├── reward-rail.ts            # Rewards showcase block
│   ├── receipt-summary.ts        # Receipt status block
│   ├── referral-link.ts          # Referral CTA block
│   ├── commerce-stats.ts         # Activity stats block
│   ├── challenge-progress.ts     # Challenge progress block
│   └── index.ts                  # Exports all blocks
├── plugins/
│   ├── loyalty-blocks-plugin.ts  # Registers custom blocks
│   └── merge-tags-plugin.ts      # Merge tag system
├── config/
│   ├── merge-tags.ts             # Merge tag definitions
│   └── mock-data.ts              # Sample data for preview
├── utils/
│   └── html-export.ts            # HTML processing utilities
├── types/
│   └── index.ts                  # TypeScript definitions
├── styles/
│   └── email-builder.css         # Custom GrapeJS styling
├── demo/
│   └── EmailBuilderDemo.tsx      # Example implementation
└── index.ts                      # Main exports
```

---

## 💻 Usage

### Basic Implementation

```tsx
import React from 'react';
import { EmailBuilder, EmailBuilderProps, EmailTemplate } from './react-email-builder';

const MyEmailBuilder = () => {
  const handleSave = async (template: EmailTemplate) => {
    // Save to your backend
    await fetch('/api/templates', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(template)
    });
  };

  const builderProps: EmailBuilderProps = {
    userRole: 'client-admin',
    programId: 'program-123',
    clientId: 'client-abc',

    programTheme: {
      colors: {
        primary: '#4F46E5',
        secondary: '#7C3AED',
        accent: '#EC4899',
        background: '#F9FAFB',
        text: '#111827'
      },
      fonts: {
        heading: 'Arial, Helvetica, sans-serif',
        body: 'Arial, Helvetica, sans-serif'
      },
      enabledBlocks: [
        'loyalty_points_balance',
        'loyalty_tier_status',
        'loyalty_reward_rail',
        'loyalty_receipt_summary',
        'loyalty_referral_link',
        'loyalty_commerce_stats',
        'loyalty_challenge_progress'
      ]
    },

    globalSettings: {
      header: {
        logoUrl: 'https://example.com/logo.png',
        logoWidth: 200,
        backgroundColor: '#ffffff',
        linkUrl: 'https://example.com'
      },
      footer: {
        html: `
          <div style="text-align: center; padding: 20px;">
            <p>© 2025 Your Company. All rights reserved.</p>
            <a href="{{links.unsubscribe_url}}">Unsubscribe</a>
          </div>
        `,
        locked: true,
        backgroundColor: '#f3f4f6'
      }
    },

    onSave: handleSave,
    onLoad: () => console.log('Builder loaded'),
    showToolbar: true,
    minHeight: '800px'
  };

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <EmailBuilder {...builderProps} />
    </div>
  );
};

export default MyEmailBuilder;
```

---

## 🎨 Custom Blocks

Each block is fully customizable with configurable properties:

### 1. Points Balance Block

```typescript
// Features:
- Customizable heading text
- Show/hide lifetime points
- Adjustable text alignment
- Custom colors for points and background
- Merge tags: {{user_points.balance}}, {{program.points_term}}
```

### 2. Tier Status Block

```typescript
// Features:
- Current tier display
- Progress bar to next tier
- Customizable gradient background
- Icon/emoji customization
- Merge tags: {{user_points.points_to_next_tier}}, {{user_points.next_tier_name}}
```

### 3. Reward Rail Block

```typescript
// Features:
- 1, 2, or 3 column layouts
- Filter by featured/newest/cheapest
- Show/hide images and descriptions
- Customizable button colors
- Merge tags: {{reward.cost_points}}, {{links.rewards_catalog_url}}
```

### 4. Receipt Summary Block

```typescript
// Features:
- Approved/rejected/pending states
- Show/hide detailed breakdown
- Auto-styled by status
- Merge tags: {{receipt.merchant_name}}, {{receipt.eligible_spend}}, {{points_awarded}}
```

### 5. Referral Link Block

```typescript
// Features:
- Customizable heading and CTA text
- Gradient background colors
- Merge tags: {{links.referral_url}}
```

### 6. Commerce Stats Block

```typescript
// Features:
- Show/hide receipts, items, spend
- Grid layout with colored cards
- Favorite merchant display
- Merge tags: {{user_commerce.receipts.total_eligible}}, {{user_commerce.spend.total_eligible}}
```

### 7. Challenge Progress Block

```typescript
// Features:
- Customizable challenge name and description
- Visual progress bar
- Reward information display
- Merge tags: {{program.points_term}}, {{links.account_url}}
```

---

## 🏷️ Merge Tags Reference

### Program Data
```
{{program.name}}
{{program.points_term}}
{{program.support_email}}
{{program.support_url}}
```

### User Identity
```
{{user.first_name}}
{{user.last_name}}
{{user.display_name}}
{{user.email}}
{{user.city}}
{{user.state}}
```

### User Points
```
{{user_points.balance}}
{{user_points.lifetime}}
{{user_points.points_to_next_tier}}
{{user_points.next_tier_name}}
{{user_points.next_reward_name}}
```

### User Engagement
```
{{user_engagement.sign_in_count}}
{{user_engagement.completed_challenges}}
{{user_engagement.days_since_last_action}}
```

### User Commerce
```
{{user_commerce.receipts.total_eligible}}
{{user_commerce.spend.total_eligible}}
{{user_commerce.favorite_merchant}}
{{user_commerce.retailers_count}}
```

### Links
```
{{links.account_url}}
{{links.rewards_catalog_url}}
{{links.support_url}}
{{links.unsubscribe_url}}
```

### Receipt Data (for receipt emails)
```
{{receipt.merchant_name}}
{{receipt.eligible_spend}}
{{receipt.eligible_units}}
{{points_awarded}}
```

### Reward Data (for redemption emails)
```
{{reward.name}}
{{reward.cost_points}}
{{reward.redeemed_at}}
```

**📚 Full list:** See `src/react-email-builder/config/merge-tags.ts`

---

## 🎯 Common Email Templates

### Welcome Email
```tsx
// Blocks to use:
- Points Balance
- Tier Status
- Referral Link

// Key merge tags:
{{user.first_name}}
{{user_points.balance}}
{{user_points.next_tier_name}}
{{links.account_url}}
```

### Receipt Approved
```tsx
// Blocks to use:
- Receipt Summary

// Key merge tags:
{{receipt.merchant_name}}
{{receipt.eligible_spend}}
{{points_awarded}}
{{user_points.balance}}
```

### Monthly Recap
```tsx
// Blocks to use:
- Commerce Stats
- Reward Rail

// Key merge tags:
{{user.display_name}}
{{user_commerce.receipts.total_eligible}}
{{user_commerce.spend.total_eligible}}
```

### Reward Redemption Confirmation
```tsx
// Blocks to use:
- Custom text block
- Points Balance

// Key merge tags:
{{user.first_name}}
{{reward.name}}
{{reward.cost_points}}
{{user_points.balance}}
```

---

## 🔧 Backend Integration

### Saving Templates

```typescript
// Your save handler
const handleSave = async (template: EmailTemplate) => {
  const response = await fetch('/api/email-templates', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    },
    body: JSON.stringify({
      program_id: template.programId,
      name: template.name,
      design_json: JSON.stringify(template.design),
      html: template.html,
      created_by: template.createdBy,
      custom_blocks_used: template.metadata?.customBlocksUsed,
      merge_tags_used: template.metadata?.mergeTagsUsed
    })
  });

  if (!response.ok) {
    throw new Error('Failed to save template');
  }

  return await response.json();
};
```

### Sending Emails (via Postmark)

```typescript
// Backend: Replace merge tags with real data
import { replaceMergeTags } from './config/merge-tags';

async function sendEmail(templateId: string, userId: string) {
  // 1. Load template from database
  const template = await db.emailTemplates.findById(templateId);

  // 2. Load user data
  const userData = await db.users.findById(userId);

  // 3. Build merge data object
  const mergeData = {
    program: {
      id: userData.programId,
      name: userData.program.name,
      points_term: userData.program.pointsTerm,
      support_email: userData.program.supportEmail,
      support_url: userData.program.supportUrl
    },
    user: {
      first_name: userData.firstName,
      last_name: userData.lastName,
      email: userData.email,
      // ... rest of user data
    },
    user_points: {
      balance: userData.pointsBalance,
      lifetime: userData.lifetimePoints,
      // ...
    },
    // ... rest of data
  };

  // 4. Replace merge tags
  const finalHtml = replaceMergeTags(template.html, mergeData);

  // 5. Send via Postmark
  await postmarkClient.sendEmail({
    From: 'noreply@example.com',
    To: userData.email,
    Subject: 'Your Loyalty Program Update',
    HtmlBody: finalHtml
  });
}
```

---

## 🎨 Customization

### Theme Customization

```typescript
const programTheme: ProgramTheme = {
  colors: {
    primary: '#FF6B6B',      // Your brand primary color
    secondary: '#4ECDC4',    // Your brand secondary color
    accent: '#FFE66D',       // Accent color for highlights
    background: '#F7F7F7',   // Email background
    text: '#2C3E50'          // Default text color
  },
  fonts: {
    heading: 'Georgia, serif',
    body: 'Arial, Helvetica, sans-serif'
  },
  logo: {
    url: 'https://yoursite.com/logo.png',
    width: 180,
    height: 60
  },
  // Enable only specific blocks for this program
  enabledBlocks: [
    'loyalty_points_balance',
    'loyalty_reward_rail'
    // Leave others disabled
  ]
};
```

### Adding Custom Blocks

```typescript
// Create new block in /blocks/my-custom-block.ts
export const myCustomBlock = {
  id: 'loyalty-custom-block',
  label: 'My Custom Block',
  category: 'Loyalty',
  content: `
    <table>
      <tr>
        <td>Custom content here with {{merge.tag}}</td>
      </tr>
    </table>
  `
};

// Register in loyalty-blocks-plugin.ts
if (isEnabled('loyalty_custom_block')) {
  blockManager.add(myCustomBlock.id, { ... });
}
```

---

## 📱 Mobile Responsiveness

All blocks are built with mobile-first responsive design:

```html
<!-- Example responsive table -->
<table role="presentation" width="100%">
  <tr>
    <td class="mobile-full-width" width="50%">
      Content
    </td>
  </tr>
</table>

<style>
  @media only screen and (max-width: 600px) {
    .mobile-full-width {
      width: 100% !important;
    }
  }
</style>
```

---

## 🧪 Testing

### Preview with Mock Data

```typescript
import { mockMergeTagData } from './config/mock-data';
import { replaceMergeTags } from './config/merge-tags';

const handlePreview = () => {
  const html = editor.runCommand('gjs-get-inlined-html');
  const previewHtml = replaceMergeTags(html, mockMergeTagData);

  // Open in new window
  const win = window.open('', 'Preview');
  win.document.write(previewHtml);
};
```

### Email Client Testing

Use services like:
- **Litmus** - Test across 90+ email clients
- **Email on Acid** - Visual testing and spam checking
- **Postmark SPAM Check** - Free spam score analysis

---

## 🚢 Deployment

### Environment Variables

```env
# In your backend
POSTMARK_API_KEY=your-postmark-api-key
AWS_S3_BUCKET=your-image-bucket
DATABASE_URL=your-postgres-url
```

### Build for Production

```bash
# Build the React email builder
npm run build

# The builder is a component, not a standalone app
# Import it into your admin dashboard
```

---

## 📊 Analytics & Tracking

### Track Email Opens

```html
<!-- Add tracking pixel in footer -->
<img src="{{links.tracking_pixel_url}}" width="1" height="1" />
```

### Track Link Clicks

```typescript
// Wrap all links with tracking redirect
const links_account_url = `https://track.example.com/click?url=${encodeURIComponent(realUrl)}&user=${userId}`;
```

---

## 🐛 Troubleshooting

### Issue: Blocks not appearing

**Solution:** Check `enabledBlocks` array in `programTheme`:

```typescript
programTheme: {
  enabledBlocks: [
    'loyalty_points_balance',  // Must match block IDs exactly
    'loyalty_tier_status',
    // ...
  ]
}
```

### Issue: Merge tags not replacing

**Solution:** Ensure data structure matches exactly:

```typescript
// ❌ Wrong
{ user: { pointsBalance: 1000 } }

// ✅ Correct
{ user_points: { balance: 1000 } }
```

### Issue: Emails look broken in Outlook

**Solution:** Use the inline styles utility:

```typescript
import { inlineStyles } from './utils/html-export';
const finalHtml = inlineStyles(html);
```

---

## 📄 License

This is a proprietary component built for the Perk loyalty platform. Built with open-source GrapeJS (BSD-3-Clause).

---

## 🤝 Support

For questions or issues:
1. Check the troubleshooting section
2. Review GrapeJS docs: https://grapesjs.com/docs/
3. Contact the development team

---

## 🎉 Next Steps

1. **Integrate with your admin** - Import `EmailBuilder` component
2. **Connect to backend** - Implement `onSave` handler
3. **Configure themes** - Set up `programTheme` for each client
4. **Add merge tag data** - Build real merge data from your database
5. **Test with Postmark** - Send test emails to verify rendering
6. **Launch!** 🚀

---

**Built with ❤️ for Perk Loyalty Platform**
