# 🧪 Testing the Perk Email Builder

## Quick Test (Recommended - 2 minutes)

### Option 1: Standalone HTML Test Page

The fastest way to test the email builder:

```bash
# 1. Start a simple HTTP server
npx http-server public -p 8080 -o

# 2. Your browser will open automatically to:
# http://localhost:8080

# 3. Click on: test-email-builder.html
```

**What you'll see:**
- ✅ Full GrapeJS email editor
- ✅ 5 custom loyalty blocks in the left sidebar (under "Loyalty" category)
- ✅ Drag and drop blocks onto the canvas
- ✅ Edit text, styles, and properties
- ✅ Export HTML button in the top toolbar
- ✅ Desktop/Mobile preview switcher

**Try this:**
1. Drag "Points Balance" block onto canvas
2. Drag "Reward Rail" block below it
3. Drag "Receipt Summary" block below that
4. Click any block to edit its properties
5. Click the code icon (top right) to export HTML
6. Switch to mobile view using the device icons

---

## Full React Integration Test (Advanced)

If you want to test the full React component with all features:

### Step 1: Create missing config files

The main React component needs 3 config files. Create these:

#### A. `src/react-email-builder/config/mock-data.ts`

```typescript
export const mockMergeTagData = {
  program: {
    id: 10000154,
    name: 'Fun Club Rewards',
    points_term: 'Points',
    support_email: 'support@funclub.com',
    support_url: 'https://funclub.com/help'
  },
  user: {
    id: 10247076,
    email: 'wendy.brown@example.com',
    first_name: 'Wendy',
    last_name: 'Brown',
    display_name: 'Wendy B.',
    status: 1,
    enrollment_date: '2025-06-02T10:30:00Z',
    days_since_enrollment: 140
  },
  user_points: {
    lifetime: 88826,
    balance: 88826,
    points_to_next_tier: 1174,
    next_tier_name: 'Gold'
  },
  links: {
    account_url: 'https://example.funclub.com/account',
    rewards_catalog_url: 'https://example.funclub.com/rewards',
    support_url: 'https://funclub.com/help',
    unsubscribe_url: 'https://email.funclub.com/unsub'
  }
};

export const defaultProgramTheme = {
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
    'loyalty_commerce_stats'
  ]
};
```

#### B. `src/react-email-builder/config/merge-tags.ts`

```typescript
export const mergeTagGroups = [
  {
    namespace: 'program',
    label: 'Program Info',
    tags: [
      { key: 'program.name', label: 'Program Name', value: '{{program.name}}', example: 'Fun Club' },
      { key: 'program.points_term', label: 'Points Term', value: '{{program.points_term}}', example: 'Points' }
    ]
  },
  {
    namespace: 'user',
    label: 'User Identity',
    tags: [
      { key: 'user.first_name', label: 'First Name', value: '{{user.first_name}}', example: 'Wendy' },
      { key: 'user.email', label: 'Email', value: '{{user.email}}', example: 'wendy@example.com' }
    ]
  }
];

export function replaceMergeTags(html: string, data: any): string {
  let result = html;
  const pattern = /\{\{([^}]+)\}\}/g;
  result = result.replace(pattern, (match, path) => {
    const keys = path.trim().split('.');
    let value = data;
    for (const key of keys) {
      value = value?.[key];
    }
    return value !== undefined ? String(value) : match;
  });
  return result;
}
```

#### C. `src/react-email-builder/components/EmailBuilder.tsx`

*This is a large file - see PERK_EMAIL_BUILDER_README.md lines 800-1100 for the full code*

### Step 2: Create a React test page

```bash
# Create test file
touch src/test-email-builder.tsx
```

Add this content:

