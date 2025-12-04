import { useState } from 'react';
import { getBirthdayInvitees } from '../utils/birthdayInvitees';
import call_history from '../call_history.json';
import phone_contacts from '../phone_contacts.json';

/**
 * INTERVIEW CHALLENGE - Part 1 & 2
 * 
 * Part 1 (8-10 minutes):
 * - Display the list of birthday invitees
 * - Add a checkbox next to each invitee to mark them as selected
 * - Show a count of how many invitees are selected
 * - Style it to look presentable
 * 
 * Part 2 (5-7 minutes):
 * - Add a "Send Invitations" button
 * - When clicked, simulate an API call to send invitations (use setTimeout)
 * - Show a loading state while the API call is in progress
 * - Show a success message when complete
 * - Only send invitations to selected invitees
 */

function BirthdayInvitees() {
  // Get the list of people to invite
  const invitees = getBirthdayInvitees(phone_contacts, call_history);

  // TODO: Add your state management here

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Birthday Party Invitees</h1>
      
      {/* TODO: Display the invitees list here */}
      <div>
        <p>Found {invitees.length} people to invite</p>
        {/* Add your implementation here */}
      </div>

      {/* TODO: Add "Send Invitations" button and logic */}
    </div>
  );
}

export default BirthdayInvitees;
