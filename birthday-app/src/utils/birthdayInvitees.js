// Utility function to get birthday invitees
// Returns array of people who have been called in the last 3 months

export function getBirthdayInvitees(phone_contacts, call_history) {
  const invitees = [];

  for (let i = 0; i < phone_contacts.length; i++) {
    const phone_contact = phone_contacts[i];

    for (let j = 0; j < call_history.length; j++) {
      const call = call_history[j];

      let is_call_in_last_3_month = false;

      if (Date.now() - call.unix_time < 7776000000) {
        is_call_in_last_3_month = true;
      }

      if (
        is_call_in_last_3_month &&
        call.phone_number === phone_contact.phone_number
      ) {
        let invitee_exists = false;

        for (let k = 0; k < invitees.length; k++) {
          if (invitees[k].name === phone_contact.name) {
            invitee_exists = true;

            break;
          }
        }

        if (!invitee_exists) {
          invitees.push({
            name: phone_contact.name,
            phone: phone_contact.phone_number,
          });
        }
      }
    }
  }

  return invitees;
}
