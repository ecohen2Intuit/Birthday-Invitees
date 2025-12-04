# Frontend Interview Challenge - Birthday Invitees

## Overview
This is a two-part challenge to build an interactive birthday invitation system.

**Total Time: 15 minutes**

## Background
We have a function that analyzes phone contacts and call history to determine who should be invited to a birthday party. Anyone who has been called in the last 3 months is considered a potential invitee.

The data is already loaded and the function `getBirthdayInvitees()` returns the list of people to invite.

## Your Task

### Part 1: Display Invitees with Selection (8-10 minutes)

Build an interface to display and select invitees:

1. **Display the list** of birthday invitees
   - Show each person's name and phone number
   
2. **Add selection functionality**
   - Add a checkbox next to each invitee
   - Allow users to select/deselect individual invitees
   
3. **Show selection count**
   - Display how many invitees are currently selected
   - Bonus: Add "Select All" / "Deselect All" functionality

4. **Make it presentable**
   - Add basic styling to make it look clean and professional

### Part 2: Send Invitations (5-7 minutes)

Add the ability to send invitations:

1. **Add a "Send Invitations" button**
   - Should only send to selected invitees
   - Button should be disabled if no invitees are selected

2. **Handle the async operation**
   - Use the provided `sendInvitations()` API function from `api/invitationsApi.js`
   - Show a loading state while the request is in progress
   - Disable the button while loading

3. **Show feedback**
   - Display a success message when invitations are sent
   - Display an error message if the API call fails

## Files You'll Work With

- `src/components/BirthdayInvitees.jsx` - Main component (start here!)
- `src/api/invitationsApi.js` - Mock API for sending invitations
- `src/utils/birthdayInvitees.js` - Utility function (already implemented)

## Getting Started

The React app is already running at `http://localhost:5173/`

Open `src/components/BirthdayInvitees.jsx` and start implementing!

## What We're Looking For

- **State management** - Using React hooks appropriately
- **Component structure** - Clean, readable code
- **User experience** - Loading states, disabled states, feedback messages
- **Problem-solving** - How you approach the task
- **Code quality** - Naming, organization, best practices

## Bonus Points (if time permits)

- TypeScript types
- Accessibility (ARIA labels, keyboard navigation)
- Animations/transitions
- Error boundary
- Form validation

## Notes

- Focus on functionality first, styling second
- You can use inline styles or create a separate CSS file
- Feel free to ask clarifying questions
- You can look up React documentation if needed
- Don't worry about making it pixel-perfect

Good luck! 🎉

