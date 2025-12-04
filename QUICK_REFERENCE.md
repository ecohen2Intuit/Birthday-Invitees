# Quick Reference Card - Birthday Invitees Interview

## ⏱️ Time Allocation
- **Part A (Algorithm):** 25-30 min
- **Part B (React):** 15 min
- **Total:** 45-60 min

---

## 📝 Part A: Algorithm Questions

| Question | Time | What to Look For |
|----------|------|------------------|
| Q1: What does it do? | 5 min | Understanding of business logic |
| Q2: Code quality? | 5 min | Critical thinking, identifies issues |
| Q3: Complexity? | 5 min | **O(n²×m)** time, **O(n)** space |
| Q4: Optimize it | 10 min | Uses Set, O(n+m) solution |
| Q5: New complexity? | 3 min | **O(n+m)** time, **O(k)** space |

### 🔑 Key Insight
**Call history is sorted descending** (don't tell unless they ask!)

### ✅ Optimal Solution Pattern
```javascript
const recentCallers = new Set();
for (call of call_history) {
  if (call.unix_time < cutoff) break; // Early exit!
  recentCallers.add(call.phone_number);
}
return phone_contacts.filter(c => recentCallers.has(c.phone_number));
```

---

## 🎨 Part B: React Implementation

### Must-Haves
✅ Display invitees list  
✅ Checkboxes that work  
✅ Track selected state  
✅ "Send" button  
✅ Loading state  
✅ Success/error message  

### Common Mistakes
❌ Direct state mutation  
❌ No loading state  
❌ Missing keys in list  
❌ Infinite loops  
❌ Not disabling button  

---

## 🎯 Scoring Cheat Sheet

| Score | Meaning | Indicators |
|-------|---------|----------|
| 90-100 | Strong Yes | Optimal algo + clean React + good UX |
| 80-89 | Yes | Good solution, minor issues |
| 70-79 | Maybe | Partial completion or buggy |
| 60-69 | Weak | Struggles with fundamentals |
| <60 | No | Can't complete basics |

---

## 💬 Helpful Hints (if stuck >2 min)

**Algorithm stuck?**
> "What data structure gives you O(1) lookups?"

**React state stuck?**
> "What changes when the user clicks a checkbox?"

**Async stuck?**
> "How do we handle Promises in React?"

**Loading state stuck?**
> "What should the button show while waiting?"

---

## 🚩 Red Flags

- Can't explain their code
- Doesn't test as they go
- Never asks questions
- Defensive about mistakes
- Copies without understanding

---

## 📂 Files Cheat Sheet

| File | Purpose |
|------|---------|
| `src/birthdayInvitees.js` | Original code (Part A) |
| `src/components/BirthdayInvitees.jsx` | Starter (Part B) |
| `birthday-app/SOLUTION.jsx` | Your reference answer |
| `EVALUATION_RUBRIC.md` | Score here |

---

## ✅ Pre-Interview Checklist

- [ ] React app running at localhost:5173
- [ ] Browser open and working
- [ ] Rubric ready for notes
- [ ] Solution.jsx open in separate window
- [ ] Timer ready
- [ ] Screen sharing tested

---

## 🎓 What Makes a Great Answer?

### Part A
- Identifies O(n²×m) complexity
- **Asks if data is sorted**
- Uses Set for O(1) lookups
- Breaks early on sorted data
- Extracts magic numbers

### Part B  
- Thoughtful state design (Set vs Array)
- Proper async/await
- All loading/error states
- Button disabled correctly
- Clean, readable code

---

## ⏰ Time Check Points

**10 min:** Should be on Q3 (complexity)  
**20 min:** Should be coding optimization  
**30 min:** Switch to Part B  
**40 min:** Should be working on "Send" button  
**45 min:** Wrapping up

---

## 🗣️ Good Follow-up Questions

1. "How would you test this?"
2. "What about 10,000 contacts?"
3. "How would you add accessibility?"
4. "What if we needed multiple time ranges?"

---

**Remember:** Focus on thought process > perfect code!

Print this page for quick reference during the interview.

