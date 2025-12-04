// input structure

import call_history_data from "./call_history.json" with { type: "json" };
import phone_contacts_data from "./phone_contacts.json" with { type: "json" };

// const call_history = [
//   {
//     name: "Meir",

//     // let put here yesterdays tiem

//     unix_time: Date.now() - 24 * 60 * 60 * 1000,

//     phone_number: "0546789012",
//   },
// ];

// const phone_contacts = [
//   {
//     name: "Meir",

//     phone_number: "0546789012",
//   },
// ];

const call_history = call_history_data;
const phone_contacts = phone_contacts_data;

function print_birthday_invitees(phone_contacts, call_history) {
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

  console.log("My invitees are:");

  for (let i = 0; i < invitees.length; i++) {
    const invitee = invitees[i];

    console.log(`${i} - ${invitee.name}, ${invitee.phone}`);
  }
}

print_birthday_invitees(phone_contacts, call_history);