```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import { EmailBuilder } from './react-email-builder';

const App = () => {
  return (
    <EmailBuilder
      userRole="client-admin"
      programId="test-123"
      clientId="test-client"
      programTheme={{
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
        enabledBlocks: ['loyalty_points_balance', 'loyalty_tier_status', 'loyalty_reward_rail']
      }}
      globalSettings={{
        header: {
          logoUrl: 'https://via.placeholder.com/200x80',
          logoWidth: 200
        },
        footer: {
          html: '<p>© 2025 Test Company</p>',
          locked: true
        }
      }}
      onSave={async (template) => {
        console.log('Template saved:', template);
        alert('Template saved! Check console.');
      }}
    />
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
```

### Step 3: Build and run

```bash
# Install if needed
npm install

# Run dev server
npm run serve
```

---

## What Each Test Shows

### HTML Test Page (Simple)
- ✅ GrapeJS loads correctly
- ✅ Custom blocks appear in sidebar
- ✅ Blocks can be dragged and dropped
- ✅ Email HTML can be exported
- ✅ Styles render correctly
- ⚠️ No merge tags (static preview only)
- ⚠️ No React integration
- ⚠️ No save functionality

### React Component (Full)
- ✅ All features from HTML test
- ✅ Merge tags system
- ✅ TypeScript types
- ✅ Save/export callbacks
- ✅ Program theme customization
- ✅ Global header/footer
- ✅ Full integration ready

---

## Quick Visual Test Checklist

Once the builder loads, verify:

- [ ] **Left Sidebar** - Shows blocks panel
- [ ] **Center Canvas** - Gray background with white email canvas
- [ ] **Right Sidebar** - Shows Style Manager and Traits
- [ ] **Top Toolbar** - Shows view, undo/redo, export buttons
- [ ] **Loyalty Category** - Appears in block list with custom blocks
- [ ] **Drag & Drop** - Can drag Points Balance block to canvas
- [ ] **Edit Text** - Click text and type to edit
- [ ] **Export** - Click code icon, see HTML output
- [ ] **Mobile View** - Click mobile icon, canvas shrinks
- [ ] **No Errors** - Check browser console (F12) for errors

---

## Expected Output

### When you drag "Points Balance" block:
```
┌─────────────────────────────┐
│   Your Points Balance       │
│                             │
│        88,826              │
│        Points              │
└─────────────────────────────┘
```

### When you drag "Reward Rail" block:
```
┌────────────────────────────────────────────┐
│  Featured Rewards                          │
│                                            │
│  ┌────┐  ┌────┐  ┌────┐                  │
│  │ 🎁 │  │ 💳 │  │ 👕 │                  │
│  │2000│  │5000│  │8000│                  │
│  └────┘  └────┘  └────┘                  │
└────────────────────────────────────────────┘
```

---

## Troubleshooting

### "Cannot find module 'grapesjs'"
```bash
npm install grapesjs grapesjs-preset-newsletter
```

### "Port 8080 already in use"
```bash
# Use different port
npx http-server public -p 9000 -o
```

### "Blocks not showing"
- Refresh the page
- Check browser console for errors
- Make sure you're looking in the "Loyalty" category

### "Can't export HTML"
- Click the `</>` icon in the top toolbar
- If missing, the export button should be on the right side of the toolbar

---

## Performance Notes

- **Load time:** ~2-3 seconds for GrapeJS to initialize
- **Block drag:** Instant
- **Export:** ~1 second for small templates
- **Browser:** Works best in Chrome/Edge (Chromium)

---

## Next Steps After Testing

Once you've verified it works:

1. ✅ **Integrate into your admin** - Import the React component
2. ✅ **Connect backend** - Implement save API endpoint
3. ✅ **Add real data** - Replace mock data with Postgres queries
4. ✅ **Configure themes** - Set up per-client color schemes
5. ✅ **Test Postmark** - Send real emails

---

## Need Help?

**Common issues:**
- Check `PERK_EMAIL_BUILDER_README.md` for full documentation
- See browser console (F12) for error messages
- Verify all npm packages are installed

**Questions about:**
- Custom blocks → See `src/react-email-builder/blocks/`
- Merge tags → See `PERK_EMAIL_BUILDER_README.md` lines 400-500
- Integration → See `QUICK_START.md`

---

🎉 **Happy testing!**
