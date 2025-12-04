# 🚀 Deployment Checklist

## ✅ Completed Setup

- [x] SOLUTION.jsx added to .gitignore (won't be deployed)
- [x] App.jsx uses BirthdayInvitees starter component
- [x] Vite config updated for GitHub Pages
- [x] GitHub Actions workflow created
- [x] Production build tested successfully
- [x] Deployment documentation created

## 📦 What's Ready

**Will be deployed (for candidates):**
- ✅ React app with starter component
- ✅ Mock data (14 invitees)
- ✅ Mock API for testing
- ✅ Interview instructions
- ✅ All utility functions

**Will NOT be deployed (kept private):**
- ❌ SOLUTION.jsx (in .gitignore)
- ℹ️ Evaluation rubric (you decide - see below)
- ℹ️ Interviewer guide (you decide - see below)

## 🎯 Next Steps

### 1. Choose What to Share

**Option A: Share Everything (Transparent)**
```bash
# Include all documentation in the repository
git add .
git commit -m "Add interview project"
git push origin main
```
Candidates can see the evaluation criteria and instructions.

**Option B: Keep Evaluation Private**
```bash
# Add evaluation docs to .gitignore
echo "EVALUATION_RUBRIC.md" >> .gitignore
echo "INTERVIEWER_GUIDE.md" >> .gitignore
echo "QUICK_REFERENCE.md" >> .gitignore

# Only commit candidate-facing files
git add .github/
git add birthday-app/
git add INTERVIEW_INSTRUCTIONS.md
git add DEPLOYMENT.md
git add README.md
git commit -m "Add interview project"
git push origin main
```
Candidates only see instructions, not how they're evaluated.

### 2. Enable GitHub Pages

1. Go to: `https://github.com/YOUR-USERNAME/Birthday-Invitees/settings/pages`
2. Under **Source**, select: **GitHub Actions**
3. Save

### 3. Wait for Deployment

- Go to the **Actions** tab
- Watch the deployment progress
- Once complete, your app will be live at:
  ```
  https://YOUR-USERNAME.github.io/Birthday-Invitees/
  ```

### 4. Test the Deployed App

Visit the URL and verify:
- [ ] App loads without errors
- [ ] Shows "Found 14 people to invite"
- [ ] No SOLUTION.jsx accessible
- [ ] Mock API works
- [ ] JSON data loads correctly

### 5. Share with Candidates

Give them:
```
App URL: https://YOUR-USERNAME.github.io/Birthday-Invitees/
Repo URL: https://github.com/YOUR-USERNAME/Birthday-Invitees
Instructions: See INTERVIEW_INSTRUCTIONS.md
```

## 🔒 Security Check

Before pushing, verify SOLUTION.jsx is ignored:

```bash
cd birthday-app
git status --ignored | grep SOLUTION
# Should show: src/SOLUTION.jsx (ignored)
```

If SOLUTION.jsx appears in `git status` without "(ignored)", stop and fix .gitignore!

## 🛠️ Updating After Deployment

To make changes:

```bash
# Make your edits
git add .
git commit -m "Update interview materials"
git push origin main

# GitHub Actions will auto-deploy in ~2 minutes
```

## 🔄 Alternative: Deploy to Vercel (Faster)

If you want instant deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd birthday-app
vercel --prod

# Get your URL (e.g., birthday-app.vercel.app)
```

Vercel also respects .gitignore, so SOLUTION.jsx won't be deployed.

## 📝 Important Notes

1. **SOLUTION.jsx is local only** - it's in .gitignore and won't be pushed to GitHub
2. **Keep it that way** - never remove it from .gitignore
3. **Candidates fork the repo** - they'll have the starter code, not the solution
4. **Auto-deploys on push** - every commit to main triggers a new deployment

## ⚠️ Before Going Live

Double-check:
- [ ] SOLUTION.jsx is in .gitignore
- [ ] Tested the production build locally
- [ ] App.jsx imports BirthdayInvitees (not SOLUTION)
- [ ] All sensitive evaluation materials handled appropriately
- [ ] README.md updated with your GitHub username

## 🎉 You're Ready!

Your interview app is ready to deploy. Just push to GitHub and enable Pages!

---

**Need help?** See `DEPLOYMENT.md` for detailed instructions and troubleshooting.

