#!/bin/bash

# Migration script to push code to new independent repository
# Run this from your local machine after cloning the current repo

echo "🚀 Migrating to new independent repository..."
echo ""

# Show current remotes
echo "Current remotes:"
git remote -v
echo ""

# Add new remote
echo "Adding new remote: https://github.com/tgauss/perk-emailer.git"
git remote add new-origin https://github.com/tgauss/perk-emailer.git

# Push the main working branch
echo ""
echo "Pushing branch: claude/explore-nextjs-conversion-011CUsh4g2eEboH5PorhiX2Z"
git push new-origin claude/explore-nextjs-conversion-011CUsh4g2eEboH5PorhiX2Z:main

# Remove old origin and rename new one
echo ""
echo "Updating default remote to new repository..."
git remote remove origin
git remote rename new-origin origin

# Update local branch to track new remote
git branch -u origin/main

echo ""
echo "✅ Migration complete!"
echo ""
echo "Your repository is now independent at: https://github.com/tgauss/perk-emailer"
echo ""
echo "Next steps:"
echo "1. Verify on GitHub: https://github.com/tgauss/perk-emailer"
echo "2. Deploy to Vercel: https://vercel.com/new"
echo ""
