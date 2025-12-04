# Interviewer Guide - Birthday Invitees Challenge

## Overview
This is a comprehensive frontend interview combining algorithmic thinking with practical React implementation.

**Total Time: 45-60 minutes**
- Part A: Algorithm Review (25-30 min)
- Part B: React Implementation (15 min)

---

## Part A: Algorithm Review (25-30 minutes)

### Setup
Show the candidate `src/birthdayInvitees.js` (the original code with the nested loops).

### Questions to Ask

#### Question 1: What does this code do? (5 min)
**Looking for:**
- Clear explanation of the business logic
- Understanding of the 3-month filter
- Recognition of duplicate prevention logic

#### Question 2: What do you think about this code? (5 min)
**Looking for:**
- Code quality observations (readability, maintainability)
- Identification of magic numbers (7776000000)
- Variable naming comments
- Code structure critique

#### Question 3: Runtime & Memory Complexity (5 min)
**Expected Answer:**
- **Runtime:** O(n × m × k) where:
  - n = phone_contacts length
  - m = call_history length  
  - k = invitees length (for duplicate check)
  - Worst case: O(n²×m) if everyone is an invitee
- **Memory:** O(n) for the invitees array

**Bonus points if they ask:**
- "Is the call_history sorted?" (YES, descending by unix_time - but don't tell unless asked)

#### Question 4: Rewrite to be optimized (10-12 min)
**Optimal Solution:**
```javascript
function getBirthdayInvitees(phone_contacts, call_history) {
  const THREE_MONTHS = 90 * 24 * 60 * 60 * 1000; // or 7776000000
  const cutoffTime = Date.now() - THREE_MONTHS;
  
  // Create a Set of phone numbers from recent calls
  const recentCallers = new Set();
  
  for (const call of call_history) {
    // Since call_history is sorted descending, we can break early
    if (call.unix_time < cutoffTime) {
      break; // All remaining calls are older than 3 months
    }
    recentCallers.add(call.phone_number);
  }
  
  // Filter contacts who have called recently
  return phone_contacts
    .filter(contact => recentCallers.has(contact.phone_number))
    .map(contact => ({
      name: contact.name,
      phone: contact.phone_number
    }));
}
```

**Key Optimizations:**
1. Use Set for O(1) lookups instead of array iteration
2. Early break optimization (if they asked about sorting)
3. Extract magic number to constant
4. Use filter/map instead of nested loops
5. No manual duplicate checking needed (phone_contacts shouldn't have dupes)

#### Question 5: What's the new complexity? (2-3 min)
**Expected Answer:**
- **Runtime:** O(m + n) where m = call_history, n = phone_contacts
  - O(m) to build the Set (with early break, could be less)
  - O(n) to filter contacts
- **Memory:** O(k) where k = unique phone numbers in recent calls

---

## Part B: React Implementation (15 minutes)

### Setup
1. Navigate to `http://localhost:5173/`
2. Open `src/components/BirthdayInvitees.jsx`
3. Share `INTERVIEW_INSTRUCTIONS.md` with candidate
4. Let them read it for 1 minute

### What They Need to Implement

#### Part 1: Display & Selection (8-10 min)
- Render list of invitees
- Add checkboxes
- Track selected state
- Show selection count
- Bonus: Select All button

#### Part 2: API Call (5-7 min)
- "Send Invitations" button
- Loading state
- Success/error messages
- Use the mock API from `src/api/invitationsApi.js`

### Available Resources
- Mock API: `src/api/invitationsApi.js`
- Utility function: `src/utils/birthdayInvitees.js`
- Reference solution: `birthday-app/SOLUTION.jsx` (for interviewer only)

### Tips for Interviewers

**Do:**
- ✅ Let them think through the approach first
- ✅ Allow them to look up React documentation
- ✅ Give hints if they're stuck for >2 minutes
- ✅ Ask them to explain their choices
- ✅ Note their debugging process

**Don't:**
- ❌ Jump in immediately with solutions
- ❌ Expect pixel-perfect styling
- ❌ Penalize for syntax errors
- ❌ Rush them through

### Suggested Hints (if stuck)

**Stuck on state management:**
> "What data do you need to track? Think about what changes when a user interacts with the UI."

**Stuck on checkboxes:**
> "How would you know if a checkbox should be checked or unchecked?"

**Stuck on async:**
> "The API returns a Promise. How do we typically handle those in React?"

**Stuck on loading state:**
> "What should the user see while waiting for the API? What should change in the UI?"

---

## Evaluation

Use `EVALUATION_RUBRIC.md` to score the candidate.

### Scoring Distribution
- **Part A (Algorithm)**: 40% of technical assessment
- **Part B (React)**: 60% of technical assessment

### What Success Looks Like

**Strong Candidate:**
- Optimizes to O(n+m) in Part A
- Asks about data structure assumptions
- Completes both React parts
- Clean, working code
- Good UX considerations (loading, disabled states)

**Good Candidate:**
- Gets close to optimal solution or needs minor hints
- Completes React Part 1 fully, attempts Part 2
- Working code with some rough edges
- Shows React fundamentals

**Borderline:**
- Improves algorithm but not optimally
- Completes React Part 1 only
- Has bugs but demonstrates understanding
- Needs guidance on React patterns

**Not Ready:**
- Can't identify optimization opportunities
- Struggles with basic React concepts
- Can't complete Part 1 in 15 minutes
- Can't debug their own code

---

## Common Gotchas to Watch For

### Algorithm Part
- ❌ Doesn't extract magic numbers
- ❌ Doesn't think about data structure optimization
- ❌ Creates unnecessary nested loops
- ❌ Doesn't ask clarifying questions

### React Part
- ❌ Mutates state directly
- ❌ Doesn't handle loading/error states
- ❌ Creates infinite render loops
- ❌ Doesn't use keys in lists
- ❌ Forgets to disable button during loading

---

## Follow-up Discussion Questions (if time allows)

1. "How would you test this component?"
2. "What if we had 10,000 contacts? Any performance concerns?"
3. "How would you make this accessible?"
4. "What if the requirements changed to support multiple time ranges (1 month, 3 months, 6 months)?"
5. "How would you handle pagination if there were hundreds of invitees?"

---

## Files Structure

```
Birthday-Invitees/
├── INTERVIEW_INSTRUCTIONS.md    ← Give to candidate
├── INTERVIEWER_GUIDE.md         ← You are here
├── EVALUATION_RUBRIC.md         ← Use for scoring
└── birthday-app/
    ├── SOLUTION.jsx             ← Reference answer
    └── src/
        ├── birthdayInvitees.js  ← Part A: Original code to optimize
        ├── utils/
        │   └── birthdayInvitees.js  ← Utility function
        ├── components/
        │   └── BirthdayInvitees.jsx ← Part B: Starter file
        ├── api/
        │   └── invitationsApi.js    ← Mock API
        ├── call_history.json
        └── phone_contacts.json
```

---

## Quick Start Checklist

Before the interview:
- [ ] React app is running (`npm run dev`)
- [ ] Browser open to `http://localhost:5173/`
- [ ] `EVALUATION_RUBRIC.md` printed or ready
- [ ] `SOLUTION.jsx` open in separate tab for reference
- [ ] Timer ready

During the interview:
- [ ] Screen share set up
- [ ] Candidate can access the code
- [ ] Start with Part A (algorithm)
- [ ] Take notes on rubric
- [ ] Transition to Part B at 30-minute mark
- [ ] Keep time but don't rush unnecessarily

After the interview:
- [ ] Complete evaluation rubric
- [ ] Write summary notes
- [ ] Make hire/no-hire recommendation

---

Good luck! This should give you a comprehensive view of the candidate's algorithm thinking, React skills, and problem-solving approach.

