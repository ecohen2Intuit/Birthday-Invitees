# Deployment Instructions

## GitHub Pages Deployment

This interview app is set up to automatically deploy to GitHub Pages.

### One-Time Setup

1. **Push the repository to GitHub:**
   ```bash
   git add .
   git commit -m "Setup interview project for deployment"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

3. **Wait for deployment:**
   - The GitHub Action will automatically run
   - Check the **Actions** tab to see the deployment progress
   - Once complete, your app will be live at:
     `https://YOUR-USERNAME.github.io/Birthday-Invitees/`

### Automatic Deployments

Every time you push to the `main` branch, the app will automatically:
1. Install dependencies
2. Build the production version
3. Deploy to GitHub Pages

**Note:** The SOLUTION.jsx file is in `.gitignore` and will NOT be deployed or visible to candidates.

### Manual Deployment (Alternative)

If you prefer to deploy manually without GitHub Actions:

```bash
cd birthday-app

# Build the production version
npm run build

# Install gh-pages package (first time only)
npm install -D gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

### Verifying Deployment

After deployment, verify:
- ✅ App loads at your GitHub Pages URL
- ✅ Invitees list shows "Found 14 people to invite"
- ✅ SOLUTION.jsx is NOT accessible
- ✅ No console errors

### Sharing with Candidates

Give candidates the URL:
```
https://YOUR-USERNAME.github.io/Birthday-Invitees/
```

They can:
- View the starter app
- Clone the repository
- Complete the challenge
- Deploy their solution to their own fork

### Security Note

The SOLUTION.jsx file is:
- ✅ Added to `.gitignore`
- ✅ NOT committed to the repository
- ✅ NOT deployed to GitHub Pages
- ✅ Only exists in your local environment

Keep it that way! When sharing the repository, candidates won't have access to the solution.

### Troubleshooting

**Build fails?**
- Check that all imports use `with { type: "json" }` for JSON files
- Ensure all dependencies are in package.json
- Check the Actions tab for specific errors

**Page shows 404?**
- Verify GitHub Pages is enabled in Settings
- Check that `base: '/Birthday-Invitees/'` matches your repo name in vite.config.js
- Wait a few minutes for DNS propagation

**Assets not loading?**
- Ensure vite.config.js has the correct `base` path
- Check browser console for 404 errors
- Verify the build output in the Actions logs

### Alternative Platforms

You can also deploy to:

**Vercel:**
```bash
npm i -g vercel
cd birthday-app
vercel
```

**Netlify:**
```bash
npm i -g netlify-cli
cd birthday-app
npm run build
netlify deploy --prod --dir=dist
```

**Cloudflare Pages:**
- Connect your GitHub repo in Cloudflare dashboard
- Build command: `cd birthday-app && npm run build`
- Publish directory: `birthday-app/dist`

All these platforms respect `.gitignore`, so SOLUTION.jsx won't be deployed.

