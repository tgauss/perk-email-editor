#!/bin/bash

echo "🚀 Pushing code to new independent repository..."
echo ""

# Add new remote (if not already added)
if ! git remote get-url new-origin &> /dev/null; then
    echo "Adding new remote..."
    git remote add new-origin https://github.com/tgauss/perk-emailer.git
fi

# Push current branch as main to new repo
echo "Pushing branch to new repository..."
git push new-origin claude/explore-nextjs-conversion-011CUsh4g2eEboH5PorhiX2Z:main

echo ""
echo "✅ Done! Your code is now at https://github.com/tgauss/perk-emailer"
echo ""
echo "Next: Deploy on Vercel"
echo "1. Go to https://vercel.com/new"
echo "2. Import: tgauss/perk-emailer"
echo "3. Branch: main"
echo "4. Click Deploy"
echo ""
