# Perk Email Builder

A modern, open-source email builder built with **Next.js 16**, **React 19**, and **GrapeJS** for loyalty platforms.

## Features

- Drag-and-drop email editor powered by GrapeJS
- Custom loyalty blocks (Points Balance, Tier Status, Reward Rail, Receipt Summary, Referral Link)
- Newsletter preset blocks for professional emails
- Export to HTML with inline CSS
- Optimized for Vercel deployment
- TypeScript support

## Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the homepage.

Navigate to [http://localhost:3000/email-builder](http://localhost:3000/email-builder) to access the email builder.

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Deploy to Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tgauss/perk-email-editor)

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

See [VERCEL_DEPLOYMENT_GUIDE.md](./VERCEL_DEPLOYMENT_GUIDE.md) for detailed deployment instructions.

## Project Structure

```
perk-email-builder/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── email-builder/
│       └── page.tsx        # Email builder page
├── public/                 # Static assets
├── next.config.js          # Next.js configuration
├── vercel.json            # Vercel deployment config
└── package.json           # Dependencies
```

## Technology Stack

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **GrapeJS** - Open-source email builder (MIT license)
- **TypeScript** - Type safety
- **Vercel** - Deployment platform

## Custom Blocks

The email builder includes custom loyalty blocks:

1. **Points Balance** - Display user's current points
2. **Tier Status** - Show membership tier with progress bar
3. **Reward Rail** - Horizontal scrolling reward carousel
4. **Receipt Summary** - Transaction details and line items
5. **Referral Link** - Custom referral link with CTA

## Development

This is a Next.js project using the App Router. The email builder runs entirely client-side to avoid SSR issues with GrapeJS.

### Key Files

- `app/email-builder/page.tsx` - Main email builder component
- `next.config.js` - Transpile configuration for GrapeJS
- `vercel.json` - Vercel deployment settings

## License

MIT

## Support

For issues and feature requests, please create an issue on GitHub.
